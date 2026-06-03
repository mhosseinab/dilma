import logging
from datetime import datetime, timezone

import jwt
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy import select

from ..dependencies import DbDep, require_staff
from ..models.user import AuthToken, User
from ..schemas.auth import (
    MobileAuthRequest,
    RefreshRequest,
    RefreshResponse,
    SMSTokenResponse,
    TokenResponse,
    UserOut,
    VerifyAuthRequest,
)
from ..services.jwt import create_token_pair, decode_refresh_token
from ..services.sms import send_auth_sms_token

logger = logging.getLogger(__name__)
router = APIRouter()

PAGE_SIZE = 24


@router.post("/sms/get_token", response_model=SMSTokenResponse)
async def get_sms_token(body: MobileAuthRequest, db: DbDep):
    result = await db.execute(select(User).where(User.mobile == body.mobile))
    user = result.scalar_one_or_none()
    if user is None:
        user = User(mobile=body.mobile, password="")
        db.add(user)
        await db.flush()

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"success": False, "error": "Inactive User"},
        )

    auth_result = await db.execute(select(AuthToken).where(AuthToken.user_id == user.id))
    auth = auth_result.scalar_one_or_none()
    created = auth is None
    if created:
        auth = AuthToken(user_id=user.id)
        db.add(auth)
        await db.flush()

    assert auth is not None
    if created or auth.is_expired or not auth.token1:
        auth.token1 = AuthToken.generate_numeric_token(length=4)
        auth.failed_attempts = 0
        auth.updatedAt = datetime.now(timezone.utc)
        token = auth.token1
        assert token is not None
        success = send_auth_sms_token(user.mobile, token, "verify")
        if not success:
            raise HTTPException(
                status_code=status.HTTP_424_FAILED_DEPENDENCY,
                detail={"success": False, "error": "SMS failed"},
            )

    await db.commit()
    return SMSTokenResponse(success=True, uuid=auth.uid, expires_on=auth.expires_on.timestamp())


@router.post("/sms/verify_token", response_model=TokenResponse)
async def verify_sms_token(body: VerifyAuthRequest, db: DbDep):
    result = await db.execute(
        select(AuthToken).where(AuthToken.uid == body.uuid).join(AuthToken.user)
    )
    auth = result.scalar_one_or_none()
    if auth is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail={"uuid": "invalid uuid"}
        )

    if not auth.is_valid(auth.token1, body.token):
        await db.commit()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail={"token": "invalid token"}
        )

    user = auth.user
    user.last_login = datetime.now(timezone.utc)
    await db.commit()

    access_token, refresh_token = create_token_pair(user.id)
    return TokenResponse(
        success=True,
        access=access_token,
        refresh=refresh_token,
        user=UserOut.model_validate(user),
    )


@router.post("/token/refresh/", response_model=RefreshResponse)
async def refresh_token(body: RefreshRequest, db: DbDep):
    try:
        payload = decode_refresh_token(body.refresh)
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token"
        )

    user_id: int = payload["user_id"]  # type: ignore[assignment]  # pyright: ignore[reportAssignmentType]
    result = await db.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()
    if user is None or not user.is_active:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    access_token, new_refresh = create_token_pair(user_id)
    return RefreshResponse(access=access_token, refresh=new_refresh)


@router.get("/users/")
async def list_users(
    db: DbDep,
    _staff=Depends(require_staff),
    name: str | None = Query(None),
    o: str | None = Query(None),
    page: int = Query(1, ge=1),
):
    query = select(User).where(User.is_superuser.is_(False), User.is_staff.is_(False))
    if name:
        query = query.where(User.mobile.ilike(f"%{name}%") | User.first_name.ilike(f"%{name}%"))

    order_map = {
        "is_active": User.is_active,
        "-is_active": User.is_active.desc(),
        "role": User.role,
        "-role": User.role.desc(),
        "date_joined": User.date_joined,
        "-date_joined": User.date_joined.desc(),
        "last_login": User.last_login,
        "-last_login": User.last_login.desc(),
    }
    if o and o in order_map:
        query = query.order_by(order_map[o])

    count_result = await db.execute(
        select(User.id).where(User.is_superuser.is_(False), User.is_staff.is_(False))
    )
    total = len(count_result.all())

    query = query.offset((page - 1) * PAGE_SIZE).limit(PAGE_SIZE)
    result = await db.execute(query)
    users = result.scalars().all()

    return {
        "count": total,
        "next": None,
        "previous": None,
        "results": [UserOut.model_validate(u) for u in users],
    }

from typing import Annotated, AsyncGenerator

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from .services.jwt import decode_access_token

bearer_scheme = HTTPBearer(auto_error=False)

# SessionLocal is set by main.py after engine creation to avoid circular imports
_session_factory = None


def set_session_factory(factory):
    global _session_factory
    _session_factory = factory


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    assert _session_factory is not None, "DB not initialised"
    async with _session_factory() as session:
        yield session


DbDep = Annotated[AsyncSession, Depends(get_db)]


async def get_optional_user(
    credentials: Annotated[HTTPAuthorizationCredentials | None, Depends(bearer_scheme)],
    db: DbDep,
):
    if not credentials:
        return None
    try:
        payload = decode_access_token(credentials.credentials)
    except jwt.PyJWTError:
        return None
    from .models.user import User

    result = await db.execute(select(User).where(User.id == payload["user_id"]))
    return result.scalar_one_or_none()


async def get_current_user(
    credentials: Annotated[HTTPAuthorizationCredentials | None, Depends(bearer_scheme)],
    db: DbDep,
):
    if not credentials:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    try:
        payload = decode_access_token(credentials.credentials)
    except jwt.PyJWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    from .models.user import User

    result = await db.execute(select(User).where(User.id == payload["user_id"]))
    user = result.scalar_one_or_none()
    if user is None or not user.is_active:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    return user


async def require_staff(user=Depends(get_current_user)):
    if not user.is_staff:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)
    return user

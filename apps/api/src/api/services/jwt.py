from datetime import datetime, timedelta, timezone
from uuid import uuid4

import jwt

from ..config import settings


def _make_payload(token_type: str, user_id: int, lifetime: timedelta) -> dict[str, object]:
    now = datetime.now(timezone.utc)
    return {
        "token_type": token_type,
        "exp": now + lifetime,
        "iat": now,
        "jti": str(uuid4()),
        "user_id": user_id,
    }


def create_access_token(user_id: int) -> str:
    payload = _make_payload("access", user_id, settings.ACCESS_TOKEN_LIFETIME)
    return jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")


def create_refresh_token(user_id: int) -> str:
    payload = _make_payload("refresh", user_id, settings.REFRESH_TOKEN_LIFETIME)
    return jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")


def create_token_pair(user_id: int) -> tuple[str, str]:
    return create_access_token(user_id), create_refresh_token(user_id)


def decode_token(token: str) -> dict[str, object]:
    return jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])


def decode_access_token(token: str) -> dict[str, object]:
    payload = decode_token(token)
    if payload.get("token_type") != "access":
        raise jwt.InvalidTokenError("Not an access token")
    return payload


def decode_refresh_token(token: str) -> dict[str, object]:
    payload = decode_token(token)
    if payload.get("token_type") != "refresh":
        raise jwt.InvalidTokenError("Not a refresh token")
    return payload

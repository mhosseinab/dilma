from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, field_validator


class MobileAuthRequest(BaseModel):
    mobile: str

    @field_validator("mobile")
    @classmethod
    def validate_mobile(cls, v: str) -> str:
        import re

        if not re.match(r"^(98|09)\d{9,10}$", v):
            raise ValueError("Mobile number is invalid")
        return v


class VerifyAuthRequest(BaseModel):
    uuid: UUID
    token: str


class UserOut(BaseModel):
    id: int
    uid: UUID
    mobile: str
    email: str | None
    role: int
    first_name: str
    last_name: str
    is_staff: bool
    is_active: bool
    date_joined: datetime
    last_login: datetime | None

    model_config = {"from_attributes": True}


class TokenResponse(BaseModel):
    success: bool
    access: str
    refresh: str
    user: UserOut


class SMSTokenResponse(BaseModel):
    success: bool
    uuid: UUID
    expires_on: float  # unix timestamp


class RefreshRequest(BaseModel):
    refresh: str


class RefreshResponse(BaseModel):
    access: str
    refresh: str

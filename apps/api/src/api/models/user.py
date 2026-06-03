import string
from datetime import datetime, timedelta, timezone
from typing import ClassVar
from uuid import UUID, uuid4

from sqlalchemy import (
    BigInteger,
    Boolean,
    DateTime,
    ForeignKey,
    Integer,
    SmallInteger,
    String,
)
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base, TimestampMixin


def _random_digits(length: int = 5) -> str:
    import secrets

    return "".join(secrets.choice(string.digits) for _ in range(length))


class User(Base, TimestampMixin):
    __tablename__: str = "account_user"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    password: Mapped[str] = mapped_column(String(128))
    last_login: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False)
    uid: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), unique=True, index=True, default=uuid4)
    email: Mapped[str | None] = mapped_column(
        String(254), unique=True, index=True, nullable=True, default=None
    )
    mobile: Mapped[str] = mapped_column(String(12), unique=True, index=True)
    role: Mapped[int] = mapped_column(SmallInteger, default=3)  # 3 = CUSTOMER
    first_name: Mapped[str] = mapped_column(String(150), default="")
    last_name: Mapped[str] = mapped_column(String(150), default="")
    is_staff: Mapped[bool] = mapped_column(Boolean, default=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    date_joined: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    ADMIN: ClassVar[int] = 1
    MANAGER: ClassVar[int] = 2
    CUSTOMER: ClassVar[int] = 3

    auth_token: Mapped["AuthToken | None"] = relationship(
        "AuthToken", back_populates="user", uselist=False
    )


class AuthToken(Base):
    __tablename__: str = "account_authtoken"

    EXP_IN_MINUTES: ClassVar[int] = 5
    MAX_FAILED_ATTEMPTS: ClassVar[int] = 5

    uid: Mapped[UUID] = mapped_column(
        PG_UUID(as_uuid=True), primary_key=True, default=uuid4, index=True
    )
    user_id: Mapped[int] = mapped_column(
        BigInteger, ForeignKey("account_user.id", ondelete="CASCADE")
    )
    token1: Mapped[str | None] = mapped_column(String(6), nullable=True)
    token2: Mapped[str | None] = mapped_column(String(6), nullable=True)
    failed_attempts: Mapped[int] = mapped_column(Integer, default=0)
    createdAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    updatedAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    user: Mapped["User"] = relationship("User", back_populates="auth_token")

    @staticmethod
    def generate_numeric_token(length: int = 4) -> str:
        return _random_digits(length)

    @property
    def is_expired(self) -> bool:
        now = datetime.now(timezone.utc)
        updated = (
            self.updatedAt.replace(tzinfo=timezone.utc)
            if self.updatedAt.tzinfo is None
            else self.updatedAt
        )
        return updated < now - timedelta(minutes=self.EXP_IN_MINUTES)

    @property
    def expires_on(self) -> datetime:
        updated = (
            self.updatedAt.replace(tzinfo=timezone.utc)
            if self.updatedAt.tzinfo is None
            else self.updatedAt
        )
        return updated + timedelta(minutes=self.EXP_IN_MINUTES)

    def is_valid(self, ref: str | None, txt: str) -> bool:
        if not ref or self.is_expired or self.failed_attempts > self.MAX_FAILED_ATTEMPTS:
            return False
        if ref == txt:
            self.failed_attempts = 0
            return True
        self.failed_attempts += 1
        return False

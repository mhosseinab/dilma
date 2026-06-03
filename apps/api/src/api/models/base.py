from sqlalchemy import DateTime, func
from sqlalchemy.orm import DeclarativeBase, mapped_column, MappedColumn


class Base(DeclarativeBase):
    pass


class TimestampMixin:
    createdAt: MappedColumn = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updatedAt: MappedColumn = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

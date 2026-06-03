from datetime import datetime
from uuid import UUID, uuid4

from sqlalchemy import (
    BigInteger,
    Boolean,
    Date,
    Float,
    ForeignKey,
    Integer,
    SmallInteger,
    String,
    Table,
    Column,
    Text,
)
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base, TimestampMixin
from .user import User

# M2M join table for DocCategory.items <-> DocType
doccategory_items = Table(
    "order_doccategory_items",
    Base.metadata,
    Column("doccategory_id", BigInteger, ForeignKey("order_doccategory.id"), primary_key=True),
    Column("doctype_id", BigInteger, ForeignKey("order_doctype.id"), primary_key=True),
)


class Language(Base):
    __tablename__ = "order_language"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(250))
    name_fa: Mapped[str] = mapped_column(String(250))
    is_source: Mapped[bool] = mapped_column(Boolean, default=True)
    is_destination: Mapped[bool] = mapped_column(Boolean, default=True)


class DocType(Base, TimestampMixin):
    __tablename__ = "order_doctype"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(250))
    type: Mapped[int] = mapped_column(SmallInteger, default=1)
    unit: Mapped[int] = mapped_column(SmallInteger)
    base_price: Mapped[int] = mapped_column(Integer)
    stamp_option: Mapped[int] = mapped_column(SmallInteger, default=1)
    pickup_option: Mapped[int] = mapped_column(SmallInteger, default=3)
    stamp_moj_price: Mapped[int] = mapped_column(Integer, default=0)
    stamp_mfa_price: Mapped[int] = mapped_column(Integer, default=0)

    VERIFICATION_NONE = 1
    VERIFICATION_MOJ = 2
    VERIFICATION_MFA = 3
    VERIFICATION_MOJ_MFA = 4

    PICKUP_INPERSON = 1
    PICKUP_PEYK = 2
    PICKUP_ONLINE = 3

    VERIFICATION_CHOICES = (
        (VERIFICATION_NONE, "None"),
        (VERIFICATION_MFA, "MFA"),
        (VERIFICATION_MOJ, "MOJ"),
        (VERIFICATION_MOJ_MFA, "MOJ + MFA"),
    )

    PICKUP_CHOICES = (
        (PICKUP_INPERSON, "In Person"),
        (PICKUP_PEYK, "Peyk"),
        (PICKUP_ONLINE, "Online"),
    )


class DocCategory(Base):
    __tablename__ = "order_doccategory"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(250))
    priority: Mapped[int] = mapped_column(SmallInteger, default=0)

    items: Mapped[list["DocType"]] = relationship("DocType", secondary=doccategory_items)


class Order(Base, TimestampMixin):
    __tablename__ = "order_order"

    ORDER_TYPE_OFFICIAL_TRANSLATION = 1
    ORDER_TYPE_CONTENT = 2
    ORDER_TYPE_SUBTITLE = 3
    ORDER_TYPE_PAPER = 4

    STATUS_NEW = 1
    STATUS_NOT_PAID = 2
    STATUS_PENDING = 3
    STATUS_IN_PROGRESS = 4
    STATUS_DONE = 5

    DELIVERY_NORMAL = 1
    DELIVERY_FAST = 2
    DELIVERY_URGENT = 3

    ORDER_TYPE_CHOICES = (
        (ORDER_TYPE_OFFICIAL_TRANSLATION, "ترجمه رسمی"),
        (ORDER_TYPE_CONTENT, "تولید محتوا"),
        (ORDER_TYPE_SUBTITLE, "زیرنویس"),
        (ORDER_TYPE_PAPER, "مقاله / کتاب"),
    )

    STATUS_CHOICES = (
        (STATUS_NEW, "New"),
        (STATUS_NOT_PAID, "Not Paid"),
        (STATUS_PENDING, "Pending"),
        (STATUS_IN_PROGRESS, "In Progress"),
        (STATUS_DONE, "Done"),
    )

    DELIVERY_CHOICES = (
        (DELIVERY_NORMAL, "Normal"),
        (DELIVERY_FAST, "Fast"),
        (DELIVERY_URGENT, "Urgent"),
    )

    DELIVERY_PRICE_BASE = 10_000
    DELIVERY_PRICE_RATIO = (
        (DELIVERY_NORMAL, 1),
        (DELIVERY_FAST, 1.25),
        (DELIVERY_URGENT, 1.5),
    )

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    uuid: Mapped[UUID] = mapped_column(
        PG_UUID(as_uuid=True), unique=True, index=True, default=uuid4
    )
    customer_id: Mapped[int | None] = mapped_column(
        BigInteger, ForeignKey("account_user.id", ondelete="RESTRICT"), nullable=True
    )
    from_language_id: Mapped[int] = mapped_column(
        BigInteger, ForeignKey("order_language.id", ondelete="RESTRICT")
    )
    to_language_id: Mapped[int] = mapped_column(
        BigInteger, ForeignKey("order_language.id", ondelete="RESTRICT")
    )
    type: Mapped[int] = mapped_column(SmallInteger)
    status: Mapped[int] = mapped_column(SmallInteger, default=STATUS_NEW)
    delivery_option: Mapped[int] = mapped_column(SmallInteger, default=DELIVERY_NORMAL)

    customer: Mapped["User | None"] = relationship("User", foreign_keys=[customer_id])
    from_language: Mapped["Language"] = relationship("Language", foreign_keys=[from_language_id])
    to_language: Mapped["Language"] = relationship("Language", foreign_keys=[to_language_id])
    items: Mapped[list["OrderItem"]] = relationship("OrderItem", back_populates="order")

    @staticmethod
    def status_label(val: int) -> str:
        labels = {1: "New", 2: "Not Paid", 3: "Pending", 4: "In Progress", 5: "Done"}
        return labels.get(val, str(val))

    @staticmethod
    def type_label(val: int) -> str:
        labels = {1: "ترجمه رسمی", 2: "تولید محتوا", 3: "زیرنویس", 4: "مقاله / کتاب"}
        return labels.get(val, str(val))

    @staticmethod
    def delivery_label(val: int) -> str:
        labels = {1: "Normal", 2: "Fast", 3: "Urgent"}
        return labels.get(val, str(val))


class Upload(Base, TimestampMixin):
    __tablename__ = "order_upload"

    id: Mapped[UUID] = mapped_column(
        PG_UUID(as_uuid=True), primary_key=True, default=uuid4, index=True
    )
    file: Mapped[str] = mapped_column(String(200))
    ext_id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), default=uuid4)
    owner_id: Mapped[int | None] = mapped_column(
        BigInteger, ForeignKey("account_user.id", ondelete="CASCADE"), nullable=True
    )

    owner: Mapped["User | None"] = relationship("User")


class OrderItem(Base, TimestampMixin):
    __tablename__ = "order_orderitem"

    STATUS_NEW = 1
    STATUS_PENDING = 2
    STATUS_IN_PROGRESS = 3
    STATUS_DONE = 4

    STATUS_CHOICES = (
        (STATUS_NEW, "New"),
        (STATUS_PENDING, "Pending"),
        (STATUS_IN_PROGRESS, "In Progress"),
        (STATUS_DONE, "Done"),
    )

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    uuid: Mapped[UUID] = mapped_column(
        PG_UUID(as_uuid=True), unique=True, index=True, default=uuid4
    )
    order_id: Mapped[int | None] = mapped_column(
        BigInteger, ForeignKey("order_order.id", ondelete="RESTRICT"), nullable=True
    )
    doc_type_id: Mapped[int] = mapped_column(
        BigInteger, ForeignKey("order_doctype.id", ondelete="RESTRICT")
    )
    upload_id: Mapped[UUID | None] = mapped_column(
        PG_UUID(as_uuid=True), ForeignKey("order_upload.id", ondelete="RESTRICT"), nullable=True
    )
    asignee_id: Mapped[int | None] = mapped_column(
        BigInteger, ForeignKey("account_user.id", ondelete="RESTRICT"), nullable=True
    )
    discount_id: Mapped[int | None] = mapped_column(
        BigInteger, ForeignKey("order_discount.id", ondelete="RESTRICT"), nullable=True
    )
    stamp: Mapped[int] = mapped_column(SmallInteger, default=1)
    pickup: Mapped[int] = mapped_column(SmallInteger, default=3)
    status: Mapped[int] = mapped_column(SmallInteger, default=STATUS_NEW)
    count: Mapped[int] = mapped_column(Integer)
    discount_amount: Mapped[int] = mapped_column(Integer, default=0)

    order: Mapped["Order | None"] = relationship("Order", back_populates="items")
    doc_type: Mapped["DocType"] = relationship("DocType")
    upload: Mapped["Upload | None"] = relationship("Upload")

    @staticmethod
    def stamp_label(val: int) -> str:
        labels = {1: "None", 2: "MOJ", 3: "MFA", 4: "MOJ + MFA"}
        return labels.get(val, str(val))

    @staticmethod
    def pickup_label(val: int) -> str:
        labels = {1: "In Person", 2: "Peyk", 3: "Online"}
        return labels.get(val, str(val))

    @staticmethod
    def status_label(val: int) -> str:
        labels = {1: "New", 2: "Pending", 3: "In Progress", 4: "Done"}
        return labels.get(val, str(val))


class Discount(Base, TimestampMixin):
    __tablename__ = "order_discount"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(80))
    code: Mapped[str] = mapped_column(String(40), unique=True, index=True)
    value: Mapped[float] = mapped_column(Float)
    customer_id: Mapped[int | None] = mapped_column(
        BigInteger, ForeignKey("account_user.id", ondelete="CASCADE"), nullable=True
    )
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    max_use: Mapped[int | None] = mapped_column(Integer, nullable=True)
    expiresOn: Mapped[datetime | None] = mapped_column(Date, nullable=True)


class Invoice(Base, TimestampMixin):
    __tablename__ = "order_invoice"

    STATUS_NEW = 1
    STATUS_FAILED = 2
    STATUS_PENDING = 3
    STATUS_SUCCESS = 4

    GATEWAY_SEP = 1

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    uuid: Mapped[UUID] = mapped_column(
        PG_UUID(as_uuid=True), unique=True, index=True, default=uuid4
    )
    order_id: Mapped[int] = mapped_column(
        BigInteger, ForeignKey("order_order.id", ondelete="CASCADE")
    )
    gateway: Mapped[int] = mapped_column(SmallInteger, default=GATEWAY_SEP)
    recipt: Mapped[str | None] = mapped_column(String(300), nullable=True)
    tid: Mapped[str | None] = mapped_column(String(300), nullable=True)
    card: Mapped[str | None] = mapped_column(String(50), nullable=True, default=None)
    trace: Mapped[str | None] = mapped_column(String(50), nullable=True, default=None)
    status: Mapped[int] = mapped_column(SmallInteger, default=STATUS_NEW)
    note: Mapped[str | None] = mapped_column(Text, nullable=True)

    order: Mapped["Order"] = relationship("Order")

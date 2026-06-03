from collections.abc import Sequence
from typing import ClassVar

from sqladmin import Admin, ModelView
from sqlalchemy.ext.asyncio import AsyncEngine
from sqlalchemy.orm import InstrumentedAttribute
from starlette.applications import Starlette

from .models.order import (
    Discount,
    DocCategory,
    DocType,
    Invoice,
    Language,
    Order,
    OrderItem,
    Upload,
)
from .models.user import AuthToken, User

ModelColumn = str | InstrumentedAttribute[object]


class UserAdmin(ModelView, model=User):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        User.id,
        User.mobile,
        User.role,
        User.is_active,
        User.is_staff,
        User.date_joined,
    ]


class AuthTokenAdmin(ModelView, model=AuthToken):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        AuthToken.uid,
        AuthToken.user_id,
        AuthToken.failed_attempts,
        AuthToken.createdAt,
    ]


class OrderAdmin(ModelView, model=Order):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        Order.id,
        Order.uuid,
        Order.customer_id,
        Order.type,
        Order.status,
        Order.createdAt,
    ]


class OrderItemAdmin(ModelView, model=OrderItem):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        OrderItem.id,
        OrderItem.order_id,
        OrderItem.doc_type_id,
        OrderItem.status,
        OrderItem.count,
    ]


class DocTypeAdmin(ModelView, model=DocType):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        DocType.id,
        DocType.name,
        DocType.type,
        DocType.base_price,
    ]


class DocCategoryAdmin(ModelView, model=DocCategory):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        DocCategory.id,
        DocCategory.name,
        DocCategory.priority,
    ]


class LanguageAdmin(ModelView, model=Language):
    column_list: ClassVar[Sequence[ModelColumn]] = [Language.id, Language.name, Language.name_fa]


class UploadAdmin(ModelView, model=Upload):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        Upload.id,
        Upload.file,
        Upload.owner_id,
        Upload.createdAt,
    ]


class DiscountAdmin(ModelView, model=Discount):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        Discount.id,
        Discount.code,
        Discount.value,
        Discount.is_active,
    ]


class InvoiceAdmin(ModelView, model=Invoice):
    column_list: ClassVar[Sequence[ModelColumn]] = [
        Invoice.id,
        Invoice.uuid,
        Invoice.order_id,
        Invoice.status,
        Invoice.gateway,
    ]


def create_admin(app: Starlette, engine: AsyncEngine) -> Admin:
    admin = Admin(app, engine)
    for view in [
        UserAdmin,
        AuthTokenAdmin,
        OrderAdmin,
        OrderItemAdmin,
        DocTypeAdmin,
        DocCategoryAdmin,
        LanguageAdmin,
        UploadAdmin,
        DiscountAdmin,
        InvoiceAdmin,
    ]:
        admin.add_view(view)
    return admin

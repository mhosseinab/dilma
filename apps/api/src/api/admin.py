from sqladmin import Admin, ModelView

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


class UserAdmin(ModelView, model=User):  # type: ignore[call-arg]
    column_list = [User.id, User.mobile, User.role, User.is_active, User.is_staff, User.date_joined]


class AuthTokenAdmin(ModelView, model=AuthToken):  # type: ignore[call-arg]
    column_list = [AuthToken.uid, AuthToken.user_id, AuthToken.failed_attempts, AuthToken.createdAt]


class OrderAdmin(ModelView, model=Order):  # type: ignore[call-arg]
    column_list = [
        Order.id,
        Order.uuid,
        Order.customer_id,
        Order.type,
        Order.status,
        Order.createdAt,
    ]


class OrderItemAdmin(ModelView, model=OrderItem):  # type: ignore[call-arg]
    column_list = [
        OrderItem.id,
        OrderItem.order_id,
        OrderItem.doc_type_id,
        OrderItem.status,
        OrderItem.count,
    ]


class DocTypeAdmin(ModelView, model=DocType):  # type: ignore[call-arg]
    column_list = [DocType.id, DocType.name, DocType.type, DocType.base_price]


class DocCategoryAdmin(ModelView, model=DocCategory):  # type: ignore[call-arg]
    column_list = [DocCategory.id, DocCategory.name, DocCategory.priority]


class LanguageAdmin(ModelView, model=Language):  # type: ignore[call-arg]
    column_list = [Language.id, Language.name, Language.name_fa]


class UploadAdmin(ModelView, model=Upload):  # type: ignore[call-arg]
    column_list = [Upload.id, Upload.file, Upload.owner_id, Upload.createdAt]


class DiscountAdmin(ModelView, model=Discount):  # type: ignore[call-arg]
    column_list = [Discount.id, Discount.code, Discount.value, Discount.is_active]


class InvoiceAdmin(ModelView, model=Invoice):  # type: ignore[call-arg]
    column_list = [Invoice.id, Invoice.uuid, Invoice.order_id, Invoice.status, Invoice.gateway]


def create_admin(app, engine):
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

"""Initial schema matching existing Django migration

Revision ID: 0001
Revises:
Create Date: 2022-06-26

IMPORTANT: Do NOT run `alembic upgrade head` against the production database.
The production DB already has these tables created by Django migrations.
Run `alembic stamp head` instead to mark the DB as at this revision.

This migration creates the schema on a fresh test database for verification.
"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "0001"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # account_user
    op.create_table(
        "account_user",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("password", sa.String(128), nullable=False),
        sa.Column("last_login", sa.DateTime(timezone=True), nullable=True),
        sa.Column("is_superuser", sa.Boolean(), nullable=False, server_default="false"),
        sa.Column("uid", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("email", sa.String(254), nullable=True),
        sa.Column("mobile", sa.String(12), nullable=False),
        sa.Column("role", sa.SmallInteger(), nullable=False, server_default="3"),
        sa.Column("first_name", sa.String(150), nullable=False, server_default=""),
        sa.Column("last_name", sa.String(150), nullable=False, server_default=""),
        sa.Column("is_staff", sa.Boolean(), nullable=False, server_default="false"),
        sa.Column("is_active", sa.Boolean(), nullable=False, server_default="true"),
        sa.Column("date_joined", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("uid"),
        sa.UniqueConstraint("email"),
        sa.UniqueConstraint("mobile"),
    )
    op.create_index("account_user_uid_idx", "account_user", ["uid"])
    op.create_index("account_user_email_idx", "account_user", ["email"])
    op.create_index("account_user_mobile_idx", "account_user", ["mobile"])

    # account_authtoken
    op.create_table(
        "account_authtoken",
        sa.Column("uid", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("user_id", sa.BigInteger(), nullable=False),
        sa.Column("token1", sa.String(6), nullable=True),
        sa.Column("token2", sa.String(6), nullable=True),
        sa.Column("failed_attempts", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("createdAt", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updatedAt", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["account_user.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("uid"),
    )
    op.create_index("account_authtoken_uid_idx", "account_authtoken", ["uid"])

    # order_language
    op.create_table(
        "order_language",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("name", sa.String(250), nullable=False),
        sa.Column("name_fa", sa.String(250), nullable=False),
        sa.Column("is_source", sa.Boolean(), nullable=False, server_default="true"),
        sa.Column("is_destination", sa.Boolean(), nullable=False, server_default="true"),
        sa.PrimaryKeyConstraint("id"),
    )

    # order_doctype
    op.create_table(
        "order_doctype",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("name", sa.String(250), nullable=False),
        sa.Column("type", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("unit", sa.SmallInteger(), nullable=False),
        sa.Column("base_price", sa.Integer(), nullable=False),
        sa.Column("stamp_option", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("pickup_option", sa.SmallInteger(), nullable=False, server_default="3"),
        sa.Column("stamp_moj_price", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("stamp_mfa_price", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("createdAt", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updatedAt", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    # order_doccategory
    op.create_table(
        "order_doccategory",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("name", sa.String(250), nullable=False),
        sa.Column("priority", sa.SmallInteger(), nullable=False, server_default="0"),
        sa.PrimaryKeyConstraint("id"),
    )

    # order_doccategory_items (M2M join)
    op.create_table(
        "order_doccategory_items",
        sa.Column("doccategory_id", sa.BigInteger(), nullable=False),
        sa.Column("doctype_id", sa.BigInteger(), nullable=False),
        sa.ForeignKeyConstraint(["doccategory_id"], ["order_doccategory.id"]),
        sa.ForeignKeyConstraint(["doctype_id"], ["order_doctype.id"]),
        sa.PrimaryKeyConstraint("doccategory_id", "doctype_id"),
    )

    # order_order
    op.create_table(
        "order_order",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("uuid", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("customer_id", sa.BigInteger(), nullable=True),
        sa.Column("from_language_id", sa.BigInteger(), nullable=False),
        sa.Column("to_language_id", sa.BigInteger(), nullable=False),
        sa.Column("type", sa.SmallInteger(), nullable=False),
        sa.Column("status", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("delivery_option", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("createdAt", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updatedAt", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["customer_id"], ["account_user.id"], ondelete="RESTRICT"),
        sa.ForeignKeyConstraint(["from_language_id"], ["order_language.id"], ondelete="RESTRICT"),
        sa.ForeignKeyConstraint(["to_language_id"], ["order_language.id"], ondelete="RESTRICT"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("uuid"),
    )
    op.create_index("order_order_uuid_idx", "order_order", ["uuid"])

    # order_upload
    op.create_table(
        "order_upload",
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("file", sa.String(200), nullable=False),
        sa.Column("ext_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("owner_id", sa.BigInteger(), nullable=True),
        sa.Column("createdAt", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updatedAt", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["owner_id"], ["account_user.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )

    # order_discount
    op.create_table(
        "order_discount",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("name", sa.String(80), nullable=False),
        sa.Column("code", sa.String(40), nullable=False),
        sa.Column("value", sa.Float(), nullable=False),
        sa.Column("customer_id", sa.BigInteger(), nullable=True),
        sa.Column("is_active", sa.Boolean(), nullable=False, server_default="true"),
        sa.Column("max_use", sa.Integer(), nullable=True),
        sa.Column("expiresOn", sa.Date(), nullable=True),
        sa.Column("createdAt", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updatedAt", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["customer_id"], ["account_user.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("code"),
    )
    op.create_index("order_discount_code_idx", "order_discount", ["code"])

    # order_orderitem
    op.create_table(
        "order_orderitem",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("uuid", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("order_id", sa.BigInteger(), nullable=True),
        sa.Column("doc_type_id", sa.BigInteger(), nullable=False),
        sa.Column("upload_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("asignee_id", sa.BigInteger(), nullable=True),
        sa.Column("discount_id", sa.BigInteger(), nullable=True),
        sa.Column("stamp", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("pickup", sa.SmallInteger(), nullable=False, server_default="3"),
        sa.Column("status", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("count", sa.Integer(), nullable=False),
        sa.Column("discount_amount", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("createdAt", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updatedAt", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["asignee_id"], ["account_user.id"], ondelete="RESTRICT"),
        sa.ForeignKeyConstraint(["discount_id"], ["order_discount.id"], ondelete="RESTRICT"),
        sa.ForeignKeyConstraint(["doc_type_id"], ["order_doctype.id"], ondelete="RESTRICT"),
        sa.ForeignKeyConstraint(["order_id"], ["order_order.id"], ondelete="RESTRICT"),
        sa.ForeignKeyConstraint(["upload_id"], ["order_upload.id"], ondelete="RESTRICT"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("uuid"),
    )
    op.create_index("order_orderitem_uuid_idx", "order_orderitem", ["uuid"])

    # order_invoice
    op.create_table(
        "order_invoice",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("uuid", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("order_id", sa.BigInteger(), nullable=False),
        sa.Column("gateway", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("recipt", sa.String(300), nullable=True),
        sa.Column("tid", sa.String(300), nullable=True),
        sa.Column("card", sa.String(50), nullable=True),
        sa.Column("trace", sa.String(50), nullable=True),
        sa.Column("status", sa.SmallInteger(), nullable=False, server_default="1"),
        sa.Column("note", sa.Text(), nullable=True),
        sa.Column("createdAt", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updatedAt", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["order_id"], ["order_order.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("uuid"),
    )
    op.create_index("order_invoice_uuid_idx", "order_invoice", ["uuid"])


def downgrade() -> None:
    op.drop_table("order_invoice")
    op.drop_table("order_orderitem")
    op.drop_table("order_discount")
    op.drop_table("order_upload")
    op.drop_table("order_order")
    op.drop_table("order_doccategory_items")
    op.drop_table("order_doccategory")
    op.drop_table("order_doctype")
    op.drop_table("order_language")
    op.drop_table("account_authtoken")
    op.drop_table("account_user")

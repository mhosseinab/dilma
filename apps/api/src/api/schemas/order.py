from typing import Any
from uuid import UUID

from pydantic import BaseModel

from .auth import UserOut


class LanguageOut(BaseModel):
    id: int
    name: str
    name_fa: str
    is_source: bool
    is_destination: bool

    model_config = {"from_attributes": True}


class DocTypeOut(BaseModel):
    id: int
    name: str
    type: int
    unit: int
    base_price: int
    stamp_option: int
    pickup_option: int
    stamp_moj_price: int
    stamp_mfa_price: int

    model_config = {"from_attributes": True}


class DocCategoryOut(BaseModel):
    id: int
    name: str
    priority: int
    items: list[int]  # list of DocType PKs (PrimaryKeyRelatedField equivalent)

    model_config = {"from_attributes": True}


class UploadOut(BaseModel):
    id: UUID
    file: str
    ext_id: UUID

    model_config = {"from_attributes": True}


class OrderItemOut(BaseModel):
    id: int
    uuid: UUID
    doc_type_id: int
    upload: UploadOut | None
    stamp: str  # label, not int
    pickup: str  # label, not int
    status: str  # label, not int
    count: int

    model_config = {"from_attributes": True}


class OrderOut(BaseModel):
    uuid: UUID
    customer: UserOut | None
    from_language: LanguageOut
    to_language: LanguageOut
    type: str  # label
    status: str  # label
    delivery_option: str  # label
    items: list[OrderItemOut]

    model_config = {"from_attributes": True}


class OrderItemCreate(BaseModel):
    doc_type: int
    count: int
    stamp: int = 1
    pickup: int = 3


class OrderCreate(BaseModel):
    from_language: int
    to_language: int
    type: int
    delivery_option: int = 1
    items: list[OrderItemCreate]


class ConfigResponse(BaseModel):
    languages: list[LanguageOut]
    doc_types: list[DocTypeOut]
    categories: list[DocCategoryOut]
    order_types: list[tuple[int, str]]
    delivery_options: list[tuple[int, str]]
    delivery_price_base: int
    delivery_price_ratio: list[tuple[int, float]]
    stamp_choices: list[tuple[int, str]]
    pickup_choices: list[tuple[int, str]]


class PaginatedResponse(BaseModel):
    count: int
    next: str | None
    previous: str | None
    results: list[Any]


class UploadCreate(BaseModel):
    ext_id: UUID


class InvoiceOut(BaseModel):
    uuid: UUID
    order_id: int
    gateway: int
    status: int

    model_config = {"from_attributes": True}


class InvoiceCreate(BaseModel):
    order_id: int

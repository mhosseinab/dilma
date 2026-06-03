import logging
from datetime import date
from hashlib import sha1
from pathlib import Path
from time import time
from uuid import UUID

import aiofiles
from fastapi import APIRouter, Depends, File, Form, HTTPException, Query, UploadFile, status
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from ..config import settings
from ..dependencies import DbDep, get_optional_user
from ..models.order import (
    DocCategory,
    DocType,
    Language,
    Order,
    OrderItem,
    Upload,
)
from ..models.user import User
from ..schemas.auth import UserOut
from ..schemas.order import (
    ConfigResponse,
    DocCategoryOut,
    DocTypeOut,
    LanguageOut,
    OrderCreate,
    OrderItemOut,
    OrderOut,
    UploadOut,
)

logger = logging.getLogger(__name__)
router = APIRouter()

PAGE_SIZE = 24


def _paginate(items: list, total: int, page: int, base_url: str = "") -> dict:
    has_next = (page * PAGE_SIZE) < total
    has_prev = page > 1
    return {
        "count": total,
        "next": f"{base_url}?page={page + 1}" if has_next else None,
        "previous": f"{base_url}?page={page - 1}" if has_prev else None,
        "results": items,
    }


def _generate_filename(original_filename: str) -> str:
    today = date.today()
    p = Path(original_filename)
    stem, ext = p.stem, p.suffix
    hashed = sha1((str(time()) + stem).encode("ascii", "ignore")).hexdigest()
    return str(Path("files", today.strftime("%Y/%m"), f"{hashed}{ext}"))


def _order_to_out(order: Order) -> OrderOut:
    items = [
        OrderItemOut(
            id=item.id,
            uuid=item.uuid,
            doc_type_id=item.doc_type_id,
            upload=UploadOut.model_validate(item.upload) if item.upload else None,
            stamp=OrderItem.stamp_label(item.stamp),
            pickup=OrderItem.pickup_label(item.pickup),
            status=OrderItem.status_label(item.status),
            count=item.count,
        )
        for item in (order.items or [])
    ]
    return OrderOut(
        uuid=order.uuid,
        customer=UserOut.model_validate(order.customer) if order.customer else None,
        from_language=LanguageOut.model_validate(order.from_language),
        to_language=LanguageOut.model_validate(order.to_language),
        type=Order.type_label(order.type),
        status=Order.status_label(order.status),
        delivery_option=Order.delivery_label(order.delivery_option),
        items=items,
    )


@router.get("/config/", response_model=ConfigResponse)
async def order_config(db: DbDep):
    langs = (await db.execute(select(Language).order_by(Language.name))).scalars().all()
    doc_types = (await db.execute(select(DocType).order_by(DocType.name))).scalars().all()
    cats = (
        (
            await db.execute(
                select(DocCategory)
                .options(selectinload(DocCategory.items))
                .order_by(DocCategory.priority.desc(), DocCategory.name)
            )
        )
        .scalars()
        .all()
    )

    return ConfigResponse(
        languages=[LanguageOut.model_validate(lang) for lang in langs],
        doc_types=[DocTypeOut.model_validate(d) for d in doc_types],
        categories=[
            DocCategoryOut(id=c.id, name=c.name, priority=c.priority, items=[i.id for i in c.items])
            for c in cats
        ],
        order_types=list(Order.ORDER_TYPE_CHOICES),
        delivery_options=list(Order.DELIVERY_CHOICES),
        delivery_price_base=Order.DELIVERY_PRICE_BASE,
        delivery_price_ratio=list(Order.DELIVERY_PRICE_RATIO),
        stamp_choices=list(DocType.VERIFICATION_CHOICES),
        pickup_choices=list(DocType.PICKUP_CHOICES),
    )


@router.get("/")
async def list_orders(
    db: DbDep,
    current_user: User | None = Depends(get_optional_user),
    page: int = Query(1, ge=1),
):
    base_query = (
        select(Order)
        .options(
            selectinload(Order.items).selectinload(OrderItem.upload),
            selectinload(Order.items).selectinload(OrderItem.doc_type),
            selectinload(Order.customer),
            selectinload(Order.from_language),
            selectinload(Order.to_language),
        )
        .order_by(Order.id)
    )

    if current_user and current_user.role in [User.ADMIN, User.MANAGER]:
        query = base_query
    elif current_user:
        query = base_query.where(Order.customer_id == current_user.id)
    else:
        query = base_query.where(Order.customer_id.is_(None))

    total_result = await db.execute(select(Order.id))
    total = len(total_result.all())

    query = query.offset((page - 1) * PAGE_SIZE).limit(PAGE_SIZE)
    orders = (await db.execute(query)).scalars().all()

    return _paginate([_order_to_out(o) for o in orders], total, page)


@router.get("/{pk}/", response_model=OrderOut)
async def get_order(pk: int, db: DbDep, current_user: User | None = Depends(get_optional_user)):
    result = await db.execute(
        select(Order)
        .where(Order.id == pk)
        .options(
            selectinload(Order.items).selectinload(OrderItem.upload),
            selectinload(Order.items).selectinload(OrderItem.doc_type),
            selectinload(Order.customer),
            selectinload(Order.from_language),
            selectinload(Order.to_language),
        )
    )
    order = result.scalar_one_or_none()
    if order is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    return _order_to_out(order)


@router.post("/", response_model=OrderOut, status_code=status.HTTP_201_CREATED)
async def create_order(
    body: OrderCreate,
    db: DbDep,
    current_user: User | None = Depends(get_optional_user),
):
    from_lang = (
        await db.execute(select(Language).where(Language.id == body.from_language))
    ).scalar_one_or_none()
    to_lang = (
        await db.execute(select(Language).where(Language.id == body.to_language))
    ).scalar_one_or_none()
    if not from_lang or not to_lang:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid language")

    order = Order(
        from_language_id=body.from_language,
        to_language_id=body.to_language,
        type=body.type,
        delivery_option=body.delivery_option,
        status=Order.STATUS_NEW,
        customer_id=current_user.id if current_user else None,
    )
    db.add(order)
    await db.flush()

    for item_data in body.items:
        doc_type = (
            await db.execute(select(DocType).where(DocType.id == item_data.doc_type))
        ).scalar_one_or_none()
        if not doc_type:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid doc_type {item_data.doc_type}",
            )
        item = OrderItem(
            order_id=order.id,
            doc_type_id=item_data.doc_type,
            count=item_data.count,
            stamp=item_data.stamp,
            pickup=item_data.pickup,
        )
        db.add(item)

    await db.commit()

    result = await db.execute(
        select(Order)
        .where(Order.id == order.id)
        .options(
            selectinload(Order.items).selectinload(OrderItem.upload),
            selectinload(Order.items).selectinload(OrderItem.doc_type),
            selectinload(Order.customer),
            selectinload(Order.from_language),
            selectinload(Order.to_language),
        )
    )
    order = result.scalar_one()
    return _order_to_out(order)


@router.get("/langs/")
async def list_languages(db: DbDep):
    result = await db.execute(select(Language).order_by(Language.name))
    return [LanguageOut.model_validate(lang) for lang in result.scalars().all()]


@router.get("/types/")
async def list_doc_types(db: DbDep, type: int | None = Query(None)):
    query = select(DocType).order_by(DocType.name)
    if type is not None:
        query = query.where(DocType.type == type)
    result = await db.execute(query)
    return [DocTypeOut.model_validate(d) for d in result.scalars().all()]


@router.get("/cats/")
async def list_categories(db: DbDep):
    result = await db.execute(
        select(DocCategory)
        .options(selectinload(DocCategory.items))
        .order_by(DocCategory.priority.desc(), DocCategory.name)
    )
    cats = result.scalars().all()
    return [
        DocCategoryOut(id=c.id, name=c.name, priority=c.priority, items=[i.id for i in c.items])
        for c in cats
    ]


@router.post("/upload/", status_code=status.HTTP_201_CREATED)
async def upload_file(
    db: DbDep,
    file: UploadFile = File(...),
    ext_id: UUID = Form(...),
    current_user: User | None = Depends(get_optional_user),
):
    result = await db.execute(select(OrderItem).where(OrderItem.uuid == ext_id))
    order_item = result.scalar_one_or_none()
    if order_item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="item integrity failed")

    relative_path = _generate_filename(file.filename or "upload.bin")
    abs_path = Path(settings.MEDIA_ROOT) / relative_path
    abs_path.parent.mkdir(parents=True, exist_ok=True)

    async with aiofiles.open(abs_path, "wb") as f:
        content = await file.read()
        await f.write(content)

    upload = Upload(
        file=relative_path,
        ext_id=ext_id,
        owner_id=current_user.id if current_user else None,
    )
    db.add(upload)
    await db.flush()

    order_item.upload_id = upload.id
    await db.commit()

    return UploadOut(id=upload.id, file=relative_path, ext_id=upload.ext_id)

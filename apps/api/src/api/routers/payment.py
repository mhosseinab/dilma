from fastapi import APIRouter, HTTPException, status
from sqlalchemy import select

from ..dependencies import DbDep
from ..models.order import Invoice, Order
from ..schemas.order import InvoiceCreate, InvoiceOut

router = APIRouter()


@router.post("/invoice/", response_model=InvoiceOut, status_code=status.HTTP_201_CREATED)
async def create_invoice(body: InvoiceCreate, db: DbDep):
    order = (await db.execute(select(Order).where(Order.id == body.order_id))).scalar_one_or_none()
    if order is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Order not found")

    invoice = Invoice(order_id=body.order_id, gateway=Invoice.GATEWAY_SEP)
    db.add(invoice)
    await db.commit()
    return InvoiceOut(
        uuid=invoice.uuid, order_id=invoice.order_id, gateway=invoice.gateway, status=invoice.status
    )


@router.get("/verify/")
async def verify_payment():
    # TODO: SEP integration not found in source repo — implement against SEP API spec
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="SEP integration not implemented",
    )

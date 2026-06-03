import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_order_config_shape(client: AsyncClient):
    response = await client.get("/api/order/config/")
    assert response.status_code == 200
    data = response.json()
    required_keys = {
        "languages",
        "doc_types",
        "categories",
        "order_types",
        "delivery_options",
        "delivery_price_base",
        "delivery_price_ratio",
        "stamp_choices",
        "pickup_choices",
    }
    assert required_keys == set(data.keys())
    assert data["delivery_price_base"] == 10_000
    # order_types must be list of 2-element arrays with Persian strings
    assert data["order_types"][0] == [1, "ترجمه رسمی"]


@pytest.mark.asyncio
async def test_list_orders_unauthenticated(client: AsyncClient):
    response = await client.get("/api/order/")
    assert response.status_code == 200
    data = response.json()
    assert "count" in data
    assert "next" in data
    assert "previous" in data
    assert "results" in data


@pytest.mark.asyncio
async def test_payment_verify_stub(client: AsyncClient):
    response = await client.get("/api/payment/verify/")
    assert response.status_code == 501

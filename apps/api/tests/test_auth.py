from unittest.mock import patch

import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_health(client: AsyncClient):
    response = await client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


@pytest.mark.asyncio
async def test_get_sms_token_invalid_mobile(client: AsyncClient):
    response = await client.post("/api/auth/sms/get_token", json={"mobile": "12345"})
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_get_sms_token_valid(client: AsyncClient):
    with patch("api.services.sms.send_auth_sms_token", return_value=True):
        response = await client.post("/api/auth/sms/get_token", json={"mobile": "09123456789"})
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "uuid" in data
    assert "expires_on" in data


@pytest.mark.asyncio
async def test_verify_token_invalid_uuid(client: AsyncClient):
    response = await client.post(
        "/api/auth/sms/verify_token",
        json={"uuid": "00000000-0000-0000-0000-000000000000", "token": "1234"},
    )
    assert response.status_code == 400


@pytest.mark.asyncio
async def test_refresh_invalid_token(client: AsyncClient):
    response = await client.post("/api/auth/token/refresh/", json={"refresh": "bad.token.here"})
    assert response.status_code == 401

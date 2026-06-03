import pytest
from httpx import ASGITransport, AsyncClient
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

from api.dependencies import set_session_factory
from api.main import app
from api.models import Base

TEST_DATABASE_URL = "postgresql+asyncpg://user:password@localhost/dilma_test"


@pytest.fixture(scope="session")
async def engine():
    e = create_async_engine(TEST_DATABASE_URL, echo=False)
    async with e.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield e
    async with e.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
    await e.dispose()


@pytest.fixture(autouse=True)
async def setup_db(engine):
    factory = async_sessionmaker(engine, expire_on_commit=False)
    set_session_factory(factory)


@pytest.fixture
async def client():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as c:
        yield c

import os
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

from .admin import create_admin
from .config import settings
from .dependencies import set_session_factory
from .routers import auth, order, payment

# Engine is created at module level — no connection until first query
_engine = create_async_engine(settings.DATABASE_URL, echo=settings.DEBUG)
_session_factory = async_sessionmaker(_engine, expire_on_commit=False)
set_session_factory(_session_factory)


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    await _engine.dispose()


def create_app() -> FastAPI:
    app = FastAPI(
        lifespan=lifespan,
        title="Dilma API",
        docs_url="/docs" if settings.DEBUG else None,
        redoc_url="/redoc" if settings.DEBUG else None,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"] if settings.DEBUG else settings.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
    app.include_router(order.router, prefix="/api/order", tags=["order"])
    app.include_router(payment.router, prefix="/api/payment", tags=["payment"])

    os.makedirs(settings.MEDIA_ROOT, exist_ok=True)
    app.mount("/media", StaticFiles(directory=settings.MEDIA_ROOT), name="media")

    create_admin(app, _engine)

    @app.get("/health")
    async def health():
        return {"status": "ok"}

    return app


app = create_app()

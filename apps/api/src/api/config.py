from datetime import timedelta
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+asyncpg://user:password@localhost/dilma"
    SECRET_KEY: str = "change-me-in-production"
    KAVEHNEGAR_API_KEY: str = ""
    DEBUG: bool = False
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000"]
    MEDIA_ROOT: str = "/usr/src/app/media"

    ACCESS_TOKEN_LIFETIME: timedelta = timedelta(days=5)
    REFRESH_TOKEN_LIFETIME: timedelta = timedelta(days=14)

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()

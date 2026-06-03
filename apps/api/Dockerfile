# Build context must be the REPO ROOT: docker build -f apps/api/Dockerfile .
FROM python:3.12-slim AS builder

COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

WORKDIR /app

# Copy workspace manifests first (dependency layer cached separately from source)
COPY pyproject.toml uv.lock ./
COPY apps/api/pyproject.toml apps/api/pyproject.toml

RUN uv sync \
    --package dilma-api \
    --no-dev \
    --frozen \
    --no-editable

COPY apps/api/src apps/api/src
COPY apps/api/alembic apps/api/alembic
COPY apps/api/alembic.ini apps/api/alembic.ini


FROM python:3.12-slim

RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*

RUN addgroup --gid 1001 appgroup && adduser --uid 1001 --gid 1001 appuser

COPY --from=builder /app/.venv /app/.venv
COPY --from=builder /app/apps/api /app/apps/api

ENV PATH="/app/.venv/bin:$PATH"
ENV PYTHONPATH="/app/apps/api/src"
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app/apps/api

RUN mkdir -p /usr/src/app/media && chown appuser:appgroup /usr/src/app/media

COPY apps/api/entrypoint.sh entrypoint.sh
RUN chmod +x entrypoint.sh

USER appuser

ENTRYPOINT ["./entrypoint.sh"]

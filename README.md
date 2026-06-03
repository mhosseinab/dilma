# Dilma

Translation management platform — customers submit translation orders, freelance translators fulfill them. Supports official translation, content creation, subtitling, and academic papers.

> **Disclaimer:** Published for demonstration. Repo history purged for privacy. Other colleagues contributed to the original build.

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 12, TypeScript, Redux, MUI 5, RTL (Persian) |
| Backend | FastAPI 0.115+, SQLAlchemy 2.0 async, Alembic |
| Database | PostgreSQL 13 |
| Auth | SMS OTP (Kavenegar) → JWT (PyJWT HS256) |
| Container | Docker + docker-compose |
| CI/CD | Azure Pipelines → Hetzner VPS (SSH) |
| Tooling | uv (Python), pnpm (Node), Taskfile, lefthook |

---

## Repository Structure

```
dilma/
├── apps/
│   ├── api/                  ← FastAPI backend
│   │   ├── src/api/
│   │   │   ├── config.py     ← pydantic-settings
│   │   │   ├── main.py       ← app factory, middleware
│   │   │   ├── dependencies.py  ← get_db, auth guards
│   │   │   ├── models/       ← SQLAlchemy ORM
│   │   │   ├── schemas/      ← Pydantic v2 I/O
│   │   │   ├── routers/      ← auth · order · payment
│   │   │   ├── services/     ← jwt · sms (Kavenegar)
│   │   │   └── admin.py      ← SQLAdmin
│   │   ├── alembic/          ← DB migrations
│   │   └── tests/
│   └── web/                  ← Next.js frontend
│       ├── pages/            ← file-based routing
│       ├── components/       ← UI components
│       ├── redux/            ← global state
│       └── lib/api.ts        ← API base URLs
├── packages/                 ← shared libs (reserved)
├── Taskfile.yml              ← dev commands
├── docker-compose.yml        ← unified services
├── pyproject.toml            ← uv workspace root
└── pnpm-workspace.yaml
```

---

## Architecture

```mermaid
graph TB
    subgraph Browser
        UI["Next.js (apps/web)\nPort 3001"]
    end

    subgraph Docker["docker-compose"]
        API["FastAPI (apps/api)\nPort 8801"]
        DB[(PostgreSQL 13)]
        MEDIA["/media\nfile storage"]
    end

    subgraph External
        SMS["Kavenegar\nSMS Gateway"]
    end

    UI -- "NEXT_PUBLIC_API_URL\nHTTP/JSON" --> API
    API -- "asyncpg\nSQLAlchemy 2.0" --> DB
    API -- "aiofiles\nUploadFile" --> MEDIA
    API -- "kavenegar SDK" --> SMS
    UI -- "/media/*\nstatic" --> API
```

---

## Data Model

```mermaid
erDiagram
    account_user {
        bigint id PK
        uuid uid
        varchar mobile UK
        varchar email
        smallint role "1=Admin 2=Manager 3=Customer"
        bool is_staff
        bool is_active
        timestamptz date_joined
    }

    account_authtoken {
        uuid uid PK
        bigint user_id FK
        varchar token1 "4-digit OTP"
        varchar token2
        int failed_attempts
        timestamptz createdAt
        timestamptz updatedAt
    }

    order_order {
        bigint id PK
        uuid uuid
        bigint customer_id FK
        bigint from_language_id FK
        bigint to_language_id FK
        smallint type "1=Official 2=Content 3=Subtitle 4=Paper"
        smallint status "1=New…5=Done"
        smallint delivery_option "1=Normal 2=Fast 3=Urgent"
        timestamptz createdAt
        timestamptz updatedAt
    }

    order_orderitem {
        bigint id PK
        uuid uuid
        bigint order_id FK
        bigint doc_type_id FK
        uuid upload_id FK
        bigint asignee_id FK
        bigint discount_id FK
        smallint stamp "verification level"
        smallint pickup "delivery method"
        smallint status
        int count
        timestamptz createdAt
    }

    order_doctype {
        bigint id PK
        varchar name
        smallint type "order type filter"
        smallint unit "page/word/term…"
        int base_price
        smallint stamp_option
        smallint pickup_option
        int stamp_moj_price
        int stamp_mfa_price
    }

    order_doccategory {
        bigint id PK
        varchar name
        smallint priority
    }

    order_language {
        bigint id PK
        varchar name
        varchar name_fa
        bool is_source
        bool is_destination
    }

    order_upload {
        uuid id PK
        varchar file "relative path"
        uuid ext_id "OrderItem.uuid ref"
        bigint owner_id FK
        timestamptz createdAt
    }

    order_discount {
        bigint id PK
        varchar code UK
        float value
        bigint customer_id FK
        bool is_active
        date expiresOn
    }

    order_invoice {
        bigint id PK
        uuid uuid
        bigint order_id FK
        smallint gateway "1=SEP"
        smallint status "1=New…4=Success"
        varchar tid
        varchar trace
        varchar card
        varchar recipt
    }

    account_user ||--o| account_authtoken : "has token"
    account_user ||--o{ order_order : "customer"
    account_user ||--o{ order_orderitem : "asignee"
    account_user ||--o{ order_upload : "owner"
    account_user ||--o{ order_discount : "customer"

    order_language ||--o{ order_order : "from_language"
    order_language ||--o{ order_order : "to_language"

    order_order ||--o{ order_orderitem : "items"
    order_order ||--o{ order_invoice : "invoices"

    order_doctype ||--o{ order_orderitem : "doc_type"
    order_doccategory }o--o{ order_doctype : "items (M2M)"

    order_upload ||--o| order_orderitem : "upload"
    order_discount ||--o{ order_orderitem : "discount"
```

---

## Authentication Flow

SMS-based two-step login — no passwords.

```mermaid
sequenceDiagram
    actor User
    participant Web as Next.js
    participant API as FastAPI
    participant DB as PostgreSQL
    participant SMS as Kavenegar

    User->>Web: Enter phone number
    Web->>API: POST /api/auth/sms/get_token\n{mobile}
    API->>DB: get_or_create User(mobile)
    API->>DB: get_or_create AuthToken(user)
    API->>SMS: verify_lookup(mobile, token1, "verify")
    SMS-->>User: SMS with 4-digit OTP
    API-->>Web: {success, uuid, expires_on}
    Web->>Web: store uuid in cookie

    User->>Web: Enter OTP
    Web->>API: POST /api/auth/sms/verify_token\n{uuid, token}
    API->>DB: AuthToken.is_valid(token1, token)
    Note over API: OTP expires in 5 min\nmax 5 failed attempts
    API->>API: PyJWT.encode(user_id, SECRET_KEY)\naccess (5d) + refresh (14d)
    API-->>Web: {success, access, refresh, user}
    Web->>Web: store tokens in cookies

    Note over Web,API: Subsequent requests\nAuthorization: Bearer <access>
    Web->>API: POST /api/auth/token/refresh/\n{refresh}
    API->>API: decode + rotate refresh token
    API-->>Web: {access, refresh}
```

---

## Order Creation Flow

```mermaid
sequenceDiagram
    actor Customer
    participant Web as Next.js
    participant API as FastAPI
    participant DB as PostgreSQL
    participant FS as File Storage

    Customer->>Web: GET /order
    Web->>API: GET /api/order/config/
    API->>DB: SELECT languages, doc_types,\ncategories
    API-->>Web: {languages, doc_types, categories,\norder_types, delivery_options,\nstamp_choices, pickup_choices}
    Web->>Web: render order form

    Customer->>Web: Select language pair,\ndoc type, delivery option
    Customer->>Web: Upload document file
    Web->>API: POST /api/order/\n{from_language, to_language,\ntype, delivery_option, items[]}
    API->>DB: INSERT order_order
    API->>DB: INSERT order_orderitem × N
    API-->>Web: OrderOut (with uuid)

    Web->>API: POST /api/order/upload/\nmultipart: file + ext_id=item.uuid
    API->>API: sha1(time+stem)+ext\nfiles/YYYY/MM/hash.ext
    API->>FS: write file async (aiofiles)
    API->>DB: INSERT order_upload\nUPDATE order_orderitem.upload_id
    API-->>Web: {id, file, ext_id}

    Customer->>Web: Confirm & pay
    Web->>API: POST /api/payment/invoice/\n{order_id}
    API->>DB: INSERT order_invoice (gateway=SEP)
    API-->>Web: {uuid, order_id, status=New}
    Note over Web,API: SEP gateway integration\nnot yet implemented (501)
```

---

## Request Routing

```mermaid
flowchart LR
    subgraph Incoming
        B[Browser :3001]
    end

    subgraph api["FastAPI :8801"]
        MW["CORSMiddleware\nHTTPBearer"]
        A["/api/auth/*\nrouters/auth.py"]
        O["/api/order/*\nrouters/order.py"]
        P["/api/payment/*\nrouters/payment.py"]
        M["/media/*\nStaticFiles"]
        ADM["/admin\nSQLAdmin"]
    end

    subgraph deps["dependencies.py"]
        GDB["get_db()\nasync session"]
        GCU["get_current_user()\ndecode JWT"]
        RS["require_staff()\nrole check"]
    end

    subgraph data["Data Layer"]
        SA["SQLAlchemy 2.0\nasync ORM"]
        PG[(PostgreSQL 13)]
        FS[/media/]
    end

    B --> MW
    MW --> A & O & P & M & ADM
    A & O & P --> GDB & GCU & RS
    GDB --> SA --> PG
    O -->|"file upload"| FS
    M -->|"serve"| FS
```

---

## API Reference

### Auth  `POST /api/auth/...`

| Endpoint | Auth | Description |
|---|---|---|
| `POST /sms/get_token` | Public | Request OTP for phone number |
| `POST /sms/verify_token` | Public | Verify OTP → returns JWT pair |
| `POST /token/refresh/` | Public | Rotate refresh token → new pair |
| `GET /users/` | Staff | Paginated user list (excludes superusers) |

### Order  `GET/POST /api/order/...`

| Endpoint | Auth | Description |
|---|---|---|
| `GET /config/` | Public | Languages, doc types, categories, choices |
| `GET /` | Optional | List orders (staff=all, customer=own) |
| `GET /{pk}/` | Optional | Single order detail |
| `POST /` | Optional | Create order + items |
| `GET /langs/` | Public | Language list |
| `GET /types/` | Public | DocType list (optional `?type=` filter) |
| `GET /cats/` | Public | DocCategory list with item IDs |
| `POST /upload/` | Optional | Upload file → link to OrderItem |

### Payment  `POST /api/payment/...`

| Endpoint | Auth | Description |
|---|---|---|
| `POST /invoice/` | Public | Create invoice record (gateway=SEP) |
| `GET /verify/` | Public | `501` — SEP integration pending |

---

## Development

**Prerequisites:** `uv`, `pnpm`, `docker`, `task` (Taskfile)

```bash
# Bootstrap all dependencies
task setup

# Start everything (docker compose)
task dev

# Individual services
task py:dev       # FastAPI on :8000 (hot reload)
task ts:dev       # Next.js on :3000 (hot reload)

# Quality
task lint         # ruff + eslint (parallel)
task py:test      # pytest

# Database
task py:migrate   # alembic upgrade head
task py:migration -- "add column x"  # generate revision

# Production cutover (run once against live DB)
task py:stamp     # alembic stamp head — marks existing DB as migrated
```

**Environment (`apps/api/.env`):**

```env
DATABASE_URL=postgresql+asyncpg://user:password@db/dilma
SECRET_KEY=your-secret-key
KAVEHNEGAR_API_KEY=your-kavenegar-key
DEBUG=1
ALLOWED_ORIGINS=http://localhost:3000
MEDIA_ROOT=/usr/src/app/media
POSTGRES_DB=dilma
POSTGRES_USER=user
POSTGRES_PASSWORD=password
```

**Docker:**

```bash
# Build context must be repo root (uv workspace resolution)
docker build -f apps/api/Dockerfile .
docker compose up --build
```

---

## JWT Token Structure

Tokens are HS256-signed, compatible with the frontend cookie storage.

```json
{
  "token_type": "access",
  "user_id": 42,
  "exp": 1234567890,
  "iat": 1234567890,
  "jti": "uuid4"
}
```

- Access token lifetime: **5 days**
- Refresh token lifetime: **14 days**
- Refresh tokens **rotate** on each use

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from app.core.config import settings
from app.database import create_tables
from app.routers import auth, projects, generations, marketplaces, oauth, admin, billing
from app.routers import telegram as telegram_router

app = FastAPI(
    title="Aiviso API",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url=None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(oauth.router)
app.include_router(projects.router)
app.include_router(generations.router)
app.include_router(marketplaces.router)
app.include_router(telegram_router.webhook_router)
app.include_router(telegram_router.user_router)
app.include_router(admin.router)
app.include_router(billing.router)

os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
app.mount("/media", StaticFiles(directory=settings.UPLOAD_DIR), name="media")


@app.on_event("startup")
async def startup():
    await create_tables()


@app.get("/health")
async def health():
    """Light healthcheck — для load balancer / uptime-monitor.
    Возвращает 200 если api поднялся; не делает дорогих проверок."""
    return {"status": "ok", "version": "1.0.0"}


@app.get("/health/full")
async def health_full():
    """Full healthcheck — проверяет зависимости (БД, Telegram, Vertex AI key file).
    Используется для мониторинга / алертинга. Возвращает 200 даже если есть warnings —
    только сами поля показывают что не так. 503 только если api полностью неработоспособен."""
    import asyncio
    import os
    from sqlalchemy import text
    from app.database import AsyncSessionLocal

    checks: dict = {}

    # 1. Postgres
    try:
        async with AsyncSessionLocal() as db:
            await asyncio.wait_for(db.execute(text("SELECT 1")), timeout=3.0)
        checks["db"] = "ok"
    except Exception as e:
        checks["db"] = f"fail: {type(e).__name__}"

    # 2. Vertex AI ключ
    gcp_key = settings.GOOGLE_APPLICATION_CREDENTIALS
    checks["vertex_key"] = "ok" if (gcp_key and os.path.exists(gcp_key)) else "missing"

    # 3. Telegram bot token (без сетевого вызова — только наличие)
    checks["telegram_token"] = "ok" if settings.TELEGRAM_BOT_TOKEN else "not_configured"

    # 4. OAuth провайдеры
    checks["yandex_oauth"] = "ok" if os.environ.get("YANDEX_OAUTH_CLIENT_ID") else "not_configured"
    checks["vk_oauth"] = "ok" if os.environ.get("VK_OAUTH_CLIENT_ID") else "not_configured"

    # 5. SMSC (опционально)
    checks["smsc"] = "ok" if os.environ.get("SMSC_LOGIN") else "not_configured"

    # 6. Uploads дир
    checks["uploads_dir"] = "ok" if os.path.isdir(settings.UPLOAD_DIR) and os.access(settings.UPLOAD_DIR, os.W_OK) else "fail"

    overall = "ok" if checks["db"] == "ok" and checks["uploads_dir"] == "ok" else "degraded"

    return {
        "status": overall,
        "version": "1.0.0",
        "checks": checks,
    }

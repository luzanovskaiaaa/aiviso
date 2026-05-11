from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # App
    APP_NAME: str = "Aiviso"
    DEBUG: bool = False

    # Database
    DATABASE_URL: str

    # JWT
    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days

    # Google Vertex AI (кредиты GCP)
    GOOGLE_CLOUD_PROJECT: str
    VERTEX_AI_LOCATION: str = "us-central1"
    GOOGLE_APPLICATION_CREDENTIALS: str = "/app/gcp-key.json"
    IMAGE_GEN_MODEL: str = "gemini-3-pro-image-preview"  # дефолтный — используется при flow=single если у проекта model="pro"
    IMAGE_MODEL_PRO: str = "gemini-3-pro-image-preview"  # Premium (Nano Banana Pro), $0.134/image, лучшее качество
    IMAGE_MODEL_FLASH: str = "gemini-3.1-flash-image-preview"  # Nano Banana 2, $0.0672/image — в 2× дешевле Pro, лучше чем 2.5 Flash
    TEXT_MODEL: str = "gemini-2.5-pro"

    # Storage (local uploads)
    UPLOAD_DIR: str = "/uploads"
    MAX_UPLOAD_SIZE_MB: int = 20

    # CORS
    FRONTEND_URL: str = "https://aiviso.ru"

    # T-Bank payments
    TBANK_TERMINAL_KEY: str = ""
    TBANK_SECRET_KEY: str = ""

    # Credits pricing
    CREDITS_PER_IMAGE: int = 10       # 10 кредитов = 1 генерация
    CREDITS_PER_LISTING: int = 80     # полный листинг (8 кадров + QC)

    # Telegram bot (@AIviso_image_bot) — отправка готовых фото пользователям
    TELEGRAM_BOT_TOKEN: str = ""
    TELEGRAM_BOT_USERNAME: str = "AIviso_image_bot"
    TELEGRAM_WEBHOOK_SECRET: str = ""  # сверяется с заголовком X-Telegram-Bot-Api-Secret-Token

    # OAuth-провайдеры (Yandex / VK). Используются в app/routers/oauth.py через os.environ —
    # объявляем здесь, чтобы pydantic-settings не падал на «Extra inputs not permitted».
    YANDEX_OAUTH_CLIENT_ID: str = ""
    YANDEX_OAUTH_CLIENT_SECRET: str = ""
    VK_OAUTH_CLIENT_ID: str = ""
    VK_OAUTH_CLIENT_SECRET: str = ""

    # SMSC.ru — fallback для верификации телефона по SMS
    SMSC_LOGIN: str = ""
    SMSC_PASSWORD: str = ""
    SMSC_SENDER: str = ""  # alpha-имя или короткий номер; пусто = дефолтный

    # ЮKassa (yookassa.ru) — основной платёжный провайдер
    YOOKASSA_SHOP_ID: str = ""
    YOOKASSA_SECRET_KEY: str = ""
    # Т-Касса (tinkoff/Точка) — альтернативный
    TINKOFF_TERMINAL_KEY: str = ""
    TINKOFF_PASSWORD: str = ""

    class Config:
        env_file = ".env"
        extra = "ignore"  # лишние ENV-переменные больше не валят запуск


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()

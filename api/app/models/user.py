from datetime import datetime, timezone
from typing import Optional
from sqlalchemy import String, Integer, BigInteger, DateTime, Boolean, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    credits: Mapped[int] = mapped_column(Integer, default=10)  # 10 кредитов при регистрации (= 1 Pro-гена или 3 Flash)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    # Доступ к админке /admin. По умолчанию false; ставится вручную через БД
    # или через экшн в админке (см. routers/admin.py).
    is_admin: Mapped[bool] = mapped_column(Boolean, default=False)
    # Дефолтный brand kit пользователя (для quick-генераций без проекта и для
    # предзаполнения нового проекта). Может быть null.
    default_brand_kit: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    # Реквизиты юрлица для оплаты по счёту (ИНН, КПП, БИК, расч. счёт и т.д.).
    # Хранится как JSON-объект с ключами: enabled, org_name, inn, kpp, legal_address, bik, account, bank
    legal_entity: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    # Telegram-привязка для отправки готовых фото пользователю в @AIviso_image_bot.
    telegram_chat_id: Mapped[Optional[int]] = mapped_column(BigInteger, nullable=True, index=True)
    telegram_username: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    # Одноразовый код для команды /start CODE в боте — связывает chat и user.
    telegram_connect_code: Mapped[Optional[str]] = mapped_column(String(16), nullable=True, index=True)
    telegram_connect_expires_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    # FSM-состояние диалога с ботом — ожидаем фото / выбираем категорию / выбираем сценарий и т.п.
    bot_state: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    # Magic-link токен для passwordless-логина из Telegram-бота на сайт.
    # Бот генерит → юзер кликает ссылку → /auth/magic redeem'ит токен в JWT → редирект на /app/account/billing.
    # Живёт 10 минут, одноразовый.
    magic_token: Mapped[Optional[str]] = mapped_column(String(64), nullable=True, index=True)
    magic_token_expires_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    # Телефон + флаг верификации. Источник верификации фиксируется в phone_verified_via:
    # "yandex" / "vk" / "telegram" / "smsc". Бонус +10 кредитов начисляется один раз
    # (флаг phone_bonus_granted), при первой успешной верификации любым способом.
    phone: Mapped[Optional[str]] = mapped_column(String(32), nullable=True, index=True)
    phone_verified: Mapped[bool] = mapped_column(Boolean, default=False)
    phone_verified_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    phone_verified_via: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    phone_bonus_granted: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    projects: Mapped[list["Project"]] = relationship("Project", back_populates="user", lazy="select")  # noqa: F821
    payments: Mapped[list["Payment"]] = relationship("Payment", back_populates="user", lazy="select")  # noqa: F821

from datetime import datetime, timezone
from typing import Optional
from sqlalchemy import String, Integer, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    category: Mapped[str] = mapped_column(String(50), nullable=False)  # clothing, furniture, cosmetics, food, electronics
    flow: Mapped[str] = mapped_column(String(16), default="single", nullable=False)  # "single" — одна карточка с AI-overlay; "series" — серия с editable overlay
    model: Mapped[str] = mapped_column(String(16), default="pro", nullable=False)  # "pro" (Pro Image) | "flash" (Flash Image)
    visual_anchor: Mapped[Optional[str]] = mapped_column(Text, nullable=True)  # кэшированный анкор

    # AI-marketing (Иt2)
    title: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    utp: Mapped[Optional[list]] = mapped_column(JSON, nullable=True)  # array of strings
    utp_icons: Mapped[Optional[list]] = mapped_column(JSON, nullable=True)  # массив URL line-art иконок (по одной на УТП, в порядке utp)

    # Market research + concepts (Иt4)
    market_research: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    concepts: Mapped[Optional[list]] = mapped_column(JSON, nullable=True)  # array of {title, utp_focus, scenario, scene_description, icon}

    # Brand Kit — ДНК-стиль карточки. Применяется ко всем генерациям проекта.
    # См. app/services/prompt_builder.py для структуры (palette/typography/decoration/mood).
    brand_kit: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    user: Mapped["User"] = relationship("User", back_populates="projects")  # noqa: F821
    uploads: Mapped[list["Upload"]] = relationship("Upload", back_populates="project", lazy="select")  # noqa: F821
    generations: Mapped[list["Generation"]] = relationship("Generation", back_populates="project", lazy="select")  # noqa: F821


class Upload(Base):
    __tablename__ = "uploads"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    project_id: Mapped[int] = mapped_column(Integer, ForeignKey("projects.id"), nullable=False, index=True)
    file_path: Mapped[str] = mapped_column(String(500), nullable=False)
    original_filename: Mapped[str] = mapped_column(String(255), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    project: Mapped["Project"] = relationship("Project", back_populates="uploads")

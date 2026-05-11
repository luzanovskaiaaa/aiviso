"""
Админ-API. Все endpoints под `is_admin`-гардом.

Назначение админа: вручную через psql (UPDATE users SET is_admin=true WHERE email=...)
или другим админом через PATCH /admin/users/{id}.
"""
from datetime import datetime, timedelta, timezone
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel
from sqlalchemy import select, func, and_, or_
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.models.user import User
from app.models.project import Project
from app.models.generation import Generation
from app.core.security import get_current_user

router = APIRouter(prefix="/admin", tags=["admin"])


async def require_admin(user: User = Depends(get_current_user)) -> User:
    if not user.is_admin:
        raise HTTPException(403, "Доступно только админу")
    return user


# ──────────────────────────────────────────────────────────────────────────────
# /admin/stats — высокоуровневая статистика
# ──────────────────────────────────────────────────────────────────────────────

class StatsResponse(BaseModel):
    users_total: int
    users_phone_verified: int
    users_active_24h: int  # были генерации за 24ч
    users_active_30d: int
    projects_total: int
    generations_total: int
    generations_24h: int
    generations_30d: int
    generations_done: int
    generations_failed: int
    credits_total_in_circulation: int  # сумма всех credits на счетах юзеров
    credits_spent_total: int          # сумма credits_used по всем done-генерациям


@router.get("/stats", response_model=StatsResponse)
async def admin_stats(_: User = Depends(require_admin), db: AsyncSession = Depends(get_db)):
    now = datetime.now(timezone.utc)
    day_ago = now - timedelta(days=1)
    month_ago = now - timedelta(days=30)

    users_total = (await db.execute(select(func.count()).select_from(User))).scalar_one()
    users_phone = (await db.execute(select(func.count()).select_from(User).where(User.phone_verified == True))).scalar_one()  # noqa: E712

    active_users_subquery_24h = (
        select(Generation.project_id).where(Generation.created_at >= day_ago).distinct()
    )
    users_active_24h = (await db.execute(
        select(func.count(func.distinct(Project.user_id)))
        .where(Project.id.in_(active_users_subquery_24h))
    )).scalar_one()

    active_users_subquery_30d = (
        select(Generation.project_id).where(Generation.created_at >= month_ago).distinct()
    )
    users_active_30d = (await db.execute(
        select(func.count(func.distinct(Project.user_id)))
        .where(Project.id.in_(active_users_subquery_30d))
    )).scalar_one()

    projects_total = (await db.execute(select(func.count()).select_from(Project))).scalar_one()
    gens_total = (await db.execute(select(func.count()).select_from(Generation))).scalar_one()
    gens_24h = (await db.execute(select(func.count()).select_from(Generation).where(Generation.created_at >= day_ago))).scalar_one()
    gens_30d = (await db.execute(select(func.count()).select_from(Generation).where(Generation.created_at >= month_ago))).scalar_one()
    gens_done = (await db.execute(select(func.count()).select_from(Generation).where(Generation.status == "done"))).scalar_one()
    gens_failed = (await db.execute(select(func.count()).select_from(Generation).where(Generation.status == "failed"))).scalar_one()

    credits_in_circulation = (await db.execute(select(func.coalesce(func.sum(User.credits), 0)))).scalar_one()
    credits_spent = (await db.execute(
        select(func.coalesce(func.sum(Generation.credits_used), 0)).where(Generation.status == "done")
    )).scalar_one()

    return StatsResponse(
        users_total=int(users_total),
        users_phone_verified=int(users_phone),
        users_active_24h=int(users_active_24h or 0),
        users_active_30d=int(users_active_30d or 0),
        projects_total=int(projects_total),
        generations_total=int(gens_total),
        generations_24h=int(gens_24h),
        generations_30d=int(gens_30d),
        generations_done=int(gens_done),
        generations_failed=int(gens_failed),
        credits_total_in_circulation=int(credits_in_circulation),
        credits_spent_total=int(credits_spent),
    )


# ──────────────────────────────────────────────────────────────────────────────
# /admin/users — список с поиском и пагинацией
# ──────────────────────────────────────────────────────────────────────────────

class UserRow(BaseModel):
    id: int
    email: str
    name: str
    credits: int
    phone: Optional[str] = None
    phone_verified: bool
    phone_verified_via: Optional[str] = None
    telegram_chat_id: Optional[int] = None
    telegram_username: Optional[str] = None
    is_admin: bool
    is_active: bool
    created_at: datetime
    projects_count: int = 0
    generations_count: int = 0


class UsersListResponse(BaseModel):
    items: list[UserRow]
    total: int


@router.get("/users", response_model=UsersListResponse)
async def admin_users_list(
    q: Optional[str] = Query(None, description="Поиск по email/имени/phone"),
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0),
    _: User = Depends(require_admin),
    db: AsyncSession = Depends(get_db),
):
    base = select(User)
    count_base = select(func.count()).select_from(User)
    if q:
        like = f"%{q.strip().lower()}%"
        cond = or_(
            func.lower(User.email).like(like),
            func.lower(User.name).like(like),
            User.phone.like(f"%{q}%"),
        )
        base = base.where(cond)
        count_base = count_base.where(cond)
    base = base.order_by(User.id.desc()).limit(limit).offset(offset)

    users = (await db.execute(base)).scalars().all()
    total = (await db.execute(count_base)).scalar_one()

    if not users:
        return UsersListResponse(items=[], total=0)

    user_ids = [u.id for u in users]
    # Подсчёт проектов и генераций одним запросом для всех юзеров
    pcounts_q = (
        select(Project.user_id, func.count())
        .where(Project.user_id.in_(user_ids))
        .group_by(Project.user_id)
    )
    pcounts = {uid: int(cnt) for uid, cnt in (await db.execute(pcounts_q)).all()}

    gcounts_q = (
        select(Project.user_id, func.count(Generation.id))
        .join(Generation, Generation.project_id == Project.id)
        .where(Project.user_id.in_(user_ids))
        .group_by(Project.user_id)
    )
    gcounts = {uid: int(cnt) for uid, cnt in (await db.execute(gcounts_q)).all()}

    items = [
        UserRow(
            id=u.id, email=u.email, name=u.name, credits=u.credits or 0,
            phone=u.phone, phone_verified=bool(u.phone_verified),
            phone_verified_via=u.phone_verified_via,
            telegram_chat_id=u.telegram_chat_id, telegram_username=u.telegram_username,
            is_admin=bool(u.is_admin), is_active=bool(u.is_active),
            created_at=u.created_at,
            projects_count=pcounts.get(u.id, 0),
            generations_count=gcounts.get(u.id, 0),
        ) for u in users
    ]
    return UsersListResponse(items=items, total=int(total))


# ──────────────────────────────────────────────────────────────────────────────
# /admin/users/{id} — детали + последние генерации
# ──────────────────────────────────────────────────────────────────────────────

class GenRow(BaseModel):
    id: int
    project_id: int
    project_name: Optional[str] = None
    scenario: str
    status: str
    qc_score: Optional[float] = None
    credits_used: int
    created_at: datetime


class UserDetailResponse(BaseModel):
    user: UserRow
    recent_generations: list[GenRow]
    recent_projects: list[dict]


@router.get("/users/{user_id}", response_model=UserDetailResponse)
async def admin_user_detail(
    user_id: int,
    _: User = Depends(require_admin),
    db: AsyncSession = Depends(get_db),
):
    res = await db.execute(select(User).where(User.id == user_id))
    u = res.scalar_one_or_none()
    if not u:
        raise HTTPException(404, "Пользователь не найден")

    pcount = (await db.execute(
        select(func.count()).select_from(Project).where(Project.user_id == user_id)
    )).scalar_one()
    gcount = (await db.execute(
        select(func.count(Generation.id)).select_from(Generation)
        .join(Project, Project.id == Generation.project_id)
        .where(Project.user_id == user_id)
    )).scalar_one()

    user_row = UserRow(
        id=u.id, email=u.email, name=u.name, credits=u.credits or 0,
        phone=u.phone, phone_verified=bool(u.phone_verified),
        phone_verified_via=u.phone_verified_via,
        telegram_chat_id=u.telegram_chat_id, telegram_username=u.telegram_username,
        is_admin=bool(u.is_admin), is_active=bool(u.is_active),
        created_at=u.created_at,
        projects_count=int(pcount), generations_count=int(gcount),
    )

    # Последние 20 генераций
    gens_q = (
        select(Generation, Project)
        .join(Project, Project.id == Generation.project_id)
        .where(Project.user_id == user_id)
        .order_by(Generation.created_at.desc())
        .limit(20)
    )
    gens = []
    for gen, proj in (await db.execute(gens_q)).all():
        gens.append(GenRow(
            id=gen.id, project_id=proj.id, project_name=proj.name,
            scenario=gen.scenario, status=gen.status,
            qc_score=gen.qc_score, credits_used=gen.credits_used or 0,
            created_at=gen.created_at,
        ))

    # Последние 10 проектов
    pjs_q = (
        select(Project).where(Project.user_id == user_id)
        .order_by(Project.created_at.desc()).limit(10)
    )
    projects = [
        {"id": p.id, "name": p.name, "category": p.category, "model": p.model,
         "created_at": p.created_at.isoformat() if p.created_at else None}
        for p in (await db.execute(pjs_q)).scalars().all()
    ]

    return UserDetailResponse(user=user_row, recent_generations=gens, recent_projects=projects)


class UpdateUserRequest(BaseModel):
    credits: Optional[int] = None       # ставит баланс на это число
    credits_delta: Optional[int] = None  # прибавляет/вычитает (приоритет над credits)
    is_admin: Optional[bool] = None
    is_active: Optional[bool] = None
    note: Optional[str] = None  # пока не сохраняем, но принимаем для будущего лога


@router.patch("/users/{user_id}", response_model=UserRow)
async def admin_update_user(
    user_id: int,
    data: UpdateUserRequest,
    _: User = Depends(require_admin),
    db: AsyncSession = Depends(get_db),
):
    res = await db.execute(select(User).where(User.id == user_id))
    u = res.scalar_one_or_none()
    if not u:
        raise HTTPException(404, "Пользователь не найден")

    if data.credits_delta is not None:
        u.credits = max(0, (u.credits or 0) + int(data.credits_delta))
    elif data.credits is not None:
        u.credits = max(0, int(data.credits))
    if data.is_admin is not None:
        u.is_admin = bool(data.is_admin)
    if data.is_active is not None:
        u.is_active = bool(data.is_active)

    await db.commit()
    await db.refresh(u)

    return UserRow(
        id=u.id, email=u.email, name=u.name, credits=u.credits or 0,
        phone=u.phone, phone_verified=bool(u.phone_verified),
        phone_verified_via=u.phone_verified_via,
        telegram_chat_id=u.telegram_chat_id, telegram_username=u.telegram_username,
        is_admin=bool(u.is_admin), is_active=bool(u.is_active),
        created_at=u.created_at,
    )


# ──────────────────────────────────────────────────────────────────────────────
# /admin/generations — лента всех генераций с фильтрами
# ──────────────────────────────────────────────────────────────────────────────

class GenFullRow(BaseModel):
    id: int
    project_id: int
    project_name: Optional[str] = None
    user_id: int
    user_email: str
    scenario: str
    status: str
    qc_score: Optional[float] = None
    credits_used: int
    result_paths: Optional[list[str]] = None
    created_at: datetime


class GenListResponse(BaseModel):
    items: list[GenFullRow]
    total: int


@router.get("/generations", response_model=GenListResponse)
async def admin_generations(
    status: Optional[str] = Query(None),
    user_id: Optional[int] = Query(None),
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0),
    _: User = Depends(require_admin),
    db: AsyncSession = Depends(get_db),
):
    base_q = (
        select(Generation, Project, User)
        .join(Project, Project.id == Generation.project_id)
        .join(User, User.id == Project.user_id)
    )
    count_q = (
        select(func.count(Generation.id))
        .select_from(Generation)
        .join(Project, Project.id == Generation.project_id)
    )
    conds = []
    if status:
        conds.append(Generation.status == status)
    if user_id:
        conds.append(Project.user_id == user_id)
    if conds:
        base_q = base_q.where(and_(*conds))
        count_q = count_q.where(and_(*conds))

    base_q = base_q.order_by(Generation.created_at.desc()).limit(limit).offset(offset)
    total = (await db.execute(count_q)).scalar_one()

    items = []
    for gen, proj, usr in (await db.execute(base_q)).all():
        items.append(GenFullRow(
            id=gen.id, project_id=proj.id, project_name=proj.name,
            user_id=usr.id, user_email=usr.email,
            scenario=gen.scenario, status=gen.status,
            qc_score=gen.qc_score, credits_used=gen.credits_used or 0,
            result_paths=gen.result_paths,
            created_at=gen.created_at,
        ))
    return GenListResponse(items=items, total=int(total))

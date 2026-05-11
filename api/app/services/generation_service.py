"""
Оркестратор генерации:
1. Строит промт (визуальный анкор + слой B + слой C)
2. Вызывает gemini-3-pro-image-preview
3. Запускает QC-агент
4. Ретрай до 3 раз при score < 85
5. Сохраняет результат
"""
import os
import asyncio
import uuid
from datetime import datetime, timezone
from typing import Optional

from google.genai import types
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.gemini import gemini_client as _client
from sqlalchemy import select

from app.core.config import settings
from app.models.project import Project, Upload

from app.models.generation import Generation
from app.services.prompt_builder import (
    generate_visual_anchor, build_prompt, FIDELITY_LAYER,
    NO_TEXT_RULE, POST_OVERLAY_LAYOUT_HINT,
    build_card_overlay_block, build_brand_overlay,
    starter_kit,
)
from app.services.card_brief_agent import propose_card_brief, FALLBACK_BRIEF
from app.services.qc_agent import run_qc
from app.services.scene_agent import propose_scene, render_scene_block
from app.services.post_overlay import compose_bold_accent_caps

MAX_RETRIES = 1  # 1 попытка + автопометка needs_review при QC<порога — экономнее чем 3 попытки
CREDITS_PER_GEN = settings.CREDITS_PER_IMAGE


def _resolve_brand_kit(
    explicit_kit: Optional[dict],
    project: Optional[Project],
    user_default_kit: Optional[dict],
    legacy_card_style: Optional[str],
) -> dict:
    """Резолвер brand kit'а в порядке приоритета:
       1. Явно переданный kit (для override / партнёрки)
       2. Project.brand_kit (мастер-источник для всех генераций проекта)
       3. legacy card_style (если приходит со старого кода — конвертим в kit)
       4. User.default_brand_kit (фирменный дефолт юзера)
       5. bare_typography как безопасный дефолт (без плашек)

    Особый случай: если kit имеет _meta.mode == "ai_freeform" — это маркер режима
    «банана делает с нуля» (без пресетов). Возвращаем как есть, run_generation
    распознает маркер и подключит card_brief_agent вместо build_brand_overlay.
    """
    if explicit_kit:
        return explicit_kit
    if project is not None and project.brand_kit:
        return project.brand_kit
    if legacy_card_style:
        return starter_kit(legacy_card_style)
    if user_default_kit:
        return user_default_kit
    # bare_typography — без плашек. Безопаснее чем minimal_premium (в нём soft-pill).
    return starter_kit("bare_typography")


def _is_ai_freeform(kit: dict) -> bool:
    """True если kit это маркер «ИИ с нуля без пресетов»."""
    meta = (kit or {}).get("_meta") or {}
    return meta.get("mode") == "ai_freeform"


async def run_generation(
    generation_id: int,
    project_id: int,
    scenario: str,
    scene_description: str,
    db: AsyncSession,
    title: Optional[str] = None,
    utp: Optional[list] = None,
    with_icons: bool = False,
    card_style: str = "minimal_premium",
    brand_kit: Optional[dict] = None,
    preserve_model: bool = False,
    photo_aspect: Optional[str] = None,
) -> Generation:
    """Полный цикл генерации с QC и ретраями.

    photo_aspect: для photo-режима (with_icons=False) определяет соотношение сторон
    финального изображения. Для card-режима (with_icons=True) фиксируется на "3:4"
    (стандарт WB/Ozon листинга), параметр игнорируется.
    """
    # Резолвим aspect_ratio: photo-режим — переданный (или 1:1 дефолт), card — 3:4.
    if with_icons:
        aspect_ratio = "3:4"
    else:
        aspect_ratio = (photo_aspect or "1:1").strip()
        if aspect_ratio not in {"1:1", "3:4", "4:5", "16:9", "9:16"}:
            aspect_ratio = "1:1"

    result = await db.execute(select(Generation).where(Generation.id == generation_id))
    gen = result.scalar_one()

    result = await db.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one()

    # Резолвер brand kit'а — единый источник истины для overlay'а
    resolved_kit = _resolve_brand_kit(
        explicit_kit=brand_kit,
        project=project,
        user_default_kit=None,  # для in-cabinet генераций мы кит уже подтянули в проект
        legacy_card_style=card_style,
    )
    # Сохраняем snapshot прямо на генерации для воспроизводимости
    gen.brand_kit_snapshot = resolved_kit
    await db.commit()

    # Получаем первое загруженное фото
    uploads_result = await db.execute(select(Upload).where(Upload.project_id == project_id))
    uploads = uploads_result.scalars().all()
    if not uploads:
        gen.status = "failed"
        gen.qc_details = "Нет загруженных фото в проекте. Загрузите хотя бы одно фото товара и попробуйте снова."
        await db.commit()
        raise ValueError("Нет загруженных фото для проекта")

    primary_upload = uploads[0]
    with open(primary_upload.file_path, "rb") as f:
        original_bytes = f.read()
    orig_mime = _get_mime(primary_upload.file_path)

    # Генерируем или берём кэшированный анкор
    if not project.visual_anchor:
        gen.status = "processing"
        await db.commit()
        anchor = await generate_visual_anchor(original_bytes, orig_mime)
        project.visual_anchor = anchor
        await db.commit()
    else:
        anchor = project.visual_anchor

    gen.status = "processing"
    await db.commit()

    best_result: Optional[bytes] = None
    best_score: float = 0.0
    best_details: str = ""
    fix_instruction: Optional[str] = None
    extra_fidelity = ""

    # AI-подбор сцены под товар + brand kit. Если scene_agent падает (429 / любая ошибка) —
    # build_prompt подставит дефолтную сцену из DEFAULT_SCENE_BLOCKS, юзер ничего не заметит.
    #
    # ВАЖНО: для macro и студийных сценариев НЕ зовём AI-сцену — она перевешивает
    # жёсткие правила из SCENE_TEMPLATES ("крупный план / товар целиком"). Banana
    # потом рисует не то что задумано (макро=общий план кухни, hero=крупный кадр
    # фактуры). Эти сценарии должны строго следовать template'у.
    #
    # background_swap пропускаем — там сцену пишет сам пользователь.
    SKIP_AI_SCENE_FOR = {"background_swap"}
    scene_block_override: Optional[str] = None
    skip_ai_scene = (
        scenario in SKIP_AI_SCENE_FOR
        or scenario.endswith("_macro")
        or scenario.endswith("_studio")
        or scenario.endswith("_packshot")
        or scenario.endswith("_white_cube")
        or scenario.endswith("_ghost")
    )
    if skip_ai_scene:
        print(f"[gen {gen.id}] AI scene SKIPPED for scenario={scenario} (using strict SCENE_TEMPLATES)")
    if not skip_ai_scene:
        # Считаем номер этой генерации в проекте (чтобы scene_agent дал разнообразие
        # при последовательных «генерациях ещё одной» с теми же title/utp).
        try:
            from sqlalchemy import func, select as _sel
            n_res = await db.execute(
                _sel(func.count(Generation.id)).where(Generation.project_id == project.id)
            )
            variation_idx = (n_res.scalar() or 0)  # текущая включительно — предыдущие плюс эта
        except Exception:
            variation_idx = 0
        try:
            scene_dict = await propose_scene(
                anchor=anchor,
                category=project.category or "",
                product_name=project.name or "",
                scenario=scenario,
                brand_kit=resolved_kit,
                user_scene_note=scene_description,
                variation_seed=variation_idx,
            )
            if scene_dict:
                scene_block_override = render_scene_block(scene_dict)
                rationale = (scene_dict.get("rationale") or "").strip()[:200]
                location = (scene_dict.get("location") or "").strip()[:120]
                print(f"[gen {gen.id}] AI scene: «{location}» — {rationale}")
        except Exception as e:
            print(f"[gen {gen.id}] scene_agent skipped: {type(e).__name__}: {str(e)[:160]}")

    # ── Выбор пути для overlay'а ──────────────────────────────────────────────
    # 3 ветки:
    # (1) ai_freeform — Banana верстает с нуля по свободному брифу от card_brief_agent.
    #     Без пресетов, без жёстких плашек, без compose_bold_accent_caps.
    # (2) post_overlay — для пресетов с title_plaque=accent-color (bold_accent_caps).
    #     Banana рисует чистое фото, PIL накладывает заголовок поверх.
    # (3) classic_overlay — для остальных пресетов: build_brand_overlay инжектит в промт
    #     параметры пресета (палитра, типо, плашки) и Banana верстает по ним.
    is_freeform = _is_ai_freeform(resolved_kit)
    ai_brief: Optional[str] = None
    if is_freeform and with_icons and (title or utp):
        # Один раз генерим бриф ДО цикла попыток (чтобы не жечь токены на ретраях).
        try:
            ai_brief = await propose_card_brief(
                image_bytes=original_bytes,
                mime_type=orig_mime,
                category=project.category or "",
                product_name=project.name or "",
                title=title or "",
                utp=utp or [],
                scenario=scenario or "",
            )
            if ai_brief:
                print(f"[gen {gen.id}] AI brief ({len(ai_brief)} chars): {ai_brief[:200]}…")
        except Exception as e:
            print(f"[gen {gen.id}] card_brief_agent skipped: {type(e).__name__}: {str(e)[:160]}")
        if not ai_brief:
            ai_brief = FALLBACK_BRIEF
            print(f"[gen {gen.id}] using FALLBACK_BRIEF")

    for attempt in range(MAX_RETRIES):
        try:
            prompt = build_prompt(
                scenario, anchor, scene_description,
                scene_block_override=scene_block_override,
                preserve_model=preserve_model,
            )

            # AI-overlay в bitmap. Развилка по типу режима — см. комментарий выше.
            uses_post_overlay = (
                not is_freeform
                and with_icons
                and (title or utp)
                and (resolved_kit.get("decoration") or {}).get("title_plaque") == "accent-color"
            )
            if is_freeform and with_icons and (title or utp):
                # AI-FREEFORM: вставляем свободный бриф вместо параметризованного overlay-блока.
                # Бриф уже содержит решение агента — с плашками или без, и какими именно.
                # Banana следует брифу, мы её жёстко не ограничиваем (плашки иногда уместны
                # и должны оставаться возможностью). Только текстовая точность — ультимативна.
                #
                # ⚠️ КРИТИЧНО: НЕ используем слова «TITLE», «USP», «HEADING», «Caption»
                # в самом промте — image-модель буквально срисовывает их на картинку.
                # Поэтому тексты передаём ТОЛЬКО как Cyrillic-строки в кавычках «»,
                # без английских лейблов рядом.
                callouts_block = (
                    "\n".join(f'  • «{u}»' for u in utp) if utp else "  (no callouts)"
                )
                prompt += (
                    "\n\n"
                    "═══════════════════════════════════════════════════════════════════\n"
                    "Text overlay brief from the art director (follow exactly):\n"
                    "═══════════════════════════════════════════════════════════════════\n"
                    f"{ai_brief}\n\n"
                    "Texts to render — Cyrillic, character-perfect, exactly as written:\n\n"
                    f"  Headline: «{title or ''}»\n\n"
                    f"  Short callouts:\n{callouts_block}\n\n"
                    "Render rules:\n"
                    "  • Render ONLY the Cyrillic strings inside «» quotes above.\n"
                    "  • Do NOT render any English words anywhere on the image.\n"
                    "  • Do NOT render the labels «Headline», «Callouts», «USP», «TITLE»,\n"
                    "    «Brief», «Render rules» or any similar technical English markers.\n"
                    "  • The « » quote marks are technical wrappers — do NOT render them.\n"
                    "  • Cyrillic glyphs must be perfect (no transliteration, no garbled letters).\n"
                    "  • Text MUST have strong contrast against its actual background:\n"
                    "      light/grey backgrounds → deep ink text (#14171F);\n"
                    "      dark backgrounds → creamy off-white text (#ECE6D8 or #FFFFFF);\n"
                    "      NEVER white text on light surfaces, NEVER dark text on dark surfaces.\n"
                    "  • The product itself must remain fully visible and unobstructed.\n"
                    "  • Follow the brief's decisions on plaques, typography and placement.\n"
                )
            elif uses_post_overlay:
                prompt += "\n\n" + NO_TEXT_RULE + "\n\n" + POST_OVERLAY_LAYOUT_HINT
            elif with_icons and (title or utp):
                prompt += build_brand_overlay(resolved_kit, title or "", utp or [])
            if fix_instruction:
                prompt += f"\n\nADDITIONAL REQUIREMENT FROM PREVIOUS ATTEMPT: {fix_instruction}"
            if extra_fidelity:
                prompt += f"\n\n{extra_fidelity}"

            # Выбор модели по project.model
            model_id = settings.IMAGE_MODEL_FLASH if project.model == "flash" else settings.IMAGE_MODEL_PRO
            try:
                image_bytes = await _call_with_429_retry(
                    original_bytes, orig_mime, prompt, model=model_id, gen_id=gen.id,
                    aspect_ratio=aspect_ratio,
                )
            except Exception as call_err:
                # Все retry на исходной модели упёрлись в 429 → пробуем модельный fallback.
                # Preview-модели (3 Pro, 3.1 Flash) live ТОЛЬКО на location=global,
                # где работает Dynamic Shared Quota — переключение на стабильный 2.5 Flash
                # помогает, когда global-пул preview перегружен.
                err_str = str(call_err)
                is_429 = ("429" in err_str) or ("RESOURCE_EXHAUSTED" in err_str) or ("quota" in err_str.lower())
                if is_429:
                    fallback_chain = []
                    if model_id == "gemini-3.1-flash-image-preview":
                        fallback_chain = ["gemini-2.5-flash-image", settings.IMAGE_MODEL_PRO]
                    elif "flash" in model_id:
                        fallback_chain = [settings.IMAGE_MODEL_PRO]
                    elif model_id == "gemini-3-pro-image-preview":
                        # Pro упал — даём ещё шанс на 2.5 Flash, чтобы юзер хоть что-то получил.
                        fallback_chain = ["gemini-2.5-flash-image"]
                    last_err = call_err
                    image_bytes = None
                    for fb in fallback_chain:
                        if fb == model_id:
                            continue
                        try:
                            print(f"[gen {gen.id}] {model_id} 429 after retries, falling back to {fb}")
                            image_bytes = await _call_with_429_retry(
                                original_bytes, orig_mime, prompt, model=fb, gen_id=gen.id,
                                aspect_ratio=aspect_ratio,
                            )
                            model_id = fb
                            break
                        except Exception as fb_err:
                            last_err = fb_err
                            continue
                    if image_bytes is None:
                        raise last_err
                else:
                    raise

            # Post-overlay через PIL для bold_accent_caps (см. uses_post_overlay выше).
            # Накладываем accent-цветный заголовок и УТП-плашки на чистое фото от AI.
            if uses_post_overlay:
                try:
                    image_bytes = compose_bold_accent_caps(
                        image_bytes, title or "", utp or [], resolved_kit,
                    )
                    print(f"[gen {gen.id}] post-overlay applied (bold_accent_caps)")
                except Exception as ov_err:
                    print(f"[gen {gen.id}] post-overlay failed: {type(ov_err).__name__}: {str(ov_err)[:200]}")
                    # не критично — отдадим картинку без overlay (чистое фото)

            qc = await run_qc(
                original_bytes=original_bytes,
                generated_bytes=image_bytes,
                anchor=anchor,
                original_mime=orig_mime,
                scenario=scenario,
            )

            if qc.score > best_score:
                best_score = qc.score
                best_result = image_bytes
                best_details = qc.details

            gen.retry_count = attempt
            gen.qc_score = best_score
            gen.qc_details = best_details
            await db.commit()

            if qc.passed:
                break

            fix_instruction = qc.fix_instruction
        except Exception as e:
            if attempt == MAX_RETRIES - 1:
                gen.status = "failed"
                # Сохраняем понятную причину для UI; распознаём типичные классы ошибок.
                err = str(e)
                low = err.lower()
                if "429" in err or "quota" in low or "exhausted" in low:
                    gen.qc_details = "AI-сервис временно перегружен (превышен лимит запросов). Попробуй через 1–2 минуты."
                elif "safety" in low or "blocked" in low or "filter" in low:
                    gen.qc_details = "AI-модель отказалась от генерации (сработал safety-фильтр на фото или промте). Попробуй другой сценарий или фото."
                elif "timeout" in low or "timed out" in low:
                    gen.qc_details = "Превышено время ожидания ответа от AI. Скорее всего временная проблема — попробуй ещё раз."
                else:
                    gen.qc_details = f"Ошибка генерации: {err[:300]}"
                await db.commit()
                raise
            continue

    if best_result is None:
        gen.status = "failed"
        gen.qc_details = "Все попытки генерации провалились — AI не смог получить картинку нужного качества. Попробуй другой сценарий или фото."
        await db.commit()
        raise RuntimeError("Все попытки генерации провалились")

    # Сохраняем результат
    out_dir = os.path.join(settings.UPLOAD_DIR, str(project_id), "results")
    os.makedirs(out_dir, exist_ok=True)
    filename = f"{scenario}_{uuid.uuid4()}.png"
    out_path = os.path.join(out_dir, filename)

    with open(out_path, "wb") as f:
        f.write(best_result)

    # Сразу пишем .webp рядом — фронт покажет его в превью (в ~50× меньше PNG,
    # отображается мгновенно). Оригинал PNG остаётся для «Скачать как есть».
    try:
        from PIL import Image
        from io import BytesIO
        img = Image.open(BytesIO(best_result)).convert("RGB")
        max_w = 1024
        if img.width > max_w:
            ratio = max_w / img.width
            img = img.resize((max_w, int(img.height * ratio)), Image.LANCZOS)
        webp_path = out_path[:-4] + ".webp"
        img.save(webp_path, "WEBP", quality=82, method=6)
    except Exception as e:
        print(f"[gen {gen.id}] webp save failed: {type(e).__name__}: {str(e)[:160]}")

    gen.result_paths = [out_path]
    gen.status = "done" if best_score >= 70 else "needs_review"  # синхронизировано с порогом QC
    gen.completed_at = datetime.now(timezone.utc)
    # credits_used уже выставлен на момент создания записи в роутере (cost_for(project))
    await db.commit()
    await db.refresh(gen)

    # Уведомление в Telegram, если у владельца проекта подключен бот.
    # Не блокируем основной поток — ошибки только пишем в лог.
    try:
        from app.models.user import User as _User
        from app.services import telegram_bot as _tg
        owner_res = await db.execute(select(_User).where(_User.id == project.user_id))
        owner = owner_res.scalar_one_or_none()
        if owner and owner.telegram_chat_id:
            await _tg.send_generation_done(
                owner,
                [out_path],
                project_title=project.title or project.name,
            )
    except Exception:
        import logging as _logging
        _logging.getLogger(__name__).exception("telegram notify failed for gen %s", gen.id)

    return gen


_RETRY_DELAYS_SEC = (5, 15, 45)


async def _call_with_429_retry(
    original_bytes: bytes,
    orig_mime: str,
    prompt: str,
    *,
    model: str,
    gen_id: int,
    aspect_ratio: str = "3:4",
) -> bytes:
    """Вызывает модель и ретраит ТОЛЬКО на 429 RESOURCE_EXHAUSTED с backoff 5s/15s/45s.

    Vertex AI на location=global использует Dynamic Shared Quota — пул освобождается
    за секунды, поэтому повтор почти всегда проходит. Не-429 ошибки прокидываем сразу.
    """
    last_err: Exception | None = None
    for attempt in range(len(_RETRY_DELAYS_SEC) + 1):
        try:
            return await _call_imagen(original_bytes, orig_mime, prompt, aspect_ratio=aspect_ratio, model=model)
        except Exception as e:
            err_str = str(e)
            is_429 = ("429" in err_str) or ("RESOURCE_EXHAUSTED" in err_str) or ("quota" in err_str.lower())
            if not is_429:
                raise
            last_err = e
            if attempt >= len(_RETRY_DELAYS_SEC):
                break
            delay = _RETRY_DELAYS_SEC[attempt]
            print(f"[gen {gen_id}] {model} got 429, sleeping {delay}s (attempt {attempt + 1}/{len(_RETRY_DELAYS_SEC)})")
            await asyncio.sleep(delay)
    assert last_err is not None
    raise last_err


async def _call_imagen(original_bytes: bytes, orig_mime: str, prompt: str, aspect_ratio: str = "3:4", model: str | None = None) -> bytes:
    """Вызывает выбранную image-модель и возвращает байты изображения."""
    # Try to pass ImageConfig if SDK supports it; fall back gracefully otherwise.
    img_cfg = None
    try:
        img_cfg = types.ImageConfig(aspect_ratio=aspect_ratio)
    except Exception:
        pass

    cfg_kwargs = dict(response_modalities=["image"], temperature=0.9)
    if img_cfg is not None:
        cfg_kwargs["image_config"] = img_cfg

    response = await _client.aio.models.generate_content(
        model=model or settings.IMAGE_GEN_MODEL,
        contents=[
            types.Part.from_bytes(data=original_bytes, mime_type=orig_mime),
            prompt,
        ],
        config=types.GenerateContentConfig(**cfg_kwargs),
    )

    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            return part.inline_data.data

    raise RuntimeError("Модель не вернула изображение")


def _get_mime(path: str) -> str:
    ext = path.rsplit(".", 1)[-1].lower()
    return {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(ext, "image/jpeg")

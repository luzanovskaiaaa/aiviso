# AIVISO — Handoff для следующей сессии Claude
**Снимок состояния: 2026-04-26 21:00**

> Этот файл — краткая инструкция самому себе. Если ты Claude и видишь этот файл — прочитай его целиком ПЕРЕД любыми действиями. Полная версия с деталями — в `~/.claude/projects/C--Users-------gdisk-mppro/memory/aiviso_handoff.md`.

---

## Что за проект

**Aiviso (aiviso.ru)** — SaaS для российских селлеров WB/Ozon. AI-генератор фото для карточек товаров на Nano Banana Pro (`gemini-3-pro-image-preview`). Конкурент aidentika.com. Главная фишка — сохранение деталей товара через визуальный анкор + QC-агент с авто-ретраем.

**Срок:** 2 недели от 26.04.2026 (≈ дедлайн 10.05.2026). 8-недельный план из `plan_aidentika_killer.md` сжат вдвое.

## Координаты

- **Локально:** репозиторий aiviso в gdisk
- **Сервер:** prod-сервер (адрес и доступы — в локальной wiki, не в репо). SSH key-only,
  пароль root в gitignored wiki после ротации 2026-05-11.
- **Домены:** `aiviso.ru` → web (3010), `api.aiviso.ru` → api (8000), оба через nginx + Let's Encrypt
- **Стек:** Next.js 15 + FastAPI + Postgres + Redis в docker-compose
- **GCP/Vertex AI:** $300 кредитов, ключ service-account на сервере в `/var/www/aiviso/gcp-key.json`
  (gitignored), `VERTEX_AI_LOCATION=global`
- **Тест-аккаунт:** `qa2@aiviso.ru` (пароль в gitignored wiki, ротирован 2026-05-11)

## Что готово на проде

- ✅ Лендинг + auth (JWT)
- ✅ Загрузка фото → визуальный анкор → генерация → QC → авто-ретрай при QC<85
- ✅ 5 категорий (clothing/furniture/cosmetics/food/electronics) и сценарии под каждую
- ✅ **Аспект 3:4** (1200×1600) для всех генераций
- ✅ **Свободное поле «Сцена»** добавляется в промт
- ✅ **needs_review UX** — "⚠️ Низкий QC", кнопки «Принять» / «Перегенерировать»
- ✅ **Marketing-агент** — кнопка «Сгенерировать заголовок и УТП», редактируемые поля
- ✅ **Карточка с иконками** — чекбокс «Оверлей заголовка и УТП»
- ✅ **Market Research** — кнопка «Сделать research», 6 концепций
- ✅ **Batch-генерация** — выбор N концепций → `/generations/batch`

## ⚠️ ОТКРЫТЫЙ БАГ (это первое, что чиним)

**Симптом:** Алёна жалуется — в карточке проекта https://aiviso.ru/app/projects/1 **кнопка «Сохранить» (в блоке маркетинг-агента) не реагирует на клик**.

**Файл:** `web/src/app/app/projects/[id]/page.tsx`, ~стр. 360, функция `saveMarketing`.

```tsx
const saveMarketing = async () => {
  try {
    const utpJoined = editUtp.filter(u => u.text.trim()).map(u => joinUtp(u.icon, u.text));
    const { data } = await api.patch(`/projects/${id}`, { title: editTitle, utp: utpJoined });
    setProject(data);
  } catch (err: any) {
    alert(err.response?.data?.detail || "Ошибка");
  }
};
```

**Гипотезы (проверить по очереди):**
1. `editTitle`/`editUtp` не привязаны к state input'ов после ответа маркетинг-агента — PATCH улетает с пустыми значениями, проект обновляется null'ами, эффект «ничего не происходит».
2. Pydantic v2 422-ошибка возвращает не `.detail` а `.errors`, alert вылетает с `undefined`.
3. Axios interceptor в `web/src/lib/api.ts` режет PATCH или не подкладывает Bearer.
4. nginx proxy_pass не передаёт PATCH (редко, но бывает).

**Как чинить:**
1. **Сначала** — `curl PATCH /projects/1` с прода (см. ниже команды) — если 200 + данные обновились, баг чисто фронтовый.
2. Открыть консоль браузера через `mcp__Claude_in_Chrome__read_console_messages` И network через `read_network_requests` — посмотреть что в момент клика.
3. **НЕ делать кучу скриншотов** — прошлая сессия упала ровно из-за этого (>20 скриншотов через MCP пробивает лимит 2000px).
4. Починить → залить web через `redeploy_project_page.py` или новый paramiko-скрипт → один итоговый скриншот → отчёт в Telegram.

```bash
# Тест PATCH с прода (пароль qa2 — в локальной wiki):
TOKEN=$(curl -sk -X POST 'https://api.aiviso.ru/auth/login' \
  --data-urlencode "username=qa2@aiviso.ru" --data-urlencode "password=$QA_PW" \
  | python3 -c "import sys,json;print(json.load(sys.stdin)['access_token'])")
curl -sk -X PATCH 'https://api.aiviso.ru/projects/1' \
  -H "Authorization: Bearer $TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"title":"Тест-сейв","utp":["🎯\tТест"]}'
```

## Бэклог по приоритетам (после фикса бага)

1. **Биллинг (Т-Касса/ЮKassa)** — баланс «энергии», списание ~6-8 ₽ себестоимости, цена 25 ₽/кадр. ИП Лузановская, оплата через Т-Банк подключена.
2. **Скачивание ZIP** в размерах WB (900×1200) и Ozon (1000×1000) — раздел 7.5 плана.
3. **«До/После» слайдер** на каждом результате — раздел 7.4.
4. **Брендкит** (логотип/шрифт/палитра один раз) — раздел 7.6.
5. **Demo-кадр без регистрации** на лендинге — раздел 7.1, конверсия ×3.
6. **Phase 2:** WB Content API + Ozon Seller API, Veo 3 видео, Telegram Mini App — разделы 12, 3.2.

## Правила работы (важно!)

- **Деплоить через paramiko-скрипты** (`hotfix_X.py`, `redeploy_X.py`), не выдавать копипасты Алёне. Запуск через PowerShell tool: `& "C:\Users\Алёна\AppData\Local\Python\bin\python3.exe" "путь.py"`.
- **Минимум скриншотов** в MCP Chrome — лимит 2000px накапливается, чат падает.
- **Промты к Gemini — на английском** (качество выше). UI и тексты пользователю — на русском.
- **После значимого этапа** — отчёт в Telegram через скилл `telegram` (бот @Claude_Alena_bot → @ukemu).
- **Алёна — не разработчик**, объяснять кратко и по делу, без жаргона. Часто пишет с телефона.

## Структура проекта (короткая шпаргалка)

```
api/app/
├── core/        # config, gemini-клиент, security/JWT
├── models/      # SQLAlchemy: User, Project (title/utp/market_research/concepts), Upload, Generation
├── routers/     # auth.py, projects.py (Save bug сюда летит PATCH), generations.py
└── services/    # generation_service, marketing_agent, prompt_builder, qc_agent, research_agent

web/src/
├── app/
│   ├── page.tsx                       # лендинг
│   ├── auth/                          # логин/регистрация
│   └── app/
│       ├── page.tsx                   # список проектов
│       └── projects/[id]/page.tsx     # КАРТОЧКА — здесь баг Save
├── lib/api.ts                         # axios + Bearer interceptor
└── store/                             # zustand
```

## Бриф и план (для контекста)

- `C:\Users\Алёна\AppData\Roaming\Claude\local-agent-mode-sessions\21e01908-7122-4c23-a048-02211b4ec348\6d3e7afb-c582-47e3-a785-cc7074f74952\local_20948bc9-135b-46b4-a6ae-8a8430112146\outputs\brief_for_dev_chat.md`
- `C:\Users\Алёна\AppData\Roaming\Claude\local-agent-mode-sessions\21e01908-7122-4c23-a048-02211b4ec348\6d3e7afb-c582-47e3-a785-cc7074f74952\local_20948bc9-135b-46b4-a6ae-8a8430112146\outputs\plan_aidentika_killer.md`

В `plan_aidentika_killer.md` — 14 разделов (архитектура, промт-инжиниринг, библиотека промтов по категориям, QC-агент, биллинг, WB/Ozon API, AI-маркетолог, GCP-деплой). Используется как источник истины при выборе следующих фич.

---

**Первая команда новой сессии:** прочитать этот файл → проверить статус прода (`curl https://aiviso.ru` и `https://api.aiviso.ru/health`) → задиагностировать кнопку Save → починить → пройти по бэклогу.

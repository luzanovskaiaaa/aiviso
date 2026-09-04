import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Чёрная пятница 2026 на WB и Ozon: подготовка — Aiviso",
  description: "Как подготовиться к Чёрной пятнице на WB и Ozon: расчёт цены, карточки, реклама, склад. Чек-лист из 20 пунктов для продавца маркетплейса.",
  keywords: [
    "чёрная пятница wildberries 2026",
    "чёрная пятница ozon 2026",
    "подготовка к черной пятнице маркетплейс",
    "акция черная пятница продавец wb",
    "скидки wildberries черная пятница",
    "ценообразование акция маркетплейс",
    "wildberries распродажа чек-лист",
    "ozon черная пятница как участвовать",
  ],
  alternates: { canonical: "/blog/podgotovka-k-chernoy-pyatnice-marketpleys" },
  openGraph: {
    title: "Чёрная пятница на WB и Ozon 2026: как подготовиться и не уйти в минус",
    description: "Чек-лист из 20 пунктов: цена, карточки, реклама и склад для Чёрной пятницы на маркетплейсах.",
    url: "/blog/podgotovka-k-chernoy-pyatnice-marketpleys",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Чёрная пятница на Wildberries и Ozon 2026: как подготовиться и не уйти в минус",
  description: "Как подготовиться к Чёрной пятнице на маркетплейсах: расчёт цены, карточки, реклама, склад. Чек-лист из 20 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-04",
  dateModified: "2026-09-04",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/podgotovka-k-chernoy-pyatnice-marketpleys",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Чёрная пятница 2026", item: "https://aiviso.ru/blog/podgotovka-k-chernoy-pyatnice-marketpleys" },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function ChornayaPyatnica() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.75, fontSize: 16 }}>
        <nav aria-label="Хлебные крошки" style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Блог</Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Чёрная пятница 2026</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Чёрная пятница на Wildberries и Ozon 2026: как подготовиться и не уйти в минус
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>4 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Чёрная пятница — главная распродажа года на российских маркетплейсах. В 2025 году оборот WB за неделю акции превысил обычную недельную выручку в 3,4 раза. Но каждый второй продавец либо уходит в минус, либо остаётся без товара уже к обеду пятницы. В этой статье — конкретный план подготовки с чек-листом из 20 пунктов.
        </p>

        <h2 style={styles.h2}>Почему Чёрная пятница — не просто ещё одна акция</h2>
        <p style={styles.p}>
          WB и Ozon заранее предупреждают продавцов об акции и требуют установить скидку не менее 20–30% от цены за последние 30 дней. Звучит просто. На деле — ловушка: если не считать юнит-экономику заранее, скидка съедает комиссию и логистику, а продажи идут в минус.
        </p>
        <p style={styles.p}>
          Показательный кейс из 2024 года: продавец из категории «Кухня» участвовал в акции с набором посуды за 1 890 ₽ (скидка 35%). Не учёл, что Wildberries поднял тариф логистики в ноябре, а комиссия категории — 17%. Итого с каждого набора: −42 ₽. За 600 продаж за три дня — минус 25 200 ₽. И это без учёта рекламных расходов.
        </p>
        <p style={styles.p}>
          Другой продавец в той же нише поднял цену за 45 дней до акции, установил скидку 30%, вышел на акционную цену 1 790 ₽ и заработал 14% маржи. При тех же 600 продажах — плюс 87 000 ₽. Разница только в подготовке.
        </p>

        <h2 style={styles.h2}>Когда начинать готовиться</h2>
        <p style={styles.p}>
          Чёрная пятница 2026 на маркетплейсах традиционно проходит в последнюю пятницу ноября — 27 ноября. Старт акции на WB и Ozon обычно за 5–7 дней до даты. Значит, дедлайн для основных действий — середина ноября.
        </p>
        <p style={styles.p}>Часть работы нужно начать уже сейчас, в сентябре:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Сентябрь–октябрь:</strong> поднять цены (чтобы 30-дневная база стала выше), обновить фото, заказать закупку под ноябрьский сток</li>
          <li style={styles.li}><strong>Ноябрь 1–15:</strong> рассчитать минимальную цену участия, подать заявку на акцию, завезти товар на склад FBO</li>
          <li style={styles.li}><strong>Ноябрь 15–26:</strong> настроить рекламу, проверить остатки, убедиться что карточки в порядке</li>
          <li style={styles.li}><strong>27 ноября и далее:</strong> мониторить продажи и остатки каждые 2–3 часа</li>
        </ul>

        <h2 style={styles.h2}>Шаг 1. Цена: как не уйти в минус</h2>
        <h3 style={styles.h3}>Считаем минимальную цену участия</h3>
        <p style={styles.p}>
          Формула минимальной рентабельной цены для акции:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 14, lineHeight: 1.8 }}>
          Цена_min = (Себестоимость + Логистика + Хранение) / (1 − Комиссия% − Маржа%)
        </div>
        <p style={styles.p}>Пример для кружки (себестоимость 280 ₽, FBO WB):</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Себестоимость: 280 ₽</li>
          <li style={styles.li}>Логистика WB FBO: ~80 ₽</li>
          <li style={styles.li}>Хранение за сезон: ~15 ₽</li>
          <li style={styles.li}>Комиссия WB: 17%</li>
          <li style={styles.li}>Целевая маржа: 10%</li>
          <li style={styles.li}><strong>Цена_min = (280 + 80 + 15) / (1 − 0.17 − 0.10) = 375 / 0.73 ≈ 514 ₽</strong></li>
        </ul>
        <p style={styles.p}>
          Если 30-дневная база — 690 ₽, то скидка 30% даёт 483 ₽. Выше минимума — участвуем. Если база 680 ₽, скидка 30% даёт 476 ₽ — это ниже 514 ₽. Не участвуем без предварительного поднятия базы.
        </p>

        <h3 style={styles.h3}>Поднять цену за 45 дней — это законно?</h3>
        <p style={styles.p}>
          Да. Ни WB, ни Ozon не запрещают поднимать цену до акции. Запрещено другое: ставить цену искусственно высокой (в 5–10 раз выше рынка) именно чтобы потом показать «большую скидку». Алгоритмы маркетплейсов это отслеживают и могут снять карточку с акции.
        </p>
        <p style={styles.p}>
          Нормальный диапазон: поднять цену на 20–40% от текущей. Если товар стоил 490 ₽ — поднять до 600–650 ₽ за 45 дней, а на акции выставить 420–450 ₽. Это приемлемо и для маркетплейса, и для покупателя.
        </p>

        <h2 style={styles.h2}>Шаг 2. Карточки и фото: что нужно обновить</h2>
        <p style={styles.p}>
          Трафик на Чёрной пятнице в 3–5 раз выше обычного. Это значит: плохое фото, которое раньше «и так работало», в период акции потеряет вдвое больше покупателей. Обновлять карточки нужно <strong>до акции</strong>, не во время.
        </p>
        <p style={styles.p}>Что проверить по каждой карточке:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото выглядит привлекательно на мобильном в маленьком размере — именно так его видят 78% покупателей в листинге</li>
          <li style={styles.li}>На первом слайде читаемо ключевое преимущество товара</li>
          <li style={styles.li}>Инфографика с характеристиками — не позже 3-го слайда</li>
          <li style={styles.li}>Минимум 6 фото в карточке (алгоритм ранжирует карточки с 5+ фото выше)</li>
          <li style={styles.li}>Фото соответствуют реальному товару — при высоких объёмах продаж растёт число возвратов из-за несоответствия</li>
        </ul>
        <p style={styles.p}>
          Обновить фото для 30–50 карточек вручную нереально за разумное время. Один клиент из категории «Дом и интерьер» обновил 47 карточек за выходные с помощью <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерации в Aiviso</Link> — средний CTR вырос с 2,1% до 3,4% ещё до старта акции. В период Чёрной пятницы это дало +29% к выручке по сравнению с прошлым годом.
        </p>
        <p style={styles.p}>
          Подробнее о том, что должно быть на главном фото — в статье <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>«Главное фото карточки: 8 правил первого слайда»</Link>.
        </p>

        <h2 style={styles.h2}>Шаг 3. Реклама в период акции</h2>
        <h3 style={styles.h3}>Когда запускать и сколько закладывать</h3>
        <p style={styles.p}>
          В дни Чёрной пятницы ставки в рекламном аукционе WB и Ozon вырастают в 2–4 раза. Запускать рекламу на пике дорого. Правильная стратегия — начать за 3–5 дней до акции, когда трафик уже растёт, а ставки ещё умеренные.
        </p>
        <p style={styles.p}>
          Бюджет на рекламу в период ЧП: закладывайте 5–8% от ожидаемой выручки. Если планируете продать на 500 000 ₽, реклама — 25 000–40 000 ₽. Больше — риск уйти в минус по ДРР.
        </p>

        <h3 style={styles.h3}>Приоритет кампаний</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Поисковая реклама</strong> — на ключи по каждому товару-лидеру. Не распылять на весь каталог.</li>
          <li style={styles.li}><strong>Карусельная / трафаретная</strong> — для товаров, которые уже в топ-30 органики. Им нужно чуть «подтолкнуть» позицию в конкурентный период.</li>
          <li style={styles.li}><strong>Медийная / баннеры</strong> — только если есть бюджет сверх основного плана. ROAS в период акции у медийки слабый.</li>
        </ul>

        <p style={styles.p}>
          Настраивать дневные лимиты обязательно. Без лимита алгоритм может потратить суточный бюджет за первые 2 часа пятницы — и оставить карточку без трафика на весь остаток дня.
        </p>

        <h2 style={styles.h2}>Шаг 4. Логистика и склад</h2>
        <h3 style={styles.h3}>Сколько закупать под акцию</h3>
        <p style={styles.p}>
          Формула запаса для ЧП: среднедневные продажи × 14 × коэффициент сезонности.
        </p>
        <p style={styles.p}>
          Если товар продаётся 5 штук в день, а в прошлую ЧП продавалось в 6 раз больше — нужно 5 × 14 × 6 = 420 единиц на складе к 20 ноября. Если данных по прошлому году нет — закладывайте коэффициент ×4 минимум.
        </p>
        <p style={styles.p}>
          Дедлайн для поставки на FBO WB — не позже 18–20 ноября. Склады перегружены в этот период, приёмка идёт медленнее, бронирование слотов заканчивается быстро. Кто не успел завезти товар — теряет продажи в главный день года.
        </p>

        <h3 style={styles.h3}>FBO или FBS в период ЧП</h3>
        <p style={styles.p}>
          Для массового товара — однозначно FBO. Скорость доставки критична для конверсии: покупатель выбирает между двумя похожими товарами — один приедет завтра (FBO), другой через 5 дней (FBS). Выбор очевиден.
        </p>
        <p style={styles.p}>
          FBS оставьте для крупногабаритного товара или позиций с нестабильным спросом, которые нет смысла замораживать на складе.
        </p>

        <h2 style={styles.h2}>Шаг 5. Мониторинг во время акции</h2>
        <p style={styles.p}>
          В дни акции нужно проверять остатки минимум каждые 3 часа. Ноль на складе — это не только потерянные продажи. WB и Ozon понижают позицию карточки при исчезновении стока даже на несколько часов, и восстановить её после акции стоит дополнительных усилий.
        </p>
        <p style={styles.p}>Что мониторить:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Остатки по складам — отдельно по каждому складу WB если товар распределён</li>
          <li style={styles.li}>ДРР рекламных кампаний — при выходе выше 25% снижать ставки или отключать</li>
          <li style={styles.li}>Возвраты — всплеск выше обычного сигнализирует о проблеме с описанием или упаковкой</li>
          <li style={styles.li}>Позиции по ключевым запросам — раз в 6 часов</li>
        </ul>

        <h2 style={styles.h2}>Полный чек-лист из 20 пунктов</h2>

        <p style={styles.p}><strong>Сентябрь–октябрь — делаем прямо сейчас:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Посчитать юнит-экономику каждого товара на акционной цене по формуле выше</li>
          <li style={styles.li}>Определить минимальную рентабельную цену участия для каждой позиции</li>
          <li style={styles.li}>Поднять цены на товары-участники на 20–40% (не менее чем за 45 дней до акции)</li>
          <li style={styles.li}>Заказать закупку товара под ноябрьский сток — запас = среднедневные продажи × 14 × коэффициент</li>
          <li style={styles.li}>Обновить главное фото и инфографику в карточках</li>
          <li style={styles.li}>Проверить SEO: заголовок, характеристики, описание каждой карточки-участника</li>
          <li style={styles.li}>Собрать недостающие отзывы — цель минимум 10 перед стартом акции</li>
        </ul>

        <p style={{ ...styles.p, marginTop: 20 }}><strong>Ноябрь 1–15:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Подать заявку на участие в акции ЧП — обычно открывается за 3–4 недели до старта</li>
          <li style={styles.li}>Проверить рассчитанный % скидки — не ниже требования маркетплейса</li>
          <li style={styles.li}>Забронировать слоты для поставки FBO на склад WB</li>
          <li style={styles.li}>Заказать допоставку если запас ниже расчётного</li>
          <li style={styles.li}>Настроить автоставку рекламы с дневным лимитом</li>
          <li style={styles.li}>Подготовить шаблоны ответов на отзывы для периода высокой нагрузки</li>
        </ul>

        <p style={{ ...styles.p, marginTop: 20 }}><strong>Ноябрь 15–26:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Завезти товар на FBO WB — жёсткий дедлайн 20 ноября</li>
          <li style={styles.li}>Проверить наличие товара на ближайших региональных складах WB</li>
          <li style={styles.li}>Включить рекламные кампании за 3–5 дней до ЧП</li>
          <li style={styles.li}>Проверить карточки: отображается ли плашка «скидки» в листинге</li>
          <li style={styles.li}>Подготовить таблицу мониторинга: остатки, ДРР, позиции</li>
        </ul>

        <p style={{ ...styles.p, marginTop: 20 }}><strong>В дни акции:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Мониторить остатки каждые 2–3 часа, при нуле — подключать FBS как резерв</li>
          <li style={styles.li}>Контролировать ДРР и при выходе выше 25% — снижать ставки или отключать кампании</li>
        </ul>

        <h2 style={styles.h2}>Три главные ошибки, которые стоят денег</h2>
        <p style={styles.p}>
          Анализируя десятки кейсов продавцов, которые участвовали в Чёрной пятнице на WB и Ozon, видим три повторяющиеся ошибки:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Не считают юнит-экономику на акционной цене.</strong> Устанавливают скидку интуитивно, без расчёта — и уходят в минус при высоких объёмах. Особенно болезненно в категориях с высокой логистикой (крупногабарит, FBS).
          </li>
          <li style={styles.li}>
            <strong>Не обновляют фото.</strong> Трафик вырастает в 3–5 раз, а конверсия с плохим главным фото падает вдвое. Итого: в 1,5 раза меньше продаж при тех же расходах на рекламу.
          </li>
          <li style={styles.li}>
            <strong>Не завозят достаточно товара заранее.</strong> Нулевой сток в пятницу в 11:00 — потеря половины дня акции и просадка позиций на 2–3 недели после. Восстановить органику после такого провала стоит усилий и денег.
          </li>
        </ul>

        <h2 style={styles.h2}>Что делает разницу между минусом и плюсом</h2>
        <p style={styles.p}>
          Чёрная пятница — это не про скидки. Это про подготовку. Продавцы, которые начинают готовиться в сентябре, в ноябре просто выполняют план. Продавцы, которые начинают 20 ноября, бегут за поездом: слоты на складе заняты, закупка не успела прийти, фото не обновлены.
        </p>
        <p style={styles.p}>
          Три вещи, которые отделяют прибыльную ЧП от убыточной: правильная цена (посчитанная заранее), обновлённые карточки (сделанные до акции) и достаточный сток (завезённый до 20 ноября). Всё остальное — детали.
        </p>
        <p style={styles.p}>
          Больше о том, как работать с акциями без ущерба для маржи — в статье <Link href="/blog/aktsii-wb-ozon" style={{ color: "#7c3aed" }}>«Акции на WB и Ozon: как участвовать и не уйти в минус»</Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#5b21b6" }}>
            Обновите карточки до Чёрной пятницы
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Успеть обновить 30–50 карточек за выходные — реально с AI-генерацией. Загружаете фото товара, получаете готовые снимки в формате 900×1200 для WB и Ozon — без студии, без фотографа, от 15 ₽ за кадр.
          </p>
          <Link href="/app" style={{ display: "inline-block", background: "#7c3aed", color: "white", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>
            Попробовать в Aiviso
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 6 }}><Link href="/blog/aktsii-wb-ozon" style={{ color: "#7c3aed" }}>Акции на WB и Ozon: как участвовать и не уйти в минус</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>Юнит-экономика для маркетплейса: формула и таблица</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки: 8 правил первого слайда</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog/sezonnye-tovary-kalendar-2026" style={{ color: "#7c3aed" }}>Сезонные товары: календарь продаж 2026</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

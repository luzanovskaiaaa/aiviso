import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Реклама на Wildberries в 2026: пошаговый гайд для селлеров — Aiviso",
  description: "Как запустить рекламу на Wildberries, выбрать тип кампании, поставить ставку и не слить бюджет. Чек-лист из 15 шагов и реальные кейсы.",
  keywords: [
    "реклама на wildberries",
    "реклама в поиске wildberries",
    "wildberries ставка за показ",
    "автотаргетинг wildberries",
    "как настроить рекламу на вб",
    "продвижение карточки wildberries",
    "бюджет на рекламу wildberries",
    "кпэ рекламы wildberries",
  ],
  alternates: { canonical: "/blog/reklama-na-wildberries" },
  openGraph: {
    title: "Реклама на Wildberries в 2026: пошаговый гайд",
    description: "Как запустить рекламу на Wildberries, выбрать тип кампании и не слить бюджет. Чек-лист из 15 шагов.",
    url: "/blog/reklama-na-wildberries",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Реклама на Wildberries в 2026: пошаговый гайд для селлеров",
  description: "Как запустить рекламу на Wildberries, выбрать тип кампании, поставить ставку и не слить бюджет. Чек-лист из 15 шагов и реальные кейсы.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/reklama-na-wildberries",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Реклама на Wildberries", item: "https://aiviso.ru/blog/reklama-na-wildberries" },
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

export default function ReklamaNaWildberries() {
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
          <span style={{ color: "#1f2937" }}>Реклама на Wildberries</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Реклама на Wildberries в 2026: пошаговый гайд для селлеров
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 2 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Новая карточка на WB без рекламы может месяцами ждать органических продаж — алгоритм продвигает тех, у кого уже есть оборот. Реклама разрывает этот круг. Разбираем, как запуститься правильно, какой тип кампании выбрать и как не потратить бюджет впустую.
        </p>

        <h2 style={styles.h2}>Как устроена реклама на Wildberries в 2026</h2>
        <p style={styles.p}>
          WB работает по модели аукциона с оплатой за 1000 показов (CPM). Рекламный кабинет называется <strong>WB Продвижение</strong> — он доступен всем продавцам через личный кабинет в разделе «Реклама». Деньги списываются только за реальные показы: заплатил — карточка показывается, кончились деньги — встала.
        </p>
        <p style={styles.p}>
          Алгоритм WB при ранжировании учитывает: конверсию карточки (CTR в поиске, конверсию в заказ), рейтинг товара, скорость доставки, историю продаж. Реклама даёт показы — но купят ли — зависит от карточки. Именно поэтому неподготовленная карточка «сжигает» бюджет: показы идут, кликов нет.
        </p>

        <h2 style={styles.h2}>Типы рекламных кампаний на WB</h2>

        <h3 style={styles.h3}>1. Реклама в поиске</h3>
        <p style={styles.p}>
          Карточка показывается на позициях 1–4 в результатах поиска по ключевым словам. Самый конверсионный тип — покупатель уже ищет именно этот товар. Ставки в конкурентных нишах (женская одежда, косметика) стартуют от 150–200 ₽/1000 показов, в нишевых категориях — от 50–80 ₽.
        </p>

        <h3 style={styles.h3}>2. Реклама в каталоге</h3>
        <p style={styles.p}>
          Карточка поднимается в листинге категории. Хорошо работает для товаров, которые покупают «вдоль полки» (посуда, декор, детское питание). Дешевле поиска в среднем на 30–40%, но трафик менее горячий.
        </p>

        <h3 style={styles.h3}>3. Реклама в карточке товара (рекомендации)</h3>
        <p style={styles.p}>
          Ваш товар показывается в блоке «С этим покупают» или «Похожие товары» на страницах конкурентов. Хорошо для кросс-продаж и нишевых товаров, где категория маленькая.
        </p>

        <h3 style={styles.h3}>4. Автотаргетинг</h3>
        <p style={styles.p}>
          WB сам выбирает, где и кому показывать карточку — в поиске, каталоге, рекомендациях. Алгоритм анализирует карточку и находит похожие запросы. Удобно для старта: не нужно вручную подбирать ключи. Минус — меньше контроля над расходом.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Тип</th>
              <th style={styles.th}>Для кого</th>
              <th style={styles.th}>Средняя ставка (CPM)</th>
              <th style={styles.th}>Конверсия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Поиск</td>
              <td style={styles.td}>Все, у кого есть ключи</td>
              <td style={styles.td}>80–250 ₽</td>
              <td style={styles.tdAccent}><strong>Высокая</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Каталог</td>
              <td style={styles.td}>Категорийные товары</td>
              <td style={styles.td}>50–150 ₽</td>
              <td style={styles.td}>Средняя</td>
            </tr>
            <tr>
              <td style={styles.td}>Карточка</td>
              <td style={styles.td}>Кросс-продажи</td>
              <td style={styles.td}>30–100 ₽</td>
              <td style={styles.td}>Низкая–средняя</td>
            </tr>
            <tr>
              <td style={styles.td}>Автотаргетинг</td>
              <td style={styles.td}>Старт, тест</td>
              <td style={styles.td}>50–200 ₽</td>
              <td style={styles.td}>Зависит от карточки</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Шаг 1: Подготовь карточку перед запуском рекламы</h2>
        <p style={styles.p}>
          Запускать рекламу на слабую карточку — выбрасывать деньги. Покупатель увидит карточку, кликнет, не купит. CTR упадёт, алгоритм поднимет ставку нужную для удержания позиции, расход вырастет. Это петля.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «чехлы для телефонов» запустил рекламу с одним фото на белом фоне без инфографики. Потратил 12 000 ₽ за 4 дня — 0 заказов. Переделал фото: добавил 6 кадров с инфографикой и lifestyle. Те же ключи, те же ставки — 23 заказа за первую неделю.
        </p>

        <p style={styles.p}>Перед запуском рекламы проверь:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Минимум 5–7 фото (главное + детали + lifestyle + инфографика)</li>
          <li style={styles.li}>Первое фото — вертикальное 900×1200, товар занимает 80% кадра</li>
          <li style={styles.li}>Инфографика с 3–4 ключевыми преимуществами — читаема в миниатюре</li>
          <li style={styles.li}>Заголовок содержит главный ключевой запрос</li>
          <li style={styles.li}>Характеристики заполнены на 100% — влияют на ранжирование</li>
          <li style={styles.li}>Рейтинг товара от 4.5 (если есть отзывы) — низкий рейтинг убивает конверсию</li>
          <li style={styles.li}>Цена конкурентоспособна: не выше топ-5 в категории более чем на 15%</li>
        </ul>

        <p style={styles.p}>
          Если фото нет или они слабые — сначала <Link href="/app" style={{ color: "#7c3aed" }}>сгенерируй профессиональные кадры в Aiviso</Link>, потом запускай рекламу. Иначе бюджет уйдёт в никуда.
        </p>

        <h2 style={styles.h2}>Шаг 2: Подбор ключевых слов для поиска</h2>
        <p style={styles.p}>
          Ключи для рекламы в поиске — не то же самое, что SEO-ключи в заголовке. Для рекламы нужны <strong>транзакционные запросы</strong> — те, по которым покупатель уже готов купить прямо сейчас.
        </p>

        <h3 style={styles.h3}>Как собрать ключи</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>WB-подсказки:</strong> начни вводить название товара в поиске WB — автосаджест покажет реальные запросы</li>
          <li style={styles.li}><strong>MPStats / Moneyplace / Wildbox:</strong> платные инструменты с частотностью запросов и ставками конкурентов</li>
          <li style={styles.li}><strong>Карточки конкурентов:</strong> открой топ-3 в категории, посмотри их заголовки и описания — там уже вшиты рабочие ключи</li>
          <li style={styles.li}><strong>Яндекс.Wordstat:</strong> не прямой показатель для WB, но помогает найти синонимы и длинный хвост</li>
        </ul>

        <p style={styles.p}>
          Стартовый набор — 15–30 ключей. Слишком узкий список (3–5 ключей) даст мало показов. Слишком широкий (200+ ключей) — показы по нерелевантным запросам и пустой бюджет.
        </p>

        <h3 style={styles.h3}>Минус-слова</h3>
        <p style={styles.p}>
          Обязательно добавь минус-слова — запросы, по которым <em>не</em> нужно показываться. Например, продаёшь чехол для iPhone 15 — исключи «samsung», «xiaomi», «huawei». Без минус-слов реклама покажется нерелевантной аудитории и CTR упадёт.
        </p>

        <h2 style={styles.h2}>Шаг 3: Как поставить ставку</h2>
        <p style={styles.p}>
          WB показывает рекомендованную ставку в интерфейсе кампании. Это ставка, при которой карточка попадает в топ рекламного блока. На практике:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Ставка = рекомендованная × 0.7–0.8</strong> — стартовая точка. Так войдёшь в аукцион без переплаты.</li>
          <li style={styles.li}>Через 2–3 дня смотри позицию. Если карточка на 3–4 месте в рекламном блоке — нормально. Если постоянно на 6–8 — поднимай ставку на 10–15%.</li>
          <li style={styles.li}>Не гонись за 1-м местом — разница в конверсии между 1-м и 3-м местом 5–8%, а разница в ставке может быть 30–40%.</li>
        </ul>

        <p style={styles.p}>
          Кейс: продавец детских игрушек поставил ставку 220 ₽ (рекомендованная 280 ₽). Занял 3–4 позицию. CTR 4.2%, конверсия 6.8%. Снизил ставку до 180 ₽ — позиция упала до 5–6, CTR 2.9%. Вернул 210 ₽ — нашёл баланс: хорошая позиция при приемлемом CPM.
        </p>

        <h2 style={styles.h2}>Шаг 4: Дневной бюджет и расписание</h2>
        <p style={styles.p}>
          Минимальный дневной бюджет на WB — 500 ₽. Для теста рекомендуем стартовать с <strong>1 000–1 500 ₽/день</strong>. Этого хватит на 5 000–15 000 показов в зависимости от ставки — достаточно чтобы за 5–7 дней получить статистику для решений.
        </p>

        <h3 style={styles.h3}>Расписание показов</h3>
        <p style={styles.p}>
          По умолчанию реклама крутится круглосуточно. Это не всегда оптимально: покупатели на WB наиболее активны с 10:00 до 14:00 и с 19:00 до 23:00 по московскому времени. Ночные показы (00:00–07:00) часто дают показы без конверсий — бюджет тратится, заказов нет.
        </p>
        <p style={styles.p}>
          Если бюджет ограничен — ограничь время показа пиковыми часами. Экономия 20–30% бюджета при сохранении 80–85% конверсий.
        </p>

        <h2 style={styles.h2}>Шаг 5: Анализ результатов — какие метрики смотреть</h2>
        <p style={styles.p}>
          В кабинете WB Продвижение доступны основные метрики. Вот что важно и что означает:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Метрика</th>
              <th style={styles.th}>Что означает</th>
              <th style={styles.th}>Норма</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>CTR (клики / показы)</td>
              <td style={styles.td}>Насколько привлекает фото и заголовок</td>
              <td style={styles.tdAccent}><strong>2–5%</strong> в поиске</td>
            </tr>
            <tr>
              <td style={styles.td}>CR (заказы / клики)</td>
              <td style={styles.td}>Насколько убеждает карточка</td>
              <td style={styles.tdAccent}><strong>4–8%</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>CPO (стоимость заказа)</td>
              <td style={styles.td}>Сколько тратишь рекламой на 1 заказ</td>
              <td style={styles.td}>Зависит от маржи</td>
            </tr>
            <tr>
              <td style={styles.td}>ДРР (расход / выручка)</td>
              <td style={styles.td}>Доля рекламного расхода в выручке</td>
              <td style={styles.td}><strong>5–15%</strong> — норма</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          <strong>Ключевой показатель — ДРР.</strong> Если ДРР 8% при наценке 40% — реклама рентабельна. Если ДРР 25% при наценке 20% — работаешь в минус. Считай ДРР отдельно по каждой кампании, не в среднем по аккаунту.
        </p>

        <h2 style={styles.h2}>5 ошибок, которые сжигают бюджет</h2>

        <h3 style={styles.h3}>1. Запуск без подготовки карточки</h3>
        <p style={styles.p}>
          Уже разбирали выше. Слабое фото, пустые характеристики, низкий рейтинг — реклама покажет карточку, покупатель уйдёт. Сначала <Link href="/app" style={{ color: "#7c3aed" }}>прокачай визуал карточки</Link>, потом включай рекламу.
        </p>

        <h3 style={styles.h3}>2. Нет минус-слов</h3>
        <p style={styles.p}>
          Без минус-слов автотаргетинг или широкие ключи приведут нерелевантную аудиторию. Продаёшь летние платья — без минусов покажешься по «платья зимние», «платья свадебные», «платья со скидкой». Трафик есть, заказов нет.
        </p>

        <h3 style={styles.h3}>3. Слишком высокая ставка с первого дня</h3>
        <p style={styles.p}>
          Желание встать на 1-е место понятно, но дорого. Стартуй с 70–80% от рекомендованной ставки. Алгоритм WB всё равно поднимет позицию, если CTR хороший — высокий CTR снижает эффективную ставку, которую платишь.
        </p>

        <h3 style={styles.h3}>4. Нет ограничения дневного бюджета</h3>
        <p style={styles.p}>
          Без лимита WB может потратить весь пополненный баланс за день. Особенно в высококонкурентные дни (пятница вечер, предпраздничные дни). Всегда ставь дневной лимит — даже если хочешь «дать алгоритму разогнаться».
        </p>

        <h3 style={styles.h3}>5. Оценка результатов за 1–2 дня</h3>
        <p style={styles.p}>
          Алгоритму нужно время на обучение. Минимальный период для вывода — 5–7 дней при бюджете от 1 000 ₽/день. Если паузировать кампанию раньше — теряешь накопленную историю, алгоритм стартует заново.
        </p>

        <h2 style={styles.h2}>Чек-лист: 15 шагов перед запуском рекламы на WB</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Карточка имеет минимум 5 фото, главное — 900×1200 пикселей</li>
          <li style={styles.li}>На первом фото товар занимает 75–85% кадра</li>
          <li style={styles.li}>Есть инфографика с 3–4 УТП, читаемая в миниатюре 150×200px</li>
          <li style={styles.li}>Заголовок содержит главный ключевой запрос (до 60 символов)</li>
          <li style={styles.li}>Характеристики заполнены полностью (цвет, материал, размер, вес и т.д.)</li>
          <li style={styles.li}>Описание содержит дополнительные ключи (не дублирует заголовок)</li>
          <li style={styles.li}>Рейтинг товара 4.5+ (если уже есть отзывы)</li>
          <li style={styles.li}>Цена в пределах ±15% от медианы топ-5 конкурентов</li>
          <li style={styles.li}>Собраны 15–30 ключевых слов для поиска</li>
          <li style={styles.li}>Добавлены минус-слова (нерелевантные запросы исключены)</li>
          <li style={styles.li}>Стартовая ставка = рекомендованная × 0.75</li>
          <li style={styles.li}>Дневной бюджет установлен (не менее 1 000 ₽ для теста)</li>
          <li style={styles.li}>Расписание показов ограничено пиковыми часами (если бюджет мал)</li>
          <li style={styles.li}>Настроена аналитика: UTM-метки или отслеживание через WB Analytics</li>
          <li style={styles.li}>Период оценки кампании — минимум 7 дней</li>
        </ul>

        <h2 style={styles.h2}>Реклама и органика: как они работают вместе</h2>
        <p style={styles.p}>
          Реклама не существует отдельно от органики. Когда карточка получает рекламные заказы — растут продажи, алгоритм начинает поднимать её в органическом поиске. Через 2–3 недели активной рекламы многие позиции начинают приходить бесплатно.
        </p>
        <p style={styles.p}>
          Логика такая: реклама даёт первый оборот, оборот поднимает карточку органически, органика снижает зависимость от рекламы. Продавец в категории «рюкзаки для школы» за июль–август потратил 45 000 ₽ на рекламу, вышел в топ-10 по 3 основным ключам — и в сентябре уже половину заказов получал без рекламных расходов.
        </p>
        <p style={styles.p}>
          Но для этого нужна сильная карточка: <Link href="/blog" style={{ color: "#7c3aed" }}>читай другие наши гайды по карточкам</Link> — про фото, инфографику, SEO и конверсию.
        </p>

        <h2 style={styles.h2}>Сколько закладывать на рекламу: расчёт</h2>
        <p style={styles.p}>
          Стандартный ориентир для новой карточки — ДРР 10–15% от оборота на первые 30–45 дней. Это период «разгона». Потом, когда карточка набрала позиции, ДРР снижается до 5–8%.
        </p>
        <p style={styles.p}>Пример расчёта:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар стоит 1 500 ₽</li>
          <li style={styles.li}>Цель: 30 заказов за первый месяц</li>
          <li style={styles.li}>Выручка: 45 000 ₽</li>
          <li style={styles.li}>Рекламный бюджет при ДРР 12%: <strong>5 400 ₽/мес</strong> (180 ₽/день)</li>
          <li style={styles.li}>Наценка 35% = 15 750 ₽ валовой прибыли</li>
          <li style={styles.li}>После вычета рекламы и комиссии WB (23%): ~5 000–6 000 ₽ чистой прибыли</li>
        </ul>
        <p style={styles.p}>
          На первый взгляд немного. Но эти 30 заказов — это история продаж, рейтинг, позиции в органике. Через месяц тот же товар будет продавать 50–70 заказов при том же рекламном бюджете.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Карточка готова к рекламе?</strong> Проверь главное фото: занимает ли товар 80% кадра, есть ли инфографика, читаемая в миниатюре?{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Сгенерируй профессиональные кадры в Aiviso</Link>
            {" "}— 13 бесплатных кредитов на старте. Улучшенное фото до запуска рекламы может снизить стоимость заказа в 2–3 раза.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%: чек-лист</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>7 ошибок с фото товара, которые убивают конверсию</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}

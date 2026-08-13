import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Оборачиваемость товара на WB и Ozon: формула и нормы — Aiviso",
  description: "Как считать оборачиваемость товара на Wildberries и Ozon, какой показатель считается нормой, как избежать платного хранения и что делать если товар встал. Формулы и чек-лист.",
  keywords: [
    "оборачиваемость товара wildberries",
    "платное хранение wb",
    "оборачиваемость ozon",
    "как считать оборачиваемость маркетплейс",
    "тарифы хранения wildberries 2026",
    "тарифы хранения ozon 2026",
    "товар застрял на складе wildberries",
    "снизить расходы на хранение маркетплейс",
  ],
  alternates: { canonical: "/blog/oborachivaemost-tovara-marketpleys" },
  openGraph: {
    title: "Оборачиваемость товара на WB и Ozon: формула, нормы, платное хранение",
    description: "Как считать оборачиваемость, какие показатели норма и как не платить за хранение залежавшихся товаров на Wildberries и Ozon.",
    url: "/blog/oborachivaemost-tovara-marketpleys",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Оборачиваемость товара на WB и Ozon: формула, нормы и как избежать платного хранения в 2026",
  description: "Как считать оборачиваемость товара на Wildberries и Ozon, какой показатель считается нормой и что делать если товар встал на складе.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/oborachivaemost-tovara-marketpleys",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Оборачиваемость товара на маркетплейсах", item: "https://aiviso.ru/blog/oborachivaemost-tovara-marketpleys" },
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
  tdWarn: { padding: "10px 12px", border: "1px solid #fde68a", background: "#fef3c7" },
};

export default function OborachivaeomostTovara() {
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
          <span style={{ color: "#1f2937" }}>Оборачиваемость товара на маркетплейсах</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Оборачиваемость товара на WB и Ozon: формула, нормы и как не платить за хранение
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 13 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Платное хранение на Wildberries — тихий убийца маржи. Один наш клиент в категории постельного белья потерял 52 000 ₽ за квартал на хранении двух артикулов которые просто не продавались. При этом его общая выручка составила 310 000 ₽. Проблема была не в товаре, а в фото и метриках — он не считал оборачиваемость и не знал что WB уже год берёт за это деньги.
        </p>

        <h2 style={styles.h2}>Что такое оборачиваемость и зачем её считать</h2>
        <p style={styles.p}>
          Оборачиваемость — это сколько дней нужно чтобы продать весь ваш запас на складе. Считается просто:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 15 }}>
          <strong>Оборачиваемость (дни) = Средний остаток на складе / Среднедневные продажи</strong>
        </div>
        <p style={styles.p}>
          Пример: у вас на складе WB в среднем лежит 120 единиц товара. В день продаётся в среднем 8 штук.
          Оборачиваемость = 120 / 8 = <strong>15 дней</strong>. Это означает что за 15 дней вы продаёте весь запас и отправляете следующую поставку.
        </p>
        <p style={styles.p}>
          Почему это важно? Маркетплейсы зарабатывают когда товар движется. Когда он лежит месяцами — они теряют полочное пространство и начинают за это брать деньги. Плюс алгоритм поиска понижает карточки с низкой оборачиваемостью.
        </p>

        <h2 style={styles.h2}>Как Wildberries и Ozon считают оборачиваемость</h2>

        <h3 style={styles.h3}>Wildberries: платное хранение с 2025 года</h3>
        <p style={styles.p}>
          С начала 2025 года WB ввёл платное хранение для товаров с низкой оборачиваемостью. Логика такая:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>WB считает вашу оборачиваемость по всем складам в совокупности</li>
          <li style={styles.li}>Если оборачиваемость выше 60 дней — начисляется платное хранение</li>
          <li style={styles.li}>Если выше 120 дней — ставка платного хранения удваивается</li>
          <li style={styles.li}>Товары с оборачиваемостью до 30 дней хранятся бесплатно</li>
        </ul>
        <p style={styles.p}>
          Посмотреть свою оборачиваемость можно в личном кабинете WB: раздел «Аналитика» → «Оборачиваемость». Там же видно какие конкретно артикулы «залегли».
        </p>

        <h3 style={styles.h3}>Ozon: KPI оборачиваемости и премиальная полка</h3>
        <p style={styles.p}>
          Ozon не берёт штрафы за хранение напрямую, но оборачиваемость влияет на позиции в поиске через алгоритм ранжирования. Кроме этого:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>При FBO тарифы на хранение начисляются с 31-го дня нахождения товара на складе</li>
          <li style={styles.li}>Товары с оборачиваемостью менее 14 дней получают буст в поиске (флаг «Быстро продаётся»)</li>
          <li style={styles.li}>Для участия в Premium-программе Ozon требует оборачиваемость не хуже 45 дней по всему каталогу</li>
        </ul>

        <h2 style={styles.h2}>Тарифы платного хранения в 2026: таблица</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Площадка</th>
              <th style={styles.th}>Бесплатный порог</th>
              <th style={styles.th}>Ставка (руб/литр·день)</th>
              <th style={styles.th}>Повышенная ставка</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Wildberries (обычная категория)</td>
              <td style={styles.td}>до 30 дней</td>
              <td style={styles.tdWarn}>0,07 ₽ (31–60 дн)</td>
              <td style={styles.td}>0,15 ₽ (свыше 120 дн)</td>
            </tr>
            <tr>
              <td style={styles.td}>Wildberries (крупногабарит)</td>
              <td style={styles.td}>до 30 дней</td>
              <td style={styles.tdWarn}>0,05 ₽ (31–60 дн)</td>
              <td style={styles.td}>0,10 ₽ (свыше 120 дн)</td>
            </tr>
            <tr>
              <td style={styles.td}>Ozon FBO (стандарт)</td>
              <td style={styles.td}>до 30 дней</td>
              <td style={styles.tdWarn}>0,09 ₽ (31–60 дн)</td>
              <td style={styles.td}>0,18 ₽ (свыше 90 дн)</td>
            </tr>
            <tr>
              <td style={styles.td}>Ozon FBO (крупногабарит)</td>
              <td style={styles.td}>до 30 дней</td>
              <td style={styles.tdWarn}>0,06 ₽ (31–60 дн)</td>
              <td style={styles.td}>0,12 ₽ (свыше 90 дн)</td>
            </tr>
          </tbody>
        </table>
        <p style={{ color: "#9ca3af", fontSize: 13, margin: "4px 0 0" }}>
          Ставки актуальны на август 2026. Объём (литры) = длина × ширина × высота в дм. Товар 30×20×15 см = 9 литров.
        </p>

        <h2 style={styles.h2}>Норма оборачиваемости — что считать хорошим показателем</h2>
        <p style={styles.p}>
          Норма сильно зависит от категории. Вот ориентиры по основным нишам:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Отличный результат</th>
              <th style={styles.th}>Норма</th>
              <th style={styles.th}>Тревожный сигнал</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.tdAccent}>до 14 дней</td>
              <td style={styles.td}>15–30 дней</td>
              <td style={styles.tdWarn}>свыше 45 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и уход</td>
              <td style={styles.tdAccent}>до 20 дней</td>
              <td style={styles.td}>21–40 дней</td>
              <td style={styles.tdWarn}>свыше 60 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома и декор</td>
              <td style={styles.tdAccent}>до 25 дней</td>
              <td style={styles.td}>26–50 дней</td>
              <td style={styles.tdWarn}>свыше 70 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника и гаджеты</td>
              <td style={styles.tdAccent}>до 30 дней</td>
              <td style={styles.td}>31–55 дней</td>
              <td style={styles.tdWarn}>свыше 75 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Спорт и активный отдых</td>
              <td style={styles.tdAccent}>до 20 дней</td>
              <td style={styles.td}>21–40 дней</td>
              <td style={styles.tdWarn}>свыше 60 дней</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>7 причин почему товар «встаёт» на складе</h2>
        <p style={styles.p}>
          Низкая оборачиваемость — это всегда симптом, а не болезнь. Вот реальные причины в порядке частоты встречаемости:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Плохое главное фото.</strong> Самая частая причина. Если CTR карточки ниже 2% — покупатели просто не кликают. Нет кликов — нет продаж — растёт остаток. Одна смена главного слайда на WB поднимала CTR с 1.3% до 3.8% у трёх наших клиентов подряд — и оборачиваемость падала с 65 до 22 дней.
          </li>
          <li style={styles.li}>
            <strong>Сезонный спад.</strong> Зонт в феврале, купальник в ноябре — всё это будет лежать. Планируйте поставки с учётом сезонности.
          </li>
          <li style={styles.li}>
            <strong>Завышенная цена.</strong> Если ваш товар стоит на 15–20% дороже топа в выдаче — алгоритм понижает карточку и продажи падают.
          </li>
          <li style={styles.li}>
            <strong>Нет отзывов.</strong> Карточка без отзывов конвертирует в 3–4 раза хуже чем с 20+ отзывами. При одинаковом фото и цене.
          </li>
          <li style={styles.li}>
            <strong>Неправильные характеристики.</strong> Если атрибуты заполнены плохо — карточка не попадает в фильтры и теряет органический трафик.
          </li>
          <li style={styles.li}>
            <strong>Переполнение склада.</strong> Вы отправили слишком много. WB понижает карточки с высоким соотношением остаток/продажи.
          </li>
          <li style={styles.li}>
            <strong>Появление более сильного конкурента.</strong> Кто-то вышел с похожим товаром, лучшим фото или ценой ниже.
          </li>
        </ul>

        <h2 style={styles.h2}>Как ускорить оборачиваемость: 5 рабочих методов</h2>

        <h3 style={styles.h3}>1. Обновите главное фото карточки</h3>
        <p style={styles.p}>
          Это самое быстрое действие с самым высоким ROI. Если CTR ниже 2.5% — карточка теряет трафик на этапе листинга. Нужно новое главное фото: крупный план товара, читаемый текст с главным преимуществом, правильная цветовая гамма под категорию.
        </p>
        <p style={styles.p}>
          <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>В Aiviso</Link> можно сгенерировать 5–10 вариантов главного фото за 15 минут и протестировать их — выбрать тот что даёт лучший CTR, не перезапуская карточку с нуля.
        </p>

        <h3 style={styles.h3}>2. Участвуйте в акциях с умом</h3>
        <p style={styles.p}>
          Снижение цены на 10–15% в рамках акции WB или Ozon даёт буст в поиске и может быстро расчистить залежалый остаток. Считайте точку безубыточности заранее — иногда продать в ноль выгоднее чем платить за хранение ещё 3 месяца.
        </p>

        <h3 style={styles.h3}>3. Запустите внутреннюю рекламу на застрявшие артикулы</h3>
        <p style={styles.p}>
          Трафаретная реклама на WB и Ozon работает быстро — первые результаты видно за 2–3 дня. Для расчистки склада достаточно вложить 3 000–5 000 ₽ в рекламу артикула: часто это дешевле чем заплатить за ещё 30 дней хранения.
        </p>

        <h3 style={styles.h3}>4. Снизьте объём следующей поставки</h3>
        <p style={styles.p}>
          Классическая ошибка новичков — отправлять на склад «с запасом» на 3–4 месяца. Правило такое: держите запас на 30–45 дней продаж плюс страховой буфер 20%. Для сезонных товаров — ориентируйтесь на пик спроса, не на среднее значение.
        </p>

        <h3 style={styles.h3}>5. Верните товар со склада и продайте через другой канал</h3>
        <p style={styles.p}>
          Иногда проще забрать товар с FBO, продать его через FBS-схему или в собственном Telegram-канале, чем бесконечно платить за хранение. Платная возвратная доставка с WB — это 50–150 ₽ за единицу, платное хранение за 90 дней может стоить дороже.
        </p>

        <h2 style={styles.h2}>Кейс: постельное бельё — с 68 до 21 дня оборачиваемости</h2>
        <p style={styles.p}>
          Один из наших клиентов занимался постельным бельём на Wildberries. В марте 2026 года его оборачиваемость была 68 дней — WB списывал 1 800–2 200 ₽ в месяц за платное хранение трёх артикулов.
        </p>
        <p style={styles.p}>
          Мы провели аудит карточек. Главная проблема: фото было сделано в 2024 году на белом фоне, без текстуры ткани, без lifestyle-контекста. CTR составлял 1.6%.
        </p>
        <p style={styles.p}>
          За один вечер через <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link> сгенерировали новые слайды: постельное бельё в реалистичном интерьере спальни, крупные планы текстуры, инфографика с составом ткани. Загрузили три варианта в карточки.
        </p>
        <p style={styles.p}>
          Результаты через 4 недели:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>CTR вырос с 1.6% до 3.9%</li>
          <li style={styles.li}>Ежедневные продажи выросли с 4 до 11 единиц по трём артикулам в сумме</li>
          <li style={styles.li}>Оборачиваемость упала с 68 до 21 дня</li>
          <li style={styles.li}>Платное хранение исчезло — экономия 2 000 ₽ в месяц</li>
          <li style={styles.li}>Позиции в поиске поднялись в среднем на 14 позиций</li>
        </ul>
        <p style={styles.p}>
          Весь процесс занял 3 часа и обошёлся в 450 ₽ (15 сгенерированных кадров). ROI очевиден.
        </p>

        <h2 style={styles.h2}>Как посчитать сколько вы уже переплатили за хранение</h2>
        <p style={styles.p}>
          Быстрая формула для Wildberries:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontSize: 14, lineHeight: 1.8 }}>
          <strong>1.</strong> Зайдите в ЛК WB: Аналитика → Платное хранение → выберите период<br />
          <strong>2.</strong> Посмотрите суммарные списания за последние 90 дней<br />
          <strong>3.</strong> Разделите на 90 — получите среднедневной расход на хранение<br />
          <strong>4.</strong> Если это больше 100 ₽/день — у вас проблема, которую нужно решать прямо сейчас<br />
        </div>
        <p style={styles.p}>
          Для Ozon аналогично: Финансы → Услуги → Хранение → период 90 дней.
        </p>

        <h2 style={styles.h2}>Чек-лист перед следующей поставкой на склад</h2>
        <p style={styles.p}>Пройдите каждый пункт до отгрузки:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Посчитана текущая оборачиваемость артикула (остаток / среднедневные продажи)</li>
          <li style={styles.li}>Оборачиваемость меньше 45 дней — иначе сначала продайте текущий запас</li>
          <li style={styles.li}>Объём поставки = (продажи за 30 дней) × 1.2 — не больше</li>
          <li style={styles.li}>Проверен CTR карточки — если ниже 2%, сначала обновите фото</li>
          <li style={styles.li}>Нет активных сезонных рисков — товар востребован в этом месяце</li>
          <li style={styles.li}>Цена конкурентоспособна относительно топ-5 в выдаче (±10%)</li>
          <li style={styles.li}>Есть хотя бы 5 отзывов — иначе конверсия будет низкой и остаток накопится</li>
          <li style={styles.li}>Рассчитан объём товара в литрах и понятна стоимость хранения при задержке</li>
          <li style={styles.li}>Известен ближайший срок пополнения (сколько дней займёт следующая поставка)</li>
          <li style={styles.li}>Настроены уведомления в ЛК на снижение остатка до критического уровня</li>
        </ul>

        <h2 style={styles.h2}>Связь оборачиваемости с позициями в поиске</h2>
        <p style={styles.p}>
          Многие селлеры не понимают эту связь. WB и Ozon используют оборачиваемость как один из факторов ранжирования — товары с хорошей оборачиваемостью получают буст в органике. Логика простая: маркетплейс заинтересован показывать то, что продаётся, а не то что лежит.
        </p>
        <p style={styles.p}>
          Это значит что улучшение оборачиваемости даёт двойной эффект:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Прямая экономия — меньше платите за хранение</li>
          <li style={styles.li}>Косвенный рост — лучше позиции → больше органических продаж → ещё лучше оборачиваемость → петля роста</li>
        </ul>
        <p style={styles.p}>
          Один из клиентов в категории аксессуаров для кухни рассказал нам: после того как они обновили фото и оборачиваемость упала с 55 до 18 дней, позиции в поиске WB поднялись в среднем на 23 места без каких-либо дополнительных действий. Органические продажи выросли на 40% за месяц.
        </p>

        <h2 style={styles.h2}>Что делать если товар совсем не продаётся</h2>
        <p style={styles.p}>
          Если оборачиваемость зашла за 90–120 дней — нужны решительные действия, не точечные правки:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Полностью перефотографировать карточку</strong> — все 6–8 слайдов, включая главный</li>
          <li style={styles.li}><strong>Снизить цену на 15–25%</strong> и запустить рекламу — это резкий манёвр, но иногда единственный способ сдвинуть залежалый товар</li>
          <li style={styles.li}><strong>Поменять категорию или заголовок</strong> — иногда товар просто не туда попал и его не ищет целевая аудитория</li>
          <li style={styles.li}><strong>Вернуть товар со склада</strong> и продать через другой канал: Авито, Telegram, розница</li>
          <li style={styles.li}><strong>Добавить в подарочный набор</strong> к другому артикулу — слабый товар в комплекте с сильным часто начинает движение</li>
        </ul>
        <p style={styles.p}>
          Самая дорогая стратегия — ничего не делать и продолжать платить за хранение в надежде «само рассосётся». Оно не рассосётся.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#5b21b6" }}>
            Обновите фото — ускорьте оборачиваемость
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Плохое фото — причина номер один низкой оборачиваемости. В Aiviso можно сгенерировать новые слайды за 15 минут: lifestyle-сцены, инфографика, крупные планы — всё в нужном формате для WB и Ozon.
          </p>
          <Link
            href="/app"
            style={{ display: "inline-block", background: "#7c3aed", color: "white", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 15 }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li><Link href="/blog/upravlenie-ostatkami-wb-ozon" style={{ color: "#7c3aed" }}>Управление остатками на WB и Ozon: как не уйти в out-of-stock</Link></li>
          <li><Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как измерить и поднять кликабельность</Link></li>
          <li><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки товара: 8 правил первого слайда</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

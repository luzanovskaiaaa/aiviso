import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как выбрать нишу на Wildberries в 2026 — Aiviso",
  description:
    "Пошаговый гайд по выбору ниши на Wildberries: спрос, конкуренция, юнит-экономика. Чек-лист из 12 критериев и реальные кейсы селлеров.",
  alternates: { canonical: "/blog/kak-vybrat-nishu-wildberries-2026" },
  openGraph: {
    title: "Как выбрать нишу на Wildberries в 2026: пошаговый гайд",
    description:
      "Как оценить спрос, конкуренцию и юнит-экономику до входа в нишу. Чек-лист из 12 критериев с реальными кейсами.",
    url: "/blog/kak-vybrat-nishu-wildberries-2026",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "как выбрать нишу на wildberries",
    "выбор ниши wildberries 2026",
    "анализ ниши маркетплейс",
    "низкая конкуренция wildberries",
    "юнит-экономика маркетплейс",
    "что продавать на wildberries",
    "аналитика wildberries",
    "ниша для новичка wildberries",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как выбрать нишу на Wildberries в 2026: пошаговый гайд",
  description:
    "Пошаговый гайд по выбору ниши на WB: спрос, конкуренция, юнит-экономика. Чек-лист из 12 критериев и реальные кейсы.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-vybrat-nishu-wildberries-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Как выбрать нишу на Wildberries в 2026",
      item: "https://aiviso.ru/blog/kak-vybrat-nishu-wildberries-2026",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "28px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "10px 0" } as React.CSSProperties,
  li: { margin: "7px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
  note: {
    background: "#f5f3ff",
    border: "1px solid #ddd6fe",
    borderRadius: 12,
    padding: "14px 18px",
    margin: "20px 0",
    fontSize: 15,
    color: "#5b21b6",
  } as React.CSSProperties,
};

export default function KakVybratNishuWildberries() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "48px 20px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#1f2937",
          lineHeight: 1.75,
          fontSize: 16,
        }}
      >
        <nav aria-label="Хлебные крошки" style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Главная
          </Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Блог
          </Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Как выбрать нишу на Wildberries в 2026</span>
        </nav>

        <h1
          style={{
            fontSize: "clamp(28px, 6vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: "8px 0 12px",
            lineHeight: 1.15,
          }}
        >
          Как выбрать нишу на Wildberries в 2026: пошаговый гайд
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>8 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          В 2026 году на Wildberries зарегистрировано свыше 950 000 продавцов — маркетплейс давно
          перестал прощать «зайду и посмотрим». Правильный выбор ниши делается не на ощущениях и
          не по совету блогера, а по конкретным цифрам: спрос, конкуренция, маржа. В этом гайде —
          система, которая работает.
        </p>

        <h2 style={styles.h2}>Что значит «правильная ниша» на WB</h2>
        <p style={styles.p}>
          Ниша — это не просто категория «одежда» или «товары для дома». Ниша — это пересечение
          конкретного товара, целевой аудитории и ценового сегмента. Например: «детские силиконовые
          слюнявчики за 200–400 ₽» — ниша. «Детские товары» — нет.
        </p>

        <h3 style={styles.h3}>Три признака жизнеспособной ниши</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Спрос есть и стабилен.</strong> Товар ищут не только в один сезон. Суммарная
            выручка ТОП-10 в категории — от 3 млн ₽/мес: значит деньги там реально есть.
          </li>
          <li style={styles.li}>
            <strong>Конкуренция не убийственная.</strong> Количество SKU с продажами за последние
            30 дней — до 500–800 штук. Если их 5 000+, войти органически почти невозможно без
            крупного рекламного бюджета.
          </li>
          <li style={styles.li}>
            <strong>Юнит-экономика сходится.</strong> После вычета комиссии WB (15–25%), логистики,
            хранения и рекламы остаётся хотя бы 20–25% чистой маржи. Иначе работаешь на склад.
          </li>
        </ul>

        <h2 style={styles.h2}>Шаг 1. Оцените спрос</h2>
        <p style={styles.p}>
          Спрос смотрят по двум источникам: аналитика самого WB и сторонние сервисы. Встроенная
          аналитика доступна в личном кабинете продавца — там видна статистика по категориям за
          последние 90 дней.
        </p>

        <h3 style={styles.h3}>Инструменты для анализа спроса</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>MPStats, Moneyplace, SellerFox</strong> — платные сервисы с детальной аналитикой
            по выручке, частотности запросов, динамике продаж. Стоимость от 3 000 ₽/мес.
          </li>
          <li style={styles.li}>
            <strong>Wordstat (Яндекс)</strong> — бесплатно. Покажет сезонность спроса по ключевому
            запросу за последние 2 года. Вводи точные запросы: «купить силиконовый слюнявчик», а не
            просто «слюнявчик».
          </li>
          <li style={styles.li}>
            <strong>Встроенный поиск WB.</strong> Введи запрос и посмотри: сколько товаров выдаётся,
            есть ли реклама в первых позициях, какой диапазон цен у ТОПа.
          </li>
        </ul>

        <p style={styles.p}>
          Один из наших клиентов, Наталья из Екатеринбурга, заходила в нишу «органайзеры для
          косметики». Wordstat показал стабильный спрос 25–30 тыс. запросов/мес без сезонных
          провалов. После проверки в MPStats оказалось: ТОП-10 делают суммарную выручку 8 млн ₽/мес.
          Она зашла с 3 SKU — через 4 месяца вышла на 320 000 ₽/мес выручки.
        </p>

        <h2 style={styles.h2}>Шаг 2. Считаем конкуренцию</h2>
        <p style={styles.p}>
          Высокий спрос без оценки конкуренции — ловушка. В прибыльные ниши уже зашли сотни
          продавцов с рекламными бюджетами и отзывами. Вот как оценить реальный барьер входа.
        </p>

        <h3 style={styles.h3}>Метрика «процент товаров с продажами»</h3>
        <p style={styles.p}>
          Открой нишу в MPStats или SellerFox: смотри не общее число SKU, а долю тех, у кого были
          продажи за последние 30 дней. Если это 30–50% — ниша живая, спрос распределён. Если 5–10%
          — в нише «вход открыт, но пустой трафик»: покупатели не находят то, что ищут, либо
          конкуренция монопольная (1–2 игрока выбирают всё).
        </p>

        <h3 style={styles.h3}>Анализ ТОП-10</h3>
        <p style={styles.p}>
          Для каждой потенциальной ниши вручную изучи первые 10 карточек в выдаче по ключевому
          запросу:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Сколько отзывов у лидера? Если 10 000+ — это монополия, войти органически займёт 1,5–2 года.</li>
          <li style={styles.li}>Какой рейтинг у №10 в выдаче? Если у него 4.7+ и 500+ отзывов — в ТОП попасть дорого.</li>
          <li style={styles.li}>Есть ли карточки с рейтингом ниже 4.3 в первых строках? Значит алгоритм «не доволен» качеством — место есть.</li>
          <li style={styles.li}>Сколько стоит реклама в поиске (CPM)? Высокая ставка = конкуренты тратят деньги = ниша прибыльная, но вход платный.</li>
        </ul>

        <div style={styles.note}>
          <strong>Практический ориентир:</strong> ищи ниши, где у карточки на позиции №5–7 меньше
          200 отзывов и рейтинг 4.3–4.6. Это зазор — сюда можно зайти с хорошей карточкой и
          быстро получить первые продажи.
        </div>

        <h2 style={styles.h2}>Шаг 3. Считаем юнит-экономику до входа</h2>
        <p style={styles.p}>
          Самая частая ошибка новых селлеров — купить партию, сделать карточку и только потом
          посчитать, что маржи нет. Считать надо до закупки.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Статья</th>
              <th style={styles.th}>Пример: органайзер для косметики</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Закупочная цена + доставка до склада</td>
              <td style={styles.td}>320 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Цена продажи (конкурентная)</td>
              <td style={styles.td}>890 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия WB (19%)</td>
              <td style={styles.td}>−169 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика WB (доставка + возврат)</td>
              <td style={styles.td}>−95 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Хранение (среднее за 30 дней)</td>
              <td style={styles.td}>−18 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Реклама (ДРР 12%)</td>
              <td style={styles.td}>−107 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Себестоимость (закупка)</td>
              <td style={styles.td}>−320 ₽</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>Чистая прибыль с единицы</strong></td>
              <td style={styles.tdAccent}><strong>181 ₽ (20,3%)</strong></td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          20% — это минимально приемлемо. Нормальная маржа в масс-маркете: 25–35%. Если
          юнит-экономика даёт меньше 15% — либо поднимать цену (сложно при высокой конкуренции),
          либо искать более дешёвого поставщика, либо менять нишу.
        </p>

        <h2 style={styles.h2}>Чек-лист: 12 критериев выбора ниши</h2>
        <p style={styles.p}>Прогоняй каждую потенциальную нишу через этот список перед закупкой:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Спрос от 15 000 запросов/мес</strong> по основному ключу в Wordstat — ниже этого
            порога объём слишком мал для масштаба.
          </li>
          <li style={styles.li}>
            <strong>Суммарная выручка ТОП-10 от 3 млн ₽/мес</strong> — значит деньги в нише реально есть.
          </li>
          <li style={styles.li}>
            <strong>Количество SKU с продажами до 800</strong> — больше означает сложный и дорогой
            вход в органику.
          </li>
          <li style={styles.li}>
            <strong>У карточки на позиции №7–10 менее 300 отзывов</strong> — есть шанс зайти без года ожидания.
          </li>
          <li style={styles.li}>
            <strong>Сезонность не критичная</strong> — товар продаётся хотя бы 9 месяцев в году.
            Исключение: если ты готов управлять сезонным стоком осознанно.
          </li>
          <li style={styles.li}>
            <strong>Чистая маржа от 20%</strong> по предварительному расчёту юнит-экономики.
          </li>
          <li style={styles.li}>
            <strong>Товар не хрупкий и не требует особой упаковки</strong> — иначе возвраты и доп.
            расходы на упаковку съедят маржу.
          </li>
          <li style={styles.li}>
            <strong>Нет категорийных ограничений</strong> — некоторые ниши (детское питание,
            лекарства, сертифицированные товары) требуют доп. документации.
          </li>
          <li style={styles.li}>
            <strong>Можно сделать карточку лучше ТОПа</strong> — плохие фото, скудное описание,
            мало характеристик у конкурентов — это твой шанс.
          </li>
          <li style={styles.li}>
            <strong>Есть минимум 3 поставщика</strong> — зависимость от одного поставщика рискованна,
            если тот поднимет цену или выйдет из строя.
          </li>
          <li style={styles.li}>
            <strong>Товар не тяжелее 5 кг и не крупнее 60×40×30 см</strong> — крупногабарит на
            WB съедает прибыль логистикой при возвратах.
          </li>
          <li style={styles.li}>
            <strong>Нет явных «монстров» с более 50 000 отзывов</strong> в первых трёх позициях —
            такие карточки практически невозможно сдвинуть органически.
          </li>
        </ul>

        <h2 style={styles.h2}>Ниши, в которые заходить не стоит</h2>
        <p style={styles.p}>
          Есть категории, которые выглядят привлекательно, но на деле — мясорубка. Вот
          сигналы тревоги:
        </p>

        <h3 style={styles.h3}>Перегретые ниши</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Чехлы для телефонов.</strong> Маржа 5–8%, ТОП занят китайскими
            фулфилментами с ценой 99 ₽. Вытеснить их без убытков невозможно.
          </li>
          <li style={styles.li}>
            <strong>Бижутерия масс-маркет до 500 ₽.</strong> 40 000+ SKU с продажами,
            лидеры с 80 000 отзывов. Рекламный CPM 400–600 ₽ за 1 000 показов.
          </li>
          <li style={styles.li}>
            <strong>Спортивные бутылки и термосы.</strong> Выглядит стабильно, но маржа
            20% уже включена в цену у поставщиков, которые сами торгуют на WB.
          </li>
        </ul>

        <h3 style={styles.h3}>«Токсичные» ниши по возвратам</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Одежда без размерной линейки.</strong> Если у тебя нет XS–XL, процент
            возврата будет 40–60%. Каждый возврат — минус 80–120 ₽ на логистику.
          </li>
          <li style={styles.li}>
            <strong>Электроника без сертификатов EAC.</strong> WB блокирует карточку, товар
            арестовывают на складе. Разблокировка занимает 2–4 недели.
          </li>
        </ul>

        <h2 style={styles.h2}>Ниши с потенциалом в 2026</h2>
        <p style={styles.p}>
          Это не инвестиционный совет — рынок меняется. Но вот категории, где в 2026 году
          сохраняется структурный спрос при умеренной конкуренции:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Товары для ухода за питомцами.</strong> Рост рынка 28% за 2025 год.
            В подкатегориях «корм для грызунов», «одежда для собак малых пород» конкуренция
            в 3–5 раз ниже, чем в «корм для кошек».
          </li>
          <li style={styles.li}>
            <strong>Канцелярия и товары для обучения.</strong> Стабильный спрос весь год,
            пик в августе–сентябре. В сегменте 500–1 200 ₽ много свободного места.
          </li>
          <li style={styles.li}>
            <strong>Эргономика для дома и офиса.</strong> Подставки для ноутбуков, органайзеры
            для рабочего стола, кабельные держатели. Средний чек 700–1 500 ₽, маржа 30–40%.
          </li>
          <li style={styles.li}>
            <strong>Товары для авто (расходники).</strong> Автоосвежители, держатели, чехлы
            на руль — высокая частотность покупки, покупатель не возвращает «не подошло по размеру».
          </li>
          <li style={styles.li}>
            <strong>Декор для дома в средней ценовой группе.</strong> 800–2 500 ₽ за позицию.
            Ниша живая, но требует хорошего визуала карточки — здесь особенно важны lifestyle-фото.
          </li>
        </ul>

        <h2 style={styles.h2}>Как карточка товара влияет на выход в нишу</h2>
        <p style={styles.p}>
          Даже в правильно выбранной нише плохая карточка убивает продажи. Wildberries ранжирует
          по конверсии из показа в клик (CTR) и из клика в заказ. Оба параметра напрямую
          зависят от качества фото.
        </p>
        <p style={styles.p}>
          Один из кейсов Aiviso: селлер Дмитрий заходил в нишу «органайзеры для кабелей».
          Первые три месяца — 12–15 заказов в день при рекламном бюджете 15 000 ₽/мес. После
          смены фото на AI-lifestyle (товар в рабочем пространстве, несколько ракурсов с деталями)
          конверсия из клика в заказ выросла с 4,1% до 7,8%. При том же рекламном бюджете
          заказы выросли до 27–30 в день. Карточку он менял за 2 часа, не 3 дня на фотостудии.
        </p>
        <p style={styles.p}>
          Для «декорных» ниш с высоким акцентом на визуал — органайзеры, текстиль, посуда,
          декор — качественные lifestyle-фото это не опция, а базовое требование для попадания
          в ТОП. Конкурент с красивой карточкой при прочих равных всегда получит больший CTR.
          Это нужно закладывать в стратегию входа в нишу с самого начала.
        </p>
        <p style={styles.p}>
          Подробнее о том, как оформить карточку и обойти конкурентов, читайте в нашем гайде{" "}
          <Link href="/blog/kartochka-luchshe-konkurentov" style={{ color: "#7c3aed" }}>
            «Как сделать карточку лучше конкурентов»
          </Link>
          .
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#f5f3ff",
            border: "2px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontSize: 18,
              fontWeight: 700,
              color: "#5b21b6",
              letterSpacing: "-0.02em",
            }}
          >
            Нашли нишу — готовьте карточку
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151", lineHeight: 1.65 }}>
            Aiviso генерирует lifestyle-фото товара за 2 минуты: исходник — любое фото на белом
            фоне, результат — готовые кадры в формате 900×1200 для WB и Ozon. Первые 13 кредитов
            бесплатно — хватит на 2–3 карточки.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              padding: "12px 24px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, margin: 0 }}>
          <li style={{ margin: "6px 0" }}>
            <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
              SEO для карточки Wildberries в 2026: пошаговый гайд
            </Link>
          </li>
          <li style={{ margin: "6px 0" }}>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
              Как поднять конверсию карточки на 30%: чек-лист из 25 пунктов
            </Link>
          </li>
          <li style={{ margin: "6px 0" }}>
            <Link href="/blog/analiz-konkurentov-wildberries-ozon" style={{ color: "#7c3aed" }}>
              Как анализировать конкурентов на Wildberries и Ozon
            </Link>
          </li>
          <li style={{ margin: "6px 0" }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ДРР рекламы на WB и Ozon: как снизить до 10% — Aiviso",
  description:
    "Как считать ДРР, почему он растёт и как снизить долю рекламных расходов до 10% без потери трафика на Wildberries и Ozon. Чек-лист и кейс: с 32% до 9% за 6 недель.",
  keywords: [
    "дрр реклама wildberries",
    "дрр реклама ozon",
    "как снизить дрр маркетплейс",
    "доля рекламных расходов wb",
    "реклама без потерь ozon",
    "оптимизация рекламы wb",
    "ставки в рекламе wildberries",
    "дрр расчёт формула",
    "реклама для селлеров",
  ],
  alternates: { canonical: "/blog/drr-reklamy-wb-ozon" },
  openGraph: {
    title: "ДРР рекламы на WB и Ozon: как снизить до 10% без потери трафика",
    description:
      "Формула расчёта ДРР, 6 причин роста и пошаговый план снижения до 10%. Кейс: с 32% до 9% за 6 недель.",
    url: "/blog/drr-reklamy-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ДРР рекламы на WB и Ozon: как снизить до 10% без потери трафика",
  description:
    "Как считать ДРР, почему он растёт и как снизить долю рекламных расходов до 10% на Wildberries и Ozon. Чек-лист и кейс.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/drr-reklamy-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "ДРР рекламы WB и Ozon", item: "https://aiviso.ru/blog/drr-reklamy-wb-ozon" },
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

export default function DrrReklamy() {
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
          <span style={{ color: "#1f2937" }}>ДРР рекламы WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          ДРР рекламы на WB и Ozon: как снизить до 10% без потери трафика
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>17 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Продавцы запускают рекламу, получают заказы, но в конце недели финансовый отчёт показывает
          минус. ДРР съел маржу. Разбираем: что такое ДРР, почему 10% — это рабочий ориентир, и как
          добраться до него с типичных 25–35%, не обрушив трафик.
        </p>

        <h2 style={styles.h2}>Что такое ДРР и почему 10% — это ориентир</h2>
        <p style={styles.p}>
          ДРР — доля рекламных расходов. Показывает, сколько рублей рекламы вы тратите на каждые 100 рублей
          выручки. Формула простая:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 15 }}>
          ДРР = (Расходы на рекламу / Выручка от рекламы) × 100%
        </div>
        <p style={styles.p}>
          Если вы потратили 10 000 ₽ на рекламу и получили с неё 50 000 ₽ выручки — ДРР = 20%.
          Норма зависит от категории:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Целевой ДРР</th>
              <th style={styles.th}>Тревожный ДРР</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.tdAccent}><strong>8–12%</strong></td>
              <td style={styles.td}>выше 20%</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и уход</td>
              <td style={styles.tdAccent}><strong>7–10%</strong></td>
              <td style={styles.td}>выше 18%</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника и гаджеты</td>
              <td style={styles.tdAccent}><strong>5–8%</strong></td>
              <td style={styles.td}>выше 15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома</td>
              <td style={styles.tdAccent}><strong>10–15%</strong></td>
              <td style={styles.td}>выше 25%</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.tdAccent}><strong>8–12%</strong></td>
              <td style={styles.td}>выше 20%</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Универсальный ориентир для большинства категорий — не выше 10–12%. Если ДРР выше 20%,
          реклама, скорее всего, работает в минус с учётом комиссии маркетплейса, логистики и себестоимости товара.
        </p>

        <h2 style={styles.h2}>Как считать ДРР правильно: частые ошибки</h2>
        <p style={styles.p}>
          Большинство продавцов считают ДРР неправильно и поэтому думают, что всё под контролем.
        </p>

        <h3 style={styles.h3}>Ошибка 1: считать по всей выручке, а не по рекламной</h3>
        <p style={styles.p}>
          Если у вас 500 000 ₽ выручки в месяц, из которых 200 000 ₽ — органика, а 300 000 ₽
          — с рекламы, то ДРР надо считать только от 300 000 ₽ рекламной выручки.
          При расходах 60 000 ₽ настоящий ДРР = 20%, а не 12%.
        </p>

        <h3 style={styles.h3}>Ошибка 2: не учитывать возвраты</h3>
        <p style={styles.p}>
          Wildberries считает ДРР от заказов, а не от выкупа. Если процент выкупа в вашей
          категории 60%, реальная стоимость привлечённого рубля выручки — в 1.4 раза выше. При
          ДРР 15% по заказам реальный ДРР по выкупу — уже 21%.
        </p>

        <h3 style={styles.h3}>Ошибка 3: не учитывать ДРР отдельно по кампаниям</h3>
        <p style={styles.p}>
          Средний ДРР по кабинету скрывает то, что одна кампания работает с ДРР 7%, а другая —
          с 45%. Смотрите ДРР по каждой кампании и каждому артикулу отдельно.
        </p>

        <h2 style={styles.h2}>Почему ДРР растёт: 6 типичных причин</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Слабая карточка.</strong> Реклама приводит трафик, но конверсия низкая из-за плохого
            главного фото или непонятного описания. Деньги на трафик тратятся, заказов мало — ДРР растёт.
          </li>
          <li style={styles.li}>
            <strong>Завышенные ставки в высококонкурентных запросах.</strong> Вы биддируете по запросу
            «кроссовки» вместо «кроссовки для бега мужские 44 размер» — платите за чужую аудиторию.
          </li>
          <li style={styles.li}>
            <strong>Нет минус-слов.</strong> На Ozon в продвижении в поиске можно добавлять стоп-слова.
            Без них реклама показывается по нерелевантным запросам и сжигает бюджет.
          </li>
          <li style={styles.li}>
            <strong>Реклама на аутсайдеров.</strong> Вы продвигаете товары с низким органическим
            рейтингом и малым числом отзывов — реклама не конвертирует, потому что карточка не готова.
          </li>
          <li style={styles.li}>
            <strong>Слишком широкая сегментация.</strong> На WB автоматическая кампания показывается
            всем подряд. Без корректировки по полу, возрасту и регионам ДРР стабильно выше 25%.
          </li>
          <li style={styles.li}>
            <strong>Не выключается в «мёртвое время».</strong> Реклама крутится с 2:00 до 6:00 —
            показы есть, заказов нет, бюджет уходит. Расписание показов обязательно.
          </li>
        </ul>

        <h2 style={styles.h2}>Как снизить ДРР на Wildberries: пошаговый план</h2>
        <p style={styles.p}>
          Один наш клиент в категории «товары для ванной» начинал с ДРР 32%. За 6 недель снизил
          до 9% без сокращения бюджета на рекламу — только за счёт структурных изменений в кампаниях.
          Вот что он сделал:
        </p>

        <h3 style={styles.h3}>Шаг 1: аудит карточек перед включением рекламы</h3>
        <p style={styles.p}>
          Выключите рекламу на все карточки с CTR ниже 2% и конверсией ниже 3%. Сначала доработайте
          главное фото и описание — и только потом включайте снова. Реклама не лечит плохую карточку,
          она только ускоряет слив бюджета.
        </p>

        <h3 style={styles.h3}>Шаг 2: переход с автоматических на ручные кампании</h3>
        <p style={styles.p}>
          Автоматические кампании WB удобны, но дороги. Переходите на поисковые кампании с ручным
          управлением ставками. Выбирайте среднечастотные и низкочастотные ключи — конкуренция ниже,
          CPM дешевле, конверсия выше.
        </p>

        <h3 style={styles.h3}>Шаг 3: расписание показов</h3>
        <p style={styles.p}>
          Анализируйте заказы по часам в ЛК WB. Как правило, 70–80% заказов приходит с 8:00 до 23:00.
          Выключайте рекламу в ночные часы — экономия 15–20% бюджета без потери заказов.
        </p>

        <h3 style={styles.h3}>Шаг 4: ставки по позиции, а не по бюджету</h3>
        <p style={styles.p}>
          Не задавайте суточный бюджет «с запасом». Ставьте столько, сколько нужно для попадания
          в 3–5 позицию поиска по вашим ключам. Первая позиция стоит в 2–4 раза дороже третьей,
          а конверсию даёт практически одинаковую.
        </p>

        <h2 style={styles.h2}>Как снизить ДРР на Ozon: пошаговый план</h2>

        <h3 style={styles.h3}>Трафаретная реклама: оптимизация ставок</h3>
        <p style={styles.p}>
          В трафаретах Ozon главный рычаг — модель оплаты. Переходите с CPM (за показы)
          на CPC (за клики) для товаров с высоким CTR. При CTR 5%+ CPC-модель выгоднее CPM в 1.5–2 раза.
        </p>

        <h3 style={styles.h3}>Продвижение в поиске: стоп-слова</h3>
        <p style={styles.p}>
          Инструмент стоп-слов в Ozon — один из самых недооценённых. Добавьте в стоп-листы:
          названия конкурентов, нерелевантные цвета/размеры, слова «бесплатно», «отзыв», «обзор».
          Один клиент в категории «посуда» добавил 47 стоп-слов и снизил ДРР с 24% до 13% за 2 недели.
        </p>

        <h3 style={styles.h3}>Буст новинок: используйте окно</h3>
        <p style={styles.p}>
          Первые 14–21 день после публикации карточки Ozon даёт органический буст новинкам.
          Снижайте рекламный бюджет в этот период — органика работает за вас. Включайте рекламу
          на полную мощность после того, как органический буст сойдёт на нет.
        </p>

        <h2 style={styles.h2}>Как фото товара влияет на ДРР</h2>
        <p style={styles.p}>
          Это связь, которую многие упускают. ДРР зависит от конверсии карточки — а конверсия
          на 60–70% определяется первым слайдом фото. Слабое главное фото при включённой рекламе —
          прямой путь к ДРР выше 30%.
        </p>
        <p style={styles.p}>
          Вот что происходит по шагам:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Реклама получает показы и даёт клики — платите за клик или за тысячу показов</li>
          <li style={styles.li}>Покупатель открывает карточку — и видит непрезентабельное фото</li>
          <li style={styles.li}>Уходит без заказа — деньги потрачены, конверсия ноль</li>
          <li style={styles.li}>ДРР растёт</li>
        </ul>
        <p style={styles.p}>
          Обновление главного фото на карточке — один из самых дешёвых способов снизить ДРР.
          Несколько наших клиентов снижали ДРР на 30–50% только за счёт нового первого слайда
          без других изменений кампании. <Link href="/app" style={{ color: "#7c3aed" }}>Попробуйте обновить фото в Aiviso</Link> — результат
          видно за 2–3 дня по статистике кликов.
        </p>

        <h2 style={styles.h2}>Кейс: снижение ДРР с 32% до 9% за 6 недель</h2>
        <p style={styles.p}>
          Продавец аксессуаров для ванной комнаты (3 артикула, средний чек 850 ₽, WB FBO).
          Оборот 280 000 ₽/мес, рекламный бюджет 90 000 ₽/мес — ДРР 32%.
        </p>
        <p style={styles.p}><strong>Что было сделано:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Неделя 1–2: обновили главное фото на двух из трёх артикулов через AI-генерацию (lifestyle-сцена вместо белого фона). CTR вырос с 1.9% до 4.3%.</li>
          <li style={styles.li}>Неделя 2: выключили автоматическую кампанию, перешли на поисковую с ручным управлением по 18 целевым ключам.</li>
          <li style={styles.li}>Неделя 3: добавили расписание показов (8:00–23:00). Экономия 18% бюджета.</li>
          <li style={styles.li}>Неделя 4–5: убрали широкие запросы («ванная»), оставили средне- и низкочастотные («органайзер для ванной с полками»).</li>
          <li style={styles.li}>Неделя 6: оборот 310 000 ₽, рекламный бюджет 28 000 ₽ — ДРР 9%.</li>
        </ul>
        <p style={styles.p}>
          Экономия на рекламе — 62 000 ₽/мес. Оборот при этом вырос на 10% за счёт лучшей конверсии.
        </p>

        <h2 style={styles.h2}>Чек-лист: ДРР под контролем</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>CTR карточки выше 3% перед включением рекламы</li>
          <li style={styles.li}>Конверсия карточки выше 4% (или выше средней по категории)</li>
          <li style={styles.li}>Только ручные или полуавтоматические кампании, не «авто» целиком</li>
          <li style={styles.li}>Расписание показов: выключено ночью (ориентир — 00:00–07:00)</li>
          <li style={styles.li}>Только среднечастотные и низкочастотные ключи — без «жирных» широких запросов</li>
          <li style={styles.li}>На Ozon: список стоп-слов из минимум 20–30 нерелевантных запросов</li>
          <li style={styles.li}>ДРР считается по рекламной выручке, не по общей</li>
          <li style={styles.li}>ДРР считается с поправкой на процент выкупа, не по заказам</li>
          <li style={styles.li}>Анализ ДРР отдельно по каждой кампании — не только общий по кабинету</li>
          <li style={styles.li}>Артикулы с ДРР выше 25% выключены до аудита карточки</li>
          <li style={styles.li}>Ставка нацелена на 3–5 позицию поиска, не на первое место</li>
          <li style={styles.li}>Буст новинок Ozon используется — реклама включается после первых 14–21 дней</li>
        </ul>

        <h2 style={styles.h2}>Итог</h2>
        <p style={styles.p}>
          ДРР выше 20% — не норма, а сигнал: что-то в цепочке «трафик → карточка → заказ» не работает.
          Чаще всего причина в трёх вещах: слабое фото (низкая конверсия), широкие нецелевые ключи
          (дорогой трафик) и отсутствие расписания показов (бюджет горит в пустоту).
        </p>
        <p style={styles.p}>
          Начните с аудита карточки. Если главное фото не задерживает взгляд за 1 секунду в листинге —
          никакая оптимизация ставок не поможет. Сначала карточка, потом реклама.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь снизить ДРР через обновление фото?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Загрузи карточку в Aiviso</Link>
            {" "}— AI за 2 минуты сделает новый главный слайд с lifestyle-сценой. 13 кредитов бесплатно на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/oshibki-reklamy-wb-ozon" style={{ color: "#7c3aed" }}>8 ошибок с рекламой на WB и Ozon, которые сливают бюджет</Link></li>
          <li><Link href="/blog/voronka-prodazh-marketpleys" style={{ color: "#7c3aed" }}>Воронка продаж на маркетплейсе: почему 94% посетителей уходят без заказа</Link></li>
          <li><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки товара: 8 правил первого слайда</Link></li>
          <li><Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
        </ul>
      </article>
    </>
  );
}

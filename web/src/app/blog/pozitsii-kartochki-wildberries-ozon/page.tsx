import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как отслеживать позиции карточки на WB и Ozon — Aiviso",
  description: "Где смотреть позиции карточки товара на Wildberries и Ozon, какие инструменты использовать, как читать динамику и что делать когда позиции падают. Чек-лист из 15 пунктов.",
  keywords: [
    "позиции карточки wildberries",
    "позиции карточки ozon",
    "мониторинг позиций маркетплейс",
    "отслеживание позиций wb",
    "mpstats аналитика",
    "как поднять позиции wb",
    "ранжирование wildberries",
    "аналитика карточки товара",
  ],
  alternates: { canonical: "/blog/pozitsii-kartochki-wildberries-ozon" },
  openGraph: {
    title: "Как отслеживать позиции карточки на WB и Ozon",
    description: "Где смотреть позиции, какие инструменты реально работают и чек-лист из 15 пунктов для мониторинга.",
    url: "/blog/pozitsii-kartochki-wildberries-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как отслеживать позиции карточки товара на Wildberries и Ozon: инструменты и чек-лист",
  description: "Где смотреть позиции карточки на WB и Ozon, как интерпретировать динамику и что делать когда позиции падают.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/pozitsii-kartochki-wildberries-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Позиции карточки WB и Ozon", item: "https://aiviso.ru/blog/pozitsii-kartochki-wildberries-ozon" },
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

export default function PozitsiiKartochkiWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Позиции карточки WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как отслеживать позиции карточки товара на Wildberries и Ozon
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 27 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Позиция карточки в поиске напрямую определяет, сколько людей её увидят — а значит, и сколько будет продаж. Один наш клиент потерял 60% выручки за неделю, не заметив, как карточка упала с 8-го на 74-е место после обновления алгоритма. В этой статье разбираем: где смотреть позиции, как их интерпретировать и что делать, когда они падают.
        </p>

        <h2 style={styles.h2}>Зачем следить за позициями карточки</h2>
        <p style={styles.p}>
          На Wildberries более 60% заказов идут через поиск. На Ozon — около 55%. Покупатель вводит запрос и листает до тех пор, пока не найдёт что купить — в среднем, первые 1–2 страницы. Всё, что ниже 50-й позиции, практически не получает органического трафика.
        </p>
        <p style={styles.p}>
          При этом позиции меняются постоянно: алгоритм WB пересчитывает ранжирование каждые несколько часов. После обновления фото, изменения цены или появления нового конкурента ваша карточка может просесть на 20–30 мест за сутки — и вы об этом не узнаете, пока не обратите внимание на падение выручки.
        </p>
        <p style={styles.p}>
          Задача мониторинга позиций — поймать просадку в первые 24–48 часов, пока она не конвертировалась в потерю органических заказов.
        </p>

        <h2 style={styles.h2}>Как смотреть позиции в личном кабинете Wildberries</h2>
        <p style={styles.p}>
          Прямого отчёта «позиция по ключевому слову» в ЛК WB нет. Но есть косвенные данные:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Аналитика → Товары → Воронка продаж.</strong> Здесь видно «Показы» и «Клики» по каждой карточке. Если показы резко упали без изменения ассортимента — карточка просела в поиске.</li>
          <li style={styles.li}><strong>Аналитика → Поисковые запросы.</strong> Появилось в 2025-м: видно, по каким запросам вас показывают и сколько. Если запрос есть, но показов мало — вы не в топе по нему.</li>
          <li style={styles.li}><strong>Прямая проверка вручную.</strong> Открываете WB в браузере в режиме инкогнито, вводите запрос, считаете на какой странице ваш товар. Метод рабочий, но трудоёмкий при каталоге от 20 позиций.</li>
        </ul>
        <p style={styles.p}>
          Ручная проверка подходит для точечного мониторинга 1–3 главных SKU. Для полноценной работы нужны сторонние инструменты.
        </p>

        <h2 style={styles.h2}>Как смотреть позиции в личном кабинете Ozon</h2>
        <p style={styles.p}>
          Ozon даёт чуть больше данных прямо в ЛК:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Аналитика → Показатели карточки товара.</strong> CTR, показы, добавления в корзину — по каждому SKU. Падение CTR при стабильных показах говорит о том, что карточку видят, но не кликают (проблема с фото или ценой). Падение показов — карточка просела в выдаче.</li>
          <li style={styles.li}><strong>Аналитика → Поиск и рекомендации.</strong> Ozon показывает, сколько показов пришло из поиска, категорий и рекламы. Удобно для понимания источников трафика.</li>
          <li style={styles.li}><strong>Конкурентная позиция.</strong> В разделе «Аналитика → Позиция» Ozon показывает вашу среднюю позицию по товару за период — одна из самых полезных нативных функций на платформе.</li>
        </ul>
        <p style={styles.p}>
          Нативная аналитика Ozon удобнее, чем WB, но всё равно не покрывает полный список ключевых запросов — приходится мониторить каждый запрос отдельно.
        </p>

        <h2 style={styles.h2}>Сторонние инструменты аналитики позиций</h2>
        <p style={styles.p}>
          Для систематического мониторинга позиций используют специализированные сервисы. Вот три наиболее распространённых в 2026 году:
        </p>

        <h3 style={styles.h3}>MPStats</h3>
        <p style={styles.p}>
          Самый популярный инструмент для аналитики на WB и Ozon. Показывает позицию по любому ключевому запросу, историю изменений, объём поиска по запросу и выручку ТОП-10 карточек.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Можно добавить до 1 000 ключей на мониторинг</li>
          <li style={styles.li}>Обновление данных — раз в сутки</li>
          <li style={styles.li}>Тариф от 5 900 ₽/мес</li>
          <li style={styles.li}>Есть API для интеграции в таблицы и дашборды</li>
        </ul>

        <h3 style={styles.h3}>Moneyplace</h3>
        <p style={styles.p}>
          Сильная сторона — аналитика конкурентов и ниш. Позиции по запросам тоже есть, но основной акцент на оценку потенциала ниши.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Хорошо подходит для анализа перед запуском нового товара</li>
          <li style={styles.li}>Тариф от 4 900 ₽/мес</li>
          <li style={styles.li}>Удобный визуальный интерфейс для сравнения с конкурентами</li>
        </ul>

        <h3 style={styles.h3}>Wildbox (WB) и SalesFinder (Ozon + WB)</h3>
        <p style={styles.p}>
          Более молодые сервисы с чуть ниже ценой (от 2 900–3 500 ₽/мес) и похожим набором функций. Wildbox делает акцент на WB, SalesFinder работает с обоими маркетплейсами. Подходят для начинающих с небольшим каталогом.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Инструмент</th>
              <th style={styles.th}>Цена/мес</th>
              <th style={styles.th}>WB</th>
              <th style={styles.th}>Ozon</th>
              <th style={styles.th}>Лучше всего для</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>MPStats</td>
              <td style={styles.td}>от 5 900 ₽</td>
              <td style={styles.tdAccent}>Да</td>
              <td style={styles.tdAccent}>Да</td>
              <td style={styles.td}>Полный мониторинг позиций, большой каталог</td>
            </tr>
            <tr>
              <td style={styles.td}>Moneyplace</td>
              <td style={styles.td}>от 4 900 ₽</td>
              <td style={styles.tdAccent}>Да</td>
              <td style={styles.tdAccent}>Да</td>
              <td style={styles.td}>Анализ ниш и конкурентов перед запуском</td>
            </tr>
            <tr>
              <td style={styles.td}>SalesFinder</td>
              <td style={styles.td}>от 3 500 ₽</td>
              <td style={styles.tdAccent}>Да</td>
              <td style={styles.tdAccent}>Да</td>
              <td style={styles.td}>Небольшой каталог, бюджетный старт</td>
            </tr>
            <tr>
              <td style={styles.td}>Wildbox</td>
              <td style={styles.td}>от 2 900 ₽</td>
              <td style={styles.tdAccent}>Да</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.td}>WB-only, начинающие</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Как читать динамику позиций</h2>
        <p style={styles.p}>
          Позиция — это число в конкретный момент по конкретному запросу. Сама по себе она почти ничего не говорит. Важно смотреть на динамику: как позиция менялась за последние 7–30 дней.
        </p>
        <p style={styles.p}>
          Несколько правил интерпретации:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Просадка на 5–10 мест за 1–2 дня.</strong> Скорее всего, алгоритмическое колебание. Подождите 3–5 дней — часто восстанавливается само.</li>
          <li style={styles.li}><strong>Падение на 20+ мест за неделю.</strong> Нужно разбираться. Смотрите: изменилась ли цена, упал ли CTR, снизился ли остаток на складе, появились ли новые конкуренты с агрессивными ценами.</li>
          <li style={styles.li}><strong>Резкий скачок вниз сразу на 50+ мест.</strong> Возможная санкция алгоритма (жалоба, проблема с качеством фото, несоответствие товара описанию). Проверьте ЛК на предмет уведомлений.</li>
          <li style={styles.li}><strong>Постепенный рост за 2–4 недели.</strong> Алгоритм «разгоняет» карточку — хороший знак. Поддерживайте стабильный остаток и следите за CTR.</li>
        </ul>

        <h2 style={styles.h2}>5 главных причин, почему позиции падают</h2>
        <p style={styles.p}>
          За три года работы с селлерами мы наблюдали сотни случаев падения позиций. Вот пять причин, которые встречаются чаще всего:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Нулевой или низкий остаток на складе.</strong> Самая частая причина. WB и Ozon убирают товар из выдачи, когда остаток опускается ниже 5–7 единиц. Один наш клиент из категории товаров для дома потерял позицию с 12 на 89 за 48 часов — у него просто закончился товар на складе. После пополнения карточка вернулась на 21-е место, но потребовалось ещё 12 дней для возврата к исходным 12.
          </li>
          <li style={styles.li}>
            <strong>Падение CTR.</strong> Алгоритм видит: карточку показывают, но не кликают. Причины — устаревшее главное фото, цена выше конкурентов в листинге, невыразительный заголовок. Решение: обновить главное фото и заголовок.
          </li>
          <li style={styles.li}>
            <strong>Снижение конверсии (просмотры → корзина → заказ).</strong> Карточку открывают, но не покупают. Алгоритм фиксирует это и снижает ранжирование. Причины: несоответствие ожиданий от фото реальному товару, плохие отзывы, непонятное описание.
          </li>
          <li style={styles.li}>
            <strong>Изменение категории или атрибутов.</strong> Иногда продавец редактирует характеристики товара — и карточка попадает в другую категорию с иным конкурентным ландшафтом. Позиция сбрасывается.
          </li>
          <li style={styles.li}>
            <strong>Активность конкурентов.</strong> Новый крупный продавец зашёл в нишу, скупил первые места рекламой — ваша органика сдвинулась вниз. Это видно по отчёту «конкуренты» в MPStats: если вы были на 15-м месте, а теперь на 30-м, посмотрите кто занял место выше вас.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 15 пунктов для мониторинга позиций</h2>
        <p style={styles.p}>
          Используйте этот список как еженедельный регламент работы с позициями:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Собрать список 5–10 главных ключевых запросов для каждой карточки (через MPStats, Wordstat или Ozon-аналитику)</li>
          <li style={styles.li}>Добавить все карточки на мониторинг в выбранном инструменте</li>
          <li style={styles.li}>Проверять позиции минимум раз в неделю, для топовых товаров — ежедневно</li>
          <li style={styles.li}>Сравнивать динамику за 7 и 30 дней — не одну точку</li>
          <li style={styles.li}>При падении на 10+ мест — проверить остаток на складе WB и Ozon</li>
          <li style={styles.li}>При падении — сравнить CTR с прошлой неделей в ЛК</li>
          <li style={styles.li}>При падении CTR — сравнить главное фото с карточками конкурентов в ТОП-20</li>
          <li style={styles.li}>Проверить среднюю оценку и последние отзывы: 3 звезды → больше негатива → алгоритм снижает позицию</li>
          <li style={styles.li}>Посмотреть кто появился выше вас: новый конкурент, реклама или органика?</li>
          <li style={styles.li}>Проверить цену относительно ТОП-5 конкурентов: если вы дороже на 15%+ без видимой причины — это сигнал</li>
          <li style={styles.li}>Убедиться, что характеристики и категория товара не менялись за последние 2 недели</li>
          <li style={styles.li}>При устойчивом падении — запустить тест главного фото (обновить и отследить CTR через 7 дней)</li>
          <li style={styles.li}>Для WB: проверить наличие нотификаций о нарушениях в ЛК (несоответствие фото, жалобы покупателей)</li>
          <li style={styles.li}>Фиксировать все изменения карточки (фото, цена, описание) с датой — чтобы потом можно было сопоставить с динамикой позиций</li>
          <li style={styles.li}>Если позиции стабильны и выше 30-го места — поставить задачу на A/B тест нового главного фото для дальнейшего роста</li>
        </ul>

        <h2 style={styles.h2}>Как фото карточки влияет на позиции</h2>
        <p style={styles.p}>
          Это тема, которую часто недооценивают. Фото влияет на позиции косвенно — через CTR и конверсию. Вот цепочка:
        </p>
        <p style={styles.p}>
          Алгоритм WB и Ozon отслеживает: сколько раз карточку показали, сколько раз кликнули, сколько добавили в корзину и сколько купили. Хорошее главное фото поднимает CTR, а сильный набор фотографий (lifestyle, инфографика, детали) — конверсию. Оба сигнала ведут к росту позиции.
        </p>
        <p style={styles.p}>
          Один из клиентов в категории «Постельное бельё» сменил главное фото с белой простыни на белом фоне на lifestyle-кадр с кроватью в интерьере. CTR вырос с 2.3% до 4.1% за две недели — и карточка поднялась с 34 на 14 место по главному запросу без каких-либо других изменений.
        </p>
        <p style={styles.p}>
          Подробнее о том, как обновить фото без потери позиций, читайте в статье{" "}
          <Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>
            «Как обновить фото и не потерять позиции»
          </Link>
          .
        </p>

        <h2 style={styles.h2}>Что делать прямо сейчас</h2>
        <p style={styles.p}>Если вы ещё не мониторите позиции систематически, начните с трёх шагов:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Шаг 1.</strong> Откройте ЛК WB или Ozon, найдите раздел с показами и CTR. Посмотрите топ-10 ваших товаров по выручке — у каких падают показы за последний месяц?</li>
          <li style={styles.li}><strong>Шаг 2.</strong> Зарегистрируйтесь в MPStats или SalesFinder (есть пробный период). Добавьте 5–7 главных SKU на мониторинг по ключевым запросам.</li>
          <li style={styles.li}><strong>Шаг 3.</strong> Для товаров с падающими показами — сравните главное фото с карточками ТОП-5 конкурентов. Если разница очевидна, обновите фото в первую очередь.</li>
        </ul>
        <p style={styles.p}>
          Системный мониторинг позиций занимает 30–40 минут в неделю, но позволяет поймать просадки до того, как они превратятся в потерю выручки. Если вам нужна помощь с обновлением фото карточки для роста CTR — <Link href="/app" style={{ color: "#7c3aed" }}>попробуйте Aiviso</Link> — AI-генерация нового главного фото занимает 2 минуты.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Позиции падают — фото может быть причиной.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— загрузите фото товара, получите новый главный кадр через 2 минуты и отследите, как изменится CTR. 13 кредитов на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/algoritm-poiska-wildberries" style={{ color: "#7c3aed" }}>Алгоритм поиска Wildberries в 2026: что влияет на позиции</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как измерить и поднять кликабельность</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>Как обновить фото и не потерять позиции на WB и Ozon</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

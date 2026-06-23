import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Чем отличается фото для WB и Ozon: требования 2026 — Aiviso",
  description:
    "Разбор отличий требований к фото на Wildberries и Ozon в 2026. Размеры, фон, ракурсы, инфографика — что принимают, что отклоняют и как сделать одним заходом.",
  keywords: [
    "требования к фото wildberries",
    "требования к фото ozon",
    "отличия wb и ozon фото",
    "размер фото для маркетплейсов",
    "фон для карточки wb",
    "инфографика wildberries ozon",
    "wb vs ozon фото",
    "фото товара для маркетплейса 2026",
  ],
  alternates: { canonical: "/blog/wb-vs-ozon-foto-trebovaniya" },
  openGraph: {
    title: "Чем отличается фото для WB и Ozon: требования 2026",
    description:
      "Размеры, фон, количество кадров, инфографика — всё что отличает Wildberries от Ozon. Как сделать одну карточку для обоих маркетплейсов.",
    url: "/blog/wb-vs-ozon-foto-trebovaniya",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Чем отличается фото для WB и Ozon: требования к карточке товара в 2026",
  description:
    "Подробное сравнение требований Wildberries и Ozon к фото товара: размеры, фон, количество кадров, инфографика.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/wb-vs-ozon-foto-trebovaniya",
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
      name: "Чем отличается фото для WB и Ozon",
      item: "https://aiviso.ru/blog/wb-vs-ozon-foto-trebovaniya",
    },
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
  tdOk: { padding: "10px 12px", border: "1px solid #a7f3d0", background: "#ecfdf5", color: "#065f46" },
  tdNo: { padding: "10px 12px", border: "1px solid #fca5a5", background: "#fee2e2", color: "#991b1b" },
};

export default function WbVsOzonFoto() {
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
          <span style={{ color: "#1f2937" }}>Фото для WB vs Ozon</span>
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
          Чем отличается фото для WB и Ozon: полный разбор требований 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 23 июня 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Если торгуете на двух площадках сразу, то знаете: загрузить одно и то же фото на WB и Ozon не
          получится без правок. У площадок разные требования к размерам, фону, количеству изображений и
          оформлению инфографики. Разберём всё по пунктам — чтобы один раз настроить процесс и не переделывать
          карточки по второму кругу.
        </p>

        <h2 style={styles.h2}>Главное отличие: формат и размер</h2>
        <p style={styles.p}>
          Оба маркетплейса используют вертикальный формат <strong>3:4</strong> для карточек товара. Квадрат
          1:1, который раньше рекомендовал Ozon, давно устарел — на практике селлеры везде загружают
          900&thinsp;×&thinsp;1200 пикселей, это даёт максимальную площадь в листинге на любом экране.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Оптимальный размер</td>
              <td style={styles.tdAccent}>
                <strong>900 × 1200 px</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>900 × 1200 px</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Соотношение сторон</td>
              <td style={styles.td}>3:4</td>
              <td style={styles.td}>3:4</td>
            </tr>
            <tr>
              <td style={styles.td}>Минимальный размер</td>
              <td style={styles.td}>450 × 600 px</td>
              <td style={styles.td}>200 × 200 px (не рекомендуется)</td>
            </tr>
            <tr>
              <td style={styles.td}>Максимальный вес файла</td>
              <td style={styles.td}>10 МБ</td>
              <td style={styles.td}>10 МБ</td>
            </tr>
            <tr>
              <td style={styles.td}>Форматы</td>
              <td style={styles.td}>JPG, PNG</td>
              <td style={styles.td}>JPG, PNG</td>
            </tr>
            <tr>
              <td style={styles.td}>Максимум фото в карточке</td>
              <td style={styles.td}>30</td>
              <td style={styles.td}>15</td>
            </tr>
            <tr>
              <td style={styles.td}>Рекомендуемое количество</td>
              <td style={styles.td}>6–10</td>
              <td style={styles.td}>6–8</td>
            </tr>
          </tbody>
        </table>

        <p style={{ ...styles.p, background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 10, padding: "10px 16px", color: "#92400e" }}>
          Если где-то в вашем коде или шаблонах остался пресет 1000&thinsp;×&thinsp;1000 для Ozon — это
          устаревший стандарт, меняйте на 900&thinsp;×&thinsp;1200.
        </p>

        <h2 style={styles.h2}>Требования к фону: где жёстче</h2>
        <p style={styles.p}>
          Здесь площадки расходятся заметнее всего. WB строже к главному фото, Ozon даёт чуть больше свободы
          в отношении lifestyle-сцен на превью.
        </p>

        <h3 style={styles.h3}>Wildberries: белый фон обязателен для главного фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Главное фото (слайд №1) — <strong>только белый фон</strong>, товар занимает не менее 70% кадра.
          </li>
          <li style={styles.li}>
            Со второго слайда — любой фон: студийный, lifestyle, инфографика.
          </li>
          <li style={styles.li}>
            Наличие лого или текста на главном фото — причина отклонения модерацией.
          </li>
          <li style={styles.li}>
            Водяные знаки, рамки, коллажи на главном фото — запрещены.
          </li>
        </ul>

        <h3 style={styles.h3}>Ozon: чуть мягче, но тоже есть правила</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Допускается нейтральный светлый фон на главном фото — не обязательно чисто белый.
          </li>
          <li style={styles.li}>
            Текст на главном фото разрешён, если не перекрывает товар и читается.
          </li>
          <li style={styles.li}>
            Контрастный цветной фон (чёрный, ярко-красный) — допускается в ряде категорий, но
            лучше тестировать: алгоритм может занижать CTR тёмных карточек.
          </li>
          <li style={styles.li}>
            Логотип бренда на фото — разрешён, но не должен занимать более 20% площади.
          </li>
        </ul>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            margin: "24px 0",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              background: "#f5f3ff",
              border: "1px solid #ddd6fe",
              borderRadius: 12,
            }}
          >
            <p style={{ margin: 0, fontWeight: 700, color: "#5b21b6", fontSize: 15, marginBottom: 8 }}>
              WB: главное фото
            </p>
            <ul style={{ ...styles.ul, fontSize: 14 }}>
              <li style={styles.li}>Белый фон — строго</li>
              <li style={styles.li}>Без текста и лого</li>
              <li style={styles.li}>Товар от 70% кадра</li>
              <li style={styles.li}>Без теней на фоне</li>
            </ul>
          </div>
          <div
            style={{
              padding: "16px 20px",
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderRadius: 12,
            }}
          >
            <p style={{ margin: 0, fontWeight: 700, color: "#065f46", fontSize: 15, marginBottom: 8 }}>
              Ozon: главное фото
            </p>
            <ul style={{ ...styles.ul, fontSize: 14 }}>
              <li style={styles.li}>Светлый нейтральный фон</li>
              <li style={styles.li}>Текст разрешён</li>
              <li style={styles.li}>Лого до 20% площади</li>
              <li style={styles.li}>Цветной фон — по категории</li>
            </ul>
          </div>
        </div>

        <h2 style={styles.h2}>Инфографика: разные стандарты оформления</h2>
        <p style={styles.p}>
          Инфографика на WB и Ozon работает по разной логике. Один из наших клиентов в категории «Посуда»
          перенёс карточки с WB на Ozon без правок — конверсия упала на 18% только из-за того, что стиль
          инфографики не попадал в ожидания аудитории площадки.
        </p>

        <h3 style={styles.h3}>Инфографика на Wildberries</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Размещается со второго слайда. Первый — всегда чистый товар на белом.
          </li>
          <li style={styles.li}>
            Аудитория WB привыкла к плотной инфографике: состав, размеры, УТП, сертификаты — всё на одном
            кадре.
          </li>
          <li style={styles.li}>
            Оптимальный шрифт для текста на инфографике — от 24px, иначе на мобильном нечитаемо.
          </li>
          <li style={styles.li}>
            Стрелки, выноски, кружки с цифрами — работают хорошо, аудитория к этому привыкла.
          </li>
          <li style={styles.li}>
            Тёмный фон + белый текст на инфографике — один из самых конверсионных паттернов для электроники
            и инструментов.
          </li>
        </ul>

        <h3 style={styles.h3}>Инфографика на Ozon</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Можно разместить уже на первом слайде в виде небольшого бейджа или плашки с УТП.
          </li>
          <li style={styles.li}>
            Аудитория Ozon чуть более «дизайнерская» — перегруженные слайды работают хуже, чем лаконичные.
          </li>
          <li style={styles.li}>
            Ozon активно продвигает Rich Content — карточки с расширенным описанием и встроенными
            блоками. Это влияет на ранжирование.
          </li>
          <li style={styles.li}>
            Плашка «Бестселлер», «Новинка», «−30%» — Ozon генерирует их автоматически, не нужно рисовать
            вручную.
          </li>
        </ul>

        <h2 style={styles.h2}>Категории с разными требованиями</h2>
        <p style={styles.p}>
          Некоторые категории имеют специфические правила на каждой площадке. Вот самые частые точки
          расхождения:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда</td>
              <td style={styles.td}>Модель или Ghost Mannequin, вид спереди — обязателен</td>
              <td style={styles.td}>Допускается flat lay и предметная съёмка без модели</td>
            </tr>
            <tr>
              <td style={styles.td}>Обувь</td>
              <td style={styles.td}>Пара обуви + один кадр крупно подошвы</td>
              <td style={styles.td}>Пара или одна туфля под углом 45°</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика</td>
              <td style={styles.td}>Флакон / упаковка + состав на втором слайде</td>
              <td style={styles.td}>Ozon требует фото этикетки с составом для части SKU</td>
            </tr>
            <tr>
              <td style={styles.td}>Продукты питания</td>
              <td style={styles.td}>Фото упаковки + срок годности читаем</td>
              <td style={styles.td}>Обязательно фото состава и КБЖУ</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника</td>
              <td style={styles.td}>Тёмный фон разрешён, коробка + устройство</td>
              <td style={styles.td}>Белый или серый фон, обязательно вид интерфейса</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Как подготовить фото сразу для двух площадок</h2>
        <p style={styles.p}>
          Переснимать товар дважды — расточительство. Умный подход: один раз снять или сгенерировать
          исходник, потом адаптировать под каждую площадку. Вот схема, которую используют наши клиенты:
        </p>

        <ol style={{ paddingLeft: 24 }}>
          <li style={{ ...styles.li, marginBottom: 12 }}>
            <strong>Базовый кадр на белом фоне.</strong> Это универсальная основа: подходит как главное
            фото для WB и как один из слайдов для Ozon. 900&thinsp;×&thinsp;1200, товар по центру, поля
            4–5% с каждой стороны.
          </li>
          <li style={{ ...styles.li, marginBottom: 12 }}>
            <strong>Lifestyle-кадры без текста.</strong> 2–3 сцены с товаром в контексте использования.
            Подходят обеим площадкам без правок — просто меняется порядок слайдов.
          </li>
          <li style={{ ...styles.li, marginBottom: 12 }}>
            <strong>Инфографика раздельно.</strong> Для WB — плотная, с выносками и размерами. Для
            Ozon — лаконичная, 1–2 ключевых факта на кадр. Шаблоны сохраняем раздельно и не смешиваем.
          </li>
          <li style={{ ...styles.li, marginBottom: 12 }}>
            <strong>Экспорт в нужных пресетах.</strong> WB: 900&thinsp;×&thinsp;1200. Ozon:
            900&thinsp;×&thinsp;1200 (тот же пресет — упрощает жизнь).
          </li>
        </ol>

        <h2 style={styles.h2}>Что отклоняют на каждой площадке</h2>
        <p style={styles.p}>
          Зная типичные причины отклонения, можно проверять карточки до загрузки и не ждать ответа
          модерации 2–3 дня.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Нарушение</th>
              <th style={styles.th}>WB</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Цветной фон на главном фото</td>
              <td style={styles.tdNo}>Отклонение</td>
              <td style={styles.tdOk}>Допускается</td>
            </tr>
            <tr>
              <td style={styles.td}>Текст / лого на главном фото</td>
              <td style={styles.tdNo}>Отклонение</td>
              <td style={styles.tdOk}>Разрешено</td>
            </tr>
            <tr>
              <td style={styles.td}>Коллаж из нескольких товаров</td>
              <td style={styles.tdNo}>Запрещено</td>
              <td style={styles.tdNo}>Запрещено</td>
            </tr>
            <tr>
              <td style={styles.td}>Размытое или пикселированное фото</td>
              <td style={styles.tdNo}>Отклонение</td>
              <td style={styles.tdNo}>Отклонение</td>
            </tr>
            <tr>
              <td style={styles.td}>Водяные знаки</td>
              <td style={styles.tdNo}>Запрещено</td>
              <td style={styles.tdNo}>Запрещено</td>
            </tr>
            <tr>
              <td style={styles.td}>Чужой товар / несоответствие описанию</td>
              <td style={styles.tdNo}>Бан SKU</td>
              <td style={styles.tdNo}>Бан SKU</td>
            </tr>
            <tr>
              <td style={styles.td}>Изображение алкоголя / табака без маркировки</td>
              <td style={styles.tdNo}>Отклонение</td>
              <td style={styles.tdNo}>Отклонение</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Чек-лист перед загрузкой фото на WB и Ozon</h2>
        <p style={styles.p}>Используйте перед каждой загрузкой карточки:</p>

        <h3 style={styles.h3}>Общее для обеих площадок</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Размер главного фото 900&thinsp;×&thinsp;1200 px (формат 3:4)</li>
          <li style={styles.li}>Вес файла не более 10 МБ</li>
          <li style={styles.li}>Формат JPG или PNG</li>
          <li style={styles.li}>Фото резкое, товар не перекрыт водяными знаками</li>
          <li style={styles.li}>Товар соответствует описанию в карточке</li>
          <li style={styles.li}>Нет коллажей из нескольких SKU на одном кадре</li>
          <li style={styles.li}>Минимум 6 фото в карточке</li>
        </ul>

        <h3 style={styles.h3}>Специфично для Wildberries</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото — белый фон, без текста и лого</li>
          <li style={styles.li}>Товар занимает не менее 70% площади главного фото</li>
          <li style={styles.li}>Одежда — съёмка на модели или Ghost Mannequin</li>
          <li style={styles.li}>Инфографика — со второго слайда</li>
        </ul>

        <h3 style={styles.h3}>Специфично для Ozon</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Лого на фото — не более 20% площади</li>
          <li style={styles.li}>Для продуктов питания — фото с составом и КБЖУ</li>
          <li style={styles.li}>Категория «Электроника» — обязателен вид интерфейса или экрана</li>
          <li style={styles.li}>Rich Content заполнен — влияет на ранжирование</li>
        </ul>

        <h2 style={styles.h2}>Как AI упрощает работу с двумя площадками</h2>
        <p style={styles.p}>
          Ручная адаптация карточек под WB и Ozon — это рутина, которую реально автоматизировать. Один
          из наших клиентов в категории «Детские товары» сократил время подготовки карточки с 3 дней до
          4 часов, перейдя на следующий процесс:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            Загружает одно исходное фото товара в{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Aiviso
            </Link>{" "}
            — белый фон, нейтральное освещение.
          </li>
          <li style={styles.li}>
            AI генерирует набор из 8 кадров: белый фон, lifestyle-сцены, кадр с размерами.
          </li>
          <li style={styles.li}>
            Выбирает нужные слайды под WB и Ozon — скачивает в пресете 900&thinsp;×&thinsp;1200.
          </li>
          <li style={styles.li}>
            Инфографику для каждой площадки делает в шаблонах — 20 минут на карточку.
          </li>
        </ol>
        <p style={styles.p}>
          Итого: один исходник — две готовые карточки. Никаких повторных фотосессий при смене площадки или
          обновлении сезонных сцен.
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Готовите карточки для WB и Ozon?
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Загрузите одно фото товара в Aiviso — получите готовый набор кадров под оба маркетплейса в
            нужном размере 900&thinsp;×&thinsp;1200. Первые 13 кредитов бесплатно — хватит на 2 полные
            карточки.
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
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>
            <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
              Размеры фото для маркетплейсов: полный чек-лист 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>
              Как сделать фото для Wildberries: пошаговый гайд
            </Link>
          </li>
          <li>
            <Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>
              7 ошибок с фото товара, которые убивают конверсию
            </Link>
          </li>
          <li>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

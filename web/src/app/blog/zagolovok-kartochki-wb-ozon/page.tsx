import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как написать заголовок карточки на WB и Ozon в 2026 — Aiviso",
  description:
    "Формула идеального заголовка карточки товара для Wildberries и Ozon: структура, ключевые слова, длина, типичные ошибки и чек-лист из 12 пунктов.",
  keywords: [
    "заголовок карточки wildberries",
    "заголовок карточки ozon",
    "название товара маркетплейс",
    "ключевые слова wildberries",
    "seo заголовок wildberries",
    "как назвать товар на маркетплейсе",
    "оптимизация карточки wb",
    "заголовок для ozon seo",
  ],
  alternates: { canonical: "/blog/zagolovok-kartochki-wb-ozon" },
  openGraph: {
    title: "Как написать заголовок карточки на WB и Ozon в 2026",
    description:
      "Формула, примеры, ошибки и чек-лист из 12 пунктов для заголовка карточки товара на Wildberries и Ozon.",
    url: "/blog/zagolovok-kartochki-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как написать заголовок карточки на Wildberries и Ozon в 2026",
  description:
    "Формула идеального заголовка карточки товара для WB и Ozon: структура, ключевые слова, длина, типичные ошибки и чек-лист.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/zagolovok-kartochki-wb-ozon",
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
      name: "Заголовок карточки WB и Ozon",
      item: "https://aiviso.ru/blog/zagolovok-kartochki-wb-ozon",
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
  tdBad: { padding: "10px 12px", border: "1px solid #fecaca", background: "#fef2f2" },
};

export default function ZagolovokKartochkiWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Заголовок карточки WB и Ozon</span>
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
          Как написать заголовок карточки на Wildberries и Ozon: формула и чек-лист
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>18 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Заголовок — первое, что видит алгоритм поиска и покупатель. Один правильно написанный
          заголовок может поднять карточку с 60-й позиции на 12-ю без рекламы. Один неправильный —
          заблокировать карточку за спам. Разбираем конкретные формулы для WB и Ozon с примерами и
          чек-листом из 12 пунктов.
        </p>

        <h2 style={styles.h2}>Почему заголовок важнее, чем кажется</h2>
        <p style={styles.p}>
          Алгоритмы WB и Ozon вытаскивают ключевые слова в первую очередь из заголовка. Описание и
          характеристики тоже индексируются, но заголовок получает максимальный вес. Это значит: если
          главный ключ — «кружка с крышкой 400 мл» — не попал в заголовок, карточка проигрывает
          конкурентам у которых он есть, даже при лучшем фото и цене.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Посуда» поменял заголовок с «Кружка подарочная» на
          «Кружка с крышкой и ложкой 400 мл термос для чая» — позиция по запросу «кружка с крышкой»
          выросла с 74 на 18 за две недели, продажи выросли на 34%.
        </p>
        <p style={styles.p}>
          При этом оба маркетплейса жёстко санкционируют заголовки со спамом — если ключи просто
          перечислены через запятую, карточку занижают или блокируют.
        </p>

        <h2 style={styles.h2}>Требования WB и Ozon: в чём разница</h2>
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
              <td style={styles.td}>Максимальная длина</td>
              <td style={styles.td}>100 символов</td>
              <td style={styles.td}>255 символов</td>
            </tr>
            <tr>
              <td style={styles.td}>Запрещено</td>
              <td style={styles.td}>Спам, заглавные буквы через слово, эмодзи</td>
              <td style={styles.td}>Слоганы, призывы купить, эмодзи</td>
            </tr>
            <tr>
              <td style={styles.td}>Формат</td>
              <td style={styles.td}>Тип + бренд + характеристики</td>
              <td style={styles.td}>Тип + модель/серия + характеристики</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Совет</td>
              <td style={styles.tdAccent}>Главный ключ в первые 60 символов</td>
              <td style={styles.tdAccent}>Используйте полную длину — Ozon это поощряет</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Главное отличие: на Ozon у вас вдвое больше места, и алгоритм читает весь заголовок
          равномерно. На WB — первые 60–70 символов весят больше, остальное дополнительные ключи.
        </p>

        <h2 style={styles.h2}>Формула заголовка для WB</h2>
        <p style={styles.p}>
          Wildberries рекомендует структуру: <strong>Тип товара + Бренд + Ключевые свойства</strong>.
          На практике работает так:
        </p>

        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "16px 0",
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          [Тип товара] [Бренд/без бренда] [материал/цвет/размер] [сценарий использования]
        </div>

        <h3 style={styles.h3}>Примеры для WB</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.tdBad}>Плохо</th>
              <th style={styles.tdAccent}>Хорошо</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда</td>
              <td style={styles.tdBad}>Платье женское красивое</td>
              <td style={styles.tdAccent}>Платье летнее льняное миди женское белое</td>
            </tr>
            <tr>
              <td style={styles.td}>Посуда</td>
              <td style={styles.tdBad}>Набор посуды для кухни</td>
              <td style={styles.tdAccent}>Кастрюля с крышкой 5 л нержавеющая сталь индукция</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.tdBad}>Игрушка детская развивающая</td>
              <td style={styles.tdAccent}>Конструктор деревянный для детей 3+ 60 деталей</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика</td>
              <td style={styles.tdBad}>Крем для лица увлажняющий супер</td>
              <td style={styles.tdAccent}>Крем для лица с гиалуроновой кислотой 50 мл увлажняющий</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Формула заголовка для Ozon</h2>
        <p style={styles.p}>
          Ozon даёт 255 символов — используйте их. Структура:{" "}
          <strong>Тип + Модель/Серия + Ключевые характеристики + Размер/Объём/Цвет + Назначение</strong>.
        </p>

        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "16px 0",
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          [Тип] [Марка/модель] [материал] [объём/размер/цвет] [ключевое свойство 1] [ключевое свойство 2]
        </div>

        <h3 style={styles.h3}>Примеры для Ozon</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>До</th>
              <th style={styles.th}>После</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tdBad}>Термос для чая синий большой</td>
              <td style={styles.tdAccent}>
                Термос для чая и кофе 1 л из нержавеющей стали с клапаном синий, сохраняет тепло 12
                часов, для офиса и туризма
              </td>
            </tr>
            <tr>
              <td style={styles.tdBad}>Кроссовки мужские 42</td>
              <td style={styles.tdAccent}>
                Кроссовки мужские беговые размер 42 сетка дышащая, подошва EVA, для бега и фитнеса
                белые
              </td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Как находить правильные ключевые слова для заголовка</h2>
        <p style={styles.p}>
          Алгоритм поиска ключей простой, но его нужно делать методично:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Строка поиска самого маркетплейса.</strong> Введите первые 2–3 слова вашего
            товара — маркетплейс подскажет автодополнения. Это реальные запросы покупателей.
          </li>
          <li style={styles.li}>
            <strong>Карточки конкурентов в ТОП-10.</strong> Откройте 5–7 карточек лидеров по вашему
            товару и выпишите слова, которые встречаются в заголовках у большинства.
          </li>
          <li style={styles.li}>
            <strong>MPStats / Mphe / Маяк.</strong> Инструменты аналитики показывают точную частоту
            запросов. Ориентируйтесь на ключи с 1 000+ показов в месяц для основного заголовка.
          </li>
          <li style={styles.li}>
            <strong>Характеристики товара.</strong> Размер, материал, цвет, объём, назначение — это
            тоже ключи. Покупатель ищет «перчатки кожаные мужские XL», а не просто «перчатки».
          </li>
        </ul>
        <p style={styles.p}>
          Главный ключ — тот, по которому покупателей больше всего — ставьте в самое начало
          заголовка. Второстепенные — добавляйте к характеристикам.
        </p>

        <h2 style={styles.h2}>7 типичных ошибок в заголовках</h2>

        <h3 style={styles.h3}>1. Слишком общий заголовок</h3>
        <p style={styles.p}>
          «Сумка женская» — по этому запросу конкуренция огромная, а карточка ничем не выделяется.
          Добавьте конкретику: «Сумка-тоут женская кожаная А4 чёрная» — и сразу попадаете в более
          точные, менее конкурентные запросы с более тёплой аудиторией.
        </p>

        <h3 style={styles.h3}>2. Перечисление ключей через запятую</h3>
        <p style={styles.p}>
          «Кроссовки, кеды, обувь, ботинки мужские, 42, 43» — это спам. WB и Ozon понижают
          карточки с таким заголовком, а иногда блокируют. Заголовок должен читаться как
          человеческая фраза.
        </p>

        <h3 style={styles.h3}>3. Бренд вместо типа товара</h3>
        <p style={styles.p}>
          Если бренд неизвестен, не начинайте с него. «Nike Кроссовки» работает, потому что Nike —
          поисковый запрос. «Vesta Pro Кроссовки» — нет, потому что никто не ищет «Vesta Pro».
          Начните с типа товара, бренд добавьте после.
        </p>

        <h3 style={styles.h3}>4. Эмодзи и спецсимволы</h3>
        <p style={styles.p}>
          Оба маркетплейса запрещают эмодзи в заголовках. Кроме того, символы типа «★» или «|»
          снижают читаемость и нередко срезаются при отображении в поиске.
        </p>

        <h3 style={styles.h3}>5. Заглавные буквы не по правилам</h3>
        <p style={styles.p}>
          «КРУЖКА ТЕРМОС ДЛЯ ЧАЯ» — Wildberries блокирует заголовки написанные целиком заглавными.
          Используйте обычный регистр: заглавная только в начале предложения и в именах собственных.
        </p>

        <h3 style={styles.h3}>6. Слоганы и призывы</h3>
        <p style={styles.p}>
          «Купи сейчас!», «Лучший подарок», «Хит продаж» — Ozon напрямую запрещает такие фразы в
          заголовке. WB также снижает карточки с рекламными слоганами.
        </p>

        <h3 style={styles.h3}>7. Игнорирование длины</h3>
        <p style={styles.p}>
          На WB 100 символов — используйте хотя бы 60–80, чтобы охватить больше запросов.
          На Ozon — используйте все 255, добавляя характеристики и сценарии использования.
          Короткий заголовок — упущенный трафик.
        </p>

        <h2 style={styles.h2}>Чек-лист заголовка: 12 пунктов перед публикацией</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Главный ключевой запрос стоит в начале заголовка</li>
          <li style={styles.li}>Заголовок читается как нормальная фраза, не как список через запятую</li>
          <li style={styles.li}>Длина: 60–100 символов для WB, 120–255 для Ozon</li>
          <li style={styles.li}>Нет заглавных букв через слово, нет ALL CAPS</li>
          <li style={styles.li}>Нет эмодзи и спецсимволов</li>
          <li style={styles.li}>Нет слоганов и призывов («купи», «лучший», «суперскидка»)</li>
          <li style={styles.li}>Указан материал или состав, если это важно для выбора</li>
          <li style={styles.li}>Указан размер, объём или цвет, если они фильтруются покупателями</li>
          <li style={styles.li}>Указано назначение или аудитория («для мужчин», «детский», «для кухни»)</li>
          <li style={styles.li}>Проверено автодополнение в поиске WB/Ozon — ваши ключи там есть</li>
          <li style={styles.li}>Заголовок не совпадает с конкурентами дословно (уникальность)</li>
          <li style={styles.li}>Тестовый показ карточки после сохранения — заголовок не обрезается</li>
        </ul>

        <h2 style={styles.h2}>Как тестировать заголовки</h2>
        <p style={styles.p}>
          Поменять заголовок и ждать результата — самый медленный способ. Лучше работать так:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>А/Б тест через копию карточки.</strong> На Ozon можно создать копию с другим
            заголовком и пустить на неё рекламу. Через 2 недели сравниваете CTR и конверсию.
          </li>
          <li style={styles.li}>
            <strong>Смотрите позиции через 7–14 дней.</strong> После изменения заголовка алгоритм
            переиндексирует карточку не мгновенно. Ждите неделю, потом проверяйте позиции по
            целевым запросам вручную или через сервисы аналитики.
          </li>
          <li style={styles.li}>
            <strong>Ориентируйтесь на CTR в личном кабинете.</strong> Если CTR вырос после смены
            заголовка — значит, он лучше описывает товар и покупатели чаще кликают. Если упал —
            откатывайте.
          </li>
        </ul>
        <p style={styles.p}>
          У одного из наших клиентов в категории «Спортивное питание» смена заголовка с «Протеин
          шоколадный» на «Протеин шоколадный 1 кг 27г белка в порции без сахара» подняла CTR с 2.1%
          до 3.4% — это плюс 62% кликов при том же рекламном бюджете.
        </p>

        <h2 style={styles.h2}>Как фото связано с заголовком</h2>
        <p style={styles.p}>
          Заголовок и главное фото работают в паре. Алгоритм учитывает поведение покупателя: если
          по запросу «кружка с крышкой» ваша карточка показывается, но кликают на неё редко — позиция
          падает. Это происходит когда фото не соответствует ожиданию, которое формирует заголовок.
        </p>
        <p style={styles.p}>
          Написали в заголовке «кружка с крышкой и ложкой» — на главном фото должна быть именно
          крышка и ложка, крупно и отчётливо. Иначе покупатель не кликает, CTR падает, позиция
          тоже.
        </p>
        <p style={styles.p}>
          Поэтому когда меняете заголовок — проверяйте, что главное фото визуально подтверждает
          ключевые слова в нём. Это одна из причин, почему мы в{" "}
          <Link href="/" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>{" "}
          советуем обновлять фото и заголовок одновременно при оптимизации карточки.
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Обновляете карточки?</strong> После правки заголовка важно, чтобы фото
            подтверждало то, что вы обещаете покупателю.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              В Aiviso
            </Link>{" "}
            вы загружаете фото товара и за 2 минуты получаете карточку в размере 900×1200 с нужным
            фоном, инфографикой и деталями — всё соответствует реальному товару. 13 кредитов
            бесплатно на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
              SEO для карточки Wildberries в 2026: пошаговый гайд
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/opisanie-tovara-wb" style={{ color: "#7c3aed" }}>
              Как написать описание товара для Wildberries: полное руководство
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
              Как поднять конверсию карточки на 30%: чек-лист
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

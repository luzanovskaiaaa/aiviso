import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как анализировать конкурентов на Wildberries и Ozon — Aiviso",
  description: "Пошаговый разбор карточек конкурентов: фото, ключи, цена, отзывы. Чек-лист из 18 пунктов и инструменты для анализа конкурентов на WB и Ozon в 2026.",
  keywords: [
    "анализ конкурентов wildberries",
    "анализ конкурентов ozon",
    "карточка товара конкуренты",
    "как анализировать конкурентов на маркетплейсе",
    "mpstat аналог",
    "wildberries конкуренты инструменты",
    "SEO wildberries конкуренты",
    "как обойти конкурентов на wb",
  ],
  alternates: { canonical: "/blog/analiz-konkurentov-wildberries-ozon" },
  openGraph: {
    title: "Как анализировать конкурентов на WB и Ozon: пошаговый гайд 2026",
    description: "Чек-лист из 18 пунктов: разбираем фото, ключи, цену и отзывы конкурентов. Реальные инструменты и план действий на неделю.",
    url: "/blog/analiz-konkurentov-wildberries-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как анализировать конкурентов на Wildberries и Ozon: пошаговый гайд 2026",
  description: "Пошаговый разбор карточек конкурентов: фото, ключи, цена, отзывы. Чек-лист из 18 пунктов и инструменты для анализа конкурентов на WB и Ozon.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/analiz-konkurentov-wildberries-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Анализ конкурентов на WB и Ozon", item: "https://aiviso.ru/blog/analiz-konkurentov-wildberries-ozon" },
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

export default function AnalizKonkurentov() {
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
          <span style={{ color: "#1f2937" }}>Анализ конкурентов на WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как анализировать конкурентов на Wildberries и Ozon: пошаговый гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 25 июня 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство новичков на маркетплейсах запускают карточку товара «как умеют» — и потом
          удивляются, почему соседняя карточка с похожим товаром продаёт в 10 раз больше. Ответ
          почти всегда лежит в деталях: фото, заголовок, ключевые слова, цена. Всё это видно
          в карточках конкурентов — нужно лишь знать, на что смотреть.
        </p>

        <h2 style={styles.h2}>Зачем анализировать конкурентов — и когда это критично</h2>
        <p style={styles.p}>
          Анализ конкурентов — это не шпионаж, это базовая работа селлера. Маркетплейс — витрина,
          где покупатель в один клик видит 20–50 карточек на одну нишу. Он сравнивает. Если ваша
          карточка визуально слабее, цена выше или заголовок менее точный — трафик уходит к
          конкуренту.
        </p>
        <p style={styles.p}>
          Анализ особенно важен в трёх ситуациях:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Вы только заходите в нишу и не знаете, как устроен ТОП</li>
          <li style={styles.li}>Карточка есть, но конверсия ниже 2–3% при норме по категории 5–8%</li>
          <li style={styles.li}>Вы обновляете карточку к сезону и хотите не просто «что-то поменять», а целенаправленно опередить конкурентов</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «Органайзеры для кухни» провёл анализ 15 конкурентов
          из ТОП-20 перед запуском. Скопировал не дизайн, а логику: какие USP выносят на обложку,
          какие размеры указывают первыми, что пишут в первых трёх пунктах описания. Через
          три недели его карточка вошла в ТОП-15 с конверсией 6.4%.
        </p>

        <h2 style={styles.h2}>Шаг 1. Составь список конкурентов</h2>
        <p style={styles.p}>
          Зайди в поиск Wildberries или Ozon, введи основной запрос по вашему товару. Например,
          «органайзер для кухни» или «сумка через плечо мужская кожаная». Запиши в таблицу
          первые 20–25 результатов (именно первую страницу, не рекламу).
        </p>
        <p style={styles.p}>
          Сразу фильтруй: убери карточки с рейтингом ниже 4.5 и с менее чем 50 отзывами — они
          в ТОПе случайно (за счёт рекламы или нового алгоритмического буста). Оставь тех,
          кто держится органически: много отзывов, стабильные продажи, карточка явно не первый день.
        </p>
        <p style={styles.p}>
          Итого у вас должно быть 10–15 карточек для детального разбора. Больше не нужно —
          тратить день на 50 конкурентов нет смысла, паттерны повторяются уже на 10-й карточке.
        </p>

        <h2 style={styles.h2}>Шаг 2. Разбери карточку конкурента по элементам</h2>
        <p style={styles.p}>
          Открывай каждую карточку и фиксируй данные в таблицу. Не «смотри вообще» — именно
          записывай, иначе к 15-й карточке всё смешается.
        </p>

        <h3 style={styles.h3}>Фото и обложка</h3>
        <p style={styles.p}>
          Обложка — единственное, что видит покупатель в листинге. На неё приходится 70% решения
          «кликнуть или нет». Смотри:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Фон.</strong> Белый, студийный или lifestyle? В бюджетных нишах часто белый, в премиум — интерьерный.</li>
          <li style={styles.li}><strong>Главный USP на обложке.</strong> Что написано большими буквами? «-40%», «1200 мл», «3 в 1», «Водонепроницаемый»?</li>
          <li style={styles.li}><strong>Количество фото в карточке.</strong> Норма в ТОПе — 8–12 кадров. Меньше 6 — карточка слабая.</li>
          <li style={styles.li}><strong>Есть ли инфографика?</strong> На каком кадре (2-м, 3-м?) и что на ней — состав, размеры, сценарии использования?</li>
          <li style={styles.li}><strong>Формат.</strong> Все конкуренты в ТОПе используют 3:4 (900×1200). Квадрат — сигнал слабой карточки.</li>
        </ul>
        <p style={styles.p}>
          Если хочешь быстро сделать обложку не хуже конкурентов из ТОПа —{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso генерирует фото товара</Link>{" "}
          с нужным фоном и нужным форматом 3:4 сразу.
        </p>

        <h3 style={styles.h3}>Заголовок и ключевые слова</h3>
        <p style={styles.p}>
          Заголовок карточки на WB — до 100 символов, на Ozon — до 500 (в поле «Название»).
          Записывай заголовки всех конкурентов и выделяй повторяющиеся слова. Если в 12 из 15
          карточек есть слово «складной» — это обязательный ключ для вашей ниши.
        </p>
        <p style={styles.p}>
          На Ozon удобно смотреть через исходный код страницы (Ctrl+U): ищи тег
          {" "}<code style={{ background: "#f3f4f6", padding: "1px 5px", borderRadius: 4, fontSize: 13 }}>meta name="keywords"</code>{" "}
          — там бывают ключи, которые продавец прописал явно. Не золотая жила, но иногда видны
          неочевидные хвостовые запросы.
        </p>

        <h2 style={styles.h2}>Шаг 3. Цена, отзывы и рейтинг</h2>
        <p style={styles.p}>
          Это три показателя, которые алгоритм WB и Ozon использует напрямую при ранжировании.
          Запиши для каждого конкурента:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Показатель</th>
              <th style={styles.th}>Что смотреть</th>
              <th style={styles.th}>Вывод</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Цена</td>
              <td style={styles.td}>Диапазон по ТОП-15</td>
              <td style={styles.td}>Где ваша цена — в нижней трети, средней или верхней?</td>
            </tr>
            <tr>
              <td style={styles.td}>Скидка</td>
              <td style={styles.td}>Какой размер скидки показывают (зачёркнутая цена)</td>
              <td style={styles.tdAccent}>Видимость скидки 20%+ поднимает CTR на 15–25%</td>
            </tr>
            <tr>
              <td style={styles.td}>Отзывы</td>
              <td style={styles.td}>Количество и средний балл</td>
              <td style={styles.td}>При меньше 30 отзывах — задача №1 их набрать</td>
            </tr>
            <tr>
              <td style={styles.td}>Рейтинг</td>
              <td style={styles.td}>4.5+ — норма ТОПа</td>
              <td style={styles.td}>Ниже 4.3 — алгоритм занижает позицию</td>
            </tr>
            <tr>
              <td style={styles.td}>Отвечают ли на отзывы</td>
              <td style={styles.td}>Есть ответы продавца?</td>
              <td style={styles.td}>Ответы на негатив снижают «отток» покупателей</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Особое внимание — на <strong>негативные отзывы конкурентов</strong>. Это готовый список
          болей аудитории: что разочаровало покупателей в чужом товаре. Если у конкурента
          10 человек жалуются на «плохо закрывается крышка» — вынеси на свою обложку
          «Герметичная крышка» и сразу отстранишься.
        </p>

        <h2 style={styles.h2}>Шаг 4. Чек-лист из 18 пунктов по карточке конкурента</h2>
        <p style={styles.p}>
          Используй этот список при разборе каждой карточки. Ставь плюс/минус — в итоге
          увидишь, что стабильно есть у всего ТОПа, а что никто не делает (и можно занять).
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Обложка 3:4, не квадрат</li>
          <li style={styles.li}>На обложке есть главное преимущество товара текстом</li>
          <li style={styles.li}>8+ фото в карточке</li>
          <li style={styles.li}>Есть lifestyle-фото (товар в использовании, не только на белом)</li>
          <li style={styles.li}>Есть инфографика с размерами или составом</li>
          <li style={styles.li}>Есть фото упаковки или комплектации</li>
          <li style={styles.li}>Заголовок содержит главный ключевой запрос</li>
          <li style={styles.li}>В заголовке есть числовая характеристика (объём, размер, количество)</li>
          <li style={styles.li}>Описание структурировано: не сплошной текст, а абзацы с выделениями</li>
          <li style={styles.li}>В описании упомянуты сценарии использования</li>
          <li style={styles.li}>Характеристики заполнены полностью (нет пустых полей)</li>
          <li style={styles.li}>Цена с видимой скидкой 20%+</li>
          <li style={styles.li}>Рейтинг 4.5+</li>
          <li style={styles.li}>Отзывов 30+</li>
          <li style={styles.li}>Продавец отвечает на отзывы (особенно на негативные)</li>
          <li style={styles.li}>Есть видеообложка или видеоролик</li>
          <li style={styles.li}>Указано наличие на складе WB / Ozon (FBO, а не FBS)</li>
          <li style={styles.li}>Бренд оформлен — есть логотип в карточке или Rich-контент</li>
        </ul>
        <p style={styles.p}>
          Если у ТОПового конкурента 15+ пунктов из 18 — карточка сильная. Если у вашей
          карточки меньше 10 — есть где расти без изменения самого товара.
        </p>

        <h2 style={styles.h2}>Шаг 5. Что делать с данными — план на неделю</h2>
        <p style={styles.p}>
          После анализа у вас есть таблица по 10–15 конкурентам. Теперь действуй по приоритетам:
        </p>
        <p style={{ ...styles.p, fontWeight: 600, marginTop: 20 }}>День 1–2: Фото</p>
        <p style={styles.p}>
          Если у всех конкурентов из ТОП-10 есть lifestyle-фото и инфографика, а у вас нет —
          это первый приоритет. Фото напрямую влияет на CTR (клики из листинга), а CTR —
          один из сильнейших сигналов ранжирования. Обновление фото даёт результат
          через 3–5 дней после загрузки.
        </p>
        <p style={styles.p}>
          Если снимать не на что или нет времени — используйте{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерацию в Aiviso</Link>:
          загружаете одно исходное фото товара, получаете lifestyle-варианты и инфографику
          в формате 900×1200 готовыми к загрузке.
        </p>
        <p style={{ ...styles.p, fontWeight: 600, marginTop: 20 }}>День 3: Заголовок и ключи</p>
        <p style={styles.p}>
          На основе частотных слов из заголовков конкурентов скорректируйте свой заголовок.
          Не копируйте дословно — нарушение правил площадки. Но ключевые слова нужны те же.
          Добавьте числовую характеристику если её нет: «Органайзер кухонный 3 секции 30×20 см
          складной» лучше, чем просто «Органайзер для кухни».
        </p>
        <p style={{ ...styles.p, fontWeight: 600, marginTop: 20 }}>День 4–5: Описание и характеристики</p>
        <p style={styles.p}>
          Заполните все поля характеристик — особенно те, что заполнены у конкурентов из ТОПа.
          Пустые поля — минус к релевантности карточки. В описание добавьте сценарии
          использования из анализа боли в отзывах конкурентов.
        </p>
        <p style={{ ...styles.p, fontWeight: 600, marginTop: 20 }}>День 6–7: Цена и скидка</p>
        <p style={styles.p}>
          Если ваша цена выше медианы по ТОП-15 — нужно обоснование (лучший состав, большой объём,
          подарочная упаковка). Если ниже — убедитесь что есть видимая скидка: зачёркнутая
          «старая» цена +20–25% к текущей значительно поднимает CTR без реального снижения
          маржи.
        </p>

        <h2 style={styles.h2}>Инструменты для анализа конкурентов</h2>
        <p style={styles.p}>
          Ручной анализ — основа, но есть инструменты которые ускоряют процесс:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>MPStats, Moneyplace, Wildbox</strong> — аналитика по продажам конкурентов.
            Показывают оборот, динамику позиций, частотность ключей. Платные (от 3 000 ₽/мес),
            окупаются если каталог 20+ товаров.
          </li>
          <li style={styles.li}>
            <strong>Sellerfox, Маяк</strong> — бесплатные/условно-бесплатные парсеры позиций.
            Полезны для мониторинга своих позиций после изменений.
          </li>
          <li style={styles.li}>
            <strong>Google Таблицы</strong> — достаточно для ручного анализа. Создайте шаблон
            с 18 пунктами и заполняйте по каждому конкуренту. Нет смысла платить за инструмент,
            пока не разберёте хотя бы ТОП-10 руками.
          </li>
          <li style={styles.li}>
            <strong>Сам маркетплейс</strong> — самый недооценённый инструмент. Поиск, фильтры,
            сортировка по «популярности» и «по отзывам» — разные срезы аудитории. Смотрите
            оба варианта.
          </li>
        </ul>
        <p style={styles.p}>
          Один наш клиент в категории «Детская одежда» сэкономил 6 000 ₽/мес на платных
          сервисах: он просто раз в неделю вручную просматривал ТОП-20 по трём ключевым
          запросам и фиксировал изменения в таблице. За три месяца вывел две карточки
          в ТОП-10 только на этом + обновлённых фото через Aiviso.
        </p>

        <h2 style={styles.h2}>Типичные ошибки при анализе конкурентов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Смотреть только на первое место.</strong> Карточка №1 часто держится за счёт
            многолетней истории продаж, тысяч отзывов и огромного рекламного бюджета. Изучайте
            позиции 5–20 — там реальные конкуренты, к уровню которых можно дотянуться.
          </li>
          <li style={styles.li}>
            <strong>Копировать фото один в один.</strong> Маркетплейсы блокируют дублированный
            контент. Вдохновляйтесь логикой (что показывают, в каком порядке), а не визуалом.
          </li>
          <li style={styles.li}>
            <strong>Анализировать один раз.</strong> Ниша меняется: конкуренты обновляют карточки,
            появляются новые игроки, алгоритмы меняют веса. Делайте анализ раз в 4–6 недель,
            особенно перед сезонным спросом.
          </li>
          <li style={styles.li}>
            <strong>Фокусироваться только на слабых конкурентах.</strong> Смотрите на ТОП, а не
            на тех кто хуже вас — вы соревнуетесь за позиции с сильными.
          </li>
          <li style={styles.li}>
            <strong>Игнорировать мобильный вид.</strong> 70%+ трафика на маркетплейсах — смартфоны.
            Проверяйте как карточка и особенно обложка выглядят на мобильном экране — миниатюра
            4 × 5 пикселей должна читаться.
          </li>
        </ul>

        <h2 style={styles.h2}>Итого: с чего начать прямо сейчас</h2>
        <p style={styles.p}>
          Анализ конкурентов — это не разовая акция перед запуском. Это ежемесячная рутина,
          которая показывает куда двигается ниша и где вы отстаёте. Начните просто:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>Введите свой главный запрос в WB или Ozon, откройте первые 20 карточек</li>
          <li style={styles.li}>Скопируйте чек-лист из 18 пунктов в Google Таблицы</li>
          <li style={styles.li}>Оцените ТОП-10 конкурентов по чек-листу — это займёт 2–3 часа</li>
          <li style={styles.li}>Выделите 3 пункта, где у конкурентов есть, а у вас нет — исправляйте их первыми</li>
          <li style={styles.li}>Обновите фото если нужно — это самое быстрое по эффекту изменение</li>
        </ol>
        <p style={styles.p}>
          Подробнее о том как сделать фото не хуже ТОПа —{" "}
          <Link href="/blog" style={{ color: "#7c3aed" }}>в других статьях блога Aiviso</Link>.
          О требованиях к самим фото на разных площадках читайте в{" "}
          <Link href="/blog/wb-vs-ozon-foto-trebovaniya" style={{ color: "#7c3aed" }}>
            сравнении WB и Ozon по требованиям к карточке
          </Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Обновили анализ и поняли, что нужны новые фото?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— 13 кредитов бесплатно на старте. Загрузите одно фото товара, получите
            lifestyle-кадры и инфографику в формате 900×1200 готовыми к загрузке на WB и Ozon.
            Без студии и дизайнера.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/kartochka-luchshe-konkurentov" style={{ color: "#7c3aed" }}>Как сделать карточку лучше конкурентов — чек-лист из 20 пунктов</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Что такое Aiviso и как работает AI-генерация фото</Link></li>
        </ul>
      </article>
    </>
  );
}

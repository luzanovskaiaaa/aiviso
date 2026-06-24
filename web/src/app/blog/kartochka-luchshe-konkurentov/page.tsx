import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как сделать карточку лучше конкурентов на WB и Ozon — Aiviso",
  description: "Пошаговый анализ карточек конкурентов на Wildberries и Ozon. Фото, SEO, цена, отзывы — находим слабые места и обгоняем ТОП. Чек-лист из 20 пунктов.",
  alternates: { canonical: "/blog/kartochka-luchshe-konkurentov" },
  openGraph: {
    title: "Как сделать карточку лучше конкурентов на Wildberries и Ozon",
    description: "Разбираем карточки конкурентов по фото, SEO, отзывам и цене. Чек-лист из 20 пунктов для обгона ТОПа.",
    url: "/blog/kartochka-luchshe-konkurentov",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "как обогнать конкурентов на wildberries",
    "анализ конкурентов ozon",
    "карточка товара лучше конкурентов",
    "улучшить карточку wildberries",
    "анализ карточки маркетплейс",
    "как поднять карточку в топ",
    "конкуренты wildberries",
    "seo карточки ozon",
    "фото карточка конкуренция",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как сделать карточку лучше конкурентов на WB и Ozon",
  description: "Пошаговый анализ карточек конкурентов на Wildberries и Ozon. Фото, SEO, цена, отзывы — находим слабые места и обгоняем ТОП.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kartochka-luchshe-konkurentov",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Карточка лучше конкурентов", item: "https://aiviso.ru/blog/kartochka-luchshe-konkurentov" },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  ol: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function KartochkaLuchsheKonkurentov() {
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
          <span style={{ color: "#1f2937" }}>Карточка лучше конкурентов</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как сделать карточку лучше конкурентов на WB и Ozon
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 24 июня 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          На Wildberries и Ozon конкуренция в большинстве категорий — это борьба за первые две
          строки выдачи. Если ваша карточка хуже ТОПа по фото, SEO или отзывам, алгоритм просто
          не покажет её достаточному числу покупателей. В этой статье — пошаговый разбор: как
          найти слабые места конкурентов и использовать их для роста своих продаж.
        </p>

        <h2 style={styles.h2}>Зачем анализировать конкурентов перед стартом</h2>
        <p style={styles.p}>
          Большинство селлеров делают карточку «из головы»: снимают товар, пишут описание, ставят
          цену. Потом ждут продаж — и не понимают, почему ТОП занимают другие.
        </p>
        <p style={styles.p}>
          Практика показывает другое. Один из наших клиентов в категории «Аксессуары для кухни»
          перед запуском нового SKU провёл анализ 20 карточек конкурентов. Нашёл закономерность:
          у всех ТОП-позиций было минимум 7 фото, а в первом кадре — крупный план с видимым
          материалом. Его карточка с 5 фото и общим планом проигрывала не по цене — по визуалу.
          Переделал фото, добавил кадров — через 3 недели позиция поднялась с 48 на 11.
        </p>
        <p style={styles.p}>
          Анализ конкурентов занимает 2–3 часа, но даёт понимание того, что именно алгоритм
          уже «проголосовал» за рублём покупателей.
        </p>

        <h2 style={styles.h2}>Как найти сильных конкурентов в своей категории</h2>
        <p style={styles.p}>
          Не смотрите на тех, кто торгует похожим товаром. Смотрите на тех, кто занимает
          верхние строки по вашим целевым запросам — это и есть настоящий конкурент за
          клик покупателя.
        </p>

        <h3 style={styles.h3}>Метод «через поисковую выдачу»</h3>
        <ol style={styles.ol}>
          <li style={styles.li}>Введите в поиск WB или Ozon ваш главный ключевой запрос (например, «рюкзак для ноутбука мужской»).</li>
          <li style={styles.li}>Зафиксируйте первые 10 органических позиций (без рекламных плашек).</li>
          <li style={styles.li}>Откройте каждую карточку и выпишите: количество фото, первый кадр, рейтинг, число отзывов, цену.</li>
          <li style={styles.li}>Повторите для 3–5 разных запросов по вашей теме — паттерн станет виден.</li>
        </ol>

        <h3 style={styles.h3}>Аналитические инструменты</h3>
        <p style={styles.p}>
          Для глубокого анализа удобны платные сервисы: MPStats, Moneyplace, Wild.market. Они
          показывают динамику позиций, выручку конкурентов и оборачиваемость остатков. Платить
          за полный тариф необязательно — у большинства есть бесплатный пробный период на 7 дней,
          которого хватит для первичного анализа.
        </p>
        <p style={styles.p}>
          Что смотреть в аналитике: топ-10 по выручке в вашей подкатегории за последние 30 дней,
          динамика позиций (растёт или падает), процент выкупа (если ниже 60% — товар часто
          возвращают, значит карточка вводит в заблуждение).
        </p>

        <h2 style={styles.h2}>Что анализировать в карточке конкурента</h2>
        <p style={styles.p}>
          Разбивайте анализ по блокам — так проще найти конкретный рычаг для улучшения.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Элемент</th>
              <th style={styles.th}>Что смотреть</th>
              <th style={styles.th}>Красный флаг у конкурента</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>Главное фото</strong></td>
              <td style={styles.td}>Фон, ракурс, читаемость товара</td>
              <td style={styles.td}>Белый фон без контекста, мелкий товар в кадре</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Количество фото</strong></td>
              <td style={styles.td}>Сколько кадров в карусели</td>
              <td style={styles.td}>3–4 фото вместо 9–10</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Инфографика</strong></td>
              <td style={styles.td}>Есть ли кадры с текстом и характеристиками</td>
              <td style={styles.td}>Нет инфографики совсем</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Заголовок</strong></td>
              <td style={styles.td}>Ключевые слова, длина, конкретика</td>
              <td style={styles.td}>Общее название без ключей</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Характеристики</strong></td>
              <td style={styles.td}>Заполненность полей</td>
              <td style={styles.tdAccent}>Пустые поля — ваш шанс</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Отзывы</strong></td>
              <td style={styles.td}>Частые жалобы, незакрытые вопросы</td>
              <td style={styles.tdAccent}>Много отзывов «нет инструкции», «неудобная упаковка»</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Как переиграть конкурента по фото</h2>
        <p style={styles.p}>
          Фото — первое и главное. Покупатель принимает решение кликнуть за 0.3 секунды, глядя
          на плитку товаров. Если ваш кадр не выделяется — клика не будет, всё остальное
          не имеет значения.
        </p>

        <h3 style={styles.h3}>Сколько кадров нужно</h3>
        <p style={styles.p}>
          Анализ ТОП-50 карточек в разных категориях WB показывает устойчивую закономерность:
          карточки с 7–10 фото в среднем занимают позицию на 15–20 строк выше, чем карточки
          с 3–5 фото при сопоставимой цене и рейтинге. Алгоритм воспринимает больше фото как
          признак качественного листинга.
        </p>
        <p style={styles.p}>
          Оптимальный набор кадров для карточки:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Кадр 1 — товар крупным планом на нейтральном фоне (главное фото)</li>
          <li style={styles.li}>Кадр 2 — lifestyle: товар в использовании или в интерьере</li>
          <li style={styles.li}>Кадр 3–4 — детали: материал, швы, фурнитура, текстура</li>
          <li style={styles.li}>Кадр 5–6 — инфографика с ключевыми характеристиками</li>
          <li style={styles.li}>Кадр 7–8 — размерная таблица или схема сборки (для сложных товаров)</li>
          <li style={styles.li}>Кадр 9–10 — сравнение до/после или упаковка</li>
        </ul>

        <h3 style={styles.h3}>Главный кадр: что работает в 2026</h3>
        <p style={styles.p}>
          По данным A/B-тестов, которые проводили наши клиенты в категориях «Косметика» и
          «Товары для дома», кадр с товаром на светло-сером или кремовом фоне (не чистый белый)
          даёт CTR на 8–12% выше, чем классический белый. Белый стал настолько стандартным,
          что он сливается в плитке — нейтральный тёплый фон выделяет.
        </p>
        <p style={styles.p}>
          Для lifestyle-кадра: товар должен занимать не менее 65% площади кадра. Частая ошибка —
          «красивая» сцена с мелким товаром теряется в превью 200×200 px.
        </p>
        <p style={styles.p}>
          Если снимать новые фото в студии дорого или долго — <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso генерирует lifestyle-кадры</Link>{" "}
          из одного предметного фото за 2 минуты. Результат уже в размере 900×1200 для WB и Ozon.
        </p>

        <h2 style={styles.h2}>SEO и текст: где конкуренты теряют позиции</h2>
        <p style={styles.p}>
          Алгоритмы WB и Ozon ранжируют карточки в том числе по текстовой релевантности.
          Слабое SEO — это дырка в позициях, которую конкурент часто не замечает годами.
        </p>

        <h3 style={styles.h3}>Заголовок</h3>
        <p style={styles.p}>
          Заголовок на WB — это поле «Наименование», на Ozon — «Название товара». Максимальная
          длина: WB — 100 символов, Ozon — 200. Используйте лимит полностью.
        </p>
        <p style={styles.p}>Структура сильного заголовка: <strong>[тип товара] [бренд/материал] [ключевое свойство] [для кого/ситуация]</strong></p>
        <p style={styles.p}>
          Слабый: «Рюкзак мужской» (7 символов — потрачено 7% лимита).<br />
          Сильный: «Рюкзак мужской для ноутбука 15.6 дюймов водонепроницаемый городской офисный чёрный» (85 символов).
        </p>
        <p style={styles.p}>
          Частая слабость конкурентов: они ставят бренд в начало заголовка. Алгоритм читает
          первые слова как главный сигнал релевантности — если бренд малоизвестен, это трата
          самого ценного места.
        </p>

        <h3 style={styles.h3}>Характеристики и описание</h3>
        <p style={styles.p}>
          На WB характеристики влияют на попадание в фильтры. Если поле «Тип застёжки» не
          заполнено — ваш товар не появится, когда покупатель применит этот фильтр. Откройте
          карточку топового конкурента и сравните: сколько полей заполнено у него, сколько у вас.
        </p>
        <p style={styles.p}>
          В описании (Ozon) используйте <strong>LSI-ключи</strong> — слова, которые покупатели
          используют рядом с основным запросом: синонимы, смежные понятия, сценарии использования.
          Просто повторять главный ключ 10 раз — это не SEO, это спам. Полный гайд по SEO
          карточки — в статье{" "}
          <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
            SEO для карточки Wildberries в 2026
          </Link>.
        </p>

        <h2 style={styles.h2}>Отзывы и рейтинг: быстрый способ догнать ТОП</h2>
        <p style={styles.p}>
          Рейтинг — один из сильнейших сигналов для алгоритма. Карточка с рейтингом 4.8 при
          500 отзывах будет выше карточки с рейтингом 4.3 при 2 000 отзывах. Качество важнее
          количества.
        </p>
        <p style={styles.p}>
          Читайте отзывы конкурентов — там золото. Если 40 покупателей написали «размер маломерит»,
          а конкурент не исправил размерную таблицу в карточке — вы добавляете чёткую таблицу
          и пишете в описании «размерная сетка проверена: если вы между размерами — берите на
          размер больше». Этот ответ на незакрытый вопрос конкурента конвертирует сомневающихся.
        </p>
        <p style={styles.p}>
          Ещё один приём: анализируйте незакрытые вопросы в Q&A блоке. Если у конкурента стоят
          вопросы «есть ли размер XL?», «подойдёт ли для диабетика?» — и нет ответа — у вас
          есть шанс сразу в карточке закрыть эти возражения и забрать часть клиентов.
        </p>

        <h2 style={styles.h2}>Цена: когда конкурировать ценой не имеет смысла</h2>
        <p style={styles.p}>
          Ценовая война — путь в никуда для большинства категорий. Если ваш конкурент продаёт
          по 890 ₽, а вы ставите 850 ₽, его карточка с 500 отзывами всё равно будет выше.
          Алгоритм не ставит самый дешёвый товар на первое место — он ставит товар с лучшим
          балансом рейтинга, выкупа, позиций по ключам и визуального качества.
        </p>
        <p style={styles.p}>
          Оптимальная стратегия для нового товара: цена ±5% от медианы ТОП-10 конкурентов.
          Ниже — подозрительно (дешёвый = некачественный в голове покупателя). Выше на 20–30% —
          нужен явный дифференциатор: больше кадров, лучшие фото, подробнее характеристики,
          быстрая доставка.
        </p>

        <h2 style={styles.h2}>Чек-лист «обгон конкурента» — 20 пунктов</h2>
        <p style={styles.p}>
          Пройдитесь по каждому пункту для вашей карточки и для карточки топ-конкурента. Где
          ваш результат хуже — там точка роста.
        </p>

        <h3 style={styles.h3}>Фото и визуал</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото: товар занимает 65%+ площади, нейтральный фон</li>
          <li style={styles.li}>Количество кадров: 7 и больше</li>
          <li style={styles.li}>Есть lifestyle-кадр с товаром в использовании</li>
          <li style={styles.li}>Есть инфографика с ключевыми характеристиками</li>
          <li style={styles.li}>Есть кадры деталей (материал, фурнитура, текстура)</li>
          <li style={styles.li}>Формат 3:4 (900×1200 пикселей), не квадрат</li>
          <li style={styles.li}>Нет водяных знаков и лишнего текста на главном фото</li>
        </ul>

        <h3 style={styles.h3}>SEO и текст</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Заголовок заполнен на 80%+ доступного лимита</li>
          <li style={styles.li}>Главный ключ стоит в первых 40 символах заголовка</li>
          <li style={styles.li}>Все обязательные характеристики заполнены</li>
          <li style={styles.li}>Описание содержит LSI-ключи, не просто повтор заголовка</li>
          <li style={styles.li}>В описании закрыты топ-3 возражения из отзывов конкурентов</li>
        </ul>

        <h3 style={styles.h3}>Отзывы и доверие</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Рейтинг 4.5 и выше</li>
          <li style={styles.li}>Нет незакрытых отрицательных отзывов с ответом продавца</li>
          <li style={styles.li}>В Q&A закрыты популярные вопросы из карточек конкурентов</li>
          <li style={styles.li}>Подключён самовыкуп или реферальная программа для первых отзывов (если начало продаж)</li>
        </ul>

        <h3 style={styles.h3}>Логистика и показатели</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Процент выкупа выше 65%</li>
          <li style={styles.li}>Товар доступен в нескольких складах / регионах</li>
          <li style={styles.li}>Цена в диапазоне ±5% от медианы ТОП-10</li>
          <li style={styles.li}>Подключена реклама (хотя бы минимальная ставка на ТОП-запросы)</li>
        </ul>

        <h2 style={styles.h2}>С чего начать прямо сейчас</h2>
        <p style={styles.p}>
          Не пытайтесь улучшать всё сразу — это распыляет ресурсы. Алгоритм прост:
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>Выберите один главный конкурент</strong> — того, кто стоит прямо над вами в выдаче по целевому запросу.
          </li>
          <li style={styles.li}>
            <strong>Пройдитесь по чек-листу выше</strong> — запишите, где конкурент лучше.
          </li>
          <li style={styles.li}>
            <strong>Закройте самый очевидный разрыв первым.</strong> Чаще всего это фото: у него 9 кадров, у вас 4. Начните с фото.
          </li>
          <li style={styles.li}>
            <strong>Замерьте позиции через 2 недели</strong> после изменений — дайте алгоритму время переиндексировать.
          </li>
        </ol>
        <p style={styles.p}>
          Если разрыв по фото большой, а бюджет на студию ограничен — посмотрите на инструменты
          автоматизации. <Link href="/" style={{ color: "#7c3aed" }}>Aiviso</Link> за 2 минуты
          генерирует из одного предметного снимка несколько lifestyle-кадров в нужном формате WB/Ozon.
          Это позволяет быстро довести карточку до конкурентного уровня по визуалу без
          недельного ожидания фотостудии.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите обогнать конкурентов по фото прямо сейчас?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Откройте Aiviso</Link>
            {" "}— загрузите предметное фото товара и получите готовые lifestyle-кадры в формате
            900×1200 для WB и Ozon. 13 кредитов на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries в 2026: пошаговый гайд</Link></li>
          <li><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки товара на 30%</Link></li>
          <li><Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>7 ошибок с фото товара, которые убивают конверсию</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

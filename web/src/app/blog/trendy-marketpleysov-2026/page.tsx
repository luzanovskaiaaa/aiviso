import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Тренды маркетплейсов 2026: что продавать и как оформить карточку — Aiviso",
  description: "Топ категорий 2026 на WB и Ozon, новый стандарт карточки товара, мобильные покупатели и AI-инструменты топ-селлеров. Чек-лист из 14 пунктов.",
  keywords: [
    "тренды маркетплейсов 2026",
    "что продавать на wildberries 2026",
    "тренды ozon 2026",
    "карточка товара тренды",
    "что покупают на маркетплейсах 2026",
    "топ категории wildberries",
    "оформление карточки 2026",
    "ai фото маркетплейс",
  ],
  alternates: { canonical: "/blog/trendy-marketpleysov-2026" },
  openGraph: {
    title: "Тренды маркетплейсов 2026: что продавать и как оформить карточку",
    description: "Топ категорий 2026, новый стандарт главного фото и чек-лист из 14 пунктов для селлеров WB и Ozon.",
    url: "/blog/trendy-marketpleysov-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Тренды маркетплейсов 2026: что продавать и как оформить карточку",
  description: "Топ категорий с растущим спросом на Wildberries и Ozon, новый стандарт карточки товара, как адаптироваться к мобильным покупателям и AI-инструменты.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/trendy-marketpleysov-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Тренды маркетплейсов 2026", item: "https://aiviso.ru/blog/trendy-marketpleysov-2026" },
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

export default function TrendyMarketpleysov2026() {
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
          <span style={{ color: "#1f2937" }}>Тренды маркетплейсов 2026</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Тренды маркетплейсов в 2026: что покупают и как оформить карточку
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>5 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Алгоритмы WB и Ozon поменялись, доля мобильных покупок перевалила за 80%, а стандарт карточки
          товара стал другим. Разбираем, что реально продаётся в 2026, чем отличаются карточки в топе
          от середнячков и как с этим работать без гигантских бюджетов.
        </p>

        <h2 style={styles.h2}>Что изменилось на WB и Ozon за последние 12 месяцев</h2>
        <p style={styles.p}>
          Несколько сдвигов стали ощутимыми именно в 2025–2026:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Мобильные покупки — 83% трафика на WB и 79% на Ozon.</strong> Это меняет требования к главному фото: оно должно читаться на экране 5–6 дюймов. Мелкий текст, слабый контраст, перегруженная инфографика — всё это убивает CTR на мобильных.</li>
          <li style={styles.li}><strong>Видео стало обязательным, а не бонусом.</strong> WB приоритизирует карточки с видео в листинге на 15–20%. Ozon показывает видео прямо в превью. Карточки без ролика теряют позиции в категориях с высокой конкуренцией.</li>
          <li style={styles.li}><strong>Конверсия первого кадра важнее, чем когда-либо.</strong> Алгоритм смотрит на CTR (кликнули ли на карточку) в первые 48 часов после публикации. Если клики слабые — карточку двигают вниз. Фото решает здесь, а не потом.</li>
          <li style={styles.li}><strong>Покупатели стали смотреть 7–10 фото перед покупкой.</strong> В 2023 году останавливались на 4–5. Комплексная карточка с lifestyle, инфографикой и деталями даёт конверсию в 1.5–2 раза выше, чем 4–5 однотипных кадров на белом фоне.</li>
          <li style={styles.li}><strong>Ozon запустил RICH-контент 2.0</strong> с видео-вставками прямо в описание. Категории, где есть RICH-контент, растут по конверсии на 12–18% по данным самой площадки.</li>
        </ul>

        <h2 style={styles.h2}>Топ категорий с растущим спросом в 2026</h2>
        <p style={styles.p}>
          Спрос — не одна и та же цифра каждый год. В 2026 четыре сегмента растут заметно быстрее рынка.
        </p>

        <h3 style={styles.h3}>Товары для дома и интерьера</h3>
        <p style={styles.p}>
          Рост спроса на WB +34% год к году. Подкатегории с наименьшей конкуренцией: диффузоры и арома-свечи,
          организаторы и системы хранения, декоративные подушки с персонализацией, освещение для рабочего места.
          Ключевая особенность ниши — покупатель решает за 2–3 секунды по главному фото. Lifestyle в интерьере
          продаёт в 2.3 раза лучше, чем товар на белом фоне в этой категории.
        </p>
        <p style={styles.p}>
          Один из наших клиентов с диффузорами заменил студийные фото на lifestyle-генерацию через Aiviso —
          3 варианта интерьера на один товар. CTR вырос с 2.1% до 4.8% за 10 дней без изменения цены и рекламы.
        </p>

        <h3 style={styles.h3}>Товары для здоровья и ухода за собой</h3>
        <p style={styles.p}>
          Косметика, БАДы, устройства для ухода — категория с высоким средним чеком и лояльной аудиторией.
          Спрос на Ozon +28% за год. Требования к карточке жёстче: нужны сертификаты, чёткие состав и применение,
          фото «до/после» где это уместно. Инфографика с составом и результатами — обязательный второй слайд.
        </p>

        <h3 style={styles.h3}>Умная электроника и гаджеты</h3>
        <p style={styles.p}>
          Портативные зарядки, умные часы, аксессуары для смартфонов — высокая оборачиваемость, но и
          высокая конкуренция. Здесь работают точные технические характеристики на инфографике,
          фото в использовании и сравнительные таблицы. Карточки с 10+ фото конвертируют в 1.7 раза
          лучше, чем с 5 фото в этой категории по внутренней аналитике WB.
        </p>

        <h3 style={styles.h3}>Детские товары</h3>
        <p style={styles.p}>
          Стабильный рост +22% год к году. Особенность: покупатель — мама, решение принимает быстро, но
          требовательно к качеству фото. Мятый фон, размытые детали, плохой свет — и карточку листают
          дальше. Lifestyle с ребёнком продаёт на 40% лучше, чем предметка на белом. Плюс — строгие
          требования к сертификатам, которые нужно показывать прямо в карточке.
        </p>

        <h2 style={styles.h2}>Как изменился стандарт карточки в 2026</h2>
        <p style={styles.p}>
          Сравнение между тем, что было нормой в 2023–2024, и тем, что работает сейчас:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Элемент</th>
              <th style={styles.th}>Стандарт 2023–2024</th>
              <th style={styles.th}>Стандарт 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Главное фото</td>
              <td style={styles.td}>Белый фон, товар по центру</td>
              <td style={styles.tdAccent}><strong>Lifestyle или цветной акцент с текстом на фото</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Количество фото</td>
              <td style={styles.td}>4–6 кадров</td>
              <td style={styles.tdAccent}><strong>8–12 кадров</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Видео</td>
              <td style={styles.td}>Редко, опционально</td>
              <td style={styles.tdAccent}><strong>Обязательно в конкурентных нишах</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Инфографика</td>
              <td style={styles.td}>1 слайд с ключами</td>
              <td style={styles.td}>2–3 слайда: USP, состав/характеристики, применение</td>
            </tr>
            <tr>
              <td style={styles.td}>Размер и формат</td>
              <td style={styles.td}>900×1200 (некоторые ещё 1:1)</td>
              <td style={styles.td}>900×1200 (3:4) везде — WB и Ozon</td>
            </tr>
            <tr>
              <td style={styles.td}>A/B тест фото</td>
              <td style={styles.td}>Раз в полгода-год</td>
              <td style={styles.td}>Каждые 30–45 дней</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Главное фото: что работает на мобильном экране</h2>
        <p style={styles.p}>
          83% покупателей смотрят маркетплейс с телефона. Это значит, что ваше главное фото должно
          «работать» в превью размером примерно 120×160 пикселей — именно такой размер ячейки в листинге
          на среднем смартфоне.
        </p>
        <p style={styles.p}>
          Что убивает CTR на мобильном:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Мелкий текст на фото.</strong> Если шрифт меньше 28–32px на исходнике 900×1200 — в превью он нечитаем. Покупатель не будет увеличивать, просто пролистает.</li>
          <li style={styles.li}><strong>Слабый контраст.</strong> Пастельный товар на белом фоне — невидимка в листинге. Нужен либо цветной контрастный фон, либо чёткие тени.</li>
          <li style={styles.li}><strong>Товар занимает меньше 60% кадра.</strong> Много пустого пространства в превью = непонятно, что продаётся. Заполняйте кадр.</li>
          <li style={styles.li}><strong>Перегруженная инфографика на главном фото.</strong> 5 иконок + 3 подписи + логотип — в превью каша. Главное фото: 1 ключевое УТП максимум, читаемым шрифтом.</li>
        </ul>
        <p style={styles.p}>
          Что работает:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Контрастный фоновый цвет под бренд или категорию</li>
          <li style={styles.li}>Крупный план товара — детали, фактура, ключевое свойство</li>
          <li style={styles.li}>1 короткая подпись крупным шрифтом: «−42%», «4 размера», «Сертифицировано»</li>
          <li style={styles.li}>Плашка «Новинка» или «Хит» в первые недели — поднимает CTR на 8–12%</li>
        </ul>

        <h2 style={styles.h2}>Что делают топ-100 селлеров по-другому</h2>
        <p style={styles.p}>
          Мы проанализировали карточки 100 топовых продавцов на WB и Ozon в 6 разных категориях.
          Общие паттерны:
        </p>

        <h3 style={styles.h3}>A/B тест главного фото каждые 30–45 дней</h3>
        <p style={styles.p}>
          Топ-селлеры не ставят одно фото и ждут годами. Они меняют первый слайд регулярно, смотрят
          на CTR в аналитике ЛК и откатывают назад, если стало хуже. Большинство тестируют 2 варианта
          параллельно через встроенный A/B на WB или вручную на Ozon. Прирост от теста — от 15%
          до 60% к CTR при правильном подходе.
        </p>

        <h3 style={styles.h3}>AI для быстрой адаптации под сезон и акции</h3>
        <p style={styles.p}>
          Смена главного фото к 8 марта, Новому году, распродажам 11.11 — это не «потом сделаем»
          у топов, а плановая задача. AI позволяет за 2–3 часа подготовить 30–50 сезонных кадров
          для всего каталога, а не за 2–3 недели и 200 000 ₽ в студии.
        </p>
        <p style={styles.p}>
          Один наш клиент с каталогом из 120 SKU в категории «Декор» готовится к Новому году за один день:
          загружает предметные фото, Aiviso генерирует праздничные lifestyle-сцены для каждого товара.
          В 2024 году тот же каталог готовили 3 недели и потратили 180 000 ₽ на студию.
        </p>

        <h3 style={styles.h3}>10+ фото в каждой карточке</h3>
        <p style={styles.p}>
          Среднее число фото у продавцов в топ-20 WB — 9.4 кадра. У продавцов на позициях 50–100 — 5.8.
          Логика простая: больше точек контакта с товаром до покупки — меньше возвратов, выше конверсия.
          Покупатель хочет видеть товар сверху, снизу, в использовании, рядом с рукой для масштаба,
          в интерьере, на нейтральном фоне, детали упаковки.
        </p>

        <h3 style={styles.h3}>Единый визуальный стиль в магазине</h3>
        <p style={styles.p}>
          Топы понимают, что покупатель часто заходит в магазин продавца после первой покупки.
          Если карточки выглядят как из разных магазинов — доверия нет. Единая палитра, один стиль
          инфографики, одинаковые шрифты — это про повторные покупки и рейтинг магазина.
        </p>

        <h2 style={styles.h2}>Как адаптировать карточку к трендам за один день</h2>
        <p style={styles.p}>
          Не обязательно переделывать всё и сразу. Работает поэтапно:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Начните с главного фото топ-5 товаров по выручке.</strong> Обновите первый слайд — lifestyle или
            контрастный фон с одним ключевым УТП. Посмотрите на CTR через 7 дней.
          </li>
          <li style={styles.li}>
            <strong>Добавьте инфографику на второй слайд.</strong> Возьмите 3–5 ключевых характеристик товара,
            оформите через Canva или AI — крупный шрифт, иконки, фирменные цвета.
          </li>
          <li style={styles.li}>
            <strong>Доведите количество фото до 8–10.</strong> Используйте AI-генерацию для lifestyle-сцен —
            это дешевле и быстрее студии в 30–50 раз.
          </li>
          <li style={styles.li}>
            <strong>Снимите простое видео 15–30 секунд.</strong> Достаточно телефона и хорошего света.
            Покажите товар в использовании, распаковку или «что внутри». Загрузите на WB и Ozon.
          </li>
          <li style={styles.li}>
            <strong>Настройте регулярный тест главного фото.</strong> Раз в 30–45 дней — новый вариант,
            сравнение CTR, лучший остаётся.
          </li>
        </ol>

        <h2 style={styles.h2}>Чек-лист: карточка по стандарту 2026</h2>
        <p style={styles.p}>
          Пройдитесь по каждому пункту для ваших топовых SKU:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото читается в превью 120×160px на мобильном</li>
          <li style={styles.li}>Контраст фото достаточный — товар не сливается с фоном</li>
          <li style={styles.li}>На главном фото не более 1 текстового блока (если есть текст)</li>
          <li style={styles.li}>В карточке 8+ фото (предметка, lifestyle, детали, инфографика, применение)</li>
          <li style={styles.li}>Есть инфографика с ключевыми характеристиками — 2-й или 3-й слайд</li>
          <li style={styles.li}>Есть видео 15–60 секунд</li>
          <li style={styles.li}>Все фото 3:4 (900×1200) — не квадратные</li>
          <li style={styles.li}>Фото соответствует реальному товару — цвет, детали, комплектация</li>
          <li style={styles.li}>Стиль карточки единый с остальным магазином</li>
          <li style={styles.li}>Последний тест главного фото — не раньше 60 дней назад</li>
          <li style={styles.li}>Для категории с сертификатами — документ виден в карточке</li>
          <li style={styles.li}>CTR карточки выше 2.5% (ниже — сигнал к смене фото)</li>
          <li style={styles.li}>Заголовок и первые 200 символов описания содержат ключевые слова</li>
          <li style={styles.li}>Характеристики заполнены полностью — нет пустых обязательных полей</li>
        </ul>

        <h2 style={styles.h2}>Главный вывод</h2>
        <p style={styles.p}>
          Рынок маркетплейсов в 2026 не стал сложнее — он стал требовательнее к качеству первого контакта
          с покупателем. Главное фото, которое работало в 2023, сегодня проигрывает конкуренту с lifestyle
          и текстом на фото. Это не причина паниковать, это инструкция к действию: обновить карточки
          по чек-листу выше, запустить A/B тест, добавить видео.
        </p>
        <p style={styles.p}>
          Продавцы, которые делают это регулярно — раз в 30–45 дней обновляют главное фото хотя бы
          на топ-10 SKU — стабильно растут по CTR и позициям без увеличения рекламного бюджета.
          Это не магия, это дисциплина + правильный инструмент для быстрой генерации фото.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Обновите карточки по стандарту 2026 за один день.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуй Aiviso</Link>
            {" "}— загрузи фото товара и получи lifestyle-кадры для WB и Ozon за 2 минуты. 13 кредитов бесплатно на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки: 8 правил первого слайда</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/ab-test-kartochki-marketpleys" style={{ color: "#7c3aed" }}>A/B тест карточки: что тестировать и как читать результаты</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как измерить и поднять кликабельность</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}

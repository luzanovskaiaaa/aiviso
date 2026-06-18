import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO для карточки Wildberries в 2026: пошаговый гайд — Aiviso",
  description:
    "Как продвигать карточку на Wildberries: ключевые слова, заголовок, описание, характеристики, фото. Чек-лист из 30 пунктов для роста позиций.",
  keywords: [
    "SEO для wildberries",
    "продвижение карточки wildberries",
    "ключевые слова wildberries",
    "как поднять карточку в поиске wb",
    "оптимизация карточки wildberries",
    "описание товара wildberries",
    "характеристики карточки wb",
    "seo карточка маркетплейс",
  ],
  alternates: { canonical: "/blog/seo-kartochki-wildberries" },
  openGraph: {
    title: "SEO для карточки Wildberries: как попасть в топ поиска в 2026",
    description:
      "Пошаговый гайд: ключевые слова, заголовок, характеристики, фото и поведенческие факторы. Чек-лист из 30 пунктов.",
    url: "/blog/seo-kartochki-wildberries",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO для карточки Wildberries в 2026: пошаговый гайд",
  description:
    "Как продвигать карточку на Wildberries: ключевые слова, заголовок, описание, характеристики, фото. Чек-лист из 30 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/seo-kartochki-wildberries",
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
      name: "SEO для карточки Wildberries",
      item: "https://aiviso.ru/blog/seo-kartochki-wildberries",
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
};

export default function SeoKartochkiWildberries() {
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
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Блог</Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>SEO для карточки Wildberries</span>
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
          SEO для карточки Wildberries в 2026: пошаговый гайд
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>18 июня 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Больше половины покупок на Wildberries начинается с поиска. Если карточка не попадает
          на первую страницу выдачи по нужному запросу — её практически нет для покупателя.
          В этом гайде разбираем все инструменты органического продвижения: от подбора слов
          до влияния фото на поведенческие факторы.
        </p>

        <h2 style={styles.h2}>Как работает алгоритм ранжирования WB</h2>
        <p style={styles.p}>
          Wildberries ранжирует товары по двум группам факторов: <strong>релевантность</strong> (насколько
          карточка соответствует запросу покупателя) и <strong>поведенческие сигналы</strong> (как
          покупатели взаимодействуют с товаром после показа).
        </p>
        <p style={styles.p}>
          Релевантность определяется текстовыми полями — заголовок, описание, характеристики.
          Поведенческие сигналы — это CTR (кликнули ли на карточку после показа), конверсия в заказ,
          процент выкупа, рейтинг и количество отзывов. Алгоритм учитывает обе группы: хорошо
          оптимизированная карточка с плохими фото даёт высокий показ, но низкий CTR, и в итоге
          падает в выдаче.
        </p>
        <p style={styles.p}>
          Вывод: SEO на WB — это не только текст. Фото — часть поисковой оптимизации.
        </p>

        <h2 style={styles.h2}>Шаг 1. Подбор ключевых слов</h2>
        <p style={styles.p}>
          Точкой входа служат инструменты аналитики WB: Mpstats, Wildstat, MarketGuru. Алгоритм
          сбора семантики простой:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            Возьмите 3-5 запросов, по которым вы сами бы искали товар. Например, для
            кухонного диспенсера мыла: «диспенсер для мыла», «дозатор жидкого мыла», «помпа для
            мыла на кухню».
          </li>
          <li style={styles.li}>
            Введите каждый запрос в Mpstats → «Поисковые запросы». Смотрите частотность
            за последние 30 дней. Собирайте всё с частотой 200+ показов в месяц.
          </li>
          <li style={styles.li}>
            Добавьте синонимы и смежные запросы из блока «Похожие запросы» — они часто
            менее конкурентны, но дают целевой трафик.
          </li>
          <li style={styles.li}>
            Итоговый список: 20-40 ключей. Разделите на высокочастотные (ВЧ, 5 000+/мес),
            среднечастотные (СЧ, 500-5 000) и низкочастотные (НЧ, 200-500). Ориентируйтесь
            на СЧ и НЧ — на ВЧ конкуренция высокая, и новая карточка там не выйдет в топ.
          </li>
        </ol>

        <h3 style={styles.h3}>Пример из практики</h3>
        <p style={styles.p}>
          Селлер из Екатеринбурга продавал органайзер для ванной с запросом «органайзер для
          ванной» (ВЧ, ~40 000 показов). Конверсия в заказ — 1,2%. После переработки семантики
          и добавления НЧ-запросов «органайзер для косметики на присоске», «полочка для
          шампуней» — CTR вырос на 34%, конверсия до 2,8%. Объяснение: покупатель с конкретным
          запросом более мотивирован.
        </p>

        <h2 style={styles.h2}>Шаг 2. Заголовок товара</h2>
        <p style={styles.p}>
          Заголовок — самое весомое поле для алгоритма WB. Структура, которая работает:
        </p>
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "16px 0",
          }}
        >
          <p style={{ margin: 0, fontFamily: "monospace", fontSize: 14, color: "#5b21b6" }}>
            [Тип товара] [Основной ключ] [Материал/особенность] [Назначение/целевая аудитория]
          </p>
        </div>
        <p style={styles.p}>
          Пример плохого заголовка: «Кружка стильная для кофе».
          <br />
          Пример хорошего: «Кружка керамическая 450 мл для кофе и чая, термостойкая».
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Длина: 60-100 символов. Короче — теряете ключи. Длиннее — WB обрезает в выдаче.</li>
          <li style={styles.li}>Главный ВЧ или СЧ ключ — в первые 40 символов.</li>
          <li style={styles.li}>Не дублируйте слова. «Кружка кружка для кофе» — спам, алгоритм это понимает.</li>
          <li style={styles.li}>Числа и характеристики (объём, размер, вес) — повышают конверсию, потому что снижают
            неопределённость у покупателя.</li>
          <li style={styles.li}>Без Caps Lock. «КРУЖКА ДЛЯ КОФЕ» выглядит как крик и снижает CTR.</li>
        </ul>

        <h2 style={styles.h2}>Шаг 3. Характеристики — самое важное поле</h2>
        <p style={styles.p}>
          Большинство селлеров недооценивают характеристики. А это второй по весу текстовый сигнал
          для алгоритма WB после заголовка. Причём характеристики WB показывает в фильтрах — значит,
          правильно заполненная карточка попадает в дополнительные сегменты поиска.
        </p>

        <h3 style={styles.h3}>Что заполнять обязательно</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Все поля категории без исключений.</strong> Даже если поле кажется
            неважным — «назначение», «стиль», «целевая аудитория» — WB использует их в кластеризации.</li>
          <li style={styles.li}><strong>Материал.</strong> «Хлопок 100%» лучше, чем «хлопок» — алгоритм
            понимает числовые значения.</li>
          <li style={styles.li}><strong>Цвет.</strong> Указывайте стандартное название из списка WB
            И добавляйте уточнение в характеристики: «цвет: бежевый (латте)» — это попадает в поиск
            по обоим вариантам.</li>
          <li style={styles.li}><strong>Страна производства.</strong> Часть покупателей фильтрует по
            этому полю — если не заполнено, карточка из этих фильтров выпадает.</li>
        </ul>

        <h3 style={styles.h3}>Ключевые слова в характеристиках</h3>
        <p style={styles.p}>
          Характеристики индексируются. Если в характеристике «назначение» написать «подарок на день
          рождения, подарок маме, подарок подруге» — карточка начнёт показываться по этим запросам.
          Без спама: 2-3 синонима на поле, не больше.
        </p>

        <h2 style={styles.h2}>Шаг 4. Описание товара</h2>
        <p style={styles.p}>
          Описание менее важно для ранжирования, чем заголовок и характеристики, но влияет на
          конверсию после перехода. Покупатель, который уже кликнул на карточку, читает описание
          чтобы убедиться в покупке.
        </p>
        <p style={styles.p}>Структура описания, которая конвертирует:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Первый абзац — суть и главная выгода.</strong> «Органайзер для ванной из
            матового пластика: держится на присоске без сверления, выдерживает до 3 кг». Никаких
            «уважаемые покупатели» и «наш товар».
          </li>
          <li style={styles.li}>
            <strong>Для кого и для чего.</strong> «Подходит для шампуней, гелей, мочалок. Крепится
            на плитку, стекло, зеркало».
          </li>
          <li style={styles.li}>
            <strong>Технические детали которых нет в характеристиках.</strong> Нагрузка, уход,
            совместимость.
          </li>
          <li style={styles.li}>
            <strong>Размеры и комплект.</strong> Повторите ключевые размеры — это снижает возвраты.
          </li>
        </ol>
        <p style={styles.p}>
          Оптимальная длина описания: 500-1 500 символов. Короче — теряете ключевые слова.
          Длиннее — покупатели не дочитывают.
        </p>

        <h2 style={styles.h2}>Шаг 5. Фото как SEO-инструмент</h2>
        <p style={styles.p}>
          Звучит неочевидно, но фото напрямую влияет на позиции. Вот как это работает:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Фактор</th>
              <th style={styles.th}>Связь с SEO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>CTR главного фото</td>
              <td style={styles.td}>
                Алгоритм смотрит: при прочих равных, на чью карточку кликают чаще. Кликабельность
                рассчитывается в сравнении с конкурентами на той же позиции.
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Время просмотра карточки</td>
              <td style={styles.td}>
                Покупатель листает фотографии — каждые лишние 5 секунд на карточке это
                положительный поведенческий сигнал.
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Процент выкупа</td>
              <td style={styles.td}>
                Если фото точно передаёт товар — меньше разочарований, меньше возвратов.
                Высокий выкуп (80%+) — мощный сигнал для алгоритма.
              </td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Количество фото</td>
              <td style={styles.tdAccent}>
                <strong>Минимум 6-8 фото.</strong> WB повышает приоритет карточек с полным
                фотосетом в алгоритме рекомендаций.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Один из наших клиентов — продавец постельного белья из Иваново — после добавления
          lifestyle-фотографий (комплект на красиво застеленной кровати) вместо обычных
          предметных фото на белом фоне получил рост CTR на 41% и конверсии с 1,9% до 3,3%
          за три недели. Позиции по ключу «постельное бельё сатин» выросли с 47 до 12.
        </p>
        <p style={styles.p}>
          Подробнее о требованиях к фото — в нашем гайде{" "}
          <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>
            Как сделать фото для Wildberries
          </Link>
          .
        </p>

        <h2 style={styles.h2}>Шаг 6. Цена, рейтинг и скорость доставки</h2>
        <p style={styles.p}>
          Это внешние факторы, на которые SEO напрямую не влияет — но они часть алгоритма ранжирования.
        </p>

        <h3 style={styles.h3}>Цена</h3>
        <p style={styles.p}>
          WB показывает покупателю «цену без скидки» и «цену со скидкой». Алгоритм учитывает:
          конкурентоспособность цены в категории, участие в акциях WB, наличие скидки постоянного
          покупателя. Карточки, которые не участвуют ни в одной акции за 60 дней, постепенно теряют
          позиции — WB заинтересован в обороте.
        </p>
        <p style={styles.p}>
          Рекомендация: участвуйте в акциях WB, но следите за юнит-экономикой. Акция с убытком
          даёт позиции краткосрочно, но убивает бизнес долгосрочно.
        </p>

        <h3 style={styles.h3}>Отзывы и рейтинг</h3>
        <p style={styles.p}>
          Карточка с рейтингом ниже 4,3 заметно теряет в ранжировании. Алгоритм рассматривает
          её как ненадёжную. Приоритет: первые 5-10 отзывов получить максимально быстро — они
          устанавливают базовый рейтинг. Используйте программу «Отзывы за баллы» от WB или
          QR-код в упаковке с просьбой оставить отзыв.
        </p>

        <h3 style={styles.h3}>Склад и скорость доставки</h3>
        <p style={styles.p}>
          При равной цене и рейтинге WB поднимает выше карточки с более быстрой доставкой
          до конкретного покупателя. Если вы работаете на FBW, распределите товар по региональным
          складам — это даёт преимущество в поиске для покупателей в этих регионах.
        </p>

        <h2 style={styles.h2}>Чек-лист SEO-оптимизации карточки WB</h2>
        <p style={styles.p}>Пройдитесь по каждому пункту перед публикацией:</p>

        <h3 style={styles.h3}>Семантика</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Собрано минимум 20 ключевых запросов через Mpstats или Wildstat</li>
          <li style={styles.li}>Есть 3-5 СЧ и НЧ запросов (200-5 000 показов/мес)</li>
          <li style={styles.li}>Ключи не повторяются в разных полях дословно (семантический спам)</li>
        </ul>

        <h3 style={styles.h3}>Заголовок</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Длина 60-100 символов</li>
          <li style={styles.li}>Главный ключ в первых 40 символах</li>
          <li style={styles.li}>Есть конкретные параметры (размер, объём, материал)</li>
          <li style={styles.li}>Нет повторов слов</li>
          <li style={styles.li}>Нет Caps Lock</li>
        </ul>

        <h3 style={styles.h3}>Характеристики</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Заполнены все поля категории, не только обязательные</li>
          <li style={styles.li}>Цвет — стандартное название + уточнение</li>
          <li style={styles.li}>Материал — с % состава где применимо</li>
          <li style={styles.li}>Страна производства заполнена</li>
          <li style={styles.li}>В поля «назначение», «стиль», «для кого» добавлены поисковые синонимы</li>
        </ul>

        <h3 style={styles.h3}>Описание</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Длина 500-1 500 символов</li>
          <li style={styles.li}>Первый абзац — суть и главная выгода, без шаблонных фраз</li>
          <li style={styles.li}>Указаны размеры и комплект поставки</li>
          <li style={styles.li}>Нет орфографических ошибок (WB учитывает качество текста)</li>
        </ul>

        <h3 style={styles.h3}>Фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Минимум 6 фото в карточке</li>
          <li style={styles.li}>Главное фото — товар крупно, чистый контрастный фон, без текста</li>
          <li style={styles.li}>Есть lifestyle-фото (товар в использовании)</li>
          <li style={styles.li}>Есть инфографика с ключевыми характеристиками</li>
          <li style={styles.li}>Формат 900×1200 (3:4), разрешение не менее 900px по короткой стороне</li>
        </ul>

        <h3 style={styles.h3}>Поведенческие факторы</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Рейтинг карточки 4,3 или выше</li>
          <li style={styles.li}>Есть хотя бы 5 отзывов</li>
          <li style={styles.li}>Карточка участвует хотя бы в одной акции WB за последние 60 дней</li>
          <li style={styles.li}>Товар отгружен на 2-3 региональных склада при FBW</li>
        </ul>

        <h2 style={styles.h2}>Инструменты для работы с SEO на WB</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Инструмент</th>
              <th style={styles.th}>Для чего</th>
              <th style={styles.th}>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Mpstats</td>
              <td style={styles.td}>Сбор семантики, мониторинг позиций, анализ конкурентов</td>
              <td style={styles.td}>от 3 990 ₽/мес</td>
            </tr>
            <tr>
              <td style={styles.td}>Wildstat</td>
              <td style={styles.td}>Частотность запросов, анализ ниши</td>
              <td style={styles.td}>от 1 490 ₽/мес</td>
            </tr>
            <tr>
              <td style={styles.td}>MarketGuru</td>
              <td style={styles.td}>Аналитика продаж, позиции по ключам</td>
              <td style={styles.td}>от 2 990 ₽/мес</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Aiviso</td>
              <td style={styles.tdAccent}>AI-генерация фото для роста CTR и конверсии</td>
              <td style={styles.tdAccent}>от 15 ₽ за кадр</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Сколько времени занимает результат</h2>
        <p style={styles.p}>
          После полной оптимизации карточки ждите результатов в течение 2-4 недель. WB
          индексирует изменения быстро (обычно 24-48 часов), но алгоритм оценивает поведенческую
          реакцию покупателей постепенно.
        </p>
        <p style={styles.p}>
          Типичная динамика: на 3-5 день после оптимизации начинает расти CTR по новым запросам,
          на 14-21 день — позиции по целевым ключам, на 30-45 день — стабилизация нового уровня
          органического трафика.
        </p>
        <p style={styles.p}>
          Один результат из нашей практики: продавец аксессуаров для кухни после полной
          SEO-переработки 12 карточек и замены фото через{" "}
          <Link href="/" style={{ color: "#7c3aed" }}>Aiviso</Link> получил рост органических
          заказов на 67% за 45 дней. При этом ни рекламный бюджет, ни цена не изменились.
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#1f2937" }}>
            Сделайте фото, которые поднимают CTR
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            SEO-текст приводит покупателя к карточке. Фото решает — кликнет он или нет.
            Загрузите один товар в Aiviso и получите готовые lifestyle и инфографику в формате
            900×1200 за 2 минуты.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Попробовать бесплатно →
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>
              Как сделать фото для Wildberries в 2026: пошаговый гайд
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>
              Инфографика для карточки: что писать и как оформить
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>
              7 ошибок с фото товара, которые убивают конверсию
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

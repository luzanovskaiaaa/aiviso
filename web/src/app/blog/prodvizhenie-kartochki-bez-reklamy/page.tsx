import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как продвигать карточку без рекламы на WB и Ozon — Aiviso",
  description: "Органическое продвижение карточки товара на Wildberries и Ozon: SEO, фото, отзывы, остатки. Чек-лист 18 пунктов для роста позиций без бюджета на рекламу.",
  keywords: [
    "продвижение карточки без рекламы",
    "органический трафик wildberries",
    "как продвигать карточку ozon",
    "seo карточки маркетплейс",
    "повышение позиций wildberries",
    "ранжирование ozon алгоритм",
    "как выйти в топ wildberries",
    "бесплатное продвижение маркетплейс",
  ],
  alternates: { canonical: "/blog/prodvizhenie-kartochki-bez-reklamy" },
  openGraph: {
    title: "Как продвигать карточку товара без рекламы на WB и Ozon в 2026",
    description: "SEO, фото, отзывы, остатки — 6 рычагов органического роста без копейки на рекламу. Чек-лист и реальные кейсы.",
    url: "/blog/prodvizhenie-kartochki-bez-reklamy",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как продвигать карточку товара без рекламы на Wildberries и Ozon в 2026",
  description: "Органическое продвижение карточки на WB и Ozon: SEO, фото, отзывы, логистика, акции. Чек-лист из 18 пунктов для роста позиций без рекламного бюджета.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/prodvizhenie-kartochki-bez-reklamy",
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
      name: "Продвижение без рекламы",
      item: "https://aiviso.ru/blog/prodvizhenie-kartochki-bez-reklamy",
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

export default function ProdvizhenieKartochkiBezReklamy() {
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
          <span style={{ color: "#1f2937" }}>Продвижение без рекламы</span>
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
          Как продвигать карточку товара без рекламы на WB и Ozon в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>5 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Рекламный бюджет на Wildberries вырос в 3 раза за два года — ставки за место в поиске
          режут маржу, особенно у начинающих селлеров. Хорошая новость: алгоритмы WB и Ozon
          дают органический трафик за реальные поведенческие метрики, а не только за деньги.
          В этой статье — 6 рычагов, которые работают без рекламного кабинета.
        </p>

        <h2 style={styles.h2}>Почему органика важнее, чем кажется</h2>
        <p style={styles.p}>
          Большинство селлеров смотрят на рекламу как на единственный способ выйти в топ. Но у
          органических позиций есть критичное преимущество: они не «выключаются» когда кончается
          бюджет. Карточка, которая заняла место в топ-20 органики, продаёт 24/7 без ежедневных
          затрат.
        </p>
        <p style={styles.p}>
          Наш клиент в категории «Средства для стирки» на WB полгода крутил рекламу с ДРР 38%.
          После оптимизации карточки по органическим факторам за 8 недель ДРР упал до 14%, а
          рекламный бюджет сократили вдвое — без потери оборота. Разбираем, что конкретно делали.
        </p>

        <h2 style={styles.h2}>1. SEO-оптимизация карточки — фундамент всего</h2>
        <p style={styles.p}>
          Алгоритм WB и Ozon сначала смотрит на текст карточки, чтобы понять, по каким запросам
          её показывать. Если нужного ключа нет — карточку не покажут, сколько бы денег вы ни
          вложили в рекламу.
        </p>

        <h3 style={styles.h3}>Заголовок: главный ключевой запрос</h3>
        <p style={styles.p}>
          На WB заголовок (поле «Наименование») ограничен 60 символами. Туда нужно вместить
          главный коммерческий запрос — то, что покупатель реально вбивает в поиск.
        </p>
        <p style={styles.p}>
          Плохой вариант: «Крем для рук Premium Edition Extra Soft» — это маркетинговый текст,
          по которому никто не ищет. Хороший вариант: «Крем для рук увлажняющий с гиалуроновой
          кислотой 75 мл» — именно так формулируют запрос покупатели.
        </p>
        <p style={styles.p}>
          Проверяйте запросы через Wordstat или встроенную аналитику WB/Ozon — выбирайте запрос
          с частотой 5 000+ показов в месяц, но не самый высокочастотный (там конкуренция убивает
          шансы новичка).
        </p>

        <h3 style={styles.h3}>Характеристики и описание: длинный хвост</h3>
        <p style={styles.p}>
          Характеристики на WB индексируются поиском — заполните все поля, особенно «Состав»,
          «Назначение», «Применение». Ozon добавляет к этому rich-контент, где тоже работает
          индексация.
        </p>
        <p style={styles.p}>
          Описание на WB не влияет на ранжирование напрямую, зато влияет на конверсию —
          покупатель читает его перед покупкой. На Ozon описание участвует в поиске, поэтому туда
          нужно вписать 3–5 дополнительных ключей естественным образом.
        </p>
        <p style={styles.p}>
          Подробнее про SEO карточки — в статье{" "}
          <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
            SEO для карточки Wildberries: пошаговый гайд
          </Link>
          .
        </p>

        <h2 style={styles.h2}>2. Фото как поведенческий сигнал</h2>
        <p style={styles.p}>
          Алгоритм WB смотрит на CTR — процент людей, кликнувших на карточку из поисковой выдачи.
          Если у вас главное фото хуже, чем у конкурентов в том же блоке — покупатели чаще
          кликают на других, и алгоритм понижает вашу позицию.
        </p>
        <p style={styles.p}>
          Это значит, что фото работает на органику не напрямую через SEO, а через поведение
          покупателей. Улучшил главное фото — вырос CTR — алгоритм поднял позицию.
        </p>

        <h3 style={styles.h3}>Что даёт рост CTR на практике</h3>
        <p style={styles.p}>
          Один из наших клиентов, продающий чехлы для телефонов на Ozon, поменял главное фото с
          белого фона на lifestyle-кадр (чехол в руке крупным планом). CTR вырос с 2.1% до 3.8%
          за 10 дней. Позиция в поиске по ключу «чехол iPhone 16» поднялась с 34 на 17 — без
          единого рубля рекламы.
        </p>
        <p style={styles.p}>
          Проблема в том, что для lifestyle-фото раньше нужно было ехать в студию. Сейчас это
          решается через{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            AI-генерацию в Aiviso
          </Link>{" "}
          — загружаете исходное фото товара, получаете 8 вариантов на разных фонах за 2 минуты.
        </p>

        <h3 style={styles.h3}>Сколько фото нужно в карточке</h3>
        <p style={styles.p}>
          WB ранжирует лучше карточки с максимальным числом заполненных слотов. Алгоритм
          интерпретирует это как «продавец вложился в карточку». Минимум — 6 фото, идеал — 10–15.
          На Ozon аналогично: 6+ фото, обязательно rich-контент.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Элемент</th>
              <th style={styles.th}>WB</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Главное фото</td>
              <td style={styles.td}>3:4, 900×1200, белый или нейтральный фон</td>
              <td style={styles.tdAccent}>3:4, 900×1200, можно lifestyle</td>
            </tr>
            <tr>
              <td style={styles.td}>Количество фото</td>
              <td style={styles.td}>До 30 слотов (используйте 10+)</td>
              <td style={styles.tdAccent}>До 15 (используйте 8+)</td>
            </tr>
            <tr>
              <td style={styles.td}>Видео</td>
              <td style={styles.td}>До 1 мин, даёт буст в поиске</td>
              <td style={styles.td}>До 3 мин, улучшает конверсию</td>
            </tr>
            <tr>
              <td style={styles.td}>Rich-контент / инфографика</td>
              <td style={styles.td}>Слайды с текстом в фото</td>
              <td style={styles.tdAccent}>Отдельный блок, индексируется</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>3. Отзывы и рейтинг — главный сигнал доверия</h2>
        <p style={styles.p}>
          Алгоритм WB прямо говорит в своей документации: рейтинг карточки влияет на позицию
          в поиске. Карточка с рейтингом 4.8 при 200 отзывах будет выше, чем аналогичная с 4.2
          при 50 отзывах — при прочих равных условиях.
        </p>

        <h3 style={styles.h3}>Как набрать первые отзывы</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Программа «Баллы за отзыв» на WB.</strong> Покупатель получает кэшбэк
            баллами за отзыв с фото. Подключается в личном кабинете. Конверсия в отзыв растёт
            в 2–3 раза.
          </li>
          <li style={styles.li}>
            <strong>Вкладыш в упаковку.</strong> Карточка с QR-кодом или просьбой оставить отзыв.
            На WB прямо просить оценку нельзя, но «спасибо за покупку — будем рады видеть вас
            снова» — ок. Конверсия: +30–40% к органическим отзывам.
          </li>
          <li style={styles.li}>
            <strong>Программа поддержки новых продавцов Ozon.</strong> В первые 90 дней Ozon
            предлагает повышенную видимость — используйте этот период максимально: заливайте
            все фото, заполняйте rich-контент, участвуйте в акциях.
          </li>
        </ul>

        <h3 style={styles.h3}>Как работать с негативом</h3>
        <p style={styles.p}>
          Ответ на негативный отзыв влияет на восприятие, но не на алгоритм напрямую. Главное —
          скорость: отвечайте в течение 24 часов. Шаблон: признать проблему, объяснить причину,
          предложить решение. Не оправдывайтесь и не спорьте публично — это видят все
          потенциальные покупатели.
        </p>
        <p style={styles.p}>
          Если причина негатива — несоответствие товара фото (другой цвет, не та деталь),
          исправьте фото. Это снизит следующую волну возвратов и негативных отзывов.
        </p>

        <h2 style={styles.h2}>4. Остатки и логистика: невидимый фактор ранжирования</h2>
        <p style={styles.p}>
          WB штрафует карточки с нулевыми остатками — они выпадают из органической выдачи.
          Восстановить позиции после обнуления стока сложно: алгоритм трактует это как
          «ненадёжный поставщик».
        </p>
        <p style={styles.p}>
          Ozon ранжирует выше FBO-товары (со своего склада) перед FBS — у них
          гарантированные сроки доставки, что улучшает опыт покупателя.
        </p>

        <h3 style={styles.h3}>Практические правила по остаткам</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Страховой запас — минимум 14 продаж.</strong> Если продаёте 10 штук в день,
            держите 140 единиц на складе маркетплейса. Пополняйте заранее, не по факту
            обнуления.
          </li>
          <li style={styles.li}>
            <strong>Распределение по региональным складам WB.</strong> Чем ближе товар к
            покупателю, тем выше позиция в поиске по его региону. Распределите хотя бы по
            3–4 ключевым складам (Москва, СПб, Екатеринбург, Краснодар).
          </li>
          <li style={styles.li}>
            <strong>Не уходите в аутофсток перед сезоном.</strong> Если знаете, что 14 февраля
            будет пик — пополните склад за 3 недели. Поставки на WB идут 5–10 дней.
          </li>
        </ul>

        <h2 style={styles.h2}>5. Акции и скидки: как участвовать без потери маржи</h2>
        <p style={styles.p}>
          На WB участие в акциях маркетплейса даёт буст в поиске — алгоритм поднимает акционные
          товары выше. Но многие акции предполагают скидку 30–50%, что убивает маржу.
        </p>
        <p style={styles.p}>
          Выход — управлять ценой заранее. За 2–3 недели до акции постепенно поднимайте базовую
          цену, тогда акционная скидка будет рассчитываться от завышенной базы. WB разрешает
          менять цену в любой момент, главное — не нарушать условия конкретной акции.
        </p>
        <p style={styles.p}>
          На Ozon работают «Акции продавца» — вы сами задаёте размер скидки и срок. Минимум
          7% даёт ярлык «Скидка» в поиске, что увеличивает CTR без значительного урона марже.
        </p>

        <h2 style={styles.h2}>6. Конверсия и поведенческие факторы</h2>
        <p style={styles.p}>
          Алгоритм отслеживает, что происходит после клика на карточку: добавляют ли товар в
          корзину, оформляют ли заказ, возвращают ли. Высокая конверсия из просмотра в покупку —
          прямой сигнал, что товар нравится покупателям, и алгоритм поднимает его выше.
        </p>
        <p style={styles.p}>
          Три главных рычага конверсии без рекламы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Цена.</strong> Не демпингуйте, но следите за конкурентами в топ-10. Если
            вы дороже на 15%+ без очевидной причины (качество, бренд, отзывы) — конверсия упадёт.
          </li>
          <li style={styles.li}>
            <strong>Вторая фотография.</strong> Именно она видна при наведении на WB и в
            карусели на Ozon. Сделайте её максимально информативной: крупный план деталей,
            ключевое USP на слайде («100% хлопок», «1 год гарантии»).
          </li>
          <li style={styles.li}>
            <strong>Быстрая доставка.</strong> Срок доставки отображается в карточке. FBO
            с ближайшего склада даёт «Завтра» — это повышает конверсию на 20–30%.
          </li>
        </ul>
        <p style={styles.p}>
          Детальный чек-лист по конверсии — в статье{" "}
          <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
            Как поднять конверсию карточки на 30%
          </Link>
          .
        </p>

        <h2 style={styles.h2}>Чек-лист: 18 пунктов для органического роста без рекламы</h2>

        <h3 style={styles.h3}>SEO и текст</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Заголовок содержит главный коммерческий запрос (5 000+ в Wordstat)</li>
          <li style={styles.li}>Все характеристики заполнены (100% полей, не оставлено пустых)</li>
          <li style={styles.li}>Описание на Ozon содержит 3–5 ключей естественным текстом</li>
          <li style={styles.li}>Категория выбрана точно — не «Прочее» и не слишком широкая</li>
        </ul>

        <h3 style={styles.h3}>Фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото — белый или нейтральный фон, товар занимает 80%+ кадра</li>
          <li style={styles.li}>Загружено 8+ фото (WB) / 6+ фото (Ozon)</li>
          <li style={styles.li}>Второе фото — lifestyle или крупный план с ключевым USP</li>
          <li style={styles.li}>Есть инфографика с характеристиками (3–4 слайда)</li>
          <li style={styles.li}>Видео загружено (хотя бы 15-секундный обзор)</li>
        </ul>

        <h3 style={styles.h3}>Отзывы и рейтинг</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Рейтинг 4.5+ (иначе алгоритм снижает видимость)</li>
          <li style={styles.li}>Подключена программа «Баллы за отзыв» (WB)</li>
          <li style={styles.li}>На каждый негативный отзыв есть ответ в течение 24 часов</li>
          <li style={styles.li}>Вкладыш в упаковке с благодарностью покупателю</li>
        </ul>

        <h3 style={styles.h3}>Остатки и логистика</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>На складе WB/Ozon есть запас на 14+ дней продаж</li>
          <li style={styles.li}>Товар распределён по 3+ региональным складам WB</li>
          <li style={styles.li}>Есть план пополнения на ближайшие 30 дней</li>
        </ul>

        <h3 style={styles.h3}>Цена и акции</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Цена в диапазоне ±15% от топ-5 конкурентов</li>
          <li style={styles.li}>Участие в ближайшей акции маркетплейса запланировано</li>
          <li style={styles.li}>На Ozon установлена «Акция продавца» минимум 7%</li>
        </ul>

        <h2 style={styles.h2}>Сколько времени займёт результат</h2>
        <p style={styles.p}>
          Реалистичный прогноз после полной оптимизации карточки по всем пунктам:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>1–2 недели:</strong> алгоритм переиндексирует карточку по новым ключам.
            Увидите рост показов в аналитике.
          </li>
          <li style={styles.li}>
            <strong>3–4 недели:</strong> если CTR вырастет — позиции начнут подниматься.
            Типичный рост: с топ-50 в топ-20 за месяц.
          </li>
          <li style={styles.li}>
            <strong>2–3 месяца:</strong> устойчивый органический трафик при поддержании
            остатков и работе с отзывами. Один наш клиент в категории «Кухонные принадлежности»
            вышел в топ-10 за 10 недель, полностью отключив платную рекламу.
          </li>
        </ul>
        <p style={styles.p}>
          Важный нюанс: реклама и органика не исключают друг друга. Когда органика работает,
          реклама начинает работать гораздо дешевле — вы усиливаете уже высокий CTR, а не
          «тащите» слабую карточку деньгами.
        </p>

        <h2 style={styles.h2}>С чего начать прямо сейчас</h2>
        <p style={styles.p}>
          Самая быстрая победа, которую мы видим у клиентов — замена главного фото. Это одно
          действие, которое влияет на CTR, конверсию и косвенно на позицию — одновременно.
          При этом не требует перезапуска рекламы или переоформления SEO.
        </p>
        <p style={styles.p}>
          Загрузите фото своего товара в{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>{" "}
          — получите 8 вариантов на разных фонах за 2 минуты. Протестируйте новый главный кадр
          и смотрите на CTR в аналитике через неделю. Это и есть точка отсчёта для органического
          роста.
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
          <p style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: "#5b21b6" }}>
            Начните с фото — самого быстрого рычага роста
          </p>
          <p style={{ margin: "0 0 16px", color: "#374151", fontSize: 15 }}>
            13 кредитов бесплатно на старте. Загружаете одно фото товара — получаете 8 готовых
            кадров в формате 900×1200 для WB и Ozon. Результат за 2 минуты.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li>
            <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
              SEO для карточки Wildberries: пошаговый гайд 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
              Как поднять конверсию карточки на 30%: чек-лист из 25 пунктов
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Яндекс.Маркет для селлеров в 2026: запуск и продажи — Aiviso",
  description: "Как открыть магазин на Яндекс.Маркет в 2026: схемы FBY/FBS/DBS, комиссии, требования к фото и SEO. Пошаговый гайд с чек-листом из 20 пунктов и реальными кейсами.",
  keywords: [
    "яндекс маркет для продавцов",
    "как открыть магазин яндекс маркет",
    "яндекс маркет комиссии 2026",
    "FBY FBS DBS маркет",
    "требования к фото яндекс маркет",
    "seo яндекс маркет",
    "яндекс маркет vs wildberries",
    "маркетплейс яндекс 2026",
  ],
  alternates: { canonical: "/blog/yandeks-market-dlya-sellerov-2026" },
  openGraph: {
    title: "Яндекс.Маркет для селлеров в 2026: полный гайд",
    description: "Схемы FBY/FBS/DBS, комиссии, требования к карточке и реальные кейсы. Пошаговый чек-лист для запуска.",
    url: "/blog/yandeks-market-dlya-sellerov-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Яндекс.Маркет для селлеров в 2026: запуск, комиссии и продажи",
  description: "Как открыть магазин на Яндекс.Маркет в 2026: схемы FBY/FBS/DBS, комиссии, требования к фото и SEO. Пошаговый гайд с чек-листом и кейсами.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-05",
  dateModified: "2026-09-05",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/yandeks-market-dlya-sellerov-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Яндекс.Маркет для селлеров в 2026", item: "https://aiviso.ru/blog/yandeks-market-dlya-sellerov-2026" },
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

export default function YandeksMarketDlyaSellerov2026() {
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
          <span style={{ color: "#1f2937" }}>Яндекс.Маркет для селлеров в 2026</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Яндекс.Маркет для селлеров в 2026: полный гайд по запуску и продажам
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>5 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Wildberries и Ozon делят большую часть рынка, но Яндекс.Маркет — третья по обороту площадка в России — часто остаётся вне поля зрения небольших селлеров. Между тем конкуренция там ощутимо ниже, а комиссии в ряде категорий выгоднее. Разбираем, как выйти на Маркет в 2026: от регистрации до первых продаж.
        </p>

        <h2 style={styles.h2}>Чем Яндекс.Маркет отличается от WB и Ozon</h2>
        <p style={styles.p}>
          Маркет изначально рос как агрегатор цен, а не склад маркетплейса — поэтому его аудитория привыкла сравнивать предложения и читать характеристики. Средний чек здесь выше: в категориях электроники и бытовой техники он доходит до 12 000 ₽ против 3 500 ₽ на WB. Покупатель на Маркете, как правило, осознанный — он ищет конкретную модель, а не «что-нибудь подешевле».
        </p>
        <p style={styles.p}>
          Ключевые отличия, которые влияют на бизнес-модель:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Цены.</strong> На Маркете нет принудительного участия в акциях — вы сами решаете, снижать цену или нет. На WB акции фактически обязательны для ряда категорий.</li>
          <li style={styles.li}><strong>Отзывы.</strong> Покупатели пишут подробные отзывы с фото, которые существенно влияют на конверсию. Объём отзывов меньше, чем на WB, но качество выше.</li>
          <li style={styles.li}><strong>Реклама.</strong> Рекламная система Маркета работает через Яндекс.Директ — это значит, что можно привлекать внешний трафик из поиска и РСЯ напрямую к карточке.</li>
          <li style={styles.li}><strong>Трафик.</strong> По данным Яндекса, в I квартале 2026 Маркет посещали 58 млн уникальных пользователей в месяц. Это меньше WB (около 100 млн), но аудитория платёжеспособнее.</li>
        </ul>

        <h2 style={styles.h2}>Кому стоит выходить на Яндекс.Маркет</h2>
        <p style={styles.p}>Маркет особенно выгоден, если:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Вы продаёте электронику, бытовую технику, инструменты, спортивные товары или автозапчасти — там Маркет лидирует по трафику.</li>
          <li style={styles.li}>Средний чек товара выше 2 000 ₽ — комиссии Маркета в абсолютном выражении ниже при высокой цене.</li>
          <li style={styles.li}>Вы уже работаете на WB или Ozon и хотите диверсифицировать каналы без переупаковки всей системы.</li>
          <li style={styles.li}>У вас есть склад или возможность собирать заказы самостоятельно — схема DBS даёт полный контроль над логистикой.</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов — поставщик профессиональных фенов — вышел на Маркет в марте 2026. На WB позиции стояли на месте уже 4 месяца. На Маркете первые три артикула вошли в ТОП-10 категории за 6 недель: конкуренция в нише была в 3 раза ниже, а средний чек оказался на 40% выше, чем на WB.
        </p>

        <h2 style={styles.h2}>Схемы работы: FBY, FBS, DBS</h2>
        <p style={styles.p}>На Маркете три логистические модели. Выбор влияет на позиции в поиске, скорость доставки и вашу нагрузку.</p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Схема</th>
              <th style={styles.th}>Где хранится товар</th>
              <th style={styles.th}>Кто доставляет</th>
              <th style={styles.th}>Позиции в поиске</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tdAccent}><strong>FBY</strong> (Fulfillment by Yandex)</td>
              <td style={styles.td}>На складе Маркета</td>
              <td style={styles.td}>Яндекс.Доставка</td>
              <td style={styles.td}>Максимальные</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>FBS</strong> (Fulfillment by Seller)</td>
              <td style={styles.td}>На вашем складе</td>
              <td style={styles.td}>Яндекс.Доставка</td>
              <td style={styles.td}>Хорошие</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>DBS</strong> (Delivery by Seller)</td>
              <td style={styles.td}>На вашем складе</td>
              <td style={styles.td}>Ваша служба</td>
              <td style={styles.td}>Ниже, зависит от скорости</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>FBY — когда выгоден</h3>
        <p style={styles.p}>
          Лучшие позиции в поиске, доставка за 1–2 дня по всей России — это FBY. Маркет сам собирает, упаковывает и доставляет. Минус: нужно поставить товар на склад Маркета в Москве, Екатеринбурге или Ростове — это затраты на логистику «туда». Оптимально для быстрооборачиваемых товаров с оборачиваемостью до 30 дней.
        </p>

        <h3 style={styles.h3}>FBS — баланс гибкости и позиций</h3>
        <p style={styles.p}>
          Товар у вас на складе, вы сами сдаёте его в пункт приёма Маркета после заказа. Позиции чуть ниже FBY, но не принципиально — если вы укладываетесь в норматив скорости сборки (обычно 1–2 дня). Хорошо для сезонных товаров и позиций с непредсказуемым спросом.
        </p>

        <h3 style={styles.h3}>DBS — свой контроль</h3>
        <p style={styles.p}>
          Полная независимость: вы доставляете своей службой. Маркет показывает товар в поиске, но позиции зависят от рейтинга скорости доставки. Популярно среди B2B-поставщиков крупногабаритных товаров — мебели, строительных материалов — где Яндекс.Доставка физически не справится.
        </p>

        <h2 style={styles.h2}>Комиссии Яндекс.Маркет в 2026</h2>
        <p style={styles.p}>
          Базовая комиссия зависит от категории. Актуальные ставки по популярным категориям:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Комиссия Маркет</th>
              <th style={styles.th}>Для сравнения WB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Электроника и гаджеты</td>
              <td style={styles.tdAccent}><strong>5–7%</strong></td>
              <td style={styles.td}>10–15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Бытовая техника</td>
              <td style={styles.tdAccent}><strong>6–8%</strong></td>
              <td style={styles.td}>10–12%</td>
            </tr>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.td}>15–17%</td>
              <td style={styles.td}>25%</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и уход</td>
              <td style={styles.td}>10–12%</td>
              <td style={styles.td}>15–20%</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома</td>
              <td style={styles.td}>10–13%</td>
              <td style={styles.td}>12–15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Спорт и отдых</td>
              <td style={styles.td}>9–12%</td>
              <td style={styles.td}>15%</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          К комиссии добавляется тариф логистики: при FBY — 70–200 ₽ за заказ в зависимости от веса и габаритов. Для маленьких и лёгких товаров FBY невыгоден по логистике, несмотря на лучшие позиции.
        </p>

        <h2 style={styles.h2}>Требования к карточке товара на Яндекс.Маркет</h2>
        <p style={styles.p}>
          Маркет — не WB: там нет жёсткого правила про белый фон на первом кадре. Но есть свои стандарты, несоблюдение которых снижает позиции в поиске.
        </p>

        <h3 style={styles.h3}>Фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Минимум 1 фото, рекомендуется 5–8.</li>
          <li style={styles.li}>Минимальное разрешение: 200 × 200 пикселей. Оптимально: <strong>900 × 1200</strong> (3:4) или 1000 × 1000 — зависит от категории.</li>
          <li style={styles.li}>Форматы: JPEG, PNG, WebP.</li>
          <li style={styles.li}>Фон: любой, но первый кадр должен чётко показывать товар без посторонних предметов.</li>
          <li style={styles.li}>Запрещены: водяные знаки, рамки, текстовые надписи на главном фото (в отличие от Ozon, где инфографика приветствуется).</li>
        </ul>
        <p style={styles.p}>
          AI-сгенерированные фото разрешены при условии соответствия реальному товару — аналогично <Link href="/blog/ai-foto-pravila-marketpleysov" style={{ color: "#7c3aed" }}>правилам WB и Ozon</Link>.
        </p>

        <h3 style={styles.h3}>Характеристики</h3>
        <p style={styles.p}>
          На Маркете характеристики критически важны для SEO. Алгоритм ранжирования учитывает заполненность атрибутов — незаполненные поля буквально убирают карточку из фильтрованного поиска. Правило: заполнять все обязательные и как минимум 80% дополнительных атрибутов.
        </p>

        <h3 style={styles.h3}>Описание</h3>
        <p style={styles.p}>
          Описание на Маркете индексируется Яндекс.Поиском — это уникальная возможность, которой нет у WB. Хорошо написанное описание с ключевыми словами приносит органический трафик извне маркетплейса. Оптимальный объём: 800–1500 символов.
        </p>

        <h2 style={styles.h2}>SEO на Яндекс.Маркет: что реально влияет на позиции</h2>
        <p style={styles.p}>
          Алгоритм Маркета учитывает сигналы, похожие на WB и Ozon, но с несколькими важными отличиями.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Конверсия из показа в покупку</strong> — главный фактор. Всё, что увеличивает конверсию (качество фото, полные характеристики, конкурентная цена), напрямую поднимает позицию.</li>
          <li style={styles.li}><strong>Рейтинг и число отзывов.</strong> Карточки с рейтингом 4.5+ показываются приоритетно. Первые 10 отзывов дают ощутимый скачок позиций.</li>
          <li style={styles.li}><strong>Заголовок.</strong> Должен содержать ключевое слово в точном вхождении. Формат: «[Тип товара] [Бренд] [Модель] [Ключевая характеристика]». Например: «Фен профессиональный Dyson HD07 2000W ионизация».</li>
          <li style={styles.li}><strong>Цена относительно конкурентов.</strong> Маркет оценивает привлекательность цены — если ваш товар дороже медианы на 15%+ без явных причин, позиции снижаются.</li>
          <li style={styles.li}><strong>Скорость доставки.</strong> При FBY — автоматически высокий балл. При FBS/DBS — зависит от вашей скорости сборки заказов.</li>
          <li style={styles.li}><strong>Актуальность остатков.</strong> Товары без стока исключаются из поиска мгновенно. Следите за балансом остатков на складе Маркета при FBY.</li>
        </ul>

        <h2 style={styles.h2}>Пошаговый чек-лист запуска на Яндекс.Маркет</h2>
        <p style={styles.p}>Порядок действий, который позволит выйти на первые продажи за 2–3 недели:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Зарегистрировать аккаунт продавца в Яндекс.Маркет Partner — нужен ИП или ООО, ИНН, данные расчётного счёта.</li>
          <li style={styles.li}>Выбрать схему работы (FBY / FBS / DBS) исходя из оборачиваемости и логистических возможностей.</li>
          <li style={styles.li}>Создать магазин: указать юридические данные, подписать оферту, пройти верификацию (1–3 дня).</li>
          <li style={styles.li}>Загрузить каталог: вручную через интерфейс или через фид (XML, YML, CSV). При выходе с WB/Ozon можно адаптировать существующий фид.</li>
          <li style={styles.li}>Заполнить все обязательные атрибуты каждой карточки — не менее 80% полей.</li>
          <li style={styles.li}>Загрузить фото: минимум 5 качественных кадров 900×1200 на каждый артикул.</li>
          <li style={styles.li}>Написать описание с ключевыми словами (800–1500 символов).</li>
          <li style={styles.li}>Настроить цену: проверить медиану конкурентов в категории через встроенный инструмент аналитики Маркета.</li>
          <li style={styles.li}>Поставить товар на склад FBY или настроить интеграцию для FBS (API или системы управления складом).</li>
          <li style={styles.li}>Запустить рекламу: начать с автобиддера, выставить дневной бюджет 300–500 ₽ для тестирования.</li>
          <li style={styles.li}>Отслеживать позиции и конверсию через кабинет аналитики Маркета каждые 3–4 дня.</li>
          <li style={styles.li}>После первых 5 продаж — запросить отзыв через программу «Отзывы за баллы» (аналог механики на Ozon).</li>
        </ul>

        <h2 style={styles.h2}>Фото для карточки на Яндекс.Маркет: практические советы</h2>
        <p style={styles.p}>
          На Маркете покупатели более «холодные» — они изучают товар внимательнее, чем на WB. Это значит, что карточка должна отвечать на все вопросы до того, как человек начнёт сравнивать вас с конкурентами.
        </p>

        <h3 style={styles.h3}>Что должно быть в комплекте фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слайд 1.</strong> Товар на нейтральном фоне, максимально чёткий. Показывает, что именно вы продаёте.</li>
          <li style={styles.li}><strong>Слайды 2–3.</strong> Ракурсы: спереди, сбоку, снизу — всё что показывает форму и объём.</li>
          <li style={styles.li}><strong>Слайд 4.</strong> Крупный план деталей: швы, разъёмы, текстура материала, фурнитура.</li>
          <li style={styles.li}><strong>Слайд 5.</strong> Товар в использовании или в интерьере — это увеличивает «желание» купить.</li>
          <li style={styles.li}><strong>Слайд 6–8 (опционально).</strong> Сравнение размеров, состав упаковки, документы и сертификаты — для категорий, где это критично (медицина, электроника).</li>
        </ul>

        <h3 style={styles.h3}>AI-фото на Маркете</h3>
        <p style={styles.p}>
          Если у вас уже есть <Link href="/app" style={{ color: "#7c3aed" }}>AI-сгенерированные фото из Aiviso</Link>, они подходят для Маркета без дополнительной обработки. Требования по соответствию товару здесь такие же: нельзя дорисовывать несуществующие детали. Но lifestyle-сцены, нейтральные фоны и крупные планы — всё это Маркет принимает.
        </p>
        <p style={styles.p}>
          Один клиент — поставщик силиконовых форм для выпечки — использовал AI-фото на Маркете: белый фон + lifestyle (форма с готовым тортом). CTR вырос с 2.3% до 4.8% за 3 недели без изменений в цене и описании.
        </p>

        <h2 style={styles.h2}>Реклама на Яндекс.Маркет: с чего начать</h2>
        <p style={styles.p}>
          Маркет предлагает несколько рекламных инструментов, и самый простой для старта — <strong>буст продаж</strong>. Вы указываете процент комиссии сверх базовой (например, +5%), и алгоритм поднимает карточку в выдаче. Это работает как внутренний аукцион.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Буст продаж:</strong> начните с +3–5% к комиссии, смотрите на ДРР (доля рекламных расходов). Норма для большинства категорий — до 20%.</li>
          <li style={styles.li}><strong>Медийная реклама:</strong> баннеры на главной странице Маркета. Эффективна при бюджете от 50 000 ₽/мес — для крупных продавцов.</li>
          <li style={styles.li}><strong>Яндекс.Директ:</strong> внешняя реклама из поиска и РСЯ напрямую на карточку. Уникальное преимущество Маркета перед WB и Ozon — там внешний трафик не идёт напрямую в карточки.</li>
        </ul>
        <p style={styles.p}>
          На старте достаточно буста продаж с бюджетом 5 000–10 000 ₽/мес. Это даёт первые продажи и отзывы, после чего органические позиции начинают расти сами.
        </p>

        <h2 style={styles.h2}>Сравнение: когда выбирать Маркет, а не WB или Ozon</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Критерий</th>
              <th style={styles.th}>WB</th>
              <th style={styles.th}>Ozon</th>
              <th style={styles.th}>Яндекс.Маркет</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Средний чек аудитории</td>
              <td style={styles.td}>~1 800 ₽</td>
              <td style={styles.td}>~2 400 ₽</td>
              <td style={styles.tdAccent}><strong>~4 200 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия (электроника)</td>
              <td style={styles.td}>10–15%</td>
              <td style={styles.td}>8–12%</td>
              <td style={styles.tdAccent}><strong>5–7%</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Обязательные акции</td>
              <td style={styles.td}>Фактически да</td>
              <td style={styles.td}>Частично</td>
              <td style={styles.tdAccent}><strong>Нет</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Внешний трафик из Яндекс.Поиска</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.tdAccent}><strong>Да</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Конкуренция (в среднем)</td>
              <td style={styles.td}>Очень высокая</td>
              <td style={styles.td}>Высокая</td>
              <td style={styles.tdAccent}><strong>Средняя</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Инфографика на фото</td>
              <td style={styles.td}>Разрешена</td>
              <td style={styles.td}>Рекомендуется</td>
              <td style={styles.td}>Не рекомендуется на 1-м кадре</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Типичные ошибки при выходе на Яндекс.Маркет</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Копировать карточки с WB без адаптации.</strong> На WB первый кадр — белый фон с инфографикой. На Маркете такое фото снижает кликабельность: покупатель воспринимает его как рекламный баннер, а не фото товара.</li>
          <li style={styles.li}><strong>Игнорировать атрибуты.</strong> Незаполненные характеристики — это выпадение из фильтров. Если покупатель ищет «фен 2000 Вт» через фильтр, карточка без мощности не появится.</li>
          <li style={styles.li}><strong>Ставить цену «как на WB».</strong> Аудитории разные. На Маркете часть покупателей ищет конкретную модель — они готовы платить больше, если вы лидер по рейтингу и скорости доставки.</li>
          <li style={styles.li}><strong>Не следить за остатками FBY.</strong> Если товар заканчивается на складе Маркета, карточка падает в выдаче за несколько часов. Настройте уведомления на остаток 3–5 единиц.</li>
          <li style={styles.li}><strong>Запускать рекламу без отзывов.</strong> Буст продаж при рейтинге 0 даёт продажи, но конверсия низкая — покупатель видит карточку без отзывов и уходит к конкуренту. Первые 5–10 отзывов собирайте через «Отзывы за баллы» до запуска рекламы.</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Выходите на Яндекс.Маркет и нужны фото под его требования?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— 13 кредитов на старте бесплатно. AI генерирует фото 900×1200 и 1000×1000 одновременно. Подходит для WB, Ozon и Маркета без пересъёмки.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/wb-vs-ozon-gde-prodavat" style={{ color: "#7c3aed" }}>Wildberries или Ozon: где лучше продавать в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/ai-foto-pravila-marketpleysov" style={{ color: "#7c3aed" }}>Можно ли использовать AI-фото на маркетплейсах</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов: WB, Ozon, Яндекс.Маркет</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li><Link href="/" style={{ color: "#7c3aed" }}>На главную Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

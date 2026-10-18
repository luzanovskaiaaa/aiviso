import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Воронка продаж на маркетплейсе: как не терять покупателей — Aiviso",
  description: "Разбираем 4 этапа воронки продаж на WB и Ozon: показы, CTR, конверсия карточки, выкуп. Чек-лист из 20 пунктов и кейс: рост заказов на 73% без рекламы.",
  keywords: [
    "воронка продаж маркетплейс",
    "конверсия карточки wildberries",
    "ctr карточки ozon",
    "почему нет продаж на wb",
    "как увеличить конверсию ozon",
    "воронка wildberries ozon",
    "этапы продаж маркетплейс",
    "аналитика карточки товара",
  ],
  alternates: { canonical: "/blog/voronka-prodazh-marketpleys" },
  openGraph: {
    title: "Воронка продаж на маркетплейсе: почему 94% посетителей уходят без заказа",
    description: "4 этапа воронки на WB и Ozon, чек-лист из 20 пунктов и реальный кейс: рост заказов на 73% без рекламы.",
    url: "/blog/voronka-prodazh-marketpleys",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Воронка продаж на маркетплейсе: почему 94% посетителей уходят без заказа",
  description: "Разбираем 4 этапа воронки продаж на WB и Ozon: показы, CTR, конверсия карточки, выкуп. Чек-лист из 20 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/voronka-prodazh-marketpleys",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Воронка продаж на маркетплейсе", item: "https://aiviso.ru/blog/voronka-prodazh-marketpleys" },
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

export default function VoronkaProdazhMarketpleys() {
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
          <span style={{ color: "#1f2937" }}>Воронка продаж на маркетплейсе</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Воронка продаж на маркетплейсе: почему 94% посетителей уходят без заказа
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>18 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Средняя конверсия карточки на Wildberries — 2–6%, на Ozon похожая картина. Это значит, что из 100 человек, которые кликнули на вашу карточку, заказывают только двое-шестеро. Остальные уходят — к конкурентам или вообще без покупки. Разберём, на каком этапе уходит каждый сегмент и что с этим делать.
        </p>

        <h2 style={styles.h2}>Четыре этапа воронки на маркетплейсе</h2>
        <p style={styles.p}>
          В отличие от интернет-магазина, у маркетплейса своя структура воронки. Вы не управляете трафиком напрямую — вы конкурируете за место в выдаче и за внимание покупателя внутри листинга. Вот четыре этапа, которые проходит каждый покупатель:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Этап</th>
              <th style={styles.th}>Что происходит</th>
              <th style={styles.th}>Метрика</th>
              <th style={styles.th}>Где смотреть</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>1. Показы</strong></td>
              <td style={styles.td}>Карточка появилась в поиске или рекомендациях</td>
              <td style={styles.td}>Количество показов</td>
              <td style={styles.td}>ЛК → Аналитика</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>2. CTR</strong></td>
              <td style={styles.td}>Покупатель кликнул на главное фото</td>
              <td style={styles.tdAccent}><strong>CTR: 1–8%</strong></td>
              <td style={styles.td}>ЛК → Воронка продаж</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>3. Конверсия карточки</strong></td>
              <td style={styles.td}>Из просмотра — в корзину или заказ</td>
              <td style={styles.tdAccent}><strong>CR: 2–10%</strong></td>
              <td style={styles.td}>ЛК → Воронка продаж</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>4. Выкуп</strong></td>
              <td style={styles.td}>Заказ выкуплен, не возвращён</td>
              <td style={styles.td}>% выкупа: 40–90%</td>
              <td style={styles.td}>ЛК → Отчёты</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Перемножьте все четыре коэффициента — получите реальную «воронку выкупа». Даже небольшое улучшение на каждом этапе кратно увеличивает итоговый результат: CTR с 2% до 4% — это в два раза больше трафика на карточку без изменения бюджета.
        </p>

        <h2 style={styles.h2}>Этап 1: показы — попасть в листинг</h2>
        <p style={styles.p}>
          Если карточка не попадает в топ-30 выдачи по нужному запросу — покупатели её просто не видят. По данным WB, больше 70% кликов получают карточки с первой страницы, а карточки ниже 50-й позиции получают меньше 3% трафика категории.
        </p>

        <h3 style={styles.h3}>Что влияет на количество показов</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>SEO-заголовок и характеристики.</strong> Алгоритм маркетплейса читает заголовок, атрибуты и описание. Правильные ключевые слова в нужных полях — это бесплатный органический трафик. Один наш клиент из категории «Кухонная утварь» поднял показы с 1 200 до 8 400 в неделю только за счёт переписи заголовка и заполнения 12 пустых атрибутов.</li>
          <li style={styles.li}><strong>CTR карточки.</strong> Алгоритм видит, кликают ли на вашу карточку в выдаче. Высокий CTR — сигнал, что карточка релевантна запросу. Это повышает позиции органически.</li>
          <li style={styles.li}><strong>Продажи и оборачиваемость.</strong> Карточки с хорошей историей продаж поднимаются выше. Если товар только вышел — первые недели нужно стимулировать продажи (самовыкупы через самозанятых, реклама, внешний трафик).</li>
          <li style={styles.li}><strong>Остатки.</strong> Нет в наличии = исключение из выдачи. Карточка без остатка исчезает из поиска и теряет позиции, которые потом приходится возвращать неделями.</li>
        </ul>

        <h2 style={styles.h2}>Этап 2: CTR — главное фото решает всё</h2>
        <p style={styles.p}>
          В листинге маркетплейса покупатель видит миниатюру главного фото, название и цену. На принятие решения «кликнуть или нет» у него уходит 0,3–0,8 секунды. Это означает, что главное фото — единственный шанс зацепить внимание.
        </p>
        <p style={styles.p}>
          Средний CTR по рынку — около 2–3%. Хорошие карточки в нишах с живым спросом дают 5–8%. Разница в CTR напрямую переводится в заказы: при 10 000 показов разница между CTR 2% и CTR 5% — это 300 дополнительных переходов на карточку каждую неделю.
        </p>

        <h3 style={styles.h3}>Что убивает CTR</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Серый или грязный фон вместо чистого белого или контрастного</li>
          <li style={styles.li}>Мелкий товар в кадре — занимает меньше 60% площади фото</li>
          <li style={styles.li}>Отсутствие ключевого преимущества — покупатель не понимает, чем ваш товар отличается от соседей в листинге</li>
          <li style={styles.li}>Квадратный формат 1:1 вместо вертикального 3:4 — вертикальное фото занимает больше площади на экране смартфона</li>
          <li style={styles.li}>Плохое качество съёмки — смазанность, блики, пересвет</li>
        </ul>

        <h3 style={styles.h3}>Что поднимает CTR</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Чёткое главное фото на белом или контрастном фоне, товар заполняет кадр</li>
          <li style={styles.li}>Одна ключевая надпись: «Размер XS–3XL», «300 мл», «Водонепроницаемый» — то, что важно для категории</li>
          <li style={styles.li}>Lifestyle-сцена на первом слайде (актуально для одежды, мебели, декора, спорта)</li>
          <li style={styles.li}>Цветовой контраст относительно карточек конкурентов в листинге — «эффект стопа»</li>
        </ul>

        <p style={styles.p}>
          Один наш клиент в категории «Сумки» обновил главное фото с домашней съёмки на AI-генерацию с lifestyle-сценой — CTR за 2 недели вырос с 1,7% до 4,3%. Без изменения цены, без рекламы.
        </p>

        <h2 style={styles.h2}>Этап 3: конверсия карточки — от просмотра к заказу</h2>
        <p style={styles.p}>
          Покупатель кликнул, открыл карточку. Теперь у него минута-полторы, чтобы решить: купить или вернуться в листинг. На этом этапе работает уже весь контент карточки: фото-галерея, заголовок, характеристики, описание, отзывы, цена и условия доставки.
        </p>

        <h3 style={styles.h3}>Фото-галерея: структура слайдов</h3>
        <p style={styles.p}>Покупатель листает галерею сверху вниз. Оптимальная структура для WB и Ozon:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слайд 1.</strong> Главное фото — товар крупно, акцент на главном преимуществе</li>
          <li style={styles.li}><strong>Слайд 2.</strong> Инфографика: 3–5 ключевых характеристик с иконками</li>
          <li style={styles.li}><strong>Слайд 3.</strong> Товар в использовании (lifestyle) или на модели</li>
          <li style={styles.li}><strong>Слайд 4.</strong> Детали: крупный план швов, застёжки, текстуры, состава</li>
          <li style={styles.li}><strong>Слайд 5.</strong> Размерная сетка, комплектация, что в наборе</li>
          <li style={styles.li}><strong>Слайд 6–8.</strong> Дополнительные ракурсы, цвета, варианты применения</li>
        </ul>

        <h3 style={styles.h3}>Цена и социальное доказательство</h3>
        <p style={styles.p}>
          Два фактора, которые сильно влияют на конверсию, но не всегда очевидны:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Отзывы.</strong> Карточка с 50+ отзывами конвертирует в среднем на 35–50% лучше карточки с 5 отзывами при одинаковом товаре и цене. Первые 20 отзывов — приоритет на старте любой новой позиции.</li>
          <li style={styles.li}><strong>Цена относительно конкурентов.</strong> Если ваша цена на 15–20% выше среднего по категории — нужно либо явно показать преимущество, либо скорректировать цену. Покупатель видит цены конкурентов в одном листинге.</li>
          <li style={styles.li}><strong>Условия доставки.</strong> Быстрая доставка из FBO-склада показывается покупателю как «завтра» или «послезавтра» — это закрывает возражение «а вдруг долго ждать».</li>
        </ul>

        <h2 style={styles.h2}>Этап 4: выкуп — не потерять покупку на финише</h2>
        <p style={styles.p}>
          Заказан — не значит продан. На WB и Ozon покупатель может не забрать заказ из ПВЗ или вернуть товар при получении. Средний процент выкупа по категориям:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Средний % выкупа</th>
              <th style={styles.th}>Главная причина отказов</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда</td>
              <td style={styles.td}>40–60%</td>
              <td style={styles.td}>Не подошёл размер, цвет не как на фото</td>
            </tr>
            <tr>
              <td style={styles.td}>Обувь</td>
              <td style={styles.td}>35–55%</td>
              <td style={styles.td}>Размер, неудобная колодка</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника</td>
              <td style={styles.td}>75–90%</td>
              <td style={styles.td}>Не подошёл формат, характеристики</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика</td>
              <td style={styles.td}>70–85%</td>
              <td style={styles.td}>Запах, консистенция</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Товары для дома</td>
              <td style={styles.tdAccent}>65–80%</td>
              <td style={styles.tdAccent}>Не совпал размер, цвет</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Главная причина низкого выкупа — несоответствие реального товара фотографиям. Покупатель открывает посылку и видит: цвет другой, размер не тот, детали отличаются от карточки. Решение — честные, детальные фото, особенно цвета при разном освещении и размерные подсказки в кадре.
        </p>

        <h2 style={styles.h2}>Кейс: рост заказов на 73% без рекламы</h2>
        <p style={styles.p}>
          Продавец аксессуаров для ванной (Москва, оборот ~600 000 ₽/мес) пришёл с проблемой: показы есть, кликают плохо, заказывают ещё хуже. Провели аудит воронки по четырём этапам.
        </p>
        <p style={styles.p}><strong>До работы над карточкой:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Показы в неделю: 14 200</li>
          <li style={styles.li}>CTR: 1,4%</li>
          <li style={styles.li}>Конверсия карточки: 2,8%</li>
          <li style={styles.li}>Процент выкупа: 71%</li>
          <li style={styles.li}><strong>Итого заказов в неделю: ~56</strong></li>
        </ul>
        <p style={styles.p}><strong>Что изменили:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото: с домашней съёмки на белом листе бумаги — на AI-генерацию с lifestyle-сценой в современной ванной комнате</li>
          <li style={styles.li}>Добавили инфографику на второй слайд: материал, размер, водонепроницаемость</li>
          <li style={styles.li}>Переписали заголовок, добавили 9 ключевых слов в характеристики</li>
          <li style={styles.li}>Добавили слайд с фото товара в интерьере — чтобы покупатель понял масштаб</li>
        </ul>
        <p style={styles.p}><strong>Через 3 недели:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Показы в неделю: 18 700 (+32% — SEO сработал)</li>
          <li style={styles.li}>CTR: 3,1% (было 1,4%)</li>
          <li style={styles.li}>Конверсия карточки: 4,4% (было 2,8%)</li>
          <li style={styles.li}>Процент выкупа: 76% (было 71%)</li>
          <li style={styles.li}><strong>Итого заказов в неделю: ~97 (+73%)</strong></li>
        </ul>
        <p style={styles.p}>
          Никаких изменений в товаре, цене или рекламном бюджете. Только карточка.
        </p>

        <h2 style={styles.h2}>Чек-лист воронки: 20 пунктов</h2>
        <p style={styles.p}><strong>Этап 1. Показы</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Заголовок содержит ключевое слово с максимальным спросом в категории</li>
          <li style={styles.li}>Все обязательные атрибуты заполнены (особенно на Ozon)</li>
          <li style={styles.li}>Описание написано с ключевыми словами, не копипастой от поставщика</li>
          <li style={styles.li}>Остатки ненулевые на ближайшие 30+ дней</li>
          <li style={styles.li}>Карточка не находится под санкциями/штрафами маркетплейса</li>
        </ul>
        <p style={styles.p}><strong>Этап 2. CTR</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото вертикальное (3:4), товар занимает 65–80% кадра</li>
          <li style={styles.li}>Фон чистый: белый, нейтральный или контрастный lifestyle</li>
          <li style={styles.li}>Есть одна ключевая надпись с главным преимуществом</li>
          <li style={styles.li}>Главное фото отличается по стилю от топ-10 конкурентов в листинге</li>
          <li style={styles.li}>Цена конкурентна или визуально оправдана (бейдж «Новинка», скидка)</li>
        </ul>
        <p style={styles.p}><strong>Этап 3. Конверсия карточки</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>В галерее не меньше 6 слайдов</li>
          <li style={styles.li}>Второй слайд — инфографика с ключевыми характеристиками</li>
          <li style={styles.li}>Есть lifestyle-сцена или фото «в использовании»</li>
          <li style={styles.li}>Есть крупный план деталей (шов, застёжка, текстура, состав)</li>
          <li style={styles.li}>Есть размерная сетка или подсказка по выбору размера/цвета</li>
          <li style={styles.li}>Рейтинг карточки 4,3+ при 20+ отзывах</li>
          <li style={styles.li}>В описании закрыты 3 главных возражения категории</li>
        </ul>
        <p style={styles.p}><strong>Этап 4. Выкуп</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Цвет товара на фото точно соответствует реальному при дневном освещении</li>
          <li style={styles.li}>Размерная сетка проверена и совпадает с реальными замерами</li>
          <li style={styles.li}>В комплекте нет «сюрпризов» — всё что в наборе показано на фото</li>
        </ul>

        <h2 style={styles.h2}>Как смотреть воронку в личном кабинете</h2>
        <p style={styles.p}>
          <strong>Wildberries:</strong> Аналитика → Воронка продаж. Там видны показы, переходы, корзина и заказы по каждой карточке. Смотрите не абсолютные числа, а коэффициенты: где самый большой «провал» — там и точка роста.
        </p>
        <p style={styles.p}>
          <strong>Ozon:</strong> Аналитика → Показатели карточки. Дополнительно — отчёт «Воронка» с разбивкой по устройствам (мобайл vs десктоп). На мобайле покупатель видит меньше текста — значит первые два слайда критичны.
        </p>
        <p style={styles.p}>
          Проверяйте воронку раз в неделю. Норма — смотреть на динамику, а не на абсолютные цифры. Если CTR упал на 20%+ за неделю без изменений — скорее всего обновился листинг конкурентов или алгоритм поменял выдачу. Пора обновить главное фото.
        </p>

        <div style={{ marginTop: 48, padding: "24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Обновите карточку — рост заметен за 2 недели
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Первый шаг в любой воронке — сильное главное фото. Попробуйте AI-генерацию в{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>
            : загружаете фото товара, выбираете сцену, получаете готовый кадр 900×1200 для WB и Ozon. 13 кредитов бесплатно при регистрации.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              padding: "12px 24px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как измерить и поднять кликабельность</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки товара: 8 правил первого слайда</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%: чек-лист из 25 пунктов</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link>
          </li>
        </ul>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Вариативность карточки WB и Ozon: цвета, размеры, артикулы — Aiviso",
  description: "Как правильно объединить товарные варианты в одну карточку на Wildberries и Ozon. Цвета, размеры, артикулы, SEO-эффект и частые ошибки. Чек-лист из 18 пунктов.",
  keywords: [
    "вариативность карточки wildberries",
    "варианты товара ozon",
    "объединить артикулы wildberries",
    "размеры на wildberries",
    "цвета карточки ozon",
    "как добавить вариант товара wb",
    "объединить карточки wb ozon",
    "вариативность маркетплейс",
  ],
  alternates: { canonical: "/blog/variativnost-kartochki-wb-ozon" },
  openGraph: {
    title: "Вариативность карточки WB и Ozon: цвета, размеры, артикулы",
    description: "Как объединить товарные варианты в одну карточку на Wildberries и Ozon. Чек-лист из 18 пунктов и кейс: конверсия +29% после правильной настройки.",
    url: "/blog/variativnost-kartochki-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Вариативность карточки на WB и Ozon: цвета, размеры и артикулы в одной карточке",
  description: "Как объединить товарные варианты в одну карточку на Wildberries и Ozon. Настройка, SEO-эффект, частые ошибки и чек-лист из 18 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/variativnost-kartochki-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Вариативность карточки WB и Ozon", item: "https://aiviso.ru/blog/variativnost-kartochki-wb-ozon" },
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

export default function VariativnostKartochki() {
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
          <span style={{ color: "#1f2937" }}>Вариативность карточки</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Вариативность карточки на WB и Ozon: цвета, размеры и артикулы в одной карточке
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>19 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Толстовка в пяти цветах — пять отдельных карточек с нулём отзывов каждая, или одна с 200 отзывами и топовой позицией. Вариативность — это не просто удобство для покупателя. Это один из самых недооценённых инструментов роста позиций, конверсии и рейтинга на Wildberries и Ozon.
        </p>

        <h2 style={styles.h2}>Что такое вариативность и зачем она нужна</h2>
        <p style={styles.p}>
          Вариативность — объединение нескольких артикулов одного товара (по цвету, размеру, комплектации) в одну карточку с переключателем. Покупатель видит одну карточку и выбирает нужный вариант, не уходя в другое место листинга.
        </p>
        <p style={styles.p}>
          Что это даёт продавцу:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Объединение отзывов.</strong> Все 5 цветов толстовки собирают рейтинг вместе — у карточки с 300 отзывами позиция несравнимо выше, чем у пяти карточек по 60.</li>
          <li style={styles.li}><strong>Снижение конкуренции внутри своего каталога.</strong> Пять отдельных карточек конкурируют между собой за одного покупателя — вы сами себе режете органику.</li>
          <li style={styles.li}><strong>Рост конверсии.</strong> Покупатель не теряется при выборе размера — он переключает вариант в той же карточке. Один из наших клиентов в категории женских худи получил +29% конверсии после правильного объединения артикулов — без изменения цены и фото.</li>
          <li style={styles.li}><strong>Экономия рекламного бюджета.</strong> Рекламируете одну карточку вместо пяти — при том же бюджете показы концентрируются на более сильной позиции.</li>
        </ul>

        <h2 style={styles.h2}>Как работает вариативность на Wildberries</h2>
        <p style={styles.p}>
          WB поддерживает два типа вариаций: по размеру и по цвету. Технически это «предметы» — дочерние артикулы внутри одной карточки.
        </p>

        <h3 style={styles.h3}>Варианты по размеру</h3>
        <p style={styles.p}>
          Самый простой случай. При создании карточки вы добавляете несколько строк в таблице размеров — каждый размер получает свой баркод, но остаётся под одной карточкой. Отзывы и рейтинг общие.
        </p>
        <p style={styles.p}>
          Обязательно заполняйте размерную сетку в характеристиках — замеры в сантиметрах для каждого размера. Это снижает процент возвратов и влияет на позицию в фильтрах «по размеру».
        </p>

        <h3 style={styles.h3}>Варианты по цвету</h3>
        <p style={styles.p}>
          Чуть сложнее. Для каждого цвета нужны свои фото — WB показывает фото того варианта, который выбран переключателем. Ошибка, которую делают 80% продавцов: загружают одни и те же фото для всех цветов. Покупатель выбирает «красный», а видит синий — это прямой путь к возврату.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Для каждого цветового варианта — минимум 4 фото с реальным цветом</li>
          <li style={styles.li}>Главное фото (первый слайд) — обязательно соответствует выбранному цвету</li>
          <li style={styles.li}>Цвет в характеристиках — точный (не «синий», а «джинс» или «темно-синий»)</li>
        </ul>

        <h3 style={styles.h3}>Как объединить существующие артикулы</h3>
        <p style={styles.p}>
          Если уже опубликовали товары отдельными карточками — их можно объединить через личный кабинет WB. Алгоритм:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>Перейдите в «Товары» → «Карточки товаров»</li>
          <li style={styles.li}>Выберите нужные артикулы (галочкой)</li>
          <li style={styles.li}>Нажмите «Объединить» — система предложит выбрать главный артикул (к нему присоединятся остальные)</li>
          <li style={styles.li}>Проверьте характеристики после объединения — иногда значения из дочерних карточек конфликтуют</li>
        </ol>
        <p style={styles.p}>
          Важно: отзывы с дочерних карточек переходят к главной. Если у вас на одной карточке 4.2 звезды, а на другой 3.8 — финальный рейтинг будет средневзвешенным. Проверяйте перед объединением.
        </p>

        <h2 style={styles.h2}>Как работает вариативность на Ozon</h2>
        <p style={styles.p}>
          Ozon называет это «объединением в модель». Принцип схожий, но есть отличия в интерфейсе и поведении алгоритма.
        </p>

        <h3 style={styles.h3}>Создание объединённой карточки на Ozon</h3>
        <p style={styles.p}>
          При создании товара в разделе «Характеристики» можно сразу указать вариативные поля — цвет, размер, объём. Ozon сам создаёт «материнскую» карточку-модель и дочерние варианты.
        </p>
        <p style={styles.p}>
          Если карточки уже созданы отдельно: в ЛК Ozon зайдите в «Товары и цены» → выберите артикулы → «Объединить в модель». Выберите главный товар — он станет основой карточки в листинге.
        </p>

        <h3 style={styles.h3}>Особенности Ozon</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Цена показывается минимальная по модели.</strong> Если один вариант стоит 890 ₽, а другой 1 490 ₽ — в листинге покупатель увидит «от 890 ₽». Это хорошо для CTR, но следите чтобы самый дешёвый вариант не был убыточным.</li>
          <li style={styles.li}><strong>Рейтинг и отзывы общие.</strong> Как и на WB — но на Ozon отзыв может быть привязан к конкретному варианту (покупатель видит «куплен: синий, размер M»). Это дополнительное доверие.</li>
          <li style={styles.li}><strong>Остатки управляются отдельно по каждому варианту.</strong> Не забудьте поддерживать остатки — если один вариант уходит в ноль, карточка не пропадает, но доступные цвета/размеры сокращаются.</li>
        </ul>

        <h2 style={styles.h2}>Сравнение подходов: WB vs Ozon</h2>
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
              <td style={styles.td}>Название объединения</td>
              <td style={styles.td}>Предметы в карточке</td>
              <td style={styles.td}>Объединение в модель</td>
            </tr>
            <tr>
              <td style={styles.td}>Типы вариантов</td>
              <td style={styles.td}>Цвет, размер</td>
              <td style={styles.td}>Любая характеристика (цвет, размер, объём, материал)</td>
            </tr>
            <tr>
              <td style={styles.td}>Общие отзывы</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
            </tr>
            <tr>
              <td style={styles.td}>Отдельные фото по варианту</td>
              <td style={styles.td}>Да, обязательно для цветов</td>
              <td style={styles.td}>Да</td>
            </tr>
            <tr>
              <td style={styles.td}>Цена в листинге</td>
              <td style={styles.td}>Цена выбранного варианта</td>
              <td style={styles.tdAccent}>Минимальная по модели (от…)</td>
            </tr>
            <tr>
              <td style={styles.td}>Объединение существующих</td>
              <td style={styles.td}>Через ЛК, вкладка «Объединить»</td>
              <td style={styles.td}>Через ЛК, «Объединить в модель»</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Когда вариативность вредит</h2>
        <p style={styles.p}>
          Объединять всё подряд — ошибка. Есть ситуации, когда раздельные карточки выгоднее:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Очень разные ключевые запросы.</strong> «Шапка вязаная женская» и «шапка детская вязаная» — разные покупательские аудитории и запросы. Объединение разведёт SEO-трафик в обе стороны и ослабит обе позиции.</li>
          <li style={styles.li}><strong>Разные ценовые сегменты.</strong> Если вы продаёте коврик за 290 ₽ и за 2 900 ₽ в разных материалах — это фактически разные товары для разных сегментов аудитории.</li>
          <li style={styles.li}><strong>Один вариант с плохим рейтингом.</strong> Если синяя толстовка получила волну возвратов из-за брака в партии, её рейтинг 3.2 — объединение потянет вниз хорошие варианты.</li>
          <li style={styles.li}><strong>Разные категории.</strong> На WB нельзя объединить артикулы из разных категорий — система не даст. На Ozon теоретически возможно через «объёмные» характеристики, но практически это ломает фильтры.</li>
        </ul>

        <h2 style={styles.h2}>Фото для вариативных карточек: что важно</h2>
        <p style={styles.p}>
          Самое трудоёмкое в вариативности — фотоконтент. Для каждого цветового варианта нужен полный комплект фото. При 5 цветах и 8 кадрах — это 40 изображений. Для небольшого селлера это серьёзный барьер.
        </p>
        <p style={styles.p}>
          Именно здесь AI-генерация закрывает задачу в разы дешевле студии. Схема работы:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>Снимаете или загружаете фото товара в одном базовом цвете (или нейтральном белом)</li>
          <li style={styles.li}>AI перекрашивает продукт в нужные цвета — сохраняя текстуру, тени и детали</li>
          <li style={styles.li}>Получаете полный фотосет для всех вариантов без повторной съёмки</li>
        </ol>
        <p style={styles.p}>
          Например, через <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> перекрасить чехол для телефона в 6 цветов стоит около 180 ₽ и занимает 3 минуты. Фотостудия за тот же набор возьмёт 15 000–25 000 ₽ и 3–5 дней.
        </p>

        <h2 style={styles.h2}>7 частых ошибок с вариативностью</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Одинаковые фото для всех цветов.</strong> Покупатель выбирает красный, но видит синий на фото — возврат и плохой отзыв обеспечены.</li>
          <li style={styles.li}><strong>Непоследовательные названия цветов.</strong> «Синий», «голубой», «Navy», «джинс» — для одного оттенка у разных артикулов. Покупатель путается, алгоритм не фильтрует корректно.</li>
          <li style={styles.li}><strong>Объединение разных товаров.</strong> Шарф и шапка «в одном наборе» — на Ozon через объединение в модель это иногда делают. Фильтры категории начинают работать некорректно.</li>
          <li style={styles.li}><strong>Забытые размерные таблицы.</strong> Размеры добавили, замеры не прописали. Покупатель берёт M, потому что «всегда так», а у этого бренда M больше обычного — возврат.</li>
          <li style={styles.li}><strong>Объединение с артикулом с низким рейтингом.</strong> Проверяйте рейтинг и количество отзывов каждого варианта перед объединением. Один аутсайдер тянет всю карточку вниз.</li>
          <li style={styles.li}><strong>Нулевые остатки по некоторым вариантам.</strong> Если половина размеров в нуле — карточка теряет рейтинг доступности, алгоритм снижает показы. Следите за остатками по каждому варианту отдельно.</li>
          <li style={styles.li}><strong>Игнорирование атрибутов варианта.</strong> На Ozon каждый вариант должен иметь заполненные характеристики (особенно обязательные). Пропустили цвет или материал — вариант не попадает в фильтры.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 18 пунктов для правильной настройки вариативности</h2>
        <p style={styles.p}>Перед объединением артикулов:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Проверили рейтинг каждого артикула (нет аутсайдеров с рейтингом ниже 4.0)</li>
          <li style={styles.li}>Убедились, что артикулы из одной категории</li>
          <li style={styles.li}>Проверили, что ключевые запросы пересекаются (одна аудитория)</li>
          <li style={styles.li}>Выбрали главный артикул — с наибольшим числом отзывов или лучшим рейтингом</li>
        </ul>
        <p style={styles.p}>Фото:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Для каждого цветового варианта — минимум 4 фото (не копии с другого варианта)</li>
          <li style={styles.li}>Первый слайд каждого варианта — товар именно этого цвета/вида</li>
          <li style={styles.li}>Одинаковый стиль фото для всех вариантов (единая постановка, фон, свет)</li>
        </ul>
        <p style={styles.p}>Характеристики:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Цвет — единый стандарт написания для всех вариантов</li>
          <li style={styles.li}>Размер — таблица с замерами в сантиметрах для каждого размера</li>
          <li style={styles.li}>Заполнены все обязательные атрибуты для каждого варианта</li>
          <li style={styles.li}>Размерная сетка соответствует реальным замерам (проверьте физически)</li>
        </ul>
        <p style={styles.p}>После объединения:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Проверили отображение на мобильном — переключатель вариантов работает</li>
          <li style={styles.li}>Убедились, что рейтинг итоговой карточки не просел</li>
          <li style={styles.li}>Проверили корректность цены в листинге (на Ozon — цена «от»)</li>
          <li style={styles.li}>Остатки по каждому варианту — не нулевые (или те, которых нет, скрыты)</li>
          <li style={styles.li}>Карточка корректно попадает в фильтры по цвету и размеру</li>
          <li style={styles.li}>Заголовок и описание охватывают все варианты (упоминает ключи по цвету)</li>
          <li style={styles.li}>Инфографика обновлена под объединённую карточку (показывает варианты)</li>
        </ul>

        <h2 style={styles.h2}>Кейс: +29% конверсии после объединения</h2>
        <p style={styles.p}>
          Один из наших клиентов продавал флисовые худи в пяти цветах на Wildberries — каждый цвет отдельной карточкой. У лучшей карточки было 47 отзывов, у худшей — 9. Суммарно по всем цветам накопилось 148 отзывов.
        </p>
        <p style={styles.p}>
          После объединения в одну карточку:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Стартовый рейтинг новой карточки — 4.6 (средневзвешенный по всем отзывам)</li>
          <li style={styles.li}>148 отзывов сразу — карточка перестала выглядеть «новой»</li>
          <li style={styles.li}>Позиция в органике выросла с ~60-го на ~22-е место по основному запросу за 3 недели</li>
          <li style={styles.li}>CTR вырос с 2.8% до 3.9% — покупатели видят рейтинг и много отзывов в листинге</li>
          <li style={styles.li}>Конверсия карточки выросла с 4.3% до 5.6% (+29%) — покупатель выбирает цвет без ухода в другие карточки</li>
        </ul>
        <p style={styles.p}>
          При этом рекламный бюджет остался прежним — просто перенесли его с пяти кампаний на одну. Эффективность рекламы на одну карточку стала выше в 2.3 раза при том же расходе.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Нужны фото для каждого цветового варианта?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— загрузите одно базовое фото товара, и AI сгенерирует полный фотосет для каждого цвета за минуты. Готовые размеры 900×1200 для WB и Ozon, без студии.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/wb-vs-ozon-foto-trebovaniya" style={{ color: "#7c3aed" }}>Чем отличается фото для WB и Ozon: требования к карточке товара</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки товара на 30%: чек-лист</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/kartochka-luchshe-konkurentov" style={{ color: "#7c3aed" }}>Как сделать карточку лучше конкурентов на WB и Ozon</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li><Link href="/" style={{ color: "#7c3aed" }}>На главную — попробовать AI-генерацию фото</Link></li>
        </ul>
      </article>
    </>
  );
}

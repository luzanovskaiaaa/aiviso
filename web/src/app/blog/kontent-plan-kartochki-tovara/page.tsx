import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контент-план карточки товара: что показывать на каждом слайде — Aiviso",
  description: "Сколько фото нужно в карточке WB и Ozon, что показывать на каждом слайде. Чек-лист из 20 пунктов и кейс: +58% продаж после добавления слайдов без рекламы.",
  keywords: [
    "контент-план карточки товара",
    "сколько фото для wildberries",
    "слайды карточки ozon",
    "что писать на инфографике",
    "главное фото маркетплейс",
    "структура карточки товара wb",
    "слайды для карточки wildberries",
    "фото товара порядок слайдов",
    "карточка товара контент",
    "оформление карточки wb ozon",
  ],
  alternates: { canonical: "/blog/kontent-plan-kartochki-tovara" },
  openGraph: {
    title: "Контент-план карточки товара: сколько слайдов и что на каждом",
    description: "Чек-лист из 20 пунктов по слайдам карточки. Кейс: +58% продаж после структурирования контента без изменения фото.",
    url: "/blog/kontent-plan-kartochki-tovara",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Контент-план карточки товара: сколько слайдов и что показывать на каждом",
  description: "Разбор структуры карточки товара на WB и Ozon: сколько фото нужно и что должно быть на каждом слайде. Чек-лист из 20 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kontent-plan-kartochki-tovara",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Контент-план карточки товара", item: "https://aiviso.ru/blog/kontent-plan-kartochki-tovara" },
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

export default function KontentPlanKartochki() {
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
          <span style={{ color: "#1f2937" }}>Контент-план карточки товара</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Контент-план карточки товара: сколько слайдов и что показывать на каждом
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 10 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство селлеров знают, что карточке нужно несколько фото — но понятия не имеют, что именно показывать на каждом слайде. Один продаёт диван с пятью кадрами «в лоб» с разных сторон. Другой добавляет lifestyle и инфографику — и получает конверсию в три раза выше при одинаковом товаре. Разберём порядок слайдов с конкретными рекомендациями по категориям.
        </p>

        <h2 style={styles.h2}>Почему порядок слайдов важен не меньше, чем качество фото</h2>
        <p style={styles.p}>
          Wildberries и Ozon показывают первый слайд в листинге. Покупатель делает клик — и смотрит карточку дальше. В этот момент его голова задаёт вопросы в определённом порядке:
        </p>
        <ol style={{ paddingLeft: 24, margin: "8px 0" }}>
          <li style={styles.li}><strong>Это то, что я ищу?</strong> — отвечает первый слайд</li>
          <li style={styles.li}><strong>Как это выглядит в деталях?</strong> — второй слайд</li>
          <li style={styles.li}><strong>Зачем мне это и чем это лучше аналогов?</strong> — третий слайд (инфографика)</li>
          <li style={styles.li}><strong>Как я буду этим пользоваться?</strong> — lifestyle-кадры</li>
          <li style={styles.li}><strong>Подходит ли мне по размеру/составу/характеристикам?</strong> — технические слайды</li>
          <li style={styles.li}><strong>Можно ли доверять?</strong> — сертификаты, упаковка, бренд</li>
        </ol>
        <p style={styles.p}>
          Если ставить слайды в случайном порядке — например, сразу давать размерную сетку на втором месте — покупатель не получает ответ на вопрос «зачем мне это» и закрывает карточку. Структура = конверсия.
        </p>

        <h2 style={styles.h2}>Слайд 1: главное фото — работает на кликабельность в листинге</h2>
        <p style={styles.p}>
          Первый слайд — единственное, что покупатель видит <em>до</em> клика. Его задача — не продать товар, а заставить кликнуть. Здесь нет места тексту с преимуществами или составом.
        </p>

        <h3 style={styles.h3}>Что должно быть на первом слайде</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар крупно — занимает 70–80% кадра, не теряется на фоне</li>
          <li style={styles.li}>Белый или нейтральный фон для технических категорий (электроника, инструменты, косметика)</li>
          <li style={styles.li}>Контекстный фон для одежды, декора, мебели — покупателю нужно увидеть товар «в жизни»</li>
          <li style={styles.li}>Ориентация 3:4 (900×1200) — WB и Ozon оба используют вертикальный формат</li>
          <li style={styles.li}>Минимум текста: допустимо одно короткое УТП («–60°C», «600 Вт», «100% хлопок»)</li>
        </ul>

        <h3 style={styles.h3}>Что убивает CTR первого слайда</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар занимает меньше 50% кадра — выглядит крошечным в листинге</li>
          <li style={styles.li}>Переполненный текстом слайд с пятью преимуществами — покупатель не читает, а видит «шум»</li>
          <li style={styles.li}>Квадратный формат 1:1 — занимает меньше площади, чем у конкурентов с 3:4</li>
          <li style={styles.li}>Мятый фон, тени от неправильного света</li>
          <li style={styles.li}>Два товара разного цвета на одном слайде — непонятно, какой именно продаётся</li>
        </ul>

        <h2 style={styles.h2}>Слайд 2: товар крупно и детали</h2>
        <p style={styles.p}>
          Покупатель кликнул — значит, первый слайд зацепил. Теперь ему нужно рассмотреть товар внимательно. На втором слайде показываем то, что не разглядеть с первого:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Одежда:</strong> крупно фурнитура, строчки, карманы, застёжка. Покупатель проверяет качество исполнения до покупки.</li>
          <li style={styles.li}><strong>Электроника:</strong> порты, кнопки, разъёмы, экран. Любая деталь, которую нельзя разглядеть с первого слайда.</li>
          <li style={styles.li}><strong>Косметика:</strong> текстура, консистенция — крем на пальце или сыворотка на стекле. Это повышает доверие больше, чем описание.</li>
          <li style={styles.li}><strong>Мебель/декор:</strong> крупно материал — дерево, ткань, металл. Покупатель хочет убедиться что это не пластик под дерево.</li>
        </ul>
        <p style={styles.p}>
          Важно: второй слайд — не копия первого в другом ракурсе. Он должен давать <em>новую информацию</em>.
        </p>

        <h2 style={styles.h2}>Слайд 3: инфографика преимуществ — главный продающий слайд</h2>
        <p style={styles.p}>
          Если первый слайд отвечает на «что это», третий отвечает на «зачем мне именно этот, а не более дешёвый». Это инфографика с 3–5 ключевыми характеристиками.
        </p>
        <p style={styles.p}>
          Правило хорошей инфографики: <strong>конкретные цифры, не абстракции.</strong>
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Плохо</th>
              <th style={styles.th}>Хорошо</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Высокое качество</td>
              <td style={styles.tdAccent}>Плотность ткани 240 г/м²</td>
            </tr>
            <tr>
              <td style={styles.td}>Долго держит тепло</td>
              <td style={styles.tdAccent}>Сохраняет тепло 6 часов</td>
            </tr>
            <tr>
              <td style={styles.td}>Большая ёмкость</td>
              <td style={styles.tdAccent}>500 мл / 8 чашек кофе</td>
            </tr>
            <tr>
              <td style={styles.td}>Надёжный</td>
              <td style={styles.tdAccent}>Гарантия 24 месяца</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Иконки на инфографике — line-art SVG, не эмодзи. Размер: 16–24px в круглом фоне. Цвет текста — тёмный, контраст проверяйте по стандарту WCAG AA.
        </p>

        <h2 style={styles.h2}>Слайды 4–5: lifestyle и товар в использовании</h2>
        <p style={styles.p}>
          Покупатель мысленно примеряет товар к своей жизни. Lifestyle-кадр помогает это сделать быстрее и снижает возвраты — человек лучше понимает, что именно покупает.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Одежда:</strong> на модели в реальной обстановке (улица, кафе, офис) — не на белом фоне. Показывайте посадку на фигуре.</li>
          <li style={styles.li}><strong>Кухонные товары:</strong> сковорода с едой, термос на природе, нож при нарезке. Не просто предмет, а процесс.</li>
          <li style={styles.li}><strong>Товары для дома:</strong> в интерьере — диван в гостиной, светильник над столом. Покупатель должен представить это у себя.</li>
          <li style={styles.li}><strong>Детские товары:</strong> в руках ребёнка, в игре. Родители принимают решение эмоционально — lifestyle здесь критичен.</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «товары для пикника» добавил lifestyle-кадр (термос на природе с едой) на четвёртый слайд — конверсия карточки выросла с 3,1% до 4,8% за две недели без изменений цены или описания.
        </p>

        <h2 style={styles.h2}>Слайд 6: размеры, схема, технические характеристики</h2>
        <p style={styles.p}>
          Этот слайд снижает возвраты. Покупатели чаще всего возвращают товар именно из-за неверных ожиданий по размеру.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Одежда:</strong> размерная сетка с замерами в сантиметрах (не S/M/L — они у всех разные). Добавьте ростовку: «рост модели 170 см, надет размер M».</li>
          <li style={styles.li}><strong>Мебель:</strong> схема с размерами. Покупатель стоит с рулеткой у стены — дайте ему цифры прямо на слайде.</li>
          <li style={styles.li}><strong>Сумки, рюкзаки:</strong> товар рядом с предметом-маяком (бутылка воды, ноутбук) — чтобы понять реальный объём.</li>
          <li style={styles.li}><strong>Электроника:</strong> таблица совместимости или схема разъёмов.</li>
        </ul>

        <h2 style={styles.h2}>Слайды 7–8: упаковка, состав, сертификаты</h2>
        <p style={styles.p}>
          Последние слайды работают на доверие. Это особенно важно для новых карточек без отзывов — покупатель ещё не знает вас как продавца.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Фото упаковки:</strong> показывает, что товар придёт не в пакете без опознавательных знаков. Важно для подарочных категорий.</li>
          <li style={styles.li}><strong>Состав ткани или продукта:</strong> крупно на этикетке или отдельным слайдом. Покупатели с аллергией или предпочтениями ищут это специально.</li>
          <li style={styles.li}><strong>Сертификаты:</strong> логотип «Честный знак», знак РСТ, эко-сертификат. Не обязательно полный документ — достаточно одного логотипа как маркера доверия.</li>
          <li style={styles.li}><strong>Комплект поставки:</strong> что именно входит в коробку. Если к товару идут аксессуары — покупатель должен видеть это заранее, иначе ожидания не совпадут с реальностью.</li>
        </ul>

        <h2 style={styles.h2}>Сколько слайдов нужно по категориям</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Минимум</th>
              <th style={styles.th}>Оптимум</th>
              <th style={styles.th}>Приоритет</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда, обувь</td>
              <td style={styles.td}>5</td>
              <td style={styles.tdAccent}><strong>8–10</strong></td>
              <td style={styles.td}>Размерный слайд + lifestyle на модели</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника, гаджеты</td>
              <td style={styles.td}>4</td>
              <td style={styles.tdAccent}><strong>6–8</strong></td>
              <td style={styles.td}>Детали + схема разъёмов + таблица совместимости</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика, уход</td>
              <td style={styles.td}>4</td>
              <td style={styles.tdAccent}><strong>6–7</strong></td>
              <td style={styles.td}>Текстура + состав + результат до/после</td>
            </tr>
            <tr>
              <td style={styles.td}>Мебель, декор</td>
              <td style={styles.td}>5</td>
              <td style={styles.tdAccent}><strong>7–9</strong></td>
              <td style={styles.td}>Интерьерный lifestyle + схема с размерами</td>
            </tr>
            <tr>
              <td style={styles.td}>Игрушки, детские товары</td>
              <td style={styles.td}>4</td>
              <td style={styles.tdAccent}><strong>6–8</strong></td>
              <td style={styles.td}>Lifestyle с ребёнком + возрастная маркировка</td>
            </tr>
            <tr>
              <td style={styles.td}>Инструменты, хозтовары</td>
              <td style={styles.td}>4</td>
              <td style={styles.tdAccent}><strong>5–7</strong></td>
              <td style={styles.td}>В работе + комплект поставки + размеры</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Кейс: +58% заказов после реструктуризации слайдов</h2>
        <p style={styles.p}>
          Продавец кухонных товаров на Wildberries — основной артикул: стальные термосы ёмкостью 500 мл. До работы с нами карточка выглядела так: 4 слайда с термосом на белом фоне, в разных ракурсах, без текста и без контекста.
        </p>
        <p style={styles.p}>
          CTR был 1,7%, конверсия 2,3%. Мы переделали карточку по следующей схеме:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слайд 1:</strong> термос на нейтральном фоне, занимает 75% кадра, одна подпись «6 часов тепла»</li>
          <li style={styles.li}><strong>Слайд 2:</strong> крупно крышка и горлышко — контроль качества материала</li>
          <li style={styles.li}><strong>Слайд 3:</strong> инфографика 4 пункта: ёмкость/температура/материал/гарантия с цифрами</li>
          <li style={styles.li}><strong>Слайд 4:</strong> lifestyle на природе — термос рядом с едой у костра</li>
          <li style={styles.li}><strong>Слайд 5:</strong> схема с размерами и сравнение с бутылкой воды</li>
          <li style={styles.li}><strong>Слайд 6:</strong> фото упаковки и комплект поставки</li>
        </ul>
        <p style={styles.p}>
          Через 3 недели: CTR вырос с 1,7% до 2,9%, конверсия — с 2,3% до 3,6%. Количество заказов выросло на 58% при той же цене и том же рекламном бюджете.
        </p>

        <h2 style={styles.h2}>Чек-лист: 20 пунктов по контент-плану карточки</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый слайд: товар занимает 70–80% кадра</li>
          <li style={styles.li}>Первый слайд: максимум один текстовый маркер, конкретная цифра</li>
          <li style={styles.li}>Формат 3:4 (900×1200) на всех слайдах</li>
          <li style={styles.li}>Второй слайд даёт новую информацию — не тот же ракурс</li>
          <li style={styles.li}>Инфографика с цифрами, не абстрактными словами «высокое качество»</li>
          <li style={styles.li}>Иконки на инфографике: SVG line-art, не эмодзи</li>
          <li style={styles.li}>Есть хотя бы один lifestyle-кадр (товар в использовании)</li>
          <li style={styles.li}>Lifestyle показывает реальный контекст применения товара</li>
          <li style={styles.li}>Одежда: есть слайд с размерной сеткой в сантиметрах</li>
          <li style={styles.li}>На размерном слайде указан рост и параметры модели</li>
          <li style={styles.li}>Мебель/техника: схема с габаритными размерами</li>
          <li style={styles.li}>Крупный план деталей: застёжка, шов, материал, разъём</li>
          <li style={styles.li}>Детские товары: указана возрастная маркировка</li>
          <li style={styles.li}>Косметика: есть слайд с текстурой или результатом</li>
          <li style={styles.li}>Состав/материал указан на одном из слайдов</li>
          <li style={styles.li}>Есть фото упаковки для подарочных категорий</li>
          <li style={styles.li}>Комплект поставки показан если идут аксессуары</li>
          <li style={styles.li}>Все слайды читаются на маленьком экране телефона</li>
          <li style={styles.li}>Минимум 5 слайдов для одежды, 4 для остальных категорий</li>
          <li style={styles.li}>Порядок слайдов соответствует логике покупательского пути</li>
        </ul>

        <h2 style={styles.h2}>Как быстро создать слайды по всему каталогу</h2>
        <p style={styles.p}>
          Главная проблема — делать всё это вручную долго и дорого. Студия за lifestyle + инфографика для одной позиции — от 8 000 до 20 000 ₽. При каталоге в 50 артикулов это 400 000–1 000 000 ₽ только за контент карточек.
        </p>
        <p style={styles.p}>
          В <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> загружаете исходное фото товара на белом фоне — и получаете готовые слайды: AI генерирует lifestyle-сцену, инфографику, крупные планы деталей. Готовые файлы сразу в нужном размере 900×1200 для WB и Ozon.
        </p>
        <p style={styles.p}>
          Стоимость — от 30 ₽ за кадр. Каталог в 50 артикулов × 6 слайдов = 300 кадров = ~9 000 ₽ вместо полумиллиона.
        </p>

        <div style={{ marginTop: 48, padding: "24px 28px", background: "#f5f3ff", border: "2px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#5b21b6", marginBottom: 8 }}>
            Попробуйте на своей карточке
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 14, color: "#6b7280" }}>
            Загрузите одно фото товара — получите готовые слайды по структуре из этой статьи. 13 кредитов на старте бесплатно.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              padding: "10px 20px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Перейти в Aiviso
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <li><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки: 8 правил первого слайда который продаёт</Link></li>
          <li><Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>Инфографика для карточки WB и Ozon: что писать и как оформить</Link></li>
          <li><Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как измерить и поднять кликабельность</Link></li>
          <li><Link href="/blog/audit-kartochki-tovara" style={{ color: "#7c3aed" }}>Аудит карточки товара: пошаговый разбор за 30 минут</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

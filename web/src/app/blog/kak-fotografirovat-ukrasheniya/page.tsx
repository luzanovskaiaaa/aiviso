import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать украшения для маркетплейса — Aiviso",
  description: "Гайд по съёмке украшений и бижутерии для Wildberries и Ozon: оборудование, ракурсы, чек-лист из 18 пунктов и типичные ошибки.",
  keywords: [
    "фото украшений для wildberries",
    "как фотографировать бижутерию",
    "съёмка украшений для маркетплейса",
    "фото кольца для ozon",
    "предметная съёмка бижутерии",
    "украшения карточка товара",
    "AI фото украшений",
    "фото ювелирных изделий",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-ukrasheniya" },
  openGraph: {
    title: "Как фотографировать украшения для маркетплейса в 2026",
    description: "Оборудование, ракурсы, 18-пунктный чек-лист и типичные ошибки при съёмке бижутерии для WB и Ozon.",
    url: "/blog/kak-fotografirovat-ukrasheniya",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать украшения и бижутерию для маркетплейса: полный гайд 2026",
  description: "Оборудование, ракурсы, чек-лист из 18 пунктов и типичные ошибки при съёмке украшений для Wildberries и Ozon.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-ukrasheniya",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Как фотографировать украшения для маркетплейса", item: "https://aiviso.ru/blog/kak-fotografirovat-ukrasheniya" },
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

export default function KakFotografirovatUkrasheniya() {
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
          <span style={{ color: "#1f2937" }}>Как фотографировать украшения для маркетплейса</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как фотографировать украшения и бижутерию для маркетплейса: полный гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 14 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Украшения — одна из самых сложных категорий для съёмки на маркетплейсе. Кольца бликуют,
          цепочки теряются на фоне, размер непонятен без контекста. Один продавец в категории
          бижутерии поднял CTR с 1.9% до 4.7% только за счёт пересъёмки — без изменения цены и
          без рекламы. В этом гайде — конкретный алгоритм от оборудования до загрузки на WB и Ozon.
        </p>

        <h2 style={styles.h2}>Почему украшения — самая сложная категория для фото</h2>
        <p style={styles.p}>
          Большинство товаров на маркетплейсе снимают по одной схеме: белый фон, мягкий свет,
          несколько ракурсов. С украшениями так не работает. Три главные проблемы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Блики и отражения.</strong> Металл, стразы, лак — всё это зеркалит свет.
            Неправильно поставленный источник даёт белое пятно прямо на изделии, скрывая детали.
          </li>
          <li style={styles.li}>
            <strong>Масштаб непонятен.</strong> Фото кольца без контекста — непонятно, это
            кольцо на палец или гигантский браслет. Покупатель не понимает реальный размер
            и либо не покупает, либо делает возврат.
          </li>
          <li style={styles.li}>
            <strong>Мелкие детали теряются.</strong> Гравировка, вставка камня, текстура металла —
            на стандартном расстоянии съёмки это всё превращается в однородное пятно.
          </li>
        </ul>
        <p style={styles.p}>
          По данным аналитики WB, в категории «Украшения» средний процент возврата — 23%,
          и основная причина в 60% случаев: «не соответствует фото» (несовпадение цвета,
          размера, детализации). Хорошее фото напрямую снижает возвраты.
        </p>

        <h2 style={styles.h2}>Оборудование: что нужно для съёмки украшений дома</h2>

        <h3 style={styles.h3}>Освещение</h3>
        <p style={styles.p}>
          Для украшений критически важен <strong>рассеянный свет без жёстких теней</strong>.
          Два варианта на минимальный бюджет:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Лайтбокс (фотобокс) — от 1 500 ₽.</strong> Готовый куб из белой ткани
            со встроенными LED-полосками. Свет равномерный со всех сторон — блики минимальны.
            Хватает для колец, серёг, кулонов. Минус: внутри тесно, объёмные вещи не влезают.
          </li>
          <li style={styles.li}>
            <strong>Два LED-прожектора с диффузором — от 3 000 ₽ комплект.</strong> Ставятся
            под углом 45° с двух сторон от предмета. Диффузор — просто лист белого акрила или
            рассеивающая плёнка перед лампой. Более гибкая схема для крупных изделий.
          </li>
        </ul>
        <p style={styles.p}>
          Температура света: 5500–6000K (дневной белый). Это стандарт для маркетплейсов —
          цвета металла передаются нейтрально, без желтизны от ламп накаливания.
        </p>

        <h3 style={styles.h3}>Фон и подложка</h3>
        <p style={styles.p}>Выбор фона зависит от типа изделий:</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Тип украшений</th>
              <th style={styles.th}>Рекомендуемый фон</th>
              <th style={styles.th}>Почему</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Серебро, белое золото, родий</td>
              <td style={styles.td}>Чёрный бархат</td>
              <td style={styles.td}>Контраст делает металл объёмным, детали читаются</td>
            </tr>
            <tr>
              <td style={styles.td}>Золото, позолота</td>
              <td style={styles.td}>Белый или кремовый</td>
              <td style={styles.td}>Тёплый металл выигрывает на светлом фоне</td>
            </tr>
            <tr>
              <td style={styles.td}>Бижутерия, цветные камни</td>
              <td style={styles.td}>Белый, светло-серый</td>
              <td style={styles.tdAccent}>Нейтральный фон не конкурирует с цветом изделия</td>
            </tr>
            <tr>
              <td style={styles.td}>Lifestyle-кадры (кольцо на руке)</td>
              <td style={styles.td}>Натуральные текстуры — мрамор, дерево, ткань</td>
              <td style={styles.td}>Создаёт контекст использования</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Важно: <strong>глянцевые поверхности удваивают проблему бликов</strong>. Бархат,
          матовый пластик, лён — лучший выбор. Зеркала и глянцевый акрил берём только
          когда намеренно нужен отражённый дубль изделия снизу (красивый приём для колец).
        </p>

        <h2 style={styles.h2}>Ракурсы и компоновка кадра</h2>
        <p style={styles.p}>
          Карточка украшения на WB и Ozon должна содержать минимум 6–8 фото. Распределение
          по слайдам, которое дало конверсию в тесте на 45 продавцах в категории «Ювелирные
          украшения»:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Слайд 1 — главное фото.</strong> Изделие на чистом фоне, центр кадра,
            максимальное заполнение. Никаких надписей, никакого текста — WB это запрещает на первом фото.
          </li>
          <li style={styles.li}>
            <strong>Слайд 2 — крупный план деталей.</strong> Камень, гравировка, застёжка.
            Макро-объектив или режим макро на телефоне. Это то, что покупатель не может увидеть
            вживую до покупки — здесь важна детализация.
          </li>
          <li style={styles.li}>
            <strong>Слайд 3 — на модели.</strong> Кольцо на пальце, серьги в ухе, браслет на запястье.
            Даёт понимание реального размера. Можно без модели — просто рука на нейтральном фоне.
          </li>
          <li style={styles.li}>
            <strong>Слайды 4–5 — инфографика.</strong> Размеры, материал, покрытие, уход.
            Чем меньше у покупателя вопросов к описанию — тем выше конверсия.
          </li>
          <li style={styles.li}>
            <strong>Слайды 6–8 — lifestyle.</strong> Изделие в интерьере, в руках, как часть образа.
            На Ozon эти слайды особенно важны — там покупатели дольше изучают карточку.
          </li>
        </ul>

        <h2 style={styles.h2}>Передача размера: без этого возвраты неизбежны</h2>
        <p style={styles.p}>
          Главная причина возврата украшений — «оказалось меньше/больше чем на фото».
          Три способа передать реальный размер:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Кольцо на пальце.</strong> Самый очевидный способ. Но снимайте на нейтральную
            ухоженную руку — обкусанные ногти или старый маникюр убивают восприятие украшения.
          </li>
          <li style={styles.li}>
            <strong>Линейка рядом.</strong> Работает для кулонов, серёг, брошей. Положите
            небольшую белую линейку рядом с изделием на одном фото — просто и информативно.
          </li>
          <li style={styles.li}>
            <strong>Размеры в инфографике.</strong> Диаметр кольца в мм, длина цепочки в см,
            размер камня. Это обязательно — даже если есть фото на руке.
          </li>
        </ul>

        <h2 style={styles.h2}>Обработка фото: что делать после съёмки</h2>
        <p style={styles.p}>
          Для маркетплейсов важна <strong>точная передача цвета металла и камней</strong>.
          Минимальная обработка в любом редакторе:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Выравнивание баланса белого — металл не должен уходить в жёлтый или синий</li>
          <li style={styles.li}>Небольшое поднятие чёткости (Clarity) для деталей</li>
          <li style={styles.li}>Убрать пылинки и царапины на изделии ретушью</li>
          <li style={styles.li}>Ресайз до 900×1200 пикселей для WB и Ozon (формат 3:4)</li>
          <li style={styles.li}>Сохранение в JPEG с качеством 85–90% — меньше весит без потери качества</li>
        </ul>
        <p style={styles.p}>
          Не перебарщивайте с повышением контраста на металле. Пересвет на золоте
          выглядит как дешевизна — украшение кажется пластиковым. Цель: металл должен
          смотреться «живым», с мягкими бликами, а не как залитое белым пятно.
        </p>

        <h2 style={styles.h2}>Требования WB и Ozon для украшений</h2>
        <p style={styles.p}>
          Обе площадки работают с форматом 3:4 (900×1200 пикселей). Специфика
          по категории «Украшения»:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Wildberries:</strong> первое фото — только товар, без текста и логотипов.
            Минимум 3 фото в карточке, рекомендуется 8+. Видео приветствуется.
          </li>
          <li style={styles.li}>
            <strong>Ozon:</strong> первое фото тоже без текста. Можно использовать RICH-контент
            для детального описания. Видео обязательно для топовых позиций в украшениях.
          </li>
          <li style={styles.li}>
            Обе площадки запрещают фото, которое вводит в заблуждение относительно
            реального товара. Если AI-генерация добавила детали которых нет — это нарушение.
          </li>
        </ul>
        <p style={styles.p}>
          Подробнее о требованиях по размерам:{" "}
          <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
            Размеры фото для маркетплейсов в 2026
          </Link>.
        </p>

        <h2 style={styles.h2}>7 типичных ошибок при съёмке украшений</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Жёсткий свет прямо сверху.</strong> Даёт жёсткие тени и засветы.
            Всегда рассеивайте свет.
          </li>
          <li style={styles.li}>
            <strong>Грязная поверхность изделия.</strong> Отпечатки пальцев, пылинки на металле
            видны при увеличении. Протрите изделие микрофиброй перед съёмкой.
          </li>
          <li style={styles.li}>
            <strong>Слишком далеко.</strong> Изделие занимает 20–30% кадра — остальное пустой фон.
            Украшение должно заполнять 70–80% кадра на главном фото.
          </li>
          <li style={styles.li}>
            <strong>Нет фото на модели.</strong> Покупатель не понимает размер — и уходит
            к конкуренту, у которого есть кольцо на пальце.
          </li>
          <li style={styles.li}>
            <strong>Мятый или грязный фон.</strong> Бархат нужно держать в порядке: чистить
            роликом от ворса и не складывать в гармошку.
          </li>
          <li style={styles.li}>
            <strong>Неверный баланс белого.</strong> Серебро выглядит золотистым, золото — как
            медь. Проверяйте нейтрально-серый объект в кадре — он должен быть нейтральным.
          </li>
          <li style={styles.li}>
            <strong>Только один ракурс в карточке.</strong> Покупатель хочет видеть застёжку,
            детали камня и как это смотрится в носке. Один кадр — это почти гарантированно
            низкая конверсия в категории украшений.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 18 пунктов перед загрузкой фото украшений</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Изделие чистое, без отпечатков и пыли</li>
          <li style={styles.li}>Свет рассеянный, без жёстких теней и засветов</li>
          <li style={styles.li}>Температура света 5500–6000K</li>
          <li style={styles.li}>Главное фото заполняет 70–80% кадра</li>
          <li style={styles.li}>Фон чистый, без складок и ворса</li>
          <li style={styles.li}>Цвет металла передан точно (нет ухода в жёлтый/синий)</li>
          <li style={styles.li}>Есть крупный план деталей (камень, гравировка, застёжка)</li>
          <li style={styles.li}>Есть фото на модели (рука, ухо, шея) или с линейкой</li>
          <li style={styles.li}>Размеры указаны в инфографике (мм)</li>
          <li style={styles.li}>Материал и покрытие указаны в инфографике</li>
          <li style={styles.li}>Есть lifestyle-кадр с контекстом использования</li>
          <li style={styles.li}>Количество фото: не менее 6</li>
          <li style={styles.li}>Формат 3:4, размер 900×1200 пикселей</li>
          <li style={styles.li}>Вес каждого файла не превышает 5 МБ</li>
          <li style={styles.li}>На первом фото нет текста и логотипов</li>
          <li style={styles.li}>Пылинки и царапины убраны ретушью</li>
          <li style={styles.li}>AI-генерация не добавила деталей которых нет у реального товара</li>
          <li style={styles.li}>Видео записано (хотя бы 15 секунд крупного плана)</li>
        </ul>

        <h2 style={styles.h2}>AI-генерация для украшений: когда это работает</h2>
        <p style={styles.p}>
          AI-фото в категории украшений работает иначе, чем для одежды или товаров для дома.
          Главный риск — модель может «придумать» детали: добавить блик на несуществующий
          камень, изменить форму застёжки, добавить гравировку. Это нарушение правил площадок.
        </p>
        <p style={styles.p}>
          Поэтому для украшений AI используют по-другому — не для генерации самого изделия,
          а для создания <strong>фона и сцены вокруг готового фото</strong>:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Вырезать изделие из студийного фото и поместить на lifestyle-фон</li>
          <li style={styles.li}>Добавить текстурный фон (мрамор, дерево, шёлк) вместо белого</li>
          <li style={styles.li}>Создать сезонный кадр: кольцо на фоне осенних листьев, серьги на снегу</li>
          <li style={styles.li}>Сделать несколько вариантов подложки для A/B-теста главного фото</li>
        </ul>
        <p style={styles.p}>
          Один продавец ювелирки из Екатеринбурга с помощью Aiviso сделал 7 сезонных вариантов
          главного фото для одного кольца — за 20 минут и ~200 рублей. То же самое в студии
          стоило бы 14 000 ₽ и 2 недели ожидания. CTR лучшего варианта оказался на 38% выше
          исходного белого фона.
        </p>
        <p style={styles.p}>
          Подробнее о том, когда AI-фото разрешено на маркетплейсах:{" "}
          <Link href="/blog/ai-foto-pravila-marketpleysov" style={{ color: "#7c3aed" }}>
            Можно ли использовать AI-фото на Wildberries и Ozon
          </Link>.
        </p>

        <h2 style={styles.h2}>Бюджет на съёмку украшений: реальные цифры</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Вариант</th>
              <th style={styles.th}>Стоимость за товар (10 фото)</th>
              <th style={styles.th}>Срок</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Профессиональная студия ювелирки</td>
              <td style={styles.td}>8 000 – 30 000 ₽</td>
              <td style={styles.td}>5–14 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Фрилансер-предметник</td>
              <td style={styles.td}>3 000 – 8 000 ₽</td>
              <td style={styles.td}>3–7 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Домашняя съёмка (лайтбокс + телефон)</td>
              <td style={styles.td}>300 – 500 ₽ (амортизация оборудования)</td>
              <td style={styles.td}>2–4 часа</td>
            </tr>
            <tr>
              <td style={styles.td}>AI-сцены на базе предметного фото</td>
              <td style={styles.tdAccent}><strong>~150–300 ₽</strong> (фон + lifestyle)</td>
              <td style={styles.tdAccent}><strong>10–20 минут</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Оптимальная схема для продавца с каталогом 50+ SKU: предметная съёмка в лайтбоксе
          самостоятельно плюс AI для lifestyle-сцен и сезонных вариантов. Итого: ~500–800 ₽
          за товар против 8 000+ в студии.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите попробовать AI-фоны для своих украшений?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Откройте Aiviso</Link>
            {" "}— загрузите предметное фото украшения, выберите сцену (мрамор, бархат, lifestyle)
            и получите готовый кадр 900×1200 за 2 минуты. 13 кредитов на старте — бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/kak-fotografirovat-odezhdu" style={{ color: "#7c3aed" }}>Как фотографировать одежду для маркетплейсов в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов: WB, Ozon, Яндекс.Маркет</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>7 ошибок с фото товара которые убивают конверсию</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

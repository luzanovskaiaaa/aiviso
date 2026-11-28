import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-фон для фото товара: генерация и модерация WB и Ozon — Aiviso",
  description:
    "Как сгенерировать AI-фон для карточки товара на Wildberries и Ozon, пройти модерацию и не получить бан. Пошаговый гайд, чек-лист 12 пунктов, кейсы.",
  keywords: [
    "ai фон для фото товара",
    "генерация фона для маркетплейса",
    "ai фото wildberries",
    "нейросеть фон товар",
    "замена фона ai",
    "ai карточка товара",
    "фон для карточки ozon",
    "aiviso генерация фото",
  ],
  alternates: { canonical: "/blog/ai-fon-dlya-foto-tovara" },
  openGraph: {
    title: "AI-фон для фото товара: как сгенерировать и пройти модерацию",
    description:
      "Пошаговый гайд по AI-генерации фонов для карточек WB и Ozon. Какие фоны работают лучше, 5 ошибок и чек-лист из 12 пунктов.",
    url: "/blog/ai-fon-dlya-foto-tovara",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI-фон для фото товара: как сгенерировать background и пройти модерацию WB и Ozon",
  description:
    "Как сгенерировать AI-фон для карточки товара, пройти модерацию Wildberries и Ozon и поднять CTR без пересъёмки.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/ai-fon-dlya-foto-tovara",
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
      name: "AI-фон для фото товара",
      item: "https://aiviso.ru/blog/ai-fon-dlya-foto-tovara",
    },
  ],
};

const styles = {
  h2: {
    fontSize: 24,
    fontWeight: 700,
    margin: "40px 0 12px",
    lineHeight: 1.3,
  } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: 14,
    margin: "16px 0",
  },
  th: {
    padding: "10px 12px",
    border: "1px solid #e5e7eb",
    textAlign: "left" as const,
    background: "#f9fafb",
  },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: {
    padding: "10px 12px",
    border: "1px solid #ddd6fe",
    background: "#f5f3ff",
  },
};

export default function AiFonDlyaFotoTovara() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
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
        <nav
          aria-label="Хлебные крошки"
          style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Главная
          </Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Блог
          </Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>AI-фон для фото товара</span>
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
          AI-фон для фото товара: как сгенерировать и пройти модерацию WB и Ozon
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>
          28 ноября 2026 · Aiviso
        </p>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "#374151",
            marginBottom: 32,
          }}
        >
          Поменять фон под конкретную сцену раньше означало новую съёмку. Теперь это
          занимает две минуты — AI генерирует фон прямо вокруг уже снятого товара. Но
          есть нюансы: не каждый сгенерированный фон пройдёт модерацию маркетплейса и
          не навредит выкупу.
        </p>

        <h2 style={styles.h2}>Зачем вообще менять фон через AI</h2>
        <p style={styles.p}>
          Белый фон — стандарт предметной съёмки. Wildberries и Ozon его требуют для
          первого слайда в большинстве категорий. Но уже со второго кадра правила мягче:
          lifestyle-сцена с правильным фоном напрямую влияет на конверсию.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «товары для дома» снял базовый набор кастрюль на
          белом фоне. CTR карточки был 2.1%. После того как через AI добавили второй слайд
          с кастрюлями на фоне светлой кухни, CTR вырос до 3.8% — без рекламы, только за
          счёт смены второго кадра. Это плюс 81% кликов при том же рекламном бюджете.
        </p>
        <p style={styles.p}>Когда AI-замена фона особенно полезна:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Сезонная адаптация.</strong> Зимой товар нужно поместить на снежный
            или уютный фон, летом — на яркий. Пересъёмка ради этого нерентабельна.
          </li>
          <li style={styles.li}>
            <strong>Тест нескольких сцен.</strong> Непонятно, работает ли лучше лесная
            поляна или городской лофт? Генерируем оба варианта за пять минут и тестируем.
          </li>
          <li style={styles.li}>
            <strong>Перенос между маркетплейсами.</strong> WB и Ozon требуют разный
            визуальный стиль. AI адаптирует фон под каждую площадку из одного исходного
            фото.
          </li>
          <li style={styles.li}>
            <strong>Большой каталог.</strong> При 50+ артикулах фотостудия для
            lifestyle-кадров стоит от 150 000 ₽. AI — в 30–50 раз дешевле.
          </li>
        </ul>

        <h2 style={styles.h2}>Как работает AI-генерация фона: три шага</h2>
        <p style={styles.p}>
          Принцип простой: AI вырезает товар из исходного фото (или получает его уже
          на белом фоне) и рисует вокруг него новую среду по текстовому описанию — промту.
        </p>

        <h3 style={styles.h3}>Шаг 1. Исходное фото товара</h3>
        <p style={styles.p}>
          Идеальный исходник — товар на нейтральном белом или светло-сером фоне, без
          резких теней, снятый при равномерном свете. Чем чище исходник, тем точнее AI
          вырежет силуэт и тем реалистичнее получится результат.
        </p>
        <p style={styles.p}>
          Если товар сфотографирован на пёстром фоне — не проблема: современные модели
          справляются и с этим, но качество вырезки будет ниже, и на краях могут остаться
          артефакты. Лучше один раз снять нормально, чем потом чистить каждый кадр.
        </p>

        <h3 style={styles.h3}>Шаг 2. Промт для фона</h3>
        <p style={styles.p}>
          Промт — текстовое описание сцены, которую нужно сгенерировать. Несколько
          рабочих формул:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            «светлая скандинавская кухня, деревянная столешница, мягкий дневной свет из
            окна» — для посуды и кухонных товаров
          </li>
          <li style={styles.li}>
            «современная ванная комната, белая плитка, флакон на мраморной полке» — для
            косметики и ухода
          </li>
          <li style={styles.li}>
            «минималистичный светлый интерьер, белая полка, нейтральный фон» — универсально
            для большинства категорий
          </li>
          <li style={styles.li}>
            «спортивная трасса в лесу, размытый зелёный фон, активный образ жизни» — для
            спортивных товаров
          </li>
        </ul>
        <p style={styles.p}>
          Ключевое правило: фон должен усиливать восприятие товара, а не конкурировать с
          ним. Если фон привлекает внимание больше товара — он неправильный.
        </p>

        <h3 style={styles.h3}>Шаг 3. Контроль качества и деталей</h3>
        <p style={styles.p}>
          После генерации нужно проверить три вещи: соответствие деталей товара оригиналу,
          качество краёв вырезки и реалистичность теней. AI иногда «дорисовывает» то чего
          нет — лишний карман, другой узор. Если это случилось, кадр нельзя загружать:
          несоответствие фото реальному товару — прямой путь к возвратам и жалобам.
        </p>
        <p style={styles.p}>
          В Aiviso этот шаг автоматизирован через QC-агента: он сравнивает результат с
          исходником и помечает расхождения до того, как фото уйдёт в скачивание.
        </p>

        <h2 style={styles.h2}>Какие фоны работают по категориям</h2>
        <p style={styles.p}>
          Универсальных решений нет — покупательское поведение в каждой категории разное.
          Вот что показывают данные по конверсии:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Фон, который работает</th>
              <th style={styles.th}>Чего избегать</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда и аксессуары</td>
              <td style={styles.td}>Нейтральный интерьер, улица, lifestyle с моделью</td>
              <td style={styles.td}>Слишком насыщенные цвета, которые перебивают товар</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и уход</td>
              <td style={styles.tdAccent}>Мрамор, светлая ванная, зелень и цветы</td>
              <td style={styles.td}>Тёмные тяжёлые фоны (кроме премиум-сегмента)</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника</td>
              <td style={styles.td}>Тёмный стол, стиль «рабочее место», нейтральный серый</td>
              <td style={styles.td}>Пёстрый или цветочный фон — смотрится непрофессионально</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома / кухня</td>
              <td style={styles.tdAccent}>Светлая кухня, столешница, семейная сцена</td>
              <td style={styles.td}>Абстрактные или студийные фоны без контекста</td>
            </tr>
            <tr>
              <td style={styles.td}>Спорт и активный отдых</td>
              <td style={styles.td}>Природа, трасса, активный фон с движением</td>
              <td style={styles.td}>Пустой белый или серый — не передаёт энергию</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.td}>Яркий, но аккуратный — детская комната, мягкий пастель</td>
              <td style={styles.td}>Агрессивные цвета и хаотичные фоны</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Пройдёт ли AI-фон модерацию на WB и Ozon</h2>
        <p style={styles.p}>
          Да, при соблюдении условий. Маркетплейсы не запрещают AI-генерацию — они
          проверяют соответствие фото правилам платформы и реальному товару. Вот что
          критично:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Первый слайд.</strong> На Wildberries — белый фон обязателен для большинства
            категорий. На Ozon допустим нейтральный светлый фон. AI-фон на первом слайде
            работает только там, где это явно разрешено категорийными правилами.
          </li>
          <li style={styles.li}>
            <strong>Соответствие товара.</strong> Если AI нарисовал товар другого цвета,
            добавил несуществующие детали или изменил форму — модерация отклонит или
            покупатель вернёт с жалобой. Это самый частый источник проблем.
          </li>
          <li style={styles.li}>
            <strong>Размеры.</strong> WB и Ozon требуют вертикальный формат 3:4 (900×1200 пикселей).
            Горизонтальные и квадратные кадры режутся при загрузке, что ломает кадрирование.
          </li>
          <li style={styles.li}>
            <strong>Водяные знаки и текст на фото.</strong> Если AI-сервис оставляет водяной
            знак — это гарантированный отказ при модерации.
          </li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «постельное бельё» загрузил 40 карточек с
          AI-фонами на OZon. Прошли все 40 — но два потом получили жалобы от покупателей
          из-за того что AI немного изменил оттенок принта. Итог: 2 возврата и 1 негативный
          отзыв. После добавления этапа QC в процесс — ноль жалоб за следующие 3 месяца.
        </p>

        <h2 style={styles.h2}>5 ошибок при генерации AI-фона</h2>
        <p style={styles.p}>
          Собрали самые частые проблемы, которые видим в карточках, присланных на разбор:
        </p>

        <h3 style={styles.h3}>Ошибка 1. Фон перекрывает товар</h3>
        <p style={styles.p}>
          Слишком детализированная сцена — много мебели, орнаменты, яркие объекты —
          визуально конкурирует с товаром. Правило: фон должен быть на 2–3 тона светлее
          и менее детализированным, чем товар. Фокус — на продукте.
        </p>

        <h3 style={styles.h3}>Ошибка 2. Несоответствие освещения</h3>
        <p style={styles.p}>
          Товар снят при боковом освещении — тени справа. AI нарисовал солнечный день
          со светом сверху. Результат выглядит неестественно: покупатель не осознаёт
          почему, но чувствует «что-то не так». Промт должен указывать направление света
          — «мягкий свет слева» — чтобы совпасть с исходным фото.
        </p>

        <h3 style={styles.h3}>Ошибка 3. Артефакты на краях товара</h3>
        <p style={styles.p}>
          Вокруг товара остаются белые или цветные пиксели от исходного фона — так
          называемый «ореол». Возникает когда исходник был плохим (пёстрый фон, размытые
          края). Решение: качественный исходник на белом фоне + постпроверка при 100%
          зуме.
        </p>

        <h3 style={styles.h3}>Ошибка 4. Генерация без контроля деталей</h3>
        <p style={styles.p}>
          Загрузить и сразу опубликовать — так делают многие. AI меняет цвет или добавляет
          детали в 10–15% случаев. Нужен ручной или автоматический QC-этап между
          генерацией и скачиванием.
        </p>

        <h3 style={styles.h3}>Ошибка 5. Один и тот же фон для всего каталога</h3>
        <p style={styles.p}>
          Скопировать промт на 50 товаров — соблазнительно, но одна кухонная сцена не
          подходит и для набора инструментов, и для детских игрушек. Категорийная
          релевантность фона влияет на конверсию — покупатель должен узнавать свой быт
          в кадре.
        </p>

        <h2 style={styles.h2}>Сколько стоит и насколько быстро</h2>
        <p style={styles.p}>
          Сравним три варианта получить lifestyle-кадр для одного артикула:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Способ</th>
              <th style={styles.th}>Цена за 1 кадр</th>
              <th style={styles.th}>Время</th>
              <th style={styles.th}>Масштабируемость</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Фотостудия (lifestyle)</td>
              <td style={styles.td}>3 000 – 15 000 ₽</td>
              <td style={styles.td}>3–10 дней</td>
              <td style={styles.td}>Сложно: логистика, реквизит, время</td>
            </tr>
            <tr>
              <td style={styles.td}>Фрилансер (редактор)</td>
              <td style={styles.td}>500 – 2 000 ₽</td>
              <td style={styles.td}>1–3 дня</td>
              <td style={styles.td}>Средне: очередь, переговоры</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>AI (Aiviso)</td>
              <td style={styles.tdAccent}><strong>30 – 150 ₽</strong></td>
              <td style={styles.tdAccent}><strong>2 минуты</strong></td>
              <td style={styles.tdAccent}><strong>Любой объём мгновенно</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Для каталога из 30 артикулов по 3 lifestyle-кадра: студия — от 270 000 ₽,
          AI — от 2 700 ₽. Экономия в 100 раз при сопоставимом результате для
          масс-маркета.
        </p>

        <h2 style={styles.h2}>Чек-лист: 12 пунктов перед загрузкой AI-фото на маркетплейс</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Первый слайд — белый фон (или нейтральный светлый там где разрешено категорией)
          </li>
          <li style={styles.li}>Формат 900×1200 пикселей (3:4), разрешение минимум 72 dpi</li>
          <li style={styles.li}>Нет водяных знаков, логотипов сторонних сервисов</li>
          <li style={styles.li}>Цвет товара совпадает с реальным — проверить при дневном свете</li>
          <li style={styles.li}>Все детали товара (замки, швы, принт, фурнитура) совпадают с оригиналом</li>
          <li style={styles.li}>Нет артефактов по краям — проверить при 100% зуме</li>
          <li style={styles.li}>Освещение на фоне и товаре выглядят как единое целое</li>
          <li style={styles.li}>Фон не перебивает товар — он светлее и менее детализированный</li>
          <li style={styles.li}>Сцена соответствует категории (кухня для посуды, спорт для инвентаря)</li>
          <li style={styles.li}>Нет текста, стикеров, посторонних объектов поверх товара</li>
          <li style={styles.li}>Файл сохранён в JPEG, качество 85–95%</li>
          <li style={styles.li}>Финальная проверка: покажи фото человеку и спроси «выглядит ли как реальный снимок?»</li>
        </ul>

        <h2 style={styles.h2}>Итого</h2>
        <p style={styles.p}>
          AI-генерация фонов — не замена нормальной фотографии товара, а инструмент,
          который даёт то, что раньше было доступно только крупным селлерам с бюджетом
          на фотостудию: разнообразие сцен, быстрая сезонная адаптация, A/B тест разных
          визуалов без дополнительных вложений.
        </p>
        <p style={styles.p}>
          Два условия для хорошего результата: качественный исходник (товар на белом фоне)
          и контроль деталей после генерации. Загружать без проверки — значит рисковать
          возвратами и жалобами, которые стоят дороже самой съёмки.
        </p>
        <p style={styles.p}>
          Если хотите разобрать свои кейсы — смотрите{" "}
          <Link href="/blog" style={{ color: "#7c3aed" }}>
            другие статьи блога
          </Link>{" "}
          или сразу переходите к практике в{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            кабинете Aiviso
          </Link>
          .
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: "#5b21b6" }}>
            Попробуйте AI-генерацию фона прямо сейчас
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 15, color: "#374151" }}>
            Загрузите фото товара на белом фоне — Aiviso сгенерирует lifestyle-сцену за
            2 минуты. 13 кредитов бесплатно на старте, без карты.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Начать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li>
            <Link href="/blog/ai-foto-pravila-marketpleysov" style={{ color: "#7c3aed" }}>
              Можно ли использовать AI-фото на WB и Ozon в 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/fony-dlya-kartochki-tovara" style={{ color: "#7c3aed" }}>
              Фоны и сцены для карточки товара: что реально работает
            </Link>
          </li>
          <li>
            <Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>
              CTR карточки на WB и Ozon: как измерить и поднять кликабельность
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "#7c3aed" }}>
              Главная страница Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

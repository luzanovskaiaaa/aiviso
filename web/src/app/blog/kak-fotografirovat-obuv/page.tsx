import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать обувь для маркетплейсов: гайд 2026 — Aiviso",
  description: "Освещение, ракурсы, фоны и обработка для кроссовок, туфель и ботинок на WB и Ozon. Чек-лист из 18 пунктов и кейс: CTR с 1.7% до 4.3% после пересъёмки.",
  keywords: [
    "как фотографировать обувь",
    "фото обуви для wildberries",
    "фото кроссовок для маркетплейса",
    "съёмка обуви ozon",
    "фотографировать туфли",
    "освещение для фото обуви",
    "кадры обуви для карточки",
    "ai фото обуви",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-obuv" },
  openGraph: {
    title: "Как фотографировать обувь для маркетплейсов: гайд 2026",
    description: "Освещение без бликов, правильные ракурсы и фоны для кроссовок, туфель и ботинок. Чек-лист из 18 пунктов и кейс: CTR с 1.7% до 4.3%.",
    url: "/blog/kak-fotografirovat-obuv",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать обувь для маркетплейсов: гайд 2026",
  description: "Освещение, ракурсы, фоны и обработка для кроссовок, туфель и ботинок на Wildberries и Ozon. Чек-лист из 18 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-25",
  dateModified: "2026-08-25",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-obuv",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Как фотографировать обувь", item: "https://aiviso.ru/blog/kak-fotografirovat-obuv" },
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

export default function KakFotografirovatObuv() {
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
          <span style={{ color: "#1f2937" }}>Как фотографировать обувь</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как фотографировать обувь для маркетплейсов: пошаговый гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>25 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Обувь — одна из самых сложных категорий для съёмки. Лаковые туфли дают блики,
          кожа ботинок теряет фактуру при плохом свете, а подошва кроссовок собирает пыль
          в каждую трещину. Разбираем, как снять обувь так, чтобы покупатель кликнул и не вернул.
        </p>

        <h2 style={styles.h2}>Почему обувь возвращают чаще всего</h2>
        <p style={styles.p}>
          На Wildberries и Ozon в категории «Обувь» процент возврата стабильно выше среднего —
          35–55% против 20–30% в большинстве других категорий. Причины делятся на две группы:
          несоответствие размера и несоответствие внешнего вида.
        </p>
        <p style={styles.p}>
          Если с размерами всё определяется размерной сеткой, то с внешним видом — это прямая
          работа фотографа (или AI). Покупатель ожидает тот цвет, тот блеск, ту текстуру,
          что видел на фото. Расхождение — возврат.
        </p>
        <p style={styles.p}>
          Один из наших клиентов, селлер женской обуви из Москвы, снизил процент возврата
          с 47% до 29% только за счёт переснятых карточек — без изменений в товаре и
          размерной сетке. Разница: правильная цветопередача и показ фактуры материала.
        </p>

        <h2 style={styles.h2}>Освещение: как избежать бликов на лаке и коже</h2>
        <p style={styles.p}>
          Главная проблема при съёмке обуви — блики. Особенно на лаковых туфлях, глянцевой
          подошве и металлических деталях (пряжки, заклёпки). Блики скрывают фактуру и
          выглядят как дефект.
        </p>

        <h3 style={styles.h3}>Схема света для матовой кожи и замши</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Рассеянный боковой свет под углом 45° — выявляет текстуру без пересветов</li>
          <li style={styles.li}>Второй источник сзади-сбоку — заполняет тени с противоположной стороны</li>
          <li style={styles.li}>Отражатель снизу или белый лист — убирает тёмную тень под подошвой</li>
          <li style={styles.li}>Мощность основного к заполняющему — 2:1 (например, 400 Дж : 200 Дж)</li>
        </ul>

        <h3 style={styles.h3}>Схема света для лаковой обуви</h3>
        <p style={styles.p}>
          Лак отражает всё что видит. Ставите свет напрямую — получаете белое пятно
          вместо туфли. Решение:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Съёмочный тент (лайтбокс) — обувь внутри, источник света снаружи через ткань</li>
          <li style={styles.li}>Флага из чёрного картона по бокам — блокируют нежелательные отражения</li>
          <li style={styles.li}>Поляризационный фильтр на объектив + поляризационная плёнка на источник — убирает зеркальные рефлексы</li>
          <li style={styles.li}>Матирующий спрей (временный) — наносится перед съёмкой, смывается. Радикально, но работает</li>
        </ul>

        <h3 style={styles.h3}>Если снимаете дома без оборудования</h3>
        <p style={styles.p}>
          Один большой источник дневного света (окно) + белый лист бумаги или фольга
          с противоположной стороны. Снимайте утром или в пасмурный день — прямое
          солнце даст жёсткие тени и блики.
        </p>

        <h2 style={styles.h2}>Ракурсы: какие кадры нужны в карточке обуви</h2>
        <p style={styles.p}>
          Покупатель обуви онлайн смотрит на: общий вид, носок, подошву, детали и внутренность.
          На WB рекомендуют 6–12 фото, на Ozon — 6–8. Вот минимальный набор:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Кадр</th>
              <th style={styles.th}>Что показывает</th>
              <th style={styles.th}>Обязателен</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>45° сбоку, носок вправо</td>
              <td style={styles.td}>Общая форма, силуэт — главное фото</td>
              <td style={styles.tdAccent}><strong>Да</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Вид сбоку (профиль)</td>
              <td style={styles.td}>Высота каблука, подъём, силуэт сбоку</td>
              <td style={styles.tdAccent}><strong>Да</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Вид спереди (носком к камере)</td>
              <td style={styles.td}>Ширина носка, форма мыска</td>
              <td style={styles.td}>Желательно</td>
            </tr>
            <tr>
              <td style={styles.td}>Вид сзади</td>
              <td style={styles.td}>Задник, молния/шнуровка сзади, лого</td>
              <td style={styles.td}>Желательно</td>
            </tr>
            <tr>
              <td style={styles.td}>Подошва снизу</td>
              <td style={styles.td}>Рисунок протектора, материал подошвы, брендинг</td>
              <td style={styles.tdAccent}><strong>Да</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Крупный план деталей</td>
              <td style={styles.td}>Пряжки, молния, шнуровка, стежки, текстура</td>
              <td style={styles.td}>Важно для кожи и дорогой обуви</td>
            </tr>
            <tr>
              <td style={styles.td}>Вид изнутри / стелька</td>
              <td style={styles.td}>Стелька, подкладка, размерная маркировка</td>
              <td style={styles.td}>Желательно</td>
            </tr>
            <tr>
              <td style={styles.td}>На ноге / lifestyle</td>
              <td style={styles.td}>Посадка, высота голенища, сочетание с одеждой</td>
              <td style={styles.td}>Сильно поднимает CTR</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Главное фото (первый слайд) должно быть <strong>45° сбоку с носком вправо</strong> —
          этот ракурс стал стандартом на всех маркетплейсах. Покупатель сразу видит
          форму, высоту каблука и общий силуэт. Фото «прямо в лоб» или «сверху» на
          первом слайде теряет до 30% кликов.
        </p>

        <h2 style={styles.h2}>Фоны: что работает по категориям</h2>

        <h3 style={styles.h3}>Спортивная обувь и кроссовки</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Белый фон</strong> — универсально, всегда проходит модерацию WB/Ozon</li>
          <li style={styles.li}><strong>Тёмно-серый или чёрный</strong> — для чёрно-серой обуви, создаёт контраст</li>
          <li style={styles.li}><strong>Lifestyle на асфальте или в спортзале</strong> — если есть second slide, сильно поднимает продажи в спортивных нишах</li>
        </ul>

        <h3 style={styles.h3}>Классические туфли и ботинки</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Белый или светло-серый</strong> — не отвлекает от деталей</li>
          <li style={styles.li}><strong>Деревянная поверхность</strong> — для ботинок и мужской обуви: создаёт ощущение качества</li>
          <li style={styles.li}><strong>Мрамор или плитка</strong> — для женских туфель, добавляет элегантность</li>
          <li style={styles.li}>Нейтральный текстурный фон — лён, бетон, камень</li>
        </ul>

        <h3 style={styles.h3}>Детская обувь</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Белый фон</strong> — основной</li>
          <li style={styles.li}><strong>Яркие пастельные фоны</strong> — голубой, мятный, жёлтый, для привлечения внимания в листинге</li>
          <li style={styles.li}><strong>На детской ноге</strong> — максимальный CTR, особенно для первых шагов</li>
        </ul>

        <h2 style={styles.h2}>Подготовка обуви к съёмке</h2>
        <p style={styles.p}>
          Это самая недооценённая часть. Можно купить профессиональный свет и всё равно
          сделать плохое фото — если обувь не подготовлена. Конкретный список:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Набивка носка</strong> — используйте мятую бумагу или специальные распорки. Обувь должна держать форму, носок не должен западать</li>
          <li style={styles.li}><strong>Чистка подошвы</strong> — ластик и спирт. Особенно важно для белой подошвы кроссовок</li>
          <li style={styles.li}><strong>Шнуровка</strong> — зашнуруйте аккуратно, симметрично. Кончики шнурков — внутрь или равномерно наружу</li>
          <li style={styles.li}><strong>Матирование глянца</strong> — если туфли дают сильный блик, сухой матирующий спрей на кожу (не замшу)</li>
          <li style={styles.li}><strong>Антистатик для замши</strong> — убирает катышки и поднимает ворс</li>
          <li style={styles.li}><strong>Протирка верха</strong> — влажная тряпка без разводов. Убрать все отпечатки пальцев</li>
          <li style={styles.li}><strong>Проверка симметрии</strong> — правый и левый ботинок смотрят в разные стороны для парного снимка</li>
        </ul>

        <h2 style={styles.h2}>Обработка: что делать в редакторе</h2>

        <h3 style={styles.h3}>Обязательная обработка</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Выравнивание баланса белого — цвет обуви должен совпадать с реальным</li>
          <li style={styles.li}>Удаление пыли и катышек — Clone Stamp / Healing Brush в Photoshop или аналог</li>
          <li style={styles.li}>Выбивание белого фона в чистый белый (#ffffff) — WB штрафует за серый или тёплый фон</li>
          <li style={styles.li}>Ресайз под формат WB (900×1200) и Ozon (900×1200) — оба 3:4, одинаковые размеры</li>
        </ul>

        <h3 style={styles.h3}>Недопустимо</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Менять цвет обуви в редакторе — это нарушение правил маркетплейсов и причина возвратов</li>
          <li style={styles.li}>Убирать дефекты которые есть на товаре — прошивка криво идёт на фото, значит она кривая в реале, это надо видеть покупателю</li>
          <li style={styles.li}>Добавлять детали которых нет — нарисованная пряжка, «улучшенный» протектор</li>
        </ul>

        <h2 style={styles.h2}>Кейс: CTR с 1.7% до 4.3% в категории «Ботинки мужские»</h2>
        <p style={styles.p}>
          Продавец мужских ботинок из Екатеринбурга обратился в Aiviso с проблемой:
          карточки висят на 3-й странице, CTR 1.7%, рекламный бюджет сливается. Товар
          нормальный — кожаные ботинки по 4 200 ₽, хорошая подошва. Проблема была в фото.
        </p>
        <p style={styles.p}>
          Что было в исходных карточках:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый слайд — вид сверху. Покупатель не видит каблук и форму</li>
          <li style={styles.li}>Серый фон вместо белого — WB понижал в поиске</li>
          <li style={styles.li}>Носок не набит — ботинок «сплющен», выглядит дешевле</li>
          <li style={styles.li}>Нет крупных планов кожи и подошвы</li>
          <li style={styles.li}>Стелька и внутренность — не показаны</li>
        </ul>
        <p style={styles.p}>
          Что сделали: пересняли 6 артикулов с нуля — правильный ракурс 45°, белый фон,
          набитый носок, 8 кадров на артикул включая подошву и крупный план стежков.
          AI через Aiviso добавил lifestyle-кадр «ботинок на деревянном полу».
        </p>
        <p style={styles.p}>
          Результат через 3 недели: CTR вырос с 1.7% до 4.3%. Позиция в поиске поднялась
          с 3-й страницы на первую по запросу «ботинки мужские кожаные». Рекламный бюджет
          сократили вдвое — органики хватало.
        </p>

        <h2 style={styles.h2}>AI-генерация для обуви: когда это работает</h2>
        <p style={styles.p}>
          AI хорошо справляется с фоновыми сценами для обуви. Если у вас есть чистое
          предметное фото ботинка или кроссовки, AI может «поставить» его:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>На деревянный пол или паркет — lifestyle для мужской классики</li>
          <li style={styles.li}>На асфальт с размытым городом — lifestyle для кроссовок</li>
          <li style={styles.li}>На зимнем снегу — сезонный кадр для зимней обуви</li>
          <li style={styles.li}>На мраморе — для женских туфель</li>
          <li style={styles.li}>В интерьере — прихожая, гардеробная</li>
        </ul>
        <p style={styles.p}>
          Важно: AI не меняет саму обувь — форму, цвет, детали. Он только добавляет фон
          и окружение. Это значит, что для начала всё равно нужно предметное фото
          хорошего качества. Без него AI не поможет.
        </p>
        <p style={styles.p}>
          Кейс по AI: селлер летней обуви снял каждый артикул один раз на белом фоне.
          Из этих фотографий AI сгенерировал lifestyle-версии — «на пляже», «на набережной»,
          «на траве». Карточки с lifestyle-вторым слайдом показали CTR на 40% выше,
          чем карточки только с белым фоном. Стоимость — 30 ₽ за кадр против 2 500 ₽
          за выезд фотографа на натуру.
        </p>

        <h2 style={styles.h2}>Чек-лист: 18 пунктов перед загрузкой фото обуви</h2>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16, padding: "20px 24px", marginTop: 16 }}>
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "#5b21b6" }}>Подготовка</p>
          <ul style={{ ...styles.ul, marginBottom: 16 }}>
            <li style={styles.li}>Носок плотно набит, форма держится</li>
            <li style={styles.li}>Подошва чистая, без пыли и разводов</li>
            <li style={styles.li}>Шнуровка аккуратная, кончики убраны</li>
            <li style={styles.li}>Кожа протёрта, нет отпечатков</li>
            <li style={styles.li}>Замша расчёсана антистатиком</li>
          </ul>
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "#5b21b6" }}>Съёмка</p>
          <ul style={{ ...styles.ul, marginBottom: 16 }}>
            <li style={styles.li}>Первый кадр — 45° сбоку, носок вправо</li>
            <li style={styles.li}>Есть кадр профиля (вид сбоку)</li>
            <li style={styles.li}>Есть кадр подошвы снизу</li>
            <li style={styles.li}>Есть крупный план ключевой детали (шов, пряжка, протектор)</li>
            <li style={styles.li}>Есть кадр стельки или внутренности</li>
            <li style={styles.li}>Нет жёстких бликов на коже/лаке</li>
            <li style={styles.li}>Фон белый или нейтральный без градиентов</li>
          </ul>
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "#5b21b6" }}>Обработка</p>
          <ul style={{ ...styles.ul, marginBottom: 0 }}>
            <li style={styles.li}>Баланс белого выровнен — цвет совпадает с реальным</li>
            <li style={styles.li}>Убраны пыль и катышки</li>
            <li style={styles.li}>Фон выбит в чистый белый #ffffff</li>
            <li style={styles.li}>Размер 900×1200 (3:4), вес до 5 МБ для WB</li>
            <li style={styles.li}>Цвет не изменён, детали не дорисованы</li>
            <li style={styles.li}>Есть минимум 6 кадров в карточке</li>
          </ul>
        </div>

        <h2 style={styles.h2}>Частые ошибки и как их избежать</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Обувь стоит без набивки</strong> — выглядит дряблой и дешёвой. Всегда набивайте перед съёмкой</li>
          <li style={styles.li}><strong>Серый или бежевый фон</strong> — WB занижает такие карточки в поиске. Только белый (#ffffff) или оговорённые цветные фоны</li>
          <li style={styles.li}><strong>Только один ракурс</strong> — покупатель не видит подошву, боится купить. Минимум 6 кадров</li>
          <li style={styles.li}><strong>Съёмка правого ботинка без левого</strong> — правый и левый вместе дают ощущение пары. Одиночный ботинок выглядит как демо, не товар</li>
          <li style={styles.li}><strong>Пересвет белой обуви</strong> — белые кроссовки на белом фоне сливаются. Нужна тень или лёгкий контурный свет</li>
          <li style={styles.li}><strong>Неправильная цветопередача</strong> — чёрная обувь уходит в зелёный или синий при тёплом свете. Проверяйте WB на нейтральной серой карточке</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 8px", fontWeight: 700, color: "#5b21b6", fontSize: 17 }}>
            Нужен lifestyle для обуви — без выезда фотографа?
          </p>
          <p style={{ margin: "0 0 16px", color: "#374151", fontSize: 15 }}>
            Загрузите предметное фото в{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>
            {" "}— AI добавит сцену, сохранит цвет и детали, выдаст готовый кадр в 900×1200.
            13 кредитов на старте бесплатно.
          </p>
          <Link
            href="/app"
            style={{ display: "inline-block", background: "#7c3aed", color: "white", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 15 }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/kak-fotografirovat-odezhdu" style={{ color: "#7c3aed" }}>
              Как фотографировать одежду для маркетплейсов
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/kak-fotografirovat-ukrasheniya" style={{ color: "#7c3aed" }}>
              Как фотографировать украшения и бижутерию
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              Главное фото карточки: 8 правил первого слайда
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>
              Возвраты на WB и Ozon: при чём здесь фото
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

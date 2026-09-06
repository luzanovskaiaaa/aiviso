import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать продукты питания для маркетплейсов — Aiviso",
  description:
    "Освещение, ракурсы, подача и обработка для еды и продовольственных товаров на WB и Ozon. Чек-лист из 20 пунктов и кейс: CTR с 2.3% до 5.1% после пересъёмки.",
  keywords: [
    "фото продуктов питания для маркетплейса",
    "как фотографировать еду для wildberries",
    "съёмка продовольственных товаров ozon",
    "фуд-фотография маркетплейс",
    "карточка товара продукты питания",
    "фото еды для wb",
    "AI фото продукты маркетплейс",
    "чек-лист съёмка продуктов",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-produkty-pitaniya" },
  openGraph: {
    title: "Как фотографировать продукты питания для WB и Ozon в 2026",
    description:
      "Освещение, ракурсы, подача и обработка. Чек-лист из 20 пунктов и кейс: CTR с 2.3% до 5.1% после пересъёмки.",
    url: "/blog/kak-fotografirovat-produkty-pitaniya",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать продукты питания для маркетплейсов: гайд 2026",
  description:
    "Освещение, ракурсы, подача и обработка для еды и продовольственных товаров на Wildberries и Ozon. Чек-лист из 20 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-06",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-produkty-pitaniya",
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
      name: "Как фотографировать продукты питания",
      item: "https://aiviso.ru/blog/kak-fotografirovat-produkty-pitaniya",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "28px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function KakFotografirovatProduktyPitaniya() {
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
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Главная
          </Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Блог
          </Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Как фотографировать продукты питания</span>
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
          Как фотографировать продукты питания для маркетплейсов: гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>6 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Продукты питания — одна из самых быстрорастущих категорий на Wildberries и Ozon в 2026
          году. Покупатель не может попробовать товар на ощупь или понюхать — он принимает решение
          только по фото. Один наш клиент, продающий крафтовые сыры в категории
          «Молочная продукция», поднял CTR с 2.3% до 5.1% и конверсию с 3.8% до 6.2% после полной
          пересъёмки карточки по правилам из этого гайда — без изменения цены и описания.
        </p>

        <h2 style={styles.h2}>Чем продовольственные товары отличаются от других категорий</h2>
        <p style={styles.p}>
          Съёмка еды — это отдельная дисциплина. Ошибки, которые простительны для электроники или
          одежды, в продуктах питания убивают карточку моментально. Три главных отличия:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Текстура решает всё.</strong> Покупатель оценивает свежесть, качество и
            натуральность по тому, как выглядит поверхность. Матовый сыр, глянец клубники, хрустящая
            корочка хлеба — это не детали, это причина купить.
          </li>
          <li style={styles.li}>
            <strong>Требования маркетплейсов жёстче.</strong> WB и Ozon запрещают вводящий в
            заблуждение монтаж. Если на фото порция выглядит больше реальной, это нарушение — и
            возврат от покупателя «не соответствует фото».
          </li>
          <li style={styles.li}>
            <strong>Упаковка и продукт — два разных кадра.</strong> Покупателю нужно видеть и то, в
            чём он получит товар, и то, что внутри. Кадр только упаковки — это каталог склада, не
            продающая карточка.
          </li>
        </ul>
        <p style={styles.p}>
          На Wildberries в 2025–2026 году в категории «Продукты питания» средняя карточка имеет 4–6
          фотографий. Карточки с 8–10 фото получают на 34% больше кликов — данные из внутренней
          аналитики WB, на которые ссылаются крупные агрегаторы.
        </p>

        <h2 style={styles.h2}>Освещение: как снять еду без потери аппетитности</h2>
        <p style={styles.p}>
          Главный враг еды в кадре — жёсткий прямой свет. Он даёт резкие тени, смывает текстуру и
          делает продукт плоским. Правило: мягкий рассеянный свет с одной стороны плюс отражатель с
          противоположной.
        </p>

        <h3 style={styles.h3}>Натуральный свет из окна</h3>
        <p style={styles.p}>
          Боковой свет из большого окна — лучшее решение для большинства продуктов. Расположите
          товар в 40–80 см от окна, перпендикулярно к нему. Если свет слишком контрастный — повесьте
          полупрозрачную белую занавеску или матовую плёнку. Со стороны, противоположной окну,
          поставьте белый пенопластовый лист или свёрнутое белое полотенце — отражатель убирает
          тёмную тень.
        </p>
        <p style={styles.p}>
          Съёмка у окна бесплатна и даёт естественный «живой» вид. Минус — зависит от погоды и
          времени суток. Оптимальное время: 10:00–14:00 в пасмурный день или при прямом солнце, но с
          занавеской.
        </p>

        <h3 style={styles.h3}>Искусственный свет для стабильного результата</h3>
        <p style={styles.p}>
          Для регулярной съёмки нужны два источника: основной (большой софтбокс 50×70 см или больше)
          под углом 45° и заполняющий (меньший или отражатель). Температура света — 5500–6000K
          (дневной белый). Тёплый свет 3200K делает продукты «жёлтыми» и лишает их свежести.
        </p>
        <p style={styles.p}>
          Базовый комплект для домашней студии: два LED-панели по 3 000–5 000 ₽ каждая + белые
          отражатели. Окупается за 2–3 съёмки по сравнению с арендой студии.
        </p>

        <h2 style={styles.h2}>Ракурсы и композиция: что работает по категориям</h2>
        <p style={styles.p}>
          Разные продукты требуют разных ракурсов. Нет универсального «правильного» угла — есть
          угол, который лучше всего передаёт ценность конкретного товара.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Основной ракурс</th>
              <th style={styles.th}>Почему</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Сыры, колбасы, мясо</td>
              <td style={styles.tdAccent}>45° сверху + боковой</td>
              <td style={styles.td}>Видна текстура среза</td>
            </tr>
            <tr>
              <td style={styles.td}>Фрукты, ягоды, овощи</td>
              <td style={styles.td}>Прямо сверху (flat lay)</td>
              <td style={styles.td}>Цвет и форма читаются сразу</td>
            </tr>
            <tr>
              <td style={styles.td}>Напитки, соки, масла</td>
              <td style={styles.td}>Прямо сбоку (90°)</td>
              <td style={styles.td}>Видна прозрачность, цвет</td>
            </tr>
            <tr>
              <td style={styles.td}>Выпечка, торты, десерты</td>
              <td style={styles.td}>30–45° сбоку</td>
              <td style={styles.td}>Передаёт высоту и слои</td>
            </tr>
            <tr>
              <td style={styles.td}>Крупы, орехи, специи</td>
              <td style={styles.tdAccent}>Прямо сверху + «рассыпанные»</td>
              <td style={styles.td}>Показывает качество зерна</td>
            </tr>
            <tr>
              <td style={styles.td}>Консервы, соусы в банке</td>
              <td style={styles.td}>Прямо сбоку + этикетка чётко</td>
              <td style={styles.td}>Этикетка — главный носитель инфо</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Крупный план — обязательный кадр для продуктов</h3>
        <p style={styles.p}>
          Один из слайдов карточки всегда должен быть макро-кадром: текстура крема, срез ягоды,
          зёрна кофе крупно. Это кадр, который убеждает «выглядит хорошо, хочу попробовать». Без
          него покупатель не уверен в качестве.
        </p>
        <p style={styles.p}>
          Снимать макро можно на смартфон с режимом Portrait или через дополнительный макро-объектив
          (от 500 ₽ на Ozon). На зеркалку или беззеркалку — макро-объектив 50–100mm дает идеальную
          детализацию.
        </p>

        <h2 style={styles.h2}>Фоны и реквизит: не перегружать, не упрощать</h2>
        <p style={styles.p}>
          Белый фон — стандарт для первого слайда на большинстве маркетплейсов. Но только белым
          карточку не сделать конкурентоспособной. Правило: первый слайд — белый или нейтральный
          (кремовый, светло-серый), остальные — lifestyle или текстурный.
        </p>

        <h3 style={styles.h3}>Что использовать как фон</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Белый пластиковый лист или ПВХ-панель</strong> — чистый белый без бликов.
            Стоимость: 300–500 ₽ в любом строительном магазине. Моется, не мнётся.
          </li>
          <li style={styles.li}>
            <strong>Деревянные поверхности (разделочные доски, столешницы)</strong> — создают
            ощущение домашнего, натурального продукта. Работает для крафтовых и органических товаров.
          </li>
          <li style={styles.li}>
            <strong>Мрамор и сланец</strong> — для премиум-позиционирования (сыры, шоколад, вино).
            Плитки от 400–700 ₽/штука в строительных магазинах.
          </li>
          <li style={styles.li}>
            <strong>Льняная ткань или крафт-бумага</strong> — для фермерских и экологичных товаров.
          </li>
        </ul>

        <h3 style={styles.h3}>Реквизит: правило «меньше — лучше»</h3>
        <p style={styles.p}>
          Типичная ошибка — загромождать кадр «для атмосферы». Веточки, листья, специи вокруг,
          красивая ложка — всё это переключает внимание с товара. Максимум 1–2 элемента реквизита,
          которые дополняют продукт: кусочек хлеба рядом с сыром, дольки цитруса рядом с соусом.
        </p>

        <h2 style={styles.h2}>Подготовка товара к съёмке</h2>
        <p style={styles.p}>
          Еда в кадре должна выглядеть максимально свежей и аппетитной. Несколько приёмов, которые
          используют фуд-фотографы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Свежесть перед съёмкой.</strong> Фрукты и овощи достать из холодильника за
            30–60 минут, протереть влажной тряпкой — конденсат создаёт «живой» блеск.
          </li>
          <li style={styles.li}>
            <strong>Подсолнечное или оливковое масло кисточкой</strong> — на мясо, сыр, хлебную
            корочку. Даёт блеск «только из духовки» без изменения состава. Важно: только если это
            не создаёт ложного впечатления о товаре.
          </li>
          <li style={styles.li}>
            <strong>Расставить «правильный» срез.</strong> Если показываете срез (сыр, колбаса,
            торт) — выбирайте ровный, чистый кусок без трещин и заминов. Несимметричный срез
            смотрится небрежно.
          </li>
          <li style={styles.li}>
            <strong>Упаковку протереть и расправить.</strong> Смятая упаковка, пыль, жирные следы —
            всё это видит покупатель и делает вывод о качестве хранения.
          </li>
          <li style={styles.li}>
            <strong>Порционность показать честно.</strong> Если продаёте 250 г — снимайте именно
            250 г, а не полкило для «красивого» кадра. Несоответствие объёма — причина возвратов и
            плохих отзывов.
          </li>
        </ul>

        <h2 style={styles.h2}>Обработка: что делать в редакторе и чего не делать</h2>
        <p style={styles.p}>
          Для продуктов питания цветокоррекция особенно важна — и особенно опасна. Задача: сделать
          товар максимально похожим на реальный, только в лучший день.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Можно:</strong> выровнять экспозицию и баланс белого, немного поднять
            насыщенность (Saturation +10–20%), убрать тень в светлые тона, убрать пыль и случайные
            пятна.
          </li>
          <li style={styles.li}>
            <strong>Нельзя:</strong> менять цвет продукта (красную клубнику сделать ярче, чем она
            есть — нарушение правил WB), убирать «неаппетитные» элементы которые есть в реальности,
            добавлять элементы которых нет в составе (кусочки фруктов в йогурте без фруктов).
          </li>
          <li style={styles.li}>
            <strong>Размер изображения:</strong> минимум 900×1200 px для WB и Ozon (соотношение
            3:4). Подробнее о{" "}
            <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
              размерах фото для маркетплейсов
            </Link>{" "}
            — в отдельном гайде.
          </li>
        </ul>

        <h2 style={styles.h2}>Когда использовать AI-генерацию для продуктов питания</h2>
        <p style={styles.p}>
          AI-фото для еды — тема, которую многие обходят стороной. Но в реальности AI хорошо
          закрывает несколько задач:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Lifestyle-сцены вокруг упаковки.</strong> Реальная упаковка снята на белом фоне,
            AI помещает её на деревянный стол с чашкой кофе, на пикник, в интерьер кухни. Упаковка
            остаётся настоящей — только фон и сцена генерируются.
          </li>
          <li style={styles.li}>
            <strong>Сезонные вариации.</strong> Один продукт — три кадра: летняя сцена, осенняя,
            новогодняя. AI делает это за минуты без переснятия.
          </li>
          <li style={styles.li}>
            <strong>Инфографика с продуктом.</strong>{" "}
            <Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>
              Правила инфографики для маркетплейса
            </Link>{" "}
            те же — AI помогает совместить фото товара с текстовыми блоками «без консервантов»,
            «100% натуральный состав» и подобными.
          </li>
        </ul>
        <p style={styles.p}>
          Что AI не заменяет для еды: крупный план текстуры реального продукта (нужна настоящая
          макро-съёмка), срез с реальной консистенцией, кадры где важен именно оттенок цвета
          (цвет масла, оттенок мёда). Здесь оригинальная предметка обязательна.
        </p>
        <p style={styles.p}>
          Попробовать AI-генерацию lifestyle-сцен для своей упаковки можно в{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            личном кабинете Aiviso
          </Link>{" "}
          — загружаете фото упаковки, указываете сцену, получаете готовый кадр за 2 минуты.
        </p>

        <h2 style={styles.h2}>Чек-лист: 20 пунктов перед публикацией карточки продукта</h2>

        <h3 style={styles.h3}>Подготовка</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар свежий, без повреждений и следов хранения</li>
          <li style={styles.li}>Упаковка чистая, этикетка не помята, штрихкод читается</li>
          <li style={styles.li}>Реквизит подобран (не более 2 дополнительных элементов)</li>
          <li style={styles.li}>Фон выбран и чистый (без пятен, пыли, лишних предметов)</li>
        </ul>

        <h3 style={styles.h3}>Съёмка</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Освещение рассеянное, без жёстких теней</li>
          <li style={styles.li}>Снят первый слайд: упаковка целиком на белом или нейтральном фоне</li>
          <li style={styles.li}>Снят lifestyle-кадр: продукт в контексте использования</li>
          <li style={styles.li}>Снят макро-кадр: текстура или крупный план ключевого элемента</li>
          <li style={styles.li}>Снят кадр среза или содержимого (если применимо)</li>
          <li style={styles.li}>Снят кадр упаковки сзади с составом и КБЖУ (если это еда)</li>
          <li style={styles.li}>Всего слайдов: 6–10</li>
        </ul>

        <h3 style={styles.h3}>Обработка</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Баланс белого откорректирован, нет синевы или желтизны</li>
          <li style={styles.li}>Цвет продукта соответствует реальному</li>
          <li style={styles.li}>Убраны пыль, пятна, случайные предметы</li>
          <li style={styles.li}>Размер: 900×1200 px (3:4), минимум 72 dpi</li>
          <li style={styles.li}>Формат: JPG, без прозрачности</li>
        </ul>

        <h3 style={styles.h3}>Соответствие правилам маркетплейса</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый слайд — только товар, без текста и логотипа (WB)</li>
          <li style={styles.li}>Фото не создаёт ложного впечатления о составе или объёме</li>
          <li style={styles.li}>Срок годности не истёк к моменту публикации</li>
          <li style={styles.li}>На Ozon: проверен Rich-контент с КБЖУ и составом если требуется</li>
          <li style={styles.li}>Соответствие реальному товару проверено визуально</li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки и как их избежать</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ошибка</th>
              <th style={styles.th}>Что происходит</th>
              <th style={styles.th}>Решение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Только фото упаковки</td>
              <td style={styles.td}>Покупатель не видит содержимое, сомневается</td>
              <td style={styles.tdAccent}>Добавить кадр с открытой/разрезанной упаковкой</td>
            </tr>
            <tr>
              <td style={styles.td}>Жёлтый или синий цвет</td>
              <td style={styles.td}>Выглядит несвежим, покупатель уходит</td>
              <td style={styles.td}>Баланс белого 5500K, не тёплый свет</td>
            </tr>
            <tr>
              <td style={styles.td}>Большая порция на фото, маленькая в реале</td>
              <td style={styles.td}>Возврат «не соответствует», плохой отзыв</td>
              <td style={styles.td}>Показывать реальный объём, честно</td>
            </tr>
            <tr>
              <td style={styles.td}>Смятая, запылённая упаковка</td>
              <td style={styles.td}>Впечатление о плохом хранении</td>
              <td style={styles.td}>Протереть, расправить перед съёмкой</td>
            </tr>
            <tr>
              <td style={styles.td}>1–2 фото в карточке</td>
              <td style={styles.td}>CTR ниже на 30–40% vs 8–10 фото</td>
              <td style={styles.td}>Минимум 6 слайдов: упаковка, срез, macro, lifestyle, состав</td>
            </tr>
            <tr>
              <td style={styles.td}>Перегруженный реквизит</td>
              <td style={styles.td}>Покупатель не понимает что продаётся</td>
              <td style={styles.td}>Максимум 2 дополнительных элемента</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "#5b21b6", fontSize: 17 }}>
            Хотите lifestyle-сцены для своих продуктов без фотостудии?
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Загрузите фото упаковки в Aiviso — AI создаст кадры в нужной сцене за 2 минуты.
            Готово для WB и Ozon в формате 900×1200. Первые 13 кредитов бесплатно.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              padding: "12px 24px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>
            <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
              Размеры фото для маркетплейсов в 2026: WB, Ozon, Яндекс.Маркет
            </Link>
          </li>
          <li>
            <Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>
              Инфографика для карточки Wildberries и Ozon: что писать и как оформить
            </Link>
          </li>
          <li>
            <Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>
              AI vs фотограф: что выгоднее для карточки на маркетплейсе
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

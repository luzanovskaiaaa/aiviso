import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Упаковка товара для WB и Ozon: требования и штрафы 2026 — Aiviso",
  description:
    "Требования к упаковке на Wildberries и Ozon в 2026: маркировка, штрихкод, полиэтилен, штрафы. Чек-лист из 18 пунктов и реальные кейсы по экономии.",
  keywords: [
    "упаковка товара wildberries",
    "упаковка для ozon",
    "требования к упаковке маркетплейс",
    "штрафы wildberries упаковка",
    "маркировка товара wb ozon",
    "как упаковать товар для wildberries",
    "fbo упаковка ozon",
    "штрихкод на упаковку",
  ],
  alternates: { canonical: "/blog/upakovka-tovara-marketpleis" },
  openGraph: {
    title: "Упаковка для WB и Ozon: требования, штрафы, чек-лист 2026",
    description:
      "Полный гайд по упаковке товаров для Wildberries и Ozon. За что штрафуют, что обязательно, как не потерять деньги.",
    url: "/blog/upakovka-tovara-marketpleis",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Упаковка товара для Wildberries и Ozon: требования, штрафы и чек-лист 2026",
  description:
    "Требования к упаковке на WB и Ozon, за что штрафуют и как правильно маркировать товар. Чек-лист из 18 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/upakovka-tovara-marketpleis",
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
      name: "Упаковка товара для маркетплейсов",
      item: "https://aiviso.ru/blog/upakovka-tovara-marketpleis",
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
  tdWarn: { padding: "10px 12px", border: "1px solid #fde68a", background: "#fffbeb" },
  tdError: { padding: "10px 12px", border: "1px solid #fecaca", background: "#fef2f2" },
};

export default function UpakovkaTovaraMarketpleis() {
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
          <span style={{ color: "#1f2937" }}>Упаковка товара для маркетплейсов</span>
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
          Упаковка товара для Wildberries и Ozon: требования, штрафы и чек-лист 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>28 июня 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Упаковка — это первое, за что маркетплейс может оштрафовать ещё до того, как покупатель увидит
          товар. Один селлер из Екатеринбурга потерял 47 000 ₽ за месяц только на штрафах WB за
          неправильную маркировку — при том, что продавал обычные кухонные полотенца. Разберём требования
          обеих площадок и что конкретно нужно сделать.
        </p>

        <h2 style={styles.h2}>Почему упаковка напрямую влияет на прибыль</h2>
        <p style={styles.p}>
          Неправильная упаковка бьёт по кошельку сразу с трёх сторон: штрафы от маркетплейса,
          возвраты от покупателей и потеря рейтинга магазина. На WB штрафы за упаковку стали жёстче
          с 2025 года — площадка автоматически списывает деньги при приёмке, если приёмщик нашёл нарушение.
        </p>
        <p style={styles.p}>
          Кроме штрафов: плохая упаковка повреждает товар при доставке. Один поцарапанный телефонный
          чехол — это возврат, минус отзыв, минус рейтинг. При рейтинге ниже 4.0 на WB карточка
          вываливается из выдачи.
        </p>
        <p style={styles.p}>
          Есть и обратная сторона: правильная упаковка с хорошим брендингом увеличивает вероятность
          повторной покупки. По данным исследования Nielsen 2025 года, 64% покупателей онлайн-магазинов
          запоминают красивую упаковку и чаще возвращаются к продавцу.
        </p>

        <h2 style={styles.h2}>Требования Wildberries к упаковке в 2026</h2>

        <h3 style={styles.h3}>Маркировка и штрихкоды</h3>
        <p style={styles.p}>
          На каждую единицу товара должен быть наклеен штрихкод (баркод) — ШК товара или ШК поставки.
          Это не просто рекомендация: без читаемого штрихкода приёмщик откажет в приёмке или примет
          товар «с расхождением», что создаёт проблемы в учёте.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Штрихкод должен читаться сканером — не мятый, не под скотчем, не на сгибе коробки.
          </li>
          <li style={styles.li}>
            Размер: минимум 22×35 мм, рекомендуется 57×40 мм — так меньше ошибок сканирования.
          </li>
          <li style={styles.li}>
            На хрупкие товары и товары в наборе клеим штрихкод на каждую единицу, а не на общую
            коробку набора.
          </li>
          <li style={styles.li}>
            Для товаров подлежащих обязательной маркировке («Честный знак»): QR-код «Честного знака»
            должен быть виден без разворачивания упаковки.
          </li>
        </ul>

        <h3 style={styles.h3}>Материалы и упаковочные требования</h3>
        <p style={styles.p}>
          WB разрешает: полиэтиленовые пакеты, картонные коробки, zip-пакеты, воздушно-пузырчатую плёнку.
          Запрещено: упаковка, которая может навредить другим товарам на складе (торчащие острые элементы,
          рассыпающийся наполнитель без фиксации).
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Одежда, мягкие игрушки, постельное бельё — упаковывать в герметичный полиэтиленовый пакет.
            Пакет без застёжки — завязать или запаять термосварочником.
          </li>
          <li style={styles.li}>
            Хрупкие товары (стекло, керамика) — пузырчатая плёнка минимум в 2 слоя + картонная коробка
            с тампонажным наполнителем. Зазор между товаром и стенкой коробки — от 3 см.
          </li>
          <li style={styles.li}>
            Жидкости — двойная упаковка: основная ёмкость + герметичный пакет снаружи.
          </li>
          <li style={styles.li}>
            Комплекты товаров — весь набор в одной упаковке, не в отдельных пакетах, иначе приёмщик
            примет как отдельные SKU.
          </li>
        </ul>

        <h2 style={styles.h2}>Требования Ozon к упаковке в 2026</h2>

        <h3 style={styles.h3}>FBO vs FBS: разные правила</h3>
        <p style={styles.p}>
          На Ozon упаковка зависит от схемы работы.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>FBO (склад Ozon)</th>
              <th style={styles.th}>FBS (со своего склада)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Штрихкод</td>
              <td style={styles.td}>Ozon-баркод на каждой единице</td>
              <td style={styles.td}>Ozon-баркод + маркировка заказа</td>
            </tr>
            <tr>
              <td style={styles.td}>Внешняя упаковка</td>
              <td style={styles.td}>Прозрачный пакет или коробка</td>
              <td style={styles.td}>Коробка или пакет с наклейкой заказа</td>
            </tr>
            <tr>
              <td style={styles.td}>Наполнитель</td>
              <td style={styles.td}>На усмотрение продавца</td>
              <td style={styles.td}>Обязателен для хрупких товаров</td>
            </tr>
            <tr>
              <td style={styles.td}>Ответственность за повреждение</td>
              <td style={styles.td}>Ozon (если упаковал правильно)</td>
              <td style={styles.td}>Продавец до момента передачи</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Хрупкие товары на Ozon</h3>
        <p style={styles.p}>
          Ozon строже WB в отношении хрупких товаров. Если вы сдаёте на FBO: коробка должна выдерживать
          падение с высоты 1.2 метра без деформации содержимого. Это реальный тест — Ozon его проводит
          выборочно при приёмке. Продавец посуды из Краснодара рассказывал, что после серии возвратов
          переупаковал тарелки в двойную гофру с пенным вкладышем — процент боя упал с 12% до 1.4%.
        </p>

        <h2 style={styles.h2}>За что штрафуют на WB и Ozon: конкретные суммы</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Нарушение</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Нечитаемый штрихкод</td>
              <td style={styles.tdWarn}>100 ₽ за единицу</td>
              <td style={styles.tdWarn}>Возврат поставки</td>
            </tr>
            <tr>
              <td style={styles.td}>Отсутствие штрихкода</td>
              <td style={styles.tdError}>200–500 ₽ за единицу</td>
              <td style={styles.tdError}>Отказ в приёмке</td>
            </tr>
            <tr>
              <td style={styles.td}>Неправильная упаковка хрупкого</td>
              <td style={styles.tdWarn}>Стоимость утери + 50%</td>
              <td style={styles.tdWarn}>Стоимость товара</td>
            </tr>
            <tr>
              <td style={styles.td}>Отсутствие маркировки «Честный знак»</td>
              <td style={styles.tdError}>Штраф + изъятие партии</td>
              <td style={styles.tdError}>Штраф + изъятие партии</td>
            </tr>
            <tr>
              <td style={styles.td}>Несоответствие упаковки заявленной</td>
              <td style={styles.td}>Возврат в регион отправки за счёт продавца</td>
              <td style={styles.td}>Возврат за счёт продавца</td>
            </tr>
            <tr>
              <td style={styles.td}>Жидкость без двойной упаковки</td>
              <td style={styles.tdError}>Отказ в приёмке + плата за хранение</td>
              <td style={styles.tdError}>Отказ в приёмке</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Важно: штрафы WB списываются автоматически при следующей выплате. Многие селлеры замечают
          это только через 2–3 недели, когда сумма уже накопилась.
        </p>

        <h2 style={styles.h2}>Как правильно наносить штрихкод</h2>
        <p style={styles.p}>
          Это самая частая ошибка — штрихкод есть, но его не читают. Вот что проверить:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Контраст.</strong> Чёрные полосы на белом фоне. Не печатать на цветной бумаге или
            глянцевом материале — блик не даст сканеру прочитать код.
          </li>
          <li style={styles.li}>
            <strong>Разрешение печати.</strong> Минимум 300 DPI. Термопринтеры (Zebra, TSC) дают
            правильное разрешение; обычный струйник при 72 DPI даёт нечёткие края — штрихкод не читается.
          </li>
          <li style={styles.li}>
            <strong>Размещение.</strong> Не на углу коробки, не на сгибе пакета. Плоская поверхность,
            без складок и морщин.
          </li>
          <li style={styles.li}>
            <strong>Ламинирование.</strong> Если товар может намокнуть — ламинируйте или используйте
            влагостойкую термоэтикетку. Размокший штрихкод = нечитаемый штрихкод = штраф.
          </li>
          <li style={styles.li}>
            <strong>Проверка перед отгрузкой.</strong> Сканируйте каждый штрихкод приложением на
            телефоне (Barcode Scanner, QR-сканер) — убедитесь, что код открывается и ведёт на правильный
            товар.
          </li>
        </ul>

        <h2 style={styles.h2}>Что такое коробочный бренд и стоит ли его делать</h2>
        <p style={styles.p}>
          Брендированная упаковка — логотип, фирменный цвет, слоган на коробке или пакете. Это не
          обязательно, но работает на повторные покупки. Селлер женских украшений из Москвы добавил
          фирменный крафт-пакет с тиснением и увидел рост повторных заказов с 8% до 21% за 3 месяца.
        </p>
        <p style={styles.p}>
          Но есть нюанс: на WB и Ozon запрещено размещать на упаковке <strong>контактные данные</strong>
          &nbsp;и QR-коды, уводящие покупателя с маркетплейса. Логотип, название бренда, состав — можно.
          Телефон, ссылка на сторонний сайт, ссылка на аккаунт в соцсетях — нельзя.
        </p>

        <h2 style={styles.h2}>Чек-лист упаковки перед отправкой на маркетплейс: 18 пунктов</h2>

        <h3 style={styles.h3}>Маркировка</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Штрихкод напечатан с разрешением 300 DPI или выше</li>
          <li style={styles.li}>Штрихкод минимум 22×35 мм, лучше 57×40 мм</li>
          <li style={styles.li}>Штрихкод на плоской поверхности, не на сгибе</li>
          <li style={styles.li}>Код проверен сканером — читается с первого раза</li>
          <li style={styles.li}>Если «Честный знак» обязателен — QR виден без разворачивания</li>
        </ul>

        <h3 style={styles.h3}>Упаковочные материалы</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Одежда и мягкие товары — в герметичном полиэтиленовом пакете</li>
          <li style={styles.li}>Хрупкие товары — пузырчатая плёнка 2+ слоя + жёсткая коробка</li>
          <li style={styles.li}>Зазор от товара до стенки коробки — минимум 3 см</li>
          <li style={styles.li}>Жидкости — двойная упаковка с герметичным слоем</li>
          <li style={styles.li}>Наполнитель (крафт, стружка, пенка) не рассыпается при встряске</li>
        </ul>

        <h3 style={styles.h3}>Комплектность и соответствие</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Наименование на упаковке совпадает с карточкой товара</li>
          <li style={styles.li}>Количество единиц в наборе соответствует описанию</li>
          <li style={styles.li}>Цвет/размер на упаковке совпадает с заявленным в карточке</li>
          <li style={styles.li}>Нет брака: вмятин, порывов, следов влаги на упаковке</li>
        </ul>

        <h3 style={styles.h3}>Для FBS (Ozon)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>На внешней упаковке наклеена этикетка заказа с адресом</li>
          <li style={styles.li}>Этикетка не перекрывает штрихкод товара</li>
          <li style={styles.li}>Коробка заклеена скотчем по всем швам (не только по верхнему)</li>
          <li style={styles.li}>Вес и размер посылки соответствуют заявленным при создании отгрузки</li>
        </ul>

        <h2 style={styles.h2}>Как снизить затраты на упаковку без потери качества</h2>
        <p style={styles.p}>
          Средний селлер тратит на упаковку 3–8% от выручки. Вот где реально сэкономить:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Термопринтер вместо обычного.</strong> Один лист термоэтикеток стоит 1–2 ₽, картридж
            не нужен. При объёме 100 посылок/день возврат инвестиций — 1–2 месяца.
          </li>
          <li style={styles.li}>
            <strong>Пакеты оптом.</strong> Полиэтиленовые пакеты 30×40 при покупке от 1000 штук стоят
            1.5–2 ₽/шт. В розницу — 6–8 ₽. Разница в 3–4 раза при тех же характеристиках.
          </li>
          <li style={styles.li}>
            <strong>Стандартизация размеров.</strong> Если все товары влезают в 3 типа коробки —
            покупать их оптом дешевле, чем заказывать под каждый SKU отдельно. Один МСБ-продавец
            электроники сократил количество типоразмеров с 11 до 3 и снизил затраты на упаковку на 34%.
          </li>
          <li style={styles.li}>
            <strong>Договор с типографией на этикетки.</strong> При объёме от 5 000 штук/месяц —
            переходить от термопринтера к офсетной печати. Выходит дешевле при хорошем объёме и
            качество выглядит профессиональнее.
          </li>
        </ul>

        <div
          style={{
            margin: "32px 0",
            padding: "16px 20px",
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: 12,
          }}
        >
          <p style={{ margin: 0, fontSize: 14, color: "#92400e" }}>
            <strong>Частая ошибка:</strong> экономить на наполнителе для хрупких товаров. Один сломанный
            предмет = возврат + стоимость доставки туда-обратно + минус отзыв. Дешевле один раз
            нормально упаковать, чем платить за возвраты.
          </p>
        </div>

        <h2 style={styles.h2}>Связь упаковки с карточкой товара</h2>
        <p style={styles.p}>
          Покупатель видит фото карточки — и ждёт того же при получении. Если на{" "}
          <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
            фото в карточке
          </Link>{" "}
          товар лежит в красивой подарочной коробке, а в реальности пришёл в сером полиэтиленовом пакете —
          это разочарование, возврат, плохой отзыв. Согласованность фото и реальной упаковки критически
          важна.
        </p>
        <p style={styles.p}>
          Обратная история тоже работает: если ваша упаковка действительно красивая — снимайте её для
          карточки. Это не просто эстетика, это аргумент купить. Некоторые продавцы косметики и
          подарочных наборов получают 15–20% заказов именно «за упаковку» — покупатели пишут в отзывах
          «красиво упаковано, буду дарить».
        </p>
        <p style={styles.p}>
          Если хотите обновить визуал карточки под новую упаковку — в{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>{" "}
          можно сгенерировать несколько вариантов фото за минуты без студийной съёмки.
        </p>

        <h2 style={styles.h2}>Итого: что сделать прямо сейчас</h2>
        <p style={styles.p}>Если вы уже продаёте на WB или Ozon — пройдитесь по этому мини-чек-листу:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            Возьмите 3–5 готовых к отправке товаров и отсканируйте штрихкоды телефоном. Читаются? Хорошо.
          </li>
          <li style={styles.li}>
            Проверьте отчёт по штрафам за последние 30 дней — там есть раздел «несоответствие». Если суммы
            больше 1 000 ₽ — найдите причину.
          </li>
          <li style={styles.li}>
            Пересмотрите упаковку хрупких товаров: хватает ли амортизации? Встряхните коробку — слышен
            стук? Добавьте наполнитель.
          </li>
          <li style={styles.li}>
            Если есть набор — убедитесь, что всё в одной упаковке с одним штрихкодом.
          </li>
          <li style={styles.li}>
            Сравните фото карточки с реальной упаковкой. Есть расхождения — обновите фото или упаковку.
          </li>
        </ol>

        <div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#5b21b6" }}>
            Обновите карточку товара под новую упаковку
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Поменяли упаковку — обновите фото в карточке. В Aiviso это займёт 2 минуты: загружаете
            фото товара, получаете готовые кадры в формате 900×1200 для WB и Ozon. 13 кредитов бесплатно
            при регистрации.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              padding: "10px 22px",
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
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>
              Как сделать фото для Wildberries в 2026: пошаговый гайд
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>
              7 ошибок с фото товара на маркетплейсе, которые убивают конверсию
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
              Как поднять конверсию карточки товара на 30%: чек-лист
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

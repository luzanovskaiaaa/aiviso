import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Характеристики на WB и Ozon: гайд 2026 — Aiviso",
  description: "Как правильно заполнить характеристики товара на Wildberries и Ozon чтобы попасть в топ поиска. Чек-лист из 20 пунктов и реальные кейсы.",
  keywords: [
    "характеристики товара wildberries",
    "атрибуты карточки ozon",
    "как заполнить характеристики wb",
    "характеристики для ozon",
    "атрибуты wildberries seo",
    "заполнение карточки маркетплейс",
    "характеристики для поиска маркетплейс",
    "ozon атрибуты ранжирование",
  ],
  alternates: { canonical: "/blog/harakteristiki-tovara-wb-ozon" },
  openGraph: {
    title: "Характеристики товара на WB и Ozon: как заполнять чтобы продавать",
    description: "Чек-лист из 20 пунктов и кейс: правильные атрибуты подняли карточку с 84 на 19 место в поиске.",
    url: "/blog/harakteristiki-tovara-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Характеристики товара на Wildberries и Ozon: как заполнять чтобы продавать",
  description: "Пошаговый гайд по заполнению характеристик карточки товара на WB и Ozon. Чек-лист из 20 пунктов, типичные ошибки и реальные кейсы.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/harakteristiki-tovara-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Характеристики товара на WB и Ozon", item: "https://aiviso.ru/blog/harakteristiki-tovara-wb-ozon" },
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

export default function HarakteristikiTovaraWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Характеристики товара на WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Характеристики товара на Wildberries и Ozon: как заполнять чтобы продавать
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 22 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство селлеров тратят часы на фото и описание — и пропускают характеристики. Итог: карточка не попадает в фильтры, теряет 40–60% органического трафика и висит в хвосте выдачи. Разберём, как заполнять атрибуты на WB и Ozon так, чтобы они реально работали на продажи.
        </p>

        <h2 style={styles.h2}>Почему характеристики важнее, чем кажется</h2>
        <p style={styles.p}>
          Алгоритмы поиска Wildberries и Ozon используют характеристики в двух направлениях: для ранжирования по ключевым словам и для попадания в фильтры категории. Если покупатель открывает раздел «Платья» и выставляет фильтр «Материал: хлопок, Размер: 44, Цвет: белый» — в выдаче останутся только карточки, где эти поля заполнены корректно. Карточка с пустыми атрибутами из фильтра выпадает полностью, даже если фото и описание идеальные.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Постельное бельё» добавил 11 пропущенных атрибутов (состав ткани, плотность, размер наволочек, тип упаковки) — позиция по целевому запросу поднялась с 74 на 21 место за 10 дней без изменения цены и рекламного бюджета.
        </p>

        <h2 style={styles.h2}>Характеристики на Wildberries</h2>
        <h3 style={styles.h3}>Обязательные и дополнительные</h3>
        <p style={styles.p}>
          Wildberries делит атрибуты на три группы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Обязательные</strong> — без них карточка не публикуется. Обычно это бренд, категория, цвет, страна производства.</li>
          <li style={styles.li}><strong>Рекомендуемые</strong> — WB явно указывает их как влияющие на позиции. Для одежды — состав ткани, тип посадки, сезон, пол.</li>
          <li style={styles.li}><strong>Дополнительные</strong> — чем больше заполнено, тем лучше. Алгоритм WB поощряет полноту карточки баллами «качества».</li>
        </ul>
        <p style={styles.p}>
          Главное правило: заполняйте все поля, которые есть, даже если они кажутся несущественными. WB рассчитывает «рейтинг качества карточки» — чем он выше, тем лучше органическая позиция при равном CTR и конверсии.
        </p>

        <h3 style={styles.h3}>Как правильно заполнять цвет на WB</h3>
        <p style={styles.p}>
          Цвет на Wildberries — отдельная история. Есть два поля: «Цвет» (из выпадающего списка WB) и «Цвет товара» (свободный текст для покупателя). Ошибка: заполнить только одно.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>«Цвет» из списка — это для фильтров. Выбирайте ближайший к реальному, даже если точного совпадения нет.</li>
          <li style={styles.li}>«Цвет товара» — пишите максимально точно: «пыльная роза», «тёмно-синий индиго», «хаки». Эти слова индексируются поиском.</li>
          <li style={styles.li}>Не ставьте неправильный цвет ради частотного запроса — это прямой путь к возвратам и жалобам.</li>
        </ul>

        <h3 style={styles.h3}>Состав и материал</h3>
        <p style={styles.p}>
          Поле «Состав» на WB влияет и на фильтры, и на поиск. Пишите полный состав через запятую с процентами: «хлопок 95%, эластан 5%». Не пишите просто «хлопок» — теряете 30–40% фильтровых запросов вида «хлопок с эластаном», «стрейч» и т.д.
        </p>
        <p style={styles.p}>
          Для товаров с сертификатами (детские вещи, косметика) — обязательно указывайте ГОСТ или ТР ТС в соответствующем поле. Карточки без этих полей в ряде категорий могут получить плашку «не сертифицировано», что снижает доверие.
        </p>

        <h2 style={styles.h2}>Характеристики на Ozon</h2>
        <h3 style={styles.h3}>Атрибуты и их вес в ранжировании</h3>
        <p style={styles.p}>
          Ozon открыто говорит о влиянии атрибутов на позиции — в Seller API есть поле <code>attribute_completeness</code> (полнота атрибутов), которое входит в скор ранжирования. Чем выше процент заполненности — тем лучше органика.
        </p>
        <p style={styles.p}>
          Практическое правило: в личном кабинете Ozon есть раздел «Качество контента». Там видно, какие атрибуты заполнены, какие нет, и насколько их отсутствие снижает ваш скор. Это отличная точка старта для аудита.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Электроника» добился роста с позиции 84 на позицию 19 только за счёт заполнения атрибутов — добавил тип разъёма, совместимые устройства, цвет корпуса и страну производства. Без изменения цены и рекламы.
        </p>

        <h3 style={styles.h3}>Особенности Ozon: Rich-атрибуты</h3>
        <p style={styles.p}>
          В отличие от WB, Ozon поддерживает расширенные атрибуты для Rich-контента: размерные таблицы, 3D-просмотр, видео-инструкции. Если ваша категория позволяет — заполняйте их: они дают +8–12% к конверсии по данным Ozon.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Размерная таблица — снижает возвраты по одежде и обуви на 15–25%</li>
          <li style={styles.li}>Инструкция по уходу — важна для текстиля и бытовой техники</li>
          <li style={styles.li}>Вес и габариты — влияют на расчёт доставки и отображение в фильтрах</li>
        </ul>

        <h2 style={styles.h2}>Сравнение требований WB и Ozon</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Атрибут</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Цвет</td>
              <td style={styles.td}>2 поля: из списка + свободный текст</td>
              <td style={styles.tdAccent}>1 поле из списка, но можно указать несколько</td>
            </tr>
            <tr>
              <td style={styles.td}>Состав материала</td>
              <td style={styles.td}>Свободный текст, % через запятую</td>
              <td style={styles.td}>Структурированный: выбор из списка + %</td>
            </tr>
            <tr>
              <td style={styles.td}>Страна производства</td>
              <td style={styles.td}>Обязательно</td>
              <td style={styles.td}>Обязательно</td>
            </tr>
            <tr>
              <td style={styles.td}>Размер</td>
              <td style={styles.td}>Обязательно для одежды/обуви</td>
              <td style={styles.td}>Обязательно, поддерживается мультиразмер</td>
            </tr>
            <tr>
              <td style={styles.td}>Вес/габариты</td>
              <td style={styles.td}>Для расчёта логистики</td>
              <td style={styles.td}>Влияет на ранжирование и показ в фильтрах</td>
            </tr>
            <tr>
              <td style={styles.td}>Rich-атрибуты</td>
              <td style={styles.td}>Ограниченно (некоторые категории)</td>
              <td style={styles.tdAccent}>Полная поддержка: таблицы, видео, 3D</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Топ-5 ошибок при заполнении характеристик</h2>
        <p style={styles.p}>
          Эти ошибки встречаются в 7 из 10 карточек, которые мы аудируем:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Оставляют поля пустыми «потому что не обязательно».</strong> Любой незаполненный атрибут — это фильтр, из которого вы выпадаете. Если 20% покупателей используют этот фильтр, вы потеряли 20% трафика.
          </li>
          <li style={styles.li}>
            <strong>Пишут неправильный цвет ради трафика.</strong> «Синий» вместо «бирюзового» даст клики — и возвраты с жалобами «цвет не соответствует». Рейтинг падает быстрее, чем растут продажи.
          </li>
          <li style={styles.li}>
            <strong>Копируют атрибуты с WB на Ozon без адаптации.</strong> У площадок разные списки значений. То, что «хлопок» на WB — это может быть «cotton» или числовой код на Ozon. Синхронизация вслепую ломает атрибуты.
          </li>
          <li style={styles.li}>
            <strong>Не указывают вес и габариты точно.</strong> Расхождение реального веса с заявленным на WB — штраф за пересортировку. На Ozon — неверный расчёт доставки и недовольный покупатель.
          </li>
          <li style={styles.li}>
            <strong>Игнорируют поле «Назначение» / «Для кого».</strong> «Унисекс», «мужской», «женский», «детский» — это отдельные разделы выдачи. Карточка без этого поля не попадёт в персонализированные рекомендации.
          </li>
        </ul>

        <h2 style={styles.h2}>Какие атрибуты сильнее всего влияют на поиск</h2>
        <p style={styles.p}>
          На основе анализа карточек клиентов Aiviso по нескольким категориям выделяем приоритеты:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Цвет</strong> — самый частотный фильтр в большинстве категорий. Заполнять первым и точно.</li>
          <li style={styles.li}><strong>Материал/состав</strong> — второй по частоте для одежды, текстиля, мебели, аксессуаров.</li>
          <li style={styles.li}><strong>Размер</strong> — для одежды и обуви это определяет половину объёма фильтрованных запросов.</li>
          <li style={styles.li}><strong>Бренд</strong> — индексируется поиском. Если у вас собственный бренд, зарегистрируйте его на WB — карточки с зарегистрированным брендом ранжируются лучше.</li>
          <li style={styles.li}><strong>Страна производства</strong> — аудитория «сделано в России», «товары из Китая» — это реальные фильтры с живым спросом.</li>
          <li style={styles.li}><strong>Тип/назначение</strong> — «для дома», «для спорта», «подарочный» — открывают дополнительные точки входа в поиск.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: характеристики перед публикацией карточки</h2>
        <p style={styles.p}>Проверяйте по этому списку каждую карточку перед публикацией:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Все обязательные поля заполнены (карточка не застрянет на модерации)</li>
          <li style={styles.li}>Цвет указан в обоих форматах — из списка площадки и точное название</li>
          <li style={styles.li}>Состав материала указан с процентами (для текстиля, одежды, обуви)</li>
          <li style={styles.li}>Размеры соответствуют реальным и указаны в единицах площадки (WB — см, Ozon — мм для некоторых категорий)</li>
          <li style={styles.li}>Вес и габариты указаны точно — расхождение более 20% приведёт к штрафу</li>
          <li style={styles.li}>Страна производства указана корректно</li>
          <li style={styles.li}>Поле «Пол» / «Для кого» заполнено (мужской, женский, унисекс, детский)</li>
          <li style={styles.li}>Сезон указан (если применимо — для одежды, обуви, аксессуаров)</li>
          <li style={styles.li}>Назначение / тип заполнены (для дома, спорт, офис, подарок)</li>
          <li style={styles.li}>Бренд заполнен — даже если собственный, не оставлять пустым</li>
          <li style={styles.li}>Дополнительные атрибуты (уход, комплектация, особенности) заполнены хотя бы на 80%</li>
          <li style={styles.li}>На Ozon: проверить раздел «Качество контента» — скор выше 80%</li>
          <li style={styles.li}>Значения не скопированы слепо с другой площадки без проверки форматов</li>
          <li style={styles.li}>Нет несоответствий между характеристиками и фото (цвет, комплектация, декор)</li>
          <li style={styles.li}>Для детских товаров: сертификат и возрастная маркировка в атрибутах</li>
          <li style={styles.li}>ГОСТ / ТР ТС указаны в соответствующих полях (где требуется)</li>
          <li style={styles.li}>Для электроники: совместимые устройства, тип разъёма, ёмкость, мощность</li>
          <li style={styles.li}>Для мебели: материал каркаса, обивки, максимальная нагрузка, цвет корпуса</li>
          <li style={styles.li}>Rich-атрибуты на Ozon заполнены (таблица размеров, инструкция по уходу)</li>
          <li style={styles.li}>После публикации: проверить фильтры категории — карточка должна в них отображаться</li>
        </ul>

        <h2 style={styles.h2}>Как ускорить заполнение характеристик для большого каталога</h2>
        <p style={styles.p}>
          Если у вас 50+ SKU, заполнять атрибуты вручную через интерфейс — 3–5 дней работы. Есть три способа ускориться:
        </p>

        <h3 style={styles.h3}>1. Excel-шаблон маркетплейса</h3>
        <p style={styles.p}>
          Wildberries и Ozon позволяют загрузить товары через Excel. Скачайте шаблон для нужной категории — там уже все поля. Заполните в таблице, загрузите файлом. Для 50 товаров это 2–3 часа вместо двух дней.
        </p>

        <h3 style={styles.h3}>2. API-загрузка через инструменты аналитики</h3>
        <p style={styles.p}>
          MPStats, Seller Wizard, Wildbox умеют массово обновлять атрибуты через API маркетплейса. Удобно если карточки уже созданы и надо только дозаполнить поля — не нужно заходить в каждую карточку вручную.
        </p>

        <h3 style={styles.h3}>3. AI-помощник для генерации значений</h3>
        <p style={styles.p}>
          Для категорий с фиксированными списками значений (цвет, материал, тип) AI может предложить варианты на основе фото и названия товара. Это не замена ручной проверке, но хороший черновик для дальнейшего редактирования.
        </p>
        <p style={styles.p}>
          Главное правило массовой загрузки: всегда проверяйте результат через фильтры категории — это единственный способ убедиться, что атрибуты реально работают, а не просто заполнены формально.
        </p>

        <h2 style={styles.h2}>Что делать если карточка давно создана и атрибуты не заполнены</h2>
        <p style={styles.p}>
          Редактировать атрибуты можно в любой момент — но есть нюансы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>WB:</strong> после изменения атрибутов карточка уходит на перемодерацию. Обычно 1–3 часа, но иногда до суток. В это время карточка не отображается в поиске — лучше редактировать вечером.</li>
          <li style={styles.li}><strong>Ozon:</strong> большинство атрибутов обновляются без перемодерации. Изменения в поиске отражаются в течение нескольких часов.</li>
          <li style={styles.li}><strong>Приоритет:</strong> начинайте с карточек с наибольшими продажами — там отдача от улучшения атрибутов максимальная.</li>
          <li style={styles.li}><strong>Аудит раз в квартал:</strong> маркетплейсы периодически добавляют новые поля в категории. То, что было необязательным в январе, к апрелю может стать важным для ранжирования.</li>
        </ul>
        <p style={styles.p}>
          Подробнее о том, как фото влияет на позиции вместе с атрибутами, читайте в статье{" "}
          <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries: пошаговый гайд</Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Карточка готова по атрибутам — теперь нужны сильные фото.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Откройте Aiviso</Link>
            {" "}— загрузите фото товара и получите готовые кадры для WB и Ozon в формате 900×1200 за 2 минуты. 13 кредитов бесплатно на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки товара на 30%</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/opisanie-tovara-wb" style={{ color: "#7c3aed" }}>Как написать описание товара для Wildberries</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li><Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}

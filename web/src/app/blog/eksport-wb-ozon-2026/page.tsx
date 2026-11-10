import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Экспорт через WB и Ozon: продажи в СНГ в 2026 — Aiviso",
  description: "Как продавать товары через Wildberries и Ozon в Казахстан, Беларусь и другие страны СНГ. Требования, налоги, логистика и адаптация карточек. Чек-лист из 16 шагов.",
  keywords: [
    "экспорт wildberries",
    "продажи оzon казахстан",
    "wildberries казахстан",
    "ozon беларусь продажи",
    "продажи снг маркетплейс",
    "трансграничная торговля wb",
    "международные продажи маркетплейс 2026",
    "как продавать за рубеж ozon",
    "wb global",
  ],
  alternates: { canonical: "/blog/eksport-wb-ozon-2026" },
  openGraph: {
    title: "Экспорт через WB и Ozon: как продавать в СНГ в 2026",
    description: "Wildberries работает в 9 странах, Ozon — в Казахстане и Беларуси. Как туда зайти с российской карточкой, не переплатить на налогах и адаптировать фото.",
    url: "/blog/eksport-wb-ozon-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Экспорт через WB и Ozon: как продавать в Казахстан, Беларусь и другие страны СНГ в 2026",
  description: "Как российский селлер может выйти на зарубежные рынки через Wildberries и Ozon. Требования, налоги, логистика, адаптация карточек.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-10",
  dateModified: "2026-11-10",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/eksport-wb-ozon-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Экспорт через WB и Ozon в СНГ", item: "https://aiviso.ru/blog/eksport-wb-ozon-2026" },
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

export default function EksportWbOzon2026() {
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
          <span style={{ color: "#1f2937" }}>Экспорт через WB и Ozon в СНГ</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как продавать через Wildberries и Ozon в Казахстан, Беларусь и СНГ: полный гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>10 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Wildberries работает в 9 странах, Ozon — в Казахстане, Беларуси и ещё нескольких рынках. Если у вас уже есть карточки на российском маркетплейсе, выход в СНГ — это не экспорт с нуля, а расширение на знакомой платформе. Разберём, что нужно сделать и что не так очевидно.
        </p>

        <h2 style={styles.h2}>Почему СНГ — не следующий шаг, а параллельная возможность</h2>
        <p style={styles.p}>
          Большинство российских селлеров думают про экспорт примерно так: «сначала освою Россию, потом пойду дальше». Это ловушка. Wildberries в Казахстане — отдельный рынок с собственными алгоритмами, отдельной поисковой выдачей и местной аудиторией. Конкуренция там в 3–4 раза ниже, чем в России по большинству категорий.
        </p>
        <p style={styles.p}>
          Один из наших клиентов, продающий товары для дома в Москве, параллельно зашёл на WB Казахстан с теми же карточками (только сменил цену и добавил казахский язык в описание). Через 10 недель казахский аккаунт давал 23% от общей выручки без дополнительных вложений в рекламу.
        </p>

        <h2 style={styles.h2}>Wildberries: в каких странах работает и как туда зайти</h2>
        <p style={styles.p}>
          По состоянию на 2026 год Wildberries присутствует в:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Казахстан</strong> — самый крупный рынок после России, активная аудитория, высокий средний чек в городах</li>
          <li style={styles.li}><strong>Беларусь</strong> — относительно зрелый рынок, конкуренция выше чем в КЗ, но ниже чем в РФ</li>
          <li style={styles.li}><strong>Армения, Азербайджан, Узбекистан, Кыргызстан</strong> — растущие рынки с невысокой конкуренцией</li>
          <li style={styles.li}><strong>Германия, Польша, Словакия</strong> — западноевропейские рынки, доступны, но требуют отдельной регистрации юрлица или ИП по местному праву</li>
        </ul>
        <p style={styles.p}>
          Для продаж в страны СНГ российскому ИП или ООО отдельная иностранная регистрация, как правило, не нужна — WB оформляет трансграничные продажи самостоятельно через собственные логистические схемы.
        </p>

        <h3 style={styles.h3}>Как подключить продажи в Казахстан на WB</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Войдите в личный кабинет WB партнёра → раздел «Настройки» → «Страны доставки»</li>
          <li style={styles.li}>Включите Казахстан как рынок сбыта</li>
          <li style={styles.li}>Укажите цену в тенге — либо вручную, либо разрешите WB конвертировать автоматически по курсу с вашей наценкой</li>
          <li style={styles.li}>Добавьте казахский язык в описание (необязательно, но даёт +15–20% к конверсии по практике)</li>
          <li style={styles.li}>Убедитесь, что сертификаты на товар действуют в ЕАЭС — если есть российский сертификат по ГОСТ, он в большинстве случаев действует и в Казахстане</li>
        </ul>

        <h2 style={styles.h2}>Ozon: международные продажи через Ozon Global</h2>
        <p style={styles.p}>
          Ozon развивает направление Ozon Global — выход российских продавцов на рынки Казахстана и Беларуси. В 2026 году доступны два варианта:
        </p>

        <h3 style={styles.h3}>FBO (хранение на складе Ozon)</h3>
        <p style={styles.p}>
          Вы привозите товар на российский склад Ozon, а платформа сама занимается трансграничной доставкой и растаможкой. Это самый простой способ. Минус — Ozon берёт дополнительную комиссию за трансграничную логистику (около 5–8% к базовой).
        </p>

        <h3 style={styles.h3}>Cross-border FBS</h3>
        <p style={styles.p}>
          Вы храните товар сами в России и отправляете каждый заказ самостоятельно через курьерскую службу с трансграничным тарифом. Дороже по логистике за штуку, но не требует поставки на склад.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>WB (Казахстан, РФ-склад)</th>
              <th style={styles.th}>Ozon Global FBO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Доп. логистическая наценка</td>
              <td style={styles.td}>~3–6% от цены</td>
              <td style={styles.td}>~5–8% от цены</td>
            </tr>
            <tr>
              <td style={styles.td}>Срок доставки до покупателя</td>
              <td style={styles.td}>3–7 дней</td>
              <td style={styles.td}>4–9 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Локальный склад нужен</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.td}>Нет</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Нужна отдельная регистрация</td>
              <td style={styles.tdAccent}><strong>Нет</strong></td>
              <td style={styles.tdAccent}><strong>Нет</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Работает с ИП/ООО РФ</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Налоги и НДС: главные вопросы</h2>
        <p style={styles.p}>
          Это та часть, которую боятся все новички. Разберём главное без бухгалтерского птичьего языка.
        </p>

        <h3 style={styles.h3}>Если вы на УСН</h3>
        <p style={styles.p}>
          При продаже товаров физлицам в страны ЕАЭС (Казахстан, Беларусь, Армения, Кыргызстан) через маркетплейс НДС уплачивает сам маркетплейс как налоговый агент. Вы остаётесь на своей системе налогообложения и просто получаете выручку.
        </p>
        <p style={styles.p}>
          WB и Ozon являются «операторами электронных услуг» — они сами декларируют и платят НДС в стране покупателя. Ваша задача: просто выставить правильную цену с учётом того, что платформа возьмёт свою комиссию + трансграничную наценку.
        </p>

        <h3 style={styles.h3}>Если вы на ОСН</h3>
        <p style={styles.p}>
          Экспорт физических товаров облагается НДС по ставке 0% — это фактически освобождение от налога при соблюдении условий: товар физически вывезен за рубеж и есть подтверждающие документы. WB и Ozon предоставляют необходимые реестры для подтверждения экспорта.
        </p>

        <h2 style={styles.h2}>Ценообразование: почему нельзя просто скопировать рублёвую цену</h2>
        <p style={styles.p}>
          Самая распространённая ошибка при выходе в СНГ — выставить цену как «рубли × курс». Это не работает по двум причинам:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Трансграничная логистика стоит дороже.</strong> На российском рынке вы платите условно 100 ₽ за доставку. В Казахстан — 300–500 ₽. Эта разница должна быть в цене.</li>
          <li style={styles.li}><strong>Местные конкуренты — казахстанские поставщики.</strong> Они везут товар напрямую из Китая без двойного таможенного оформления. Если ваша цена после конвертации будет выше, чем у них — не купят.</li>
        </ul>
        <p style={styles.p}>
          Формула минимальной цены для экспортной карточки:
        </p>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 14 }}>
          Цена_экспорт = (себестоимость + логистика РФ + трансграничная доставка) × (1 + комиссия_платформы) × (1 + целевая_маржа)
        </div>
        <p style={styles.p}>
          Пример: товар себестоимостью 400 ₽, стандартная логистика WB 150 ₽, трансграничная надбавка 350 ₽ = 900 ₽ базовых расходов. При комиссии WB 15% и марже 30% → минимальная цена ~1 350 ₽. В тенге по курсу 5.6 → ≈7 560 ₸.
        </p>

        <h2 style={styles.h2}>Адаптация карточки: что менять, что оставлять</h2>
        <p style={styles.p}>
          Хорошая новость: фото менять не нужно. Wildberries и Ozon показывают те же изображения во всех странах. Плохая новость: текст нужно адаптировать, иначе потеряете конверсию.
        </p>

        <h3 style={styles.h3}>Заголовок и описание</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>WB Казахстан: заголовок лучше дублировать на казахском языке — алгоритм учитывает казахоязычные запросы</li>
          <li style={styles.li}>Описание на русском понимают все покупатели в КЗ и Беларуси — переводить необязательно, но добавление казахского даёт SEO-преимущество</li>
          <li style={styles.li}>Уберите из описания специфику российских ГОСТ, если товар имеет казахстанский аналог стандарта</li>
          <li style={styles.li}>Не пишите «доставка по России» — это отпугивает зарубежных покупателей</li>
        </ul>

        <h3 style={styles.h3}>Инфографика и фото</h3>
        <p style={styles.p}>
          Инфографику с российскими реалиями («подходит для климата Сибири», «российское производство») стоит переработать под нейтральный вариант или создать отдельный вариант для экспортной карточки. Это делается за 10–15 минут в <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> — достаточно взять базовое фото товара и сгенерировать варианты с нейтральными сценами.
        </p>

        <h2 style={styles.h2}>Сертификаты и документы</h2>
        <p style={styles.p}>
          В рамках ЕАЭС большинство сертификатов взаимно признаются. Если у вас есть:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Сертификат ГОСТ Р</strong> → действует в России, нужно проверить наличие соглашения о признании в КЗ/Беларуси по конкретной категории</li>
          <li style={styles.li}><strong>Декларация соответствия ТР ЕАЭС</strong> → действует во всех странах ЕАЭС автоматически</li>
          <li style={styles.li}><strong>Отказное письмо</strong> → признаётся в ЕАЭС, если выдано аккредитованным органом</li>
        </ul>
        <p style={styles.p}>
          Практический совет: перед массовым выходом в КЗ отправьте 10–20 тестовых заказов. Если пойдут возвраты с пометкой «несоответствие требованиям» — уточните с маркетплейсом, какого документа не хватает.
        </p>

        <h2 style={styles.h2}>Логистика: три сценария</h2>

        <h3 style={styles.h3}>Сценарий 1. FBO с российского склада WB</h3>
        <p style={styles.p}>
          Вы делаете поставку на обычный FBO-склад WB в России (Коледино, Электросталь и т.д.). Wildberries сам везёт товар покупателю в Казахстан. Вы не делаете ничего дополнительно — только включаете страну в настройках.
        </p>

        <h3 style={styles.h3}>Сценарий 2. Локальный склад WB в Казахстане</h3>
        <p style={styles.p}>
          WB имеет собственные ПВЗ и склады в Алматы, Нур-Султане и других городах КЗ. Если объём продаж вырос до стабильных 200+ единиц в месяц по казахстанскому рынку, отдельная поставка на местный склад сократит срок доставки до 1–2 дней и улучшит позиции в поиске.
        </p>

        <h3 style={styles.h3}>Сценарий 3. DBS (доставка продавцом)</h3>
        <p style={styles.p}>
          Только для юрлиц, зарегистрированных в стране доставки. Для старта не нужен.
        </p>

        <h2 style={styles.h2}>Чек-лист выхода в СНГ: 16 шагов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Проверить, есть ли на выбранный товар декларация или сертификат ЕАЭС</li>
          <li style={styles.li}>Включить страну в настройках аккаунта WB или подать заявку в Ozon Global</li>
          <li style={styles.li}>Рассчитать минимальную цену с учётом трансграничной доставки</li>
          <li style={styles.li}>Установить цену в локальной валюте вручную (не доверять автоконвертации без проверки)</li>
          <li style={styles.li}>Проверить конкурентов по целевым ключам в локальном поиске</li>
          <li style={styles.li}>Скорректировать цену — не выше медианы ТОП-10 конкурентов на +20%</li>
          <li style={styles.li}>Добавить казахский язык в заголовок карточки (для KZ)</li>
          <li style={styles.li}>Убрать из описания специфически российские ссылки</li>
          <li style={styles.li}>Проверить инфографику на нейтральность — убрать «российское», «по России»</li>
          <li style={styles.li}>Сделать тестовую поставку (20–50 единиц) перед масштабированием</li>
          <li style={styles.li}>Включить аналитику по стране в ЛК — смотреть CTR и конверсию отдельно</li>
          <li style={styles.li}>Настроить ответы на вопросы — бывают специфические вопросы от покупателей из КЗ о доставке</li>
          <li style={styles.li}>Уточнить у бухгалтера систему подтверждения экспорта (нужна для ОСН)</li>
          <li style={styles.li}>Проверить упаковку — этикетки должны быть на языке страны или нейтральные</li>
          <li style={styles.li}>Не включать сразу все страны — начать с одной, проверить экономику</li>
          <li style={styles.li}>Через 4 недели сверить реальные расходы с расчётом и скорректировать цену</li>
        </ul>

        <h2 style={styles.h2}>Кейс: бытовые товары, Казахстан, 10 недель</h2>
        <p style={styles.p}>
          Продавец с оборотом 2 млн ₽/мес на WB Россия в категории «товары для дома» (органайзеры, боксы для хранения) решил попробовать Казахстан. Добавил 12 артикулов, перевёл заголовки на казахский, установил цены самостоятельно с наценкой 35% к российским (для покрытия транспорта). Рекламу не запускал.
        </p>
        <p style={styles.p}>
          Результат через 10 недель: 180 000 тенге/мес выручки, что по курсу ~32 000 ₽. Это 1,6% от основной выручки, но при нулевых дополнительных затратах на рекламу и операционку.
        </p>
        <p style={styles.p}>
          Через 3 месяца он отправил отдельную поставку на казахстанский склад WB — выручка выросла до 95 000 ₽/мес за счёт ускорения доставки и улучшения позиций.
        </p>

        <h2 style={styles.h2}>Частые ошибки при первом выходе в СНГ</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Включить все 9 стран сразу.</strong> Лучше одна страна с правильной ценой, чем девять с убыточной экономикой.</li>
          <li style={styles.li}><strong>Оставить российскую цену в рублях.</strong> На казахстанском сайте WB она будет конвертирована автоматически с невыгодным коэффициентом.</li>
          <li style={styles.li}><strong>Не проверять конкурентов.</strong> В Казахстане часто продаются местные продавцы с более низкой стоимостью доставки — нужно знать их цены.</li>
          <li style={styles.li}><strong>Игнорировать отзывы от зарубежных покупателей.</strong> Они отображаются в общей карточке и влияют на рейтинг. Отвечайте оперативно.</li>
          <li style={styles.li}><strong>Забыть про упаковку.</strong> В некоторых категориях (детские товары, косметика) требуется маркировка на языке страны покупателя.</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Выходите в Казахстан или Беларусь?</strong>{" "}
            Адаптировать фото и инфографику под нейтральный вариант можно в{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>{" "}
            — загрузите исходное фото товара и получите готовые варианты без студии за 2 минуты.{" "}
            <Link href="/" style={{ color: "#7c3aed", textDecoration: "underline" }}>Узнайте как это работает</Link>.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/wb-vs-ozon-gde-prodavat" style={{ color: "#7c3aed" }}>Wildberries или Ozon: где лучше продавать в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/multikanalnye-prodazhi-marketpleys" style={{ color: "#7c3aed" }}>Как продавать на нескольких маркетплейсах одновременно</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/sertifikatsiya-tovarov-2026" style={{ color: "#7c3aed" }}>Сертификация товаров для WB и Ozon в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Сертификация товаров для WB и Ozon в 2026 — Aiviso",
  description: "Какие документы нужны для торговли на Wildberries и Ozon: декларация, сертификат, отказное письмо. Чек-лист из 15 пунктов и штрафы за нарушения.",
  keywords: [
    "сертификация товаров wildberries",
    "сертификат ozon",
    "декларация соответствия маркетплейс",
    "отказное письмо wildberries",
    "честный знак маркетплейс",
    "документы для торговли на wildberries",
    "гост для маркетплейса",
    "обязательная сертификация 2026",
  ],
  alternates: { canonical: "/blog/sertifikatsiya-tovarov-2026" },
  openGraph: {
    title: "Сертификация товаров для WB и Ozon в 2026: полное руководство",
    description: "Декларация, сертификат, отказное письмо — что нужно для каждой категории товаров. Чек-лист и суммы штрафов.",
    url: "/blog/sertifikatsiya-tovarov-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Сертификация товаров для Wildberries и Ozon в 2026: полное руководство для селлеров",
  description: "Какие документы нужны для торговли на WB и Ozon: декларация соответствия, сертификат, отказное письмо. Чек-лист из 15 пунктов и суммы штрафов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/sertifikatsiya-tovarov-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Сертификация товаров 2026", item: "https://aiviso.ru/blog/sertifikatsiya-tovarov-2026" },
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

export default function SertifikatsiyaTovarov2026() {
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
          <span style={{ color: "#1f2937" }}>Сертификация товаров 2026</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Сертификация товаров для Wildberries и Ozon в 2026: что нужно и как получить
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 20 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Один из самых частых вопросов новых селлеров — какие документы нужны, чтобы начать торговать на маркетплейсе. WB и Ozon блокируют карточки без документов, Роспотребнадзор штрафует за торговлю без сертификатов. Разбираем, что когда нужно, сколько стоит и как не переплатить.
        </p>

        <h2 style={styles.h2}>Три типа разрешительных документов</h2>
        <p style={styles.p}>
          Все товары в России делятся на три группы по требованию к документам. Путаница здесь дорого стоит: один наш клиент в категории детских игрушек заплатил штраф 300 000 ₽ за торговлю без сертификата — он думал, что достаточно отказного письма.
        </p>

        <h3 style={styles.h3}>1. Сертификат соответствия</h3>
        <p style={styles.p}>
          Самый строгий документ. Выдаётся аккредитованным органом по сертификации после испытаний продукции в лаборатории. Срок действия — 1–5 лет. Стоимость оформления: от 15 000 до 80 000 ₽ в зависимости от категории.
        </p>
        <p style={styles.p}><strong>Нужен для:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Детские товары (игрушки, одежда до 14 лет, коляски, кроватки)</li>
          <li style={styles.li}>Электрооборудование (зарядники, удлинители, светильники)</li>
          <li style={styles.li}>Средства индивидуальной защиты (маски, перчатки, каски)</li>
          <li style={styles.li}>Пищевая продукция (некоторые категории)</li>
          <li style={styles.li}>Продукция, попадающая под технические регламенты ТР ТС</li>
        </ul>

        <h3 style={styles.h3}>2. Декларация соответствия</h3>
        <p style={styles.p}>
          Оформляется самим производителем или импортёром и регистрируется в реестре ФСА. Технически проще, чем сертификат, но юридически равнозначна. Стоимость: от 5 000 до 30 000 ₽. Срок — 1–5 лет.
        </p>
        <p style={styles.p}><strong>Нужна для:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Одежда и текстиль для взрослых</li>
          <li style={styles.li}>Мебель</li>
          <li style={styles.li}>Косметика и парфюмерия</li>
          <li style={styles.li}>Посуда и товары для кухни</li>
          <li style={styles.li}>Спортивный инвентарь</li>
        </ul>

        <h3 style={styles.h3}>3. Отказное письмо</h3>
        <p style={styles.p}>
          Документ от сертификационного органа, подтверждающий, что товар не подлежит обязательной сертификации или декларированию. Это не пропуск для всех товаров — это справка что конкретно этот товар освобождён. Стоимость: 3 000–8 000 ₽. Срок выдачи: 1–3 дня.
        </p>
        <p style={styles.p}><strong>Подходит для:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Сувениры и декор (без электрики)</li>
          <li style={styles.li}>Канцтовары</li>
          <li style={styles.li}>Аксессуары (ремни, кошельки, сумки — без детских)</li>
          <li style={styles.li}>Товары для рукоделия</li>
          <li style={styles.li}>Большинство товаров категорий «дом», «хобби», «спорт» (не всё)</li>
        </ul>

        <h2 style={styles.h2}>Сравнительная таблица по документам</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Параметр</th>
                <th style={styles.th}>Сертификат</th>
                <th style={styles.th}>Декларация</th>
                <th style={styles.th}>Отказное письмо</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Цена</td>
                <td style={styles.td}>15 000 – 80 000 ₽</td>
                <td style={styles.td}>5 000 – 30 000 ₽</td>
                <td style={styles.tdAccent}><strong>3 000 – 8 000 ₽</strong></td>
              </tr>
              <tr>
                <td style={styles.td}>Срок оформления</td>
                <td style={styles.td}>2–6 недель</td>
                <td style={styles.td}>1–3 недели</td>
                <td style={styles.tdAccent}><strong>1–3 дня</strong></td>
              </tr>
              <tr>
                <td style={styles.td}>Лабораторные испытания</td>
                <td style={styles.td}>Обязательно</td>
                <td style={styles.td}>Обязательно</td>
                <td style={styles.td}>Не нужны</td>
              </tr>
              <tr>
                <td style={styles.td}>Срок действия</td>
                <td style={styles.td}>1–5 лет</td>
                <td style={styles.td}>1–5 лет</td>
                <td style={styles.td}>Не ограничен (на партию)</td>
              </tr>
              <tr>
                <td style={styles.td}>Кто выдаёт</td>
                <td style={styles.td}>Аккредитованный орган</td>
                <td style={styles.td}>Производитель + орган</td>
                <td style={styles.td}>Сертификационный орган</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={styles.h2}>Честный знак: отдельная история</h2>
        <p style={styles.p}>
          Помимо сертификатов, часть товаров требует маркировки в системе «Честный знак». Это не сертификация, а прослеживаемость: каждая единица товара получает уникальный QR-код, который сканируется при продаже.
        </p>
        <p style={styles.p}><strong>Обязательная маркировка в 2026 году распространяется на:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Одежда и текстиль (верхняя одежда, бельё, постельное)</li>
          <li style={styles.li}>Обувь</li>
          <li style={styles.li}>Шины и покрышки</li>
          <li style={styles.li}>Духи и туалетная вода</li>
          <li style={styles.li}>Фотоаппараты и вспышки</li>
          <li style={styles.li}>Молочная продукция и вода (для тех, кто торгует продуктами)</li>
          <li style={styles.li}>БАД и лекарственные препараты</li>
        </ul>
        <p style={styles.p}>
          WB и Ozon с 2024 года автоматически проверяют коды Честного знака при приёмке. Товар без маркировки отклоняется на складе. Оштрафовать могут и маркетплейс, и продавца — поэтому площадки жёстко блокируют немаркированный товар.
        </p>
        <p style={styles.p}>
          Подключение к «Честному знаку» — бесплатно через сайт честныйзнак.рф. Стоимость кода — 50 копеек за единицу. Для регистрации нужна усиленная квалифицированная электронная подпись (КЭП), которая стоит около 3 000–5 000 ₽ в год.
        </p>

        <h2 style={styles.h2}>Что требуют WB и Ozon от продавца</h2>

        <h3 style={styles.h3}>Wildberries</h3>
        <p style={styles.p}>
          WB не запрашивает документы при регистрации и загрузке карточки. Но при поставке товара на склад и при плановых проверках модератор может запросить сертификат или декларацию. Товар без документов блокируется. Покупатель также имеет право потребовать документы — отказ является нарушением закона о защите прав потребителей.
        </p>
        <p style={styles.p}>
          Важный нюанс: если покупатель пожалуется в Роспотребнадзор, а документов не окажется — штраф придёт продавцу, а не маркетплейсу. WB застрахован через оферту.
        </p>

        <h3 style={styles.h3}>Ozon</h3>
        <p style={styles.p}>
          Ozon при создании карточки в ряде категорий сразу запрашивает загрузку сертификата. Без документа карточку нельзя опубликовать. Список «сертифицируемых» категорий постоянно расширяется — в 2026 году это уже более 80 групп товаров.
        </p>
        <p style={styles.p}>
          Ozon также проводит внутренние проверки через сервис «Проверка документов». Если документ просроченный или не соответствует товару — карточка скрывается автоматически.
        </p>

        <h2 style={styles.h2}>Где получить документы: три пути</h2>

        <h3 style={styles.h3}>1. Напрямую у производителя или поставщика</h3>
        <p style={styles.p}>
          Если вы перепродаёте товар, а не производите его — сертификат или декларацию должен иметь производитель или импортёр. Вы просто просите копию. Это бесплатно и занимает один день. Большинство крупных поставщиков с Alibaba и 1688 присылают документы по запросу — но проверяйте: часть из них — фейк.
        </p>
        <p style={styles.p}>
          Как проверить подлинность: найдите номер сертификата в реестре ФСА на сайте fsa.gov.ru. Там будет статус, дата выдачи и наименование товара — должны совпасть.
        </p>

        <h3 style={styles.h3}>2. Через сертификационный орган</h3>
        <p style={styles.p}>
          Если поставщик документов не даёт или вы производите сами — обращаетесь в аккредитованный орган по сертификации. Список аккредитованных органов — на сайте fsa.gov.ru (реестр органов по сертификации). Средний срок для декларации: 1–2 недели. Для сертификата: 3–6 недель.
        </p>

        <h3 style={styles.h3}>3. Через посредника — центр сертификации</h3>
        <p style={styles.p}>
          Есть компании, которые берут оформление под ключ: собирают документы, организуют лабораторные испытания, подают заявки. Это удобно, если вы первый раз и не хотите разбираться с бюрократией. Обычно берут 20–30% наценку сверх государственных пошлин. Стоит проверить, что орган аккредитован — мошенники выдают поддельные сертификаты за 3 000 ₽, а потом продавец получает штраф.
        </p>

        <h2 style={styles.h2}>Штрафы за торговлю без документов</h2>
        <p style={styles.p}>
          Незнание закона не освобождает от ответственности. Роспотребнадзор проводит плановые и внеплановые проверки. Жалоба одного покупателя — достаточное основание для проверки.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Нарушение</th>
                <th style={styles.th}>Штраф для ИП</th>
                <th style={styles.th}>Штраф для ООО</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Торговля без сертификата/декларации</td>
                <td style={styles.td}>20 000 – 40 000 ₽</td>
                <td style={styles.td}>100 000 – 300 000 ₽</td>
              </tr>
              <tr>
                <td style={styles.td}>Нарушение требований к маркировке</td>
                <td style={styles.td}>5 000 – 10 000 ₽ + конфискация</td>
                <td style={styles.td}>50 000 – 300 000 ₽ + конфискация</td>
              </tr>
              <tr>
                <td style={styles.td}>Фиктивный/поддельный сертификат</td>
                <td style={styles.td}>до 500 000 ₽ + уголовная ответственность</td>
                <td style={styles.td}>до 1 000 000 ₽</td>
              </tr>
              <tr>
                <td style={styles.td}>Товар без Честного знака</td>
                <td style={styles.td}>5 000 ₽ + конфискация</td>
                <td style={styles.td}>50 000 – 100 000 ₽ + конфискация</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={styles.p}>
          Помимо штрафов — репутационный ущерб. Если у покупателя что-то сломалось или вызвало аллергию, и выяснится что товар без сертификата — это уже не административка, а гражданский иск. По детским товарам — уголовная ответственность при ущербе здоровью.
        </p>

        <h2 style={styles.h2}>Чек-лист перед запуском нового товара</h2>
        <p style={styles.p}>Используйте этот список для каждого нового артикула перед загрузкой на маркетплейс:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Определите категорию товара по ОКПД-2 или ТН ВЭД</li>
          <li style={styles.li}>Проверьте попадание категории под ТР ТС (технические регламенты Таможенного союза)</li>
          <li style={styles.li}>Выясните: нужен сертификат, декларация или достаточно отказного письма</li>
          <li style={styles.li}>Проверьте: входит ли товар в перечень обязательной маркировки «Честный знак»</li>
          <li style={styles.li}>Запросите документы у поставщика (если перепродаёте)</li>
          <li style={styles.li}>Проверьте подлинность документов поставщика через реестр fsa.gov.ru</li>
          <li style={styles.li}>Убедитесь что документ оформлен на ваш товар (наименование, артикул, состав)</li>
          <li style={styles.li}>Проверьте срок действия — до истечения ещё минимум 6 месяцев</li>
          <li style={styles.li}>Получите КЭП для работы с Честным знаком (если нужна маркировка)</li>
          <li style={styles.li}>Зарегистрируйте коды маркировки до отгрузки на склад</li>
          <li style={styles.li}>Приложите копию документов при поставке на FBO (для некоторых категорий WB)</li>
          <li style={styles.li}>Загрузите скан документа в личный кабинет Ozon (при запросе системой)</li>
          <li style={styles.li}>Обновляйте документы за 1–2 месяца до истечения срока</li>
          <li style={styles.li}>Храните оригиналы документов минимум 3 года (срок исковой давности)</li>
          <li style={styles.li}>При масштабировании — проверяйте документы для каждой новой страны ввоза отдельно</li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки и как их избежать</h2>

        <h3 style={styles.h3}>Ошибка 1: «Куплю сертификат за 2 000 ₽»</h3>
        <p style={styles.p}>
          В телеграм-каналах и на Avito продают «сертификаты» без реальных испытаний — просто красивые PDF. Этот документ не зарегистрирован в реестре ФСА, при первой же проверке Роспотребнадзора он не поможет. Плюс — это мошенничество, уголовная статья 327 УК РФ.
        </p>

        <h3 style={styles.h3}>Ошибка 2: «Один сертификат на всю линейку»</h3>
        <p style={styles.p}>
          Если вы добавили новый цвет, модель или состав — документ нужно переоформлять или вносить изменения. Один наш клиент в категории детской одежды получил блокировку 40 карточек, потому что сертификат был на 3 цвета, а товаров в каталоге было 12.
        </p>

        <h3 style={styles.h3}>Ошибка 3: «Документы не нужны для маркетплейса, только для госзакупок»</h3>
        <p style={styles.p}>
          Распространённое заблуждение. Потребительский рынок (физические лица) требует тех же документов что и B2B. Маркетплейс — просто канал продаж, он не освобождает от требований закона.
        </p>

        <h3 style={styles.h3}>Ошибка 4: «Разберусь потом, сначала запущусь»</h3>
        <p style={styles.p}>
          Логика понятна, но риск велик. Если за время «потом» придёт проверка или жалоба покупателя — товар заблокируют, наложат штраф, а вы потеряете выручку за период блокировки. Лучше потратить неделю на документы до старта.
        </p>

        <div style={{ marginTop: 40, padding: "20px 24px", background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#92400e" }}>
            <strong>Лайфхак:</strong> Если вы торгуете несколькими товарами в одной категории — оформите единую декларацию на серию. Это дешевле, чем по одному. Уточните эту возможность у сертификационного органа — в большинстве случаев однотипные товары можно объединить.
          </p>
        </div>

        <h2 style={styles.h2}>Как Aiviso помогает с документами</h2>
        <p style={styles.p}>
          Прямой помощи с оформлением сертификатов мы не оказываем — это работа для юридических центров. Но есть смежная история: когда карточка заблокирована из-за несоответствия фото реальному товару (частая причина проблем с документами), мы помогаем быстро привести фотографии в соответствие.
        </p>
        <p style={styles.p}>
          Часть возвратов и жалоб, которые инициируют проверки — это несовпадение фото с реальным товаром. <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>Как правильное фото снижает процент возвратов</Link> — подробно разобрали в отдельной статье.
        </p>
        <p style={styles.p}>
          Если вы только запускаете карточку и хотите сразу сделать профессиональные фотографии, которые будут соответствовать реальному товару и требованиям маркетплейсов — <Link href="/app" style={{ color: "#7c3aed" }}>попробуйте Aiviso</Link>. Это займёт 2 минуты вместо похода в студию.
        </p>

        <div style={{ marginTop: 48, padding: "24px 28px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: "#5b21b6" }}>
            Пока документы оформляются — подготовьте карточку
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Пока ждёте сертификат, можно сделать все фото для карточки — чтобы в день одобрения сразу запуститься. Aiviso генерирует фото товара в нужных форматах для WB и Ozon за 2 минуты. 13 кредитов бесплатно при регистрации.
          </p>
          <Link
            href="/app"
            style={{ display: "inline-block", padding: "12px 24px", background: "#7c3aed", color: "white", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 15 }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/upakovka-tovara-marketpleis" style={{ color: "#7c3aed" }}>Упаковка товара для WB и Ozon: требования и штрафы 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/markirovka-tovarov-wb-ozon" style={{ color: "#7c3aed" }}>Маркировка товаров: штрихкоды и Честный знак в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/shtrafy-wildberries-2026" style={{ color: "#7c3aed" }}>Штрафы на Wildberries в 2026: за что снимают деньги</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

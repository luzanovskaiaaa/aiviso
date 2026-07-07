import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Штрафы на Wildberries в 2026: за что снимают и как избежать — Aiviso",
  description:
    "Полный список штрафов WB в 2026: упаковка, маркировка, пересорт, возвраты. Суммы, за что снимают баллы и деньги. Чек-лист из 14 пунктов для селлера.",
  keywords: [
    "штрафы wildberries",
    "штрафы вб 2026",
    "за что штрафует wildberries",
    "штрафы за упаковку wildberries",
    "штрафы за маркировку wb",
    "снижение рейтинга wildberries",
    "баллы wildberries за нарушения",
    "как избежать штрафов на вб",
  ],
  alternates: { canonical: "/blog/shtrafy-wildberries-2026" },
  openGraph: {
    title: "Штрафы на Wildberries в 2026: полный список и как избежать",
    description:
      "Суммы штрафов, за что снимают баллы рейтинга, что проверяет WB при приёмке. Чек-лист из 14 пунктов.",
    url: "/blog/shtrafy-wildberries-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Штрафы на Wildberries в 2026: за что снимают деньги и как избежать",
  description:
    "Полный список штрафов WB: упаковка, маркировка, пересорт, возвраты. Суммы и чек-лист из 14 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-07",
  dateModified: "2026-07-07",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/shtrafy-wildberries-2026",
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
      name: "Штрафы на Wildberries в 2026",
      item: "https://aiviso.ru/blog/shtrafy-wildberries-2026",
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
  tdWarn: { padding: "10px 12px", border: "1px solid #fde68a", background: "#fffbeb" },
  tdDanger: { padding: "10px 12px", border: "1px solid #fecaca", background: "#fef2f2" },
};

export default function ShtrafyWildberries2026() {
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
          <span style={{ color: "#1f2937" }}>Штрафы на Wildberries 2026</span>
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
          Штрафы на Wildberries в 2026: за что снимают деньги и как избежать
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 7 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Wildberries штрафует за упаковку, маркировку, пересорт, просрочки поставки и десятки
          других нарушений. Для нового селлера это неожиданная строка расходов — до 30–50% стоимости
          партии в худших случаях. Разберём, за что конкретно, сколько и как этого не допускать.
        </p>

        <h2 style={styles.h2}>Как работает система штрафов на WB</h2>
        <p style={styles.p}>
          Wildberries использует два механизма взысканий: <strong>денежные штрафы</strong> (списание
          со счёта или удержание из выплат) и <strong>снижение рейтинга поставщика</strong>, который
          напрямую влияет на позицию карточек в поиске. Рейтинг снижают при системных нарушениях;
          деньги списывают за конкретные инциденты.
        </p>
        <p style={styles.p}>
          Основание для штрафа — акт сотрудника склада или автоматическая система при приёмке. Акт
          можно оспорить в личном кабинете в течение 3 рабочих дней. Практика показывает: примерно
          каждый третий акт при грамотном оспаривании отменяется — особенно если приложить фото
          упаковки и штрихкода в момент отгрузки.
        </p>

        <h2 style={styles.h2}>Штрафы за упаковку и маркировку</h2>
        <p style={styles.p}>
          Это самая частая группа нарушений — по данным нашей поддержки, на неё приходится около
          60% всех штрафов у новых селлеров в первые 3 месяца работы.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Нарушение</th>
              <th style={styles.th}>Сумма штрафа</th>
              <th style={styles.th}>Что проверяют</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Неправильный штрихкод / нечитаемый КИЗ</td>
              <td style={styles.tdDanger}><strong>100–500 ₽</strong> за единицу</td>
              <td style={styles.td}>Сканер при приёмке</td>
            </tr>
            <tr>
              <td style={styles.td}>Отсутствие маркировки «Честный знак» (одежда, обувь, парфюм)</td>
              <td style={styles.tdDanger}><strong>500–3 000 ₽</strong> за единицу</td>
              <td style={styles.td}>Аудит на ПВЗ и складе</td>
            </tr>
            <tr>
              <td style={styles.td}>Упаковка не соответствует требованиям (без пакета, без скотча)</td>
              <td style={styles.tdWarn}><strong>50–300 ₽</strong> за единицу</td>
              <td style={styles.td}>Фото при приёмке</td>
            </tr>
            <tr>
              <td style={styles.td}>Хрупкий товар без пометки «Хрупкое»</td>
              <td style={styles.tdWarn}><strong>100–200 ₽</strong> за единицу</td>
              <td style={styles.td}>Тип упаковки</td>
            </tr>
            <tr>
              <td style={styles.td}>Несоответствие фактического веса заявленному</td>
              <td style={styles.td}>Перевес × 10 ₽/кг</td>
              <td style={styles.td}>Весы на складе</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Как избежать штрафов за упаковку</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Для каждой категории — свои требования к упаковке: читайте актуальный регламент в ЛК, а не статьи трёхлетней давности.</li>
          <li style={styles.li}>Одежда и обувь: полиэтиленовый пакет с клейкой полосой + штрихкод на пакете, не только на изделии.</li>
          <li style={styles.li}>Хрупкое (стекло, керамика): воздушно-пузырьковая плёнка, пенопластовые вставки — и наклейка «Хрупкое» поверх.</li>
          <li style={styles.li}>Перед отгрузкой фотографируйте каждый короб и штрихкод — это доказательство при оспаривании.</li>
        </ul>

        <h2 style={styles.h2}>Штрафы за пересорт и некомплект</h2>
        <p style={styles.p}>
          Пересорт — когда в коробке один товар, а в накладной другой. Некомплект — когда товар
          пришёл без составной части (зарядка без кабеля, духи без коробки). Это одни из самых
          болезненных штрафов — суммы могут быть крупными, а доказать свою правоту сложно.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Пересорт:</strong> стоимость неправильного товара × 3. То есть отправили дорогую куртку вместо дешёвых носков — заплатите тройную стоимость куртки.</li>
          <li style={styles.li}><strong>Некомплект:</strong> стоимость недостающей части или полная стоимость SKU — зависит от категории.</li>
          <li style={styles.li}><strong>Нарушение карантина:</strong> если вернули товар после карантина без проверки — до 30% его стоимости.</li>
        </ul>
        <p style={styles.p}>
          Один наш клиент из категории детских игрушек получил штраф 47 000 ₽ за один пересорт:
          отгружали 200 артикулов, двое сотрудников перепутали коробки на складе. После этого он
          внедрил сканирование при сборке — за 8 месяцев ни одного пересорта.
        </p>

        <h2 style={styles.h2}>Штрафы за нарушение сроков поставки</h2>
        <p style={styles.p}>
          Если вы работаете по схеме FBS (отправка со своего склада), WB жёстко контролирует
          соблюдение сроков сборки и отгрузки заказов.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Нарушение</th>
              <th style={styles.th}>Последствия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Просрочка сборки заказа (после дедлайна в ЛК)</td>
              <td style={styles.tdWarn}>Снижение индекса локализации, удар по позициям</td>
            </tr>
            <tr>
              <td style={styles.td}>Отмена заказа по вине продавца (нет в наличии)</td>
              <td style={styles.tdDanger}><strong>до 5%</strong> от стоимости заказа</td>
            </tr>
            <tr>
              <td style={styles.td}>Превышение процента отмен &gt; 1% в месяц</td>
              <td style={styles.tdDanger}>Ограничение приёмки FBS</td>
            </tr>
            <tr>
              <td style={styles.td}>Недопоставка на FBO (менее 70% от заявленного)</td>
              <td style={styles.td}>Блокировка следующей поставки до выяснения</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Как держать сроки на FBS</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Не загружайте товар на FBS если остатков нет — сразу обнулите остатки в ЛК.</li>
          <li style={styles.li}>Дедлайн сборки — уведомление в ЛК и мобильном приложении. Настройте пуш-уведомления.</li>
          <li style={styles.li}>Если работаете с фулфилментом — прописывайте SLA в договоре и проверяйте соблюдение еженедельно.</li>
        </ul>

        <h2 style={styles.h2}>Штрафы за содержание карточки и фото товара</h2>
        <p style={styles.p}>
          WB может снять товар с продажи и оштрафовать за несоответствие карточки реальному товару.
          Это особенно актуально если вы используете AI-генерацию фото или заказывали ретушь
          у фрилансера.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Фото не соответствует товару:</strong> карточка снимается, ручная проверка, восстановление до 5 рабочих дней.</li>
          <li style={styles.li}><strong>Ложные характеристики:</strong> удаление карточки + штраф до 100 000 ₽ при жалобах покупателей.</li>
          <li style={styles.li}><strong>Защищённые торговые марки:</strong> блокировка продаж, юридические иски от правообладателя.</li>
          <li style={styles.li}><strong>Неверная категория:</strong> понижение в поиске или запрос доработки без штрафа (пока).</li>
        </ul>
        <p style={styles.p}>
          По AI-фото важно понимать: WB не запрещает их использование — главное, чтобы фото честно
          показывало реальный товар. Если AI «дорисовал» карман, которого нет, или изменил цвет
          изделия — это нарушение. Подробнее читайте в нашем материале{" "}
          <Link href="/blog/ai-foto-pravila-marketpleysov" style={{ color: "#7c3aed" }}>
            про правила AI-фото на маркетплейсах
          </Link>
          .
        </p>

        <h2 style={styles.h2}>Штрафы за нарушение правил рекламных акций</h2>
        <p style={styles.p}>
          Wildberries агрессивно продвигает участие в акциях — и так же агрессивно штрафует тех,
          кто «схитрил»: поднял цену перед акцией, чтобы сделать скидку косметической.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Искусственное завышение цены перед акцией:</strong> WB отслеживает ценовую историю 90 дней. Завысили цену за 2 дня до акции — алгоритм видит это и может заблокировать участие или снизить ставку комиссии на 5–10 п.п.</li>
          <li style={styles.li}><strong>Отказ от участия в ключевой акции (11.11, Новый год):</strong> товар убирается из промо-выдачи. Формально не штраф, но потеря трафика ощутима.</li>
          <li style={styles.li}><strong>Манипуляция с ценой РРЦ:</strong> если бренд жалуется на демпинг — ограничение продаж или требование поднять цену.</li>
        </ul>

        <h2 style={styles.h2}>Что делать если вам выставили штраф</h2>
        <p style={styles.p}>
          Порядок действий при получении акта:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Сразу скачайте акт</strong> из раздела «Претензии» в ЛК. Дедлайн оспаривания —
            3 рабочих дня с момента подписания акта.
          </li>
          <li style={styles.li}>
            <strong>Соберите доказательства:</strong> фото упаковки перед отгрузкой, фото штрихкода,
            накладные, видео с камер склада (если есть).
          </li>
          <li style={styles.li}>
            <strong>Подайте апелляцию</strong> через форму в ЛК — опишите суть нарушения и приложите
            документы. Не пишите «вы неправы» — пишите факты.
          </li>
          <li style={styles.li}>
            <strong>Ждите ответ 5–10 рабочих дней.</strong> Если отказали — повторная апелляция через
            службу поддержки с пометкой «Эскалация».
          </li>
        </ol>
        <p style={styles.p}>
          Из практики: апелляции по упаковке удовлетворяют примерно в 35% случаев, по пересорту —
          в 15–20% (WB склонен доверять своим актам). По маркировке «Честный знак» не оспаривается
          вообще — это Роспотребнадзор, а не позиция WB.
        </p>

        <h2 style={styles.h2}>Чек-лист: 14 пунктов чтобы избежать штрафов на WB</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Каждый товар упакован по актуальному регламенту категории (проверяйте раз в квартал — регламент меняется)</li>
          <li style={styles.li}>Штрихкод напечатан с разрешением не ниже 300 dpi, размер не меньше 3×2 см</li>
          <li style={styles.li}>Штрихкод наклеен на упаковку, не на сам товар (для одежды)</li>
          <li style={styles.li}>Для товаров «Честного знака» — КИЗ нанесён и сканируется корректно</li>
          <li style={styles.li}>Вес и габариты в карточке соответствуют фактическим (взвесьте и померяйте с упаковкой)</li>
          <li style={styles.li}>Фото товара соответствует реальному изделию — цвет, детали, комплектность</li>
          <li style={styles.li}>Остатки в ЛК FBS обнуляются в тот же день как товар заканчивается</li>
          <li style={styles.li}>Фотографируете каждую партию перед отгрузкой (доказательство для апелляций)</li>
          <li style={styles.li}>Сборка FBS-заказов — в день поступления или не позже следующего дня</li>
          <li style={styles.li}>Цену не поднимаете резко перед акциями WB (отслеживается 90 дней назад)</li>
          <li style={styles.li}>Для хрупкого товара — наклейка «Хрупкое» поверх короба и соответствующая упаковка</li>
          <li style={styles.li}>Артикулы при сборке сканируются, а не «на глаз» — исключает пересорт</li>
          <li style={styles.li}>Ежемесячно проверяете раздел «Претензии» в ЛК — не копятся неоспоренные акты</li>
          <li style={styles.li}>Сотрудники склада знают правила и обновлённые требования WB</li>
        </ul>

        <h2 style={styles.h2}>Сколько в среднем теряют на штрафах</h2>
        <p style={styles.p}>
          По данным Wildberries (ежеквартальный отчёт для продавцов), медианный селлер FBO теряет
          около <strong>1,2–1,8%</strong> от оборота на штрафах и удержаниях. Для FBS показатель
          выше — <strong>2,5–4%</strong>, потому что к упаковке добавляются просрочки сборки.
        </p>
        <p style={styles.p}>
          При обороте 1 млн ₽/мес это 12 000–40 000 ₽ в месяц, то есть 144 000–480 000 ₽ в год.
          Деньги, которые можно было направить на рекламу или расширение ассортимента.
        </p>
        <p style={styles.p}>
          Продавец в категории бытовая химия из нашей базы сократил штрафы с 38 000 до 6 000 ₽/мес
          за один квартал — просто внедрив обязательное фото каждого短 короба при сборке. Половину
          апелляций удалось выиграть, остальное сократила дисциплина.
        </p>

        <h2 style={styles.h2}>Влияние штрафов на позиции и рейтинг продавца</h2>
        <p style={styles.p}>
          Денежный штраф — это ещё не всё. Системные нарушения (высокий процент отмен, регулярные
          акты по упаковке) снижают <strong>рейтинг поставщика</strong> — внутреннюю оценку WB.
          При рейтинге ниже порогового значения:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Карточки опускаются в выдаче — органический трафик падает на 20–50%.</li>
          <li style={styles.li}>Приоритет приёмки FBO снижается — нужно ждать слот дольше.</li>
          <li style={styles.li}>Возможны временные ограничения на новые поставки.</li>
        </ul>
        <p style={styles.p}>
          Восстановить рейтинг сложнее, чем не потерять. WB учитывает историю за 90 дней — то есть
          реабилитация занимает минимум 3 месяца даже при идеальной работе.
        </p>
        <p style={styles.p}>
          Качественные фото карточки напрямую снижают риск части штрафов: если покупатель видит
          реальный товар и получает именно то что ожидал — меньше возвратов, меньше жалоб на
          несоответствие. Это отдельно разобрано в статье{" "}
          <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>
            про возвраты и фото товара
          </Link>
          .
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Снижайте возвраты через качественные фото.</strong>{" "}
            Часть «фотографических» штрафов WB — следствие несовпадения ожиданий покупателя с
            реальным товаром.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso
            </Link>
            {" "}— 13 кредитов на старте бесплатно. AI генерирует честные карточные фото под
            стандарты WB и Ozon без ретуши, которая вводит покупателей в заблуждение.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/upakovka-tovara-marketpleis" style={{ color: "#7c3aed" }}>
              Упаковка товара для Wildberries и Ozon: требования, штрафы и чек-лист 2026
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>
              Возвраты на WB и Ozon: как фото товара влияет на процент возврата
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/fbo-vs-fbs-wildberries-ozon" style={{ color: "#7c3aed" }}>
              FBO или FBS: что выбрать на Wildberries и Ozon в 2026
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

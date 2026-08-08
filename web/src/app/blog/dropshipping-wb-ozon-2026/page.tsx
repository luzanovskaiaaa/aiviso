import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Дропшиппинг на маркетплейсах 2026 — Aiviso",
  description:
    "Как запустить продажи на Wildberries и Ozon без своего склада. FBS, realFBS, поиск поставщиков, чек-лист из 14 шагов и реальные кейсы с цифрами.",
  keywords: [
    "дропшиппинг wildberries",
    "дропшиппинг ozon",
    "продажи без склада маркетплейс",
    "fbs wildberries как работает",
    "dropshipping ozon 2026",
    "как начать продавать на wb без товара",
    "поставщики для дропшиппинга",
    "схема fbs ozon",
  ],
  alternates: { canonical: "/blog/dropshipping-wb-ozon-2026" },
  openGraph: {
    title: "Дропшиппинг на WB и Ozon 2026: продажи без склада",
    description:
      "FBS, realFBS, поиск поставщика и фото товара без наличия. Чек-лист из 14 шагов.",
    url: "/blog/dropshipping-wb-ozon-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Дропшиппинг на Wildberries и Ozon в 2026: как продавать без своего склада",
  description:
    "Как запустить продажи на WB и Ozon без склада. FBS, realFBS, поиск поставщиков, чек-лист из 14 шагов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/dropshipping-wb-ozon-2026",
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
      name: "Дропшиппинг на WB и Ozon 2026",
      item: "https://aiviso.ru/blog/dropshipping-wb-ozon-2026",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  ol: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function DropshippingWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Дропшиппинг на WB и Ozon 2026</span>
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
          Дропшиппинг на Wildberries и Ozon в 2026: как продавать без своего склада
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>8 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Дропшиппинг на маркетплейсах — это не серая схема, а стандартная модель работы по FBS
          и realFBS. Вы принимаете заказ, отправляете товар напрямую от поставщика покупателю — без
          своего склада и замороженного стока на миллионы рублей. Разбираем как это работает на WB
          и Ozon, где брать поставщиков и что нужно сделать перед первой отправкой.
        </p>

        <h2 style={styles.h2}>Что такое дропшиппинг применительно к маркетплейсам</h2>
        <p style={styles.p}>
          В классическом дропшиппинге вы создаёте карточку товара, принимаете заказ и передаёте
          его поставщику — тот сам отправляет покупателю. На маркетплейсах схема чуть иначе: WB и
          Ozon не разрешают прямую отправку от стороннего поставщика без вашего участия. Но есть
          легальный аналог — схемы <strong>FBS (Fulfillment by Seller)</strong> и{" "}
          <strong>realFBS</strong>, при которых товар хранится у вас дома или у поставщика, а вы
          просто забираете и отправляете после заказа.
        </p>
        <p style={styles.p}>
          По сути это тот же дропшиппинг, только юридически товар проходит через вас как
          продавца. Вы не держите склад на 50 позиций — держите одну-две единицы под наличие
          или договариваетесь с поставщиком о быстрой доставке к вам в течение 24 часов.
        </p>

        <h2 style={styles.h2}>FBS и realFBS: как работают схемы на WB и Ozon</h2>

        <h3 style={styles.h3}>Wildberries FBS</h3>
        <p style={styles.p}>
          При FBS на WB вы сами везёте товар на склад WB после поступления заказа. Покупатель видит
          обычную карточку и не знает, где хранится товар. Ключевой момент — <strong>время
          сборки</strong>: WB даёт 24–48 часов на сборку с момента заказа. Если опоздаете —
          штраф до 35% от стоимости товара и снижение рейтинга.
        </p>
        <p style={styles.p}>
          Это значит, что поставщик должен привезти товар вам за 12–18 часов. Работает только с
          поставщиками в вашем городе или если вы сами храните небольшой буфер.
        </p>

        <h3 style={styles.h3}>Ozon realFBS</h3>
        <p style={styles.p}>
          Ozon realFBS (или FBS «своими силами») — вы отправляете заказ через свой ПВЗ или
          курьером Ozon. Время на сборку зависит от вашего SLA (договора): можно выбрать 12, 24
          или 48 часов. У Ozon realFBS есть важное преимущество — вы сами управляете отправкой,
          не привязаны к конкретному складу WB.
        </p>

        <h2 style={styles.h2}>Сравнение схем для дропшиппинга</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>WB FBS</th>
              <th style={styles.th}>Ozon realFBS</th>
              <th style={styles.th}>FBO (склад МП)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Нужен свой склад</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.td}>Нет (платный склад МП)</td>
            </tr>
            <tr>
              <td style={styles.td}>Заморозка капитала</td>
              <td style={styles.td}>Минимальная</td>
              <td style={styles.tdAccent}><strong>Минимальная</strong></td>
              <td style={styles.td}>Высокая (поставка)</td>
            </tr>
            <tr>
              <td style={styles.td}>Позиция в поиске</td>
              <td style={styles.td}>Ниже чем FBO</td>
              <td style={styles.td}>Ниже чем FBO</td>
              <td style={styles.td}>Высокая</td>
            </tr>
            <tr>
              <td style={styles.td}>Риск штрафов</td>
              <td style={styles.td}>Высокий при просрочке</td>
              <td style={styles.td}>Средний</td>
              <td style={styles.td}>Риски за хранение</td>
            </tr>
            <tr>
              <td style={styles.td}>Идеально для</td>
              <td style={styles.td}>Тест новинок</td>
              <td style={styles.tdAccent}><strong>Старт без бюджета</strong></td>
              <td style={styles.td}>Проверенный товар</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Где найти поставщика для работы без склада</h2>
        <p style={styles.p}>
          Главное требование к поставщику при дропшиппинге — <strong>скорость отгрузки</strong>.
          Вот где искать тех, кто готов отгружать поштучно за 12–24 часа:
        </p>

        <h3 style={styles.h3}>Российские оптовики</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>OptList, Optomarket, СделкиОпт</strong> — агрегаторы российских поставщиков.
            Ищите тех, у кого минимальная партия от 1 единицы — это ключевой фильтр.
          </li>
          <li style={styles.li}>
            <strong>Производители напрямую</strong> — звоните в отдел B2B. Многие производители
            Москвы и Санкт-Петербурга готовы работать поштучно с условием минимума 5–10 единиц
            в неделю.
          </li>
          <li style={styles.li}>
            <strong>Местные поставщики в вашем городе</strong> — самый надёжный вариант.
            Товар приезжает в тот же день, штрафов за просрочку нет.
          </li>
        </ul>

        <h3 style={styles.h3}>Китайские поставщики</h3>
        <p style={styles.p}>
          1688 и Alibaba подходят только для FBO: время доставки 14–21 день делает FBS
          невозможным. Но схема работает: закупить небольшую партию 50–100 единиц, продавать
          через FBS, пополнять сток по мере продаж. Один наш клиент в категории
          «аксессуары для кухни» начал с партии 80 единиц на 24 000 ₽ (300 ₽/шт.) — через
          60 дней оборот составил 310 000 ₽ в месяц.
        </p>

        <h2 style={styles.h2}>Плюсы и риски дропшиппинга на маркетплейсах</h2>

        <h3 style={styles.h3}>Плюсы</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Минимальный порог входа.</strong> Не нужно вкладывать 200 000–500 000 ₽
            в первую поставку. Можно начать с 5–10 единиц и проверить спрос за 2–3 недели.
          </li>
          <li style={styles.li}>
            <strong>Тест гипотез без риска.</strong> За месяц можно прогнать 10 разных товаров
            и выбрать топ-2, которые дают реальные продажи. По FBO это потребовало бы 1–2 млн ₽.
          </li>
          <li style={styles.li}>
            <strong>Нет издержек на хранение.</strong> У WB стоимость хранения на складе бьёт
            по маржинальности стагнирующих товаров. При FBS этого нет.
          </li>
          <li style={styles.li}>
            <strong>Гибкость ассортимента.</strong> Можно добавить 20 новых позиций за день —
            без согласований и поставок.
          </li>
        </ul>

        <h3 style={styles.h3}>Риски, о которых нужно знать</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Штрафы за просрочку сборки на WB.</strong> Если поставщик задержит товар,
            а вы не отправите в срок — минус 35% с выплаты за этот заказ. Всегда держите
            страховой запас 2–3 единиц.
          </li>
          <li style={styles.li}>
            <strong>Более низкие позиции чем у FBO.</strong> Алгоритм WB и Ozon повышает FBO
            в поиске из-за быстрой доставки покупателю. FBS будет в минусе до тех пор, пока
            не наберёт продажи и отзывы.
          </li>
          <li style={styles.li}>
            <strong>Зависимость от поставщика.</strong> Если поставщик поднял цену или закончился
            товар — вы либо торгуете в минус, либо снимаете остатки и теряете позицию.
          </li>
          <li style={styles.li}>
            <strong>Нельзя делегировать упаковку поставщику полностью.</strong> Маркировка,
            штрихкоды WB/Ozon — ваша ответственность. Поставщик без вашего контроля может
            упаковать неправильно.
          </li>
        </ul>

        <h2 style={styles.h2}>Как сделать фото товара для карточки, если его ещё нет у вас</h2>
        <p style={styles.p}>
          Одна из реальных проблем при дропшиппинге — фото. Поставщик присылает 2–3 снимка
          на белом фоне китайского происхождения, которые уже стоят у пяти ваших конкурентов.
          Несколько рабочих подходов:
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>Попросите у поставщика образец.</strong> Один экземпляр для фотосессии — это
            норма. Многие поставщики готовы предоставить образец бесплатно или за символическую
            цену при условии заказа партии.
          </li>
          <li style={styles.li}>
            <strong>Закажите образец через маркетплейс.</strong> Купите одну единицу как
            обычный покупатель, сфотографируйте и верните (если товар не подошёл). Или просто
            используйте фото от покупки.
          </li>
          <li style={styles.li}>
            <strong>Используйте AI-генерацию из фото поставщика.</strong> Загружаете исходник
            поставщика в{" "}
            <Link href="/app" style={{ color: "#7c3aed" }}>
              Aiviso
            </Link>{" "}
            — получаете lifestyle-сцены, крупные планы и инфографику. Фото полностью
            соответствует реальному товару, маркетплейс принимает, покупатель не возвращает.
          </li>
        </ol>
        <p style={styles.p}>
          Один из наших пользователей в категории «товары для дома» запустил 12 позиций за
          выходные: взял фото с сайта поставщика, прогнал через Aiviso и получил готовые карточки
          900 × 1200 для WB и Ozon. Из 12 позиций 4 дали заказы в первую неделю без рекламы.
        </p>

        <h2 style={styles.h2}>Чек-лист из 14 шагов для запуска первого дропшиппинг-товара</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>1. Выберите нишу</strong> — спрос без перегретой конкуренции. Используйте
            Mpstats или бесплатный инструмент аналитики в ЛК Ozon.
          </li>
          <li style={styles.li}>
            <strong>2. Найдите минимум 3 поставщика</strong> — один не страхует риски.
          </li>
          <li style={styles.li}>
            <strong>3. Проверьте скорость отгрузки</strong> — закажите тестовый экземпляр и
            замерьте, за сколько часов он окажется у вас.
          </li>
          <li style={styles.li}>
            <strong>4. Посчитайте юнит-экономику</strong> — цена поставщика + логистика
            маркетплейса + комиссия + ваша минимальная маржа 25%+. Если не сходится — ищите другой товар.
          </li>
          <li style={styles.li}>
            <strong>5. Зарегистрируйтесь на WB или Ozon</strong> — гарантийный взнос WB 10 000 ₽,
            Ozon от 22 650 ₽.
          </li>
          <li style={styles.li}>
            <strong>6. Выберите схему FBS или realFBS</strong> — для старта без склада
            однозначно FBS/realFBS, не FBO.
          </li>
          <li style={styles.li}>
            <strong>7. Подготовьте фото товара</strong> — минимум 5 кадров: главное фото 3:4,
            детали, инфографика, lifestyle. Используйте AI если нет образца.
          </li>
          <li style={styles.li}>
            <strong>8. Заполните карточку полностью</strong> — заголовок с ключом, все
            характеристики, подробное описание без воды.
          </li>
          <li style={styles.li}>
            <strong>9. Поставьте остатки «1»</strong> — не обманывайте систему большим стоком
            которого нет. Маркетплейсы штрафуют за отмены заказов.
          </li>
          <li style={styles.li}>
            <strong>10. Настройте уведомления на телефон</strong> — заказ должен дойти до вас
            немедленно, сборка начинается в ту же минуту.
          </li>
          <li style={styles.li}>
            <strong>11. Держите страховой запас 2–3 единицы</strong> — особенно первые два месяца,
            пока не отладили цепочку.
          </li>
          <li style={styles.li}>
            <strong>12. Ответьте на первые 5 отзывов лично</strong> — это сигнал алгоритму что
            карточка живая, и поднимает позицию.
          </li>
          <li style={styles.li}>
            <strong>13. Через 30 дней проведите A/B тест фото</strong> — замените главное фото
            и смотрите на CTR через 2 недели.
          </li>
          <li style={styles.li}>
            <strong>14. При стабильных продажах переходите на FBO</strong> — как только видите
            30+ заказов в месяц, поставляйте партию на склад WB/Ozon: позиции вырастут и
            логистика упростится.
          </li>
        </ul>

        <h2 style={styles.h2}>Реальные цифры: сколько зарабатывают на дропшиппинге</h2>
        <p style={styles.p}>
          Дропшиппинг — не схема быстрого обогащения, но реальный способ войти в маркетплейсы
          без больших рисков. Несколько примеров из практики:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Аксессуары для дома, Москва.</strong> Старт с 5 позиций по FBS Ozon,
            вложения 15 000 ₽ в товарный запас. Через 3 месяца — оборот 85 000 ₽/мес,
            чистая прибыль около 18 000 ₽ (маржа ~21%). Небольшой бизнес, но без кредитов.
          </li>
          <li style={styles.li}>
            <strong>Детские игрушки, Екатеринбург.</strong> 20 позиций по FBS WB + realFBS Ozon.
            Поставщик — местный производитель, отгрузка за 4 часа. Через 6 месяцев: 3 позиции
            перевели на FBO, остальные остались на FBS. Оборот — 340 000 ₽/мес, прибыль ~70 000 ₽.
          </li>
          <li style={styles.li}>
            <strong>Товары для спорта.</strong> 8 позиций из Китая через 1688, партии по 50 шт.
            FBO на WB. Вложения в первую партию — 38 000 ₽. Через 4 месяца товары вышли в ТОП-30
            по ключу, оборот вырос до 210 000 ₽/мес.
          </li>
        </ul>
        <p style={styles.p}>
          Важная закономерность: первые 2–3 месяца идут в ноль или небольшой плюс — накапливаются
          отзывы и позиции. Рост начинается с 3–4 месяца, когда алгоритм начинает доверять карточке.
          Не уходите из ниши раньше чем через 90 дней, если нет явных убытков.
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
            <strong>Нет образца товара — нет проблем с фото.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Загрузите фото поставщика в Aiviso
            </Link>{" "}
            — получите 5 готовых кадров для карточки WB и Ozon за 2 минуты. Детали, цвет и
            текстура товара сохраняются — маркетплейс примет, покупатель не вернёт. 13 кредитов
            бесплатно на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/fbo-vs-fbs-wildberries-ozon" style={{ color: "#7c3aed" }}>
              FBO или FBS: что выбрать на Wildberries и Ozon в 2026
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/kak-nayti-postavshchika-2026" style={{ color: "#7c3aed" }}>
              Как найти поставщика для маркетплейса: пошаговый гайд 2026
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула и типичные ошибки
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

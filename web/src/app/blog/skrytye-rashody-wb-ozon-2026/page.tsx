import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Скрытые расходы на WB и Ozon: что съедает прибыль в 2026 — Aiviso",
  description:
    "Комиссии, логистика, хранение, возвраты, штрафы — разбираем все скрытые расходы продавца на Wildberries и Ozon с реальными цифрами и чек-листом из 14 пунктов.",
  keywords: [
    "скрытые расходы на wildberries",
    "скрытые расходы на ozon",
    "расходы продавца маркетплейс",
    "комиссии wildberries ozon",
    "логистика wildberries расходы",
    "хранение на маркетплейсе",
    "штрафы wildberries",
    "юнит-экономика маркетплейс",
  ],
  alternates: { canonical: "/blog/skrytye-rashody-wb-ozon-2026" },
  openGraph: {
    title: "Скрытые расходы на WB и Ozon: что съедает прибыль в 2026",
    description:
      "Полный разбор всех расходов продавца: от комиссий до штрафов. Чек-лист из 14 пунктов для снижения издержек.",
    url: "/blog/skrytye-rashody-wb-ozon-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Скрытые расходы продавца на Wildberries и Ozon: что съедает прибыль в 2026",
  description:
    "Разбираем все статьи затрат продавца на маркетплейсах — видимые и скрытые. Комиссии, логистика, хранение, возвраты, штрафы, реклама.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-09",
  dateModified: "2026-10-09",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/skrytye-rashody-wb-ozon-2026",
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
      name: "Скрытые расходы на WB и Ozon",
      item: "https://aiviso.ru/blog/skrytye-rashody-wb-ozon-2026",
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
  tdWarn: { padding: "10px 12px", border: "1px solid #fde68a", background: "#fef3c7" },
};

export default function SkrytyeRaskhody() {
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
          <span style={{ color: "#1f2937" }}>Скрытые расходы на WB и Ozon</span>
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
          Скрытые расходы продавца на Wildberries и Ozon: что съедает прибыль в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>9 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Вы считаете прибыль по формуле «выручка минус закупка минус комиссия» — и не понимаете, куда
          уходят деньги. Один наш клиент в категории бытовая химия обнаружил, что реальные расходы
          превышают плановые на 34%. Источник — не комиссия, а логистика возвратов и плата за хранение
          медленных позиций. Разбираем всё по статьям.
        </p>

        <h2 style={styles.h2}>Почему юнит-экономика расходится с реальностью</h2>
        <p style={styles.p}>
          Большинство селлеров считают юнит-экономику до выхода на маркетплейс — и закладывают
          только прямые расходы: закупка, комиссия, логистика «туда». После нескольких месяцев
          работы картина кардинально меняется.
        </p>
        <p style={styles.p}>
          Типичная структура расходов продавца с выручкой 500 000 ₽/мес (категория одежда, WB):
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Статья расходов</th>
              <th style={styles.th}>Плановая доля</th>
              <th style={styles.th}>Реальная доля</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Закупочная стоимость</td>
              <td style={styles.td}>40%</td>
              <td style={styles.td}>40%</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия маркетплейса</td>
              <td style={styles.td}>18%</td>
              <td style={styles.td}>18%</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика (доставка покупателю)</td>
              <td style={styles.td}>5%</td>
              <td style={styles.td}>5%</td>
            </tr>
            <tr>
              <td style={styles.tdWarn}>Логистика возвратов</td>
              <td style={styles.tdWarn}>2%</td>
              <td style={styles.tdWarn}>8%</td>
            </tr>
            <tr>
              <td style={styles.tdWarn}>Платное хранение</td>
              <td style={styles.tdWarn}>0%</td>
              <td style={styles.tdWarn}>4%</td>
            </tr>
            <tr>
              <td style={styles.tdWarn}>Штрафы и списания</td>
              <td style={styles.tdWarn}>1%</td>
              <td style={styles.tdWarn}>3%</td>
            </tr>
            <tr>
              <td style={styles.td}>Реклама</td>
              <td style={styles.td}>5%</td>
              <td style={styles.td}>9%</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Итого расходы</strong></td>
              <td style={styles.td}><strong>71%</strong></td>
              <td style={styles.tdAccent}><strong>87%</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Плановая прибыль 29% превращается в реальные 13% — почти вдвое меньше. Разбираем каждую
          статью скрытых потерь.
        </p>

        <h2 style={styles.h2}>1. Логистика возвратов: самая недооценённая статья</h2>
        <p style={styles.p}>
          Продавцы считают логистику в одну сторону. Но если покупатель вернул товар, WB списывает
          стоимость обратной доставки со склада маркетплейса к вам — или на ПВЗ для самовывоза.
        </p>
        <h3 style={styles.h3}>Как это работает на WB</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Покупатель отказался на ПВЗ — товар едет обратно на склад WB. Стоимость: <strong>50–150 ₽</strong> в зависимости от расстояния.
          </li>
          <li style={styles.li}>
            Покупатель принял, но вернул через 7 дней — та же обратная логистика плюс оценка
            состояния товара: 20–40 ₽.
          </li>
          <li style={styles.li}>
            Товар возвращается «некондиционным» — WB может утилизировать без вашего согласия,
            компенсация — закупочная цена (которую вы сами указали в карточке).
          </li>
        </ul>
        <p style={styles.p}>
          В категории одежда процент возвратов достигает 50–70%. При 100 продажах в месяц по 800 ₽
          и 60% возврате — расход на обратную логистику составит ~7 200 ₽ только по этой позиции.
        </p>
        <h3 style={styles.h3}>Как снизить</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Точные размерные сетки и фото деталей снижают возврат из-за «не подошло» на 15–20%.
          </li>
          <li style={styles.li}>
            Видео с примеркой или в действии — ещё минус 5–10%.
          </li>
          <li style={styles.li}>
            Качественный QC перед отгрузкой исключает возвраты из-за брака.
          </li>
        </ul>

        <h2 style={styles.h2}>2. Платное хранение: деньги за простой</h2>
        <p style={styles.p}>
          Оба маркетплейса дают бесплатный период хранения — и начисляют плату после его окончания.
          В 2026 пороги ужесточились.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Маркетплейс</th>
              <th style={styles.th}>Бесплатный период</th>
              <th style={styles.th}>Платное хранение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Wildberries</td>
              <td style={styles.td}>60 дней оборачиваемости</td>
              <td style={styles.td}>от 0,07 ₽/литр/сутки</td>
            </tr>
            <tr>
              <td style={styles.td}>Ozon (FBO)</td>
              <td style={styles.td}>до 30 дней (зависит от склада)</td>
              <td style={styles.td}>от 0,04 ₽/литр/сутки</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Пример: коробка 40×30×20 см = 24 литра. На складе WB 90 дней сверх бесплатного периода —
          расход <strong>24 × 0,07 × 90 = 151 ₽ на одну единицу</strong>. При 200 таких единицах —
          30 200 ₽ за квартал ни за что.
        </p>
        <p style={styles.p}>
          WB дополнительно повышает тариф при низкой оборачиваемости (КО ниже 30) — ставка может
          вырасти в 1,5–2 раза.
        </p>

        <h2 style={styles.h2}>3. Комиссии: что написано мелким шрифтом</h2>
        <p style={styles.p}>
          Базовая комиссия в карточке товара — это не всё. В итоговых выплатах появляются
          дополнительные вычеты.
        </p>
        <h3 style={styles.h3}>Дополнительные сборы WB</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Эквайринг:</strong> 1,5% от суммы оплаты картой — списывается отдельно от комиссии.
          </li>
          <li style={styles.li}>
            <strong>Участие в акциях:</strong> WB снижает вашу цену на 5–30% в акционный период,
            частично компенсируя скидку за счёт маркетплейса, но не полностью.
          </li>
          <li style={styles.li}>
            <strong>Дополнительная логистика при распределении по складам:</strong> если WB
            перемещает ваш товар между складами, часть расходов ложится на продавца.
          </li>
        </ul>
        <h3 style={styles.h3}>Дополнительные сборы Ozon</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>LastMile (доставка последней мили):</strong> 4,4% на большинстве категорий.
          </li>
          <li style={styles.li}>
            <strong>Обработка возврата:</strong> 50–150 ₽ за единицу.
          </li>
          <li style={styles.li}>
            <strong>Подписка Ozon Premium покупателя:</strong> при продаже через Premium-программу
            комиссия может быть выше базовой.
          </li>
        </ul>

        <h2 style={styles.h2}>4. Реклама: скрытые хвосты бюджета</h2>
        <p style={styles.p}>
          Продавец запускает рекламу, смотрит ДРР в кабинете — видит 12% и считает, что всё под
          контролем. Но реальная картина сложнее.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Ставка за показы ≠ ставка за клик.</strong> При автоматической CPM-кампании
            WB может потратить бюджет на показы без конверсий — фактический CPC может быть
            в 5–10 раз выше ожидаемого.
          </li>
          <li style={styles.li}>
            <strong>«Хвост» после паузы.</strong> Остановили кампанию, но деньги продолжают
            списываться ещё 2–4 часа — алгоритм доотрабатывает накопленные ставки.
          </li>
          <li style={styles.li}>
            <strong>Авторекомендации WB.</strong> «Рекомендуемые ставки» всегда выше рыночных
            на 20–40% — это просто призыв потратить больше.
          </li>
          <li style={styles.li}>
            <strong>Трафаретная реклама Ozon</strong> списывает бюджет по CPM — и при плохом
            CTR карточки расход на единицу продажи растёт экспоненциально.
          </li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории товары для дома отключил 4 рекламные кампании после
          аудита — ДРР по ним был 38–54% при целевом 15%. Экономия: <strong>31 000 ₽/мес</strong>.
        </p>

        <h2 style={styles.h2}>5. Штрафы и автоматические списания</h2>
        <p style={styles.p}>
          Маркетплейсы списывают деньги автоматически — часто без предупреждения. Продавцы
          обнаруживают это в финансовом отчёте, когда деньги уже ушли.
        </p>
        <h3 style={styles.h3}>Типичные штрафы WB</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Нарушение упаковки: <strong>от 500 до 3 000 ₽</strong> за единицу.</li>
          <li style={styles.li}>Пересорт (положили не тот товар): <strong>1 000–15 000 ₽</strong>.</li>
          <li style={styles.li}>Некорректный штрихкод: <strong>500–1 000 ₽</strong>.</li>
          <li style={styles.li}>
            Несоответствие фото реальному товару (жалобы покупателей): штраф не фиксированный,
            но WB может снять с продажи всю партию на проверку — это потери на хранение и
            упущенные продажи.
          </li>
        </ul>
        <h3 style={styles.h3}>Автоматические списания, о которых не знают</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Недовложение.</strong> Покупатель заявил, что в заказе не хватает товара —
            WB списывает стоимость «недоложенной» единицы без проверки. Сумма спора:
            месяцами, итог часто в пользу покупателя.
          </li>
          <li style={styles.li}>
            <strong>Утеря на складе.</strong> WB компенсирует по закупочной цене из вашей карточки —
            а не по розничной. Если вы указали закупку 200 ₽ при продаже 1 200 ₽, получите 200 ₽.
          </li>
          <li style={styles.li}>
            <strong>Оzon: платная обработка на FBO.</strong> Приёмка, стикерование, сортировка —
            0–50 ₽ за единицу в зависимости от категории и условий поставки.
          </li>
        </ul>

        <h2 style={styles.h2}>6. Кассовый разрыв как скрытые издержки</h2>
        <p style={styles.p}>
          Это не комиссия и не штраф — но это реальные деньги, замороженные в бизнесе.
        </p>
        <p style={styles.p}>
          WB платит раз в неделю (по понедельникам), Ozon — раз в две недели. Если оборот 1 млн ₽/мес:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            На WB в любой момент «заморожено» около 250 000 ₽ (неделя продаж в ожидании выплаты).
          </li>
          <li style={styles.li}>
            На Ozon — около 500 000 ₽ (две недели).
          </li>
          <li style={styles.li}>
            При закупке товара из собственных средств — нужен оборотный капитал минимум на 4–8 недель
            впёред. Кредит на пополнение оборотки стоит 18–28% годовых = 3–5% от выручки.
          </li>
        </ul>
        <p style={styles.p}>
          Это скрытая стоимость капитала, которую большинство новичков не закладывают в
          юнит-экономику.
        </p>

        <h2 style={styles.h2}>7. Расходы на фото и контент: где экономить нельзя</h2>
        <p style={styles.p}>
          Плохой контент карточки — это не прямой расход, но прямые потери: низкий CTR, слабая
          конверсия, платный трафик который «не конвертит». Посчитаем на примере.
        </p>
        <p style={styles.p}>
          Карточка с CTR 1,5% против карточки с CTR 4% при одинаковом трафике 10 000 показов:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>150 кликов × конверсия 8% = <strong>12 продаж</strong></li>
          <li style={styles.li}>400 кликов × конверсия 8% = <strong>32 продажи</strong></li>
        </ul>
        <p style={styles.p}>
          Разница в 20 продаж при среднем чеке 1 000 ₽ — это <strong>20 000 ₽ выручки с одного артикула
          в месяц</strong>, которые теряются из-за плохого главного фото. Стоимость пересъёмки
          через <Link href="/app" style={{ color: "#7c3aed" }}>AI в Aiviso</Link> — 150–300 ₽.
        </p>

        <h2 style={styles.h2}>Чек-лист: 14 пунктов для снижения скрытых расходов</h2>
        <p style={styles.p}>
          Пройдитесь по каждому пункту раз в месяц — это займёт 1–2 часа и даст 5–15% экономии.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>1. Финансовый отчёт по каждой SKU отдельно.</strong> Смотрите реальную маржу
            по каждому артикулу, а не суммарно по магазину.
          </li>
          <li style={styles.li}>
            <strong>2. Оборачиваемость.</strong> Все SKU с КО выше 60 дней — под угрозой платного
            хранения. Поставьте акцию или снизьте цену.
          </li>
          <li style={styles.li}>
            <strong>3. Процент возвратов по каждому товару.</strong> Норма: до 20% для одежды,
            до 10% для других категорий. Выше — обновляйте описание, фото, размерную сетку.
          </li>
          <li style={styles.li}>
            <strong>4. Штрафные акты за последние 30 дней.</strong> Скачайте в ЛК и разберите
            каждый пункт. Часть можно оспорить в течение 5 рабочих дней.
          </li>
          <li style={styles.li}>
            <strong>5. Проверьте «закупочную цену» в карточке.</strong> На WB она влияет на компенсацию
            при утере — ставьте реальную, не заниженную.
          </li>
          <li style={styles.li}>
            <strong>6. Аудит рекламных кампаний.</strong> Отключите всё с ДРР выше целевого. Нет
            смысла «масштабировать убыток».
          </li>
          <li style={styles.li}>
            <strong>7. Не участвуйте в каждой акции.</strong> Посчитайте минимальную цену для
            участия — если акция требует цену ниже безубыточной, пропускайте.
          </li>
          <li style={styles.li}>
            <strong>8. Отслеживайте «недовложения».</strong> Если покупатели системно жалуются —
            снимайте упаковку на видео перед отгрузкой (доказательство в спорах).
          </li>
          <li style={styles.li}>
            <strong>9. Обновите фото перед активной рекламой.</strong> Платный трафик на слабую
            карточку — деньги в мусор. Сначала поднимите CTR.
          </li>
          <li style={styles.li}>
            <strong>10. Следите за размерами упаковки.</strong> На WB объёмный вес считается:
            снижение высоты коробки на 5 см может уменьшить стоимость хранения на 15%.
          </li>
          <li style={styles.li}>
            <strong>11. Оцифруйте кассовый разрыв.</strong> В финмодели укажите стоимость
            «замороженных» денег — это поможет правильно считать реальную доходность.
          </li>
          <li style={styles.li}>
            <strong>12. Заявки на вывоз медленных товаров.</strong> WB и Ozon позволяют вывезти
            остатки с платного склада. Дешевле платить логистику самовывоза, чем нескончаемое хранение.
          </li>
          <li style={styles.li}>
            <strong>13. Ежемесячно сверяйте «Отчёт о реализации».</strong> Случаи ошибочных
            двойных списаний — редкость, но встречаются. Ошибку за прошлый период не оспорить.
          </li>
          <li style={styles.li}>
            <strong>14. Автоматизируйте фото-обновления.</strong> Ручная пересъёмка стоит
            5 000–25 000 ₽ за товар. <Link href="/" style={{ color: "#7c3aed" }}>AI-генерация
            через Aiviso</Link> — в 30–50 раз дешевле. Высвободите бюджет для важных статей.
          </li>
        </ul>

        <h2 style={styles.h2}>Вывод: прозрачность расходов — конкурентное преимущество</h2>
        <p style={styles.p}>
          Большинство продавцов знают, что маркетплейс берёт комиссию. Единицы системно считают
          логистику возвратов, платное хранение и рекламные «хвосты». Именно эти единицы держат
          маржу 20%+ там, где рынок в среднем работает на 5–8%.
        </p>
        <p style={styles.p}>
          Первый шаг — скачать финансовый отчёт за последние 3 месяца и разложить реальные расходы
          по статьям. Это занимает 2 часа. Второй шаг — закрыть самую дорогую дыру. Обычно это
          логистика возвратов или платное хранение неликвидов.
        </p>
        <p style={styles.p}>
          Третий шаг — снизить стоимость контента. Обновлённые фото уменьшают возвраты
          (покупатель знает, что берёт) и поднимают CTR (меньше платного трафика на продажу).
          Это единственная статья расходов, где снижение затрат одновременно увеличивает выручку.
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
            <strong>Обновите фото карточек — снизьте возвраты и поднимите CTR.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробовать Aiviso бесплатно
            </Link>{" "}
            — 13 кредитов на старте, без карты. Загрузи фото, получи готовые кадры 900×1200 для
            WB и Ozon за 2 минуты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула, таблица и типичные ошибки
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/komissiya-wb-ozon-tablica-2026" style={{ color: "#7c3aed" }}>
              Комиссия Wildberries и Ozon в 2026: таблица по категориям
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>
              Возвраты на Wildberries и Ozon: при чём здесь фото товара
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

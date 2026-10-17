import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Финансовый отчёт WB и Ozon: как читать и найти потери — Aiviso",
  description: "Разбираем финансовый отчёт Wildberries и Ozon построчно: комиссии, хранение, логистика возвратов. Чек-лист из 15 пунктов и кейс: нашли утечку 40 000 ₽ за 20 минут.",
  keywords: [
    "финансовый отчёт wildberries",
    "финансовый отчёт ozon",
    "выплаты wildberries как читать",
    "скрытые расходы маркетплейс",
    "комиссии wb ozon расчёт",
    "хранение wildberries стоимость",
    "аналитика выплат ozon",
    "финансы селлера маркетплейс",
  ],
  alternates: { canonical: "/blog/finansovyy-otchet-wb-ozon-2026" },
  openGraph: {
    title: "Финансовый отчёт WB и Ozon: как читать и найти скрытые потери",
    description: "Разбираем каждую строку отчёта: комиссии, хранение, логистика возвратов. Кейс: утечка 40 000 ₽ найдена за 20 минут.",
    url: "/blog/finansovyy-otchet-wb-ozon-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Финансовый отчёт Wildberries и Ozon: как читать и находить скрытые потери",
  description: "Разбираем финансовый отчёт WB и Ozon построчно: комиссии, хранение, логистика возвратов. Чек-лист из 15 пунктов и кейс.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/finansovyy-otchet-wb-ozon-2026",
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
      name: "Финансовый отчёт WB и Ozon",
      item: "https://aiviso.ru/blog/finansovyy-otchet-wb-ozon-2026",
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
};

export default function FinansovyyOtchetWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Финансовый отчёт WB и Ozon</span>
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
          Финансовый отчёт Wildberries и Ozon: как читать и находить скрытые потери
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>17 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство селлеров смотрят одну цифру — «сколько перевели». Но деньги уходят задолго
          до выплаты: в хранении, логистике возвратов, штрафах и скрытых сборах. Разберём
          финансовый отчёт WB и Ozon построчно — и покажем, где именно искать утечки.
        </p>

        <h2 style={styles.h2}>Где найти финансовый отчёт на Wildberries</h2>
        <p style={styles.p}>
          В личном кабинете продавца перейдите: <strong>Финансы → Сводный отчёт</strong>. Там два
          уровня детализации:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Сводный отчёт</strong> — агрегированные суммы за период: продажи, возвраты,
            комиссия, логистика, хранение, штрафы, итого к выплате.
          </li>
          <li style={styles.li}>
            <strong>Детальный отчёт (XLS)</strong> — каждая транзакция отдельной строкой с артикулом,
            типом операции и суммой. Именно его нужно скачивать для анализа.
          </li>
        </ul>
        <p style={styles.p}>
          Отчёт формируется за расчётный период (обычно 7–14 дней). Кнопка «Скачать» в правом
          верхнем углу экрана. Файл — Excel с несколькими вкладками. Нас интересует вкладка
          <strong> «Детализация»</strong>.
        </p>

        <h3 style={styles.h3}>Что смотреть в детализации WB первым делом</h3>
        <p style={styles.p}>
          Отфильтруйте колонку «Тип операции» и выделите три группы с наибольшим суммарным
          объёмом удержаний:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Логистика</strong> — доставка, возвраты, перемещения между складами</li>
          <li style={styles.li}><strong>Хранение</strong> — платное хранение при превышении норматива</li>
          <li style={styles.li}><strong>Штрафы</strong> — упаковка, маркировка, несоответствие</li>
        </ul>
        <p style={styles.p}>
          Добавьте суммы каждой группы — это ваши три главных рычага снижения расходов.
        </p>

        <h2 style={styles.h2}>Где найти финансовый отчёт на Ozon</h2>
        <p style={styles.p}>
          Путь: <strong>Финансы → Аналитика выплат</strong>. Здесь два ключевых документа:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Отчёт о реализации</strong> — детальный список всех заказов с комиссией,
            логистикой и итоговой суммой на каждый артикул. Скачивается как XLS.
          </li>
          <li style={styles.li}>
            <strong>Транзакции</strong> — хронологический журнал операций: поступления, удержания,
            рекламные списания. Здесь виден каждый рубль.
          </li>
        </ul>
        <p style={styles.p}>
          Ozon показывает удержания прозрачнее, чем WB: в отчёте о реализации есть отдельные
          колонки для комиссии, логистики, последней мили и возвратов. Но и там есть сюрпризы —
          о них ниже.
        </p>

        <h3 style={styles.h3}>Колонки отчёта Ozon которые чаще игнорируют</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Последняя миля</strong> — отдельный тариф за доставку до покупателя. На
            некоторых маршрутах составляет 5–9% от цены товара.
          </li>
          <li style={styles.li}>
            <strong>Обратная логистика</strong> — стоимость возврата от покупателя. При высоком
            проценте возвратов это может превышать комиссию с продаж.
          </li>
          <li style={styles.li}>
            <strong>Обработка возврата</strong> — отдельная строка, появилась в 2025 году. За
            каждый возврат Ozon списывает от 30 до 120 ₽ сверх логистики.
          </li>
        </ul>

        <h2 style={styles.h2}>Ключевые строки и что они реально значат</h2>
        <p style={styles.p}>
          Разберём структуру расходов на конкретном примере. Допустим, вы продаёте кофемолку за
          1 900 ₽ на WB, и за месяц было 200 продаж и 60 возвратов.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Строка</th>
              <th style={styles.th}>Сумма</th>
              <th style={styles.th}>% от продаж</th>
              <th style={styles.th}>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Продажи (200 шт.)</td>
              <td style={styles.td}>380 000 ₽</td>
              <td style={styles.td}>100%</td>
              <td style={styles.td}>Выручка до удержаний</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия WB (12%)</td>
              <td style={styles.td}>−45 600 ₽</td>
              <td style={styles.td}>12%</td>
              <td style={styles.td}>Зависит от категории</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика (прямая)</td>
              <td style={styles.td}>−12 000 ₽</td>
              <td style={styles.td}>3.2%</td>
              <td style={styles.td}>60 ₽/единицу на FBO</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика (возвраты, 60 шт.)</td>
              <td style={styles.tdAccent}>−18 000 ₽</td>
              <td style={styles.tdAccent}>4.7%</td>
              <td style={styles.tdAccent}>300 ₽ за каждый возврат</td>
            </tr>
            <tr>
              <td style={styles.td}>Хранение</td>
              <td style={styles.tdAccent}>−8 400 ₽</td>
              <td style={styles.tdAccent}>2.2%</td>
              <td style={styles.tdAccent}>Незаметно копится</td>
            </tr>
            <tr>
              <td style={styles.td}>Штрафы</td>
              <td style={styles.td}>−2 000 ₽</td>
              <td style={styles.td}>0.5%</td>
              <td style={styles.td}>Маркировка/упаковка</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Итого к выплате</strong></td>
              <td style={styles.td}><strong>294 000 ₽</strong></td>
              <td style={styles.td}><strong>77.4%</strong></td>
              <td style={styles.td}>До себестоимости товара</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Обратите внимание: логистика возвратов (18 000 ₽) превысила прямую логистику (12 000 ₽).
          Это классика для товаров с процентом возврата выше 25%. При 60 возвратах из 200 продаж —
          это 30%, и каждый возврат обходится в 300 ₽ не считая себестоимости самого товара.
        </p>

        <h2 style={styles.h2}>Скрытые потери которые видны только при детальном разборе</h2>

        <h3 style={styles.h3}>Платное хранение — самая тихая утечка</h3>
        <p style={styles.p}>
          WB и Ozon хранят товар бесплатно только до определённого порога. После него начинается
          тариф: на WB от 0.05 до 0.25 ₽ за единицу в сутки в зависимости от размера и оборачиваемости.
          При 1 000 единицах на складе и тарифе 0.1 ₽ это <strong>3 000 ₽ в месяц</strong> —
          которые большинство селлеров не замечают, пока не сводят итоговую таблицу.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «Товары для дома» обнаружил, что за квартал хранение
          съело 47 000 ₽. Причина — 12 артикулов с оборачиваемостью больше 90 дней лежали
          на складе WB без движения. После ликвидации стоков по сниженной цене чистая экономия
          составила 31 000 ₽ за следующий квартал.
        </p>

        <h3 style={styles.h3}>Двойная логистика при невыкупе</h3>
        <p style={styles.p}>
          Когда покупатель не выкупает заказ на пункте выдачи, WB везёт товар обратно на
          ваш склад или в сортировочный центр. Вы платите и за доставку «туда», и за доставку
          «обратно». При FBO процент невыкупа в некоторых категориях одежды достигает 40% —
          и каждый такой случай стоит 200–350 ₽ чистых логистических потерь.
        </p>
        <p style={styles.p}>
          В отчёте это видно в строках с типом операции «Возврат покупателя» и «Логистика
          обратного отправления» — они идут парами к одному артикулу в одну дату.
        </p>

        <h3 style={styles.h3}>Рекламные удержания в Ozon</h3>
        <p style={styles.p}>
          На Ozon рекламные расходы (трафаретная и поисковая реклама) списываются отдельным
          журналом — раздел <strong>Финансы → Транзакции → тип «Реклама»</strong>. Многие
          продавцы контролируют ДРР по рекламному кабинету, но забывают сверить фактические
          списания с плановым бюджетом. Расхождение в 10–15% — норма из-за аукционных
          переплат и показов с низкой конверсией в нерабочее время.
        </p>

        <h2 style={styles.h2}>Как построить таблицу контроля за 30 минут</h2>
        <p style={styles.p}>
          Достаточно простой Google Таблицы. Завести один раз, обновлять данные раз в неделю
          при каждой выплате.
        </p>
        <p style={styles.p}>Семь колонок для еженедельного мониторинга:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Период выплаты</strong> — дата начала и конца</li>
          <li style={styles.li}><strong>Продажи (₽)</strong> — из строки «Начислено за продажи»</li>
          <li style={styles.li}><strong>Возвраты (шт. и ₽)</strong> — количество и сумма удержаний</li>
          <li style={styles.li}><strong>Комиссия (₽ и %)</strong> — процент должен совпадать с вашей категорией; если выше — проверить категоризацию</li>
          <li style={styles.li}><strong>Логистика (₽)</strong> — сумма всех транспортных удержаний</li>
          <li style={styles.li}><strong>Хранение (₽)</strong> — выделяем отдельно, чтобы видеть динамику</li>
          <li style={styles.li}><strong>Итого к выплате / Маржа (%))</strong> — итог делим на продажи, получаем чистую маржу до себестоимости товара</li>
        </ul>
        <p style={styles.p}>
          Если маржа от выплаты к выплате снижается без роста продаж — где-то появилась новая
          утечка. Смотрите, какая строка выросла.
        </p>

        <h2 style={styles.h2}>Кейс: утечка 40 000 ₽ найдена за 20 минут</h2>
        <p style={styles.p}>
          Продавец аксессуаров для кухни на WB заметил: выручка выросла на 18% за месяц,
          а сумма выплаты — только на 3%. Открыли детальный отчёт. За 20 минут нашли причину:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Один артикул — силиконовые формы для льда — попал в акцию «Цены как у конкурентов».
            WB автоматически снизил цену с 490 до 320 ₽. Продажи выросли ×2.4, но комиссия
            посчиталась от реальной цены продажи, а не рекомендованной. Потеря: 14 000 ₽.
          </li>
          <li style={styles.li}>
            Три артикула лежали на складе в Екатеринбурге без продаж 47 дней. Платное хранение
            за квартал: 12 600 ₽.
          </li>
          <li style={styles.li}>
            Процент возврата по одному артикулу (крышка для блендера) вырос до 38% — покупатели
            жаловались на несоответствие размера. На фото был указан диаметр 22 см, реальный —
            21.5 см. После исправления описания и добавления фото с линейкой возвраты упали до
            11%, логистические потери сократились на 13 400 ₽ в месяц.
          </li>
        </ul>
        <p style={styles.p}>
          Итого выявленных и устранённых потерь: <strong>40 000 ₽ в месяц</strong>. Изменения
          в карточке и вывод стоков заняли два рабочих дня.
        </p>

        <h2 style={styles.h2}>Как фото товара влияет на финансовый результат</h2>
        <p style={styles.p}>
          Три самых дорогих строки в отчёте — логистика возвратов, хранение и штрафы за
          несоответствие — напрямую связаны с качеством карточки товара.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Возвраты из-за несоответствия.</strong> Покупатель ожидал одно, получил другое.
            Чаще всего — цвет выглядит иначе на экране, размер не показан наглядно, материал
            непонятен из фото. Каждый такой возврат — 200–400 ₽ логистики плюс ухудшение рейтинга.
          </li>
          <li style={styles.li}>
            <strong>Низкий CTR = медленная оборачиваемость.</strong> Товар лежит на складе,
            хранение накапливается. Обновление главного фото за счёт AI-генерации — один из
            самых быстрых способов ускорить оборачиваемость без снижения цены.
          </li>
          <li style={styles.li}>
            <strong>Штрафы за несоответствие фото.</strong> WB штрафует, если фото в карточке
            кардинально отличается от реального товара. С AI-фото через{" "}
            <Link href="/" style={{ color: "#7c3aed" }}>Aiviso</Link> этот риск минимален — система
            сверяет результат с исходным фото и не выдаёт «фантазийные» варианты.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист разбора финансового отчёта: 15 пунктов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Скачал детальный XLS-отчёт (не только сводный)</li>
          <li style={styles.li}>Проверил процент комиссии — совпадает ли с категорией в карточке</li>
          <li style={styles.li}>Посчитал долю логистики возвратов от общей логистики (норма — до 30%)</li>
          <li style={styles.li}>Выгрузил артикулы с процентом возврата выше 25% — они в красной зоне</li>
          <li style={styles.li}>Посмотрел строку «Хранение» — сравнил с прошлым периодом</li>
          <li style={styles.li}>Нашёл артикулы с оборачиваемостью более 60 дней — они генерируют хранение</li>
          <li style={styles.li}>Проверил, нет ли штрафов с причиной «несоответствие фото» или «упаковка»</li>
          <li style={styles.li}>Для Ozon сверил рекламные списания в транзакциях с планом из рекламного кабинета</li>
          <li style={styles.li}>Проверил, не попал ли какой-то артикул в автоматическую акцию без согласования цены</li>
          <li style={styles.li}>Рассчитал чистую маржу после выплаты (выплата ÷ выручка) — добавил в таблицу динамики</li>
          <li style={styles.li}>Сравнил марж этого периода с предыдущим — если упала на 2%+ без причины, искать утечку</li>
          <li style={styles.li}>Для FBS проверил штрафы за опоздание с отгрузкой</li>
          <li style={styles.li}>Обновил описание и фото по артикулам с высоким возвратом из-за несоответствия</li>
          <li style={styles.li}>Принял решение по стокам с оборачиваемостью более 90 дней: акция, снижение, вывоз</li>
          <li style={styles.li}>Поставил напоминание на следующий разбор через 7–14 дней</li>
        </ul>

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
            <strong>Высокий процент возврата — один из главных сигналов проблемы с фото.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Обновите карточку в Aiviso
            </Link>{" "}
            — загрузите фото товара, получите профессиональный AI-кадр за 2 минуты. 13 кредитов
            бесплатно на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/skrytye-rashody-wb-ozon-2026" style={{ color: "#7c3aed" }}>
              Скрытые расходы продавца на Wildberries и Ozon: что съедает прибыль в 2026
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула и типичные ошибки
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/protsent-vykupa-wildberries-ozon" style={{ color: "#7c3aed" }}>
              Как поднять процент выкупа на Wildberries и Ozon
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Фулфилмент для маркетплейса в 2026: полный гайд — Aiviso",
  description: "Когда переходить на фулфилмент-оператора для WB и Ozon, сколько стоит и как выбрать. FBO, FBS и сторонний фулфилмент: сравнение с реальными цифрами и кейсами.",
  keywords: [
    "фулфилмент для маркетплейса",
    "фулфилмент wildberries",
    "фулфилмент ozon",
    "фулфилмент оператор",
    "FBO FBS разница",
    "аутсорс логистика wb ozon",
    "хранение товара маркетплейс",
    "передать логистику маркетплейс 2026",
  ],
  alternates: { canonical: "/blog/fulfilment-marketpleys-2026" },
  openGraph: {
    title: "Фулфилмент для маркетплейса в 2026: как выбрать и сколько стоит",
    description: "Когда переходить на фулфилмент-оператора, сколько стоит и как выбрать подрядчика. FBO, FBS и сторонний фулфилмент с реальными цифрами.",
    url: "/blog/fulfilment-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Фулфилмент для Wildberries и Ozon в 2026: как выбрать оператора и сколько стоит",
  description: "Когда переходить на фулфилмент-оператора, сколько стоит и как выбрать подрядчика для WB и Ozon. FBO, FBS и сторонний фулфилмент с реальными кейсами.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/fulfilment-marketpleys-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Фулфилмент для маркетплейса 2026", item: "https://aiviso.ru/blog/fulfilment-marketpleys-2026" },
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

export default function FulfilmentMarketpleys2026() {
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
          <span style={{ color: "#1f2937" }}>Фулфилмент для маркетплейса 2026</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Фулфилмент для Wildberries и Ozon в 2026: как выбрать оператора и сколько стоит
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 25 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Когда заказов становится больше 50 в день, сборка и отгрузка начинают поглощать всё рабочее время. В этот момент встаёт вопрос: переходить на FBO, нанимать своих сотрудников или отдать всё стороннему фулфилмент-оператору? Разберём каждый вариант с цифрами.
        </p>

        <h2 style={styles.h2}>Три схемы работы: FBO, FBS и фулфилмент-оператор</h2>
        <p style={styles.p}>
          Перед тем как принимать решение, важно понять разницу между тремя схемами. Многие путают FBO и «фулфилмент» — это не одно и то же.
        </p>

        <h3 style={styles.h3}>FBO — хранение и отгрузка со склада маркетплейса</h3>
        <p style={styles.p}>
          При FBO вы привозите партию товара на склад Wildberries или Ozon. Дальше маркетплейс сам принимает заказы, собирает и отправляет их покупателю. Ваша задача — вовремя пополнять остатки.
        </p>
        <p style={styles.p}><strong>Плюсы FBO:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Приоритет в поиске — WB и Ozon продвигают «своих» товары выше</li>
          <li style={styles.li}>Доставка 1–2 дня в большинстве регионов — покупатель видит это в карточке</li>
          <li style={styles.li}>Вы не тратите время на сборку и отгрузку</li>
        </ul>
        <p style={styles.p}><strong>Минусы FBO:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Платное хранение, если товар залёживается: WB берёт от 0.07 ₽ до 1.5 ₽ за единицу в день в зависимости от оборачиваемости</li>
          <li style={styles.li}>Строгие требования к упаковке и маркировке — штрафы за нарушения</li>
          <li style={styles.li}>Контроль остатков нужно вести самостоятельно — пропустил момент, остатки упали в ноль, позиции рухнули</li>
        </ul>

        <h3 style={styles.h3}>FBS — сборка и отгрузка с вашего склада</h3>
        <p style={styles.p}>
          Товар хранится у вас. Когда приходит заказ, вы сами упаковываете его и привозите в пункт приёма маркетплейса (или вызываете курьера). Срок отгрузки — обычно 24–48 часов.
        </p>
        <p style={styles.p}><strong>Плюсы FBS:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Нет платы за хранение маркетплейсу</li>
          <li style={styles.li}>Полный контроль над товаром — видишь реальный остаток</li>
          <li style={styles.li}>Можно торговать одним и тем же товаром на нескольких площадках</li>
        </ul>
        <p style={styles.p}><strong>Минусы FBS:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>При объёме 50–100 заказов в день сборка занимает 4–6 часов</li>
          <li style={styles.li}>Нужны люди: кладовщик, упаковщик, водитель или курьерская служба</li>
          <li style={styles.li}>При срыве сроков отгрузки — штрафы и падение позиций</li>
        </ul>

        <h3 style={styles.h3}>Сторонний фулфилмент-оператор</h3>
        <p style={styles.p}>
          Отдельная компания берёт на себя приёмку вашего товара, хранение, маркировку, сборку и отгрузку — либо на склады маркетплейса (фактически FBO), либо напрямую покупателю (FBS от их имени). Вы платите по тарифу за каждую операцию.
        </p>

        <h2 style={styles.h2}>Сравнение схем по ключевым параметрам</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>FBO (WB/Ozon)</th>
              <th style={styles.th}>FBS (сам)</th>
              <th style={styles.th}>Фулфилмент-оператор</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Кто собирает заказ</td>
              <td style={styles.td}>Маркетплейс</td>
              <td style={styles.td}>Вы</td>
              <td style={styles.tdAccent}>Оператор</td>
            </tr>
            <tr>
              <td style={styles.td}>Хранение</td>
              <td style={styles.td}>Платно (от 0.07 ₽/ед./день)</td>
              <td style={styles.td}>Ваш склад</td>
              <td style={styles.tdAccent}>У оператора (~15–40 ₽/м³/день)</td>
            </tr>
            <tr>
              <td style={styles.td}>Позиции в поиске</td>
              <td style={styles.td}>Наивысшие</td>
              <td style={styles.td}>Зависит от скорости сборки</td>
              <td style={styles.td}>Высокие (зависит от схемы)</td>
            </tr>
            <tr>
              <td style={styles.td}>Контроль над упаковкой</td>
              <td style={styles.td}>Минимальный</td>
              <td style={styles.td}>Полный</td>
              <td style={styles.td}>Через ТЗ оператору</td>
            </tr>
            <tr>
              <td style={styles.td}>Масштабируемость</td>
              <td style={styles.td}>Высокая</td>
              <td style={styles.td}>Ограничена вашими людьми</td>
              <td style={styles.tdAccent}><strong>Максимальная</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Порог входа</td>
              <td style={styles.td}>Любой объём</td>
              <td style={styles.td}>Любой объём</td>
              <td style={styles.td}>Обычно от 200–500 заказов/мес</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Когда пора переходить на фулфилмент-оператора</h2>
        <p style={styles.p}>
          Нет универсального числа заказов, при котором «надо переходить». Но есть чёткие сигналы, что текущая схема перестала работать:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Более 80–100 заказов в день</strong> — сборка и упаковка занимают полноценный рабочий день одного человека</li>
          <li style={styles.li}><strong>Ошибки при сборке выросли выше 2–3%</strong> — пересорт, неправильный размер, неправильный товар — это штрафы и негативные отзывы</li>
          <li style={styles.li}><strong>Вы арендуете склад больше 50–100 м²</strong> — аренда + персонал может быть дороже оператора</li>
          <li style={styles.li}><strong>Нет возможности расширить команду</strong> — HR-проблемы тормозят рост продаж</li>
          <li style={styles.li}><strong>Хотите выйти на 3–5 маркетплейсов одновременно</strong> — обрабатывать заказы из нескольких ЛК вручную нереально</li>
        </ul>

        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Кейс:</strong> Продавец кухонных аксессуаров из Казани обрабатывал 85 заказов в день вручную силами двух сотрудников. Процент ошибок при сборке — 7.4% (6.3 заказа в день). Штрафы WB за пересорт за квартал: 87 000 ₽. После перехода на фулфилмент-оператора ошибки упали до 0.4%, штрафов за полгода — 3 200 ₽. Ежемесячная экономия с учётом тарифа оператора — 22 000 ₽ и два высвобожденных сотрудника для другой работы.
          </p>
        </div>

        <h2 style={styles.h2}>Как выбрать фулфилмент-оператора: 8 критериев</h2>
        <p style={styles.p}>
          На рынке больше ста компаний, которые называют себя «фулфилментом для маркетплейсов». Вот что реально важно при выборе:
        </p>

        <h3 style={styles.h3}>1. Прямая интеграция с API WB и Ozon</h3>
        <p style={styles.p}>
          Оператор должен получать заказы автоматически и передавать трек-номера обратно в ЛК без вашего участия. Если интеграции нет — вы сами будете перекладывать данные вручную, что убивает весь смысл аутсорса.
        </p>

        <h3 style={styles.h3}>2. SLA по скорости сборки</h3>
        <p style={styles.p}>
          Для FBS критично: заказ должен уходить в течение 24 часов после поступления. Wildberries штрафует за срыв сроков. Хороший оператор прописывает это в договоре и имеет компенсацию при нарушении.
        </p>

        <h3 style={styles.h3}>3. Точность сборки — не менее 99.5%</h3>
        <p style={styles.p}>
          Спросите прямо: какой процент ошибок при сборке у вас за последние 6 месяцев? Профессиональные операторы ведут эту статистику и не стесняются её показывать. Норма — 0.3–0.5%.
        </p>

        <h3 style={styles.h3}>4. Опыт с вашей категорией товаров</h3>
        <p style={styles.p}>
          Одежда с размерной сеткой — совсем другой процесс, чем штучная электроника. Оператор, который никогда не работал с одеждой, неизбежно накосячит с размерами первые несколько партий. Уточняйте конкретный опыт.
        </p>

        <h3 style={styles.h3}>5. Работа с возвратами</h3>
        <p style={styles.p}>
          Что оператор делает с возвратом от покупателя? Принимает, проверяет, переупаковывает и снова выставляет на продажу? Или просто складывает на полку? Стоимость обработки возврата — отдельная строка в тарифе, уточняйте заранее.
        </p>

        <h3 style={styles.h3}>6. Прозрачный личный кабинет</h3>
        <p style={styles.p}>
          Вы должны видеть в реальном времени: сколько единиц на складе, какие заказы в сборке, какие уже отгружены, сколько это стоит. Если отчётность — это «таблица в Excel раз в неделю», ищите другого оператора.
        </p>

        <h3 style={styles.h3}>7. Минимальный объём и порог входа</h3>
        <p style={styles.p}>
          Большинство нормальных операторов работают от 200–500 заказов в месяц. Если у вас меньше — либо ищите операторов для малого бизнеса (они есть, но дороже), либо пока рано переходить.
        </p>

        <h3 style={styles.h3}>8. Репутация и отзывы других селлеров</h3>
        <p style={styles.p}>
          Спросите в телеграм-чатах продавцов WB и Ozon. Реальный опыт селлеров с конкретным оператором — ценнее любой презентации. Красные флаги: задержки отгрузок, потерянные товары, неожиданные дополнительные сборы.
        </p>

        <h2 style={styles.h2}>Сколько стоит фулфилмент: тарифы и пример расчёта</h2>
        <p style={styles.p}>
          Тарифы у разных операторов отличаются, но структура одинакова. Вот средние цифры по рынку в 2026 году:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Услуга</th>
              <th style={styles.th}>Тариф</th>
              <th style={styles.th}>Примечание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Приёмка товара</td>
              <td style={styles.td}>2–5 ₽/ед.</td>
              <td style={styles.td}>Разгрузка, пересчёт, штрихкодирование</td>
            </tr>
            <tr>
              <td style={styles.td}>Хранение</td>
              <td style={styles.td}>20–45 ₽/м³/день</td>
              <td style={styles.td}>Зависит от оборачиваемости и региона</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>Сборка заказа</strong></td>
              <td style={styles.tdAccent}><strong>25–60 ₽/заказ</strong></td>
              <td style={styles.tdAccent}>Основная статья расходов</td>
            </tr>
            <tr>
              <td style={styles.td}>Упаковочный материал</td>
              <td style={styles.td}>3–15 ₽/ед.</td>
              <td style={styles.td}>Пакет, коробка, стрейч-плёнка</td>
            </tr>
            <tr>
              <td style={styles.td}>Маркировка WB/Ozon</td>
              <td style={styles.td}>2–4 ₽/ед.</td>
              <td style={styles.td}>Печать и наклейка ШК</td>
            </tr>
            <tr>
              <td style={styles.td}>Обработка возврата</td>
              <td style={styles.td}>40–80 ₽/ед.</td>
              <td style={styles.td}>Приёмка, осмотр, переупаковка</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}><strong>Пример расчёта для 200 заказов в месяц:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Сборка 200 заказов × 40 ₽ = 8 000 ₽</li>
          <li style={styles.li}>Хранение 3 м³ × 30 ₽ × 30 дней = 2 700 ₽</li>
          <li style={styles.li}>Упаковка 200 ед. × 8 ₽ = 1 600 ₽</li>
          <li style={styles.li}>Возвраты ~15 штук × 60 ₽ = 900 ₽</li>
          <li style={styles.li}><strong>Итого: ~13 200 ₽/мес</strong> — это 66 ₽ на заказ</li>
        </ul>
        <p style={styles.p}>
          Если вы сейчас платите сотруднику 50 000 ₽ за аналогичный объём — экономия очевидна. Плюс при росте объёма стоимость на заказ падает.
        </p>

        <h2 style={styles.h2}>Типичные ошибки при переходе на фулфилмент</h2>

        <h3 style={styles.h3}>Перевести 100% объёма сразу</h3>
        <p style={styles.p}>
          Начинайте с 20–30% ассортимента или с одной категории. Первый месяц всегда есть «притирка» — оператор учит ваши особенности, вы учите их процессы. Если перевести всё сразу и что-то пойдёт не так — упадут все позиции.
        </p>

        <h3 style={styles.h3}>Не проверить оператора на штрафы WB</h3>
        <p style={styles.p}>
          Некоторые операторы плохо знают специфику упаковки Wildberries. Штраф за неправильный вид упаковки — 100–200 ₽ с единицы. При 500 единиц это 50 000–100 000 ₽ вылетает в трубу, а виноватым окажетесь вы, а не оператор.
        </p>

        <h3 style={styles.h3}>Забыть про контент и фото</h3>
        <p style={styles.p}>
          Фулфилмент-оператор занимается логистикой — но не вашими карточками. Фото, инфографика, SEO-заголовки — всё это по-прежнему ваша ответственность. Многие продавцы передают операционку оператору, забывают про контент, и конверсия падает — хотя заказы технически стали обрабатываться быстрее.
        </p>

        <h3 style={styles.h3}>Не прописать ответственность в договоре</h3>
        <p style={styles.p}>
          Что происходит, если оператор потерял товар? Кто платит штраф WB за задержку отгрузки? Кто несёт ответственность за повреждение при хранении? Всё это должно быть в договоре с конкретными суммами. Общие слова «несём материальную ответственность» — не юридически значимо.
        </p>

        <h2 style={styles.h2}>Чек-лист перехода на фулфилмент: 12 шагов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Посчитайте текущие затраты на логистику: аренда склада + зарплата + упаковка + ваше время</li>
          <li style={styles.li}>Определите объём: сколько заказов в месяц, сколько SKU, средний вес заказа</li>
          <li style={styles.li}>Составьте шорт-лист из 3–5 операторов по рекомендациям в чатах селлеров</li>
          <li style={styles.li}>Запросите коммерческое предложение с полным тарифом (включая скрытые сборы)</li>
          <li style={styles.li}>Проверьте наличие прямой интеграции с WB и Ozon API</li>
          <li style={styles.li}>Попросите показать личный кабинет в действии или демо-доступ</li>
          <li style={styles.li}>Уточните опыт с вашей категорией и попросите контакты 2–3 действующих клиентов</li>
          <li style={styles.li}>Согласуйте ТЗ на упаковку: размеры, материал, где клеить ШК</li>
          <li style={styles.li}>Пропишите в договоре ответственность за потерю, пересорт и срыв SLA</li>
          <li style={styles.li}>Начните с тестовой партии 100–200 единиц по одной категории</li>
          <li style={styles.li}>В первый месяц — еженедельно сверяйте остатки на складе оператора с реальными данными</li>
          <li style={styles.li}>Только после 4–6 недель без инцидентов — переводите основной объём</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Пока фулфилмент решает логистику — не забудьте про карточки.</strong>{" "}
            Контент и фото остаются на вас. <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>{" "}
            генерирует профессиональные фото товара за 2 минуты — и помогает держать карточки актуальными, пока оператор обрабатывает заказы.{" "}
            <Link href="/" style={{ color: "#7c3aed", textDecoration: "underline" }}>Узнать подробнее</Link>.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/fbo-vs-fbs-wildberries-ozon" style={{ color: "#7c3aed" }}>FBO или FBS: что выбрать на Wildberries и Ozon в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/zapusk-novogo-tovara-marketpleys" style={{ color: "#7c3aed" }}>Как запустить новый товар на маркетплейсе: чек-лист из 20 шагов</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/upravlenie-ostatkami-wb-ozon" style={{ color: "#7c3aed" }}>Управление остатками на WB и Ozon</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

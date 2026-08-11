import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Комиссия Wildberries и Ozon 2026: таблица по категориям — Aiviso",
  description: "Актуальные комиссии WB и Ozon по всем категориям 2026: хранение, логистика, возвраты. Как считать цену товара и не уйти в минус. Чек-лист из 12 пунктов.",
  keywords: [
    "комиссия wildberries 2026",
    "комиссия ozon по категориям",
    "сколько берет wildberries",
    "тарифы wildberries 2026",
    "тарифы ozon 2026",
    "как считать цену на маркетплейсе",
    "комиссия маркетплейса",
    "хранение wildberries цена",
  ],
  alternates: { canonical: "/blog/komissiya-wb-ozon-tablica-2026" },
  openGraph: {
    title: "Комиссия Wildberries и Ozon в 2026: таблица по категориям",
    description: "Актуальные ставки комиссий WB и Ozon, скрытые сборы и формула расчёта цены. Чек-лист из 12 пунктов перед выставлением товара.",
    url: "/blog/komissiya-wb-ozon-tablica-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Комиссия Wildberries и Ozon в 2026: таблица по категориям и как считать цену",
  description: "Актуальные ставки комиссий WB и Ozon, скрытые сборы и формула расчёта реальной прибыли. Чек-лист из 12 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/komissiya-wb-ozon-tablica-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Комиссия WB и Ozon 2026", item: "https://aiviso.ru/blog/komissiya-wb-ozon-tablica-2026" },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb", fontWeight: 600 },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
  tdWarning: { padding: "10px 12px", border: "1px solid #fde68a", background: "#fef3c7" },
};

export default function KomissiyaWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Комиссия WB и Ozon 2026</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Комиссия Wildberries и Ozon в 2026: таблица по категориям и как считать цену
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 11 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Один из самых частых вопросов новых селлеров: «Сколько на самом деле берёт маркетплейс?»
          Ответ не такой простой — комиссия состоит из нескольких частей, и если не считать их все,
          легко выставить цену в убыток. Разбираем актуальные ставки Wildberries и Ozon, скрытые
          сборы и формулу расчёта цены, которая защищает маржу.
        </p>

        <h2 style={styles.h2}>Из чего состоит комиссия маркетплейса</h2>
        <p style={styles.p}>
          Многие считают только базовую комиссию — процент от продажи. Но реальные затраты
          на маркетплейсе включают четыре статьи:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Комиссия за продажу</strong> — процент от цены, который маркетплейс берёт при каждой выкупленной единице. Зависит от категории и схемы работы.</li>
          <li style={styles.li}><strong>Логистика</strong> — доставка от склада до покупателя (FBO) или забор у продавца (FBS). Фиксированная сумма или процент в зависимости от габаритов и веса.</li>
          <li style={styles.li}><strong>Хранение</strong> — плата за каждый день нахождения товара на складе маркетплейса. Растёт экспоненциально при залежавшихся позициях.</li>
          <li style={styles.li}><strong>Возвраты и обратная логистика</strong> — если покупатель вернул товар, маркетплейс берёт плату за обратную доставку. Высокий процент возврата сильно бьёт по марже.</li>
        </ul>
        <p style={styles.p}>
          Для категории одежды, где процент возврата доходит до 50–70%, это критически важно:
          даже при базовой комиссии 15% реальные потери могут составить 30–40% от цены товара.
        </p>

        <h2 style={styles.h2}>Комиссия Wildberries по категориям в 2026</h2>
        <p style={styles.p}>
          Базовые ставки WB (FBO, без учёта логистики и хранения):
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Комиссия</th>
              <th style={styles.th}>Примечание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.tdAccent}><strong>15–25%</strong></td>
              <td style={styles.td}>Зависит от бренда и подкатегории</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника и гаджеты</td>
              <td style={styles.tdAccent}><strong>5–10%</strong></td>
              <td style={styles.td}>Самая низкая ставка — высокий средний чек</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и уход</td>
              <td style={styles.tdAccent}><strong>20–30%</strong></td>
              <td style={styles.td}>Декоративная косметика выше</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.tdAccent}><strong>10–15%</strong></td>
              <td style={styles.td}>Игрушки — до 15%, одежда для детей — до 25%</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома и декор</td>
              <td style={styles.tdAccent}><strong>15–20%</strong></td>
              <td style={styles.td}>Крупногабаритные — дороже логистика</td>
            </tr>
            <tr>
              <td style={styles.td}>Спорт и отдых</td>
              <td style={styles.tdAccent}><strong>12–18%</strong></td>
              <td style={styles.td}>Тренажёры — отдельная ставка</td>
            </tr>
            <tr>
              <td style={styles.td}>Продукты питания</td>
              <td style={styles.tdAccent}><strong>5–8%</strong></td>
              <td style={styles.td}>Доступны не всем регионам</td>
            </tr>
            <tr>
              <td style={styles.td}>Ювелирные украшения</td>
              <td style={styles.tdAccent}><strong>15%</strong></td>
              <td style={styles.td}>Нужна специальная лицензия</td>
            </tr>
            <tr>
              <td style={styles.td}>Автотовары</td>
              <td style={styles.tdAccent}><strong>10–15%</strong></td>
              <td style={styles.td}>Шины — отдельный тариф</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Логистика Wildberries</h3>
        <p style={styles.p}>
          Помимо комиссии, WB берёт за доставку покупателю:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>FBO (со склада WB):</strong> 50–130 ₽ за единицу в зависимости от габаритов. Небольшие товары (одежда, косметика) — около 50–70 ₽.</li>
          <li style={styles.li}><strong>FBS (с вашего склада):</strong> 75–200 ₽ за единицу — добавляется стоимость сортировки и сборки.</li>
          <li style={styles.li}><strong>Обратная логистика:</strong> 33–90 ₽ за каждый возврат, зависит от региона.</li>
        </ul>

        <h2 style={styles.h2}>Комиссия Ozon по категориям в 2026</h2>
        <p style={styles.p}>
          На Ozon структура похожа, но ставки немного другие:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>FBO</th>
              <th style={styles.th}>FBS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда</td>
              <td style={styles.tdAccent}><strong>15–21%</strong></td>
              <td style={styles.td}>15–21%</td>
            </tr>
            <tr>
              <td style={styles.td}>Обувь</td>
              <td style={styles.tdAccent}><strong>12–15%</strong></td>
              <td style={styles.td}>12–15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника</td>
              <td style={styles.tdAccent}><strong>5–8%</strong></td>
              <td style={styles.td}>5–8%</td>
            </tr>
            <tr>
              <td style={styles.td}>Смартфоны</td>
              <td style={styles.tdAccent}><strong>4%</strong></td>
              <td style={styles.td}>4%</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и парфюмерия</td>
              <td style={styles.tdAccent}><strong>20–25%</strong></td>
              <td style={styles.td}>20–25%</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома</td>
              <td style={styles.tdAccent}><strong>15–20%</strong></td>
              <td style={styles.td}>15–20%</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.tdAccent}><strong>10–15%</strong></td>
              <td style={styles.td}>10–15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Зоотовары</td>
              <td style={styles.tdAccent}><strong>15%</strong></td>
              <td style={styles.td}>15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Книги и медиа</td>
              <td style={styles.tdAccent}><strong>10%</strong></td>
              <td style={styles.td}>10%</td>
            </tr>
            <tr>
              <td style={styles.td}>Спорт и туризм</td>
              <td style={styles.tdAccent}><strong>12–17%</strong></td>
              <td style={styles.td}>12–17%</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Логистика и сборка на Ozon</h3>
        <p style={styles.p}>
          На FBO Ozon берёт плату за:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Магистраль (доставка до сортировочного центра):</strong> 30–70 ₽</li>
          <li style={styles.li}><strong>Последняя миля (до покупателя):</strong> 5,5% от цены, минимум 39 ₽</li>
          <li style={styles.li}><strong>Сборка заказа:</strong> 40–80 ₽ в зависимости от склада</li>
        </ul>
        <p style={styles.p}>
          Итого логистика на Ozon FBO для товара стоимостью 500 ₽ — около 90–120 ₽. Это 18–24%
          сверх базовой комиссии.
        </p>

        <h2 style={styles.h2}>Хранение: самая коварная статья расходов</h2>
        <p style={styles.p}>
          Хранение не заметно пока товар продаётся. Но стоит продажам замедлиться — и счёт начинает
          расти быстрее, чем выручка.
        </p>

        <h3 style={styles.h3}>Хранение на Wildberries</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Первые 60 дней: <strong>0,07–0,15 ₽/литр в сутки</strong></li>
          <li style={styles.li}>После 60 дней: ставка вырастает в 2–4 раза</li>
          <li style={styles.li}>Нарушение упаковки или брак: дополнительный штраф 100–500 ₽ за позицию</li>
        </ul>
        <p style={styles.p}>
          Для небольшого товара (1–3 литра) это 2–5 ₽/день, то есть около 60–150 ₽/месяц.
          Для крупного товара (20–50 литров) — уже 400–1500 ₽/месяц. Если карточка не продаётся,
          хранение съедает всю маржу.
        </p>

        <h3 style={styles.h3}>Хранение на Ozon</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>FBO: <strong>0,1–0,15 ₽/литр в сутки</strong>, первые 7 дней — бесплатно</li>
          <li style={styles.li}>Для товаров дольше 180 дней — повышенный тариф</li>
          <li style={styles.li}>При индексе локализации ниже нормы — штраф до 15% от продаж</li>
        </ul>

        <h2 style={styles.h2}>Как посчитать реальную прибыль с учётом комиссий</h2>
        <p style={styles.p}>
          Формула для одного SKU (базовая):
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 14 }}>
          <p style={{ margin: "0 0 8px", color: "#5b21b6", fontWeight: 700 }}>Чистая прибыль = Цена продажи</p>
          <p style={{ margin: "0 0 4px", color: "#374151" }}>− Себестоимость (закупка + доставка до склада)</p>
          <p style={{ margin: "0 0 4px", color: "#374151" }}>− Комиссия маркетплейса (% от цены)</p>
          <p style={{ margin: "0 0 4px", color: "#374151" }}>− Логистика (доставка до покупателя)</p>
          <p style={{ margin: "0 0 4px", color: "#374151" }}>− Хранение (цена / скорость продаж)</p>
          <p style={{ margin: "0 0 4px", color: "#374151" }}>− Возвраты (% возврата × стоимость обратной логистики)</p>
          <p style={{ margin: "0 0 4px", color: "#374151" }}>− Реклама (ДРР × цена)</p>
        </div>

        <h3 style={styles.h3}>Пример расчёта для футболки 990 ₽</h3>
        <table style={styles.table}>
          <tbody>
            <tr><td style={styles.td}>Цена продажи</td><td style={styles.tdAccent}><strong>990 ₽</strong></td></tr>
            <tr><td style={styles.td}>Себестоимость (закупка + упаковка)</td><td style={styles.tdWarning}>−320 ₽</td></tr>
            <tr><td style={styles.td}>Комиссия WB (20%)</td><td style={styles.tdWarning}>−198 ₽</td></tr>
            <tr><td style={styles.td}>Логистика (FBO)</td><td style={styles.tdWarning}>−65 ₽</td></tr>
            <tr><td style={styles.td}>Хранение (3 дня оборачиваемость)</td><td style={styles.tdWarning}>−12 ₽</td></tr>
            <tr><td style={styles.td}>Возвраты (40% × 45 ₽)</td><td style={styles.tdWarning}>−18 ₽</td></tr>
            <tr><td style={styles.td}>Реклама (ДРР 12%)</td><td style={styles.tdWarning}>−119 ₽</td></tr>
            <tr><td style={styles.td}><strong>Чистая прибыль</strong></td><td style={styles.tdAccent}><strong>258 ₽ (26% маржа)</strong></td></tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Если убрать рекламу — маржа 39%. Если возвратность вырастет до 60% — прибыль
          падает до 165 ₽. Вот почему качество фото напрямую влияет на финансовый результат:
          меньше возвратов из-за несоответствия ожиданиям — больше денег в кармане.
        </p>

        <h2 style={styles.h2}>Как снизить эффективную комиссию: 5 рычагов</h2>
        <p style={styles.p}>
          Базовую ставку изменить нельзя. Но можно снизить то, сколько реально уходит маркетплейсу.
        </p>

        <h3 style={styles.h3}>1. Снизить процент возврата</h3>
        <p style={styles.p}>
          Главная причина возврата одежды и обуви — несоответствие реальному товару: другой цвет,
          другая текстура, не та длина. Качественные фото с правильной цветопередачей снижают
          возвратность на 10–20 процентных пунктов. Один наш клиент в категории «Женские платья»
          сократил возврат с 48% до 31% после обновления карточки — только за счёт фото, без
          изменений в самом товаре.
        </p>

        <h3 style={styles.h3}>2. Повысить оборачиваемость</h3>
        <p style={styles.p}>
          Чем быстрее продаётся товар — тем меньше платите за хранение на единицу. Товар с
          оборачиваемостью 7 дней платит за хранение в 4 раза меньше, чем товар с 30-дневным
          оборотом. Карточка с хорошим CTR и конверсией — прямой путь к быстрой оборачиваемости.
        </p>

        <h3 style={styles.h3}>3. Выбрать правильную схему логистики</h3>
        <p style={styles.p}>
          FBO выгодно для ходовых товаров с высокой оборачиваемостью. FBS — для редких позиций,
          товаров с сезонным спросом или тех, что долго хранятся. Слепо держать весь каталог
          на FBO — дорого.
        </p>

        <h3 style={styles.h3}>4. Контролировать остатки</h3>
        <p style={styles.p}>
          Перегрузили склад перед акцией — платите за хранение невыкупленных остатков. Вывозить
          товар обратно тоже стоит денег. Оптимальный остаток — 2–4 недели продаж без запасов
          на 2 месяца вперёд.
        </p>

        <h3 style={styles.h3}>5. Участвовать в акциях с умом</h3>
        <p style={styles.p}>
          Участие в акции WB и Ozon даёт буст трафика, но снижает цену. Если после акции
          конверсия и продажи не выросли достаточно — вы просто подарили маркетплейсу маржу.
          Минимальная цена входа в акцию = себестоимость × 1.15 + все сборы.
        </p>

        <h2 style={styles.h2}>Чек-лист: 12 пунктов перед выставлением цены товара</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Узнал актуальную базовую комиссию для своей категории (проверить в ЛК, не гуглить — ставки меняются)</li>
          <li style={styles.li}>Посчитал стоимость логистики FBO с учётом габаритов и веса</li>
          <li style={styles.li}>Посчитал хранение исходя из реалистичной оборачиваемости (не оптимистичной)</li>
          <li style={styles.li}>Заложил процент возврата по категории: одежда 30–50%, электроника 5–10%</li>
          <li style={styles.li}>Посчитал стоимость обратной логистики за один возврат</li>
          <li style={styles.li}>Определил планируемый ДРР и заложил в цену</li>
          <li style={styles.li}>Добавил НДС/налог (УСН 6% или 15% от прибыли)</li>
          <li style={styles.li}>Проверил, что минимальная цена для акций не ниже точки безубытка</li>
          <li style={styles.li}>Сравнил с ценами конкурентов в топ-20 — цена в рынке?</li>
          <li style={styles.li}>Проверил: при скидке 30% (уровень большинства акций WB) — всё ещё плюс?</li>
          <li style={styles.li}>Запланировал пересмотр цены через 30 дней после старта продаж</li>
          <li style={styles.li}>Для одежды: посчитал прибыль при двух сценариях — возврат 35% и возврат 55%</li>
        </ul>

        <h2 style={styles.h2}>Где смотреть актуальные тарифы</h2>
        <p style={styles.p}>
          Комиссии меняются несколько раз в год. Актуальные данные — только в личном кабинете:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Wildberries:</strong> ЛК → Финансы → Тарифы. Там же — калькулятор логистики.</li>
          <li style={styles.li}><strong>Ozon:</strong> ЛК → Продвижение → Аналитика → Калькулятор комиссий. Можно ввести OZON ID товара и получить точную разбивку.</li>
        </ul>
        <p style={styles.p}>
          Никогда не берите цифры из статей — только из ЛК или официальных документов. Таблицы
          в интернете устаревают быстро, и статья, написанная полгода назад, уже может давать
          неверные ставки.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Считаете возвраты основной статьёй потерь?</strong>{" "}
            Один из самых быстрых способов снизить возвратность — привести фото карточки в соответствие
            с реальным товаром: правильный цвет, текстура, детали.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— 13 кредитов бесплатно на старте, без привязки карты. Загружаете фото товара, получаете
            карточку которая продаёт и не создаёт возвратов из-за «это было не то».
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>Юнит-экономика для маркетплейса: формула, таблица и типичные ошибки</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/cena-tovara-wildberries-ozon" style={{ color: "#7c3aed" }}>Как установить цену товара на Wildberries и Ozon</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>Возвраты на маркетплейсах: при чём здесь фото товара</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}

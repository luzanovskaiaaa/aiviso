import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Подарочные наборы к Новому году на WB и Ozon — Aiviso",
  description: "Как упаковать, сфотографировать и продать подарочный набор на Wildberries и Ozon в декабре. Чек-лист из 16 пунктов и кейс: выручка ×2.4 за 3 недели.",
  keywords: [
    "подарочные наборы wildberries",
    "подарочные наборы ozon новый год",
    "как продавать наборы на маркетплейсе",
    "фото подарочного набора",
    "декабрь продажи маркетплейс",
    "новогодние товары wildberries ozon",
    "упаковка набора для маркетплейса",
    "продажи декабрь wb ozon",
  ],
  alternates: { canonical: "/blog/podarochnye-nabory-novyy-god" },
  openGraph: {
    title: "Подарочные наборы к Новому году на WB и Ozon — Aiviso",
    description: "Как упаковать, сфотографировать и продать подарочный набор на Wildberries и Ozon в декабре. Кейс: выручка ×2.4 за 3 недели.",
    url: "/blog/podarochnye-nabory-novyy-god",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Подарочные наборы к Новому году на WB и Ozon: как упаковать, сфотографировать и заработать в декабре",
  description: "Как собрать, упаковать и сфотографировать подарочный набор для продажи на Wildberries и Ozon в декабре 2026.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/podarochnye-nabory-novyy-god",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Подарочные наборы к Новому году", item: "https://aiviso.ru/blog/podarochnye-nabory-novyy-god" },
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

export default function PodarochnyeNaboryNovyyGod() {
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
          <span style={{ color: "#1f2937" }}>Подарочные наборы к Новому году</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Подарочные наборы к Новому году на WB и Ozon: как упаковать, сфотографировать и заработать в декабре
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>24 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Декабрь — месяц, когда покупатели перестают сравнивать цену и начинают покупать эмоцию.
          Подарочный набор с красивой упаковкой и грамотной карточкой продаётся в 2–3 раза дороже
          тех же товаров по отдельности. Вот как этим воспользоваться за оставшиеся 5 недель до
          Нового года.
        </p>

        <h2 style={styles.h2}>Почему декабрь — лучшее время для наборов</h2>
        <p style={styles.p}>
          По данным аналитики Wildberries за 2025 год, в период с 1 по 25 декабря продажи
          в категории «подарочные наборы» росли в 4,2 раза относительно октября. Ozon фиксирует
          схожую картину: в последние две недели перед Новым годом каждый третий заказ содержит
          хотя бы один товар с пометкой «в подарок».
        </p>
        <p style={styles.p}>
          Психология простая: человек ищет не «крем для рук», а «подарок маме». Он готов
          заплатить 1 400 ₽ за набор из крема, мыла и маски в коробке — хотя те же три
          товара стоят 850 ₽ без упаковки.
        </p>
        <p style={styles.p}>
          Ещё один плюс наборов — они меньше теряют на возвратах. Человек не возвращает подарок
          сам себе. Процент выкупа подарочных наборов на WB стабильно держится выше 70%,
          тогда как по одежде — 45–55%.
        </p>

        <h2 style={styles.h2}>Что продаётся в подарочных наборах: топ категорий декабря</h2>
        <p style={styles.p}>
          Не все категории одинаково хорошо работают в формате набора. Вот что реально берут
          в подарок на WB и Ozon в декабре:
        </p>

        <h3 style={styles.h3}>Наборы до 1 500 ₽ — самый объёмный сегмент</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Уход за телом и лицом</strong> — гели для душа, кремы, скрабы. Маржа 40–55%, конкуренция высокая, но спрос неограниченный.</li>
          <li style={styles.li}><strong>Домашний текстиль</strong> — носки, варежки, мягкие игрушки в крафтовой коробке. Вход от 8 000 ₽ за партию, средний чек 890 ₽.</li>
          <li style={styles.li}><strong>Чай, кофе, специи</strong> — ассорти из 4–6 видов в красивой коробке. Маржа 35–50%, один из самых быстрых оборотов.</li>
          <li style={styles.li}><strong>Свечи и аромадиффузоры</strong> — особенно авторский хэндмейд. CTR на 30% выше, чем у массовых товаров.</li>
        </ul>

        <h3 style={styles.h3}>Наборы 2 000–6 000 ₽ — средний чек с высокой маржой</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Профессиональная косметика</strong> — набор сывороток или масок одного бренда в подарочной коробке.</li>
          <li style={styles.li}><strong>Инструменты и наборы для хобби</strong> — акварель, нитки для вышивки, кисти для рисования.</li>
          <li style={styles.li}><strong>Алкогольные аксессуары</strong> — штопоры, наборы бокалов, подставки. На Ozon категория не ограничена.</li>
          <li style={styles.li}><strong>Детские развивающие наборы</strong> — несколько игрушек или книг под одной темой.</li>
        </ul>

        <h2 style={styles.h2}>Как собрать набор: логика и юнит-экономика</h2>
        <p style={styles.p}>
          Набор должен выглядеть как единое целое, а не как «склеили три товара». Работающая
          формула: один якорный товар + один–два дополняющих + упаковка.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Элемент набора</th>
              <th style={styles.th}>Роль</th>
              <th style={styles.th}>Доля в себестоимости</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Якорный товар</td>
              <td style={styles.td}>Главный аргумент покупки</td>
              <td style={styles.td}>50–60%</td>
            </tr>
            <tr>
              <td style={styles.td}>Дополняющие товары</td>
              <td style={styles.td}>Увеличивают воспринимаемую ценность</td>
              <td style={styles.td}>20–30%</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Упаковка</td>
              <td style={styles.tdAccent}>Создаёт «подарочное» ощущение</td>
              <td style={styles.tdAccent}><strong>10–20%</strong></td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Пример: крем для рук (90 ₽ закупка) + мыло ручной работы (40 ₽) + крафтовая коробка
          с лентой (30 ₽) = себестоимость 160 ₽. Цена продажи 890 ₽. Маржа после комиссии
          WB 15% и логистики — около 420 ₽ с одного набора, или 56%.
        </p>
        <p style={styles.p}>
          Если те же товары продавать по отдельности, крем ушёл бы за 350 ₽, мыло — за 220 ₽.
          Суммарно 570 ₽ при себестоимости 130 ₽ — маржа 55%. Набор даёт больше в абсолютных
          числах: 420 ₽ против 190 ₽ за комплект. И один заказ вместо двух.
        </p>

        <h2 style={styles.h2}>Упаковка подарочного набора: требования WB и Ozon</h2>
        <p style={styles.p}>
          Первая ловушка новичков — создать красивую коробку, которую склад примет только
          после переупаковки. Оба маркетплейса выставят акт и штраф.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Штрихкод</strong> — на самой коробке набора, не на отдельных товарах внутри. Один код для всего набора как единицы товара.</li>
          <li style={styles.li}><strong>Целлофановая плёнка</strong> поверх коробки — защита от вскрытия при приёмке. WB принимает наборы в открытом виде, но Ozon требует запечатку.</li>
          <li style={styles.li}><strong>Вес и габариты</strong> — коробка + содержимое должны вписываться в стандарт хранения. Габарит свыше 40×30×20 см относится к КГТ и тарифицируется дороже.</li>
          <li style={styles.li}><strong>Соответствие фото</strong> — если на карточке зелёная лента, а в поставке красная — маркетплейс засчитает несоответствие. Снимай именно тот вариант, который поедет на склад.</li>
          <li style={styles.li}><strong>Хрупкие товары</strong> — стекло, керамика внутри набора должны быть с пометкой «хрупкое» на коробке и дополнительной прокладкой из пены или гофрокартона.</li>
        </ul>

        <h2 style={styles.h2}>Как сфотографировать набор для карточки: что работает, а что нет</h2>
        <p style={styles.p}>
          Главное отличие съёмки наборов от съёмки одиночных товаров — нужно передать
          несколько объектов как единое целое. Плюс дать ощущение «подарочности».
        </p>

        <h3 style={styles.h3}>Что точно не работает</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Товары разложены в ряд на белом фоне как список — покупатель не понимает, набор это или просто несколько артикулов в одном объявлении.</li>
          <li style={styles.li}>Коробка закрыта и больше ничего — непонятно что внутри, человек уходит к конкуренту.</li>
          <li style={styles.li}>Съёмка при слабом освещении — крафтовая коробка получается грязно-коричневой вместо тёплой.</li>
          <li style={styles.li}>Первый слайд без контекста «подарок» — ни ленты, ни открытки, ни декора.</li>
        </ul>

        <h3 style={styles.h3}>Что работает</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Открытая коробка + разложенные товары рядом.</strong> Первый слайд — набор в коробке (закрытой или полуоткрытой). Второй — содержимое разложено вокруг коробки. Третий — каждый товар крупно.</li>
          <li style={styles.li}><strong>Lifestyle-фон с намёком на праздник.</strong> Деревянный стол, немного хвойных веток, крафтовая бумага. Не нужен полный декор — достаточно одной детали.</li>
          <li style={styles.li}><strong>Инфографика с составом набора на 2-м слайде.</strong> Список с иконками: «крем для рук 75 мл», «мыло 80 г», «маска-плёнка 2 шт». Убирает вопрос «а что там внутри?».</li>
          <li style={styles.li}><strong>AI-генерация для быстрой смены сцен.</strong> Если нужно попробовать 5 вариантов фона под один набор, студия берёт за это 15 000 ₽+. <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерация в Aiviso</Link> делает это за несколько минут и 150–300 ₽.</li>
          <li style={styles.li}><strong>Текст «В подарок» или «Подарочный набор»</strong> на первом слайде крупно — поисковые системы маркетплейса индексируют текст с фото.</li>
        </ul>

        <p style={styles.p}>
          Один наш клиент в категории «косметика» поменял первый слайд — убрал белый фон
          и добавил сцену с крафтовой бумагой и хвойной веткой. CTR вырос с 2.1% до 4.8%.
          Заказов в день с 8 до 23 — без изменений цены и без рекламы.
        </p>

        <h2 style={styles.h2}>SEO и заголовок для подарочного набора</h2>
        <p style={styles.p}>
          Новогодний набор — отдельная поисковая сущность. Люди ищут не «крем для рук»,
          а «подарок маме недорого», «набор косметики новый год», «подарочный набор женщине
          до 1000 рублей». Заголовок и характеристики должны это учитывать.
        </p>
        <p style={styles.p}>Формула заголовка:</p>
        <p style={{ padding: "12px 16px", background: "#f5f3ff", borderLeft: "3px solid #7c3aed", borderRadius: 4, fontFamily: "monospace", fontSize: 14 }}>
          [Вид набора] [для кого] [состав или главный товар] [объём/количество] в подарок
        </p>
        <p style={styles.p}>Пример:</p>
        <p style={{ padding: "12px 16px", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 4, fontSize: 14 }}>
          «Подарочный набор для женщин крем для рук + мыло + маска 3 предмета Новый год»
        </p>
        <p style={styles.p}>
          В характеристиках обязательно заполни поля: «Назначение» — Подарок; «Повод» — Новый год,
          День рождения; «Получатель» — Женщине, Маме, Коллеге. На Ozon эти атрибуты напрямую
          влияют на появление карточки в подборках «Подарки до 1 000 ₽» и аналогичных.
        </p>

        <h2 style={styles.h2}>Когда выставлять набор и как управлять ценой в декабре</h2>
        <p style={styles.p}>
          Правило декабря: цена поднимается в два этапа.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>1–15 декабря</strong> — стандартная цена, основная задача набрать отзывы и позиции в поиске. На этом этапе можно дать скидку 10–15% чтобы ускорить первые заказы.</li>
          <li style={styles.li}><strong>16–25 декабря</strong> — пик спроса. Поднять цену на 10–20% от стартовой. Покупатели уже не смотрят на цену — ищут «быструю доставку до 31 декабря».</li>
          <li style={styles.li}><strong>26–31 декабря</strong> — последний шанс. Часть покупателей ещё не купила подарки. Экспресс-доставка становится аргументом номер один, цена уходит на второй план.</li>
        </ul>
        <p style={styles.p}>
          Следи за индексом цен WB — маркетплейс может понизить твои позиции, если решит, что ты
          завысил цену относительно аналогов. Поднимай плавно, не резче 15–20% за раз.
        </p>

        <h2 style={styles.h2}>Чек-лист из 16 пунктов перед выставлением набора</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Набор как единый артикул создан в ЛК (не несколько артикулов в комплекте)</li>
          <li style={styles.li}>Штрихкод на внешней упаковке, а не на отдельных товарах</li>
          <li style={styles.li}>Коробка запечатана плёнкой (для Ozon обязательно)</li>
          <li style={styles.li}>На коробке нет следов скотча или наклеек от поставщика</li>
          <li style={styles.li}>Первый слайд — набор в подарочном контексте (лента, крафт, декор)</li>
          <li style={styles.li}>Второй слайд — открытый набор с инфографикой состава</li>
          <li style={styles.li}>Третий–пятый слайды — каждый товар крупно</li>
          <li style={styles.li}>Формат фото 900×1200 (3:4)</li>
          <li style={styles.li}>Заголовок содержит слова «подарочный набор» и «Новый год»</li>
          <li style={styles.li}>Характеристики: Назначение = Подарок, Повод = Новый год</li>
          <li style={styles.li}>Описание отвечает на вопрос «кому подойдёт этот набор»</li>
          <li style={styles.li}>Цена набора выгодна в сравнении с товарами по отдельности</li>
          <li style={styles.li}>Юнит-экономика проверена: маржа не ниже 25% после всех расходов</li>
          <li style={styles.li}>Первая партия — не менее 50 штук (меньше — уйдёт в out-of-stock в пике)</li>
          <li style={styles.li}>Пополнение поставки запланировано на 10–12 декабря</li>
          <li style={styles.li}>Карточка проверена с мобильного: главное фото читается в листинге</li>
        </ul>

        <h2 style={styles.h2}>Кейс: набор для ухода за руками, с 3 до 70 заказов в день за 3 недели</h2>
        <p style={styles.p}>
          Продавец в категории «косметика» в ноябре 2025 года собрал набор из трёх товаров
          своего ассортимента: крем для рук 75 мл, крем для ног 50 мл, бальзам для губ 10 г.
          Упаковал в крафтовую коробку с лентой, цена набора 1 190 ₽ против 950 ₽ за три
          товара по отдельности.
        </p>
        <p style={styles.p}>
          <strong>Первая проблема:</strong> фото на белом фоне, никакого новогоднего контекста.
          CTR в листинге 1.4%. Три заказа в день за первую неделю.
        </p>
        <p style={styles.p}>
          <strong>Решение:</strong> сделали новое главное фото через AI — набор на деревянной
          поверхности с двумя хвойными ветками и крафтовой бумагой фоном. Добавили инфографику
          с составом и заголовок «в подарок».
        </p>
        <p style={styles.p}>
          <strong>Результат:</strong> CTR с 1.4% до 3.9%. На второй неделе декабря —
          47 заказов в день. На третьей — 70. Итоговая выручка от набора за декабрь составила
          487 000 ₽. Выручка за ноябрь по тем же трём товарам по отдельности была 198 000 ₽.
          Рост ×2.4 — без увеличения рекламного бюджета.
        </p>

        <h2 style={styles.h2}>Когда начинать: последний срок</h2>
        <p style={styles.p}>
          Если набора ещё нет — у тебя есть примерно до 5–7 декабря чтобы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Собрать и упаковать первую партию (50–100 штук)</li>
          <li style={styles.li}>Сделать фото и выставить карточку</li>
          <li style={styles.li}>Дать алгоритму 5–7 дней на индексацию</li>
          <li style={styles.li}>Успеть в пик 15–25 декабря</li>
        </ul>
        <p style={styles.p}>
          Если выставить позже 10 декабря — алгоритм не успеет поднять карточку в поиске,
          и большую часть продаж придётся делать только через платную рекламу. Всё ещё
          выгодно, но эффективность ниже.
        </p>

        <div style={{ marginTop: 48, padding: "24px", background: "#f5f3ff", border: "2px solid #ddd6fe", borderRadius: 16 }}>
          <h3 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 700, color: "#5b21b6" }}>
            Сделай фото набора за 2 минуты
          </h3>
          <p style={{ margin: "0 0 16px", color: "#374151", fontSize: 15 }}>
            Загрузи предметное фото своего набора — Aiviso добавит новогодний фон, крафтовую
            сцену и lifestyle-контекст. Первые 2 кадра бесплатно. Успей до 5 декабря.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/kartochka-tovara-novyy-god-2026" style={{ color: "#7c3aed" }}>Карточка товара к Новому году: как подготовить фото и описание на WB и Ozon</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/komplekty-nabory-marketpleys" style={{ color: "#7c3aed" }}>Комплекты и наборы на WB и Ozon: как поднять средний чек без рекламы</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Главная — AI-фото товара для маркетплейса</Link></li>
        </ul>
      </article>
    </>
  );
}

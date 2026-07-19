import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как найти поставщика для маркетплейса: гайд 2026 — Aiviso",
  description: "Где искать поставщиков для WB и Ozon в 2026: Alibaba, 1688, российские оптовики, выставки. Чек-лист проверки, переговоры и типичные ошибки.",
  keywords: [
    "как найти поставщика для маркетплейса",
    "поставщик для wildberries",
    "поставщик для ozon",
    "где найти поставщика",
    "alibaba для селлера",
    "1688 для маркетплейса",
    "оптовые поставщики россия",
    "как проверить поставщика",
    "первый заказ у поставщика",
  ],
  alternates: { canonical: "/blog/kak-nayti-postavshchika-2026" },
  openGraph: {
    title: "Как найти поставщика для маркетплейса: гайд 2026",
    description: "Alibaba, 1688, российские оптовики и выставки. Где искать, как проверить и как не потерять деньги на первом заказе.",
    url: "/blog/kak-nayti-postavshchika-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как найти поставщика для маркетплейса: пошаговый гайд 2026",
  description: "Где искать поставщиков для WB и Ozon в 2026: Alibaba, 1688, российские оптовики, выставки. Чек-лист проверки, переговоры и типичные ошибки.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-nayti-postavshchika-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Как найти поставщика", item: "https://aiviso.ru/blog/kak-nayti-postavshchika-2026" },
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

export default function KakNaytiPostavshchika() {
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
          <span style={{ color: "#1f2937" }}>Как найти поставщика</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как найти поставщика для маркетплейса: пошаговый гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>19 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Первый вопрос каждого начинающего селлера: «Где брать товар?» Рассказываем реально
          работающие каналы поиска поставщиков для Wildberries и Ozon — с конкретными площадками,
          ценами и чек-листом проверки перед первым заказом.
        </p>

        <h2 style={styles.h2}>Три типа поставщиков: кто вам нужен</h2>
        <p style={styles.p}>
          Прежде чем искать — определитесь, с кем хотите работать. Тип поставщика влияет на цену,
          минимальный заказ (MOQ) и скорость доставки.
        </p>

        <h3 style={styles.h3}>Производители</h3>
        <p style={styles.p}>
          Лучшая цена — разрыв с розницей 40–70%. Но у них высокий MOQ: от 500–1 000 единиц,
          иногда только под собственную торговую марку. Реалистичный вариант если оборот уже от
          500 000 ₽/мес. До этого — нерентабельно замораживать деньги в большой партии.
        </p>
        <p style={styles.p}>
          Один селлер из категории «спортивные товары» вышел на производителя в Иваново напрямую
          и снизил закупочную цену с 380 ₽ до 210 ₽ за единицу. За полгода это дало
          +1.7 млн ₽ дополнительной маржи при обороте 6–7 млн ₽/мес.
        </p>

        <h3 style={styles.h3}>Дистрибьюторы и официальные импортёры</h3>
        <p style={styles.p}>
          Работают с брендами — Samsung, Tefal, Xiaomi и тысячами менее известных. MOQ от 50–200 единиц.
          Цена выше заводской на 15–30%, зато документы чистые, сертификаты есть, гарантия официальная.
          Для электроники, косметики, детских товаров — путь с наименьшими рисками.
        </p>

        <h3 style={styles.h3}>Оптовые посредники</h3>
        <p style={styles.p}>
          Берут у тех же дистрибьюторов или с китайских складов, добавляют наценку 10–25%.
          Плюс: MOQ от 10–30 штук, можно собрать сборную поставку из разных категорий.
          Минус: цена выше и нет прямых отношений с брендом. Хороший старт для теста ниши
          без заморозки большого бюджета.
        </p>

        <h2 style={styles.h2}>Где искать поставщиков в России</h2>

        <h3 style={styles.h3}>Оптовые рынки и базы</h3>
        <p style={styles.p}>Самый быстрый способ найти поставщика — приехать лично:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Садовод (Москва)</strong> — крупнейший в России, 12 000 торговых точек. Одежда, обувь, аксессуары, текстиль. Цены на 30–50% ниже розницы, минимум от 5–10 единиц.</li>
          <li style={styles.li}><strong>Люблино (Москва)</strong> — электроника, бытовая техника, игрушки, хозтовары.</li>
          <li style={styles.li}><strong>Гусинобродское шоссе (Новосибирск)</strong> — крупнейший за Уралом, все категории.</li>
          <li style={styles.li}><strong>Апраксин двор (СПб)</strong> — инструменты, хозтовары, техника.</li>
        </ul>
        <p style={styles.p}>
          На рынке важно брать контакты на будущее: после первой покупки просите карточку или
          добавляйтесь в WhatsApp. Следующий заказ уже по телефону, без поездки.
        </p>

        <h3 style={styles.h3}>Выставки и B2B-ярмарки</h3>
        <p style={styles.p}>
          Лучший канал для поиска производителей и эксклюзивных дистрибьюторов:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>CPM Moscow</strong> — одежда и аксессуары (март, сентябрь)</li>
          <li style={styles.li}><strong>WorldFood Moscow</strong> — продукты питания (сентябрь)</li>
          <li style={styles.li}><strong>Интерткань</strong> — текстиль и материалы (февраль, август)</li>
          <li style={styles.li}><strong>Мягкая игрушка и сувениры</strong> — ежеквартально, Москва</li>
        </ul>
        <p style={styles.p}>
          На выставках дают образцы, прайс-листы и можно сразу договариваться об условиях.
          Конкуренция ниже — не все селлеры физически ездят.
        </p>

        <h3 style={styles.h3}>Онлайн-площадки для B2B в России</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Postavki.ru</strong> — база российских поставщиков с каталогом</li>
          <li style={styles.li}><strong>Tiu.ru</strong> — оптовые предложения с фильтрами по регионам</li>
          <li style={styles.li}><strong>OptList.ru</strong> — агрегатор оптовиков по категориям</li>
          <li style={styles.li}>Телеграм-каналы: ищите по запросу «опт [ваш товар]» — часто находятся живые чаты с предложениями напрямую</li>
        </ul>

        <h2 style={styles.h2}>Китай: Alibaba, 1688 и агенты</h2>
        <p style={styles.p}>
          По оценкам участников сообществ WB и Ozon, 60–70% товаров на маркетплейсах — китайского
          происхождения. Прямые закупки из Китая дают цены в 2–4 раза ниже российского опта.
        </p>

        <h3 style={styles.h3}>Alibaba vs 1688</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Alibaba</th>
              <th style={styles.th}>1688</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Язык</td>
              <td style={styles.td}>Английский</td>
              <td style={styles.td}>Китайский</td>
            </tr>
            <tr>
              <td style={styles.td}>Аудитория</td>
              <td style={styles.td}>Международный B2B</td>
              <td style={styles.td}>Внутренний рынок Китая</td>
            </tr>
            <tr>
              <td style={styles.td}>Цена</td>
              <td style={styles.td}>+20–40% к 1688</td>
              <td style={styles.tdAccent}><strong>Ниже — это внутренний прайс</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>MOQ</td>
              <td style={styles.td}>От 100–500 шт</td>
              <td style={styles.td}>От 1–50 шт (зависит от поставщика)</td>
            </tr>
            <tr>
              <td style={styles.td}>Оплата</td>
              <td style={styles.td}>Карта, T/T</td>
              <td style={styles.td}>Только через агента или AliPay</td>
            </tr>
            <tr>
              <td style={styles.td}>Сложность входа</td>
              <td style={styles.td}>Низкая</td>
              <td style={styles.td}>Нужен агент или базовый китайский</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Простое правило: <strong>начинайте с Alibaba</strong> пока объём маленький. Как только
          оборот перевалил за 1–2 млн ₽/мес — переходите на 1688 через агента. Разница в цене
          быстро покрывает агентскую комиссию (обычно 5–10% от заказа).
        </p>

        <h3 style={styles.h3}>Когда нужен агент по закупкам из Китая</h3>
        <p style={styles.p}>Агент нужен в трёх ситуациях:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Работаете с 1688 — платёж и коммуникацию без него не провернуть</li>
          <li style={styles.li}>Объём от $3 000–5 000 за заказ — сборный груз, несколько фабрик, проверка качества на месте</li>
          <li style={styles.li}>Нужна кастомизация: своя упаковка, логотип, маркировка — агент переговорит с фабрикой</li>
        </ul>
        <p style={styles.p}>
          Искать агентов: Telegram-каналы «агент Китай», «байер из Китая», «карго». Перед тем
          как отдать деньги — просите фотоотчёт с производства, проверяйте отзывы от других
          клиентов. Надёжные агенты работают давно и не боятся показывать склад и документы.
        </p>

        <h2 style={styles.h2}>Как проверить поставщика перед первым заказом</h2>
        <p style={styles.p}>
          Потерять деньги на первом заказе — стандартная история для новичков. Минимальный
          чек-лист проверки:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>ИНН и юрлицо.</strong> Российский поставщик должен работать как ИП или ООО. Проверяйте через egrul.nalog.ru. Физлица без регистрации — огромный риск.</li>
          <li style={styles.li}><strong>Сертификаты и декларации соответствия.</strong> Особенно критично для детских товаров, косметики, электроники. Без сертификата маркетплейс может не принять товар или заблокировать карточку.</li>
          <li style={styles.li}><strong>Отзывы.</strong> Ищите по ИНН или названию компании в Telegram, форумах маркетплейсов. Несколько негативных отзывов за год — норма, системные жалобы — обходите стороной.</li>
          <li style={styles.li}><strong>Тестовый заказ.</strong> Перед крупной закупкой возьмите 10–30 единиц. Проверьте соответствие образцу, упаковку, состояние при получении.</li>
          <li style={styles.li}><strong>Договор.</strong> Даже с частным оптовиком — письменные условия (хотя бы в мессенджере): цена, срок, условия возврата брака.</li>
          <li style={styles.li}><strong>Реальные сроки.</strong> «Неделя» на практике часто превращается в 3–4. Закладывайте буфер особенно перед сезоном.</li>
        </ul>

        <h2 style={styles.h2}>Переговоры: как снизить цену и MOQ</h2>
        <p style={styles.p}>
          Поставщики ожидают торга. Особенно в Китае — цена в прайсе почти никогда не финальная.
        </p>

        <h3 style={styles.h3}>Аргументы для снижения цены</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Объём.</strong> «Если всё пойдёт хорошо, следующий заказ возьму в 3 раза больше» — это работает. Поставщики ценят долгосрочные отношения.</li>
          <li style={styles.li}><strong>Стопроцентная предоплата.</strong> Снижает риск поставщика — просите 5–8% скидку за это.</li>
          <li style={styles.li}><strong>Конкурентные предложения.</strong> «Другой поставщик даёт аналог по X рублей» — только если правда. Блеф легко проверяется и убивает доверие.</li>
          <li style={styles.li}><strong>Отказ от части условий.</strong> Не нужна фирменная упаковка, готовы взять остатки прошлого сезона — поставщик охотно снизит цену.</li>
        </ul>

        <h3 style={styles.h3}>Как снизить MOQ</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Предложить доплату за малую партию — некоторые поставщики соглашаются</li>
          <li style={styles.li}>Сборная закупка с другим селлером — разбить MOQ пополам (найти партнёра в тематических Telegram-чатах)</li>
          <li style={styles.li}>Взять несколько SKU одного поставщика, чтобы суммарный объём дотянул до MOQ</li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки при выборе поставщика</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Один поставщик — одна категория.</strong> Если он подведёт со сроками перед сезоном, останетесь без товара. Всегда имейте запасной вариант.</li>
          <li style={styles.li}><strong>Большая первая партия без теста.</strong> Закупить 1 000 единиц без тестового заказа — типичная история со стоком который не продаётся. Сначала 30–50 штук, убедиться в конверсии — потом крупный заказ.</li>
          <li style={styles.li}><strong>Игнорировать логистику.</strong> Доставка из Китая морем — 45 дней заморожены оборотные деньги. Авиа — дороже в 3–5 раз, но быстро. Считайте полную себестоимость.</li>
          <li style={styles.li}><strong>Товар под запрещённые бренды.</strong> Реплики под популярные марки регулярно блокируются по жалобам правообладателей. Один такой заказ может стоить блокировки всего аккаунта.</li>
          <li style={styles.li}><strong>Не проверять требования маркетплейса заранее.</strong> Некоторые категории требуют обязательных документов до выхода на маркетплейс. Узнавайте список до закупки, не после.</li>
          <li style={styles.li}><strong>Не готовить фото до поставки на склад.</strong> После отгрузки товар уже на складе WB или Ozon — переснять нельзя. Делайте предметные фото из образцов до отправки.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист перед первым заказом у нового поставщика</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Проверить ИНН и регистрацию юрлица через egrul.nalog.ru</li>
          <li style={styles.li}>Запросить и проверить сертификаты соответствия на товар</li>
          <li style={styles.li}>Сделать тестовый заказ (10–30 единиц)</li>
          <li style={styles.li}>Сравнить полученный товар с образцами и описанием</li>
          <li style={styles.li}>Зафиксировать цену, условия и сроки в письменном виде</li>
          <li style={styles.li}>Рассчитать полную себестоимость с доставкой, таможней (если Китай) и хранением</li>
          <li style={styles.li}>Проверить требования маркетплейса к документам в вашей категории</li>
          <li style={styles.li}>Снять предметные фото из образцов для карточки до отправки на склад</li>
          <li style={styles.li}>Определить запасного поставщика на случай срыва поставки</li>
        </ul>

        <p style={styles.p}>
          Один из наших клиентов в категории «посуда» выстроил схему за 3 месяца: тест через
          российского оптовика (50 единиц, оборачиваемость хорошая), потом нашёл фабрику на 1688
          через агента и снизил закупочную цену с 420 ₽ до 190 ₽. При обороте 800 штук в месяц
          это +184 000 ₽ дополнительной маржи ежемесячно.
        </p>
        <p style={styles.p}>
          Параллельно он обновил фото карточек — переснял через{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>AI-генератор Aiviso</Link>.
          Конверсия выросла с 4.1% до 6.8% — в сумме продажи выросли на ~65% при той же
          рекламной ставке.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Нашли новый товар — нужны фото для карточки?</strong>{" "}
            Загрузите предметное фото в{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>{" "}
            и получите готовые карточки 900×1200 для Wildberries и Ozon за 2 минуты.
            13 кредитов бесплатно при регистрации — хватит на полноценный тест с новым товаром.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>Юнит-экономика для маркетплейса: формула и типичные ошибки</Link></li>
          <li><Link href="/blog/kak-vybrat-nishu-wildberries-2026" style={{ color: "#7c3aed" }}>Как выбрать нишу на Wildberries в 2026</Link></li>
          <li><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries в 2026</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
        </ul>
      </article>
    </>
  );
}

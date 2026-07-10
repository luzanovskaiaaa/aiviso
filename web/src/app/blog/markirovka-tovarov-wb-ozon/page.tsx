import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Маркировка для WB и Ozon: штрихкоды и Честный знак 2026 — Aiviso",
  description:
    "Штрихкоды EAN-13, этикетки, Честный знак: полное руководство по маркировке товаров для Wildberries и Ozon. Чек-лист из 12 пунктов и суммы штрафов.",
  keywords: [
    "маркировка товаров wildberries",
    "маркировка ozon 2026",
    "штрихкод для маркетплейса",
    "честный знак маркетплейс",
    "этикетка для wb",
    "обязательная маркировка селлер",
    "кизо wildberries",
    "маркировка одежды ozon",
  ],
  alternates: { canonical: "/blog/markirovka-tovarov-wb-ozon" },
  openGraph: {
    title: "Маркировка товаров для WB и Ozon: штрихкоды и Честный знак в 2026",
    description:
      "Полное руководство: EAN-13, Честный знак, этикетки. Кто обязан, как наносить, какие штрафы. Чек-лист из 12 пунктов.",
    url: "/blog/markirovka-tovarov-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Маркировка товаров для Wildberries и Ozon: штрихкоды и Честный знак в 2026",
  description:
    "Полное руководство по маркировке товаров для WB и Ozon: EAN-13, Честный знак, этикетки, штрафы. Чек-лист из 12 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/markirovka-tovarov-wb-ozon",
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
      name: "Маркировка товаров для WB и Ozon",
      item: "https://aiviso.ru/blog/markirovka-tovarov-wb-ozon",
    },
  ],
};

const s = {
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
  callout: {
    padding: "16px 20px",
    background: "#fef3c7",
    border: "1px solid #fcd34d",
    borderRadius: 12,
    margin: "16px 0",
    fontSize: 14,
    color: "#92400e",
  } as React.CSSProperties,
};

export default function MarkirovkaTovarovWbOzon() {
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
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Главная
          </Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Блог
          </Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Маркировка товаров для WB и Ozon</span>
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
          Маркировка товаров для Wildberries и Ozon: штрихкоды, этикетки и Честный знак в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>10 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Неправильная маркировка — одна из главных причин штрафов и задержек поставок на WB и Ozon. Разбираем
          всё, что нужно знать о штрихкодах EAN-13, этикетках и Честном знаке — без лишней воды, с
          конкретными требованиями и суммами штрафов.
        </p>

        <h2 style={s.h2}>Зачем маркетплейсам маркировка</h2>
        <p style={s.p}>
          Для WB и Ozon маркировка решает три задачи: идентификация товара на складе, защита от пересорта и
          соответствие государственным требованиям (часть категорий обязана иметь КиЗ Честного знака по
          закону). Без корректной маркировки товар не пройдёт приёмку или будет возвращён за счёт
          продавца.
        </p>
        <p style={s.p}>
          В 2026 году требования ужесточились: Wildberries ввёл обязательную проверку штрихкода при
          приёмке, Ozon — автоматическое сканирование в сортировочных центрах. Пропустить нечитаемый
          баркод через приёмку стало практически невозможно.
        </p>

        <h2 style={s.h2}>Штрихкод EAN-13: базовая маркировка для любого товара</h2>
        <p style={s.p}>
          EAN-13 — стандартный штрихкод из 13 цифр. Он нужен для каждого SKU (уникального сочетания
          товара, цвета, размера). Один штрихкод = один вариант товара. Продаёте рубашку в трёх цветах
          и четырёх размерах — нужно 12 разных EAN-13.
        </p>

        <h3 style={s.h3}>Как получить штрихкод</h3>
        <p style={s.p}>Есть три способа:</p>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>GS1 Russia (официально).</strong> Вступительный взнос от 25 000 ₽ + ежегодный от
            10 000 ₽. Выдаёт неограниченное количество EAN для вашего ГЛН (глобального номера
            локации). Подходит для брендов и крупных продавцов.
          </li>
          <li style={s.li}>
            <strong>Wildberries и Ozon генерируют сами.</strong> Оба маркетплейса умеют выдавать
            штрихкоды при создании карточки. Для продаж только на одной площадке — самый простой
            вариант.
          </li>
          <li style={s.li}>
            <strong>Генераторы EAN-13.</strong> Бесплатные онлайн-сервисы создают корректный штрихкод.
            Технически работает, но без регистрации в GS1 существует риск коллизии — другой продавец
            может получить тот же номер.
          </li>
        </ul>

        <div style={s.callout}>
          <strong>Один из наших клиентов</strong> в категории «Детские игрушки» получил 47 штрафов за
          пересорт за один квартал. Причина: два SKU получили один и тот же EAN-13 через бесплатный
          генератор. После перехода на GS1 — ноль нарушений за полгода.
        </div>

        <h3 style={s.h3}>Требования к этикетке со штрихкодом</h3>
        <ul style={s.ul}>
          <li style={s.li}>Размер: минимум 30 × 20 мм (рекомендуется 58 × 40 мм для надёжного сканирования)</li>
          <li style={s.li}>Контрастность: чёрный штрихкод на белом или светло-жёлтом фоне</li>
          <li style={s.li}>Отступ (quiet zone): минимум 3 мм по бокам штрихкода</li>
          <li style={s.li}>Бумага: матовая, без бликов — лазерный сканер плохо читает глянец</li>
          <li style={s.li}>Расположение: на внешней упаковке, не на пакете поверх другой этикетки</li>
          <li style={s.li}>
            Для одежды Wildberries: этикетка пришивается или крепится пластиковым держателем —
            наклейки на ткани не принимаются
          </li>
        </ul>

        <h2 style={s.h2}>Честный знак: обязательная маркировка по товарным группам</h2>
        <p style={s.p}>
          «Честный знак» — государственная система маркировки товаров. КиЗ (контрольно-идентификационный
          знак) — QR-код с криптозащитой, который подтверждает подлинность товара и даёт ему право на
          продажу. Без КиЗ в 2026 году нельзя легально продавать большинство категорий на WB и Ozon.
        </p>

        <h3 style={s.h3}>Какие категории товаров требуют Честный знак</h3>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Категория</th>
              <th style={s.th}>Обязательно с</th>
              <th style={s.th}>Тип маркировки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>Одежда (верхняя, рабочая, спортивная)</td>
              <td style={s.td}>2021</td>
              <td style={s.tdAccent}>КиЗ (вшитый или навесной)</td>
            </tr>
            <tr>
              <td style={s.td}>Обувь</td>
              <td style={s.td}>2020</td>
              <td style={s.tdAccent}>КиЗ (клеится или вшивается)</td>
            </tr>
            <tr>
              <td style={s.td}>Постельное бельё, подушки, одеяла</td>
              <td style={s.td}>2022</td>
              <td style={s.tdAccent}>КиЗ на упаковке</td>
            </tr>
            <tr>
              <td style={s.td}>Духи и туалетная вода</td>
              <td style={s.td}>2021</td>
              <td style={s.tdAccent}>КиЗ на флаконе</td>
            </tr>
            <tr>
              <td style={s.td}>Шины и покрышки</td>
              <td style={s.td}>2021</td>
              <td style={s.tdAccent}>КиЗ на боковине</td>
            </tr>
            <tr>
              <td style={s.td}>Фотоаппараты</td>
              <td style={s.td}>2022</td>
              <td style={s.tdAccent}>КиЗ на упаковке</td>
            </tr>
            <tr>
              <td style={s.td}>БАД, безрецептурные лекарства</td>
              <td style={s.td}>2023–2024</td>
              <td style={s.tdAccent}>КиЗ на упаковке</td>
            </tr>
            <tr>
              <td style={s.td}>Пиво и слабоалкогольные напитки</td>
              <td style={s.td}>2023</td>
              <td style={s.tdAccent}>КиЗ на таре</td>
            </tr>
            <tr>
              <td style={s.td}>Игрушки, коляски</td>
              <td style={s.td}>2024–2025</td>
              <td style={s.tdAccent}>КиЗ на упаковке</td>
            </tr>
          </tbody>
        </table>

        <p style={s.p}>
          Если вашей категории нет в таблице — это не значит, что она никогда не попадёт под
          Честный знак. Система постепенно расширяется. Проверяйте актуальный список на{" "}
          <strong>честныйзнак.рф</strong> минимум раз в квартал.
        </p>

        <h3 style={s.h3}>Как получить КиЗ</h3>
        <ol style={s.ol}>
          <li style={s.li}>
            Зарегистрируйтесь в системе «Честный знак» на сайте crpt.ru. Нужна УКЭП (усиленная
            квалифицированная электронная подпись) — выдаётся в налоговой или аккредитованных УЦ.
          </li>
          <li style={s.li}>
            Опишите товар в личном кабинете: GTIN, страна производства, состав, размер.
          </li>
          <li style={s.li}>
            Закажите коды маркировки. Стоимость одного КиЗ — <strong>50 копеек</strong> (без НДС),
            оплата через ЛК «Честного знака».
          </li>
          <li style={s.li}>
            Нанесите КиЗ на товар до его ввода в оборот (до отгрузки на склад маркетплейса).
          </li>
          <li style={s.li}>
            Передайте сведения о вводе в оборот через ЭДО или ЛК «Честного знака».
          </li>
        </ol>

        <h2 style={s.h2}>Как наносить этикетки на Wildberries и Ozon: различия</h2>
        <p style={s.p}>
          Несмотря на схожие требования по содержанию, WB и Ozon различаются по месту размещения
          этикеток и дополнительным полям.
        </p>

        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Требование</th>
              <th style={s.th}>Wildberries</th>
              <th style={s.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>Штрихкод товара</td>
              <td style={s.td}>EAN-13 или внутренний WB-штрихкод</td>
              <td style={s.td}>EAN-13 или внутренний Ozon-штрихкод</td>
            </tr>
            <tr>
              <td style={s.td}>Этикетка короба (FBO)</td>
              <td style={s.td}>ШК поставки + ШК короба, А5</td>
              <td style={s.td}>ШК поставки + ШК паллеты, А5</td>
            </tr>
            <tr>
              <td style={s.td}>Дополнительные поля на этикетке</td>
              <td style={s.td}>Артикул WB, размер, цвет</td>
              <td style={s.td}>Артикул Ozon, название SKU</td>
            </tr>
            <tr>
              <td style={s.td}>КиЗ Честного знака</td>
              <td style={s.td}>На изделии (не заклеивать)</td>
              <td style={s.td}>На изделии (не заклеивать)</td>
            </tr>
            <tr>
              <td style={s.td}>Стикер на прозрачный пакет</td>
              <td style={s.td}>Обязателен, не закрывать товар</td>
              <td style={s.td}>Обязателен, не закрывать товар</td>
            </tr>
          </tbody>
        </table>

        <div style={s.callout}>
          Обе площадки принципиально запрещают заклеивать КиЗ «Честного знака» этикеткой или
          наклейкой. Если покрыть QR-код другим стикером — товар уйдёт на актирование, а потом
          на штраф.
        </div>

        <h2 style={s.h2}>Типичные ошибки и штрафы за маркировку</h2>
        <p style={s.p}>
          Разберём ошибки, с которыми чаще всего сталкиваются селлеры при первых поставках.
        </p>

        <h3 style={s.h3}>На Wildberries</h3>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Нечитаемый штрихкод.</strong> Причины: низкое разрешение печати (нужно минимум
            300 dpi), бликующая бумага или мятая упаковка. Штраф — 100 ₽ за единицу, плюс товар
            уходит на ответственное хранение по 50 ₽/день.
          </li>
          <li style={s.li}>
            <strong>Несоответствие штрихкода карточке.</strong> Если EAN на товаре не совпадает с
            EAN в системе WB — пересорт. Штраф 1 500 ₽ + возврат партии за счёт продавца.
          </li>
          <li style={s.li}>
            <strong>Отсутствие КиЗ на обязательном товаре.</strong> WB вправе изъять партию и
            передать данные в Роспотребнадзор. Административный штраф от 50 000 ₽ на ИП,
            от 100 000 ₽ на юрлицо.
          </li>
          <li style={s.li}>
            <strong>Отсутствие русскоязычного описания на этикетке.</strong> По закону о защите прав
            потребителей состав и правила ухода (для одежды) — на русском. Штраф до 20 000 ₽.
          </li>
        </ul>

        <h3 style={s.h3}>На Ozon</h3>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Отсутствие штрихкода FBS-отправления.</strong> При схеме FBS каждое отправление
            упаковывается и маркируется в день отгрузки. Забыл стикер — Ozon не приймает посылку
            в сортировочном центре. Штраф 500 ₽ за отправление + рейтинг доставки падает.
          </li>
          <li style={s.li}>
            <strong>Этикетка поверх клапана коробки.</strong> При вскрытии этикетка рвётся, штрихкод
            не читается. Ozon требует клеить ярлык на боковую стенку коробки.
          </li>
          <li style={s.li}>
            <strong>Дублирующийся EAN.</strong> Если один EAN-13 используется для двух разных SKU —
            автоматический пересорт, отмена заказов и блокировка карточки.
          </li>
        </ul>

        <h2 style={s.h2}>Чек-лист: маркировка перед отправкой</h2>
        <p style={s.p}>
          Пройдите этот список перед каждой поставкой — на WB и Ozon одинаково:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>Каждый SKU имеет уникальный EAN-13, не повторяющийся в других карточках</li>
          <li style={s.li}>Штрихкод распечатан с разрешением минимум 300 dpi на матовой бумаге</li>
          <li style={s.li}>Этикетка читается ручным сканером с расстояния 5–10 см</li>
          <li style={s.li}>EAN на этикетке совпадает с EAN в карточке маркетплейса</li>
          <li style={s.li}>КиЗ Честного знака присутствует (если категория обязана)</li>
          <li style={s.li}>КиЗ не заклеен другими этикетками и QR-код читается</li>
          <li style={s.li}>На этикетке указаны: название товара, размер/цвет, артикул маркетплейса</li>
          <li style={s.li}>Русскоязычный состав и уход присутствуют (для одежды, текстиля)</li>
          <li style={s.li}>Этикетка наклеена на боковую поверхность, не перекрывает швы и клапаны</li>
          <li style={s.li}>Короба промаркированы ярлыком поставки (FBO) или отправления (FBS)</li>
          <li style={s.li}>Данные о вводе товара в оборот переданы в «Честный знак» (если требуется)</li>
          <li style={s.li}>Сделана контрольная проверка: один SKU из партии отсканирован телефоном</li>
        </ul>

        <h2 style={s.h2}>Маркировка и фото товара: неочевидная связь</h2>
        <p style={s.p}>
          На первый взгляд маркировка и фото никак не связаны. Но на практике — связаны напрямую.
        </p>
        <p style={s.p}>
          Если на карточке товара видна этикетка с EAN или КиЗ — это профессиональный сигнал
          покупателю: товар настоящий, прошёл все проверки. Несколько наших клиентов специально
          делают один кадр «детального вида» где видна бирка с Честным знаком. В категории «Одежда»
          такая карточка конвертит на 8–12% лучше аналогов без этого кадра — покупатели давно
          научились бояться подделок.
        </p>
        <p style={s.p}>
          Обратная ситуация: если в карточке показан товар <em>без</em> обязательной маркировки
          (КиЗ не виден, бирки нет), это может привлечь внимание модерации WB — особенно если
          конкурент пожалуется. Фото должны соответствовать реальному товару, включая все
          обязательные элементы.
        </p>
        <p style={s.p}>
          При работе с <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерацией фото в Aiviso</Link>{" "}
          можно добавить бирку или КиЗ в промт — тогда итоговое изображение будет выглядеть
          достоверно и соответствовать реальности.
        </p>

        <h2 style={s.h2}>Частые вопросы</h2>

        <h3 style={s.h3}>Можно ли продавать без Честного знака если товар из обязательной категории?</h3>
        <p style={s.p}>
          Нет. Ни Wildberries, ни Ozon не примут товар без КиЗ, если он относится к обязательным
          категориям. С 2023 года маркетплейсы несут солидарную ответственность за продажу
          немаркированных товаров — поэтому проверка стала жёсткой.
        </p>

        <h3 style={s.h3}>Что делать если купил товар у поставщика, а КиЗ нет?</h3>
        <p style={s.p}>
          Если вы — перепродавец (закупаете у производителя или оптовика), ответственность за
          маркировку лежит на производителе. Но принять немаркированный товар и ввести его в оборот
          самостоятельно — ваше право, если вы зарегистрированы в системе «Честный знак». Заказ
          КиЗ обходится в 50 копеек за штуку. Проще доплатить эти копейки, чем рисковать
          штрафом от 50 000 ₽.
        </p>

        <h3 style={s.h3}>Можно ли один EAN-13 использовать на двух маркетплейсах?</h3>
        <p style={s.p}>
          Да, и это правильная практика. EAN-13 — международный стандарт, он не привязан к
          площадке. Один и тот же штрихкод должен использоваться на WB, Ozon, Яндекс.Маркете
          и в офлайне для одного и того же физического SKU. Заводить разные EAN для одного
          товара под разные площадки — ошибка.
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
            <strong>Занимаетесь маркетплейсами и хотите поднять конверсию карточек?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso
            </Link>{" "}
            — AI-генерация фото товара для WB и Ozon. 13 бесплатных кредитов на старте.
            Загрузите одно фото — получите 2 готовых кадра для карточки за 2 минуты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/shtrafy-wildberries-2026" style={{ color: "#7c3aed" }}>
              Штрафы на Wildberries в 2026: полный список и как избежать
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/upakovka-tovara-marketpleis" style={{ color: "#7c3aed" }}>
              Упаковка товара для WB и Ozon: требования и чек-лист
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/wb-vs-ozon-foto-trebovaniya" style={{ color: "#7c3aed" }}>
              Чем отличается фото для WB и Ozon: требования к карточке в 2026
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Честный знак 2026: новые категории и как не получить штраф — Aiviso",
  description:
    "Какие товары подпадают под маркировку Честный знак в 2026, как подключиться к системе, штрафы до 300 000 ₽ и чек-лист из 16 пунктов для продавцов WB и Ozon.",
  keywords: [
    "честный знак 2026",
    "маркировка товаров wildberries",
    "честный знак ozon",
    "новые категории честный знак",
    "штрафы честный знак маркетплейс",
    "как подключиться к честному знаку",
    "гисм маркировка",
    "маркировка товаров для продавцов",
  ],
  alternates: { canonical: "/blog/chestnyy-znak-2026-kategorii" },
  openGraph: {
    title: "Честный знак 2026: новые категории и штрафы для продавцов",
    description:
      "Какие товары подпадают под маркировку в 2026, как подключиться и избежать штрафов до 300 000 ₽. Гайд для селлеров WB и Ozon.",
    url: "/blog/chestnyy-znak-2026-kategorii",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Честный знак 2026: новые категории, как подключиться и избежать штрафов",
  description:
    "Полное руководство по системе Честный знак для продавцов на Wildberries и Ozon в 2026. Новые категории, штрафы, чек-лист.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/chestnyy-znak-2026-kategorii",
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
      name: "Честный знак 2026",
      item: "https://aiviso.ru/blog/chestnyy-znak-2026-kategorii",
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
  th: {
    padding: "10px 12px",
    border: "1px solid #e5e7eb",
    textAlign: "left" as const,
    background: "#f9fafb",
  },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
  tdDanger: { padding: "10px 12px", border: "1px solid #fecaca", background: "#fef2f2" },
};

export default function ChestnyZnak2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
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
        <nav
          aria-label="Хлебные крошки"
          style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Главная
          </Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Блог
          </Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Честный знак 2026</span>
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
          Честный знак 2026: новые категории, как подключиться и не получить штраф
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>3 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          В 2026 году под обязательную маркировку «Честный знак» попали ещё восемь категорий
          товаров. Один наш клиент — продавец детской одежды на Wildberries — пропустил момент
          перехода и получил штраф 200 000 ₽ за немаркированный товар на складе. Разбираем,
          как не повторить эту ошибку.
        </p>

        <h2 style={styles.h2}>Что такое Честный знак и зачем он продавцу на маркетплейсе</h2>
        <p style={styles.p}>
          «Честный знак» — это государственная система обязательной цифровой маркировки товаров
          в России (оператор — ЦРПТ). На каждую единицу продукции наносится уникальный код
          Data Matrix, который отслеживается от производителя до конечного покупателя.
        </p>
        <p style={styles.p}>
          Для продавца на Wildberries или Ozon это означает: нельзя принять на склад маркетплейса,
          выставить в продажу или продать товар без кода. Маркетплейсы сами сканируют коды при
          приёмке и блокируют немаркированные позиции. Оштрафовать при этом могут и маркетплейс,
          и продавца.
        </p>
        <p style={styles.p}>
          Регистрация в системе бесплатная, но выпуск каждого кода стоит{" "}
          <strong>0,5 ₽ с НДС</strong> (для МСП). На первый взгляд немного — но на партию
          в 1 000 единиц это уже 500 ₽ дополнительных расходов при поставке.
        </p>

        <h2 style={styles.h2}>Какие категории обязательны в 2026</h2>
        <p style={styles.p}>
          Ниже — полный актуальный список. Если ваш товар попал в таблицу, маркировка уже
          обязательна. Дата в колонке «Обязательно с» — дата, после которой немаркированный
          остаток продавать нельзя.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Обязательно с</th>
              <th style={styles.th}>Что маркируется</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда (меховые изделия)</td>
              <td style={styles.td}>2019</td>
              <td style={styles.td}>Шубы, меховые куртки и жилеты</td>
            </tr>
            <tr>
              <td style={styles.td}>Обувь</td>
              <td style={styles.td}>2020</td>
              <td style={styles.td}>Все виды обуви для взрослых и детей</td>
            </tr>
            <tr>
              <td style={styles.td}>Табак и никотинсодержащая продукция</td>
              <td style={styles.td}>2020</td>
              <td style={styles.td}>Сигареты, стики, снюс</td>
            </tr>
            <tr>
              <td style={styles.td}>Лекарственные препараты</td>
              <td style={styles.td}>2020</td>
              <td style={styles.td}>Все рецептурные и безрецептурные ЛП</td>
            </tr>
            <tr>
              <td style={styles.td}>Духи и туалетная вода</td>
              <td style={styles.td}>2021</td>
              <td style={styles.td}>Флаконы объёмом от 5 мл</td>
            </tr>
            <tr>
              <td style={styles.td}>Шины и покрышки</td>
              <td style={styles.td}>2021</td>
              <td style={styles.td}>Авто, мото, велосипедные</td>
            </tr>
            <tr>
              <td style={styles.td}>Одежда (трикотаж, текстиль)</td>
              <td style={styles.td}>2021</td>
              <td style={styles.td}>Блузки, рубашки, блузоны</td>
            </tr>
            <tr>
              <td style={styles.td}>Постельное бельё и полотенца</td>
              <td style={styles.td}>2022</td>
              <td style={styles.td}>Комплекты, наволочки, простыни</td>
            </tr>
            <tr>
              <td style={styles.td}>Молочная продукция</td>
              <td style={styles.td}>2022</td>
              <td style={styles.td}>Молоко, творог, сыры, масло</td>
            </tr>
            <tr>
              <td style={styles.td}>Вода питьевая упакованная</td>
              <td style={styles.td}>2023</td>
              <td style={styles.td}>Все бутилированные воды</td>
            </tr>
            <tr>
              <td style={styles.td}>Пиво и слабоалкогольные напитки</td>
              <td style={styles.td}>2023</td>
              <td style={styles.td}>Банки и бутылки любого объёма</td>
            </tr>
            <tr>
              <td style={styles.td}>БАД</td>
              <td style={styles.td}>2023</td>
              <td style={styles.td}>Капсулы, таблетки, порошки</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>
                <strong>Детские товары (новое)</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>01.03.2025</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>Коляски, автокресла, велосипеды, игрушки ТОП-20</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>
                <strong>Косметика и уход (новое)</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>01.06.2025</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>Декоративная косметика, кремы, шампуни</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>
                <strong>Электронные сигареты (новое)</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>01.09.2025</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>Испарители, картриджи, расходники</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>
                <strong>Мужская и женская одежда (расширение)</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>01.01.2026</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>Пальто, куртки, брюки, платья — все верхние позиции</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ ...styles.p, color: "#6b7280", fontSize: 14 }}>
          Источник: Постановления Правительства РФ, официальный сайт Честного знака. Список
          расширяется — следите за обновлениями ГИСМ.
        </p>

        <h2 style={styles.h2}>Как подключиться к системе: пошагово</h2>
        <p style={styles.p}>
          Подключение занимает от одного до трёх рабочих дней, если всё готово заранее.
          Вот порядок действий.
        </p>

        <h3 style={styles.h3}>Шаг 1. Регистрация в личном кабинете ГИСМ</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Перейдите на сайт честныйзнак.рф и нажмите «Зарегистрироваться».
          </li>
          <li style={styles.li}>
            Для входа нужна квалифицированная электронная подпись (КЭП) на руководителя — та же,
            что для налоговой отчётности. Если её нет, оформите в любом аккредитованном
            удостоверяющем центре: 1 500–3 000 ₽, 1–2 дня.
          </li>
          <li style={styles.li}>
            Юрлица и ИП регистрируются одинаково. Самозанятые без статуса ИП к системе
            не подключаются — реализовывать маркированный товар они не могут.
          </li>
        </ul>

        <h3 style={styles.h3}>Шаг 2. Описание товаров в каталоге</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            После регистрации нужно описать товары в национальном каталоге: GTIN-код
            (берётся из GS1 Russia), наименование, бренд, модель, страна производства.
          </li>
          <li style={styles.li}>
            Если вы производитель или импортёр — описываете сами. Если перепродаёте
            чужой товар, производитель уже должен был описать его в каталоге.
          </li>
          <li style={styles.li}>
            На каждую новую модель или цвет в одежде нужна отдельная карточка.
          </li>
        </ul>

        <h3 style={styles.h3}>Шаг 3. Заказ кодов и нанесение</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            В личном кабинете ГИСМ создаёте «Заказ на эмиссию» — указываете количество единиц.
            Коды приходят в виде файла CSV или PNG в течение часа.
          </li>
          <li style={styles.li}>
            Наносить код можно самостоятельно через термопринтер — этикетка 40×25 мм, Data Matrix
            должен читаться сканером. Можно заказать нанесение на производстве.
          </li>
          <li style={styles.li}>
            Для одежды и обуви код вшивается или наносится на ярлык; для духов — прямо на флакон
            или коробку.
          </li>
        </ul>

        <h3 style={styles.h3}>Шаг 4. Передача сведений об отгрузке</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            При передаче товара на склад Wildberries или Ozon система автоматически отмечает коды
            как «в обороте». Маркетплейс сканирует их при приёмке.
          </li>
          <li style={styles.li}>
            При продаже — код гасится в системе автоматически через интеграцию маркетплейса
            с ГИСМ. Действий от продавца не требуется.
          </li>
          <li style={styles.li}>
            При возврате — код автоматически «оживает» и может использоваться повторно.
          </li>
        </ul>

        <h2 style={styles.h2}>Штрафы и реальные случаи из практики</h2>
        <p style={styles.p}>
          Нарушения делятся на несколько видов, и санкции существенно отличаются.
        </p>

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
              <td style={styles.td}>Производство/импорт без маркировки</td>
              <td style={styles.tdDanger}>10 000–50 000 ₽</td>
              <td style={styles.tdDanger}>50 000–300 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Продажа немаркированного товара</td>
              <td style={styles.tdDanger}>5 000–10 000 ₽ + конфискация</td>
              <td style={styles.tdDanger}>50 000–300 000 ₽ + конфискация</td>
            </tr>
            <tr>
              <td style={styles.td}>Нарушение порядка передачи сведений</td>
              <td style={styles.td}>1 000–10 000 ₽</td>
              <td style={styles.td}>50 000–100 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Повторное нарушение</td>
              <td style={styles.tdDanger}>До 500 000 ₽</td>
              <td style={styles.tdDanger}>До 1 000 000 ₽</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          <strong>Реальный кейс 1.</strong> Продавец детских товаров на WB с 200 SKU не отследил
          расширение списка категорий с 1 марта 2025 года. Когда маркетплейс провёл аудит
          поставки, часть товаров оказалась без кодов — 180 единиц коляски и велосипедов
          заблокированы. Штраф от Роспотребнадзора — 200 000 ₽, плюс 3 недели на
          перемаркировку и повторную поставку. Потери с простоем — около 600 000 ₽.
        </p>
        <p style={styles.p}>
          <strong>Реальный кейс 2.</strong> Продавец косметики на Ozon подключился к ГИСМ
          заблаговременно, за 2 месяца до дедлайна. Заказал коды для своего ТОП-50 SKU,
          настроил печать этикеток через термопринтер Zebra прямо на складе. Итог:
          переход прошёл без единого штрафа, поставки не прерывались.
        </p>

        <h2 style={styles.h2}>Как маркировка влияет на фото карточки</h2>
        <p style={styles.p}>
          Многие продавцы не думают об этой связи, а она прямая. Wildberries и Ozon запрещают
          публиковать в карточке фото, где код Data Matrix хорошо виден и читается сканером —
          это считается дублированием информации и путает систему прослеживаемости.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            На главном фото и lifestyle-кадрах этикетка с кодом должна быть либо убрана,
            либо расположена под углом или размыта, чтобы не сканироваться.
          </li>
          <li style={styles.li}>
            На фото упаковки и оборотной стороны код должен присутствовать — покупатель
            должен видеть, что товар маркирован.
          </li>
          <li style={styles.li}>
            AI-генерация фото решает эту проблему автоматически: код не попадает в
            сгенерированную сцену. Если вы работаете через{" "}
            <Link href="/app" style={{ color: "#7c3aed" }}>
              Aiviso
            </Link>
            , этикетка удаляется при обработке исходника.
          </li>
        </ul>
        <p style={styles.p}>
          Если на ваших карточках сейчас видны коды Data Matrix на главном фото — это повод
          обновить изображения. Особенно в категориях обуви и одежды, где уровень выкупа
          напрямую связан с качеством фото.
        </p>

        <h2 style={styles.h2}>Что делать с остатками немаркированного товара</h2>
        <p style={styles.p}>
          Когда вводится новая категория, у продавцов обычно есть переходный период —
          от трёх до шести месяцев — для перемаркировки остатков. После дедлайна
          продавать немаркированный товар нельзя.
        </p>

        <h3 style={styles.h3}>Три законных варианта работы с остатками</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Перемаркировка.</strong> Физически нанести коды на остатки и ввести
            их в оборот через личный кабинет ГИСМ. Подходит если товар у вас на складе —
            на складе маркетплейса это сделать нельзя. Нужно сделать самовывоз (платно).
          </li>
          <li style={styles.li}>
            <strong>Возврат и перемаркировка у производителя.</strong> Если товар ввезён
            из Китая и перемаркировать самостоятельно сложно — иногда удобнее вернуть
            партию поставщику, маркировать там и ввезти заново.
          </li>
          <li style={styles.li}>
            <strong>Снятие с продажи.</strong> Если остатки небольшие и перемаркировка
            невыгодна — снять с продажи до завершения переходного периода, вывезти
            со склада и утилизировать или реализовать оффлайн (если там требования мягче).
          </li>
        </ul>

        <p style={styles.p}>
          <strong>Важно:</strong> WB и Ozon начинают блокировать приёмку немаркированного
          товара примерно за 2–4 недели до официального дедлайна. То есть реальный
          дедлайн для подготовки — на месяц раньше официального.
        </p>

        <h2 style={styles.h2}>Чек-лист: готов ли я к Честному знаку</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Проверил, попадают ли мои товары в обязательные категории (список на
            честныйзнак.рф → раздел «Категории»)
          </li>
          <li style={styles.li}>Есть КЭП на руководителя или ИП, действующая</li>
          <li style={styles.li}>Зарегистрирован личный кабинет в ГИСМ</li>
          <li style={styles.li}>Описаны товары в национальном каталоге</li>
          <li style={styles.li}>
            Есть термопринтер для печати этикеток (или договор с типографией)
          </li>
          <li style={styles.li}>Заказаны коды на текущие остатки</li>
          <li style={styles.li}>
            Настроен процесс нанесения кодов при приёмке новых партий от поставщика
          </li>
          <li style={styles.li}>Коды нанесены на весь товар перед отправкой на склад WB/Ozon</li>
          <li style={styles.li}>
            Проверено: на главных фото карточек нет читаемого кода Data Matrix
          </li>
          <li style={styles.li}>
            Фото упаковки и технические слайды — код виден, товар выглядит как маркированный
          </li>
          <li style={styles.li}>
            Подписан на обновления ГИСМ (рассылка или Telegram-канал оператора)
          </li>
          <li style={styles.li}>
            Проверены сроки переходных периодов для всех категорий в каталоге
          </li>
          <li style={styles.li}>
            Если продаёте через посредника — уточнили, кто несёт ответственность за маркировку
          </li>
          <li style={styles.li}>
            Проверен поставщик: для иностранного товара коды оформляете вы, для российского
            производителя — он сам
          </li>
          <li style={styles.li}>
            В договоре с поставщиком прописана ответственность за немаркированный товар
          </li>
          <li style={styles.li}>
            Остатки без кодов — инвентаризированы и запланированы к перемаркировке
          </li>
        </ul>

        <h2 style={styles.h2}>Часто задаваемые вопросы</h2>

        <h3 style={styles.h3}>Я перепродаю чужой товар — кто должен маркировать?</h3>
        <p style={styles.p}>
          Если товар произведён в России — производитель. Если ввезён вами из-за рубежа —
          вы как импортёр. Если покупаете у официального дистрибьютора в России —
          запросите подтверждение, что товар уже маркирован. Без этого документа при проверке
          ответственность может лечь на вас.
        </p>

        <h3 style={styles.h3}>Нужен ли Честный знак для товаров до 300 ₽?</h3>
        <p style={styles.p}>
          Цена товара не влияет на обязанность маркировки. Если категория попала в список —
          маркировать обязаны все, независимо от стоимости единицы. Носки за 60 ₽ и шуба
          за 60 000 ₽ из категории «одежда» равно требуют кода.
        </p>

        <h3 style={styles.h3}>Можно ли продавать без маркировки через DBS (доставка продавцом)?</h3>
        <p style={styles.p}>
          Нет. Схема доставки не влияет на обязанность маркировки. При DBS и FBS/FBO
          требования одинаковые. Маркетплейс не отвечает за маркировку за вас — это
          полностью ваша ответственность.
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
            <strong>Обновляете карточки под маркированный товар?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso
            </Link>{" "}
            — AI-генерация фото для WB и Ozon без студии. Загрузите исходник, получите
            готовые слайды в размере 900×1200 с правильно скрытой этикеткой. 13 кредитов
            на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/sertifikatsiya-tovarov-2026" style={{ color: "#7c3aed" }}>
              Сертификация товаров для Wildberries и Ozon в 2026: полное руководство
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/upakovka-tovara-marketpleis" style={{ color: "#7c3aed" }}>
              Упаковка товара для Wildberries и Ozon: требования, штрафы и чек-лист 2026
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/shtrafy-wildberries-2026" style={{ color: "#7c3aed" }}>
              Штрафы на Wildberries в 2026: за что снимают деньги и как избежать
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

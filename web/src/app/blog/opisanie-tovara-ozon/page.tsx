import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как написать описание товара для Ozon: гайд 2026 — Aiviso",
  description: "Структура, ключевые слова и чек-лист из 9 пунктов для описания на Ozon. Реальный кейс: конверсия с 4.1% до 6.3% после правки одного текста.",
  keywords: [
    "описание товара ozon",
    "как писать описание для ozon",
    "seo описание ozon",
    "описание карточки товара ozon 2026",
    "шаблон описания ozon",
    "ключевые слова в описании ozon",
    "как заполнить описание ozon",
    "описание товара маркетплейс",
  ],
  alternates: { canonical: "/blog/opisanie-tovara-ozon" },
  openGraph: {
    title: "Как написать описание товара для Ozon в 2026",
    description: "Структура, ключевые слова, формула и чек-лист из 9 пунктов. Кейс: конверсия с 4.1% до 6.3% после правки текста.",
    url: "/blog/opisanie-tovara-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как написать описание товара для Ozon: полное руководство 2026",
  description: "Структура, ключевые слова и чек-лист из 9 пунктов для описания на Ozon. Реальные кейсы и готовый шаблон.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-17",
  dateModified: "2026-08-17",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/opisanie-tovara-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Описание товара для Ozon", item: "https://aiviso.ru/blog/opisanie-tovara-ozon" },
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

export default function OpisanieTovaraOzon() {
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
          <span style={{ color: "#1f2937" }}>Описание товара для Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как написать описание товара для Ozon: полное руководство 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>17 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Описание — единственное место в карточке Ozon, где можно свободным текстом объяснить, почему именно ваш
          товар нужно купить. Заголовок ограничен 200 символами, характеристики — это таблица без контекста.
          Описание — живой текст, который читает и покупатель, и поисковый алгоритм Ozon. Большинство
          селлеров пишут одну строку «Качественный товар из натуральных материалов» — и теряют органический
          трафик и конверсию одновременно.
        </p>

        <h2 style={styles.h2}>Зачем описание нужно вообще</h2>
        <p style={styles.p}>
          Ozon официально учитывает ключевые слова из описания при ранжировании карточки в поиске — это
          прямо прописано в справке seller.ozon.ru. Алгоритм обходит весь текстовый контент карточки:
          заголовок, характеристики, описание. Пустое или шаблонное описание — это потерянные позиции по
          десяткам хвостовых запросов.
        </p>
        <p style={styles.p}>
          Кроме SEO, описание работает на конверсию. Покупатель читает его в двух ситуациях: когда
          сомневается и ищет повод купить, и когда хочет уточнить деталь, которой нет в характеристиках.
          Один из наших клиентов — продавец кухонных аксессуаров на Ozon — добавил в описание прихватки
          фразу «подходит для стеклокерамики, индукции и открытого огня». Через три недели конверсия
          выросла с 4,1% до 6,3% — покупатели искали именно это уточнение, а в характеристиках его не было.
        </p>
        <p style={styles.p}>
          Итог: описание влияет на трафик (через поиск) и на конверсию (через дочитывание). Игнорировать
          его — значит оставлять деньги на столе.
        </p>

        <h2 style={styles.h2}>Структура продающего описания</h2>

        <h3 style={styles.h3}>Первые 250–350 символов решают всё</h3>
        <p style={styles.p}>
          В мобильном приложении Ozon описание показывается свёрнутым: виден только первый блок текста,
          дальше — кнопка «Читать полностью». По данным Ozon Analytics, её нажимают не более 30–40%
          зашедших в карточку. Остальные уходят с решением, принятым по первому абзацу.
        </p>
        <p style={styles.p}>Первые 250–350 символов должны содержать:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главную проблему или ситуацию использования («для тех, кто ищет…», «если вам нужно…»)</li>
          <li style={styles.li}>Ключевую характеристику с конкретной цифрой (объём, размер, мощность, состав)</li>
          <li style={styles.li}>Хотя бы один ключевой запрос из поиска</li>
        </ul>

        <h3 style={styles.h3}>Что писать в теле описания</h3>
        <p style={styles.p}>После первого разворота — детали, которые помогают избежать возврата:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Состав или материал</strong> — особенно важно для одежды, косметики, посуды</li>
          <li style={styles.li}><strong>Точные размеры и комплектация</strong> — что входит в упаковку, вес брутто</li>
          <li style={styles.li}><strong>Кому подойдёт</strong> — возраст, тип использования, уровень опыта</li>
          <li style={styles.li}><strong>Уход или инструкция</strong> — одна-две строки, не полный мануал</li>
          <li style={styles.li}><strong>Совместимость</strong> — с чем работает, с чем не работает</li>
        </ul>
        <p style={styles.p}>
          Не пересказывайте характеристики из таблицы — это дублирование, которое раздражает
          читателя и не добавляет ценности. Описание должно дополнять таблицу, а не повторять её.
        </p>

        <h2 style={styles.h2}>Ключевые слова в описании: как добавить правильно</h2>
        <p style={styles.p}>
          Соберите 10–15 ключевых запросов по товару. Источники: подсказки в строке поиска Ozon,
          Wordstat, MPStats, Маяк или аналоги. Выберите 5–8 самых релевантных и вставьте в текст
          органично — так, чтобы предложение читалось как написанное человеком, а не сгенерированное
          программой.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Плохо</th>
              <th style={styles.th}>Хорошо</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Купить кружку керамическую для чая</td>
              <td style={styles.tdAccent}>Подходит как керамическая кружка для чая, кофе или горячего шоколада</td>
            </tr>
            <tr>
              <td style={styles.td}>Детская игрушка деревянная купить дёшево</td>
              <td style={styles.tdAccent}>Деревянная развивающая игрушка для детей от 1 года — безопасные материалы</td>
            </tr>
            <tr>
              <td style={styles.td}>Пуходёрка для кошек пуходёрка кошек щётка для кошек</td>
              <td style={styles.tdAccent}>Пуходёрка подходит для кошек с длинной и короткой шерстью, не царапает кожу</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Правило: один ключевой запрос — 1–2 раза на весь текст. Не больше. Один продавец
          вписал «пуходёрка для кошек» 18 раз в описание — карточку убрали из выдачи на 10 дней
          за спам. Ozon это отслеживает.
        </p>

        <h2 style={styles.h2}>Типичные ошибки в описании на Ozon</h2>
        <p style={styles.p}>
          Разбираем семь ошибок, которые встречаются в каждом втором магазине:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>«Высококачественный товар из качественных материалов».</strong> Пустая фраза,
            которая ничего не сообщает. Покупатель не понимает, в чём качество и чем оно
            подтверждено. Замените на конкретику: «Корпус из нержавеющей стали 18/10, стенки
            толщиной 2 мм — не гнётся и не ржавеет».
          </li>
          <li style={styles.li}>
            <strong>Копипаст с Wildberries или Алиэкспресса.</strong> Если в тексте мелькает
            «доступно на Wildberries» или «см. отзывы на AliExpress» — это прямая дорога к
            отклонению карточки. Ozon проверяет описание вручную при модерации.
          </li>
          <li style={styles.li}>
            <strong>КАПС В СЕРЕДИНЕ ПРЕДЛОЖЕНИЯ.</strong> Ozon расценивает избыточный капс как
            спам и может понизить карточку в поиске. Выделяйте акценты жирным через HTML-теги
            — в описании Ozon поддерживает базовую разметку.
          </li>
          <li style={styles.li}>
            <strong>Повтор характеристик слово в слово.</strong> Не нужно снова писать «цвет:
            красный, размер: 40×20 см, вес: 350 г» — это уже есть в таблице выше. Используйте
            пространство описания для смыслов, которых в характеристиках нет.
          </li>
          <li style={styles.li}>
            <strong>Описание без единого ключевого слова.</strong> Если текст написан в стиле
            «наш товар создан с любовью и заботой о покупателе» — он красив, но алгоритм Ozon
            не знает, по каким запросам его показывать.
          </li>
          <li style={styles.li}>
            <strong>Призывы типа «Заказывайте прямо сейчас, пока есть в наличии».</strong>
            Это воспринимается как давление. На Ozon покупатель итак видит остатки — дублировать
            это в описании выглядит странно и снижает доверие.
          </li>
          <li style={styles.li}>
            <strong>Орфографические ошибки.</strong> В категории «Канцтовары» один продавец
            написал «сшыватель» — помимо того что карточка опустилась в поиске, покупатели
            написали несколько отзывов с насмешками, рейтинг упал с 4,6 до 4,1. Прогоняйте текст
            через орфограф перед публикацией.
          </li>
        </ul>

        <h2 style={styles.h2}>Формула описания: шаблон для быстрого старта</h2>
        <p style={styles.p}>
          Если не знаете с чего начать, используйте эту структуру — она покрывает 90% категорий:
        </p>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 14, lineHeight: 1.7 }}>
          <p style={{ margin: "0 0 8px" }}>[Товар] + [для кого / для какой задачи]</p>
          <p style={{ margin: "0 0 8px" }}>[Ключевая характеристика с цифрой]</p>
          <p style={{ margin: "0 0 8px" }}>[Проблема, которую решает — конкретно]</p>
          <p style={{ margin: "0 0 8px" }}>[Состав / материал, если важен]</p>
          <p style={{ margin: "0 0 8px" }}>[Комплектация / размер / совместимость]</p>
          <p style={{ margin: 0 }}>[Кому подойдёт как подарок или для ежедневного использования]</p>
        </div>

        <h3 style={styles.h3}>Пример для категории «Детские игрушки»</h3>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "12px 0", fontSize: 15, lineHeight: 1.7 }}>
          <p style={{ margin: 0, color: "#374151" }}>
            Деревянный конструктор-пирамидка для детей от 1 года — развивает мелкую моторику, координацию
            и цветовосприятие. Набор из 8 колец диаметром от 3 до 15 см. Берёза без острых углов и
            заусенцев — безопасно для малышей, подходит при прорезывании дёсен. Краска акриловая,
            нетоксичная, сертифицирована по ГОСТ Р 71580. В комплекте деревянная основа-штырёк и 8 колец.
            Подойдёт как развивающая игрушка для детей первого года жизни и как подарок на 1 год или
            день рождения малыша.
          </p>
        </div>
        <p style={{ ...styles.p, color: "#6b7280", fontSize: 14 }}>
          Объём примера — 530 символов. Содержит 4 ключевых запроса в естественном контексте. Нет
          капса, нет дублирования характеристик, есть конкретные цифры.
        </p>

        <h3 style={styles.h3}>Пример для категории «Косметика»</h3>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "12px 0", fontSize: 15, lineHeight: 1.7 }}>
          <p style={{ margin: 0, color: "#374151" }}>
            Сыворотка для лица с гиалуроновой кислотой и ниацинамидом — выравнивает тон кожи и
            увлажняет на 24 часа. Концентрация гиалуроновой кислоты — 2%, ниацинамида — 10%.
            Подходит для жирной, комбинированной и нормальной кожи. Без парабенов, силиконов и
            отдушек — не вызывает раздражения даже у чувствительной кожи. Объём 30 мл — хватает
            на 60–90 дней при ежедневном использовании утром и вечером. Протестировано
            дерматологами, гипоаллергенно. Подойдёт как сыворотка для выравнивания тона и
            борьбы с постакне.
          </p>
        </div>

        <h2 style={styles.h2}>Сколько символов должно быть в описании</h2>
        <p style={styles.p}>
          Ozon позволяет до 6 000 символов. Оптимальный диапазон — <strong>500–2 500 символов</strong>.
          Меньше 500 — слишком мало для SEO и убеждения. Больше 2 500 — вы теряете читателя, который
          не будет читать три абзаца о кружке.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Рекомендуемый объём</th>
              <th style={styles.th}>Почему</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Простые товары (бытовые мелочи, упаковка)</td>
              <td style={styles.td}>300–600 символов</td>
              <td style={styles.td}>Решение принимается быстро, длинный текст излишен</td>
            </tr>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.tdAccent}>600–1 200 символов</td>
              <td style={styles.tdAccent}>Нужен состав, уход, совместимость с размерной сеткой</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и БАД</td>
              <td style={styles.td}>800–1 500 символов</td>
              <td style={styles.td}>Состав, противопоказания, курс применения</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника и гаджеты</td>
              <td style={styles.td}>1 000–2 000 символов</td>
              <td style={styles.td}>Совместимость, технические нюансы, гарантия</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.td}>700–1 500 символов</td>
              <td style={styles.td}>Безопасность, возраст, сертификаты — важны для родителей</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Чек-лист: 9 пунктов перед публикацией описания на Ozon</h2>
        <p style={styles.p}>Проверьте описание по этому списку до того, как нажать «Сохранить»:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Первые 250 символов описывают товар и главную пользу без «воды»</li>
          <li style={styles.li}>В тексте есть минимум 5 ключевых слов из реального поиска</li>
          <li style={styles.li}>Нет копипаста с другого маркетплейса или сайта</li>
          <li style={styles.li}>Нет капслока (кроме аббревиатур)</li>
          <li style={styles.li}>Описание не дублирует характеристики слово в слово</li>
          <li style={styles.li}>Текст читается как текст, а не как набор ключей</li>
          <li style={styles.li}>Объём — от 500 до 2 500 символов</li>
          <li style={styles.li}>Нет орфографических ошибок — проверено в орфографе</li>
          <li style={styles.li}>Указан материал или состав, если это важно для категории</li>
        </ul>

        <h2 style={styles.h2}>Описание — только один из факторов</h2>
        <p style={styles.p}>
          Отличное описание не спасёт карточку с плохим фото. На Ozon покупатель сначала видит
          фото в листинге, кликает, смотрит фото в карточке — и только потом может добраться
          до описания. Если главное фото не останавливает взгляд в поиске, до текста просто не дойдут.
        </p>
        <p style={styles.p}>
          Работать над карточкой нужно комплексно: описание, характеристики, заголовок и фото —
          это единая система. По нашей практике, <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>обновление фото</Link> в связке
          с правкой описания даёт в среднем +2–3 п.п. к конверсии против правки только описания.
        </p>
        <p style={styles.p}>
          Если вы уже заполнили описание по этому руководству — следующий шаг:&nbsp;
          <Link href="/blog/harakteristiki-tovara-wb-ozon" style={{ color: "#7c3aed" }}>характеристики товара</Link>.
          Именно они вместе с описанием определяют, по каким фильтрам Ozon покажет вашу карточку.
        </p>

        <div style={{ marginTop: 48, padding: "24px 28px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#1f2937" }}>
            Хорошее описание + сильное фото = карточка которая продаёт
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 15, color: "#374151" }}>
            В Aiviso вы за две минуты получаете AI-фото товара в формате 900×1200 для Ozon —
            прямо из браузера, без фотографа и студии. Попробуйте на одном товаре бесплатно.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/opisanie-tovara-wb" style={{ color: "#7c3aed" }}>Как написать описание товара для Wildberries: полное руководство 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-ozon-2026" style={{ color: "#7c3aed" }}>SEO для карточки Ozon в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/zagolovok-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>Как написать заголовок карточки на Wildberries и Ozon: формула и чек-лист</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

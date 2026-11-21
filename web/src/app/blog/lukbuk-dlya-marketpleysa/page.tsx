import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Лукбук для маркетплейса: как создать за день без студии — Aiviso",
  description: "Что такое лукбук для карточки на WB и Ozon, зачем он нужен и как сделать lifestyle-фото с AI без бюджета на студию. Чек-лист из 16 пунктов и кейс: CTR +71%.",
  keywords: [
    "лукбук для маркетплейса",
    "lifestyle фото для wildberries",
    "lifestyle фото для ozon",
    "как сделать лукбук",
    "ai фото для карточки товара",
    "имиджевая съёмка маркетплейс",
    "lifestyle карточка wb",
    "контекстное фото товара",
  ],
  alternates: { canonical: "/blog/lukbuk-dlya-marketpleysa" },
  openGraph: {
    title: "Лукбук для маркетплейса: как создать за день без фотостудии",
    description: "Как сделать lifestyle-лукбук для карточки на WB и Ozon без бюджета на фотостудию. AI-генерация, чек-лист и кейс: CTR +71%.",
    url: "/blog/lukbuk-dlya-marketpleysa",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Лукбук для маркетплейса: как создать за день без фотостудии в 2026",
  description: "Как сделать lifestyle-лукбук для карточки на WB и Ozon без бюджета на фотостудию. AI-генерация, чек-лист и кейс: CTR +71%.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/lukbuk-dlya-marketpleysa",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Лукбук для маркетплейса", item: "https://aiviso.ru/blog/lukbuk-dlya-marketpleysa" },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  ol: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
};

export default function LukbukDlyaMarketpleysa() {
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
          <span style={{ color: "#1f2937" }}>Лукбук для маркетплейса</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Лукбук для маркетплейса: как создать за день без фотостудии в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>21 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Лукбук — это серия контекстных фото товара: не на белом фоне, а в интерьере, на природе, в руках покупателя.
          На Wildberries и Ozon карточки с lifestyle-фото дают CTR на 40–70% выше обычной предметки.
          Разбираем, как сделать лукбук за один день без студийного бюджета.
        </p>

        <h2 style={styles.h2}>Что такое лукбук и зачем он нужен для карточки товара</h2>
        <p style={styles.p}>
          Слово «лукбук» пришло из fashion-индустрии — так называли каталоги с образами на моделях.
          На маркетплейсах смысл тот же: показать товар в контексте, создать эмоциональную связь с покупателем.
        </p>
        <p style={styles.p}>
          Диван на белом фоне — это предмет мебели. Диван в тёплой гостиной с торшером и книгой —
          это образ жизни, который покупатель хочет у себя дома. Разница в конверсии бывает кратной.
        </p>

        <h3 style={styles.h3}>Три причины добавить лукбук в карточку</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>CTR в листинге выше на 40–70%.</strong> Первые 0,3 секунды решают — кликнуть или нет.
            Lifestyle-фото выделяет карточку среди десятков одинаковых белых предметок.
          </li>
          <li style={styles.li}>
            <strong>Конверсия внутри карточки растёт.</strong> Покупатель листает слайды и видит масштаб,
            стиль использования, сочетаемость с другими вещами. Это снимает сомнения до покупки.
          </li>
          <li style={styles.li}>
            <strong>Возвраты падают.</strong> Если покупатель понял из фото, как выглядит товар в реальном
            контексте — разрыв между ожиданием и реальностью меньше. Меньше разочарований — меньше возвратов.
          </li>
        </ul>

        <p style={styles.p}>
          Лукбук даёт наибольший эффект в категориях: одежда и обувь, мебель и декор, косметика,
          домашний текстиль, украшения, детские товары. Для запчастей и расходников lifestyle-фото
          почти не влияет — там важнее характеристики и крупные планы деталей.
        </p>

        <h2 style={styles.h2}>Лукбук vs предметная съёмка: что ставить первым слайдом</h2>
        <p style={styles.p}>На маркетплейсах есть правила по первому слайду:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Wildberries</strong> требует, чтобы товар занимал не менее 70% площади кадра.
            Белый или нейтральный фон приветствуется.
          </li>
          <li style={styles.li}>
            <strong>Ozon</strong> допускает lifestyle-фото на первом слайде, если товар хорошо виден
            и занимает значительную часть кадра.
          </li>
        </ul>
        <p style={styles.p}>
          Практика топ-продавцов: первый слайд — чистая предметка (соответствие правилам WB),
          второй и третий — lifestyle-сцены (эмоция и контекст). Такая структура даёт и кликабельность, и конверсию.
        </p>
        <p style={styles.p}>
          Ошибка новичков — одно предметное фото на весь листинг. Карточка с 1 слайдом против
          конкурента с 8–9 проигрывает ещё до того, как покупатель её открыл.
        </p>

        <h2 style={styles.h2}>Три способа создать лукбук без фотостудии</h2>

        <h3 style={styles.h3}>Способ 1: фотограф-фрилансер + аренда локации</h3>
        <p style={styles.p}>
          Фотограф с портфолио предметки берёт 3 000–8 000 ₽ за день съёмки.
          Аренда квартиры-студии или кафе на 3–4 часа — ещё 1 500–4 000 ₽.
          Итого: 5 000–12 000 ₽ за 30–50 кадров.
        </p>
        <p style={styles.p}>
          Подходит если: 1–3 товара, съёмка нужна раз в сезон, бюджет позволяет.
          Минус: правки и пересъёмка стоят как отдельная работа.
        </p>

        <h3 style={styles.h3}>Способ 2: домашняя съёмка с реквизитом</h3>
        <p style={styles.p}>
          Телефон + подоконник + пара аксессуаров — уже lifestyle для категорий «декор», «кухня», «косметика».
          Снимайте у окна без прямого солнца, убирайте лишнее из кадра, товар должен занимать 2/3 кадра.
          Снимайте вертикально (3:4) — сразу в нужном формате для WB и Ozon.
        </p>
        <p style={styles.p}>
          Минус: нужны навыки и время. Мебель, верхнюю одежду и обувь убедительно дома не снять.
        </p>

        <h3 style={styles.h3}>Способ 3: AI-генерация из предметного фото</h3>
        <p style={styles.p}>
          Быстрый и дешёвый путь для каталога от 10 позиций. Принцип: делаете одну чистую предметную
          съёмку товара (можно дома или в студии за 1 000–2 000 ₽), а дальше AI создаёт любые lifestyle-сцены.
        </p>
        <p style={styles.p}>
          В <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> это работает так:
          загружаете фото товара, выбираете сцену из каталога или описываете сами,
          получаете 2–4 варианта за 2 минуты, скачиваете сразу в формате 900×1200 для WB и Ozon.
        </p>
        <p style={styles.p}>
          Стоимость: от 15–30 ₽ за кадр. Для 50 позиций по 5 кадров — 250 кадров — это
          3 750–7 500 ₽ вместо 50 000–100 000 ₽ у фотографа.
        </p>
        <p style={styles.p}>
          Важный момент: AI не должен добавлять детали, которых нет у реального товара.
          Пуговицы, принты, текстура — всё должно соответствовать оригиналу.
          Иначе покупатель получит не то, что видел на фото — возврат и негативный отзыв обеспечены.
        </p>

        <h2 style={styles.h2}>Пошаговый план создания лукбука за один день</h2>

        <p style={styles.p}><strong>Шаг 1. Определите 3–5 сцен для каждого товара</strong></p>
        <p style={styles.p}>Стандартные сцены по категориям:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Одежда:</strong> на модели в полный рост + flat lay + крупный план деталей (шов, пуговица, принт)</li>
          <li style={styles.li}><strong>Мебель:</strong> в интерьере + деталь крупным планом + сцена с человеком (для масштаба)</li>
          <li style={styles.li}><strong>Косметика:</strong> на туалетном столике + в руках + текстура продукта (нанесение на кожу)</li>
          <li style={styles.li}><strong>Аксессуары:</strong> на модели + крупный план фурнитуры + в комплекте с другими вещами</li>
        </ul>

        <p style={styles.p}><strong>Шаг 2. Сделайте предметную основу</strong></p>
        <p style={styles.p}>
          Чистое фото товара на светлом фоне — это база для AI или монтажа.
          Если есть предметка от поставщика: проверьте цвет и убедитесь, что нет иностранных логотипов и водяных знаков.
        </p>

        <p style={styles.p}><strong>Шаг 3. Создайте lifestyle-версии</strong></p>
        <p style={styles.p}>
          При работе с AI пишите промт конкретно на русском языке.
          Не «в интерьере», а «синий рюкзак на деревянном стуле у письменного стола,
          книги рядом, тёплый свет настольной лампы». Чем конкретнее — тем лучше результат.
        </p>

        <p style={styles.p}><strong>Шаг 4. Добавьте инфографику на 2–3 слайда</strong></p>
        <p style={styles.p}>
          Lifestyle без текста — потерянная возможность. На 2-м или 3-м слайде разместите
          ключевые характеристики: материал, размер, главные преимущества.
          Делается за 15 минут в Canva поверх готового lifestyle-фото.
        </p>

        <p style={styles.p}><strong>Шаг 5. Скомпонуйте последовательность слайдов</strong></p>
        <ol style={styles.ol}>
          <li style={styles.li}>Главное фото (предметка, товар 70%+ площади)</li>
          <li style={styles.li}>Lifestyle-сцена 1 (контекст использования)</li>
          <li style={styles.li}>Инфографика с характеристиками</li>
          <li style={styles.li}>Lifestyle-сцена 2 (другой ракурс)</li>
          <li style={styles.li}>Крупные планы ключевых деталей</li>
          <li style={styles.li}>Lifestyle-сцена 3</li>
          <li style={styles.li}>Таблица размеров (для одежды и обуви)</li>
          <li style={styles.li}>Дополнительные ракурсы</li>
        </ol>

        <h2 style={styles.h2}>Чек-лист готового лукбука перед загрузкой на маркетплейс</h2>
        <p style={styles.p}>Проверьте 16 пунктов перед публикацией:</p>

        <p style={styles.p}><strong>Технические требования:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Формат 3:4 (900×1200 пикселей минимум)</li>
          <li style={styles.li}>Вес файла не превышает 5 МБ</li>
          <li style={styles.li}>Нет размытых зон, артефактов, пикселизации</li>
          <li style={styles.li}>Нет водяных знаков и чужих логотипов</li>
        </ul>

        <p style={styles.p}><strong>Содержание lifestyle-кадров:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар занимает не менее 50% кадра</li>
          <li style={styles.li}>Детали товара (цвет, принт, текстура) совпадают с реальным товаром</li>
          <li style={styles.li}>Сцена соответствует целевой аудитории по возрасту и стилю жизни</li>
          <li style={styles.li}>Нет отвлекающих объектов, перетягивающих внимание</li>
          <li style={styles.li}>Цветопередача близка к реальному цвету товара</li>
        </ul>

        <p style={styles.p}><strong>Первый слайд:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар на нейтральном или белом фоне</li>
          <li style={styles.li}>Нет текста и логотипов на первом слайде (правило WB)</li>
          <li style={styles.li}>Хорошее освещение без пересвета и тёмных зон</li>
        </ul>

        <p style={styles.p}><strong>После загрузки:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Проверьте отображение карточки на мобильном устройстве</li>
          <li style={styles.li}>Сравните с ТОП-5 конкурентами в категории — ваша карточка должна выглядеть не хуже</li>
          <li style={styles.li}>Запишите текущий CTR, чтобы измерить результат через 1–2 недели</li>
        </ul>

        <h2 style={styles.h2}>Кейс: CTR +71% после замены первого слайда и добавления лукбука</h2>
        <p style={styles.p}>
          Один из пользователей Aiviso — продавец в категории «Уход за собой» — работал
          с одним предметным фото крема на белом фоне. CTR карточки был 1,4% при средней по категории 3,2%.
        </p>
        <p style={styles.p}>Что сделали за один день:</p>
        <ol style={styles.ol}>
          <li style={styles.li}>Загрузили предметное фото в Aiviso</li>
          <li style={styles.li}>Сгенерировали 5 lifestyle-сцен: крем на деревянной полке в ванной, крем в руках, утренняя сцена с косметичкой, крупный план текстуры</li>
          <li style={styles.li}>Добавили инфографику с составом и временем действия в Canva</li>
          <li style={styles.li}>Загрузили 8 слайдов: первый — предметка, второй — лучший lifestyle</li>
        </ol>
        <p style={styles.p}>Результат через 2 недели:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>CTR: 1,4% → 2,4% (+71%)</li>
          <li style={styles.li}>Конверсия в заказ: 3,8% → 5,2%</li>
          <li style={styles.li}>Еженедельные заказы: 11 → 19 (+73%)</li>
          <li style={styles.li}>Возвраты: снизились с 29% до 21%</li>
        </ul>
        <p style={styles.p}>
          Общий бюджет на обновление: 450 ₽ (15 кредитов Aiviso).
          Дополнительная выручка за месяц: около 32 000 ₽ при среднем чеке 1 000 ₽.
        </p>

        <h2 style={styles.h2}>Как часто обновлять лукбук</h2>
        <p style={styles.p}>
          Минимум раз в сезон. Летние сцены с солнцем и пляжем плохо работают осенью —
          покупатель ищет «осеннюю куртку», а видит пальмы.
        </p>
        <p style={styles.p}>Когда ещё менять лукбук:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>CTR упал на 20%+ относительно прошлого периода</strong> — первый признак что фото «устарело»</li>
          <li style={styles.li}><strong>Конкуренты обновились</strong> — топ-10 категории сменили визуал, ваша карточка выглядит старой</li>
          <li style={styles.li}><strong>Новый цвет или комплектация</strong> — каждый вариант требует отдельной lifestyle-сцены</li>
          <li style={styles.li}><strong>Запуск акции</strong> — акционные баннеры на слайдах работают лучше с актуальными фото</li>
        </ul>
        <p style={styles.p}>
          Частое обновление не сбивает позиции, если менять не первый слайд резко,
          а добавлять новые слайды постепенно — 1–2 за раз с интервалом 2–3 дня.
          Подробнее — в статье{" "}
          <Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>
            «Как обновить фото карточки и не потерять позиции»
          </Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь попробовать на своей карточке?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Загрузи фото товара в Aiviso</Link>
            {" "}— 13 кредитов бесплатно на старте. Получи 2–3 готовых lifestyle-кадра за 2 минуты
            и посмотри, как изменится вид карточки до загрузки на маркетплейс.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки: 8 правил первого слайда который продаёт</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/lifestyle-foto-dlya-marketpleis" style={{ color: "#7c3aed" }}>Lifestyle-фото для маркетплейса: как создать без фотостудии</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>Как обновить фото карточки и не потерять позиции</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Сервис AI-генерации фото для маркетплейса — Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

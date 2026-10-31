import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Продающий текст для карточки маркетплейса: как писать чтобы покупали — Aiviso",
  description: "Как написать продающее описание товара для WB и Ozon: формулы, структура, чек-лист из 14 пунктов. Кейс: конверсия с 2,8% до 5,4% после правки одного текста.",
  keywords: [
    "продающий текст карточки",
    "описание товара wildberries",
    "как написать описание для маркетплейса",
    "текст карточки ozon",
    "копирайтинг для маркетплейса",
    "продающее описание товара",
    "текст для wildberries ozon",
    "конверсия карточки текст",
  ],
  alternates: { canonical: "/blog/prodayushchiy-tekst-kartochki" },
  openGraph: {
    title: "Продающий текст для карточки маркетплейса: как писать чтобы покупали",
    description: "Формулы, структура и чек-лист из 14 пунктов. Кейс: конверсия +93% после правки одного описания.",
    url: "/blog/prodayushchiy-tekst-kartochki",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Продающий текст для карточки маркетплейса: как писать чтобы покупали, а не просто смотрели",
  description: "Как написать продающее описание товара для WB и Ozon: структура, формулы, примеры и чек-лист.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/prodayushchiy-tekst-kartochki",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Продающий текст для карточки", item: "https://aiviso.ru/blog/prodayushchiy-tekst-kartochki" },
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

export default function ProdayushchiyTekstKartochki() {
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
          <span style={{ color: "#1f2937" }}>Продающий текст для карточки</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Продающий текст для карточки маркетплейса: как писать чтобы покупали, а не просто смотрели
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>31 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство селлеров тратят 80% усилий на фото и 20% на текст. Но именно описание
          закрывает последние сомнения покупателя — и определяет, нажмёт ли он «Добавить в корзину»
          или уйдёт к конкуренту с тем же товаром, но убедительнее написанным.
        </p>

        <h2 style={styles.h2}>Почему текст решает даже при хорошем фото</h2>
        <p style={styles.p}>
          Фото привлекает внимание и формирует первое впечатление. Но по данным исследований
          поведения покупателей на маркетплейсах, 63% людей, пролистав фото, обязательно читают
          описание перед покупкой — особенно если товар дороже 1 500 ₽.
        </p>
        <p style={styles.p}>
          Один из клиентов Aiviso — продавец силиконовых ковриков для ванной — сделал хорошее фото
          (белый фон, детали крупным планом, lifestyle-кадр) и получал CTR 3,2%. Но конверсия
          карточки в заказ была 2,8% — ниже среднего по категории. После переработки описания
          за два часа конверсия выросла до 5,4%, заказов стало в 1,9 раза больше. Фото не
          менялось.
        </p>
        <p style={styles.p}>
          Причина — описание не отвечало на вопросы покупателя: «Не будет ли скользить?»,
          «Подойдёт ли к моей ванной?», «Как мыть?». Новый текст ответил на все три за первые
          три строки.
        </p>

        <h2 style={styles.h2}>Анатомия продающего заголовка</h2>
        <p style={styles.p}>
          Заголовок — это не название товара из прайс-листа поставщика. Это первый рекламный текст,
          который видит покупатель в поиске. WB и Ozon показывают первые 50–60 символов в мобильном
          листинге, поэтому каждое слово считается.
        </p>

        <h3 style={styles.h3}>Формула заголовка</h3>
        <p style={styles.p}>
          Рабочая структура: <strong>[Тип товара] [ключевой атрибут] [выгода или сценарий использования]</strong>
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слабо:</strong> «Коврик резиновый противоскользящий»</li>
          <li style={styles.li}><strong>Сильно:</strong> «Коврик для ванной силиконовый, не скользит, 80×50 см, серый»</li>
        </ul>
        <p style={styles.p}>
          Второй вариант отвечает на три вопроса сразу: что за материал, в чём польза, какой размер.
          Покупатель меньше думает — проще добавить в корзину.
        </p>

        <h3 style={styles.h3}>Частые ошибки в заголовках</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Артикул или код поставщика</strong> — «Коврик NN-2245/A» ничего не говорит покупателю</li>
          <li style={styles.li}><strong>Только бренд без описания</strong> — «Runo коврик» непонятно для тех, кто не знает бренд</li>
          <li style={styles.li}><strong>Перечисление без структуры</strong> — «коврик ванная антискользящий резина серый 80 50 см» — нечитаемо</li>
          <li style={styles.li}><strong>Заглавные буквы через слово</strong> — «КОВРИК ДЛЯ ВАННОЙ» выглядит как крик и хуже читается</li>
        </ul>

        <h2 style={styles.h2}>Структура описания которая продаёт</h2>
        <p style={styles.p}>
          Покупатель читает описание нелинейно: сначала первый абзац, потом ищет глазами
          ответ на свой главный вопрос. Поэтому структура важнее красоты текста.
        </p>

        <h3 style={styles.h3}>Первый абзац: главная выгода + снятие главного страха</h3>
        <p style={styles.p}>
          Первые 2–3 предложения должны: назвать, что это за товар, зачем он нужен и почему
          покупатель не прогадает. Это не место для истории бренда.
        </p>
        <p style={styles.p}>
          Пример для коврика: <em>«Силиконовый коврик не скользит даже на мокром кафеле —
          проверено при наклоне 30°. Подходит для любых ванных: прямоугольных, угловых,
          с поддоном. Моется под краном за 30 секунд.»</em>
        </p>
        <p style={styles.p}>
          Три предложения — три страха закрыты: «а вдруг упаду», «а вдруг не влезет»,
          «а вдруг замучаюсь мыть».
        </p>

        <h3 style={styles.h3}>Блок характеристик: цифры, а не прилагательные</h3>
        <p style={styles.p}>
          «Высокое качество» ничего не значит. «Толщина 8 мм, 320 присосок на квадратный
          дециметр» — значит. Покупатель не может потрогать товар, поэтому цифры выполняют
          функцию тактильного опыта.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Слабо</th>
              <th style={styles.th}>Сильно</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Прочный материал</td>
              <td style={styles.tdAccent}>Силикон 60 ShA — не рвётся при растяжении до 400%</td>
            </tr>
            <tr>
              <td style={styles.td}>Большой размер</td>
              <td style={styles.tdAccent}>80×50 см — подходит для стандартных ванн от 140 см</td>
            </tr>
            <tr>
              <td style={styles.td}>Красивый цвет</td>
              <td style={styles.tdAccent}>Серый тёплый — совпадает с Pantone 430C</td>
            </tr>
            <tr>
              <td style={styles.td}>Лёгкий уход</td>
              <td style={styles.tdAccent}>Моется в посудомойке при 60°, не деформируется</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Язык покупателя, а не производителя</h2>
        <p style={styles.p}>
          Производитель думает про товар. Покупатель думает про себя. Самая частая ошибка —
          описывать характеристики без привязки к жизни человека.
        </p>
        <p style={styles.p}>
          Формула: <strong>[характеристика] — значит [выгода для человека]</strong>
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>«Толщина 8 мм» — скучно. «Толщина 8 мм — нога не чувствует холодный кафель даже зимой» — понятно</li>
          <li style={styles.li}>«Антибактериальный» — вода. «Антибактериальный — не воняет сырой резиной через неделю» — конкретно</li>
          <li style={styles.li}>«Экологичный материал» — клише. «Без запаха формальдегида — безопасно для детей и аллергиков» — ценность</li>
        </ul>
        <p style={styles.p}>
          Чтобы найти язык покупателя — прочитайте 20–30 отзывов конкурентов. Какие слова
          люди используют в хороших отзывах? Какие вопросы задают в Q&A? Это и есть словарь,
          которым нужно писать описание.
        </p>

        <h2 style={styles.h2}>Как работает Q&A и почему его нельзя игнорировать</h2>
        <p style={styles.p}>
          Раздел «Вопросы и ответы» на WB и Ozon читает значительная часть покупателей — особенно
          для товаров дороже 2 000 ₽. И если там висит вопрос без ответа — это сигнал недоверия.
        </p>
        <p style={styles.p}>
          Хитрость: самые частые вопросы из Q&A нужно включить прямо в описание. Если пять
          человек спросили «а есть ли крепление для душевой кабины» — значит, это страх всей
          аудитории. Один абзац в описании сразу снимает возражение у тысяч потенциальных
          покупателей.
        </p>
        <p style={styles.p}>
          Продавец термосов в категории «Посуда» добавил в описание ответы на 7 самых частых
          вопросов («держит ли тепло 12 часов», «можно ли мыть в посудомойке», «не пахнет ли
          пластиком») — конверсия выросла с 3,1% до 4,9% за три недели без изменений фото и цены.
        </p>

        <h2 style={styles.h2}>Сезонность и контекст в тексте</h2>
        <p style={styles.p}>
          Один текст на весь год — упущенные продажи. Описание нужно обновлять под сезон,
          праздники и актуальные сценарии. Для этого не нужно менять всё: достаточно обновить
          первый абзац и добавить одно предложение про повод.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Ноябрь–декабрь: «Отличный подарок на Новый год — упакуем в подарочный пакет»</li>
          <li style={styles.li}>Февраль: «К 23 февраля — практичный подарок мужчине»</li>
          <li style={styles.li}>Март: «Идеально для подарка на 8 Марта»</li>
          <li style={styles.li}>Май–июнь: «Для дачи и летнего отдыха — не боится влаги и жары»</li>
        </ul>
        <p style={styles.p}>
          На <Link href="/blog/sezonnye-tovary-kalendar-2026" style={{ color: "#7c3aed" }}>нашем
          календаре сезонных товаров</Link> есть точные даты, когда нужно обновлять карточки
          под каждый пик продаж.
        </p>

        <h2 style={styles.h2}>Чек-лист продающего текста: 14 пунктов</h2>
        <p style={styles.p}>Прогоните описание по этому списку перед публикацией:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый абзац отвечает на вопрос «зачем мне это?» за 3 секунды</li>
          <li style={styles.li}>Нет общих слов: «высокое качество», «прочный», «удобный» — только с цифрой или примером</li>
          <li style={styles.li}>Есть хотя бы 3 числовых характеристики (размер, вес, температура, срок, процент)</li>
          <li style={styles.li}>Снят главный страх покупателя (скользит? не влезет? сломается?)</li>
          <li style={styles.li}>Указано для кого товар — конкретный сценарий или тип покупателя</li>
          <li style={styles.li}>Нет канцелярита: «представляем вашему вниманию», «высококачественный продукт»</li>
          <li style={styles.li}>Есть ответ на 2–3 самых частых вопроса из Q&A конкурентов</li>
          <li style={styles.li}>Написано языком покупателя, а не языком прайс-листа</li>
          <li style={styles.li}>Абзацы короткие — не длиннее 4–5 строк</li>
          <li style={styles.li}>Есть хотя бы один сценарий использования («для поездок», «в детскую», «на кухню»)</li>
          <li style={styles.li}>Обновлён под текущий сезон или ближайший праздник</li>
          <li style={styles.li}>Ключевые слова включены органично — не спамом через запятую</li>
          <li style={styles.li}>Проверена грамматика и пунктуация — одна опечатка снижает доверие</li>
          <li style={styles.li}>Указаны условия возврата или гарантии, если это важно для категории</li>
        </ul>

        <h2 style={styles.h2}>AI для текстов карточек: когда помогает, когда мешает</h2>
        <p style={styles.p}>
          Нейросети хорошо справляются с генерацией первых черновиков и вариаций текста.
          ChatGPT, Claude или специализированные инструменты для маркетплейсов за 2 минуты
          дают 3–5 вариантов описания — из них можно выбрать лучший или скомбинировать.
        </p>
        <p style={styles.p}>
          Что AI делает плохо: не знает вашего конкретного товара, не читал отзывы конкурентов,
          не понимает страхи вашей аудитории. Поэтому «промт в пустоту» даёт шаблонный текст.
          Чтобы AI помог, нужно дать ему:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Конкретные характеристики товара с цифрами</li>
          <li style={styles.li}>Три главных страха покупателей (их берут из Q&A и плохих отзывов конкурентов)</li>
          <li style={styles.li}>Сценарий использования (для чего, кем, в какой ситуации)</li>
          <li style={styles.li}>Тон: строгий и технический vs дружелюбный и простой</li>
        </ul>
        <p style={styles.p}>
          Тогда AI генерирует черновик за 30 секунд, а вы тратите 10 минут на правку —
          вместо 40 минут на написание с нуля. Подробнее про <Link href="/blog/neyroseti-dlya-seo-marketpleys" style={{ color: "#7c3aed" }}>использование нейросетей
          для SEO карточки</Link> — в отдельном гайде.
        </p>

        <h2 style={styles.h2}>Как связаны текст, фото и позиции в поиске</h2>
        <p style={styles.p}>
          Текст карточки напрямую влияет на позиции в органическом поиске WB и Ozon. Алгоритмы
          читают заголовок, описание и характеристики — и ранжируют карточку по ключевым запросам.
        </p>
        <p style={styles.p}>
          Но текст также влияет на конверсию. А конверсия — главный сигнал для алгоритма:
          «покупатели выбирают этот товар». Карточки с высокой конверсией маркетплейс
          поднимает выше. Это значит, что хороший продающий текст работает в двух направлениях:
          и как SEO, и как продажи.
        </p>
        <p style={styles.p}>
          Подробный разбор по SEO — в статьях{" "}
          <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки
          Wildberries</Link> и <Link href="/blog/seo-kartochki-ozon-2026" style={{ color: "#7c3aed" }}>SEO для карточки
          Ozon</Link>.
        </p>

        <h2 style={styles.h2}>Быстрый старт: что переписать прямо сейчас</h2>
        <p style={styles.p}>
          Если не хватает времени на полную переработку — начните с трёх мест:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Первый абзац описания.</strong> Замените «Представляем вашему вниманию...»
            на конкретный результат для покупателя. Это занимает 10 минут и даёт самый
            быстрый прирост конверсии.
          </li>
          <li style={styles.li}>
            <strong>Заголовок.</strong> Добавьте в него один ключевой атрибут и одну выгоду.
            Не трогайте бренд и категорию — только добавьте «крючок».
          </li>
          <li style={styles.li}>
            <strong>Характеристики.</strong> Замените прилагательные на цифры. «Прочный» →
            «Выдерживает нагрузку 120 кг». Это улучшает и SEO, и доверие.
          </li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь обновить фото карточки вместе с текстом?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуй Aiviso</Link>
            {" "}— загрузи фото товара, получи lifestyle-кадры с правильным фоном за 2 минуты.
            Текст + фото обновляются вместе — конверсия растёт быстрее.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/opisanie-tovara-wb" style={{ color: "#7c3aed" }}>Как написать описание товара для Wildberries: полное руководство 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/zagolovok-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>Как написать заголовок карточки на WB и Ozon: формула и чек-лист</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки товара на 30%</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

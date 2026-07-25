import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Фоны для карточки товара на WB и Ozon: что работает — Aiviso",
  description: "Белый, lifestyle, градиент или предметная сцена — какой фон поднимает CTR на Wildberries и Ozon. Чек-лист из 14 пунктов и реальные кейсы.",
  keywords: [
    "фон для карточки товара",
    "фон для wildberries",
    "фон для ozon",
    "сцены для фото товара",
    "белый фон wildberries",
    "lifestyle фон маркетплейс",
    "цвет фона карточки",
    "ai фон для товара",
    "как выбрать фон для маркетплейса",
    "фото товара на белом фоне",
  ],
  alternates: { canonical: "/blog/fony-dlya-kartochki-tovara" },
  openGraph: {
    title: "Фоны для карточки товара: что работает на WB и Ozon в 2026",
    description: "Белый, lifestyle или градиент — разбираем фоны по категориям с реальными кейсами и чек-листом из 14 пунктов.",
    url: "/blog/fony-dlya-kartochki-tovara",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Фоны и сцены для карточки товара на Wildberries и Ozon: что работает в 2026",
  description: "Какой фон выбрать для карточки товара на WB и Ozon: белый, lifestyle, градиент или предметная сцена. Чек-лист из 14 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/fony-dlya-kartochki-tovara",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Фоны для карточки товара", item: "https://aiviso.ru/blog/fony-dlya-kartochki-tovara" },
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

export default function FonyDlyaKartochkiTovara() {
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
          <span style={{ color: "#1f2937" }}>Фоны для карточки товара</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Фоны и сцены для карточки товара: что реально работает на WB и Ozon
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 25 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Покупатель тратит меньше секунды, чтобы пролистать вашу карточку или остановиться на ней. В этот момент он не читает описание — он видит фон. Правильный фон поднимает CTR на 20–60%, неправильный — хоронит товар даже с хорошим SEO и ценой.
        </p>

        <h2 style={styles.h2}>Четыре типа фонов: когда что работает</h2>
        <p style={styles.p}>На практике все фоны для карточек сводятся к четырём типам. У каждого своя задача и своя аудитория.</p>

        <h3 style={styles.h3}>1. Чистый белый (#FFFFFF или близкий к нему)</h3>
        <p style={styles.p}>
          Это стандарт для первого слайда на Wildberries — особенно в категориях электроника, инструменты, детские товары, бытовая химия. Белый фон воспринимается как «официальная» карточка, снижает когнитивную нагрузку, даёт товару 100% внимания.
        </p>
        <p style={styles.p}>
          Один клиент в категории «Запчасти для авто» попробовал lifestyle-фон с капотом машины на первом слайде — CTR упал с 3.2% до 2.1% за 10 дней. Вернули белый — CTR восстановился за 4 дня. Покупатели в этой категории хотят видеть деталь, а не атмосферу.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Подходит для:</strong> электроника, инструменты, запчасти, бытовая техника, детские игрушки, спортивный инвентарь</li>
          <li style={styles.li}><strong>Не работает для:</strong> одежда, украшения, косметика, товары для дома — там белый делает карточку «мёртвой»</li>
          <li style={styles.li}><strong>Требование WB:</strong> фон должен быть светлым, но не обязательно 100% белым — допустимы оттенки от #F5F5F5 до #FFFFFF</li>
        </ul>

        <h3 style={styles.h3}>2. Нейтральный градиент и предметный фон</h3>
        <p style={styles.p}>
          Серый градиент от #E8E8E8 до #F5F5F5, бежевый, светло-голубой — промежуточный вариант между белым и lifestyle. Хорошо работает для косметики, парфюмерии, аксессуаров. Добавляет глубины без перегруза.
        </p>
        <p style={styles.p}>
          Кейс из категории «Уход за кожей»: замена белого фона на мягкий бежевый (#F3EDE3) с тенью под флаконом подняла конверсию с 2.4% до 3.1% при той же цене и тех же ключах. Покупатели в этом сегменте выбирают глазами, и нейтральный фон создаёт ощущение «premium без переплаты».
        </p>

        <h3 style={styles.h3}>3. Lifestyle-сцена</h3>
        <p style={styles.p}>
          Товар в контексте использования: кружка на деревянном столе с книгой, куртка на модели в горах, детская кроватка в уютной комнате. Это самый конвертирующий тип фото для одежды, товаров для дома, подарков и декора — но только если сделан правильно.
        </p>
        <p style={styles.p}>
          Ошибка, которую делают 7 из 10 новичков: берут первый попавшийся фон из фотостока и кладут на него продукт. Выглядит как монтаж. Покупатель сразу видит подделку. Результат — возвраты и низкий рейтинг.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Подходит для:</strong> одежда, обувь, сумки, товары для дома, постельное бельё, подарочные наборы, декор</li>
          <li style={styles.li}><strong>Ключевое условие:</strong> свет на товаре и фоне должен совпадать по направлению и температуре</li>
          <li style={styles.li}><strong>Средний прирост CTR:</strong> +25–40% в категории одежда при переходе с белого на lifestyle</li>
        </ul>

        <h3 style={styles.h3}>4. Цветной акцентный фон</h3>
        <p style={styles.p}>
          Насыщенный однотонный цвет — тёмно-зелёный, терракотовый, глубокий синий — как фирменный элемент бренда. Работает для косметики премиум-сегмента, аксессуаров и подарков. В листинге такая карточка моментально выделяется среди белых конкурентов.
        </p>
        <p style={styles.p}>
          Важно: цвет фона не должен конкурировать с цветом товара. Тёмно-синяя бутылка духов на тёмно-синем фоне — потеря товара. Правило контраста: фон и товар должны различаться минимум на 40% по яркости.
        </p>

        <h2 style={styles.h2}>Что работает по категориям: таблица</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Категория</th>
                <th style={styles.th}>Первый слайд</th>
                <th style={styles.th}>Слайды 2–5</th>
                <th style={styles.th}>Что убивает CTR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Одежда и обувь</td>
                <td style={styles.tdAccent}>Lifestyle / модель</td>
                <td style={styles.td}>Ghost mannequin, детали, размерная сетка</td>
                <td style={styles.td}>Белый фон — карточка теряется</td>
              </tr>
              <tr>
                <td style={styles.td}>Электроника</td>
                <td style={styles.tdAccent}>Белый / тёмный градиент</td>
                <td style={styles.td}>Инфографика, кейсы использования</td>
                <td style={styles.td}>Перегруженная lifestyle-сцена</td>
              </tr>
              <tr>
                <td style={styles.td}>Косметика и уход</td>
                <td style={styles.tdAccent}>Нейтральный / цветной акцент</td>
                <td style={styles.td}>Текстура, до/после, состав</td>
                <td style={styles.td}>Слишком тёмный фон — теряется текст</td>
              </tr>
              <tr>
                <td style={styles.td}>Товары для дома</td>
                <td style={styles.tdAccent}>Lifestyle (интерьер)</td>
                <td style={styles.td}>Размеры, способ применения</td>
                <td style={styles.td}>Белый без контекста</td>
              </tr>
              <tr>
                <td style={styles.td}>Детские товары</td>
                <td style={styles.tdAccent}>Белый или пастельный</td>
                <td style={styles.td}>Ребёнок с товаром, размеры, состав</td>
                <td style={styles.td}>Тёмный или агрессивный цвет</td>
              </tr>
              <tr>
                <td style={styles.td}>Украшения</td>
                <td style={styles.tdAccent}>Тёмный бархат / нейтральный</td>
                <td style={styles.td}>На модели, крупный план деталей</td>
                <td style={styles.td}>Белый — украшения теряют «дорогой» вид</td>
              </tr>
              <tr>
                <td style={styles.td}>Продукты питания</td>
                <td style={styles.tdAccent}>Деревянная поверхность / lifestyle</td>
                <td style={styles.td}>Состав, КБЖУ, способ приготовления</td>
                <td style={styles.td}>Стерильный белый — еда выглядит неаппетитно</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={styles.h2}>Главные ошибки с фоном — и как их исправить</h2>
        <p style={styles.p}>За два года работы с карточками на WB и Ozon мы видели одни и те же ошибки снова и снова.</p>

        <h3 style={styles.h3}>Ошибка 1: Один и тот же фон для всех товаров</h3>
        <p style={styles.p}>
          Проблема — это работает наоборот в разных категориях. Белый фон идеален для дрели, но убивает продажи шёлкового платья. Lifestyle-кухня прекрасна для скалки, но выглядит абсурдно под автозапчасть. Для каждой категории — своя логика.
        </p>
        <p style={styles.p}>Решение: разбить каталог по категориям и прописать стандарт фона для каждой группы. Даже простое деление «технические товары → белый, бытовые → lifestyle» уже даёт результат.</p>

        <h3 style={styles.h3}>Ошибка 2: Перегруженный lifestyle</h3>
        <p style={styles.p}>
          Много мелких деталей на фоне — книги, цветы, свечи, кофе — съедают внимание с товара. Покупатель смотрит на интерьер, а не на продукт. Правило: товар должен занимать не менее 60% площади первого слайда.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Постельное бельё» убрал с первого слайда декоративные подушки и ночник — оставил только комплект на кровати. CTR вырос с 2.8% до 4.2% за 12 дней. Фон не изменился, изменилась расстановка акцентов.
        </p>

        <h3 style={styles.h3}>Ошибка 3: Тень не совпадает с источником света</h3>
        <p style={styles.p}>
          Особенно критично при AI-генерации и монтаже: свет на товаре идёт слева, а тень на фоне падает вправо. Мозг покупателя моментально считывает «фальшь» даже без осознания причины — просто становится некомфортно смотреть на фото, и палец пролистывает.
        </p>
        <p style={styles.p}>
          В <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> QC-агент проверяет направление света автоматически и отклоняет генерации, где свет не совпадает с оригинальным фото товара.
        </p>

        <h2 style={styles.h2}>Как AI меняет работу с фонами</h2>
        <p style={styles.p}>
          Раньше сменить фон означало: найти фотостудию с нужным реквизитом, договориться о съёмке, ждать 3–7 дней, получить 10 кадров, выбрать лучший. Одна итерация — минимум 5 000–15 000 ₽ и неделя времени.
        </p>
        <p style={styles.p}>
          AI-генерация фона работает иначе: вы загружаете одно чистое фото товара и получаете его в любой сцене за 2 минуты — кухня, офис, природа, студийный свет, бархатный фон ювелирного магазина. Стоимость одной генерации — от 15 ₽.
        </p>
        <p style={styles.p}>
          Это меняет стратегию работы. Теперь нет смысла угадывать «какой фон сработает лучше» — можно проверить три варианта за час и поставить на A/B тест. Побеждающий вариант масштабировать на весь каталог.
        </p>
        <p style={styles.p}>
          Клиент в категории «Аксессуары для путешествий» протестировал 4 варианта фона для чемодана за два дня: аэропорт, белый, городская улица, горный пейзаж. Победил аэропорт — CTR 5.1% против 2.9% у белого. На студии этот тест стоил бы 60 000 ₽ и месяц работы.
        </p>

        <h2 style={styles.h2}>Разница между WB и Ozon в требованиях к фону</h2>
        <p style={styles.p}>
          Оба маркетплейса не запрещают lifestyle-фоны и цветные сцены, но есть нюансы.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Wildberries</strong> — строже к первому слайду в некоторых категориях: детская одежда и обувь должны быть на светлом фоне. Для остального категорий ограничений по фону нет, но алгоритм WB замечает, что карточки с чётким товаром и минимальным фоном дают больший CTR в поиске.</li>
          <li style={styles.li}><strong>Ozon</strong> — чуть либеральнее: допускает тёмные фоны и насыщенные цвета даже на первом слайде. Важнее соответствие фото реальному товару — модераторы проверяют точнее.</li>
          <li style={styles.li}><strong>Общее правило для обоих:</strong> товар должен быть хорошо виден, без размытия и без перекрытия другими объектами более чем на 30% площади.</li>
        </ul>
        <p style={styles.p}>
          Подробнее о технических требованиях к изображениям читайте в нашем гайде <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>«Размеры фото для маркетплейсов 2026»</Link>.
        </p>

        <h2 style={styles.h2}>Чек-лист: как выбрать фон для карточки</h2>
        <p style={styles.p}>14 вопросов перед тем, как утвердить фон для нового слайда:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар занимает не менее 60% площади кадра?</li>
          <li style={styles.li}>Фон соответствует категории (не белый для одежды, не lifestyle для болта)?</li>
          <li style={styles.li}>Цвет фона контрастирует с основным цветом товара минимум на 40%?</li>
          <li style={styles.li}>Направление тени на товаре совпадает с направлением света на фоне?</li>
          <li style={styles.li}>На фоне нет мелких отвлекающих деталей, которые конкурируют с товаром?</li>
          <li style={styles.li}>Фон не содержит текста, логотипов, ватермарок?</li>
          <li style={styles.li}>При lifestyle-сцене — реквизит дополняет товар, а не перебивает его?</li>
          <li style={styles.li}>Фото читается на мобильном в формате карточки 900×1200 при просмотре 5 см × 6 см?</li>
          <li style={styles.li}>Фон выглядит органично — не как монтаж?</li>
          <li style={styles.li}>Для первого слайда: фон соответствует правилам маркетплейса по данной категории?</li>
          <li style={styles.li}>Для AI-фона: детали товара (текстура, фурнитура, лого) сохранены без искажений?</li>
          <li style={styles.li}>Если фон меняется от слайда к слайду — есть единство стиля между ними?</li>
          <li style={styles.li}>Фон проверен на A/B тесте хотя бы 7–14 дней против предыдущего варианта?</li>
          <li style={styles.li}>CTR после смены фона замерен через статистику кабинета?</li>
        </ul>

        <h2 style={styles.h2}>Сколько слайдов с разными фонами нужно в карточке</h2>
        <p style={styles.p}>
          Оптимальная структура для большинства категорий — 6–8 слайдов:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слайд 1:</strong> главное фото товара. Максимально чистый фон, нет текста, только товар. Это то, что видят в поиске.</li>
          <li style={styles.li}><strong>Слайды 2–3:</strong> lifestyle или контекст использования. Здесь покупатель понимает «как это выглядит у меня дома/на мне».</li>
          <li style={styles.li}><strong>Слайд 4:</strong> инфографика с ключевыми характеристиками на нейтральном фоне — материал, размер, состав.</li>
          <li style={styles.li}><strong>Слайды 5–6:</strong> детали крупным планом. Фон уходит на второй план — важна текстура и качество продукта.</li>
          <li style={styles.li}><strong>Слайд 7–8 (опционально):</strong> сравнение размеров, упаковка, сертификаты.</li>
        </ul>
        <p style={styles.p}>
          Подробнее о структуре карточки читайте в статье <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>«Главное фото карточки: 8 правил первого слайда»</Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Хотите протестировать разные фоны без фотостудии?
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Загрузите одно фото товара на белом фоне — и за 2 минуты получите его в пяти разных сценах: lifestyle, студия, интерьер, природа, акцентный цвет. 13 кредитов на старте бесплатно.
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
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки товара: 8 правил первого слайда</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/psihologiya-cveta-kartochki" style={{ color: "#7c3aed" }}>Психология цвета на карточке товара: как поднять CTR</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>7 ошибок с фото товара, которые убивают конверсию</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/lifestyle-foto-dlya-marketpleis" style={{ color: "#7c3aed" }}>Lifestyle-фото для маркетплейса: как создать без фотостудии</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link>
          </li>
        </ul>
      </article>
    </>
  );
}

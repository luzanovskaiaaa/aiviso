import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Психология цвета на карточке товара: как поднять CTR — Aiviso",
  description:
    "Какие цвета повышают CTR и конверсию карточки на Wildberries и Ozon. Разбор по категориям: одежда, косметика, электроника. Чек-лист для селлеров.",
  keywords: [
    "психология цвета маркетплейс",
    "цвет карточки товара",
    "как повысить CTR wildberries",
    "конверсия карточки ozon",
    "цвет фона карточки",
    "дизайн карточки товара",
    "wildberries карточка цвет",
    "оформление карточки маркетплейс",
  ],
  alternates: { canonical: "/blog/psihologiya-cveta-kartochki" },
  openGraph: {
    title: "Психология цвета на карточке товара: как поднять CTR на маркетплейсе",
    description:
      "Какие цвета работают на Wildberries и Ozon. Разбор по категориям, реальные примеры и чек-лист для селлеров.",
    url: "/blog/psihologiya-cveta-kartochki",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Психология цвета на карточке товара: как поднять CTR на маркетплейсе",
  description:
    "Какие цвета повышают CTR и конверсию карточки на Wildberries и Ozon. Разбор по категориям: одежда, косметика, электроника.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/psihologiya-cveta-kartochki",
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
      name: "Психология цвета на карточке товара",
      item: "https://aiviso.ru/blog/psihologiya-cveta-kartochki",
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
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function PsihologiyaCveta() {
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
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Блог</Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Психология цвета на карточке товара</span>
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
          Психология цвета на карточке товара: как поднять CTR на маркетплейсе
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>19 июня 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Покупатель принимает первое решение за 90 миллисекунд — до того, как прочитает название
          товара. В этот момент работает только одно: цвет. Разбираем, как правильно выбрать
          цветовую схему карточки, чтобы выделиться в листинге и не потерять клиентов на этапе
          просмотра.
        </p>

        <h2 style={styles.h2}>Почему цвет — это деньги, а не эстетика</h2>
        <p style={styles.p}>
          Один из наших клиентов продавал детские бутылочки на Wildberries. Карточки были грамотно
          оформлены: белый фон, чёткие фото, правильные размеры. CTR держался на уровне 3,1% при
          среднем по нише 4,8%. После замены фона с белого на пастельно-голубой и добавления
          зелёного акцента на инфографике CTR вырос до 5,2% за три недели — это плюс 67% кликов
          при том же объёме показов.
        </p>
        <p style={styles.p}>
          Дело не в «красиво» или «некрасиво». Дело в том, что мозг покупателя ещё до
          осознанного анализа присваивает карточке эмоциональный тег: «это безопасно для ребёнка»,
          «это дорого», «это для меня». Цвет — главный носитель этого тега.
        </p>

        <h2 style={styles.h2}>Как цвет влияет на решение о покупке</h2>
        <p style={styles.p}>
          Исследование Nielsen Norman Group показывает: 85% потребителей называют цвет главным
          фактором при первичном выборе товара. Для маркетплейса это переводится в конкретные
          метрики:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>CTR (клики из листинга)</strong> — цвет фона и основного объекта определяет,
            выделяется ли карточка среди соседей
          </li>
          <li style={styles.li}>
            <strong>Время на карточке</strong> — правильное цветовое сочетание удерживает взгляд,
            человек листает все фото, а не закрывает после первого
          </li>
          <li style={styles.li}>
            <strong>Конверсия в корзину</strong> — цвет CTA-зоны в инфографике («Купить», выделение
            цены) влияет на готовность кликнуть «В корзину»
          </li>
          <li style={styles.li}>
            <strong>Возвраты</strong> — если реальный цвет товара отличается от фото из-за
            неправильной цветокоррекции, растёт процент возвратов
          </li>
        </ul>

        <h2 style={styles.h2}>Значение цветов по категориям</h2>
        <p style={styles.p}>
          Нет универсального «правильного» цвета. Один и тот же красный работает отлично в
          продуктах питания и убивает конверсию в медицинских товарах. Всё зависит от категории и
          от того, что ожидает увидеть целевая аудитория.
        </p>

        <h3 style={styles.h3}>Одежда и обувь</h3>
        <p style={styles.p}>
          В этой категории главная задача фото — показать товар максимально честно. Покупатель
          должен видеть реальный цвет ткани, фактуру, посадку.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Белый и светло-серый фон</strong> — стандарт для базовых вещей. Нейтральный,
            не перебивает цвет товара, выглядит профессионально.
          </li>
          <li style={styles.li}>
            <strong>Контрастный фон</strong> — работает когда сам товар светлый. Белая рубашка на
            белом фоне теряется, на светло-бежевом или сером — читается чётко.
          </li>
          <li style={styles.li}>
            <strong>Мятый или «грязный» фон</strong> — снижает доверие к качеству товара. Если
            фон выглядит как пыльный подоконник, товар тоже кажется дешевле.
          </li>
          <li style={styles.li}>
            <strong>Lifestyle-фоны</strong> (кафе, улица, интерьер) — хорошо работают для
            молодёжной и casual-одежды, добавляют контекст «куда носить». Для базовой одежды —
            лишнее.
          </li>
        </ul>

        <h3 style={styles.h3}>Косметика и уход</h3>
        <p style={styles.p}>
          Категория с самой высокой визуальной конкуренцией на Ozon и WB. Здесь важны чистота,
          свежесть и ощущение «натуральности» или «эффективности» — зависит от позиционирования.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Белый + пастельные акценты</strong> — классика масс-маркет косметики. Чисто,
            понятно, не пугает ценой.
          </li>
          <li style={styles.li}>
            <strong>Зелёный</strong> — сигнал «натуральный состав», «эко», «без химии». Если
            товар позиционируется как organic — зелёный в деталях фона и подложки обязателен.
          </li>
          <li style={styles.li}>
            <strong>Чёрный и тёмно-синий</strong> — премиум-сегмент. Парфюмерия, антивозрастной
            уход. Показывает «это дорого и работает».
          </li>
          <li style={styles.li}>
            <strong>Розовый и лавандовый</strong> — уход для женщин, подарочные наборы. Но
            аккуратно: переиспользован в категории, легко стать ещё одной «розовой карточкой».
          </li>
        </ul>

        <h3 style={styles.h3}>Электроника и гаджеты</h3>
        <p style={styles.p}>
          Покупатели в этой категории рациональны — им важны характеристики, а не эстетика.
          Но цвет всё равно работает через восприятие качества и надёжности.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Белый или чёрный фон</strong> — стандарт. Смотрится технологично, не
            отвлекает от товара.
          </li>
          <li style={styles.li}>
            <strong>Синий</strong> — ассоциируется с технологиями, надёжностью. Используется
            в инфографике для выделения характеристик.
          </li>
          <li style={styles.li}>
            <strong>Яркие поп-арт фоны</strong> — работают только для молодёжных гаджетов
            (наушники, чехлы, портативные колонки). Для «серьёзной» электроники режут
            конверсию.
          </li>
        </ul>

        <h3 style={styles.h3}>Детские товары</h3>
        <p style={styles.p}>
          Аудитория — молодые родители. Им нужна безопасность и доверие, не «яркость» ради
          яркости.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Пастельные тона</strong> — голубой, розовый, жёлтый, мятный. Вызывают
            ощущение нежности и безопасности.
          </li>
          <li style={styles.li}>
            <strong>Насыщенные кричащие цвета</strong> — привлекают внимание к товару, но
            иногда снижают доверие: кажется, что краска может быть небезопасной.
          </li>
          <li style={styles.li}>
            <strong>Белый фон + зелёные акценты</strong> — сочетание «чисто + натурально» работает
            хорошо для питания, посуды, средств гигиены для малышей.
          </li>
        </ul>

        <h2 style={styles.h2}>Сравнение: какой фон даёт лучший CTR</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Тип фона</th>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Средний прирост CTR</th>
              <th style={styles.th}>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Белый нейтральный</td>
              <td style={styles.td}>Любая</td>
              <td style={styles.td}>Базовый</td>
              <td style={styles.td}>Требование WB. Безопасно, но не выделяет.</td>
            </tr>
            <tr>
              <td style={styles.td}>Контрастный акцент (15-20% фото)</td>
              <td style={styles.td}>Одежда, обувь</td>
              <td style={styles.tdAccent}><strong>+20–35%</strong></td>
              <td style={styles.td}>Цветная полоса, плашка с текстом</td>
            </tr>
            <tr>
              <td style={styles.td}>Lifestyle-сцена</td>
              <td style={styles.td}>Одежда, дом</td>
              <td style={styles.tdAccent}><strong>+25–50%</strong></td>
              <td style={styles.td}>Контекст использования повышает желание</td>
            </tr>
            <tr>
              <td style={styles.td}>Градиентный фон</td>
              <td style={styles.td}>Косметика, электроника</td>
              <td style={styles.tdAccent}><strong>+15–30%</strong></td>
              <td style={styles.td}>Глубина, ощущение «premium»</td>
            </tr>
            <tr>
              <td style={styles.td}>Яркий однотонный</td>
              <td style={styles.td}>Детские товары, аксессуары</td>
              <td style={styles.td}>+5–15% (зависит от ниши)</td>
              <td style={styles.td}>Риск выглядеть «дёшево»</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Цветовые ошибки, которые убивают конверсию</h2>
        <p style={styles.p}>
          Вот что чаще всего встречается при аудите карточек наших клиентов:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Пересвет и вымытые цвета.</strong> Товар на фото светлее, чем в реальности.
            Покупатель получает более тёмный товар — возврат. Нужна точная цветокалибровка.
          </li>
          <li style={styles.li}>
            <strong>Фон «съедает» товар.</strong> Белая кружка на белом фоне, бежевое пальто на
            бежевом фоне — товара не видно в листинге при маленьком размере превью.
          </li>
          <li style={styles.li}>
            <strong>Слишком много цветов в инфографике.</strong> Если на карточке одновременно
            красный, синий, зелёный и жёлтый — взгляд не знает, куда смотреть. 2-3 цвета
            максимум.
          </li>
          <li style={styles.li}>
            <strong>Цвет не соответствует категории.</strong> Медицинский прибор на ярко-розовом
            фоне — снижает доверие. Детская пижама на чёрном фоне — пугает родителей.
          </li>
          <li style={styles.li}>
            <strong>Все карточки одного цвета.</strong> Если у вас 30 артикулов и все карточки
            сделаны в одной цветовой схеме — листинг вашего магазина выглядит монотонно, а
            отдельные товары не выделяются друг от друга.
          </li>
          <li style={styles.li}>
            <strong>Перенасыщение контраста.</strong> Инстаграмный «вибрация» — когда
            насыщенность выкручена на 100%. Товар выглядит ненастоящим, теряется доверие.
          </li>
        </ul>

        <h2 style={styles.h2}>Как тестировать цвет карточки без бюджета</h2>
        <p style={styles.p}>
          Не нужно сразу менять все карточки. Вот простой A/B-подход:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Выберите 2-3 артикула с похожими продажами.</strong> Лучше брать товары из
            одной категории с сопоставимым ценником.
          </li>
          <li style={styles.li}>
            <strong>Сделайте альтернативный вариант главного фото</strong> — другой фон или
            другой цветовой акцент. Используйте <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link>{" "}
            чтобы быстро сгенерировать несколько вариантов сцены.
          </li>
          <li style={styles.li}>
            <strong>Загрузите новый вариант на один артикул,</strong> оставьте второй как
            есть. Подождите 7–14 дней.
          </li>
          <li style={styles.li}>
            <strong>Сравните CTR в аналитике</strong> (раздел «Воронка» в личном кабинете
            WB/Ozon). Если разница больше 15% — это статистически значимо для большинства
            ниш.
          </li>
          <li style={styles.li}>
            <strong>Победителя переносите на весь каталог.</strong> Проигравший вариант
            можно исследовать: возможно, дело не в цвете, а в угле съёмки или тексте
            инфографики.
          </li>
        </ol>

        <h2 style={styles.h2}>Цветовые схемы по задачам</h2>
        <p style={styles.p}>
          Несколько готовых схем, которые можно применить прямо сейчас:
        </p>

        <h3 style={styles.h3}>Если нужно выделиться среди белых карточек</h3>
        <p style={styles.p}>
          Большинство карточек в любой категории — белый фон. Значит, небольшой цветной акцент
          сразу даёт преимущество. Добавьте в инфографику плашку с ключевым преимуществом на
          цветном фоне: мятный (#d1fae5) или светло-фиолетовый (#ede9fe). Займёт 15–20% площади
          карточки — этого достаточно.
        </p>

        <h3 style={styles.h3}>Если у вас сезонный товар</h3>
        <p style={styles.p}>
          Сезонность работает и в цвете. Летние товары — яркие, насыщенные. Зимние — тёмные,
          глубокие. Новогодние — красный и золото. Не нужно переснимать весь каталог — достаточно
          обновить фон через AI-генерацию, сохранив сам товар неизменным.
        </p>

        <h3 style={styles.h3}>Если товар сам по себе яркий</h3>
        <p style={styles.p}>
          Тогда фон должен быть нейтральным — серый 10–20% или тёплый белый. Яркий товар на
          ярком фоне = визуальный шум. Покупатель не понимает, куда смотреть, и уходит.
        </p>

        <h2 style={styles.h2}>Чек-лист по цвету карточки</h2>
        <p style={styles.p}>Проверьте каждую карточку перед публикацией:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар чётко читается на фоне (достаточный контраст)</li>
          <li style={styles.li}>Цвет товара на фото совпадает с реальным (не пересвечено, не затемнено)</li>
          <li style={styles.li}>В инфографике не более 3 цветов</li>
          <li style={styles.li}>Фоновый цвет соответствует категории и аудитории</li>
          <li style={styles.li}>Нет мятого, грязного или хаотичного фона</li>
          <li style={styles.li}>Главное фото выделяется в листинге среди соседних карточек</li>
          <li style={styles.li}>Цвет CTA-элементов в инфографике контрастный (читается с 3 метров)</li>
          <li style={styles.li}>Если несколько цветов товара — для каждого своё главное фото, а не одно общее</li>
        </ul>

        <h2 style={styles.h2}>Как AI помогает с цветом</h2>
        <p style={styles.p}>
          Раньше попробовать разные цветовые решения стоило времени и денег: новая съёмка, новые
          декорации, новый фон в редакторе. Сейчас это занимает минуты.
        </p>
        <p style={styles.p}>
          В <Link href="/" style={{ color: "#7c3aed" }}>Aiviso</Link> вы загружаете фото товара на
          белом фоне, выбираете сцену (интерьер, природа, студийный градиент) и получаете готовые
          варианты в разных цветовых схемах. Можно за 10 минут сгенерировать 5 разных вариантов
          фона и выбрать тот, который лучше всего читается в вашей нише. Один наш клиент из
          категории «товары для дома» протестировал таким образом 12 вариантов фона за день и
          нашёл комбинацию, которая подняла CTR с 2,8% до 4,6%.
        </p>
        <p style={styles.p}>
          Важно: AI сохраняет реальный цвет товара. Если у вас синяя кружка — она останется
          синей на любом фоне. Это отличает нормальный AI-инструмент от дешёвых фильтров, которые
          «докрашивают» товар и создают проблемы с возвратами.
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
            <strong>Хотите проверить, как ваша карточка смотрится в другом цвете?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso бесплатно
            </Link>{" "}
            — 13 кредитов на старте, без карты. Загрузите фото товара, выберите сцену, получите
            готовые варианты за 2 минуты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>
              7 ошибок с фото товара на маркетплейсе, которые убивают конверсию
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>
              Инфографика для карточки Wildberries и Ozon: что писать и как оформить
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
              SEO для карточки Wildberries в 2026: пошаговый гайд
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

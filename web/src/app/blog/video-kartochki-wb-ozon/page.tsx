import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Видео для карточки товара на WB и Ozon 2026 — Aiviso",
  description: "Требования к видео на Wildberries и Ozon, форматы, сроки, советы по съёмке и монтажу. Чек-лист из 18 пунктов и кейс +23% конверсии.",
  alternates: { canonical: "/blog/video-kartochki-wb-ozon" },
  openGraph: {
    title: "Видео для карточки товара на WB и Ozon: требования и советы 2026",
    description: "Форматы, продолжительность, советы по съёмке — всё о видео для карточки Wildberries и Ozon. Кейс: +23% конверсии.",
    url: "/blog/video-kartochki-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "видео для карточки wildberries",
    "видео для карточки ozon",
    "видео товара маркетплейс",
    "требования к видео wb",
    "видео для wb требования 2026",
    "как снять видео для маркетплейса",
    "видео на карточке товара",
    "rich контент ozon видео",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Видео для карточки товара на Wildberries и Ozon: требования и советы 2026",
  description: "Требования к видео на WB и Ozon, форматы, советы по съёмке и монтажу. Чек-лист из 18 пунктов и кейс +23% конверсии.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/video-kartochki-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Видео для карточки WB и Ozon", item: "https://aiviso.ru/blog/video-kartochki-wb-ozon" },
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

export default function VideoKartochkiWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Видео для карточки WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Видео для карточки товара на Wildberries и Ozon: требования, советы и чек-лист 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 4 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Карточки с видео на WB получают в среднем на 15–30% больше кликов, чем аналогичные карточки без видео —
          это данные самого Wildberries из вебинаров для продавцов за 2025 год. Ozon ставит видео в Rich-контент
          как приоритетный элемент. Разбираем требования, форматы и что именно снимать, чтобы видео работало.
        </p>

        <h2 style={styles.h2}>Зачем вообще делать видео на карточке</h2>
        <p style={styles.p}>
          Фотографии показывают, как товар выглядит. Видео показывает, как он работает, насколько он большой в реальности,
          как открывается, застёгивается, тянется, светится. Именно это снимает самые частые возражения перед покупкой.
        </p>
        <p style={styles.p}>
          Один из наших клиентов — магазин рюкзаков в категории «Аксессуары» на WB — добавил 30-секундный
          ролик, где модель открывает все карманы рюкзака и кладёт внутрь 15-дюймовый ноутбук. Конверсия
          в заказ выросла с 2.1% до 2.6% за две недели при том же трафике. +23% — только от одного видео.
          Возвраты упали с 18% до 11%: покупатели стали точнее понимать размер.
        </p>
        <p style={styles.p}>
          Другой показательный кейс — продавец детских игрушек на Ozon. До видео — 4.3% конверсии.
          После добавления 45-секундного ролика «ребёнок играет с набором» — 5.9%. Прирост 37%.
          При этом сам ролик сняли на iPhone за полчаса.
        </p>

        <h2 style={styles.h2}>Требования Wildberries к видео в карточке</h2>
        <p style={styles.p}>
          WB принимает видео через личный кабинет в разделе «Медиафайлы» карточки. Актуальные технические требования на июль 2026:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Формат:</strong> MP4 (кодек H.264)</li>
          <li style={styles.li}><strong>Разрешение:</strong> минимум 720p (1280×720), рекомендуется 1080p (1920×1080)</li>
          <li style={styles.li}><strong>Соотношение сторон:</strong> 16:9 (горизонтальное) или 9:16 (вертикальное — для мобильных превью)</li>
          <li style={styles.li}><strong>Длина:</strong> от 5 секунд до 5 минут. Оптимально — 20–60 секунд</li>
          <li style={styles.li}><strong>Размер файла:</strong> не более 2 ГБ</li>
          <li style={styles.li}><strong>Без водяных знаков</strong> сторонних сервисов, без логотипов конкурентов</li>
          <li style={styles.li}><strong>Обложка:</strong> берётся автоматически из первого кадра — поэтому первые 2 секунды должны быть «красивыми»</li>
        </ul>
        <p style={styles.p}>
          Видео на WB проходит модерацию — обычно 1–3 рабочих дня. Отказывают за: логотипы брендов в кадре,
          контактные данные, сравнение с конкурентами, недостоверные заявления («лечит», «безвредно» без
          документального подтверждения).
        </p>

        <h2 style={styles.h2}>Требования Ozon к видео</h2>
        <p style={styles.p}>
          Ozon поддерживает два места для видео: основное видео в карточке и Rich-контент (расширенное описание).
        </p>
        <h3 style={styles.h3}>Основное видео в карточке</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Формат:</strong> MP4, MOV</li>
          <li style={styles.li}><strong>Разрешение:</strong> не ниже 720p</li>
          <li style={styles.li}><strong>Длина:</strong> от 3 секунд до 3 минут</li>
          <li style={styles.li}><strong>Размер файла:</strong> до 500 МБ</li>
          <li style={styles.li}><strong>Ориентация:</strong> горизонтальная (16:9) предпочтительна для десктопа</li>
        </ul>
        <h3 style={styles.h3}>Видео в Rich-контенте</h3>
        <p style={styles.p}>
          Rich-контент — это дополнительная «страница» внутри карточки с блоками текста, изображений и видео.
          Здесь требования мягче: принимаются ролики до 10 минут. Это хорошее место для детального обзора,
          инструкции по сборке или использованию.
        </p>

        <h2 style={styles.h2}>5 типов видео, которые реально работают</h2>
        <p style={styles.p}>
          Не всякое видео даёт прирост конверсии. Вот форматы, которые мы наблюдаем как наиболее эффективные
          по обратной связи от продавцов:
        </p>

        <h3 style={styles.h3}>1. Демонстрация в использовании</h3>
        <p style={styles.p}>
          Показываете товар в работе. Блендер блендирует, рюкзак надевают и снимают, крем наносят на кожу.
          Работает лучше всего для товаров с неочевидной функциональностью. Оптимальная длина — 20–40 секунд.
        </p>

        <h3 style={styles.h3}>2. Обзор 360°</h3>
        <p style={styles.p}>
          Товар медленно вращается на предметном столе или в руках. Покупатель видит все стороны, швы,
          материал. Особенно важно для одежды, обуви, сумок. Снимается за 15 минут с любым поворотным
          предметным столом (стоят от 800 ₽ на маркетплейсах).
        </p>

        <h3 style={styles.h3}>3. Распаковка</h3>
        <p style={styles.p}>
          Показываете, как выглядит доставка, что внутри коробки, комплектация. Закрывает страхи про
          «придёт дешёвая китайская коробка». Хорошо работает для подарочных товаров и электроники.
        </p>

        <h3 style={styles.h3}>4. Сравнение размера</h3>
        <p style={styles.p}>
          Держите товар рядом с рукой, с бутылкой воды 0.5 л, с iPhone — любым предметом известного размера.
          Самый дешёвый формат (снимается за 2 минуты) и один из самых эффективных для снижения возвратов.
          Особенно критично для детских товаров, посуды, органайзеров.
        </p>

        <h3 style={styles.h3}>5. Lifestyle без лишнего монтажа</h3>
        <p style={styles.p}>
          Товар в естественной среде: кружка на столе с книгой, плед на диване, рюкзак в кадре с ноутбуком.
          Не требует актёров — достаточно реквизита. Снимается на любой смартфон при дневном свете у окна.
        </p>

        <h2 style={styles.h2}>Как снять видео без оператора и бюджета</h2>
        <p style={styles.p}>
          Бюджет в 0 ₽ вполне реален. Вот минимальный рабочий стек:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Смартфон с камерой от 12 Мп.</strong> iPhone 13+ или Android флагман 2022+ дают качество, достаточное для маркетплейса.</li>
          <li style={styles.li}><strong>Штатив или стопки книг.</strong> Дрожащая картинка моментально убивает доверие. Недорогой настольный штатив — 500–700 ₽.</li>
          <li style={styles.li}><strong>Дневной свет у окна.</strong> Поставьте стол у окна, снимайте в пасмурную погоду или в тени — мягкий рассеянный свет без теней. Никаких ламп не надо.</li>
          <li style={styles.li}><strong>Белый или серый фон.</strong> Лист ватмана А1 — 50 ₽. Или просто стена без обоев с рисунком.</li>
          <li style={styles.li}><strong>Монтаж в CapCut.</strong> Бесплатное приложение. Обрезать, добавить плавное начало и конец, убрать звук — достаточно для маркетплейса.</li>
        </ul>
        <p style={styles.p}>
          Если нужно профессиональное видео с моделью — студии в Москве и СПб берут от 3 000 ₽ за один ролик.
          Но для большинства категорий на маркетплейсе «профессиональный» уровень не нужен — нужен «честный».
        </p>

        <h2 style={styles.h2}>Чек-лист: видео готово к загрузке</h2>
        <p style={styles.p}>
          Прогоните ролик по этому списку перед загрузкой в личный кабинет:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Длина: 15–60 секунд для WB, 10–90 секунд для Ozon</li>
          <li style={styles.li}>Разрешение: 1920×1080 или минимум 1280×720</li>
          <li style={styles.li}>Первые 3 секунды — чёткий, «продающий» кадр товара (это будет обложка)</li>
          <li style={styles.li}>Картинка не дрожит — снято со штатива или в стабилизаторе</li>
          <li style={styles.li}>Освещение равномерное, нет пересветов и провалов в тень</li>
          <li style={styles.li}>Нет посторонних брендов в кадре</li>
          <li style={styles.li}>Нет телефонных номеров, адресов, ссылок на сторонние сайты</li>
          <li style={styles.li}>Нет заявлений «лечит», «100% натуральный» без подтверждения</li>
          <li style={styles.li}>Звук: либо чистый и без шума, либо тихая музыка без слов, либо вообще без звука</li>
          <li style={styles.li}>Формат MP4, кодек H.264</li>
          <li style={styles.li}>Размер файла: до 2 ГБ для WB, до 500 МБ для Ozon</li>
          <li style={styles.li}>Товар занимает не менее 60% кадра в ключевых сценах</li>
          <li style={styles.li}>Показан реальный масштаб — рядом что-то знакомое по размеру</li>
          <li style={styles.li}>Показана хотя бы одна функциональная сцена (использование)</li>
          <li style={styles.li}>Нет рывков и длинных «пустых» пауз</li>
          <li style={styles.li}>Конец плавный, не резкий стоп</li>
          <li style={styles.li}>Проверено воспроизведение на телефоне (большинство покупок с мобильного)</li>
          <li style={styles.li}>Загружено через личный кабинет, а не через API — модерация проходит корректно</li>
        </ul>

        <h2 style={styles.h2}>Видео vs фото: что важнее</h2>
        <p style={styles.p}>
          Короткий ответ: сначала фото, потом видео. Алгоритмы WB и Ozon всё ещё ранжируют по качеству
          главного фото, и именно главное фото — первое что видит покупатель в ленте.
        </p>
        <p style={styles.p}>
          Практическая схема приоритетов:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Главное фото</strong> — вертикальный формат 900×1200, белый или нейтральный фон,
            товар занимает 80% кадра. Это то, что приносит клик из поиска.
          </li>
          <li style={styles.li}>
            <strong>Галерея (5–8 фото)</strong> — детали, ракурсы, применение, инфографика.
            Это то, что убеждает остаться на карточке.
          </li>
          <li style={styles.li}>
            <strong>Видео</strong> — показывает живую функциональность и снимает оставшиеся сомнения.
            Это то, что добивает нерешительного покупателя.
          </li>
        </ol>
        <p style={styles.p}>
          Если у вас нет хорошего фото, 10 минут и iPhone не исправят ситуацию — сначала фото.
          Если фото уже нормальное, а карточка «стоит на месте» — пробуйте видео.
        </p>

        <h2 style={styles.h2}>Частые ошибки с видео на маркетплейсе</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слишком длинное видео.</strong> 3-минутный «полный обзор» никто не смотрит в ленте. 20–40 секунд — оптимум. Детальный обзор — в Rich-контент Ozon.</li>
          <li style={styles.li}><strong>Говорящая голова.</strong> Продавец в кадре рассказывает про товар. Конверсионно хуже, чем просто показать товар в действии.</li>
          <li style={styles.li}><strong>Текст субтитрами поверх.</strong> На маленьком экране телефона субтитры нечитаемы и мешают смотреть на товар.</li>
          <li style={styles.li}><strong>Музыка громче 0 дБ.</strong> Человек листает ленту в наушниках — резкая музыка заставляет закрыть карточку.</li>
          <li style={styles.li}><strong>Загрузка через VPN.</strong> Иногда вызывает ошибку модерации на стороне маркетплейса. Загружайте без прокси.</li>
          <li style={styles.li}><strong>Нет видео на мобильном превью.</strong> Загружайте в формате 9:16 параллельно с 16:9 — WB использует вертикальный формат в мобильной ленте.</li>
        </ul>

        <h2 style={styles.h2}>Что с AI-генерацией видео</h2>
        <p style={styles.p}>
          В 2026 году AI-видео для маркетплейсов — это пока не продуктивный инструмент для большинства
          категорий. Генераторы типа Sora, Kling, Runway дают неплохой результат на стоковых сценах,
          но с конкретным товаром — пуговицей, рюкзаком с конкретным принтом, электроприбором — часто
          «галлюцинируют» детали. Это прямое нарушение правил маркетплейсов.
        </p>
        <p style={styles.p}>
          Исключение: анимация статичных фото (параллакс, лёгкое движение камеры). Это технически видео,
          маркетплейсы принимают, и выглядит лучше, чем просто набор фото. В Aiviso мы сейчас исследуем
          эту функцию — следите за обновлениями.
        </p>
        <p style={styles.p}>
          Пока AI-фото — это зрелый инструмент с контролем деталей.{" "}
          <Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>AI-фото против студийной съёмки</Link>
          {" "}— отдельный разбор с цифрами.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Фото для карточки — уже готово?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— AI-генерация карточек за 2 минуты с готовыми размерами 900×1200 для WB и Ozon.
            13 кредитов на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/wb-vs-ozon-foto-trebovaniya" style={{ color: "#7c3aed" }}>Чем отличается фото для WB и Ozon: требования 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки товара на 30%</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
          <li><Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}

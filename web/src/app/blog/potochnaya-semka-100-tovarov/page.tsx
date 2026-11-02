import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как сфотографировать 100+ товаров за день: поточная съёмка — Aiviso",
  description: "Пошаговый конвейер поточной съёмки каталога для Wildberries и Ozon. 6 шагов, типичные ошибки, расчёт стоимости и когда AI заменяет съёмку полностью.",
  keywords: [
    "поточная съёмка товаров",
    "съёмка каталога для маркетплейса",
    "как сфотографировать много товаров",
    "фото 100 товаров wildberries",
    "организация съёмки маркетплейс",
    "пакетная обработка фото",
    "предметная фотосъёмка поток",
    "ai генерация фото wildberries ozon",
  ],
  alternates: { canonical: "/blog/potochnaya-semka-100-tovarov" },
  openGraph: {
    title: "Как сфотографировать 100+ товаров за день: поточная съёмка",
    description: "6-шаговый конвейер для поточной съёмки каталога. Расчёт стоимости и альтернатива с AI-генерацией.",
    url: "/blog/potochnaya-semka-100-tovarov",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как сфотографировать 100+ товаров за день: организация поточной съёмки для маркетплейса",
  description: "Пошаговый конвейер поточной съёмки каталога для WB и Ozon. Типичные ошибки, расчёт стоимости и когда AI заменяет съёмку.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/potochnaya-semka-100-tovarov",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Поточная съёмка 100+ товаров", item: "https://aiviso.ru/blog/potochnaya-semka-100-tovarov" },
  ],
};

const styles = {
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
};

export default function PotochnayaSemka() {
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
          <span style={{ color: "#1f2937" }}>Поточная съёмка 100+ товаров</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как сфотографировать 100+ товаров для маркетплейса за один день
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>2 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Когда в каталоге 50, 100 или 200 позиций — вопрос «как сделать фото» превращается в
          операционную проблему. Без системы это занимает 2–3 недели и стоит как три месяца
          рекламного бюджета. Разбираем, как выстроить поточную съёмку конвейером — и когда
          быстрее отдать всё нейросети.
        </p>

        <h2 style={styles.h2}>Почему фото 100 товаров — реально больная точка</h2>
        <p style={styles.p}>
          Представим обычную ситуацию: селлер расширяет каталог с 20 до 100 товаров. Каждая
          карточка требует минимум 6–8 кадров. Итого — 600–800 фото.
        </p>
        <p style={styles.p}>
          Если снимать без системы, вот что происходит:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>На подготовку и съёмку каждого товара уходит 15–25 минут</li>
          <li style={styles.li}>100 товаров × 20 минут = <strong>33 часа работы</strong> — это 4 полных рабочих дня</li>
          <li style={styles.li}>Плюс обработка: удаление фона, ресайз под 900×1200, пакетная загрузка — ещё 2–3 дня</li>
          <li style={styles.li}>Итого: неделя работы только на фото, пока конкуренты уже продают</li>
        </ul>
        <p style={styles.p}>
          Один наш клиент из категории товаров для дома рассказывал: после выхода с первой
          поставкой 120 артикулов он потратил 11 дней на съёмку в домашних условиях. К моменту
          когда карточки появились на WB, сезонный пик уже прошёл — и часть товара легла в сток
          на месяц.
        </p>
        <p style={styles.p}>
          Решение — поточная съёмка. Это конвейер, при котором один человек снимает 60–100
          позиций за рабочий день (8 часов). При правильной подготовке — реально.
        </p>

        <h2 style={styles.h2}>Что подготовить до съёмки: оборудование и рабочее место</h2>
        <p style={styles.p}>
          Большинство задержек при поточной съёмке происходят не во время, а до неё — когда
          начинается «а где же переходник», «а этот фон слишком мятый» и прочее. Поэтому
          подготовка — отдельный этап, лучше накануне.
        </p>

        <h3 style={styles.h3}>Минимальный комплект для домашней поточной съёмки</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Смартфон или камера</strong> с фиксированным расстоянием до объекта. Штатив — обязательно, иначе каждый кадр будет с разным углом.</li>
          <li style={styles.li}><strong>Белый фон</strong> — рулон бумаги 1,35 м шириной (~800 ₽) или виниловый фон. Ткань не подходит — появляются складки.</li>
          <li style={styles.li}><strong>Два источника света</strong> — с разных сторон. Студийный свет: 2 софтбокса 60×60 от 3 000 ₽ за комплект. Без студийного: два LED-панели на штативах, естественный свет через окно + отражатель.</li>
          <li style={styles.li}><strong>Поворотный стол</strong> — позволяет быстро делать кадры под разными углами без перемещения товара.</li>
          <li style={styles.li}><strong>Карточки с названиями артикулов</strong> — кладёте рядом с товаром, снимаете идентификатор на первом кадре. Это спасает при сортировке 800 фото.</li>
        </ul>

        <h3 style={styles.h3}>Настройки камеры — один раз и не трогать</h3>
        <p style={styles.p}>
          Главная ошибка поточной съёмки — менять баланс белого, ISO или выдержку между товарами.
          Тогда при обработке каждый товар требует индивидуальной цветокоррекции, и пакетная
          обработка ломается.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Установите баланс белого вручную (не «авто») — один раз под ваш свет</li>
          <li style={styles.li}>ISO — фиксированное, минимально возможное (100–200)</li>
          <li style={styles.li}>Выдержка — по экспозиции под свет, не меняйте</li>
          <li style={styles.li}>Режим — приоритет диафрагмы или ручной</li>
        </ul>

        <h2 style={styles.h2}>6-шаговый конвейер поточной съёмки</h2>
        <p style={styles.p}>
          Вот схема, при которой один человек снимает 70–80 товаров за 8 часов.
          Ключевое — разделить работу на этапы и не смешивать их.
        </p>

        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>Подготовка товара (вечер накануне).</strong> Разложите все товары в порядке
            съёмки. Удалите ценники, распрямите складки на одежде, протрите поверхности от пыли
            и отпечатков пальцев. Один нечистый объектив на косметике — это час ретуши потом.
          </li>
          <li style={styles.li}>
            <strong>Тестовый кадр и калибровка (первые 15 минут).</strong> Снимайте первый товар,
            проверьте свет, тени, резкость. Получили «эталонный» кадр — сохраните настройки.
            Дальше не меняйте ничего до конца сессии.
          </li>
          <li style={styles.li}>
            <strong>Съёмка партиями по 10.</strong> Снимайте 10 товаров, затем пауза 5 минут:
            проверяйте кадры на компьютере. Лучше поймать проблему после 10 товаров, чем после 100.
            На каждый товар — фронт, 45°, деталь, упаковка, маркировка (где нужно) = 5–7 кадров.
          </li>
          <li style={styles.li}>
            <strong>Сортировка сразу.</strong> После каждой партии переносите фото в папки по
            артикулам. Не копите «потом разберу» — после 800 кадров разбор займёт отдельный день.
          </li>
          <li style={styles.li}>
            <strong>Пакетная обработка вечером.</strong> Lightroom или аналог: выбираете все кадры,
            применяете пресет (белый баланс, экспозиция, контраст) — один кликом ко всем.
            Затем пакетное удаление фона через <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link>{" "}
            или Photoshop Actions.
          </li>
          <li style={styles.li}>
            <strong>Ресайз и экспорт.</strong> Скрипт или Action для экспорта в 900×1200 JPEG
            (≤ 5 МБ, RGB) — одновременно для всех папок. На WB нужен белый фон (#FFFFFF),
            на Ozon допускается и белый и контекст — готовьте два варианта если работаете
            на обе площадки.
          </li>
        </ol>

        <h2 style={styles.h2}>Типичные ошибки которые убивают весь день</h2>

        <h3 style={styles.h3}>Нет идентификации товаров на съёмке</h3>
        <p style={styles.p}>
          После 100 товаров 800 фото выглядят как одно непрерывное месиво. Особенно если
          у вас много похожих артикулов — футболки разных цветов, кружки с разными принтами.
          Решение: перед каждым товаром снять карточку с артикулом или использовать кликер-хлопушку
          с номером партии. 30 секунд на маркировку экономят 3 часа сортировки.
        </p>

        <h3 style={styles.h3}>Снимают «пока идёт» без контроля качества</h3>
        <p style={styles.p}>
          Классика: отсняли 80 товаров, открыли на компьютере — у 20 из них тени пошли не туда
          потому что солнце двинулось за окном и изменило баланс. Надо переснимать. Правило:
          каждые 10 товаров — быстрый просмотр на экране, не на телефоне.
        </p>

        <h3 style={styles.h3}>Не делают бэкап в процессе</h3>
        <p style={styles.p}>
          Карта памяти объёмом 64 ГБ вмещает около 2 000 JPEG-кадров — но полный рабочий день
          съёмки это 800–1 000 фото плюс дубли. Если карта умрёт в конце дня без бэкапа —
          полный пересъём. Делайте копию на ноутбук после каждой партии из 10 товаров.
        </p>

        <h3 style={styles.h3}>Один человек и снимает, и меняет товары, и сортирует</h3>
        <p style={styles.p}>
          При таком подходе продуктивность падает в 2–3 раза из-за переключения контекста.
          Если есть возможность — один человек снимает, второй подаёт товары и маркирует папки.
          Даже привлечение помощника на один день (от 1 500 ₽/день) окупается: вместо 70 товаров
          за день снимете 140.
        </p>

        <h2 style={styles.h2}>Сколько стоит поточная съёмка в студии</h2>
        <p style={styles.p}>
          Если делать самостоятельно не хочется или нет оборудования — можно заказать поточную
          предметную съёмку в фотостудии. Типичные цены по Москве и регионам:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Формат</th>
              <th style={styles.th}>Цена за товар</th>
              <th style={styles.th}>100 товаров итого</th>
              <th style={styles.th}>Срок</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Эконом (белый фон, 5 кадров)</td>
              <td style={styles.td}>800–1 200 ₽</td>
              <td style={styles.td}>80 000–120 000 ₽</td>
              <td style={styles.td}>3–5 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Стандарт (белый + детали, 8 кадров)</td>
              <td style={styles.td}>1 500–2 500 ₽</td>
              <td style={styles.td}>150 000–250 000 ₽</td>
              <td style={styles.td}>5–10 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Lifestyle + инфографика</td>
              <td style={styles.td}>4 000–8 000 ₽</td>
              <td style={styles.td}>400 000–800 000 ₽</td>
              <td style={styles.td}>10–20 дней</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>AI-генерация (Aiviso)</strong></td>
              <td style={styles.tdAccent}><strong>от 150 ₽</strong></td>
              <td style={styles.tdAccent}><strong>от 15 000 ₽</strong></td>
              <td style={styles.tdAccent}><strong>1–2 дня</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          При поточной студийной съёмке часто дают скидку за объём — 20–30% при заказе 100+
          товаров. Но даже со скидкой цифры серьёзные: 80 000 ₽ — это минимум за самый простой
          вариант.
        </p>

        <h2 style={styles.h2}>Когда AI-генерация быстрее и дешевле поточной съёмки</h2>
        <p style={styles.p}>
          Поточная съёмка — правильное решение, если вам нужны фото с реальной текстурой, точной
          передачей цвета, с реальной моделью или в конкретной локации, которую нельзя
          воспроизвести нейросетью.
        </p>
        <p style={styles.p}>
          Но для большинства категорий маркетплейса AI-генерация сейчас полностью заменяет
          поточную съёмку — и это не преувеличение. Вот конкретные случаи:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Товар уже есть на складе, фото нет.</strong> Сфотографировали на смартфон
            5–10 артикулов за час — загрузили в Aiviso — получили по 8 готовых кадров на каждый
            в нужном формате. Без студии, без съёмочного дня.
          </li>
          <li style={styles.li}>
            <strong>Нужно lifestyle-фото.</strong> Студия для lifestyle — от 4 000 ₽ за товар.
            AI генерирует любые сцены: кухня, спальня, улица, природа — по 30 ₽ за кадр.
          </li>
          <li style={styles.li}>
            <strong>Регулярное обновление под сезоны.</strong> Декор к Новому году, летняя
            подача для пляжных аксессуаров — AI меняет сцену за минуты, съёмка требует нового
            дня и новых реквизитов.
          </li>
          <li style={styles.li}>
            <strong>Товар в пути, продавать надо сейчас.</strong> Когда груз едет из Китая и
            нужно заранее выставить карточку — AI работает по качественным референс-фото
            от поставщика.
          </li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории товаров для дома — 143 артикула — сделал следующее:
          снял каждый товар на белом фоне дома (800 кадров за 2 дня), загрузил в Aiviso и получил
          по 6 lifestyle-вариантов на каждый товар за сутки. Суммарная стоимость lifestyle-части —
          около 13 000 ₽. В студии это обошлось бы в 570 000 ₽.
        </p>

        <h2 style={styles.h2}>Смешанная схема: снимаете предметку, AI делает остальное</h2>
        <p style={styles.p}>
          Самая эффективная стратегия для крупного каталога — гибридная. Она сочетает
          контроль над деталями (настоящая съёмка) с масштабированием и скоростью AI.
        </p>
        <p style={styles.p}><strong>Как это работает на практике:</strong></p>
        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>Предметная съёмка — сами или в эконом-студии.</strong> Белый фон,
            чистый кадр без теней — это «сырьё» для AI. Себестоимость: 200–500 ₽ за товар
            при домашней съёмке, 800–1 200 ₽ в эконом-студии.
          </li>
          <li style={styles.li}>
            <strong>Загружаете в <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link>.</strong>{" "}
            Выбираете сцены: белый фон, lifestyle, детали крупным планом, инфографика.
            Система сохраняет все детали товара — фурнитуру, текстуру, цвет — и не
            «дорисовывает» несуществующее.
          </li>
          <li style={styles.li}>
            <strong>Получаете готовые кадры в 900×1200</strong> — сразу в нужном формате
            для WB и Ozon. Без ресайза, без удаления фона вручную.
          </li>
        </ol>
        <p style={styles.p}>
          Итог: вместо 7–10 дней поточной съёмки — 2 дня (предметка) + 1 день (AI) = 3 дня
          на 100 товаров с полным комплектом кадров. И стоимость в 5–10 раз ниже студийной
          поточной съёмки.
        </p>

        <h2 style={styles.h2}>Чек-лист перед поточной съёмкой: 16 пунктов</h2>
        <p style={styles.p}><strong>Подготовка (накануне):</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Все товары разложены в порядке съёмки</li>
          <li style={styles.li}>На каждом товаре нет пыли, пятен, ценников</li>
          <li style={styles.li}>Фон развёрнут и натянут без складок</li>
          <li style={styles.li}>Два источника света выставлены и проверены</li>
          <li style={styles.li}>Штатив зафиксирован, расстояние до объекта измерено</li>
          <li style={styles.li}>Настройки камеры зафиксированы (снят тестовый кадр)</li>
          <li style={styles.li}>Карточки с артикулами напечатаны</li>
          <li style={styles.li}>На ноутбуке готовы папки для сортировки</li>
        </ul>
        <p style={styles.p}><strong>В процессе съёмки:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Не менять настройки камеры в ходе сессии</li>
          <li style={styles.li}>Первый кадр каждого товара — карточка с артикулом</li>
          <li style={styles.li}>Каждые 10 товаров — проверка кадров на мониторе</li>
          <li style={styles.li}>Бэкап на ноутбук после каждых 10 товаров</li>
          <li style={styles.li}>Минимум 5 ракурсов: фронт, 45°, сзади, деталь, упаковка</li>
        </ul>
        <p style={styles.p}><strong>После съёмки:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Пакетная цветокоррекция одним пресетом</li>
          <li style={styles.li}>Удаление фона (пакетом или через AI)</li>
          <li style={styles.li}>Экспорт в 900×1200 JPEG, не больше 5 МБ</li>
        </ul>

        <h2 style={styles.h2}>Вывод</h2>
        <p style={styles.p}>
          Поточная съёмка — это система, а не просто «много фотографировать». С правильной
          подготовкой один человек снимает 70–100 товаров за день. Ключи: фиксированные
          настройки камеры, идентификация артикулов, контроль качества каждые 10 товаров
          и бэкап в процессе.
        </p>
        <p style={styles.p}>
          Для каталогов 50+ товаров разумнее всего гибридная схема: быстрая предметная съёмка
          как основа + AI-генерация lifestyle и сцен. Это в 5–10 раз дешевле полностью
          студийного подхода и занимает 3 дня вместо 10.
        </p>
        <p style={styles.p}>
          Подробнее о требованиях к фото читайте в{" "}
          <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
            гайде по размерам фото для маркетплейсов
          </Link>{" "}
          и в статье про{" "}
          <Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>
            безопасное обновление фото без потери позиций
          </Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь закрыть 100 товаров за 2 дня вместо 10?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуй Aiviso</Link>{" "}
            — загрузи фото товара на белом фоне и получи готовые lifestyle-кадры в 900×1200 за
            минуты. 13 кредитов на старте бесплатно, карта не нужна.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/obrabotka-foto-tovara-marketpleys" style={{ color: "#7c3aed" }}>Как обработать фото товара: убрать фон и ресайз</Link></li>
          <li><Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>AI vs фотограф: что выгоднее для маркетплейса</Link></li>
          <li><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>8 правил главного фото карточки</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}

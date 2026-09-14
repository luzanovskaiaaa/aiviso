import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как обработать фото товара для маркетплейса — Aiviso",
  description: "Удаление фона, ретушь, размеры и технические требования WB и Ozon. Чек-лист из 18 пунктов и кейс: CTR с 1.8% до 4.3% после правильной обработки.",
  keywords: [
    "обработка фото товара",
    "убрать фон с фото товара",
    "ретушь фото для маркетплейса",
    "размеры фото wildberries",
    "требования к фото ozon",
    "фон для карточки товара",
    "обработка фото для wb",
    "удаление фона товар",
  ],
  alternates: { canonical: "/blog/obrabotka-foto-tovara-marketpleys" },
  openGraph: {
    title: "Как обработать фото товара для маркетплейса: фон, ретушь, размеры",
    description: "Удаление фона, ретушь, размеры WB и Ozon. Чек-лист из 18 пунктов и кейс: CTR с 1.8% до 4.3%.",
    url: "/blog/obrabotka-foto-tovara-marketpleys",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как обработать фото товара для маркетплейса: убрать фон, ретушь и размеры",
  description: "Удаление фона, ретушь, цветокоррекция и технические требования WB и Ozon. Чек-лист и кейс.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/obrabotka-foto-tovara-marketpleys",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Обработка фото товара", item: "https://aiviso.ru/blog/obrabotka-foto-tovara-marketpleys" },
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

export default function ObrabotkaFotoTovara() {
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
          <span style={{ color: "#1f2937" }}>Обработка фото товара</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как обработать фото товара для маркетплейса: убрать фон, ретушь и размеры
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>14 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Снять товар — половина работы. Вторая половина — довести кадр до требований маркетплейса: правильный фон, точные размеры, цвет как в жизни. Один неверный шаг в обработке — и карточку отклонят или CTR упадёт до нуля.
        </p>

        <h2 style={styles.h2}>Почему обработка важнее, чем кажется</h2>
        <p style={styles.p}>
          Большинство селлеров снимают товар на телефон, получают неплохой кадр — и сразу грузят на WB. Итог: серый фон вместо белого, кадрирование срезает краёв, цвет уходит в жёлтый из-за ламп. Алгоритмы Wildberries снижают приоритет таким карточкам, а покупатели просто кликают мимо.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Посуда» снял 40 позиций дома: белая скатерть, хорошее естественное освещение. Кадры были неплохие — но необработанные. CTR держался на 1.8%. После того как те же фото прошли правильную обработку — удаление фона, цветокоррекция, ресайз под 900×1200 — CTR вырос до 4.3% за три недели. Продажи выросли на 58% без единого изменения SEO или цены.
        </p>
        <p style={styles.p}>
          Обработка — это не фильтры ради красоты. Это приведение фото в технический стандарт, который маркетплейсы требуют, а покупатели воспринимают как «профессиональный продавец».
        </p>

        <h2 style={styles.h2}>Удаление фона: требования WB и Ozon</h2>
        <p style={styles.p}>
          Главное фото на обоих маркетплейсах — белый фон, и это не просто рекомендация. WB возвращает карточки с серым, кремовым или текстурным фоном на доработку. Ozon формально допускает lifestyle на втором и последующих слайдах, но главный — тоже белый.
        </p>

        <h3 style={styles.h3}>Белый фон: что значит «100% белый»</h3>
        <p style={styles.p}>
          В RGB белый — это #FFFFFF (255, 255, 255). На практике «почти белый» фон — #F5F5F5 или #EEEEEE — WB и Ozon считают серым и могут не принять. Проверяйте пипеткой в Photoshop или Figma: фоновые пиксели должны быть 255, 255, 255, а не 240+.
        </p>
        <p style={styles.p}>
          Как получить идеальный белый:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Снять на белой бумаге или пластиковом листе — потом выровнять уровни в редакторе</li>
          <li style={styles.li}>Использовать удаление фона (любой инструмент) и залить слой белым #FFFFFF</li>
          <li style={styles.li}>Проверить: Photoshop → Select → Color Range → Highlights — выделяет не-белые пиксели</li>
        </ul>

        <h3 style={styles.h3}>Прозрачный PNG — когда он нужен</h3>
        <p style={styles.p}>
          Прозрачный фон (PNG с альфа-каналом) не подходит для маркетплейсов: они сами подставляют белый фон при отображении, но при сохранении в JPEG прозрачность превращается в чёрный или серый фон. Всегда сохраняйте финальный файл как JPEG с белым фоном — не PNG.
        </p>
        <p style={styles.p}>
          Исключение: если вы подготавливаете файлы для AI-генератора вроде <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> — там нужен именно PNG с прозрачностью, чтобы AI точно отделил товар от нового фона.
        </p>

        <h2 style={styles.h2}>Ретушь и цветокоррекция</h2>
        <p style={styles.p}>
          Маркетплейсы требуют, чтобы фото соответствовало реальному товару. Это не значит «нельзя ретушировать» — это значит нельзя добавлять то, чего нет (отсутствующий карман, другой цвет, лишние детали). Ретушь в рамках правил — это:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Выровнять баланс белого.</strong> Лампы накаливания дают жёлтый оттенок, дневной свет — синеватый. Нейтральный белый — это цель. Покупатель, получив «белую» рубашку с жёлтым оттенком на фото, оставит возврат.</li>
          <li style={styles.li}><strong>Поднять яркость и контраст.</strong> Тёмное фото воспринимается как «дешёвый товар». Достаточно поднять экспозицию на +0.5–1 стоп и добавить +10–15 к контрасту.</li>
          <li style={styles.li}><strong>Убрать пыль и мелкие дефекты.</strong> Царапина на упаковке, пылинка на линзе, складка на ткани при съёмке — это не нарушение. Ретушь точечным восстановлением допустима.</li>
          <li style={styles.li}><strong>Насыщенность — осторожно.</strong> Поднять Saturation на +5–10 — нормально. Поднять до +40 — товар будет выглядеть как другой цвет, покупатели будут разочарованы при получении.</li>
        </ul>
        <p style={styles.p}>
          Что <strong>нельзя</strong> делать:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Менять цвет товара — синяя кружка стала фиолетовой на обработке</li>
          <li style={styles.li}>Дорисовывать детали которых нет на товаре</li>
          <li style={styles.li}>Накладывать текст и логотипы на главное фото (на WB это прямое нарушение)</li>
          <li style={styles.li}>Убирать артикул, этикетки и штрихкоды с фото, если они влияют на идентификацию</li>
        </ul>

        <h2 style={styles.h2}>Размеры и разрешение: технические требования</h2>
        <p style={styles.p}>
          Размеры — самая частая причина отклонения фото. Таблица требований:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Маркетплейс</th>
              <th style={styles.th}>Рекомендуемый размер</th>
              <th style={styles.th}>Соотношение сторон</th>
              <th style={styles.th}>Мин. размер</th>
              <th style={styles.th}>Формат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Wildberries</td>
              <td style={styles.tdAccent}><strong>900 × 1200 px</strong></td>
              <td style={styles.td}>3:4 (вертикальный)</td>
              <td style={styles.td}>450 × 600</td>
              <td style={styles.td}>JPEG, PNG</td>
            </tr>
            <tr>
              <td style={styles.td}>Ozon</td>
              <td style={styles.tdAccent}><strong>900 × 1200 px</strong></td>
              <td style={styles.td}>3:4 (вертикальный)</td>
              <td style={styles.td}>200 × 200</td>
              <td style={styles.td}>JPEG, PNG</td>
            </tr>
            <tr>
              <td style={styles.td}>Яндекс.Маркет</td>
              <td style={styles.td}>800 × 800 px</td>
              <td style={styles.td}>1:1 (квадрат)</td>
              <td style={styles.td}>200 × 200</td>
              <td style={styles.td}>JPEG, PNG</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Важная деталь: WB и Ozon оба используют формат 3:4 для основных карточек. Устаревший совет «для Ozon делай квадрат 1:1» — неверен. В листинге вертикальный формат даёт больше площади на экране, особенно на мобильных.
        </p>
        <p style={styles.p}>
          Вес файла: JPEG до 5–10 МБ принимают оба маркетплейса, но для скорости загрузки страниц оптимальный вес — 300–800 КБ. Сохраняйте JPEG с качеством 85–90% — это баланс между размером файла и качеством изображения.
        </p>

        <h2 style={styles.h2}>Чек-лист обработки фото перед загрузкой</h2>
        <p style={styles.p}>18 пунктов которые стоит проверить перед каждой загрузкой:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Фон — чистый белый #FFFFFF, без теней и текстур</li>
          <li style={styles.li}>Товар занимает 70–85% кадра (не слишком маленький, не обрезан)</li>
          <li style={styles.li}>Размер файла — 900 × 1200 px для WB и Ozon</li>
          <li style={styles.li}>Формат — JPEG, вес до 1 МБ</li>
          <li style={styles.li}>Баланс белого нейтральный: белые детали товара выглядят белыми, не жёлтыми</li>
          <li style={styles.li}>Цвет товара соответствует реальному — проверьте на физическом образце рядом с экраном</li>
          <li style={styles.li}>Контраст достаточный — товар чётко отделяется от фона</li>
          <li style={styles.li}>Нет смазанности — резкость на основном объекте максимальная</li>
          <li style={styles.li}>Нет пылинок и царапин на фото (проверяйте при 100% zoom)</li>
          <li style={styles.li}>Нет водяных знаков и логотипов на главном фото</li>
          <li style={styles.li}>Нет текста и инфографики на главном фото WB (разрешено только на слайдах 2–10)</li>
          <li style={styles.li}>Главный ракурс — 3/4 или прямо спереди, товар ориентирован вертикально</li>
          <li style={styles.li}>Если товар складной/раскладной — показан в рабочем положении</li>
          <li style={styles.li}>Размер не искажён — пропорции товара сохранены, без деформации</li>
          <li style={styles.li}>Если несколько единиц в комплекте — все видны на главном фото</li>
          <li style={styles.li}>Второй и последующие слайды — lifestyle или инфографика</li>
          <li style={styles.li}>Количество фото: минимум 5–6 для WB, 4–5 для Ozon</li>
          <li style={styles.li}>Файлы переименованы по схеме: артикул-1.jpg, артикул-2.jpg (удобно для пакетной загрузки)</li>
        </ul>

        <h2 style={styles.h2}>Инструменты для обработки</h2>

        <h3 style={styles.h3}>Бесплатные варианты</h3>
        <p style={styles.p}>
          <strong>remove.bg</strong> — удаление фона за 5 секунд. Бесплатный тариф даёт 50 изображений в месяц в низком разрешении. Для теста — хватает.
        </p>
        <p style={styles.p}>
          <strong>Canva</strong> — есть встроенное удаление фона на платном тарифе (Pro, от ~1 200 ₽/мес), но ещё можно выравнивать яркость, кадрировать, сохранять в нужном размере бесплатно.
        </p>
        <p style={styles.p}>
          <strong>GIMP</strong> — бесплатный аналог Photoshop. Есть все инструменты: уровни, кривые, клонирование для ретуши. Порог входа высокий, но для регулярной работы — оправдан.
        </p>

        <h3 style={styles.h3}>Платные инструменты</h3>
        <p style={styles.p}>
          <strong>Adobe Photoshop</strong> — стандарт индустрии. От 2 400 ₽/мес. Пакетные операции (Batch), экшены для автоматической обработки нескольких сотен фото за один клик — окупается при каталоге от 50 позиций.
        </p>
        <p style={styles.p}>
          <strong>Luminar Neo</strong> — проще Photoshop, есть AI-удаление фона, AI-шумоподавление. Разовая покупка от 8 000 ₽. Хорош для тех кто снимает сам без ретушёра.
        </p>

        <h3 style={styles.h3}>AI-обработка и генерация</h3>
        <p style={styles.p}>
          Если нужно не просто обработать фото, а переснять товар в другой сцене — удаление фона и ручная ретушь не помогут. Здесь работает <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерация через Aiviso</Link>: загружаешь исходник товара, AI создаёт lifestyle-фон, сцену или инфографику, сразу в нужном размере 900×1200 для WB и Ozon. Стоимость — от 15–30 ₽ за кадр против 5 000–25 000 ₽ за фотостудию.
        </p>

        <h2 style={styles.h2}>Типичные ошибки которые убивают CTR</h2>
        <p style={styles.p}>Разбираем семь ошибок которые видим чаще всего:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Серый или кремовый фон вместо белого.</strong> Покупатель в листинге видит карточки конкурентов с чистым белым — ваша теряется и выглядит дешевле.</li>
          <li style={styles.li}><strong>Товар слишком мелкий в кадре.</strong> Занимает 30–40% площади вместо 70–85%. Покупатель не видит деталей — не кликает.</li>
          <li style={styles.li}><strong>Горизонтальный кадр на вертикальный слот.</strong> WB и Ozon обрезают горизонтальные фото, часто отрезая товар по краям.</li>
          <li style={styles.li}><strong>Пережатый JPEG.</strong> Сохранение с качеством 60% даёт видимые артефакты на краях товара — выглядит любительски.</li>
          <li style={styles.li}><strong>Перенасыщенные цвета.</strong> Синяя кофта становится кричащей лиловой — покупатель возвращает «не тот цвет», и процент выкупа падает.</li>
          <li style={styles.li}><strong>Тень под товаром.</strong> Лёгкая тень — допустима и даёт объём. Тёмная жёсткая тень — портит вид и усложняет удаление фона.</li>
          <li style={styles.li}><strong>Смазанность.</strong> Телефон сфокусировался на фоне, а не на товаре. На миниатюре в листинге это критично — мозг воспринимает смаз как «плохой товар».</li>
        </ul>

        <h2 style={styles.h2}>Как выстроить процесс при большом каталоге</h2>
        <p style={styles.p}>
          Если у вас 100+ позиций, ручная обработка каждого фото — это 2–3 часа работы в день. Три способа ускориться:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Пакетная обработка в Photoshop.</strong> Один раз запишите экшен: открыть, скорректировать уровни, удалить фон (через выделение по цвету если фон однородный), ресайз до 900×1200, сохранить JPEG 85%. Запустите Batch на папке — Photoshop обработает 200 фото за 15 минут.
          </li>
          <li style={styles.li}>
            <strong>Lightroom + экспорт.</strong> Для цветокоррекции на больших объёмах — Lightroom с синхронизацией настроек между фото. Один слайдер на 500 снимков одной партии.
          </li>
          <li style={styles.li}>
            <strong>AI-сервис.</strong> Загрузить исходники в <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> пачкой — получить готовые фото в нужных размерах для обоих маркетплейсов, с удалённым фоном и новой сценой. Для большого каталога это самый быстрый путь: один клиент из категории «Аксессуары» обрабатывал 80 позиций за выходные вместо трёх недель у фотографа.
          </li>
        </ul>

        <h2 style={styles.h2}>Кейс: CTR с 1.8% до 4.3% после обработки</h2>
        <p style={styles.p}>
          Продавец керамической посуды, Wildberries, категория «Кухня». Фото снимал сам на iPhone в хорошем свете, но не обрабатывал: серовато-белый фон, лёгкая желтизна, размер 1080×1080 (квадрат вместо 3:4).
        </p>
        <p style={styles.p}>Что сделали:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Убрали фон через remove.bg + скорректировали вручную в Photoshop, заменили на #FFFFFF</li>
          <li style={styles.li}>Выровняли баланс белого — убрали желтизну от ламп</li>
          <li style={styles.li}>Ресайзнули до 900×1200 с правильным позиционированием товара по центру</li>
          <li style={styles.li}>Добавили три слайда с lifestyle-сценами через Aiviso</li>
        </ul>
        <p style={styles.p}>
          Результат через 3 недели: CTR вырос с 1.8% до 4.3%, конверсия с 3.1% до 5.2%, продажи за месяц +58%. Бюджет на рекламу не менялся.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь сразу получить готовые фото для WB и Ozon?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуй Aiviso</Link>
            {" "}— загрузи фото товара, AI уберёт фон, создаст сцену и отдаст файлы в нужных размерах 900×1200 для обоих маркетплейсов. 13 кредитов на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов: точные требования</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>AI vs фотограф: что выгоднее для маркетплейса</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
        </ul>
      </article>
    </>
  );
}

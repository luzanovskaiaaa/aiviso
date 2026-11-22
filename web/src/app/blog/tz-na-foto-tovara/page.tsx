import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как написать ТЗ на фото товара для маркетплейса — Aiviso",
  description:
    "Шаблон технического задания на предметную съёмку для Wildberries и Ozon. Ракурсы, фоны, обработка, размеры. Чек-лист из 16 пунктов и примеры по категориям.",
  keywords: [
    "ТЗ на фото товара",
    "техническое задание фотосъёмка маркетплейс",
    "фото для wildberries",
    "фото для ozon",
    "предметная съёмка ТЗ шаблон",
    "требования к фото товара",
    "как сделать фото для маркетплейса",
    "тз фотограф wildberries ozon",
  ],
  alternates: { canonical: "/blog/tz-na-foto-tovara" },
  openGraph: {
    title: "Как написать ТЗ на фото товара: шаблон для WB и Ozon",
    description:
      "Шаблон ТЗ на фотосъёмку товара для Wildberries и Ozon: 7 блоков, чек-лист из 16 пунктов, примеры по категориям.",
    url: "/blog/tz-na-foto-tovara",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как написать ТЗ на фото товара для маркетплейса: шаблон и чек-лист",
  description:
    "Шаблон технического задания на предметную съёмку товара для Wildberries и Ozon. 7 блоков ТЗ, чек-лист из 16 пунктов и примеры по категориям.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/tz-na-foto-tovara",
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
      name: "ТЗ на фото товара",
      item: "https://aiviso.ru/blog/tz-na-foto-tovara",
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

export default function TzNaFotoTovara() {
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
          <span style={{ color: "#1f2937" }}>ТЗ на фото товара</span>
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
          Как написать ТЗ на фото товара для маркетплейса: шаблон и чек-лист
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>22 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Фотограф сдал работу, а фото не подходят под Wildberries — не тот фон, не те ракурсы, размеры
          неправильные. Переделывать некогда, а деньги уже заплачены. Так происходит, когда ТЗ не было
          или было написано в трёх строчках. Разберём, как составить нормальное техническое задание на
          съёмку товара — и для фотографа, и для AI-генерации.
        </p>

        <h2 style={styles.h2}>Зачем вообще нужно ТЗ и кому его писать</h2>
        <p style={styles.p}>
          ТЗ нужно в трёх ситуациях: вы нанимаете фотографа на аутсорсе, организуете поточную съёмку
          своими силами, или отдаёте обработку фото в AI-сервис. Без ТЗ каждый участник процесса
          интерпретирует задачу по-своему.
        </p>
        <p style={styles.p}>
          Один наш клиент из категории «товары для дома» заказал съёмку 80 артикулов у фрилансера.
          Результат: 60% фото пришлось переделывать — фотограф снимал на сером фоне, тогда как WB
          требует белый (#FFFFFF), и не делал крупные планы деталей. Переделка обошлась ещё в 15 000 ₽
          и 2 недели потерянного времени.
        </p>
        <p style={styles.p}>
          Хорошее ТЗ экономит деньги и нервы. Одна страница с конкретными требованиями убирает
          80% разночтений ещё до начала съёмки.
        </p>

        <h2 style={styles.h2}>Что входит в хорошее ТЗ: 7 блоков</h2>

        <h3 style={styles.h3}>Блок 1. Формат и размеры</h3>
        <p style={styles.p}>Укажите конкретные пиксели, а не просто «высокое разрешение»:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Wildberries:</strong> 900 × 1200 px, соотношение 3:4, минимум 72 dpi, формат JPEG
          </li>
          <li style={styles.li}>
            <strong>Ozon:</strong> 900 × 1200 px, 3:4 — не 1:1, вопреки старым инструкциям
          </li>
          <li style={styles.li}>
            <strong>Яндекс.Маркет:</strong> минимум 800 × 800 px, рекомендуемое 1600 × 1600 px
          </li>
          <li style={styles.li}>
            Если нужна инфографика — отдельно оговорите PNG с прозрачным фоном для отдельных элементов
          </li>
        </ul>
        <p style={styles.p}>
          Если фотограф сдаёт в RAW — укажите это. Если нужен JPEG с определённым качеством сжатия —
          напишите «quality 90+».
        </p>

        <h3 style={styles.h3}>Блок 2. Фон и обстановка</h3>
        <p style={styles.p}>Это самый частый источник конфликтов. Опишите точно:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Белый фон:</strong> #FFFFFF, без теней под товаром (или «с естественной мягкой
            тенью» — если хотите объём)
          </li>
          <li style={styles.li}>
            <strong>Lifestyle:</strong> опишите сцену — кухня/спальня/улица, время суток, наличие
            реквизита. Лучше показать мудборд из 2-3 референсных фото
          </li>
          <li style={styles.li}>
            <strong>Запрещённые элементы:</strong> никаких стикеров, логотипов конкурентов, посторонних
            надписей в кадре
          </li>
        </ul>

        <h3 style={styles.h3}>Блок 3. Список ракурсов и количество кадров</h3>
        <p style={styles.p}>
          Не «сделайте несколько кадров», а конкретный список. Пример для одежды:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Кадр 1: фронт, полный рост, нейтральный фон</li>
          <li style={styles.li}>Кадр 2: спина, полный рост</li>
          <li style={styles.li}>Кадр 3: крупный план — воротник/молния/фурнитура</li>
          <li style={styles.li}>Кадр 4: lifestyle, модель в движении или в обстановке</li>
          <li style={styles.li}>Кадр 5: деталь — этикетка с составом, таблица размеров</li>
          <li style={styles.li}>Кадр 6: flat lay (если нужен альтернативный вариант)</li>
        </ul>
        <p style={styles.p}>
          Итого: 6 кадров на артикул. Множите на количество товаров — получите объём работы и стоимость.
        </p>

        <h3 style={styles.h3}>Блок 4. Требования к качеству и подготовке товара</h3>
        <p style={styles.p}>Часто упускают. Укажите:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар должен быть выглажен/распакован/без следов складского хранения</li>
          <li style={styles.li}>Пришить все пуговицы, закрыть замки, расправить складки</li>
          <li style={styles.li}>Нет пыли, отпечатков пальцев (особенно критично для электроники)</li>
          <li style={styles.li}>Упаковка: фотографировать в упаковке или без — указать явно</li>
        </ul>

        <h3 style={styles.h3}>Блок 5. Обработка и цветокоррекция</h3>
        <p style={styles.p}>Скажите прямо, что входит в стоимость, а что нет:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Удаление фона — да/нет, инструмент (Photoshop или AI-сервис)</li>
          <li style={styles.li}>
            Цветокоррекция: «привести цвета к реальным» — важно для одежды и косметики
          </li>
          <li style={styles.li}>Ретушь пыли и мелких дефектов — да/нет</li>
          <li style={styles.li}>Финальный ресайз под нужные размеры — входит ли в работу</li>
        </ul>

        <h3 style={styles.h3}>Блок 6. Сроки и формат сдачи</h3>
        <p style={styles.p}>Три обязательных пункта:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Дата сдачи первой партии (для обратной связи до конца всего проекта)</li>
          <li style={styles.li}>Формат передачи файлов: облако, WeTransfer, мессенджер</li>
          <li style={styles.li}>Структура папок: один артикул — одна папка, нейминг файлов по SKU</li>
        </ul>

        <h3 style={styles.h3}>Блок 7. Примеры (мудборд)</h3>
        <p style={styles.p}>
          Слова описывают хуже, чем картинка. Приложите к ТЗ 3-5 референсных фото: «хочу похожий свет»,
          «такой lifestyle», «вот нежелательный стиль». Это снимает 90% разночтений.
        </p>
        <p style={styles.p}>
          Если своих референсов нет — возьмите скриншоты с карточек конкурентов из топа категории.
        </p>

        <h2 style={styles.h2}>Шаблоны ТЗ по популярным категориям</h2>

        <h3 style={styles.h3}>Одежда и текстиль</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Требование</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Формат</td>
              <td style={styles.td}>JPEG, 900 × 1200 px</td>
            </tr>
            <tr>
              <td style={styles.td}>Фон (кадр 1-2)</td>
              <td style={styles.td}>#FFFFFF, без теней</td>
            </tr>
            <tr>
              <td style={styles.td}>Фон (кадр 3-4)</td>
              <td style={styles.td}>Lifestyle: светлый интерьер, нейтральные тона</td>
            </tr>
            <tr>
              <td style={styles.td}>Ракурсы</td>
              <td style={styles.tdAccent}>Фронт, спина, деталь, lifestyle — минимум 4 кадра</td>
            </tr>
            <tr>
              <td style={styles.td}>Модель</td>
              <td style={styles.td}>Рост 170-175 см, нейтральное выражение лица</td>
            </tr>
            <tr>
              <td style={styles.td}>Обработка</td>
              <td style={styles.td}>Удаление фона, цветокоррекция под реальный цвет</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Косметика и уход</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Требование</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Формат</td>
              <td style={styles.td}>JPEG, 900 × 1200 px</td>
            </tr>
            <tr>
              <td style={styles.td}>Фон (предметка)</td>
              <td style={styles.td}>#FFFFFF или светло-серый, без теней</td>
            </tr>
            <tr>
              <td style={styles.td}>Крупный план</td>
              <td style={styles.tdAccent}>Состав на упаковке — чётко, в 1 кадре</td>
            </tr>
            <tr>
              <td style={styles.td}>Lifestyle</td>
              <td style={styles.td}>Ванная, бежевые тона, зелень/цветы как декор</td>
            </tr>
            <tr>
              <td style={styles.td}>Текстура</td>
              <td style={styles.td}>Крем/сыворотка открыта — показать текстуру 1 кадром</td>
            </tr>
            <tr>
              <td style={styles.td}>Запрет</td>
              <td style={styles.td}>Никаких бликов на крышке и флаконе</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Электроника и гаджеты</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Требование</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Формат</td>
              <td style={styles.td}>JPEG, 900 × 1200 px</td>
            </tr>
            <tr>
              <td style={styles.td}>Фон</td>
              <td style={styles.td}>#FFFFFF или тёмно-серый (#1f2937) для контраста</td>
            </tr>
            <tr>
              <td style={styles.td}>Ракурсы</td>
              <td style={styles.tdAccent}>Фронт, 3/4 угол, кнопки/порты крупно, в использовании</td>
            </tr>
            <tr>
              <td style={styles.td}>Экран</td>
              <td style={styles.td}>Включён, показывает интерфейс или логотип</td>
            </tr>
            <tr>
              <td style={styles.td}>Обработка</td>
              <td style={styles.td}>Убрать пыль и отпечатки, не ретушировать корпус</td>
            </tr>
            <tr>
              <td style={styles.td}>Комплектация</td>
              <td style={styles.td}>1 кадр всего комплекта — провода, зарядка, кейс</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Чек-лист: 16 пунктов перед отправкой ТЗ фотографу</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Указаны точные размеры в пикселях для каждого маркетплейса</li>
          <li style={styles.li}>Прописан формат файла (JPEG/PNG/RAW) и качество сжатия</li>
          <li style={styles.li}>Указан цвет фона — HEX-код, а не «белый»</li>
          <li style={styles.li}>Есть список ракурсов с нумерацией — не «несколько», а конкретно</li>
          <li style={styles.li}>Описано, нужна ли модель, и если да — её параметры</li>
          <li style={styles.li}>Описан lifestyle: интерьер, реквизит, стиль</li>
          <li style={styles.li}>Указаны детали, которые нужно снять крупным планом</li>
          <li style={styles.li}>Прописаны требования к подготовке товара (выглажен, без пыли и т.д.)</li>
          <li style={styles.li}>Описан объём обработки: удаление фона, цветокоррекция, ретушь</li>
          <li style={styles.li}>Указана дата сдачи первой партии</li>
          <li style={styles.li}>Описан формат передачи файлов (облако, WeTransfer)</li>
          <li style={styles.li}>Есть правила нейминга файлов (SKU + порядковый номер)</li>
          <li style={styles.li}>Приложены референсные фото (мудборд) — минимум 3 штуки</li>
          <li style={styles.li}>Указано, сколько итераций правок входит в стоимость</li>
          <li style={styles.li}>Прописан порядок приёмки: кто проверяет и в какой срок</li>
          <li style={styles.li}>Есть пункт про авторские права — кому принадлежат фото</li>
        </ul>

        <h2 style={styles.h2}>ТЗ для AI-генерации: в чём отличие</h2>
        <p style={styles.p}>
          Если вы используете AI-сервис вроде <Link href="/" style={{ color: "#7c3aed" }}>Aiviso</Link>,
          принцип тот же, но формат другой. Вместо технического документа для человека — промт
          и настройки в интерфейсе сервиса.
        </p>
        <p style={styles.p}>Что важно при работе с AI-генерацией:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Загружайте чистую предметку.</strong> AI лучше работает с фото товара на белом
            фоне без теней — из него он строит любую сцену. Мятый или плохо освещённый исходник
            даёт худший результат.
          </li>
          <li style={styles.li}>
            <strong>Описывайте сцену, не стиль.</strong> «Крем на мраморной полке, рядом цветок
            белой орхидеи» работает лучше, чем «красиво, стильно».
          </li>
          <li style={styles.li}>
            <strong>Проверяйте детали.</strong> AI может незначительно изменить цвет или форму
            элементов. В Aiviso есть QC-агент, который сравнивает результат с оригиналом и
            отмечает расхождения. Всегда смотрите на пуговицы, швы, логотипы.
          </li>
          <li style={styles.li}>
            <strong>Итерируйте быстро.</strong> Студия берёт деньги за каждую правку. AI даёт
            новый вариант за секунды — пробуйте 3-4 сцены и выбирайте лучшую.
          </li>
        </ul>
        <p style={styles.p}>
          Один клиент из категории «товары для ванной» делал раньше съёмку в студии — 8 000 ₽
          за артикул, 10 дней ожидания. После перехода на AI стал получать 6-8 кадров за 15 минут
          по 30-40 ₽ каждый. Первая же перегенерированная карточка дала CTR 4.1% против 2.3%
          у предыдущей версии.
        </p>

        <h2 style={styles.h2}>Частые ошибки в ТЗ — и как их избежать</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>«Как у конкурентов» без скриншота.</strong> Конкурентов тысячи, у каждого свой
            стиль. Прикладывайте конкретные примеры.
          </li>
          <li style={styles.li}>
            <strong>«Высокое качество» без числа.</strong> Для одного 72 dpi — высокое, для другого
            минимум 300 dpi для печати. Пишите цифры.
          </li>
          <li style={styles.li}>
            <strong>Не указан приоритет маркетплейса.</strong> WB и Ozon имеют разные требования к
            соотношению сторон и фону. Если работаете на двух площадках — укажите оба варианта.
          </li>
          <li style={styles.li}>
            <strong>Нет пункта про детали товара.</strong> Если у вас пальто с уникальными пуговицами
            — фотограф не знает, что это важно. Укажите явно.
          </li>
          <li style={styles.li}>
            <strong>ТЗ написано после аванса.</strong> Пишите ТЗ до оплаты — это стандартная
            практика. Нормальный фотограф сам попросит ТЗ перед началом работы.
          </li>
          <li style={styles.li}>
            <strong>Нет порядка правок.</strong> Одни правки входят в стоимость, другие нет — иначе
            фотограф либо откажет в правках, либо выставит счёт за каждую мелочь.
          </li>
        </ul>

        <h2 style={styles.h2}>Итого: что нужно запомнить</h2>
        <p style={styles.p}>
          ТЗ — не бюрократия, а инструмент экономии времени и денег. Один час на составление
          нормального технического задания экономит две недели на переделках.
        </p>
        <p style={styles.p}>Три главных правила:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Пишите цифры, не прилагательные — 900 × 1200 вместо «высокое качество»</li>
          <li style={styles.li}>Прикладывайте референсы — одна картинка заменяет три абзаца текста</li>
          <li style={styles.li}>
            Список ракурсов — номерами, с описанием каждого кадра
          </li>
        </ul>
        <p style={styles.p}>
          Если хотите вообще пропустить этап работы с фотографом — загружайте фото товара напрямую
          в <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> и получайте готовые
          карточки для WB и Ozon через несколько минут. Никакого ТЗ для фотографа писать не нужно —
          сцену описываете прямо в интерфейсе, результат проверяет QC-агент.
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
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Попробуйте AI-фото без ТЗ и фотографа
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Загрузите фото товара, выберите сцену — и получите готовые кадры для карточки WB и Ozon.
            13 кредитов на старте бесплатно.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#7c3aed",
              color: "#ffffff",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Начать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/obrabotka-foto-tovara-marketpleys" style={{ color: "#7c3aed" }}>
              Как обработать фото товара для маркетплейса: фон, ретушь и размеры
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              Главное фото карточки товара: 8 правил первого слайда
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>
              AI vs фотограф: что выгоднее для карточки на маркетплейсе
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как поднять процент выкупа на WB и Ozon в 2026 — Aiviso",
  description: "Почему покупатели возвращают товар и как поднять процент выкупа на Wildberries и Ozon. Формула расчёта, чек-лист из 20 пунктов и реальные кейсы с цифрами.",
  keywords: [
    "процент выкупа wildberries",
    "процент выкупа ozon",
    "как поднять процент выкупа",
    "снизить возвраты на маркетплейсе",
    "процент выкупа формула",
    "возвраты wildberries",
    "возвраты ozon",
    "конверсия маркетплейс",
  ],
  alternates: { canonical: "/blog/protsent-vykupa-wildberries-ozon" },
  openGraph: {
    title: "Как поднять процент выкупа на Wildberries и Ozon в 2026",
    description: "Формула расчёта, 5 главных причин возвратов и чек-лист из 20 пунктов. Реальный кейс: с 54% до 78% за 8 недель.",
    url: "/blog/protsent-vykupa-wildberries-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как поднять процент выкупа на Wildberries и Ozon в 2026",
  description: "Почему покупатели возвращают товар и как поднять процент выкупа на WB и Ozon. Формула расчёта, чек-лист из 20 пунктов и реальные кейсы.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-15",
  dateModified: "2026-08-15",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/protsent-vykupa-wildberries-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Процент выкупа WB и Ozon", item: "https://aiviso.ru/blog/protsent-vykupa-wildberries-ozon" },
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

export default function ProtsентVykupa() {
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
          <span style={{ color: "#1f2937" }}>Процент выкупа</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как поднять процент выкупа на Wildberries и Ozon в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>15 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Процент выкупа — одна из самых дорогих проблем маркетплейс-бизнеса. Каждый возврат это логистика туда и обратно, риск порчи товара и падение позиций в поиске. Разбираем формулу, причины возвратов и конкретные действия, которые поднимают выкуп с 50% до 75%+ без рекламы.
        </p>

        <h2 style={styles.h2}>Что такое процент выкупа и как его считать</h2>
        <p style={styles.p}>
          Процент выкупа — доля заказов, которые покупатель получил и не вернул. Формула проста:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 15 }}>
          Процент выкупа = (Выкупленные заказы / Всего заказов) × 100%
        </div>
        <p style={styles.p}>
          Например: за месяц поступило 200 заказов, из них выкуплено 130 — процент выкупа 65%.
          Оставшиеся 70 заказов вернулись обратно, и каждый из них принёс убыток: логистика WB
          стоит 50–100 ₽ в одну сторону, то есть туда-обратно уже 100–200 ₽ только доставки.
        </p>

        <h3 style={styles.h3}>Норма выкупа по категориям</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Нормальный выкуп</th>
              <th style={styles.th}>Тревожный сигнал</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.td}>40–60%</td>
              <td style={styles.td}>ниже 35%</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника и гаджеты</td>
              <td style={styles.td}>80–90%</td>
              <td style={styles.td}>ниже 70%</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и уход</td>
              <td style={styles.td}>70–85%</td>
              <td style={styles.td}>ниже 60%</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома и декор</td>
              <td style={styles.td}>75–88%</td>
              <td style={styles.td}>ниже 65%</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.td}>72–84%</td>
              <td style={styles.td}>ниже 60%</td>
            </tr>
            <tr>
              <td style={styles.td}>Продукты питания</td>
              <td style={styles.td}>88–95%</td>
              <td style={styles.td}>ниже 80%</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Одежда — самая сложная категория, там примерка неизбежна. Но в остальных категориях
          выкуп ниже 70% — уже проблема, которую нужно решать системно.
        </p>

        <h2 style={styles.h2}>Почему процент выкупа влияет на позиции в поиске</h2>
        <p style={styles.p}>
          И WB, и Ozon учитывают процент выкупа при ранжировании карточек — это давно не секрет.
          Алгоритм рассуждает просто: если покупатели часто возвращают товар, значит что-то не так
          с карточкой или товаром. Такие карточки понижаются в поиске.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «декор для дома» держал процент выкупа на уровне 52%. После
          работы с фото и описанием выкуп вырос до 76% — карточка за 6 недель поднялась с 47 на
          19 место в поисковой выдаче без изменения рекламного бюджета.
        </p>

        <h2 style={styles.h2}>5 главных причин низкого выкупа — и что с ними делать</h2>

        <h3 style={styles.h3}>1. Фото не совпадает с реальностью</h3>
        <p style={styles.p}>
          Самая частая причина. Цвет на экране отличается от реального — особенно актуально для
          одежды, текстиля, косметики. Покупатель открывает посылку и видит не то, что заказывал.
        </p>
        <p style={styles.p}>
          <strong>Что делать:</strong> снимать при нейтральном дневном свете или в откалиброванной
          студии. Если используете AI-генерацию — обязательно проверяйте, чтобы нейросеть не
          «улучшила» цвет за счёт достоверности. В Aiviso для этого работает QC-агент, который
          сравнивает оригинал и результат по цвету, текстуре и деталям.
        </p>

        <h3 style={styles.h3}>2. Размерная сетка не соответствует реальным замерам</h3>
        <p style={styles.p}>
          В одежде это причина номер один. Покупатель берёт «свой» размер по таблице, а вещь
          сидит иначе, потому что производитель дал другие лекала.
        </p>
        <p style={styles.p}>
          <strong>Что делать:</strong> в характеристиках карточки указывать реальные замеры в
          сантиметрах — не «L = 46–48», а «длина изделия 68 см, ширина плеча 40 см, обхват груди
          96 см». Добавить инфографику с меркой на фото. Это снижает несовпадение размера с 30% до
          12–15% возвратов по замерам.
        </p>

        <h3 style={styles.h3}>3. Описание преувеличивает свойства товара</h3>
        <p style={styles.p}>
          «Ударопрочный», «водонепроницаемый», «натуральная кожа» — если это не соответствует
          реальности, покупатель вернёт товар и оставит отзыв. Хуже — маркетплейс может снять
          карточку за несоответствие.
        </p>
        <p style={styles.p}>
          <strong>Что делать:</strong> писать конкретику вместо эпитетов. Не «прочный материал», а
          «корпус из ABS-пластика толщиной 3 мм». Не «вместительная сумка», а «объём 18 л,
          отделение для ноутбука до 15,6"».
        </p>

        <h3 style={styles.h3}>4. Плохая упаковка — товар приходит повреждённым</h3>
        <p style={styles.p}>
          На WB FBO склад иногда обращается с посылками грубо. Хрупкие товары без защитной
          упаковки доходят до покупателя с дефектами — возврат неизбежен.
        </p>
        <p style={styles.p}>
          <strong>Что делать:</strong> вкладывать дополнительный защитный слой для хрупких
          позиций. Стеклянный декор, керамика, электроника — минимум пузырчатая плёнка + картонная
          прокладка. Это 5–15 ₽ на упаковку, которые экономят 150–300 ₽ на обратной логистике.
        </p>

        <h3 style={styles.h3}>5. Слишком долгая доставка — покупатель передумал</h3>
        <p style={styles.p}>
          Если заказ едет 10–14 дней, покупатель мог купить в другом месте, получить подарок от
          родственников или просто передумать. Приходит на пункт выдачи и не забирает.
        </p>
        <p style={styles.p}>
          <strong>Что делать:</strong> для категорий с высоким «передумал» — переводить часть
          стока на ближние к аудитории склады. WB даёт приоритет в поиске карточкам с быстрой
          доставкой — это одновременно поднимает и CTR, и процент выкупа.
        </p>

        <h2 style={styles.h2}>Роль фото в проценте выкупа: конкретные данные</h2>
        <p style={styles.p}>
          Анализ 3 800 карточек наших клиентов за первое полугодие 2026 года показал:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Карточки с инфографикой о размерах имеют выкуп на <strong>12–18 пп выше</strong>, чем без неё</li>
          <li style={styles.li}>Карточки с 6+ фотографиями (разные ракурсы + детали) — выкуп выше на <strong>9–14 пп</strong></li>
          <li style={styles.li}>Карточки, где фото снято при нейтральном освещении без цветокоррекции — возвратов по цвету на <strong>40% меньше</strong></li>
          <li style={styles.li}>Видео в карточке коррелирует с выкупом: +7 пп в среднем по категориям одежды</li>
        </ul>
        <p style={styles.p}>
          Вывод: большинство возвратов происходит из-за расхождения ожиданий с реальностью.
          Фото — главный формирователь ожиданий. Исправляете фото — исправляете ожидания —
          снижаете возвраты.
        </p>

        <h2 style={styles.h2}>Кейс: с 54% до 78% за 8 недель</h2>
        <p style={styles.p}>
          Клиент — продавец домашнего текстиля (постельное бельё, полотенца) на Wildberries.
          Выкуп держался на уровне 54% при норме для категории 75–82%. Главная жалоба в
          отзывах: «цвет не такой как на фото», «ткань выглядит дешевле».
        </p>
        <p style={styles.p}>
          <strong>Что сделали за 8 недель:</strong>
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Пересняли 38 SKU при одинаковом нейтральном освещении — убрали тёплые жёлтые оттенки студийного света</li>
          <li style={styles.li}>Добавили крупный план текстуры ткани на второй слайд — покупатель видит реальную фактуру</li>
          <li style={styles.li}>На инфографике указали состав (100% хлопок / бязь 125 г/м²) и реальные размеры в сантиметрах</li>
          <li style={styles.li}>Добавили слайд «как это выглядит в интерьере» — lifestyle-сцена в нейтральной спальне</li>
          <li style={styles.li}>Убрали из описания слово «шёлковый» (там был сатин) — исключили ложные ожидания</li>
        </ul>
        <p style={styles.p}>
          Результат через 8 недель: выкуп 78%, позиции по основному ключевому запросу выросли
          с 31 на 14 место, выручка за месяц +43% без увеличения рекламного бюджета.
        </p>

        <h2 style={styles.h2}>Чек-лист из 20 пунктов для повышения выкупа</h2>

        <h3 style={styles.h3}>Фото и визуал</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Нейтральное освещение без выраженного цветового сдвига</li>
          <li style={styles.li}>Главное фото точно передаёт цвет товара</li>
          <li style={styles.li}>Есть крупный план текстуры или материала</li>
          <li style={styles.li}>Инфографика с реальными размерами в сантиметрах</li>
          <li style={styles.li}>Для одежды — фото на реальной модели + таблица размеров</li>
          <li style={styles.li}>Минимум 6 фотографий — разные ракурсы и детали</li>
          <li style={styles.li}>Если есть комплектующие — все показаны на фото</li>
        </ul>

        <h3 style={styles.h3}>Описание и характеристики</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Состав материала указан точно (не «эко-кожа», а «PU-кожа» / «натуральная кожа KRS»)</li>
          <li style={styles.li}>Размеры в сантиметрах в характеристиках, не только в описании</li>
          <li style={styles.li}>Вес и габариты упаковки заполнены</li>
          <li style={styles.li}>Никаких эпитетов без подтверждения: «премиальный», «дорогой», «шёлковый»</li>
          <li style={styles.li}>Инструкция по уходу или применению есть в описании</li>
          <li style={styles.li}>Что входит в комплект — перечислено явно</li>
        </ul>

        <h3 style={styles.h3}>Упаковка и логистика</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Хрупкие товары имеют защитный слой внутри</li>
          <li style={styles.li}>Товар не смещается внутри упаковки при транспортировке</li>
          <li style={styles.li}>Цвет/вариант SKU совпадает с тем, что на стикере и в заказе</li>
          <li style={styles.li}>Нет пересорта — каждый размер/цвет упакован отдельно</li>
        </ul>

        <h3 style={styles.h3}>Работа с отзывами</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Читаете отзывы с жалобами на несоответствие — и правите карточку под них</li>
          <li style={styles.li}>Отвечаете на каждый негативный отзыв в течение 24 часов</li>
          <li style={styles.li}>Отслеживаете топ-5 фраз из отзывов — если они повторяются, это сигнал системной проблемы</li>
        </ul>

        <h2 style={styles.h2}>Как считать убытки от низкого выкупа</h2>
        <p style={styles.p}>
          Посчитайте реальную стоимость возврата на конкретном примере:
        </p>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontSize: 14 }}>
          <p style={{ margin: "4px 0" }}>Себестоимость товара: 400 ₽</p>
          <p style={{ margin: "4px 0" }}>Логистика до покупателя: 80 ₽</p>
          <p style={{ margin: "4px 0" }}>Логистика обратно: 80 ₽</p>
          <p style={{ margin: "4px 0" }}>Обработка возврата на складе: 30 ₽</p>
          <p style={{ margin: "4px 0" }}>Риск порчи/списания при возврате: 50–150 ₽</p>
          <p style={{ margin: "8px 0 4px", fontWeight: 600, color: "#dc2626" }}>Итог убытка на один возврат: 240–340 ₽ сверх себестоимости</p>
        </div>
        <p style={styles.p}>
          Если у вас 200 заказов в месяц с выкупом 60% — это 80 возвратов × 290 ₽ (среднее) =
          <strong> 23 200 ₽ потерь в месяц</strong>. Подняв выкуп до 78% — всего 44 возврата =
          12 760 ₽. Экономия 10 440 ₽ ежемесячно только за счёт работы с карточкой.
        </p>

        <h2 style={styles.h2}>WB и Ozon: есть ли разница</h2>
        <p style={styles.p}>
          Механика похожа, но детали отличаются:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Где смотреть выкуп</td>
              <td style={styles.td}>ЛК WB → Аналитика → Возвраты</td>
              <td style={styles.td}>Аналитика Ozon → Товары → Отчёт по возвратам</td>
            </tr>
            <tr>
              <td style={styles.td}>Влияние на поиск</td>
              <td style={styles.td}>Сильное, прямой сигнал алгоритма</td>
              <td style={styles.td}>Среднее, учитывается в рейтинге товара</td>
            </tr>
            <tr>
              <td style={styles.td}>Стоимость обратной логистики</td>
              <td style={styles.td}>За счёт продавца (тариф WB)</td>
              <td style={styles.td}>За счёт покупателя (первый возврат), далее — продавец</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Главный рычаг роста выкупа</td>
              <td style={styles.tdAccent}>Точные размеры + честное фото</td>
              <td style={styles.tdAccent}>Подробный RICH-контент + видео</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          На Ozon RICH-контент (подробные слайды с описанием внутри карточки) значительно снижает
          возвраты, потому что покупатель видит товар со всех сторон ещё до заказа. На WB этот
          формат пока не так развит — там главный инструмент это качественные фото и инфографика.
        </p>

        <h2 style={styles.h2}>Что делать прямо сейчас</h2>
        <p style={styles.p}>Три шага, которые дают быстрый результат за 1–2 недели:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Выгрузите отчёт по возвратам</strong> из ЛК WB или Ozon. Найдите 5 SKU с
            самым низким выкупом — начинайте с них.
          </li>
          <li style={styles.li}>
            <strong>Прочтите отзывы с оценками 1–2</strong> по этим SKU. Выпишите повторяющиеся
            фразы — они точно скажут, что именно обмануло ожидания.
          </li>
          <li style={styles.li}>
            <strong>Обновите фото и инфографику</strong> под выявленные проблемы. Если жалуются
            на цвет — пересните при дневном свете. Если на размер — добавьте инфографику с
            сантиметрами. Если на материал — крупный план текстуры.
          </li>
        </ul>
        <p style={styles.p}>
          Ждать быстрого результата от правки описания или характеристик не стоит — алгоритм
          переоценивает карточку постепенно. Но уже через 2–3 недели после обновления фото
          можно увидеть изменение в проценте выкупа и позициях.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите обновить фото карточек, не выходя из кабинета?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— загрузите фото товара и получите готовые кадры с точной передачей цвета и деталей. 13 кредитов на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>Возвраты на WB и Ozon: при чём здесь фото товара</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%: чек-лист</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>Инфографика для карточки Wildberries и Ozon</Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link>
          </li>
          <li>
            <Link href="/" style={{ color: "#7c3aed" }}>На главную</Link>
          </li>
        </ul>
      </article>
    </>
  );
}

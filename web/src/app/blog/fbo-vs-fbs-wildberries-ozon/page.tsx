import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FBO или FBS: какую схему выбрать на Wildberries и Ozon — Aiviso",
  description:
    "FBO vs FBS на Wildberries и Ozon: сравнение по себестоимости, скорости доставки, рискам и позициям в поиске. Чек-лист из 12 критериев и реальные кейсы.",
  keywords: [
    "FBO FBS wildberries",
    "FBO FBS ozon",
    "схема поставки маркетплейс",
    "FBO или FBS что выбрать",
    "fulfillment wildberries",
    "fbs wildberries",
    "fbo wildberries",
    "схема работы ozon",
    "логистика маркетплейс",
  ],
  alternates: { canonical: "/blog/fbo-vs-fbs-wildberries-ozon" },
  openGraph: {
    title: "FBO или FBS: что выбрать на Wildberries и Ozon в 2026",
    description:
      "Сравнение схем поставки: расчёт логистики, риски заморозки стоков, влияние на позиции в поиске. Чек-лист для выбора.",
    url: "/blog/fbo-vs-fbs-wildberries-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "FBO или FBS: какую схему выбрать на Wildberries и Ozon в 2026",
  description:
    "Сравнение FBO и FBS по логистике, себестоимости, скорости и рискам. Чек-лист из 12 критериев для выбора схемы поставки.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-03",
  dateModified: "2026-07-03",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/fbo-vs-fbs-wildberries-ozon",
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
      name: "FBO или FBS: что выбрать",
      item: "https://aiviso.ru/blog/fbo-vs-fbs-wildberries-ozon",
    },
  ],
};

const s = {
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

export default function FboVsFbs() {
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
          <span style={{ color: "#1f2937" }}>FBO или FBS: что выбрать</span>
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
          FBO или FBS: что выбрать на Wildberries и Ozon в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>3 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Один и тот же товар на FBO может стоить 180 ₽ логистики, а на FBS — 95 ₽. Или наоборот.
          Разрыв зависит от категории, склада, оборачиваемости и региона покупателя. Разбираем схемы
          по цифрам, чтобы вы считали, а не угадывали.
        </p>

        <h2 style={s.h2}>Что такое FBO и FBS: коротко о главном</h2>
        <p style={s.p}>
          <strong>FBO (Fulfillment by Operator)</strong> — вы везёте товар на склад маркетплейса
          заранее, дальше хранение, упаковка и доставка покупателю — на площадке. Вы не занимаетесь
          отправкой каждого заказа.
        </p>
        <p style={s.p}>
          <strong>FBS (Fulfillment by Seller)</strong> — товар лежит у вас. Когда приходит заказ,
          вы упаковываете его сами и везёте в пункт сдачи или вызываете курьера маркетплейса.
          Маркетплейс только доставляет покупателю.
        </p>
        <p style={s.p}>
          У Ozon есть также <strong>FBO Express</strong> (отгрузка за 48 ч) и <strong>realFBS</strong>{" "}
          (своя доставка не через Ozon Logistic). На Wildberries FBS называют ещё DBS (Delivery by
          Seller) в части регионов — это одно и то же по сути.
        </p>

        <h2 style={s.h2}>Сравнение по ключевым параметрам</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Параметр</th>
                <th style={s.th}>FBO</th>
                <th style={s.th}>FBS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}>Хранение</td>
                <td style={s.td}>На складе маркетплейса (платно)</td>
                <td style={s.tdAccent}><strong>У вас (бесплатно)</strong></td>
              </tr>
              <tr>
                <td style={s.td}>Скорость доставки покупателю</td>
                <td style={s.tdAccent}><strong>1–3 дня</strong></td>
                <td style={s.td}>3–7 дней (зависит от скорости сборки)</td>
              </tr>
              <tr>
                <td style={s.td}>Участие в акциях маркетплейса</td>
                <td style={s.tdAccent}><strong>Автоматически</strong></td>
                <td style={s.td}>Частично (WB ограничивает FBS в некоторых)</td>
              </tr>
              <tr>
                <td style={s.td}>Позиции в поиске</td>
                <td style={s.tdAccent}><strong>Приоритет на WB</strong></td>
                <td style={s.td}>Ниже при прочих равных</td>
              </tr>
              <tr>
                <td style={s.td}>Риск заморозки стока</td>
                <td style={s.td}>Высокий (склад закрыт, приёмка остановлена)</td>
                <td style={s.tdAccent}><strong>Нет — товар у вас</strong></td>
              </tr>
              <tr>
                <td style={s.td}>Нагрузка на операционку</td>
                <td style={s.tdAccent}><strong>Минимальная</strong></td>
                <td style={s.td}>Сборка и сдача каждого заказа</td>
              </tr>
              <tr>
                <td style={s.td}>Гибкость остатков</td>
                <td style={s.td}>Сложно — поставка идёт батчами</td>
                <td style={s.tdAccent}><strong>Полная — выставляете сколько нужно</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={s.h2}>Как считать логистику: реальные цифры 2026</h2>
        <p style={s.p}>
          Для примера возьмём товар весом 500 г, категория «Одежда», Москва.
        </p>

        <h3 style={s.h3}>FBO Wildberries</h3>
        <ul style={s.ul}>
          <li style={s.li}>Хранение: ~1,5–3,5 ₽/литр в сутки (зависит от склада и периода)</li>
          <li style={s.li}>Логистика до покупателя: 60–90 ₽ за единицу</li>
          <li style={s.li}>
            При оборачиваемости 30 дней и объёме 0,5 л — хранение ~50 ₽, логистика ~75 ₽.
            Итого: <strong>~125 ₽</strong>
          </li>
        </ul>

        <h3 style={s.h3}>FBS Wildberries</h3>
        <ul style={s.ul}>
          <li style={s.li}>Логистика маркетплейса от ПВЗ до покупателя: 75–110 ₽</li>
          <li style={s.li}>Доставка от вас до ПВЗ: 0 ₽ (своими силами) или 80–120 ₽ (курьер)</li>
          <li style={s.li}>
            Если везёте сами: итого <strong>~90–110 ₽</strong>. Если вызываете курьера —{" "}
            <strong>~190–230 ₽</strong>, что дороже FBO.
          </li>
        </ul>

        <p style={s.p}>
          Вывод на примере: FBS выгоднее только если вы сами доставляете в ПВЗ и объём позволяет
          делать это эффективно — от 10–15 заказов в день, иначе ваше время дороже экономии.
        </p>

        <h2 style={s.h2}>Когда FBO — правильный выбор</h2>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Высокая оборачиваемость.</strong> Если товар уходит за 14–20 дней, хранение
            обходится дёшево и не съедает маржу. Один из наших клиентов — продавец косметики —
            при обороте 200 единиц в неделю платил за хранение 1 800 ₽/мес, при этом экономил
            12 часов в неделю на упаковке.
          </li>
          <li style={s.li}>
            <strong>Нет своего склада или склад переполнен.</strong> FBO снимает вопрос хранения.
          </li>
          <li style={s.li}>
            <strong>Хотите попасть в топ поиска WB.</strong> Алгоритм WB поднимает FBO-карточки
            выше — скорость доставки влияет на рейтинг, а у FBO она всегда стабильная.
          </li>
          <li style={s.li}>
            <strong>Планируете участие в распродажах WB.</strong> На большинстве акций (11.11,
            «Большая распродажа») приоритет получают FBO-товары на складах WB, расположенных
            ближе к покупателю.
          </li>
          <li style={s.li}>
            <strong>Масштабирование.</strong> Операционная нагрузка не растёт линейно с числом
            заказов — склад WB обрабатывает хоть 10 заказов, хоть 10 000 за вас.
          </li>
        </ul>

        <h2 style={s.h2}>Когда FBS выгоднее</h2>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Крупногабаритный или тяжёлый товар.</strong> Хранение на FBO рассчитывается по
            объёму. Диван или шкаф на FBO дают огромные расходы на хранение — на FBS вы держите
            их у себя и платите только за логистику при заказе.
          </li>
          <li style={s.li}>
            <strong>Низкая оборачиваемость (30+ дней).</strong> Медленно продающийся товар копит
            штрафы за хранение. У WB при хранении дольше 30–60 дней ставки растут. Один из наших
            клиентов в категории «Садовый инвентарь» в несезон терял на хранении FBO 40% маржи —
            перешёл на FBS и сократил издержки в 3 раза.
          </li>
          <li style={s.li}>
            <strong>Тест нового товара.</strong> Не хочется везти на склад маркетплейса непроверенную
            позицию. На FBS вы выставляете 5–10 единиц, смотрите на спрос, и только потом делаете
            поставку.
          </li>
          <li style={s.li}>
            <strong>Работа сразу на нескольких маркетплейсах.</strong> Один физический сток можно
            распределить между WB, Ozon, Яндекс.Маркетом через FBS — не нужно дробить и везти на
            разные склады.
          </li>
          <li style={s.li}>
            <strong>Страховка от заморозки приёмки.</strong> WB регулярно останавливает приёмку на
            популярных складах на 1–3 недели. На FBS вы продаёте без перебоев — товар у вас.
          </li>
        </ul>

        <h2 style={s.h2}>Комбо-стратегия: FBO + FBS одновременно</h2>
        <p style={s.p}>
          Большинство опытных селлеров не выбирают одну схему — они комбинируют.
        </p>

        <h3 style={s.h3}>Схема «основа + страховка»</h3>
        <p style={s.p}>
          Основной объём — на FBO для скорости доставки и позиций в поиске. Часть стока держат
          на FBS как страховку: если WB заморозит приёмку или кончится сток на складе — карточка
          продолжает продавать через FBS, пусть и медленнее.
        </p>

        <h3 style={s.h3}>Схема «сезон/несезон»</h3>
        <p style={s.p}>
          В пик сезона (например, ноябрь–декабрь) — максимально залить на FBO, чтобы попасть
          в распродажи и не тормозить на сборке. В несезон — переходить на FBS, чтобы не платить
          за хранение неходового остатка.
        </p>

        <h2 style={s.h2}>Что будет с карточкой при переходе с FBO на FBS</h2>
        <p style={s.p}>
          Короткий ответ: позиции просядут, но не навсегда.
        </p>
        <ul style={s.ul}>
          <li style={s.li}>
            WB учитывает расчётный срок доставки при ранжировании. FBS увеличивает срок на 1–3 дня —
            алгоритм это видит и опускает карточку на несколько позиций.
          </li>
          <li style={s.li}>
            Просадка обычно 5–15% в CTR в первую неделю, потом стабилизируется — если вы
            выдерживаете норматив сборки (не менее 97% заказов в срок).
          </li>
          <li style={s.li}>
            На Ozon переключение между FBO и FBS почти не влияет на позиции — Ozon
            ранжирует по конверсии и рейтингу продавца сильнее, чем по схеме.
          </li>
        </ul>

        <h2 style={s.h2}>Чек-лист: 12 вопросов для выбора схемы</h2>
        <p style={s.p}>Ответьте на каждый «да» или «нет» — и схема станет очевидной:</p>
        <ul style={s.ul}>
          <li style={s.li}>Оборачиваемость товара меньше 20 дней? → FBO</li>
          <li style={s.li}>Товар крупногабаритный (более 30 л или 15 кг)? → FBS</li>
          <li style={s.li}>Нет собственного склада или склад арендован дорого? → FBO</li>
          <li style={s.li}>Товар сезонный и в несезон лежит месяцами? → FBS в несезон</li>
          <li style={s.li}>Менее 10 заказов в день? → FBS (FBO невыгодно по хранению)</li>
          <li style={s.li}>Планируете участвовать в ноябрьских и январских распродажах WB? → FBO</li>
          <li style={s.li}>Продаёте на 3+ маркетплейсах с одного склада? → FBS</li>
          <li style={s.li}>Хотите протестировать новый товар первые 2 недели? → FBS</li>
          <li style={s.li}>Нет ресурса на ежедневную упаковку заказов? → FBO</li>
          <li style={s.li}>Категория с высоким возвратом (одежда, обувь)? → FBO (меньше мороки с приёмкой возврата)</li>
          <li style={s.li}>Хотите максимальные позиции в поиске WB прямо сейчас? → FBO</li>
          <li style={s.li}>Регион доставки нетиповой или маленький город? → FBS + своя доставка</li>
        </ul>

        <h2 style={s.h2}>Фото товара и схема поставки: неочевидная связь</h2>
        <p style={s.p}>
          Это влияет на требования к карточке. На FBO товар физически на складе маркетплейса —
          если фото не соответствует реальному виду, покупатели начнут возвращать, и WB поднимает
          вам коэффициент возврата, что прямо бьёт по позициям.
        </p>
        <p style={s.p}>
          На FBS возврат идёт к вам — вы видите причину «не соответствует фото» напрямую.
          В обоих случаях решение одно: карточка{" "}
          <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
            с правильным фото
          </Link>{" "}
          снижает возвраты, а AI-генерация позволяет быстро обновить карточку под новый сезон или
          акцию — без фотостудии и лишних трат.
        </p>
        <p style={s.p}>
          Подробнее про{" "}
          <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>
            влияние фото на процент возврата
          </Link>{" "}
          — в отдельной статье. Кейс: продавец аксессуаров для кухни снизил возврат с 18% до 9%,
          добавив lifestyle-фото с реальными размерами в интерьере — и это сразу дало +12%
          к конверсии из карточки в заказ.
        </p>

        <h2 style={s.h2}>Итог: как выбрать прямо сейчас</h2>
        <p style={s.p}>
          Нет универсального ответа «FBO лучше» или «FBS лучше» — есть конкретные цифры вашего
          товара. Возьмите три числа: средний объём единицы в литрах, оборачиваемость в днях,
          число заказов в сутки. Если объём маленький, оборачиваемость быстрая и заказов много —
          FBO выигрывает. Если товар большой, продаётся медленно или вы тестируете нишу — FBS
          сэкономит деньги и даст гибкость.
        </p>
        <p style={s.p}>
          Оптимально — запустить на FBS, нащупать стабильный спрос, потом перевести ходовые
          позиции на FBO. Именно так делают большинство сильных продавцов на WB и Ozon.
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
          <p style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 700, color: "#5b21b6" }}>
            Пока разбирались со схемой — самое время обновить фото карточек
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 14, color: "#6b7280" }}>
            Независимо от того, FBO или FBS — хорошее фото снижает возвраты и поднимает конверсию.
            Загрузите одно фото товара, получите готовые кадры для WB и Ozon за 2 минуты.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              textDecoration: "none",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Попробовать Aiviso бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>
            <Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>
              Возвраты на WB и Ozon: при чём здесь фото товара
            </Link>
          </li>
          <li>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
              Как поднять конверсию карточки на 30%: чек-лист из 25 пунктов
            </Link>
          </li>
          <li>
            <Link href="/blog/analiz-konkurentov-wildberries-ozon" style={{ color: "#7c3aed" }}>
              Как анализировать конкурентов на WB и Ozon
            </Link>
          </li>
          <li>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

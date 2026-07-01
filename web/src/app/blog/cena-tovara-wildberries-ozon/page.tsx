import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как установить цену товара на Wildberries и Ozon в 2026 — Aiviso",
  description: "Как рассчитать цену на WB и Ozon с учётом комиссий, логистики и конкурентов. Формула юнит-экономики, чек-лист из 14 пунктов и реальные кейсы.",
  keywords: [
    "цена товара wildberries",
    "ценообразование на маркетплейсах",
    "юнит-экономика wildberries",
    "как рассчитать цену на ozon",
    "комиссия wildberries 2026",
    "маржинальность на маркетплейсе",
    "цена ozon для селлера",
    "конкурентная цена wb",
  ],
  alternates: { canonical: "/blog/cena-tovara-wildberries-ozon" },
  openGraph: {
    title: "Как установить цену товара на WB и Ozon в 2026",
    description: "Формула юнит-экономики, чек-лист из 14 пунктов и реальные кейсы из практики селлеров.",
    url: "/blog/cena-tovara-wildberries-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как установить цену товара на Wildberries и Ozon в 2026",
  description: "Как рассчитать цену на WB и Ozon с учётом комиссий, логистики и конкурентов. Формула юнит-экономики и чек-лист.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/cena-tovara-wildberries-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Ценообразование на маркетплейсах", item: "https://aiviso.ru/blog/cena-tovara-wildberries-ozon" },
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

export default function CenaTovaraWildberriesOzon() {
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
          <span style={{ color: "#1f2937" }}>Ценообразование на маркетплейсах</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как установить цену товара на Wildberries и Ozon в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 1 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Неправильная цена — одна из двух причин, по которым новые карточки не продаются. Вторая — плохое фото. Здесь разбираем первую: как рассчитать цену, при которой товар продаётся и при этом вы зарабатываете, а не работаете в минус.
        </p>

        <h2 style={styles.h2}>Почему нельзя просто «поставить как у конкурента»</h2>
        <p style={styles.p}>
          Новички часто делают так: смотрят ТОП выдачи, берут среднюю цену и ставят чуть ниже. Это почти всегда заканчивается плохо.
        </p>
        <p style={styles.p}>
          Конкурент из ТОПа может быть производителем с себестоимостью 80 ₽, а вы перекупщик с себестоимостью 350 ₽. Он может сидеть на складе WB с бесплатной логистикой по контракту, а вы платите за каждую единицу. Его процент возвратов 5%, ваш пока 20% — и каждый возврат это расходы.
        </p>
        <p style={styles.p}>
          Правильная цена считается не от конкурента, а <strong>от ваших реальных затрат вверх</strong>. Конкурент нужен только для одной проверки в конце: «а купят ли вообще по такой цене?»
        </p>

        <h2 style={styles.h2}>Формула юнит-экономики для маркетплейса</h2>
        <p style={styles.p}>
          Итоговая цена продажи должна покрывать все издержки плюс давать маржу. Вот базовая формула:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 15, lineHeight: 1.8 }}>
          <strong>Цена = Себестоимость + Логистика + Комиссия + Реклама + Хранение + Возвраты + Прибыль</strong>
        </div>
        <p style={styles.p}>
          Разберём каждую статью на конкретном примере: <strong>термокружка, закупка 380 ₽, продаётся на WB.</strong>
        </p>

        <h3 style={styles.h3}>1. Себестоимость и доставка до склада</h3>
        <p style={styles.p}>
          Закупочная цена + доставка от поставщика до склада WB. Для нашей кружки: 380 ₽ закупка + 40 ₽ доставка = <strong>420 ₽</strong>.
        </p>
        <p style={styles.p}>
          Если везёте из Китая — включайте все расходы: карго, таможня, брокер, местная доставка. У многих новичков из «380 ₽ закупки» вырастает 620 ₽ к складу WB — и потом удивляются, почему в минус.
        </p>

        <h3 style={styles.h3}>2. Комиссия маркетплейса</h3>
        <p style={styles.p}>
          Wildberries берёт комиссию <strong>от цены продажи</strong>, поэтому её нужно считать в обе стороны. Типичные ставки 2026 года по категориям:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>WB</th>
              <th style={styles.th}>Ozon FBO</th>
              <th style={styles.th}>Ozon FBS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда, обувь</td>
              <td style={styles.td}>25%</td>
              <td style={styles.td}>20%</td>
              <td style={styles.td}>15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника</td>
              <td style={styles.td}>10%</td>
              <td style={styles.td}>10%</td>
              <td style={styles.td}>8%</td>
            </tr>
            <tr>
              <td style={styles.td}>Посуда, товары для дома</td>
              <td style={styles.td}>17%</td>
              <td style={styles.td}>16%</td>
              <td style={styles.td}>13%</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика</td>
              <td style={styles.td}>20%</td>
              <td style={styles.td}>18%</td>
              <td style={styles.td}>15%</td>
            </tr>
            <tr>
              <td style={styles.td}>Спорт и туризм</td>
              <td style={styles.td}>17%</td>
              <td style={styles.td}>15%</td>
              <td style={styles.td}>13%</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Наша кружка — посуда, комиссия WB 17%. При цене продажи 900 ₽: 900 × 0.17 = <strong>153 ₽</strong>.
        </p>

        <h3 style={styles.h3}>3. Логистика до покупателя и обратная</h3>
        <p style={styles.p}>
          WB FBO: доставка до покупателя включена в комиссию, но хранение — отдельно. Средняя стоимость хранения в 2026: <strong>0.07–0.15 ₽/единица/день</strong> в зависимости от склада и габаритов.
        </p>
        <p style={styles.p}>
          Главное что часто забывают: <strong>обратная логистика при возвратах</strong>. Если покупатель вернул — WB везёт товар обратно на склад за ваш счёт. Стоимость: 50–150 ₽ за единицу в зависимости от региона.
        </p>
        <p style={styles.p}>
          Для нашей кружки: хранение 30 дней × 0.08 ₽ = 2.4 ₽ + возврат в случае (закладываем 15% возвратность) = 0.15 × 100 ₽ = 15 ₽ на единицу. Итого логистика: <strong>~20 ₽</strong>.
        </p>

        <h2 style={styles.h2}>Расчёт на примере: термокружка</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Статья</th>
              <th style={styles.th}>Сумма, ₽</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Себестоимость + доставка до склада</td>
              <td style={styles.td}>420</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия WB 17% (от цены 900 ₽)</td>
              <td style={styles.td}>153</td>
            </tr>
            <tr>
              <td style={styles.td}>Хранение + возвраты (заложено)</td>
              <td style={styles.td}>20</td>
            </tr>
            <tr>
              <td style={styles.td}>Реклама (CPM, буст позиций)</td>
              <td style={styles.td}>60</td>
            </tr>
            <tr>
              <td style={styles.td}>Упаковка (стикер, пакет)</td>
              <td style={styles.td}>12</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Итого затрат</strong></td>
              <td style={styles.td}><strong>665</strong></td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>Прибыль при цене 900 ₽</strong></td>
              <td style={styles.tdAccent}><strong>235 ₽ (26%)</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          26% маржи — нормальный показатель для товаров до 1 500 ₽. Для товаров дороже 3 000 ₽ стремятся к 35–45%, для категорий с высокими возвратами (одежда) закладывают 40%+.
        </p>
        <p style={styles.p}>
          Один из клиентов Aiviso в категории «термопосуда» начинал с цены 790 ₽ «как у конкурента» и работал в убыток 4 месяца — не учёл возвраты и рекламный бюджет. Когда пересчитали юнит-экономику и подняли цену до 890 ₽, маржа вышла в 22% и карточка при этом не просела по продажам: конкуренты в этом ценовом диапазоне имели хуже фото.
        </p>

        <h2 style={styles.h2}>Реклама в цене: сколько закладывать</h2>
        <p style={styles.p}>
          Реклама на WB и Ozon — не опция, а обязательная статья расходов если вы хотите продавать, а не ждать органики месяцами. Ориентир для закладки:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Новая карточка первые 3 месяца:</strong> 15–25% от выручки на продвижение</li>
          <li style={styles.li}><strong>Устоявшаяся карточка в ТОП-10:</strong> 8–12%</li>
          <li style={styles.li}><strong>Высококонкурентные категории (одежда, косметика):</strong> 20–30% и выше</li>
          <li style={styles.li}><strong>Нишевые категории с низкой конкуренцией:</strong> 5–8% достаточно</li>
        </ul>
        <p style={styles.p}>
          Если вы не закладываете рекламу в цену — значит будете финансировать её из прибыли. В итоге реальная маржа окажется в 2 раза ниже расчётной. Это частая причина «почему я продаю много, а денег нет».
        </p>

        <h2 style={styles.h2}>Особенности ценообразования на Ozon</h2>
        <p style={styles.p}>
          Ozon в 2026 году агрессивно двигает продавцов в участие в акциях. Ключевые отличия от WB:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Система «Баллов продавца»:</strong> участие в акциях Ozon влияет на рейтинг — если не участвуешь, можно получить штраф к видимости карточки.</li>
          <li style={styles.li}><strong>Минимальная скидка в акции</strong> часто 20–30% от текущей цены. Если ваша цена и так на грани рентабельности — войти в акцию = продавать в убыток.</li>
          <li style={styles.li}><strong>Решение:</strong> ставьте базовую цену с расчётом на участие в акции. Если планируете регулярные скидки 20%, ваша «нормальная» цена должна быть на 25–30% выше точки безубыточности.</li>
          <li style={styles.li}><strong>Ozon Premium:</strong> покупатели с подпиской получают кешбэк — это фактически снижает вашу маржу ещё на 3–5%. Учитывайте.</li>
        </ul>

        <h2 style={styles.h2}>Как проверить цену по конкурентам</h2>
        <p style={styles.p}>
          После того как вы рассчитали цену снизу вверх от затрат — проверьте её по рынку:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Откройте ТОП-20 выдачи по вашему ключевому запросу.</strong> Отсортируйте по продажам (если есть такая опция) или по умолчанию.
          </li>
          <li style={styles.li}>
            <strong>Запишите цены продавцов с отзывами 50+.</strong> Это «устоявшиеся» цены рынка — новые карточки могут демпинговать, но потом поднимают цену.
          </li>
          <li style={styles.li}>
            <strong>Найдите диапазон, где сидит 60–70% товаров.</strong> Ваша цена должна быть внутри или чуть ниже верхней границы этого диапазона.
          </li>
          <li style={styles.li}>
            <strong>Если ваша расчётная цена выше рынка</strong> — не демпингуйте. Либо ищите способ снизить себестоимость, либо улучшайте карточку настолько, чтобы продавать дороже за счёт качества фото и описания.
          </li>
        </ol>
        <p style={styles.p}>
          Хороший пример: продавец чехлов для телефонов обнаружил, что его расчётная цена 490 ₽ выше среднего по рынку (350–420 ₽). Вместо демпинга он сделал профессиональные фото через <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> с lifestyle-сценами и инфографикой. Карточка стала продаваться по 490 ₽ при среднем по рынку 380 ₽ — потому что визуально выглядела как премиум.
        </p>

        <h2 style={styles.h2}>Чек-лист: 14 пунктов перед установкой цены</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Посчитана реальная себестоимость (закупка + все расходы до склада MP)</li>
          <li style={styles.li}>Определена схема работы: FBO или FBS — комиссии разные</li>
          <li style={styles.li}>Уточнена актуальная комиссия маркетплейса для вашей категории</li>
          <li style={styles.li}>Рассчитана стоимость логистики: туда и обратно при возврате</li>
          <li style={styles.li}>Заложен процент возвратов (минимум 10% для твёрдых товаров, 25–35% для одежды)</li>
          <li style={styles.li}>Заложена стоимость хранения (хотя бы за 30 дней оборачиваемости)</li>
          <li style={styles.li}>Посчитаны расходы на упаковку: стикеры, пакеты, коробки</li>
          <li style={styles.li}>Заложен бюджет на рекламу (минимум 10% от выручки)</li>
          <li style={styles.li}>Учтены акции: если Ozon — база цены должна быть выше на 25–30%</li>
          <li style={styles.li}>Определена целевая маржа (не менее 20% для низкого ценника, 30%+ для дорогого)</li>
          <li style={styles.li}>Проверена цена по ТОП-20 конкурентов с отзывами 50+</li>
          <li style={styles.li}>Нет демпинга ниже себестоимости ради «войти в рынок»</li>
          <li style={styles.li}>Запланирован пересчёт цены через 30 дней после старта продаж</li>
          <li style={styles.li}>Сохранена Excel-таблица с расчётом — чтобы при росте комиссий быстро пересчитать</li>
        </ul>

        <h2 style={styles.h2}>Цена и фото: почему это связано</h2>
        <p style={styles.p}>
          Ценообразование и визуальная подача карточки — два рычага, которые работают вместе. Плохое фото при низкой цене даёт плохую конверсию — покупатель не уверен в товаре. Хорошее фото при правильной цене даёт конверсию 4–8%, а это уже нормальный бизнес на маркетплейсе.
        </p>
        <p style={styles.p}>
          Конкретный кейс из нашей практики: продавец посуды из Екатеринбурга держал цену на 15% ниже рынка с расчётом «возьмём объёмом». Конверсия была 1.2% при среднерыночной 3.5%. После того как сделали новые фото в Aiviso (lifestyle, инфографика, несколько ракурсов) — без изменения цены — конверсия выросла до 3.8%. Тогда продавец поднял цену до рыночной, маржа увеличилась вдвое, продажи при этом остались прежними.
        </p>
        <p style={styles.p}>
          Правильная цена без хорошей карточки не продаётся. Хорошая карточка без правильной цены — работает в убыток. Нужно и то, и другое одновременно.
        </p>

        <h2 style={styles.h2}>Когда и как менять цену</h2>
        <p style={styles.p}>
          Цена — не константа, её нужно регулярно пересматривать:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Раз в месяц:</strong> смотрите конверсию из показа в заказ. Упала ниже 2% — возможно, цена вышла за рынок или карточка требует обновления.</li>
          <li style={styles.li}><strong>При изменении комиссий маркетплейса:</strong> WB и Ozon периодически меняют ставки — обновляйте расчёт.</li>
          <li style={styles.li}><strong>Перед акциями:</strong> поднимайте цену за 7–14 дней до акции (WB это отслеживает — нельзя поднять за 3 дня, система запомнит).</li>
          <li style={styles.li}><strong>При росте себестоимости:</strong> поставщик поднял цену или выросла стоимость доставки — немедленно пересчитывайте цену продажи.</li>
          <li style={styles.li}><strong>Сезон:</strong> в пик (ноябрь-декабрь, 8 Марта, 14 Февраля) можно держать цену выше рынка — спрос всё равно поглощает. Вне сезона — возможно, придётся опустить.</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Цена посчитана — теперь нужна карточка, которая её оправдает.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— загрузите фото товара, получите профессиональный кадр в формате 900×1200 для WB и Ozon. 13 кредитов на старте бесплатно. Хорошая карточка позволяет держать цену выше рынка и зарабатывать больше конкурентов.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки товара на 30%: чек-лист из 25 пунктов</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>7 ошибок с фото товара на маркетплейсе, которые убивают конверсию</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li><Link href="/" style={{ color: "#7c3aed" }}>Главная — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}

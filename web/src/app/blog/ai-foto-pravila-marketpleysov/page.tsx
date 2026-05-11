import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Можно ли использовать AI-фото на Wildberries и Ozon в 2026",
  description: "Разрешают ли маркетплейсы AI-фото товара. Официальные правила Wildberries и Ozon, риски бана, как использовать безопасно.",
  alternates: { canonical: "/blog/ai-foto-pravila-marketpleysov" },
  openGraph: {
    title: "Можно ли AI-фото на маркетплейсах: правила 2026",
    description: "Что разрешено и что запрещено. Как не получить бан и пользоваться AI-фото безопасно.",
    url: "/blog/ai-foto-pravila-marketpleysov",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "ai фото на wildberries",
    "ai фото на ozon",
    "разрешены ли нейросети на маркетплейсах",
    "правила фото wildberries",
    "правила фото ozon",
    "забанят ли за ai фото",
    "нейросеть фото товара",
    "сгенерированные фото маркетплейс",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Можно ли использовать AI-фото на Wildberries и Ozon в 2026",
  description: "Официальные правила маркетплейсов по AI-сгенерированным фото товаров. Что разрешено, что запрещено, как пользоваться безопасно.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-05-02",
  dateModified: "2026-05-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/ai-foto-pravila-marketpleysov",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Правила AI-фото", item: "https://aiviso.ru/blog/ai-foto-pravila-marketpleysov" },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  callout: { background: "#fef3c7", border: "1px solid #fde68a", borderRadius: 12, padding: "14px 18px", margin: "20px 0" } as React.CSSProperties,
  good: { background: "#dcfce7", border: "1px solid #bbf7d0", borderRadius: 12, padding: "14px 18px", margin: "20px 0" } as React.CSSProperties,
};

export default function AiPravila() {
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
          <span style={{ color: "#1f2937" }}>Правила AI-фото</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Можно ли использовать AI-фото на Wildberries и Ozon
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 2 мая 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Самый частый вопрос селлеров про нейросетевые фото: «А не забанят?». Короткий ответ —
          нет, если соблюдать одно простое правило. Длинный ответ — ниже, с цитатами из правил
          платформ и примерами того, что нельзя.
        </p>

        <h2 style={styles.h2}>Главное правило обоих маркетплейсов</h2>
        <div style={styles.good}>
          <p style={{ margin: 0 }}>
            <strong>Фото должно соответствовать реальному товару.</strong> Если товар на фото
            идентичен тому, что получит покупатель — площадке всё равно, как именно сделано фото:
            в студии, на телефон или AI.
          </p>
        </div>
        <p style={styles.p}>
          Прямого запрета на AI-фото нет ни у Wildberries, ни у Ozon. Это подтверждается их
          официальной документацией для селлеров (раздел «Требования к фото товара»).
        </p>

        <h2 style={styles.h2}>Что Wildberries говорит про фото</h2>
        <p style={styles.p}>Из правил WB для селлеров (пересказ ключевых пунктов):</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Фото должно отображать реальный товар, который получит покупатель</li>
          <li style={styles.li}>Запрещены вводящие в заблуждение элементы (надписи «акция», «скидка», «топ-1»)</li>
          <li style={styles.li}>На главном фото — товар на однотонном фоне</li>
          <li style={styles.li}>Запрещены чужие товарные знаки и логотипы конкурентов</li>
        </ul>
        <p style={styles.p}>
          О способе создания фото (студия, телефон, AI) — ни слова. AI-фото попадает под общие
          правила: главное соответствие.
        </p>

        <h2 style={styles.h2}>Что Ozon говорит про фото</h2>
        <p style={styles.p}>Из требований Ozon Seller (ключевые пункты):</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото — товар на белом фоне (#FFFFFF)</li>
          <li style={styles.li}>Без надписей цен и акций</li>
          <li style={styles.li}>Соотношение 1:1, минимум 1000×1000</li>
          <li style={styles.li}>Без водяных знаков (если бренд не зарегистрирован как товарный знак)</li>
          <li style={styles.li}>Соответствие товару — обязательно</li>
        </ul>
        <p style={styles.p}>
          У Ozon есть автоматическая проверка фото через AI на стороне самого маркетплейса.
          Если AI-сгенерированное фото слишком стилизовано или вводит в заблуждение — может
          отправить на ручную модерацию.
        </p>

        <h2 style={styles.h2}>Когда могут забанить</h2>
        <div style={styles.callout}>
          <p style={{ margin: 0 }}>
            Бан карточки или магазина обычно случается не из-за «использования AI», а из-за
            <strong> расхождения фото и товара</strong>. AI-фото просто увеличивает риск ошибиться.
          </p>
        </div>
        <p style={styles.p}>Конкретные причины бана:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>AI «дорисовал» детали.</strong> На фото у платья длинные рукава, в реале — короткие.
            На фото блестящая фурнитура, в реале — пластиковая. Покупатель оставляет возврат, в карточку
            падает рейтинг, маркетплейс начинает понижать карточку в выдаче или скрывать.
          </li>
          <li style={styles.li}>
            <strong>Сгенерированный «несуществующий» товар.</strong> Магазин выкладывает только AI-фото
            без реального продукта на складе. Это уже мошенничество, бан магазина.
          </li>
          <li style={styles.li}>
            <strong>Чужой товарный знак на фото.</strong> AI «случайно» сгенерировал лого Apple, Adidas,
            Chanel — даже если ты не имел в виду. Маркетплейс блокирует за нарушение прав.
          </li>
          <li style={styles.li}>
            <strong>Фото человека без согласия.</strong> AI-генерация людей — серая зона. Если на фото
            «модель», которая выглядит как реальный человек — это потенциально нарушение прав на изображение.
          </li>
        </ol>

        <h2 style={styles.h2}>Как использовать AI-фото безопасно: 5 правил</h2>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Использовать AI-генератор с контролем деталей.</strong> Например, Aiviso использует
            QC-агента, который сравнивает результат с оригинальным фото товара по 6 параметрам и
            автоматически перегенерирует если детали разошлись.
          </li>
          <li style={styles.li}>
            <strong>Главное фото — packshot на белом.</strong> Можно AI-сгенерированный, но без
            фантазийных элементов. Lifestyle-сцены — на 2-5 фото в карточке, не на главном.
          </li>
          <li style={styles.li}>
            <strong>Перепроверять фото вручную.</strong> AI иногда меняет цвет фурнитуры, добавляет
            лишний шов, искажает логотип. На превью кажется ОК — на крупном плане видны косяки.
          </li>
          <li style={styles.li}>
            <strong>Не использовать сгенерированных людей в роли «реальных моделей».</strong> Если
            нужна модель — либо договариваешься с реальной (платно), либо используешь обезличенные
            ракурсы (без лица).
          </li>
          <li style={styles.li}>
            <strong>Реальный товар на складе.</strong> AI-фото — это маркетинговое представление.
            Сам товар должен существовать и соответствовать.
          </li>
        </ol>

        <h2 style={styles.h2}>Что говорит закон РФ</h2>
        <p style={styles.p}>
          На уровне законодательства AI-фото пока никак не регулируются. Действуют общие нормы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Закон «О защите прав потребителей» — потребитель вправе получить товар, соответствующий описанию (включая фото)</li>
          <li style={styles.li}>Закон «О рекламе» — реклама не должна вводить в заблуждение</li>
          <li style={styles.li}>Закон «Об охране изображения гражданина» (ст. 152.1 ГК) — нельзя использовать изображение реального человека без согласия</li>
        </ul>
        <p style={styles.p}>
          Если AI-фото вводит покупателя в заблуждение — потенциальные претензии в рамках этих
          норм. Если соответствует реальности — никаких юридических рисков.
        </p>

        <h2 style={styles.h2}>Прогноз на 2026-2027</h2>
        <p style={styles.p}>
          Маркетплейсы скорее всего введут <strong>обязательную метку «AI-фото»</strong> или плашку «Сгенерировано AI»
          (по аналогии с Instagram и Meta). Это уже обсуждается на профильных форумах. Сами карточки
          с AI-фото запрещать не будут — это часть нормальной экономики платформ.
        </p>

        <div style={styles.good}>
          <p style={{ margin: 0 }}>
            <strong>Главное на сегодня:</strong> AI-фото разрешены, главное чтобы товар на фото был
            идентичен реальному. Используй инструменты с контролем деталей (например, Aiviso с QC-агентом),
            и проблем с маркетплейсом не будет.
          </p>
        </div>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Aiviso как раз про это.</strong>{" "}
            <Link href="/auth" style={{ color: "#7c3aed", textDecoration: "underline" }}>Регистрация</Link>
            {" "}— 13 кредитов на старте. Каждая генерация проходит автоматическую проверку соответствия с оригиналом — детали товара не «плывут».
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries</Link></li>
          <li><Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>AI vs фотограф: что выгоднее</Link></li>
          <li><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}

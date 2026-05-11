import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О компании Aiviso — кто мы и зачем сделали AI-фото для маркетплейсов",
  description: "Aiviso — российский SaaS для селлеров на Wildberries и Ozon. Делаем AI-фото товаров на Gemini 3 Pro Image с гарантией сохранения деталей.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "О компании Aiviso",
    description: "AI-фото для карточек Wildberries и Ozon. На Gemini 3 Pro Image с гарантией сохранения деталей товара.",
    url: "/about",
    type: "website",
  },
};

const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "О компании Aiviso",
  url: "https://aiviso.ru/about",
  description: "Кто стоит за Aiviso, для кого делаем сервис и на каких технологиях работаем.",
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_JSONLD) }}
      />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.7 }}>
        <Link href="/" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}>← На главную</Link>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "16px 0 12px", lineHeight: 1.2 }}>
          О компании Aiviso
        </h1>
        <p style={{ color: "#6b7280", fontSize: 17, marginBottom: 32 }}>
          Российский сервис AI-генерации фото для карточек товаров на Wildberries и Ozon.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "32px 0 12px" }}>Зачем мы это делаем</h2>
        <p>
          Большинство селлеров на маркетплейсах сталкиваются с одной проблемой: качественная предметка стоит дорого
          (от 5 000 ₽ за один товар), а от качества фото напрямую зависит конверсия. Мы сделали Aiviso, чтобы любой
          производитель — от мастера-одиночки до бренда — мог за минуты получить профессиональные фото товара
          в нужном формате карточки 3:4 (900×1200) для WB и Ozon, не нанимая фотографа.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "32px 0 12px" }}>Чем мы отличаемся от обычных AI-генераторов</h2>
        <p>
          Главная боль AI-фото товара — «поплывшие» детали: пуговицы исчезают, фурнитура искажается, текстура
          отличается от оригинала. Мы решили это так:
        </p>
        <ul style={{ paddingLeft: 24, marginTop: 12 }}>
          <li><strong>Визуальный анкор.</strong> Перед генерацией Gemini 2.5 Pro анализирует фото и составляет точное описание всех деталей товара.</li>
          <li><strong>QC-агент.</strong> После генерации сравниваем результат с оригиналом по 6 параметрам (силуэт, материал, цвет, конструкция, фурнитура, бренд-элементы).</li>
          <li><strong>Авто-перегенерация.</strong> Если QC показал расхождение — генерация запускается заново. Платите только за финальный, прошедший контроль кадр.</li>
        </ul>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "32px 0 12px" }}>На чём построено</h2>
        <p>
          Используем самые современные модели: <strong>Gemini 3 Pro Image (Nano Banana Pro)</strong> от Google для
          фотореалистичной генерации, <strong>Gemini 2.5 Pro</strong> для анализа товара и текстов, всё через
          Vertex AI. Веб-приложение на Next.js + FastAPI, серверы — в России.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "32px 0 12px" }}>Для кого</h2>
        <p>
          Производители и ремесленники с небольшим объёмом, селлеры с большим каталогом, кто хочет регулярно обновлять
          карточки, и команды, которые переносят товары между Wildberries и Ozon — Aiviso автоматически подбирает
          категории и конвертирует размеры.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "32px 0 12px" }}>Контакты</h2>
        <p>
          Поддержка и вопросы: <a href="mailto:support@aiviso.ru" style={{ color: "#7c3aed" }}>support@aiviso.ru</a>
          <br />
          Исполнитель: ИП Лузановская Алёна Андреевна · ИНН 701740191005 · ОГРНИП 325246800087961
          <br />
          Полные реквизиты — на странице <Link href="/requisites" style={{ color: "#7c3aed" }}>«Реквизиты и контакты»</Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите попробовать?</strong>{" "}
            <Link href="/auth" style={{ color: "#7c3aed", textDecoration: "underline" }}>Регистрация</Link> — 10 кредитов
            на старте, карта не нужна.
          </p>
        </div>
      </main>
    </>
  );
}

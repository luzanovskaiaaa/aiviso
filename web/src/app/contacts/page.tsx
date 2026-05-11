import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты Aiviso — поддержка и связь",
  description: "Связаться с командой Aiviso: email-поддержка, время работы, реквизиты исполнителя.",
  alternates: { canonical: "/contacts" },
  robots: { index: true, follow: true },
};

const styles = {
  h2: { fontSize: 22, fontWeight: 700, margin: "32px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
};

export default function Contacts() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.7, fontSize: 15 }}>
      <Link href="/" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}>← На главную</Link>
      <h1 style={{ fontSize: "clamp(28px, 5.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 12px", lineHeight: 1.2 }}>
        Контакты
      </h1>
      <p style={{ color: "#6b7280", fontSize: 17, marginBottom: 32 }}>Как связаться с командой Aiviso.</p>

      <h2 style={styles.h2}>Поддержка</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 12,
        background: "#f9fafb",
        border: "1px solid #f3f4f6",
        borderRadius: 16,
        padding: "20px 24px",
      }}>
        <div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>Email поддержки</div>
          <a href="mailto:support@aiviso.ru" style={{ color: "#7c3aed", fontSize: 18, fontWeight: 600, textDecoration: "none" }}>support@aiviso.ru</a>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>Время ответа</div>
          <div>В течение рабочего дня (Пн-Пт, 10:00-19:00 МСК)</div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>Telegram-бот для пользователей</div>
          <a href="https://t.me/AIviso_image_bot" target="_blank" rel="noopener noreferrer" style={{ color: "#7c3aed", fontSize: 16, fontWeight: 500, textDecoration: "none" }}>@AIviso_image_bot</a>
          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>принимает фото товаров и присылает готовые кадры — для подключения нужно зарегистрироваться</div>
        </div>
      </div>

      <h2 style={styles.h2}>Что писать в поддержку</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li>Технические вопросы по работе сервиса</li>
        <li>Вопросы по оплате, возврату средств, выставлению счетов на юр.лицо</li>
        <li>Просьбы по удалению учётной записи и персональных данных</li>
        <li>Запросы по обработке персональных данных (по ФЗ-152)</li>
        <li>Партнёрство, реклама, другие предложения</li>
      </ul>
      <p style={styles.p}>
        Для оперативного решения укажи в письме email учётной записи и опиши проблему максимально подробно.
        Если проблема с конкретной генерацией — приложи скриншот.
      </p>

      <h2 style={styles.h2}>Юридическая информация</h2>
      <p style={styles.p}>
        Исполнитель услуг: <strong>ИП Лузановская Алёна Андреевна</strong><br />
        ИНН: 701740191005 · ОГРНИП: 325246800087961<br />
        Полные реквизиты — на странице <Link href="/requisites" style={{ color: "#7c3aed" }}>«Реквизиты»</Link>.
      </p>

      <h2 style={styles.h2}>Документы</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li><Link href="/terms" style={{ color: "#7c3aed" }}>Публичная оферта</Link></li>
        <li><Link href="/privacy" style={{ color: "#7c3aed" }}>Политика конфиденциальности</Link></li>
        <li><Link href="/consent" style={{ color: "#7c3aed" }}>Согласие на обработку персональных данных</Link></li>
        <li><Link href="/refund" style={{ color: "#7c3aed" }}>Политика возврата</Link></li>
        <li><Link href="/delivery" style={{ color: "#7c3aed" }}>Способ получения услуги</Link></li>
      </ul>
    </main>
  );
}

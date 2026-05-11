import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Реквизиты и контакты",
  description: "Юридические реквизиты исполнителя сервиса Aiviso (ИП Лузановская). ИНН, ОГРНИП, контакты для связи.",
  alternates: { canonical: "/requisites" },
  robots: { index: true, follow: true },
};

const styles = {
  h2: { fontSize: 22, fontWeight: 700, margin: "32px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  row: { padding: "12px 0", borderBottom: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" as const } as React.CSSProperties,
  label: { color: "#6b7280", minWidth: 200 } as React.CSSProperties,
  value: { color: "#1f2937", fontWeight: 500, fontFamily: "ui-monospace, monospace" } as React.CSSProperties,
};

export default function Requisites() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.7, fontSize: 15 }}>
      <Link href="/" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}>← На главную</Link>
      <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 8px", lineHeight: 1.2 }}>
        Реквизиты и контакты
      </h1>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Информация об исполнителе услуг сервиса Aiviso.</p>

      <h2 style={styles.h2}>Исполнитель</h2>
      <div>
        <div style={styles.row}>
          <span style={styles.label}>Юридическая форма</span>
          <span style={styles.value}>Индивидуальный предприниматель</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Полное наименование</span>
          <span style={styles.value}>Индивидуальный предприниматель Лузановская Алёна Андреевна</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>ИНН</span>
          <span style={styles.value}>701740191005</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>ОГРНИП</span>
          <span style={styles.value}>325246800087961</span>
        </div>
      </div>

      <h2 style={styles.h2}>Банковские реквизиты</h2>
      <div>
        <div style={styles.row}>
          <span style={styles.label}>Расчётный счёт</span>
          <span style={styles.value}>40802810520000702842</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Банк</span>
          <span style={styles.value}>ООО «Банк Точка»</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>БИК</span>
          <span style={styles.value}>044525104</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>ИНН банка</span>
          <span style={styles.value}>9721194461</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Корреспондентский счёт</span>
          <span style={styles.value}>30101810745374525104</span>
        </div>
      </div>

      <h2 style={styles.h2}>Контакты для связи</h2>
      <div>
        <div style={styles.row}>
          <span style={styles.label}>Email поддержки</span>
          <a href="mailto:support@aiviso.ru" style={{ ...styles.value, color: "#7c3aed" }}>support@aiviso.ru</a>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Сайт</span>
          <a href="https://aiviso.ru" style={{ ...styles.value, color: "#7c3aed" }}>aiviso.ru</a>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Время ответа поддержки</span>
          <span style={styles.value}>в течение рабочего дня</span>
        </div>
      </div>

      <h2 style={styles.h2}>Документы</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li><Link href="/terms" style={{ color: "#7c3aed" }}>Публичная оферта на оказание услуг</Link></li>
        <li><Link href="/privacy" style={{ color: "#7c3aed" }}>Политика обработки персональных данных</Link></li>
        <li><Link href="/consent" style={{ color: "#7c3aed" }}>Согласие на обработку персональных данных</Link></li>
        <li><Link href="/refund" style={{ color: "#7c3aed" }}>Политика возврата денежных средств</Link></li>
        <li><Link href="/delivery" style={{ color: "#7c3aed" }}>Способ получения и сроки оказания услуги</Link></li>
        <li><Link href="/about" style={{ color: "#7c3aed" }}>О компании</Link></li>
      </ul>

      <p style={{ color: "#9ca3af", fontSize: 13, marginTop: 32 }}>
        Если требуется получить договор или счёт на юридическое лицо — напишите на <a href="mailto:support@aiviso.ru" style={{ color: "#7c3aed" }}>support@aiviso.ru</a>.
      </p>
    </main>
  );
}

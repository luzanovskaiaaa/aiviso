import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main style={{
      minHeight: "100dvh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "20px",
      background: "#f9fafb",
    }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{
          fontSize: 88,
          fontWeight: 800,
          color: "#7c3aed",
          letterSpacing: "-0.05em",
          lineHeight: 1,
        }}>404</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: "16px 0 8px" }}>Страница не найдена</h1>
        <p style={{ color: "#6b7280", marginBottom: 28, lineHeight: 1.6 }}>
          Возможно, страница переехала или ссылка устарела.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            На главную
          </Link>
          <Link
            href="/app"
            style={{
              padding: "12px 24px",
              background: "white",
              color: "#374151",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            В Проекты
          </Link>
        </div>
      </div>
    </main>
  );
}

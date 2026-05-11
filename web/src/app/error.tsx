"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Лог в консоль; Sentry/etc можно подключить позже
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

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
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ fontSize: 56, marginBottom: 8 }} aria-hidden="true">⚠</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "8px 0" }}>Что-то пошло не так</h1>
        <p style={{ color: "#6b7280", marginBottom: 20, lineHeight: 1.6 }}>
          Произошла техническая ошибка. Мы уже знаем — попробуй обновить страницу или вернуться на главную.
        </p>
        {error?.digest && (
          <p style={{ color: "#9ca3af", fontSize: 12, marginBottom: 24, fontFamily: "monospace" }}>
            ID ошибки: {error.digest}
          </p>
        )}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => reset()}
            style={{
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              border: "none",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Попробовать снова
          </button>
          <Link
            href="/"
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
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}

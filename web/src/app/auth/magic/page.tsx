"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/lib/api";

export default function MagicPage() {
  // Suspense нужен Next.js 15 для useSearchParams в production-build.
  return (
    <Suspense fallback={<MagicShell label="Авторизация…" />}>
      <MagicInner />
    </Suspense>
  );
}

function MagicInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const token = (searchParams.get("token") || "").trim();
    const rawNext = (searchParams.get("next") || "/app/account").trim();
    // Защита от open-redirect: только относительные пути одиночным слэшем.
    // Запрещаем «//evil.com» и любые абсолютные URL.
    const safeNext =
      rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/app/account";
    if (!token) {
      setError("Ссылка некорректна — нет токена. Попроси новую через бот.");
      return;
    }
    // Если запрос идёт дольше 8с — показываем подсказку «соединение медленное»
    const slowTimer = setTimeout(() => setSlow(true), 8000);
    (async () => {
      try {
        const { data } = await api.post<{ access_token: string; user_id: number; name: string; credits: number }>(
          "/auth/magic/redeem",
          { token },
        );
        clearTimeout(slowTimer);
        localStorage.setItem("access_token", data.access_token);
        router.replace(safeNext);
      } catch (e: any) {
        clearTimeout(slowTimer);
        const detail = e?.response?.data?.detail;
        setError(detail || "Не удалось войти по ссылке. Попроси новую через бот.");
      }
    })();
    return () => clearTimeout(slowTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <MagicShell label="Ссылка не сработала">
        <p className="text-sm text-red-600 mb-4">{error}</p>
        <a
          href="https://t.me/AIviso_image_bot"
          className="inline-block px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold"
        >
          Открыть @AIviso_image_bot
        </a>
        <a
          href="/auth"
          className="block mt-3 text-xs text-gray-500 hover:text-gray-800"
        >
          Войти по email/паролю →
        </a>
      </MagicShell>
    );
  }

  return (
    <MagicShell label={slow ? "Соединение медленнее обычного…" : "Входим в кабинет…"}>
      {slow && <p className="text-xs text-gray-500 mt-2">Ещё немного — или попробуй обновить страницу через 5 секунд.</p>}
    </MagicShell>
  );
}

function MagicShell({ label, children }: { label: string; children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-sm">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-50 mb-4">
          {/* spinner */}
          <span className="inline-block w-6 h-6 border-2 border-violet-600 border-t-transparent rounded-full animate-spin" />
        </div>
        <h1 className="text-base font-semibold text-gray-900 mb-2">{label}</h1>
        {children}
      </div>
    </div>
  );
}

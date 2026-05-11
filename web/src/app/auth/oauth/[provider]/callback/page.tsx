"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { api } from "@/lib/api";

export default function OAuthCallback() {
  const router = useRouter();
  const params = useParams();
  const search = useSearchParams();
  const [status, setStatus] = useState<"working" | "error">("working");
  const [error, setError] = useState("");

  useEffect(() => {
    const provider = String(params.provider);
    const code = search.get("code");
    const stateFromProvider = search.get("state");
    const stateOnFront = sessionStorage.getItem("oauth_state");
    const expectedProvider = sessionStorage.getItem("oauth_provider");

    if (!code) {
      setError("Провайдер не вернул код авторизации.");
      setStatus("error");
      return;
    }
    if (expectedProvider !== provider) {
      setError("Несоответствие провайдера. Начни вход заново.");
      setStatus("error");
      return;
    }
    if (stateFromProvider && stateOnFront && stateFromProvider !== stateOnFront) {
      setError("CSRF-проверка не прошла. Начни вход заново.");
      setStatus("error");
      return;
    }

    api.post(`/auth/oauth/${provider}/exchange`, { code, state: stateFromProvider })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user_name", data.name);
        localStorage.setItem("user_credits", String(data.credits));
        sessionStorage.removeItem("oauth_state");
        sessionStorage.removeItem("oauth_provider");
        router.push("/app");
      })
      .catch(err => {
        setError(err.response?.data?.detail || "Не удалось завершить вход.");
        setStatus("error");
      });
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-white px-4">
      <div className="w-full max-w-md text-center">
        {status === "working" && (
          <>
            <div className="animate-spin w-10 h-10 border-2 border-violet-600 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-700 font-medium">Завершаем вход…</p>
            <p className="text-gray-400 text-sm mt-1">Через секунду перенаправим тебя в кабинет</p>
          </>
        )}
        {status === "error" && (
          <>
            <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h1 className="font-semibold mb-2">Не удалось войти</h1>
            <p className="text-gray-600 text-sm mb-4">{error}</p>
            <button onClick={() => router.push("/auth")}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium">
              Вернуться к входу
            </button>
          </>
        )}
      </div>
    </div>
  );
}

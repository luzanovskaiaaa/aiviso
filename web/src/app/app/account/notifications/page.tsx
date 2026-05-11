"use client";
/**
 * Уведомления — подключение @AIviso_image_bot для отправки готовых фото
 * после генерации.
 *
 * Поток:
 *   1. Пользователь жмёт «Подключить Telegram».
 *   2. POST /auth/telegram/start-connect → код + deep link.
 *   3. UI показывает кнопку «Открыть бота» (deep link с auto-/start CODE)
 *      и инструкцию на случай ручного ввода.
 *   4. Polling /auth/telegram/status каждые 3 сек, пока connected=true.
 */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

interface TgStatus {
  connected: boolean;
  username?: string | null;
  chat_id?: number | null;
  pending_code?: string | null;
  pending_deep_link?: string | null;
}

interface StartConnectResp {
  code: string;
  deep_link: string;
  bot_username: string;
  expires_in_min: number;
}

export default function NotificationsPage() {
  const router = useRouter();
  const [status, setStatus] = useState<TgStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [connect, setConnect] = useState<StartConnectResp | null>(null);
  const [error, setError] = useState<string | null>(null);
  const pollRef = useRef<number | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    refreshStatus();
    return () => { if (pollRef.current) window.clearInterval(pollRef.current); };
  }, []);

  const refreshStatus = async () => {
    try {
      const { data } = await api.get<TgStatus>("/auth/telegram/status");
      setStatus(data);
      if (data.connected && pollRef.current) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
        setConnect(null);
      }
    } catch {
      setStatus({ connected: false });
    }
  };

  const startConnect = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.post<StartConnectResp>("/auth/telegram/start-connect");
      setConnect(data);
      // запускаем polling — как только бот ответит /start, status станет connected=true
      if (pollRef.current) window.clearInterval(pollRef.current);
      pollRef.current = window.setInterval(refreshStatus, 3000);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Не удалось получить код подключения");
    } finally { setLoading(false); }
  };

  const disconnect = async () => {
    if (!confirm("Отвязать Telegram? Готовые фото перестанут приходить туда.")) return;
    setLoading(true);
    try {
      await api.post("/auth/telegram/disconnect");
      setStatus({ connected: false });
      setConnect(null);
    } catch (err: any) {
      alert(err.response?.data?.detail || "Ошибка");
    } finally { setLoading(false); }
  };

  const copyCode = async () => {
    if (!connect) return;
    try { await navigator.clipboard.writeText(connect.code); } catch {}
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/account")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← ЛК</button>
        <h1 className="font-semibold text-sm sm:text-base">Уведомления</h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
        {/* Telegram-бот — основная фича */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-base">Telegram</h2>
              <p className="text-xs text-gray-500 leading-snug">Готовые фото после каждой генерации будут приходить в Telegram-бота — удобно проверять с телефона.</p>
            </div>
          </div>

          {status === null ? (
            <div className="animate-pulse h-9 w-32 bg-gray-100 rounded-xl" />
          ) : status.connected ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm bg-green-50 border border-green-100 text-green-800 rounded-xl px-3 py-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Подключено{status.username ? ` как @${status.username}` : ""}</span>
              </div>
              <button onClick={disconnect} disabled={loading}
                className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl">
                Отвязать
              </button>
            </div>
          ) : connect ? (
            <div className="space-y-3">
              <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 text-sm text-violet-900">
                <p className="font-medium mb-1">Шаг 1 — Открой бота</p>
                <a href={connect.deep_link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium">
                  Открыть @{connect.bot_username} →
                </a>
                <p className="text-xs text-violet-700 mt-3">При открытии бот сразу получит код подключения. Просто нажми «Старт» / «Запустить».</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs text-gray-600">
                <p className="font-medium text-gray-700 mb-1.5">Не открывается ссылка? Вручную:</p>
                <ol className="list-decimal list-inside space-y-0.5">
                  <li>Открой Telegram и найди <span className="font-mono">@{connect.bot_username}</span></li>
                  <li>Отправь команду: <span className="font-mono bg-white px-1.5 py-0.5 rounded">/start {connect.code}</span> <button onClick={copyCode} className="ml-1 text-violet-600 hover:underline">копировать код</button></li>
                </ol>
                <p className="text-[11px] text-gray-400 mt-2">Код активен {connect.expires_in_min} мин. После привязки эта страница автоматически обновится.</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="inline-block w-3 h-3 border-2 border-violet-300 border-t-violet-600 rounded-full animate-spin" />
                Ждём подключения…
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {error && <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-2">{error}</p>}
              <button onClick={startConnect} disabled={loading}
                className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium disabled:opacity-50">
                {loading ? "Готовим код…" : "Подключить Telegram"}
              </button>
            </div>
          )}
        </div>

        {/* Email и push — placeholder, оставляем как есть */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-medium text-gray-900 mb-1">Email и браузерные push</h2>
              <p className="text-xs text-gray-500 leading-snug">Дайджесты раз в день/неделю, низкий баланс, статусы публикаций — придут позже.</p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">скоро</span>
          </div>
        </div>
      </div>
    </div>
  );
}

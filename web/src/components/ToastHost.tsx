"use client";
import { useEffect, useState } from "react";
import {
  _onToast, _onConfirm, ToastEvent, ConfirmRequest,
} from "@/lib/toast";

/**
 * Хост toast'ов и confirm-модалки.
 *
 * Должен быть отрендерен один раз в корневом layout приложения.
 * Дальше любой код может звать `toast.error()` / `confirmDialog()` —
 * хост поймает событие и отобразит UI.
 */
export default function ToastHost() {
  const [toasts, setToasts] = useState<ToastEvent[]>([]);
  const [confirms, setConfirms] = useState<ConfirmRequest[]>([]);

  useEffect(() => {
    const off1 = _onToast((t) => {
      setToasts((prev) => [...prev, t]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== t.id));
      }, t.ttl);
    });
    const off2 = _onConfirm((c) => setConfirms((prev) => [...prev, c]));
    return () => { off1(); off2(); };
  }, []);

  const close = (id: number) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const resolveConfirm = (id: number, value: boolean) => {
    setConfirms((prev) => {
      const target = prev.find((c) => c.id === id);
      if (target) target.resolve(value);
      return prev.filter((c) => c.id !== id);
    });
  };

  return (
    <>
      {/* Toasts — стек справа сверху, на мобайле прижимаются к низу */}
      <div
        aria-live="polite"
        className="fixed z-[1000] flex flex-col gap-2 pointer-events-none px-3 sm:px-0
                   bottom-4 left-1/2 -translate-x-1/2 sm:bottom-auto sm:left-auto sm:translate-x-0
                   sm:top-4 sm:right-4 w-full max-w-sm sm:max-w-md"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role={t.kind === "error" ? "alert" : "status"}
            onClick={() => close(t.id)}
            style={{ animation: "aiviso-toast-in 180ms ease-out" }}
            className={`pointer-events-auto cursor-pointer rounded-xl border shadow-lg px-4 py-3 text-sm
                       transition-all
                       ${t.kind === "error"   ? "bg-red-50 border-red-200 text-red-800"
                       : t.kind === "success" ? "bg-green-50 border-green-200 text-green-800"
                       : "bg-violet-50 border-violet-200 text-violet-800"}`}
          >
            <div className="flex items-start gap-2">
              <span className="text-base leading-none mt-0.5" aria-hidden>
                {t.kind === "error" ? "⚠️" : t.kind === "success" ? "✅" : "ℹ️"}
              </span>
              <span className="flex-1 leading-snug">{t.message}</span>
              <button
                aria-label="Закрыть"
                className="text-current opacity-50 hover:opacity-100 -mr-1 -mt-1 px-1"
                onClick={(e) => { e.stopPropagation(); close(t.id); }}
              >×</button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirm-модалка — рендерим только верхний из очереди */}
      {confirms.length > 0 && (
        <ConfirmModal
          message={confirms[0].message}
          onAnswer={(ok) => resolveConfirm(confirms[0].id, ok)}
        />
      )}

      {/* Глобальная keyframe-анимация — без styled-jsx, чтобы не тащить пакет */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes aiviso-toast-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      ` }} />
    </>
  );
}

function ConfirmModal({ message, onAnswer }: { message: string; onAnswer: (ok: boolean) => void }) {
  return (
    <div
      className="fixed inset-0 z-[1100] bg-black/40 flex items-center justify-center p-4"
      onClick={() => onAnswer(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm text-gray-900 mb-5 leading-relaxed">{message}</p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => onAnswer(false)}
            className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 active:scale-[0.98] transition"
          >
            Отмена
          </button>
          <button
            onClick={() => onAnswer(true)}
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white active:scale-[0.98] transition"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
}

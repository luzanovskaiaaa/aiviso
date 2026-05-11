"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

export default function SecurityPage() {
  const router = useRouter();
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [msgKind, setMsgKind] = useState<"info" | "error" | "ok">("info");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (!oldPwd) { setMsg("Введи текущий пароль"); setMsgKind("error"); return; }
    if (newPwd.length < 8) { setMsg("Новый пароль должен быть не менее 8 символов"); setMsgKind("error"); return; }
    if (newPwd !== confirmPwd) { setMsg("Пароли не совпадают"); setMsgKind("error"); return; }
    if (oldPwd === newPwd) { setMsg("Новый пароль совпадает со старым"); setMsgKind("error"); return; }

    setSubmitting(true);
    try {
      await api.post("/auth/change-password", { old_password: oldPwd, new_password: newPwd });
      setMsg("Пароль изменён");
      setMsgKind("ok");
      setOldPwd(""); setNewPwd(""); setConfirmPwd("");
    } catch (err: any) {
      setMsg(err.response?.data?.detail || "Не удалось сменить пароль");
      setMsgKind("error");
    } finally {
      setSubmitting(false);
    }
  };

  const msgClass = msgKind === "ok"
    ? "text-xs text-green-700 bg-green-50 border border-green-200 rounded-lg p-2"
    : msgKind === "error"
      ? "text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-2"
      : "text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-2";

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/account")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← ЛК</button>
        <h1 className="font-semibold text-sm sm:text-base">Безопасность</h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
        <form onSubmit={submit} className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 space-y-3">
          <h2 className="text-sm font-medium text-gray-900">Сменить пароль</h2>
          <input type="password" className="input-field text-sm" placeholder="Текущий пароль"
            value={oldPwd} onChange={e => setOldPwd(e.target.value)} autoComplete="current-password" />
          <input type="password" className="input-field text-sm" placeholder="Новый пароль (мин. 8 символов)"
            value={newPwd} onChange={e => setNewPwd(e.target.value)} autoComplete="new-password" minLength={8} />
          <input type="password" className="input-field text-sm" placeholder="Повтори новый пароль"
            value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)} autoComplete="new-password" />
          {msg && <p className={msgClass}>{msg}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-5 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl text-sm font-medium transition-all active:scale-[0.98]"
          >
            {submitting ? "Меняем…" : "Сменить"}
          </button>
        </form>

        <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-sm font-medium text-gray-900">Двухфакторная аутентификация (2FA)</h2>
            <span className="text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">скоро</span>
          </div>
          <p className="text-xs text-gray-500 leading-snug">SMS / TOTP — в следующих итерациях</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-sm font-medium text-gray-900">Активные сессии</h2>
            <span className="text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">скоро</span>
          </div>
          <p className="text-xs text-gray-500 leading-snug">Список устройств и возможность выйти из всех сессий — в следующих итерациях</p>
        </div>
      </div>
    </div>
  );
}

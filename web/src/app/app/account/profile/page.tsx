"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

interface LegalEntity {
  enabled: boolean;
  org_name?: string | null;
  inn?: string | null;
  kpp?: string | null;
  legal_address?: string | null;
  bik?: string | null;
  account?: string | null;
  bank?: string | null;
}

interface Me {
  id: number;
  email: string;
  name: string;
  credits: number;
  phone?: string | null;
  phone_verified?: boolean;
  legal_entity?: LegalEntity | null;
}

const EMPTY_LE: LegalEntity = {
  enabled: false,
  org_name: "",
  inn: "",
  kpp: "",
  legal_address: "",
  bik: "",
  account: "",
  bank: "",
};

export default function ProfileSubPage() {
  const router = useRouter();
  const [me, setMe] = useState<Me | null>(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // Юр.лицо — отдельная форма, отдельный статус сохранения
  const [le, setLe] = useState<LegalEntity>(EMPTY_LE);
  const [leStatus, setLeStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [leError, setLeError] = useState<string | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    api.get<Me>("/auth/me").then(({ data }) => {
      setMe(data);
      setName(data.name || "");
      if (data.legal_entity) {
        setLe({ ...EMPTY_LE, ...data.legal_entity });
      }
    }).catch(() => router.push("/auth"));
  }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!me) return;
    const trimmed = name.trim();
    if (!trimmed) { setError("Имя не может быть пустым"); return; }
    if (trimmed === me.name) { setStatus("saved"); setTimeout(() => setStatus("idle"), 1500); return; }
    setStatus("saving");
    setError(null);
    try {
      const { data } = await api.patch<Me>("/auth/me", { name: trimmed });
      setMe(data);
      localStorage.setItem("user_name", data.name);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err: any) {
      setStatus("error");
      setError(err.response?.data?.detail || "Не удалось сохранить");
    }
  };

  const saveLegalEntity = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeStatus("saving");
    setLeError(null);
    try {
      const { data } = await api.patch<Me>("/auth/me", { legal_entity: le });
      setMe(data);
      if (data.legal_entity) setLe({ ...EMPTY_LE, ...data.legal_entity });
      setLeStatus("saved");
      setTimeout(() => setLeStatus("idle"), 2000);
    } catch (err: any) {
      setLeStatus("error");
      setLeError(err.response?.data?.detail || "Не удалось сохранить реквизиты");
    }
  };

  const toggleLegalEntity = async (enabled: boolean) => {
    const next = { ...le, enabled };
    setLe(next);
    // Persist смену тумблера сразу — даже без заполнения полей.
    try {
      const { data } = await api.patch<Me>("/auth/me", { legal_entity: next });
      setMe(data);
    } catch {
      // молча — если не сохранилось, локальный стейт всё равно обновлён;
      // юзер увидит ошибку при попытке сохранить поля.
    }
  };

  const dirty = me ? name.trim() !== me.name : false;

  const updateLeField = (k: keyof LegalEntity, v: string) => setLe(prev => ({ ...prev, [k]: v }));

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/account")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← ЛК</button>
        <h1 className="font-semibold text-sm sm:text-base">Профиль</h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
        {!me ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="animate-pulse h-4 w-32 bg-gray-200 rounded mb-3" />
            <div className="animate-pulse h-4 w-48 bg-gray-200 rounded" />
          </div>
        ) : (
          <>
            <form onSubmit={save} className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 space-y-4">
              <h2 className="text-sm font-medium text-gray-500">Личные данные</h2>

              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Имя</label>
                <input
                  type="text"
                  className="input-field text-sm w-full"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  maxLength={255}
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Email</label>
                <input
                  type="email"
                  className="input-field text-sm w-full bg-gray-50 text-gray-500 cursor-not-allowed"
                  value={me.email}
                  disabled
                />
                <p className="text-[11px] text-gray-400 mt-1">Email сейчас сменить нельзя — напиши в поддержку, если очень нужно.</p>
              </div>

              {error && <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-2">{error}</p>}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={!dirty || status === "saving"}
                  className="px-5 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl text-sm font-medium transition-all active:scale-[0.98]"
                >
                  {status === "saving" ? "Сохраняем…" : "Сохранить"}
                </button>
                {status === "saved" && <span className="text-xs text-green-600">Сохранено</span>}
              </div>
            </form>

            {/* Подтверждение телефона — даёт +10 кредитов один раз */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-sm font-medium text-gray-700">Телефон</h2>
                  {me.phone_verified ? (
                    <p className="text-xs text-gray-500 mt-0.5">
                      <span className="text-green-600 font-medium">✓ Подтверждён</span>
                      {me.phone && <span className="text-gray-700 ml-1">{me.phone}</span>}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-0.5">
                      Подтверди номер любым способом — получишь <span className="text-violet-600 font-medium">+10 кредитов</span> на баланс.
                    </p>
                  )}
                </div>
              </div>

              {!me.phone_verified && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={async () => {
                      try {
                        const { data } = await api.get<{ authorize_url: string; state: string }>("/auth/oauth/yandex/start");
                        sessionStorage.setItem("oauth_state", data.state);
                        sessionStorage.setItem("oauth_provider", "yandex");
                        window.location.href = data.authorize_url;
                      } catch { alert("Не удалось запустить вход через Яндекс"); }
                    }}
                    className="px-3 py-2.5 border border-gray-200 hover:border-red-300 rounded-xl text-xs sm:text-sm font-medium text-left flex items-center gap-2 active:scale-[0.98]"
                  >
                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">Я</span>
                    <span>Через Яндекс</span>
                  </button>

                  <button
                    onClick={() => router.push("/app/account/notifications")}
                    className="px-3 py-2.5 border border-gray-200 hover:border-sky-300 rounded-xl text-xs sm:text-sm font-medium text-left flex items-center gap-2 active:scale-[0.98]"
                  >
                    <span className="w-5 h-5 rounded bg-sky-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">TG</span>
                    <span>Через Telegram</span>
                  </button>

                  <button
                    disabled
                    title="Скоро — отправка SMS-кода через SMSC"
                    className="px-3 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-left flex items-center gap-2 opacity-50 cursor-not-allowed"
                  >
                    <span className="w-5 h-5 rounded bg-gray-400 text-white text-[10px] font-bold flex items-center justify-center shrink-0">SMS</span>
                    <span>SMS · скоро</span>
                  </button>
                </div>
              )}
            </div>

            {/* Реквизиты юр. лица — для оплаты по счёту */}
            <form onSubmit={saveLegalEntity} className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="text-sm font-medium text-gray-700">Реквизиты юр. лица</h2>
                  <p className="text-[11px] text-gray-400 mt-0.5">Для оплаты по счёту от ИП или ООО. Включи тумблер и заполни поля.</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={le.enabled}
                  onClick={() => toggleLegalEntity(!le.enabled)}
                  className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${le.enabled ? "bg-violet-600" : "bg-gray-200"}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${le.enabled ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>

              {le.enabled && (
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Название организации</label>
                    <input type="text" className="input-field text-sm w-full" value={le.org_name || ""} onChange={e => updateLeField("org_name", e.target.value)} maxLength={255} placeholder="ООО «Ромашка» или ИП Иванов И.И." />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">ИНН</label>
                      <input type="text" inputMode="numeric" className="input-field text-sm w-full" value={le.inn || ""} onChange={e => updateLeField("inn", e.target.value.replace(/\D/g, ""))} maxLength={12} placeholder="10 или 12 цифр" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">КПП <span className="text-gray-300">(если есть)</span></label>
                      <input type="text" inputMode="numeric" className="input-field text-sm w-full" value={le.kpp || ""} onChange={e => updateLeField("kpp", e.target.value.replace(/\D/g, ""))} maxLength={9} placeholder="9 цифр" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Юридический адрес</label>
                    <input type="text" className="input-field text-sm w-full" value={le.legal_address || ""} onChange={e => updateLeField("legal_address", e.target.value)} maxLength={512} placeholder="Индекс, город, улица, дом" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">БИК</label>
                      <input type="text" inputMode="numeric" className="input-field text-sm w-full" value={le.bik || ""} onChange={e => updateLeField("bik", e.target.value.replace(/\D/g, ""))} maxLength={9} placeholder="9 цифр" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Расчётный счёт</label>
                      <input type="text" inputMode="numeric" className="input-field text-sm w-full" value={le.account || ""} onChange={e => updateLeField("account", e.target.value.replace(/\D/g, ""))} maxLength={20} placeholder="20 цифр" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Банк</label>
                    <input type="text" className="input-field text-sm w-full" value={le.bank || ""} onChange={e => updateLeField("bank", e.target.value)} maxLength={255} placeholder="ПАО «Сбербанк»" />
                  </div>

                  {leError && <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-2">{leError}</p>}

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={leStatus === "saving"}
                      className="px-5 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl text-sm font-medium transition-all active:scale-[0.98]"
                    >
                      {leStatus === "saving" ? "Сохраняем…" : "Сохранить реквизиты"}
                    </button>
                    {leStatus === "saved" && <span className="text-xs text-green-600">Сохранено</span>}
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

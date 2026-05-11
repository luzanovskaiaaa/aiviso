"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

interface Me { credits: number }
interface Pkg { key: string; credits: number; amount_rub: number; popular: boolean; per_credit_rub: number }
interface Status { yookassa: boolean; tinkoff: boolean }
interface PaymentRow {
  id: number;
  package: string;
  credits: number;
  amount_rub: number;
  provider: string;
  status: string;
  created_at: string;
  confirmed_at?: string | null;
}

const STATUS_LABEL: Record<string, { text: string; color: string }> = {
  pending:   { text: "Ожидает оплаты", color: "bg-amber-50 text-amber-700 border-amber-200" },
  confirmed: { text: "Оплачен",        color: "bg-green-50 text-green-700 border-green-200" },
  failed:    { text: "Ошибка",         color: "bg-red-50 text-red-700 border-red-200" },
  cancelled: { text: "Отменён",        color: "bg-gray-50 text-gray-600 border-gray-200" },
  refunded:  { text: "Возврат",        color: "bg-blue-50 text-blue-700 border-blue-200" },
};

export default function BillingPage() {
  // Suspense нужен Next.js 15 для useSearchParams в production-build — иначе prerender падает.
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <BillingPageInner />
    </Suspense>
  );
}

function BillingPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [me, setMe] = useState<Me | null>(null);
  const [packages, setPackages] = useState<Pkg[]>([]);
  const [status, setStatus] = useState<Status | null>(null);
  const [history, setHistory] = useState<PaymentRow[]>([]);
  const [loadingPkg, setLoadingPkg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.get("payment") === "success") {
      setSuccessMsg("Оплата принята. Кредиты появятся на балансе в течение 1-2 минут.");
      const interval = setInterval(() => refresh(), 4000);
      const stop = setTimeout(() => clearInterval(interval), 30000);
      // Чистим query-param, чтобы при F5 успех не показывался повторно
      router.replace("/app/account/billing");
      return () => { clearInterval(interval); clearTimeout(stop); };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = async () => {
    try {
      const [meRes, pkgRes, stRes, histRes] = await Promise.all([
        api.get<Me>("/auth/me"),
        api.get<Pkg[]>("/billing/packages"),
        api.get<Status>("/billing/status"),
        api.get<PaymentRow[]>("/billing/history").catch(() => ({ data: [] })),
      ]);
      setMe(meRes.data);
      setPackages(pkgRes.data);
      setStatus(stRes.data);
      setHistory((histRes as any).data || []);
    } catch {
      router.push("/auth");
    }
  };

  const buy = async (pkgKey: string) => {
    setErrorMsg(null);
    setLoadingPkg(pkgKey);
    try {
      const { data } = await api.post<{ confirmation_url: string }>("/billing/checkout", {
        package: pkgKey,
        provider: "yookassa",
        return_url: `${window.location.origin}/app/account/billing?payment=success`,
      });
      window.location.href = data.confirmation_url;
    } catch (err: any) {
      setErrorMsg(err.response?.data?.detail || "Не удалось создать платёж");
      setLoadingPkg(null);
    }
  };

  const billingDisabled = status && !status.yookassa && !status.tinkoff;

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/account")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← ЛК</button>
        <h1 className="font-semibold text-sm sm:text-base">Биллинг</h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5">
        {successMsg && (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 text-sm">{successMsg}</div>
        )}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">{errorMsg}</div>
        )}

        <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-5 sm:p-6 text-white">
          <div className="text-xs uppercase tracking-wider opacity-80 mb-1">Баланс</div>
          <div className="text-4xl font-bold mb-1">{me?.credits ?? "…"}</div>
          <div className="text-sm opacity-80">
            кредитов · ≈ {me ? Math.floor(me.credits / 6) : "—"} Pro / {me ? Math.floor(me.credits / 4) : "—"} Flash
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-3">Пополнить баланс</h2>
          {/* Подсказка про cost-of-genereation: 1 Pro-кадр = 6 кр, 1 Flash-кадр = 4 кр */}
          <p className="text-[11px] text-gray-400 mb-3">
            1 Pro-кадр = 6 кр (премиум-качество), 1 Flash-кадр = 4 кр (быстрее, экономнее).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {packages.map(p => {
              const proGens = Math.floor(p.credits / 6);
              const flashGens = Math.floor(p.credits / 4);
              const proPrice = (p.amount_rub * 6 / p.credits).toFixed(2);
              const flashPrice = (p.amount_rub * 4 / p.credits).toFixed(2);
              return (
                <div key={p.key} className={`relative bg-white rounded-2xl border p-4 ${p.popular ? "border-violet-300 ring-1 ring-violet-200" : "border-gray-100"}`}>
                  {p.popular && <span className="absolute -top-2 left-4 text-[10px] uppercase tracking-wider font-bold text-white bg-violet-600 px-2 py-0.5 rounded">Выгодно</span>}
                  <div className="text-2xl font-bold">{p.credits}</div>
                  <div className="text-xs text-gray-500 mb-3">кредитов</div>
                  <div className="text-sm font-semibold mb-0.5">{p.amount_rub.toLocaleString("ru-RU")} ₽</div>
                  <div className="text-[11px] text-gray-400 mb-3">{p.per_credit_rub.toFixed(2)} ₽/кредит</div>

                  {/* Сколько изображений и почём */}
                  <div className="bg-gray-50 rounded-lg px-2.5 py-2 mb-3 text-[11px] leading-snug">
                    <div className="flex items-baseline justify-between text-gray-700">
                      <span><b>{proGens}</b> Pro-кадров</span>
                      <span className="text-gray-500">по {proPrice} ₽</span>
                    </div>
                    <div className="flex items-baseline justify-between text-gray-700 mt-1">
                      <span><b>{flashGens}</b> Flash-кадров</span>
                      <span className="text-gray-500">по {flashPrice} ₽</span>
                    </div>
                  </div>

                  <button
                    onClick={() => buy(p.key)}
                    disabled={loadingPkg !== null || !!billingDisabled}
                    className="w-full py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-lg text-xs font-medium transition-colors active:scale-[0.97]"
                  >
                    {loadingPkg === p.key ? "Создаём..." : "Пополнить"}
                  </button>
                </div>
              );
            })}
          </div>
          {billingDisabled && (
            <p className="text-[11px] text-amber-600 mt-2">
              Платежи временно недоступны — провайдер ещё не подключён. Напиши на support@aiviso.ru, начислим вручную.
            </p>
          )}
          <p className="text-[11px] text-gray-400 mt-2">
            Оплата картой через ЮKassa. Чек 54-ФЗ приходит автоматически на email после оплаты.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">
          <h2 className="text-sm font-medium text-gray-500 mb-3">История платежей</h2>
          {history.length === 0 ? (
            <p className="text-sm text-gray-400">Платежей пока нет — купи первый пакет выше, попадёт сюда автоматически.</p>
          ) : (
            <div className="space-y-2">
              {history.map(p => {
                const st = STATUS_LABEL[p.status] || { text: p.status, color: "bg-gray-50 text-gray-600 border-gray-200" };
                return (
                  <div key={p.id} className="flex items-center justify-between gap-3 py-2 border-b border-gray-50 last:border-b-0">
                    <div>
                      <div className="text-sm font-medium">{p.credits} кредитов · {p.amount_rub.toLocaleString("ru-RU")} ₽</div>
                      <div className="text-[11px] text-gray-400">
                        {new Date(p.created_at).toLocaleString("ru-RU")} · {p.provider}
                      </div>
                    </div>
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded border ${st.color}`}>{st.text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-medium text-gray-900 mb-1">Оплата по счёту (юр.лицо)</h2>
              <p className="text-xs text-gray-500 leading-snug">
                Заполни реквизиты юр.лица в <button onClick={() => router.push("/app/account/profile")} className="text-violet-600 hover:underline">Профиле</button>, потом напиши на <a href="mailto:support@aiviso.ru" className="text-violet-600 hover:underline">support@aiviso.ru</a> — выставим счёт с НДС-документами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

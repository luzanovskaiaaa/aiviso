"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

type Provider = "wb" | "ozon" | "ym";
type Step = "choose" | "credentials" | "syncing" | "done";

const PROVIDERS: { key: Provider; name: string; emoji: string; color: string; desc: string }[] = [
  { key: "wb",   name: "Wildberries",   emoji: "🟣", color: "violet", desc: "JWT-токен из ЛК продавца" },
  { key: "ozon", name: "Ozon",          emoji: "🔵", color: "blue",   desc: "Client-Id + Api-Key" },
  { key: "ym",   name: "Яндекс Маркет", emoji: "🟡", color: "amber",  desc: "Скоро" },
];

const HOWTO: Record<Provider, { title: string; steps: string[]; link: string }> = {
  wb: {
    title: "Как получить токен Wildberries",
    steps: [
      "Зайди в seller.wildberries.ru → Настройки → Доступ к API",
      "Нажми «Создать токен», выбери «Для интеграции вручную»",
      "Тип: «Базовый» или «Персональный». Выдай категории: Контент + Маркетплейс",
      "Уровень доступа: Чтение и запись (нужно для загрузки фото)",
      "Скопируй токен и вставь сюда (показывается один раз!)",
    ],
    link: "https://seller.wildberries.ru/supplier-settings/access-to-api",
  },
  ozon: {
    title: "Как получить ключи Ozon",
    steps: [
      "Зайди в seller.ozon.ru → Настройки → Seller API",
      "Нажми «Сгенерировать ключ», тип «Admin» (для записи фото)",
      "Скопируй Client-Id (слева) и Api-Key (после генерации)",
      "Вставь оба в поля ниже",
    ],
    link: "https://seller.ozon.ru/app/settings/api-keys",
  },
  ym: {
    title: "Яндекс Маркет",
    steps: ["Backend для Яндекс Маркета пока в разработке"],
    link: "https://partner.market.yandex.ru/",
  },
};

export default function ConnectPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("choose");
  const [provider, setProvider] = useState<Provider>("wb");
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [clientId, setClientId] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [error, setError] = useState("");
  const [accountId, setAccountId] = useState<number | null>(null);
  const [imported, setImported] = useState(0);

  const submitCreds = async () => {
    setError("");
    const body: any = { provider, name: name || PROVIDERS.find(p => p.key === provider)?.name, api_key: apiKey.trim() };
    if (provider === "ozon") body.client_id = clientId.trim();
    if (provider === "ym") body.business_id = parseInt(businessId || "0", 10);
    try {
      const { data } = await api.post<{ id: number }>("/marketplaces", body);
      setAccountId(data.id);
      setStep("syncing");
      // Сразу запускаем импорт
      const r = await api.post<{ imported: number }>(`/marketplaces/${data.id}/cards/import`);
      setImported(r.data.imported);
      setStep("done");
    } catch (err: any) {
      setError(err.response?.data?.detail || "Ошибка");
      // если упали на синхронизации — аккаунт всё равно создан, юзер увидит его в ЛК
      if (accountId) setStep("done");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/marketplaces")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← Магазины</button>
        <h1 className="font-semibold text-sm sm:text-base">Подключение магазина</h1>
      </div>

      {/* Прогресс-бар */}
      <div className="max-w-2xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs">
          {(["choose", "credentials", "syncing", "done"] as Step[]).map((s, i) => {
            const stepIdx = ["choose", "credentials", "syncing", "done"].indexOf(step);
            const isActive = i === stepIdx;
            const isPast = i < stepIdx;
            return (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                  isPast ? "bg-violet-600 text-white" :
                  isActive ? "bg-violet-100 text-violet-700 border-2 border-violet-500" :
                  "bg-gray-100 text-gray-400"
                }`}>{isPast ? "✓" : i + 1}</div>
                <span className={`${isActive ? "font-medium text-gray-900" : "text-gray-400"}`}>
                  {s === "choose" && "Магазин"}
                  {s === "credentials" && "Токен"}
                  {s === "syncing" && "Импорт"}
                  {s === "done" && "Готово"}
                </span>
                {i < 3 && <div className={`flex-1 h-0.5 ${isPast ? "bg-violet-600" : "bg-gray-200"}`} />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Шаг 1: выбор магазина */}
        {step === "choose" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Какой магазин подключаем?</h2>
            <p className="text-gray-500 mb-6 text-sm">Можно подключить несколько магазинов разных провайдеров — и работать с ними параллельно.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {PROVIDERS.map(p => (
                <button
                  key={p.key}
                  onClick={() => setProvider(p.key)}
                  className={`p-5 rounded-2xl border-2 text-center transition-all ${
                    provider === p.key ? "border-violet-500 bg-violet-50" : "border-gray-100 hover:border-violet-200 bg-white"
                  }`}
                >
                  <div className="text-3xl mb-2">{p.emoji}</div>
                  <div className="font-medium text-sm">{p.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{p.desc}</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep("credentials")}
              disabled={provider === "ym"}
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium disabled:opacity-50"
            >
              {provider === "ym" ? "Яндекс Маркет — пока в разработке" : "Дальше →"}
            </button>
          </div>
        )}

        {/* Шаг 2: креды */}
        {step === "credentials" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">{HOWTO[provider].title}</h2>
            <a href={HOWTO[provider].link} target="_blank" className="inline-block text-sm text-violet-600 hover:text-violet-800 mb-4">
              Открыть ЛК {PROVIDERS.find(p => p.key === provider)?.name} →
            </a>
            <ol className="bg-violet-50 border border-violet-100 rounded-2xl p-5 mb-6 list-decimal list-inside space-y-1.5 text-sm text-violet-900">
              {HOWTO[provider].steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1">Название магазина (как тебе удобно)</label>
                <input value={name} onChange={e => setName(e.target.value)}
                  placeholder="Например: Стильно и дорого"
                  className="input-field w-full" />
              </div>

              {provider === "ozon" && (
                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1">Client-Id</label>
                  <input value={clientId} onChange={e => setClientId(e.target.value)}
                    placeholder="1111111" className="input-field w-full" />
                </div>
              )}

              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1">
                  {provider === "wb" ? "JWT-токен" : "Api-Key"}
                </label>
                <textarea value={apiKey} onChange={e => setApiKey(e.target.value)} rows={3}
                  placeholder={provider === "wb" ? "eyJhbGci..." : "abcd1234-ef56-7890-..."}
                  className="input-field w-full font-mono text-xs" />
              </div>
            </div>

            {error && <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">⚠ {error}</div>}

            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep("choose")} className="px-4 py-2 text-gray-500 hover:text-gray-700 text-sm">← Назад</button>
              <button
                onClick={submitCreds}
                disabled={!apiKey || (provider === "ozon" && !clientId)}
                className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium disabled:opacity-50"
              >
                Подключить и начать импорт →
              </button>
            </div>
          </div>
        )}

        {/* Шаг 3: синхронизация */}
        {step === "syncing" && (
          <div className="text-center py-16">
            <div className="animate-spin w-12 h-12 border-2 border-violet-600 border-t-transparent rounded-full mx-auto mb-6" />
            <h2 className="text-xl font-semibold mb-2">Тянем твои карточки...</h2>
            <p className="text-gray-500">Это займёт от 5 секунд до минуты — зависит от количества товаров.</p>
          </div>
        )}

        {/* Шаг 4: готово */}
        {step === "done" && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-semibold mb-2">{PROVIDERS.find(p => p.key === provider)?.name} подключён</h2>
            <p className="text-gray-500 mb-2">Импортировано карточек: <b className="text-violet-600">{imported}</b></p>
            {error && <p className="text-sm text-amber-600 mb-4">⚠ {error}</p>}
            <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
              Теперь в разделе «Маркетплейсы» появился новый таб с твоими карточками.
              Жми «Реновировать» на любой — она станет новым проектом в Aiviso.
            </p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => router.push("/app/marketplaces")}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium">
                Перейти в магазин →
              </button>
              <button onClick={() => { setStep("choose"); setApiKey(""); setClientId(""); setName(""); setError(""); setAccountId(null); }}
                className="px-6 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl text-sm">
                + Подключить ещё один
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

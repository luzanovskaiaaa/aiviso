"use client";
import { useRouter } from "next/navigation";
import AppNav from "@/components/layout/AppNav";

export default function LegalPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/account")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← ЛК</button>
        <h1 className="font-semibold text-sm sm:text-base">Юр.лицо</h1>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
          <span className="inline-block text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded mb-3">скоро</span>
          <h2 className="font-semibold mb-2">Оплата по счёту для ИП и ООО</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Подключим в следующей итерации. Здесь можно будет:
          </p>
          <ul className="text-sm text-gray-700 space-y-1.5 ml-5 list-disc">
            <li>Указать реквизиты ИП / ООО (ИНН, КПП, расчётный счёт, БИК)</li>
            <li>Подписать электронный договор-оферту</li>
            <li>Получать счета на оплату с НДС</li>
            <li>Скачивать акты выполненных работ</li>
            <li>Закрывающие документы — автоматом по почте</li>
          </ul>
          <p className="text-xs text-gray-400 mt-4">Если уже сейчас нужна оплата по счёту — напиши Алёне в Telegram.</p>
        </div>
      </div>
    </div>
  );
}

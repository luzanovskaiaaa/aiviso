"use client";
import { useRouter } from "next/navigation";
import AppNav from "@/components/layout/AppNav";

export default function TeamPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/account")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← ЛК</button>
        <h1 className="font-semibold text-sm sm:text-base">Команда</h1>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
          <span className="inline-block text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded mb-3">скоро</span>
          <h2 className="font-semibold mb-2">Сотрудники и роли</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            В следующих итерациях здесь можно будет:
          </p>
          <ul className="text-sm text-gray-700 space-y-1.5 ml-5 list-disc">
            <li>Пригласить сотрудника по email</li>
            <li>Назначить роли: <b>владелец / менеджер / контентщик</b></li>
            <li>Ограничить доступ к биллингу и API-ключам магазинов</li>
            <li>Видеть кто что генерировал (журнал действий)</li>
            <li>Удалить сотрудника или передать владение аккаунтом</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

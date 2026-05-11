"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

interface Stats {
  users_total: number;
  users_phone_verified: number;
  users_active_24h: number;
  users_active_30d: number;
  projects_total: number;
  generations_total: number;
  generations_24h: number;
  generations_30d: number;
  generations_done: number;
  generations_failed: number;
  credits_total_in_circulation: number;
  credits_spent_total: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<Stats>("/admin/stats")
      .then(({ data }) => setStats(data))
      .catch((err) => setError(err.response?.data?.detail || "Не удалось загрузить статистику"));
  }, []);

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">{error}</div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Пользователи</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Всего" value={stats.users_total} />
          <Stat label="С верифицированным телефоном" value={stats.users_phone_verified}
            hint={`${pct(stats.users_phone_verified, stats.users_total)}%`} />
          <Stat label="Активны за 24 ч" value={stats.users_active_24h} accent />
          <Stat label="Активны за 30 дн" value={stats.users_active_30d} />
        </div>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Генерации</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Всего" value={stats.generations_total} />
          <Stat label="За 24 ч" value={stats.generations_24h} accent />
          <Stat label="За 30 дн" value={stats.generations_30d} />
          <Stat label="Проектов" value={stats.projects_total} />
          <Stat label="Done" value={stats.generations_done} positive />
          <Stat label="Failed" value={stats.generations_failed} negative={stats.generations_failed > 0} />
          <Stat
            label="Success rate"
            value={stats.generations_done + stats.generations_failed > 0
              ? `${Math.round((stats.generations_done / (stats.generations_done + stats.generations_failed)) * 100)}%`
              : "—"}
          />
          <Stat label="Кредитов потрачено" value={stats.credits_spent_total} />
        </div>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Кредиты</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="На балансах" value={stats.credits_total_in_circulation} />
          <Stat label="Потрачено итого" value={stats.credits_spent_total} />
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
  accent,
  positive,
  negative,
}: {
  label: string;
  value: number | string;
  hint?: string;
  accent?: boolean;
  positive?: boolean;
  negative?: boolean;
}) {
  const valueColor = negative ? "text-red-600" : positive ? "text-green-600" : accent ? "text-violet-600" : "text-gray-900";
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className={`text-2xl font-bold mt-1 ${valueColor}`}>{value}</div>
      {hint && <div className="text-[11px] text-gray-400 mt-0.5">{hint}</div>}
    </div>
  );
}

function pct(a: number, b: number): number {
  if (!b) return 0;
  return Math.round((a / b) * 100);
}

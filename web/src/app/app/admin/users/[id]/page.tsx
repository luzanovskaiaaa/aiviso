"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/lib/api";

interface UserRow {
  id: number;
  email: string;
  name: string;
  credits: number;
  phone?: string | null;
  phone_verified: boolean;
  phone_verified_via?: string | null;
  telegram_chat_id?: number | null;
  telegram_username?: string | null;
  is_admin: boolean;
  is_active: boolean;
  created_at: string;
  projects_count?: number;
  generations_count?: number;
}
interface GenRow {
  id: number;
  project_id: number;
  project_name?: string | null;
  scenario: string;
  status: string;
  qc_score?: number | null;
  credits_used: number;
  created_at: string;
}
interface Detail {
  user: UserRow;
  recent_generations: GenRow[];
  recent_projects: { id: number; name: string; category: string; model: string; created_at: string }[];
}

export default function AdminUserDetail() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [d, setD] = useState<Detail | null>(null);
  const [delta, setDelta] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => { load(); }, [id]);

  const load = async () => {
    try {
      const { data } = await api.get<Detail>(`/admin/users/${id}`);
      setD(data);
    } catch (err: any) {
      setMsg(err.response?.data?.detail || "Не удалось загрузить");
    }
  };

  const grantCredits = async () => {
    const n = parseInt(delta, 10);
    if (!Number.isFinite(n) || n === 0) { setMsg("Введи число (можно отрицательное)"); return; }
    if (!confirm(`Изменить баланс на ${n} кредитов?`)) return;
    setSaving(true);
    try {
      const { data } = await api.patch<UserRow>(`/admin/users/${id}`, { credits_delta: n });
      setD(prev => prev ? { ...prev, user: { ...prev.user, ...data } } : null);
      setDelta("");
      setMsg(`✓ Баланс обновлён: ${data.credits}`);
      setTimeout(() => setMsg(null), 3000);
    } catch (err: any) {
      setMsg(err.response?.data?.detail || "Ошибка");
    } finally { setSaving(false); }
  };

  const toggleAdmin = async () => {
    if (!d) return;
    const next = !d.user.is_admin;
    if (!confirm(next ? "Сделать админом?" : "Снять админа?")) return;
    try {
      const { data } = await api.patch<UserRow>(`/admin/users/${id}`, { is_admin: next });
      setD(prev => prev ? { ...prev, user: { ...prev.user, ...data } } : null);
    } catch (err: any) { alert(err.response?.data?.detail || "Ошибка"); }
  };

  const toggleBan = async () => {
    if (!d) return;
    const next = !d.user.is_active;
    if (!confirm(next ? "Разбанить пользователя?" : "Заблокировать пользователя?")) return;
    try {
      const { data } = await api.patch<UserRow>(`/admin/users/${id}`, { is_active: next });
      setD(prev => prev ? { ...prev, user: { ...prev.user, ...data } } : null);
    } catch (err: any) { alert(err.response?.data?.detail || "Ошибка"); }
  };

  if (!d) {
    return <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-gray-400">Загрузка…</div>;
  }
  const u = d.user;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5">
      <Link href="/app/admin/users" className="text-xs text-gray-500 hover:text-gray-800">← К списку</Link>

      {/* Шапка */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-bold">{u.name}</h1>
            <p className="text-sm text-gray-500">{u.email}</p>
            <p className="text-xs text-gray-400 mt-1">ID {u.id} · регистрация {new Date(u.created_at).toLocaleString("ru-RU")}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {u.is_admin && <span className="text-[11px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded">admin</span>}
            {!u.is_active && <span className="text-[11px] bg-red-100 text-red-700 px-2 py-0.5 rounded">banned</span>}
            {u.phone_verified && <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded">phone ✓ {u.phone_verified_via}</span>}
            {u.telegram_chat_id && <span className="text-[11px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded">TG @{u.telegram_username}</span>}
          </div>
        </div>
      </div>

      {/* Карточки данных */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Card label="Кредиты" value={u.credits} accent />
        <Card label="Проекты" value={u.projects_count ?? 0} />
        <Card label="Генерации" value={u.generations_count ?? 0} />
        <Card label="Телефон" value={u.phone || "—"} small />
      </div>

      {/* Управление */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
        <h2 className="font-semibold">Управление</h2>

        {msg && (
          <div className={`text-xs px-3 py-2 rounded-lg ${msg.startsWith("✓") ? "bg-green-50 text-green-700 border border-green-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>{msg}</div>
        )}

        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="block text-xs text-gray-500 mb-1.5">Изменить баланс (можно отрицательное)</label>
            <input
              type="number"
              value={delta}
              onChange={(e) => setDelta(e.target.value)}
              placeholder="например: 100 или -10"
              className="input-field w-full text-sm"
            />
          </div>
          <button
            onClick={grantCredits}
            disabled={saving}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-200 text-white rounded-xl text-sm font-medium"
          >
            {saving ? "..." : "Применить"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
          <button onClick={toggleAdmin}
            className="px-3 py-1.5 text-xs border border-violet-200 text-violet-700 hover:bg-violet-50 rounded-lg">
            {u.is_admin ? "Снять админа" : "Сделать админом"}
          </button>
          <button onClick={toggleBan}
            className={`px-3 py-1.5 text-xs border rounded-lg ${u.is_active ? "border-red-200 text-red-700 hover:bg-red-50" : "border-green-200 text-green-700 hover:bg-green-50"}`}>
            {u.is_active ? "Заблокировать" : "Разбанить"}
          </button>
        </div>
      </div>

      {/* Последние генерации */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <h2 className="font-semibold mb-3">Последние генерации (20)</h2>
        {d.recent_generations.length === 0 ? (
          <p className="text-sm text-gray-400">Пока нет</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="text-[10px] uppercase tracking-wider text-gray-400">
                <tr>
                  <th className="text-left py-1.5">ID</th>
                  <th className="text-left py-1.5">Проект</th>
                  <th className="text-left py-1.5">Сценарий</th>
                  <th className="text-left py-1.5">Статус</th>
                  <th className="text-left py-1.5">QC</th>
                  <th className="text-left py-1.5">Кредитов</th>
                  <th className="text-left py-1.5">Создана</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {d.recent_generations.map(g => (
                  <tr key={g.id}>
                    <td className="py-2 text-gray-400">{g.id}</td>
                    <td className="py-2">{g.project_name || `#${g.project_id}`}</td>
                    <td className="py-2 text-gray-600">{g.scenario}</td>
                    <td className="py-2">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        g.status === "done" ? "bg-green-100 text-green-700" :
                        g.status === "failed" ? "bg-red-100 text-red-700" :
                        g.status === "needs_review" ? "bg-amber-100 text-amber-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>{g.status}</span>
                    </td>
                    <td className="py-2 text-gray-600">{g.qc_score ?? "—"}</td>
                    <td className="py-2 text-gray-600">{g.credits_used}</td>
                    <td className="py-2 text-gray-400">{new Date(g.created_at).toLocaleString("ru-RU")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Последние проекты */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <h2 className="font-semibold mb-3">Последние проекты (10)</h2>
        {d.recent_projects.length === 0 ? (
          <p className="text-sm text-gray-400">Пока нет</p>
        ) : (
          <ul className="text-sm space-y-1.5">
            {d.recent_projects.map(p => (
              <li key={p.id}>
                <a href={`/app/projects/${p.id}`} target="_blank" rel="noopener noreferrer"
                  className="text-violet-600 hover:underline">
                  #{p.id} {p.name}
                </a>
                <span className="text-xs text-gray-400 ml-2">{p.category} · {p.model}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Card({ label, value, accent, small }: { label: string; value: string | number; accent?: boolean; small?: boolean }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className={`font-bold mt-1 ${small ? "text-sm" : "text-2xl"} ${accent ? "text-violet-600" : "text-gray-900"}`}>{value}</div>
    </div>
  );
}

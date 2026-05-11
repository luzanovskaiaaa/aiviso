"use client";
import { useEffect, useState } from "react";
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
  projects_count: number;
  generations_count: number;
}

export default function AdminUsers() {
  const [items, setItems] = useState<UserRow[]>([]);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const PAGE_SIZE = 50;

  useEffect(() => { load(); }, [offset]);

  const load = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      params.set("limit", String(PAGE_SIZE));
      params.set("offset", String(offset));
      const { data } = await api.get<{ items: UserRow[]; total: number }>(`/admin/users?${params}`);
      setItems(data.items);
      setTotal(data.total);
    } finally {
      setLoading(false);
    }
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setOffset(0);
    load();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
      <form onSubmit={onSearch} className="flex gap-2">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Поиск по email, имени или телефону"
          className="input-field flex-1 text-sm"
        />
        <button type="submit"
          className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium">
          Найти
        </button>
      </form>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-3 py-2 text-left">ID</th>
                <th className="px-3 py-2 text-left">Email / Имя</th>
                <th className="px-3 py-2 text-left">Кредиты</th>
                <th className="px-3 py-2 text-left">Телефон</th>
                <th className="px-3 py-2 text-left">TG</th>
                <th className="px-3 py-2 text-left">Проекты</th>
                <th className="px-3 py-2 text-left">Генерации</th>
                <th className="px-3 py-2 text-left">Регистрация</th>
                <th className="px-3 py-2 text-left">Флаги</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map(u => (
                <tr key={u.id} className="hover:bg-violet-50/40 cursor-pointer"
                  onClick={() => location.assign(`/app/admin/users/${u.id}`)}>
                  <td className="px-3 py-2.5 text-gray-400 font-mono">{u.id}</td>
                  <td className="px-3 py-2.5">
                    <div className="font-medium">{u.email}</div>
                    <div className="text-xs text-gray-500">{u.name}</div>
                  </td>
                  <td className="px-3 py-2.5 font-semibold text-violet-700">{u.credits}</td>
                  <td className="px-3 py-2.5">
                    {u.phone_verified ? (
                      <div>
                        <div className="text-xs">{u.phone || "—"}</div>
                        <div className="text-[10px] text-green-600">✓ {u.phone_verified_via || "—"}</div>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    {u.telegram_chat_id ? (
                      <span className="text-xs text-sky-600">@{u.telegram_username || u.telegram_chat_id}</span>
                    ) : (
                      <span className="text-xs text-gray-300">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">{u.projects_count}</td>
                  <td className="px-3 py-2.5">{u.generations_count}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-500">
                    {new Date(u.created_at).toLocaleDateString("ru-RU")}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1 flex-wrap">
                      {u.is_admin && <span className="text-[10px] bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded">admin</span>}
                      {!u.is_active && <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded">banned</span>}
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && !loading && (
                <tr><td colSpan={9} className="px-3 py-12 text-center text-gray-400">Никого не найдено</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Всего: {total}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setOffset(Math.max(0, offset - PAGE_SIZE))}
            disabled={offset === 0 || loading}
            className="px-3 py-1.5 border border-gray-200 rounded-lg disabled:opacity-40"
          >← Назад</button>
          <button
            onClick={() => setOffset(offset + PAGE_SIZE)}
            disabled={offset + PAGE_SIZE >= total || loading}
            className="px-3 py-1.5 border border-gray-200 rounded-lg disabled:opacity-40"
          >Вперёд →</button>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aiviso.ru";

interface GenFullRow {
  id: number;
  project_id: number;
  project_name?: string | null;
  user_id: number;
  user_email: string;
  scenario: string;
  status: string;
  qc_score?: number | null;
  credits_used: number;
  result_paths?: string[] | null;
  created_at: string;
}

const STATUS_FILTERS = [
  { v: "",            label: "Все" },
  { v: "done",        label: "Done" },
  { v: "needs_review", label: "Needs review" },
  { v: "failed",      label: "Failed" },
  { v: "processing",  label: "Processing" },
  { v: "pending",     label: "Pending" },
];

const PAGE_SIZE = 50;

export default function AdminGenerations() {
  const [items, setItems] = useState<GenFullRow[]>([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [status, offset]);

  const load = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (status) params.set("status", status);
      params.set("limit", String(PAGE_SIZE));
      params.set("offset", String(offset));
      const { data } = await api.get<{ items: GenFullRow[]; total: number }>(`/admin/generations?${params}`);
      setItems(data.items);
      setTotal(data.total);
    } finally {
      setLoading(false);
    }
  };

  const mediaUrl = (path: string) => {
    const rel = path.split(/uploads[/\\]/)[1];
    return `${API_URL}/media/${rel?.replace(/\\/g, "/")}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        {STATUS_FILTERS.map(f => (
          <button
            key={f.v}
            onClick={() => { setStatus(f.v); setOffset(0); }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${
              status === f.v
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-violet-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-3 py-2 text-left">ID</th>
                <th className="px-3 py-2 text-left">Превью</th>
                <th className="px-3 py-2 text-left">Юзер</th>
                <th className="px-3 py-2 text-left">Проект</th>
                <th className="px-3 py-2 text-left">Сценарий</th>
                <th className="px-3 py-2 text-left">Статус</th>
                <th className="px-3 py-2 text-left">QC</th>
                <th className="px-3 py-2 text-left">Кредитов</th>
                <th className="px-3 py-2 text-left">Время</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map(g => (
                <tr key={g.id}>
                  <td className="px-3 py-2 text-gray-400 font-mono">{g.id}</td>
                  <td className="px-3 py-2">
                    {g.result_paths && g.result_paths[0] ? (
                      <img src={mediaUrl(g.result_paths[0])} alt="" className="w-12 h-16 object-cover rounded border border-gray-100" />
                    ) : (
                      <div className="w-12 h-16 bg-gray-100 rounded" />
                    )}
                  </td>
                  <td className="px-3 py-2">
                    <Link href={`/app/admin/users/${g.user_id}`} className="text-violet-600 hover:underline text-xs">
                      {g.user_email}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-600">
                    {g.project_name || `#${g.project_id}`}
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-600">{g.scenario}</td>
                  <td className="px-3 py-2">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                      g.status === "done" ? "bg-green-100 text-green-700" :
                      g.status === "failed" ? "bg-red-100 text-red-700" :
                      g.status === "needs_review" ? "bg-amber-100 text-amber-700" :
                      "bg-gray-100 text-gray-600"
                    }`}>{g.status}</span>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-600">{g.qc_score ?? "—"}</td>
                  <td className="px-3 py-2 text-xs text-gray-600">{g.credits_used}</td>
                  <td className="px-3 py-2 text-xs text-gray-400">{new Date(g.created_at).toLocaleString("ru-RU")}</td>
                </tr>
              ))}
              {items.length === 0 && !loading && (
                <tr><td colSpan={9} className="px-3 py-12 text-center text-gray-400">Пусто</td></tr>
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

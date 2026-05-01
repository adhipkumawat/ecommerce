"use client";

import { useEffect, useState } from "react";

type Order = { id: number; user: string; total: string; status: string };

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/_admin/orders');
      const data = await res.json();
      setOrders(data.orders || []);
    } catch (e) {}
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function setStatus(id: number, status: string) {
    await fetch('/api/_admin/orders', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) });
    load();
  }

  async function remove(id: number) {
    if (!confirm('Delete order?')) return;
    await fetch('/api/_admin/orders', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    load();
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-4">Order Management</h1>
      {loading ? <div>Loading...</div> : (
        <div className="space-y-3">
          {orders.map(o => (
            <div key={o.id} className="p-3 border bg-white flex items-center justify-between">
              <div>
                <div className="font-semibold">Order #{o.id}</div>
                <div className="text-sm text-gray-600">{o.user} — {o.total}</div>
              </div>
              <div className="flex items-center gap-3">
                <select value={o.status} onChange={(e)=>setStatus(o.id, e.target.value)} className="border px-2 py-1">
                  <option value="pending">pending</option>
                  <option value="processing">processing</option>
                  <option value="shipped">shipped</option>
                  <option value="delivered">delivered</option>
                </select>
                <button onClick={()=>remove(o.id)} className="text-red-600 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

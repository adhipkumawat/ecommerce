"use client";

import { useEffect, useState } from "react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/_admin/users');
      const data = await res.json();
      setUsers(data.users || []);
    } catch (e) {}
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function remove(id: number) {
    if (!confirm('Delete user?')) return;
    await fetch('/api/_admin/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'delete', id }) });
    load();
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>
      {loading ? <div>Loading...</div> : (
        <div className="space-y-3">
          {users.map(u => (
            <div key={u.id} className="p-3 border bg-white flex items-center justify-between">
              <div>
                <div className="font-semibold">{u.name}</div>
                <div className="text-sm text-gray-600">{u.email} — {u.role}</div>
              </div>
              <div>
                <button onClick={() => remove(u.id)} className="text-red-600 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

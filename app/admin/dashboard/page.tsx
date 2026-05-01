"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products as seedProducts } from "../../data/products";

export default function AdminDashboard() {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(seedProducts.length);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    // simple demo: count registered users from register API memory if available
    // (not reliable across server restarts) — this is a demo dashboard.
    async function fetchUsers() {
      try {
        const res = await fetch('/api/_admin/users');
        if (!res.ok) return;
        const data = await res.json();
        setUserCount(data.count || 0);
      } catch (e) {}
    }

    const stored = localStorage.getItem('admin_products');
    if (stored) setProductCount(JSON.parse(stored).length);

    async function fetchOrders() {
      try {
        const res = await fetch('/api/_admin/orders');
        if (!res.ok) return;
        const data = await res.json();
        setOrderCount(data.count || 0);
      } catch (e) {}
    }

    fetchUsers();
    fetchOrders();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 max-w-3xl">
        <div className="p-6 bg-white border">
          <div className="text-sm text-gray-500">Users</div>
          <div className="text-2xl font-bold">{userCount}</div>
        </div>

        <div className="p-6 bg-white border">
          <div className="text-sm text-gray-500">Products</div>
          <div className="text-2xl font-bold">{productCount}</div>
        </div>

        <div className="p-6 bg-white border">
          <div className="text-sm text-gray-500">Orders</div>
          <div className="text-2xl font-bold">{orderCount}</div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex gap-2">
          <Link href="/admin" className="px-4 py-2 bg-purple-700 text-white rounded">Products</Link>
          <Link href="/admin/orders" className="px-4 py-2 bg-gray-200">Orders</Link>
          <Link href="/admin/users" className="px-4 py-2 bg-gray-200">Users</Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { products as seedProducts, Product } from "../data/products";

export default function AdminPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [form, setForm] = useState({ name: "", price: "", img: "", colors: "" });

  useEffect(() => {
    const saved = localStorage.getItem("admin_products");
    if (saved) setItems(JSON.parse(saved));
    else setItems(seedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("admin_products", JSON.stringify(items));
  }, [items]);

  function addProduct(e: React.FormEvent) {
    e.preventDefault();
    const next: Product = {
      id: Date.now(),
      name: form.name || "Untitled",
      price: form.price || "€ 0.00",
      img: form.img || "https://via.placeholder.com/400",
      colors: form.colors ? form.colors.split(",").map((s) => s.trim()) : ["bg-white"],
    };
    setItems((s) => [next, ...s]);
    setForm({ name: "", price: "", img: "", colors: "" });
  }

  function remove(id: number) {
    setItems((s) => s.filter((p) => p.id !== id));
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6">Admin Panel</h1>

      <section className="mb-8">
        <h2 className="font-semibold mb-2">Add Product</h2>
        <form onSubmit={addProduct} className="flex flex-col gap-2 max-w-md">
          <input className="border p-2" placeholder="Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          <input className="border p-2" placeholder="Price" value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))} />
          <input className="border p-2" placeholder="Image URL" value={form.img} onChange={(e) => setForm((f) => ({ ...f, img: e.target.value }))} />
          <input className="border p-2" placeholder="Colors (comma separated CSS classes)" value={form.colors} onChange={(e) => setForm((f) => ({ ...f, colors: e.target.value }))} />
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Add</button>
            <button type="button" onClick={() => setItems(seedProducts)} className="px-4 py-2 bg-gray-200">Reset to seed</button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Products ({items.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((p) => (
            <div key={p.id} className="border p-3 bg-white">
              <img src={p.img} alt={p.name} className="h-40 w-full object-cover mb-2" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-600">{p.price}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button onClick={() => remove(p.id)} className="text-sm text-red-600">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

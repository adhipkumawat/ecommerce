"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../components/CartContext";
import { products } from "../data/products";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [adminCode, setAdminCode] = useState("");
  const { addItem } = useCart();

 const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, role, adminCode }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message);
    return;
  }

  alert("Account created. Please login.");
  window.location.href = "/login";
};

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/15 rounded-3xl p-8 bg-white/5 backdrop-blur">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Create Account</h1>
          <p className="text-white/60 mt-2">
            Join DA store today
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="text-sm text-white/70">Full Name</label>
            <input
              type="text"
              className="mt-2 w-full rounded-full bg-transparent border border-white/20 px-5 py-3 outline-none focus:border-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-full bg-transparent border border-white/20 px-5 py-3 outline-none focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Password</label>
            <input
              type="password"
              className="mt-2 w-full rounded-full bg-transparent border border-white/20 px-5 py-3 outline-none focus:border-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              className="mt-2 w-full rounded-full bg-transparent border border-white/20 px-5 py-3 outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {role === "admin" && (
            <div>
              <label className="text-sm text-white/70">Admin Code (if required)</label>
              <input value={adminCode} onChange={(e) => setAdminCode(e.target.value)} placeholder="Admin code" className="mt-2 w-full rounded-full bg-transparent border border-white/20 px-5 py-3 outline-none" />
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-white text-black py-3 font-medium hover:bg-white/80 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-white/50 mt-6">
          Already have account?{" "}
          <Link href="/login" className="text-white underline">
            Login
          </Link>
        </p>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">More items</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {products.map((p) => (
              <div key={p.id} className="flex items-center justify-between bg-white/5 p-2 rounded">
                <div className="flex items-center gap-3">
                  <img src={p.img} alt={p.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="text-xs text-white/60">{p.price}</div>
                  </div>
                </div>

                <button
                  onClick={() => addItem({ id: p.id, name: p.name, price: p.price, img: p.img }, 1)}
                  className="text-xs bg-white text-black px-3 py-1 rounded"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
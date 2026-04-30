"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
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
            Join Le Wilson store today
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="text-sm text-white/70">Full Name</label>
            <input
              type="text"
              placeholder="Adhip Kumawat"
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
              placeholder="adhip@example.com"
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
              placeholder="Create password"
              className="mt-2 w-full rounded-full bg-transparent border border-white/20 px-5 py-3 outline-none focus:border-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

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
      </div>
    </main>
  );
}
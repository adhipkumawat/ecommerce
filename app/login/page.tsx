"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({ email, password });

    // later we connect backend here
    // POST /login
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/15 rounded-3xl p-8 bg-white/5 backdrop-blur">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="text-white/60 mt-2">
            Welcome back to Le Wilson store
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              placeholder="admin@example.com"
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
              placeholder="Enter password"
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
            Login
          </button>
        </form>

        <p className="text-center text-sm text-white/50 mt-6">
          Back to{" "}
          <Link href="/" className="text-white underline">
            Home
          </Link>
        </p>
      </div>
    </main>
  );
}
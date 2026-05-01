"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";
    const endpoint = base ? `${base}/login` : "/api/login";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data?.message || "Login failed");
      setLoading(false);
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("user", JSON.stringify(data.user));

    router.push("/");
  } catch (err: any) {
    setError(err?.message || "An unexpected error occurred");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/15 rounded-3xl p-8 bg-white/5 backdrop-blur">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="text-white/60 mt-2">
            Welcome back to DA store
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-white text-black py-3 font-medium hover:bg-white/80 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}

        <p className="text-center text-sm text-white/50 mt-6">
          Don't have an account?{" "}
         
          <Link href="/register" className="text-white underline">
  Create account
</Link>
        </p>
      </div>
    </main>
  );
}
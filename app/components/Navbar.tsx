"use client";
import BagDrawer from "./BagDrawer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const r = localStorage.getItem("role");
    if (r) setRole(r);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-[999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-bold">DA store</h1>

            <div className="hidden md:flex gap-6 items-center">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/contact">Contact</Link>
              <div className="flex items-center gap-1">
                <Link href="/catalog">Catalog</Link>
                <ArrowUpRight size={16} />
              </div>
              {role === "admin" && <Link href="/admin/dashboard">Admin</Link>}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              {user ? (
                <div className="relative">
                  <button onClick={() => setOpen(!open)} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-semibold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  </button>
                  {open && (
                    <div className="absolute right-0 mt-4 w-64 rounded-2xl bg-white text-black shadow-xl border border-black/10 p-4">
                      <div className="flex items-center gap-3 border-b pb-4">
                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                          {user.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="py-4 space-y-2 text-sm">
                        <p>
                          Role: <span className="font-medium">{localStorage.getItem("role")}</span>
                        </p>
                      </div>
                      <button onClick={logout} className="w-full rounded-full bg-black text-white py-2 text-sm hover:bg-gray-800 transition">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login" className="hover:text-gray-300">
                  Login
                </Link>
              )}
            </div>

            <BagDrawer />

            <button className="md:hidden p-2 rounded border border-white/20" onClick={() => setMobileOpen((s) => !s)} aria-label="Open menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-2 py-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/catalog">Catalog</Link>
              {role === "admin" && <Link href="/admin/dashboard">Admin</Link>}
              {user ? (
                <button onClick={logout} className="text-left">Logout</button>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
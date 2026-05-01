"use client";
import BagDrawer from "./BagDrawer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
const [open, setOpen] = useState(false);
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
    <nav className="fixed top-0 left-0 w-full h-16 bg-black text-white z-[999] flex items-center justify-between px-6 py-4 flex-row gap-70">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">DA store </h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/contact">Contact</Link>

        <div className="ml-20 flex flex-row items-center">
          <Link href="/catalog">Catalog</Link>
          <ArrowUpRight size={20} />
        </div>
        {role === "admin" && (
          <div className="ml-6">
            <Link href="/admin/dashboard">Admin</Link>
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-row gap-5 items-center">

        {/* 🔥 USER / LOGIN SWITCH */}
        {user ? (
  <div className="relative">
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-3"
    >
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
            Role:{" "}
            <span className="font-medium">
              {localStorage.getItem("role")}
            </span>
          </p>
        </div>

        <button
          onClick={logout}
          className="w-full rounded-full bg-black text-white py-2 text-sm hover:bg-gray-800 transition"
        >
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

        {/* Bag */}
        <BagDrawer />

      </div>
    </nav>
  );
}
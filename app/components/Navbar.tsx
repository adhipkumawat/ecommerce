"use client";
import BagDrawer from "./BagDrawer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
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
      <h1 className="text-xl font-bold">Le Wilson store </h1>

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
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-row gap-5 items-center">

        {/* 🔥 USER / LOGIN SWITCH */}
        {user ? (
          <div className="flex items-center gap-3">

            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-semibold">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            {/* Name */}
            <span className="text-sm">{user.name}</span>

            {/* Logout */}
            <button
              onClick={logout}
              className="text-sm text-gray-300 hover:text-white"
            >
              Logout
            </button>
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
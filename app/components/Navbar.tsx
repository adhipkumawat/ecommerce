"use client";
import BagDrawer from "./BagDrawer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-black text-white z-[999] flex items-center justify-between px-6 py-4  flex-row gap-70 ">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">Le Wilson store </h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/contact">Contact</Link>
       <div className="ml-20 flex flex-row">
        <Link href="/catalog">Catalog </Link>
        <ArrowUpRight size={20} />
        </div>
      </div>
      <div className="flex flex-row gap-5">
          <div>
         <Link href="/login" className="hover:text-gray-300"> Login</Link>
      </div>
     <div>
        <BagDrawer /> 
     </div>
     </div>
    </nav>
  );
}
"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { div } from "framer-motion/client";

export default function BagDrawer() {
  const [open, setOpen] = useState(false);

  return (
   <div>
      <button onClick={() => setOpen(true)}><img width="25" height="94" src="https://img.icons8.com/3d-fluency/94/shopping-bag.png" alt="shopping-bag"/></button>

      {open && (
        <div className="text-black fixed inset-0 z-[999]">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          <div className="absolute right-0 top-0 h-screen w-[420px] bg-gray-100">
            <div className="flex items-center justify-between border-b border-dashed border-gray-400 px-6 py-5">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl">Bag</h2>
                <span className="h-5 w-8 rounded bg-black"></span>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex h-[calc(100vh-80px)] flex-col justify-end px-6 pb-8">
              <p className="mb-5 text-xs font-semibold text-black">
                Your shopping bag is empty.{" "}
                <a className="underline" href="/catalog">
                  Shop
                </a>{" "}
                new series
              </p>

              <a
                href="/catalog"
                className="flex h-16 items-center justify-center rounded bg-purple-700 text-xs font-bold text-white"
              >
                Browse Catalog
              </a>
            </div>
          </div>
        </div>
      )}
  </div>
  );
}
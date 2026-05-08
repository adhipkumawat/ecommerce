"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { div } from "framer-motion/client";
import { useCart } from "./CartContext";
import { products } from "../data/products";

export default function BagDrawer() {
  const [open, setOpen] = useState(false);
  const { items, removeItem, addItem, changeQuantity } = useCart();

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
              {items.length === 0 ? (
                <p className="mb-5 text-xs font-semibold text-black">
                  Your shopping bag is empty. <a className="underline" href="/catalog">Shop</a>
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((it, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={it.img} alt={it.name} className="w-14 h-14 object-cover" />
                        <div>
                          <div className="text-sm font-semibold">{it.name}</div>
                          <div className="text-xs text-gray-600">{it.color} {it.size}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm">{it.price}</div>
                        <div className="flex items-center justify-end gap-2 mt-2">
                          <button onClick={() => changeQuantity(i, -1)} className="px-2 bg-white border rounded">-</button>
                          <span className="text-sm">{it.quantity}</span>
                          <button onClick={() => changeQuantity(i, 1)} className="px-2 bg-white border rounded">+</button>
                        </div>
                        <button onClick={() => removeItem(i)} className="text-xs text-red-600 mt-2">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-3">More items</h3>
           
              </div>

              <a
                href="/catalog"
                className="mt-6 flex h-12 items-center justify-center rounded bg-purple-700 text-xs font-bold text-white"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      )}
  </div>
  );
}
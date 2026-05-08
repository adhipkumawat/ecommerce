"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../components/CartContext";
import type { Product } from "../data/products";

export default function ProductClient({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();

  const [color, setColor] = useState(product.colors?.[0]);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const imgs = product.images && product.images.length ? product.images : [product.img];
  const [main, setMain] = useState(imgs[0]);

  function handleAdd() {
    addItem({ id: product.id, name: product.name, price: product.price, img: product.img, color, size }, qty);
    router.push('/catalog');
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow rounded overflow-hidden grid md:grid-cols-2">
        <div>
          <div className="relative h-96">
            <Image src={main} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex gap-3 mt-4">
            {imgs.map((src) => (
              <button key={src} onClick={() => setMain(src)} className={`w-20 h-20 border ${main===src? 'ring-2 ring-purple-600':''}`}>
                <Image src={src} alt={product.name} width={80} height={80} className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="p-8">
          <button onClick={() => router.back()} className="text-sm text-gray-500 mb-4">← Back</button>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-xl font-bold">{product.price}</p>

          <div className="mt-6">
            <p className="text-xs text-gray-500 uppercase">Colors</p>
            <div className="flex gap-3 mt-3">
              {product.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`w-10 h-10 rounded-full border ${c} ${color===c? 'ring-2 ring-offset-2 ring-purple-600':''}`}/>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs text-gray-500 uppercase">Size</p>
            <div className="flex gap-2 mt-2">
              {['S','M','L','XL'].map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`px-3 py-1 border ${size===s? 'bg-gray-900 text-white':''}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center">
              <button onClick={() => setQty((q) => Math.max(1, q-1))} className="px-3 py-1 border">-</button>
              <div className="px-4">{qty}</div>
              <button onClick={() => setQty((q) => q+1)} className="px-3 py-1 border">+</button>
            </div>

            <button onClick={handleAdd} className="ml-4 bg-purple-700 text-white px-4 py-2 rounded">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "../components/CartContext";
import { products as initialProducts } from "../data/products";

const products = [
  {
    id: 1,
    name: "Monogram T-Shirt",
    price: "€ 99.00 EUR",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 2,
    name: "Novelist T-Shirt",
    price: "€ 135.00 EUR",
    img: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg",
    colors: ["bg-white", "bg-neutral-800", "bg-blue-900"],
  },
  {
    id: 3,
    name: "Split T-Shirt",
    price: "€ 115.00 EUR",
    img: "https://images.pexels.com/photos/30664814/pexels-photo-30664814.jpeg",
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 4,
    name: "Classic Logo T-Shirt",
    price: "€ 120.00 EUR",
    img: "https://images.pexels.com/photos/31052852/pexels-photo-31052852.jpeg",
    colors: ["bg-black", "bg-white", "bg-gray-500"],
  },
  {
    id: 5,
    name: "Monogram T-Shirt",
    price: "€ 99.00 EUR",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 6,
    name: "Novelist T-Shirt",
    price: "€ 135.00 EUR",
    img: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg",
    colors: ["bg-white", "bg-neutral-800", "bg-blue-900"],
  },
  {
    id: 7,
    name: "Split T-Shirt",
    price: "€ 115.00 EUR",
    img: "https://images.pexels.com/photos/30664814/pexels-photo-30664814.jpeg",
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 8,
    name: "Classic Logo T-Shirt",
    price: "€ 120.00 EUR",
    img: "https://images.pexels.com/photos/31052852/pexels-photo-31052852.jpeg",
    colors: ["bg-black", "bg-white", "bg-gray-500"],
  },
];
export default function CatalogPage() {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<any | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [qty, setQty] = useState(1);

  function openProduct(p: any) {
    setSelected(p);
    setSelectedColor(p.colors?.[0]);
    setSelectedSize("M");
    setQty(1);
  }

  function closeModal() {
    setSelected(null);
  }

  function handleAddToCart() {
    if (!selected) return;
    addItem({ id: selected.id, name: selected.name, price: selected.price, img: selected.img, color: selectedColor, size: selectedSize }, qty);
    closeModal();
  }
  return (
    <div>
     <section className="bg-gray-200 px-14 pt-20 pb-12">
      <div className="grid grid-cols-2">
        <h1 className="text-6xl font-light">Catalog</h1>

        <h1 className="text-6xl font-light">8 Products</h1>
      </div>

      <div className="mt-28 flex items-center gap-2 text-xs">
        <span>Sort by:</span>
        <button className="flex items-center gap-2 font-bold">
          Featured
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
              <div className="bg-gray-100 min-h-screen p-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
             {initialProducts.map((item) => (
               <div key={item.id} onClick={() => openProduct(item)} className="bg-white group overflow-hidden cursor-pointer">
                 <div className="relative w-full h-[350px] overflow-hidden">
                   <Image
                     src={item.img}
                     alt={item.name}
                     fill
                     className="object-cover transition duration-500 group-hover:scale-105"
                   />
                 </div>
     
                 <div className="p-5 min-h-[115px]">
                   <p className="text-gray-500 text-[11px] mb-2 uppercase">
                     THE PROLOGUE
                   </p>
     
                   <div className="flex justify-between text-xs font-semibold">
                     <p>{item.name}</p>
                     <p>{item.price}</p>
                   </div>
     
                   {/* colors show on hover */}
                   <div className="flex gap-2 mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                     {item.colors.map((color, index) => (
                       <button
                         key={index}
                         className={`w-8 h-8 rounded-full border border-gray-300 ${color}`}
                       />
                     ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

            <div className="relative z-10 w-[90%] max-w-3xl bg-white rounded shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-96">
                  <Image src={selected.img} alt={selected.name} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">{selected.name}</h2>
                    <button onClick={closeModal} className="text-gray-600">Close</button>
                  </div>

                  <p className="mt-4 text-lg font-bold">{selected.price}</p>

                  <div className="mt-6">
                    <p className="text-xs text-gray-500 uppercase">Colors</p>
                    <div className="flex gap-2 mt-3">
                      {selected.colors.map((c: string) => (
                        <button
                          key={c}
                          onClick={() => setSelectedColor(c)}
                          className={`w-8 h-8 rounded-full border ${c} ${selectedColor === c ? "ring-2 ring-offset-2 ring-purple-600" : ""}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs text-gray-500 uppercase">Size</p>
                    <div className="mt-2 flex gap-2">
                      {['S','M','L','XL'].map((s) => (
                        <button key={s} onClick={() => setSelectedSize(s)} className={`px-3 py-1 border ${selectedSize===s? 'bg-gray-900 text-white':''}`}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex items-center">
                      <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1 border">-</button>
                      <div className="px-4">{qty}</div>
                      <button onClick={() => setQty((q) => q + 1)} className="px-3 py-1 border">+</button>
                    </div>

                    <button onClick={handleAddToCart} className="ml-4 bg-purple-700 text-white px-4 py-2 rounded">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
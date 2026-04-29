"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
];
export default function CatalogPage() {
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
             {products.map((item) => (
               <div key={item.id} className="bg-white group overflow-hidden">
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
    </div>
  );
}
"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { products as initialProducts, Product } from "../data/products";

function parsePrice(price: string) {
  const match = price.replace(/[,€]/g, "").match(/(\d+\.?\d*)/);
  return match ? parseFloat(match[0]) : 0;
}

export default function CatalogPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [colorFilter, setColorFilter] = useState<string | null>(null);
  const [sort, setSort] = useState("featured");

  const colors = useMemo(() => {
    const set = new Set<string>();
    initialProducts.forEach((p) => p.colors.forEach((c) => set.add(c)));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    let list = initialProducts.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    if (colorFilter) list = list.filter((p) => p.colors.includes(colorFilter));
    if (sort === "low") list = list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "high") list = list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return list;
  }, [query, colorFilter, sort]);

  return (
    <div>
      <section className="bg-gray-200 pt-20 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h1 className="text-4xl md:text-6xl font-light">Catalog</h1>
            <h1 className="text-2xl md:text-6xl font-light text-right">{filtered.length} Products</h1>
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-lg border bg-white w-full focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="font-medium">Filter:</span>
                <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                  <button
                    onClick={() => setColorFilter(null)}
                    className={`flex items-center gap-2 whitespace-nowrap px-3 py-1 rounded-full border ${
                      colorFilter === null ? "bg-purple-700 text-white shadow" : ""
                    } text-sm`}
                  >
                    All
                  </button>
                  {colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColorFilter(c)}
                      className={`flex items-center gap-2 whitespace-nowrap px-3 py-1 rounded-full border ${
                        colorFilter === c ? "bg-purple-700 text-white shadow" : ""
                      } text-sm`}
                    >
                      <span className={`w-3 h-3 rounded-full border ${c}`} />
                      <span className="capitalize">{c.replace("bg-", "").replace("-", " ")}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end md:justify-end">
                <span className="text-xs mr-3">Sort by:</span>
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-1 border rounded">
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item: Product) => (
              <div
                key={item.id}
                onClick={() => router.push(`/catalog/${item.id}`)}
                className="bg-white group overflow-hidden cursor-pointer"
              >
                <div className="relative w-full h-72 md:h-[350px] overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>

                <div className="p-5 min-h-[115px]">
                  <p className="text-gray-500 text-[11px] mb-2 uppercase">THE PROLOGUE</p>

                  <div className="flex justify-between text-xs font-semibold">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>

                  <div className="flex gap-2 mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                    {item.colors.map((color, index) => (
                      <button key={index} className={`w-8 h-8 rounded-full border border-gray-300 ${color}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const products = [
  {
    id: 1,
    name: "Monogram T-Shirt",
    price: "€ 99.00 EUR",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    images: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
    ],
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 2,
    name: "Novelist T-Shirt",
    price: "€ 135.00 EUR",
    img: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg",
    images: [
      "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg",
      "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg"
    ],
    colors: ["bg-white", "bg-neutral-800", "bg-blue-900"],
  },
  {
    id: 3,
    name: "Split T-Shirt",
    price: "€ 115.00 EUR",
    img: "https://images.pexels.com/photos/30664814/pexels-photo-30664814.jpeg",
    images: [
      "https://images.pexels.com/photos/30664814/pexels-photo-30664814.jpeg",
      "https://images.pexels.com/photos/30664814/pexels-photo-30664814.jpeg"
    ],
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 4,
    name: "Classic Logo T-Shirt",
    price: "€ 120.00 EUR",
    img: "https://images.pexels.com/photos/31052852/pexels-photo-31052852.jpeg",
    images: [
      "https://images.pexels.com/photos/31052852/pexels-photo-31052852.jpeg",
      "https://images.pexels.com/photos/31052852/pexels-photo-31052852.jpeg"
    ],
    colors: ["bg-black", "bg-white", "bg-gray-500"],
  },
  {
    id: 5,
    name: "Urban Shadow Hoodie",
    price: "€ 99.00 EUR",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 6,
    name: "Vintage Street Jacket",
    price: "€ 135.00 EUR",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: ["bg-gray-200", "bg-black", "bg-blue-700"],
  },
  {
    id: 7,
    name: "Minimal Line Sweatshirt",
    price: "€ 115.00 EUR",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: ["bg-black", "bg-gray-700", "bg-red-600"],
  },
  {
    id: 8,
    name: "Retro Varsity Tee",
    price: "€ 120.00 EUR",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: ["bg-blue-600", "bg-gray-800", "bg-red-500"],
  },
];

export type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
  images?: string[];
  colors: string[];
};

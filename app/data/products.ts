export const products = [
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

export type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
  colors: string[];
};

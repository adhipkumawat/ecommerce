"use client";

import React, { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: string;
  img: string;
  color?: string;
  size?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (index: number) => void;
  changeQuantity: (index: number, delta: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(item: Omit<CartItem, "quantity">, qty = 1) {
    setItems((prev) => {
      const foundIndex = prev.findIndex(
        (p) => p.id === item.id && p.color === item.color && p.size === item.size
      );

      if (foundIndex > -1) {
        const copy = [...prev];
        copy[foundIndex] = { ...copy[foundIndex], quantity: copy[foundIndex].quantity + qty };
        return copy;
      }

      return [...prev, { ...item, quantity: qty }];
    });
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function changeQuantity(index: number, delta: number) {
    setItems((prev) => {
      const copy = [...prev];
      if (!copy[index]) return prev;
      const newQty = copy[index].quantity + delta;
      if (newQty <= 0) {
        copy.splice(index, 1);
        return copy;
      }
      copy[index] = { ...copy[index], quantity: newQty };
      return copy;
    });
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, changeQuantity, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export type { CartItem };

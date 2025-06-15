import React, { createContext, useContext, useEffect, useState } from "react";

export type CartProduct = { id: string; quantity: number };
type CartContextType = {
  cart: CartProduct[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const getLocal = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
};
const setLocal = <T,>(key: string, value: T) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    const stored = getLocal<any>("cart", []);
    if (Array.isArray(stored)) {
      if (
        stored.length > 0 &&
        typeof stored[0] === "object" &&
        stored[0].id &&
        "quantity" in stored[0]
      ) {
        return stored;
      } else if (stored.length > 0) {
        // legacy [id] array
        return stored.map((id: string) => ({ id, quantity: 1 }));
      }
    }
    return [];
  });

  useEffect(() => {
    setLocal("cart", cart);
  }, [cart]);

  const addToCart = (id: string) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === id);
      if (found) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const updateQty = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
  const clearCart = () => setCart([]);
  const getTotalCount = () => cart.reduce((sum, cur) => sum + cur.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        getTotalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be within CartProvider");
  return ctx;
}

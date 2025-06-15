import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const CartBadge = () => {
  const { getTotalCount } = useCart();
  const count = getTotalCount();
  return (
    <span className="relative inline-block">
      <ShoppingCart size={22} className="text-gold" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-tight select-none">
          {count}
        </span>
      )}
    </span>
  );
};

export default CartBadge;

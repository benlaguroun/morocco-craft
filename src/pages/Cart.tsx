import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import * as React from "react";
import { allProducts } from "@/data";
import { toast } from "@/hooks/use-toast";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const cartItems = cart
    .map((item) => {
      const product = allProducts.find((p) => p.id === item.id);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item!.price * item!.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
      <Header />
      <main className="max-w-[1000px] mx-auto px-2 py-10 md:px-6">
        <h1 className="display text-2xl text-gold mb-6">Shopping Cart</h1>
        <GlassContainer className="p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <ShoppingCart size={48} className="mx-auto mb-4 text-gold" />
              <p className="text-zinc-500">Your cart is empty.</p>
              <Link
                to="/products"
                className="inline-block mt-4 px-6 py-2 bg-gold text-white rounded-glass font-semibold hover:bg-emerald transition"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-gold/20 mb-4">
                {cartItems.map((item) => (
                  <li key={item!.id} className="flex gap-4 items-center py-4">
                    <img
                      src={item!.image}
                      alt={item!.name}
                      className="w-20 h-20 object-cover rounded-lg border border-gold/20"
                    />
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-gold">
                        {item!.name}
                      </h3>
                      <div className="flex gap-3 text-sm text-zinc-500 items-center">
                        <span>${item!.price.toFixed(2)}</span>
                        <span>
                          Qty:{" "}
                          <input
                            type="number"
                            min={1}
                            value={item!.quantity}
                            onChange={(e) =>
                              updateQty(item!.id, parseInt(e.target.value) || 1)
                            }
                            className="w-12 px-1 rounded border border-gold/30 text-center bg-white/70"
                          />
                        </span>
                      </div>
                    </div>
                    <button
                      className="ml-4 text-red-600 hover:text-red-800"
                      onClick={() => removeFromCart(item!.id)}
                    >
                      <Trash2 />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row justify-between items-end gap-4 mt-2">
                <div className="mb-2 md:mb-0">
                  <span className="text-zinc-400">Subtotal: </span>
                  <span className="text-gold font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="mb-2 md:mb-0">
                  <span className="text-zinc-400">Tax (8%): </span>
                  <span className="text-gold font-semibold">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-700 font-bold text-lg">
                    Total:{" "}
                  </span>
                  <span className="text-gold font-bold text-xl">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Link
                  to="/checkout"
                  className="px-7 py-3 bg-gold text-white rounded-glass shadow-gold font-bold hover:bg-emerald transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </GlassContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;

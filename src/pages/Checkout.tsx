import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { CreditCard } from "lucide-react";
import { allProducts } from "@/data";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total as in Cart
  const cartItems = cart
    .map((item) => {
      // Must import allProducts in this file if not already
      return allProducts.find((p) => p.id === item.id)
        ? {
            ...allProducts.find((p) => p.id === item.id)!,
            quantity: item.quantity,
          }
        : null;
    })
    .filter(Boolean);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item!.price * item!.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      navigate("/order-confirmation");
    }, 2000);
  };

  // Simulated card payment action (real Stripe integration would require more setup)
  const handleCardPayment = () => {
    alert(
      "Credit Card payment (integration required here with Stripe/Supabase)"
    );
    // Redirect to payment normally here
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
      <Header />
      <main className="max-w-[900px] mx-auto px-2 py-10 md:px-6">
        <h1 className="display text-2xl text-gold mb-6">Checkout</h1>
        <GlassContainer className="p-8 max-w-xl mx-auto">
          {orderPlaced ? (
            <div className="text-center text-emerald-700 font-bold">
              Your order has been placed! Thank you!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <label>
                  <span className="block mb-1 font-semibold text-emerald dark:text-gold">
                    Full Name
                  </span>
                  <input
                    className="w-full px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
                    required
                  />
                </label>
                <label>
                  <span className="block mb-1 font-semibold text-emerald dark:text-gold">
                    Email
                  </span>
                  <input
                    type="email"
                    className="w-full px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
                    required
                  />
                </label>
                <label>
                  <span className="block mb-1 font-semibold text-emerald dark:text-gold">
                    Shipping Address
                  </span>
                  <input
                    className="w-full px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
                    required
                  />
                </label>
                <label>
                  <span className="block mb-1 font-semibold text-emerald dark:text-gold">
                    City
                  </span>
                  <input
                    className="w-full px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
                    required
                  />
                </label>
                <label>
                  <span className="block mb-1 font-semibold text-emerald dark:text-gold">
                    Country
                  </span>
                  <input
                    className="w-full px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
                    defaultValue="Morocco"
                    required
                  />
                </label>
                {/* Payment method switch */}
                <div className="mb-2">
                  <span className="block mb-1 font-semibold text-emerald dark:text-gold">
                    Payment Method
                  </span>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                      />
                      Cash on Delivery
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                      />
                      <CreditCard size={18} /> Credit Card
                    </label>
                  </div>
                </div>
              </div>
              {/* For Credit Card show a message or a button to pay */}
              {paymentMethod === "card" ? (
                <button
                  type="button"
                  onClick={handleCardPayment}
                  className="w-full mt-6 py-3 bg-gold rounded-glass text-white font-bold shadow-gold hover:bg-emerald transition"
                >
                  Pay Now (Integration Demo)
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full mt-6 py-3 bg-gold rounded-glass text-white font-bold shadow-gold hover:bg-emerald transition"
                >
                  Place Order
                </button>
              )}
              {/* Show order summary */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </form>
          )}
        </GlassContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;

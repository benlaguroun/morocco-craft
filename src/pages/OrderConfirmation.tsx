import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";
import { Link } from "react-router-dom";

const OrderConfirmation = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
    <Header />
    <main className="max-w-[700px] mx-auto px-2 py-24">
      <GlassContainer className="p-12 text-center">
        <h1 className="display text-3xl text-gold mb-3">
          Thank you for your order!
        </h1>
        <p className="text-zinc-700 dark:text-zinc-200 text-lg mb-7">
          We’ve received your order and our artisans are getting it ready for
          you. You’ll get an email confirmation shortly.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-gold text-white rounded-glass shadow-gold font-bold hover:bg-emerald transition"
        >
          Continue Shopping
        </Link>
      </GlassContainer>
    </main>
    <Footer />
  </div>
);

export default OrderConfirmation;

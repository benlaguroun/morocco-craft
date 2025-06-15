import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";
import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
      <Header />
      <main className="max-w-[1000px] mx-auto px-3 py-10">
        <GlassContainer className="p-8 max-w-md mx-auto">
          <h2 className="display text-2xl text-gold mb-3">Contact Us</h2>
          <form onSubmit={handleContact} className="flex flex-col gap-4">
            <input
              required
              placeholder="Your Name"
              className="px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
            />
            <textarea
              required
              placeholder="Your Message"
              rows={4}
              className="px-3 py-2 rounded-glass border border-gold/20 bg-transparent"
            />
            <button className="mt-2 w-full py-2 bg-gold rounded-glass text-white font-bold hover:bg-emerald transition">
              {sent ? "Sent!" : "Send Message"}
            </button>
          </form>
          <div className="text-xs text-emerald mt-2">
            {sent && "Thank you for contacting us!"}
          </div>
          <div className="text-xs mt-4 text-zinc-600 dark:text-zinc-300">
            You can also email us:{" "}
            <a href="mailto:info@marocchic.com" className="text-gold underline">
              info@marocchic.com
            </a>
          </div>
        </GlassContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

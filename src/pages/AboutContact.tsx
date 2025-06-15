import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";
import { useState } from "react";

const AboutContact = () => {
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
        <section className="mb-12">
          <GlassContainer className="p-8 flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="display text-2xl text-gold mb-3">Our Story</h2>
              <p className="mb-3 text-lg text-zinc-700 dark:text-zinc-200">
                Maroc Chic celebrates Morocco’s vibrant culture and rich
                craftsmanship. Our pieces are handmade by local artisans—women’s
                collectives and master jewelers—using age-old techniques and
                authentic materials.
              </p>
              <p className="mb-2 text-zinc-700 dark:text-zinc-200">
                Each product embodies the essence of Moroccan art. Our
                collections honor tradition, while infusing a touch of modern
                elegance.
              </p>
              <div className="flex gap-6 mt-7">
                <a href="https://instagram.com" className="hover:text-gold">
                  Instagram
                </a>
                <a href="https://facebook.com" className="hover:text-gold">
                  Facebook
                </a>
                <a href="mailto:info@marocchic.com" className="hover:text-gold">
                  Email
                </a>
              </div>
            </div>
            <div className="flex-1 max-w-md">
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
            </div>
          </GlassContainer>
        </section>
        {/* Store location example (if available) */}
        <GlassContainer className="p-6 mt-7">
          <h3 className="display text-lg text-gold mb-2">Our Storefront</h3>
          <p>123 Jewel Lane, Medina, Marrakech, Morocco</p>
        </GlassContainer>
      </main>
      <Footer />
    </div>
  );
};

export default AboutContact;

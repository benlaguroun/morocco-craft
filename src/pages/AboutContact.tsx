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
      <main className="max-w-[1000px] mx-auto px-3 py-10 space-y-12">
        {/* Our Story Section */}
        <GlassContainer className="p-8 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="display text-2xl text-gold mb-3">Our Story</h2>
            <p className="mb-3 text-lg text-zinc-700 dark:text-zinc-200">
              At Maroc Chic, we are driven by a passion for Morocco’s heritage
              and artisanal mastery. Founded by creatives with roots in both
              tradition and innovation, our mission is to empower local artisans
              and share their timeless craft with the world.
            </p>
            <p className="mb-2 text-zinc-700 dark:text-zinc-200">
              Every piece is handcrafted in Morocco using ethically sourced
              materials and techniques passed down through generations. From the
              vibrant souks of Marrakech to the quiet villages in the Atlas
              Mountains, our inspiration is authentically Moroccan and globally
              loved.
            </p>
            <div className="flex gap-6 mt-7">
              <a
                href="https://instagram.com"
                className="hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                className="hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a href="mailto:info@marocchic.com" className="hover:text-gold">
                Email
              </a>
            </div>
          </div>

          {/* Contact Form */}
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
              <button
                type="submit"
                className="mt-2 w-full py-2 bg-gold rounded-glass text-white font-bold hover:bg-emerald transition"
              >
                {sent ? "Sent!" : "Send Message"}
              </button>
              {sent && (
                <div className="text-sm text-emerald mt-2">
                  Thank you for contacting us! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </GlassContainer>

        {/* Our Values Section */}
        <GlassContainer className="p-8">
          <h3 className="text-xl font-semibold text-gold mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-200 space-y-2">
            <li>
              <strong>Authenticity:</strong> Every product tells a story rooted
              in Moroccan tradition.
            </li>
            <li>
              <strong>Empowerment:</strong> We partner with local women’s
              cooperatives and artisans.
            </li>
            <li>
              <strong>Sustainability:</strong> We use ethical practices and
              materials with low environmental impact.
            </li>
            <li>
              <strong>Community:</strong> We invest in artisan communities and
              celebrate cultural diversity.
            </li>
          </ul>
        </GlassContainer>

        {/* Our Team Section */}
        <GlassContainer className="p-8">
          <h3 className="text-xl font-semibold text-gold mb-4">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-zinc-700 dark:text-zinc-200">
            <div>
              <h4 className="font-bold">
                Amira Benyoussef – Founder & Creative Director
              </h4>
              <p>
                mohamed benlaguroun tradition with modern design, curating
                collections that honor Moroccan culture.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Youssef Khattabi – Head Artisan</h4>
              <p>
                Youssef leads our workshop in Fes, ensuring each creation
                reflects true craftsmanship and detail.
              </p>
            </div>
          </div>
        </GlassContainer>

        {/* Storefront Info */}
        <GlassContainer className="p-6 mt-7">
          <h3 className="display text-lg text-gold mb-2">Our Storefront</h3>
          <p className="text-zinc-700 dark:text-zinc-200">
            123 Jewel Lane, Medina, Marrakech, Morocco
            <br />
            Open: Monday to Saturday, 10am – 7pm
          </p>
        </GlassContainer>
      </main>
      <Footer />
    </div>
  );
};

export default AboutContact;

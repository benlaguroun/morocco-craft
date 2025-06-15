import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";

const About = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
    <Header />
    <main className="max-w-[1000px] mx-auto px-3 py-10">
      <GlassContainer className="p-8">
        <h2 className="display text-2xl text-gold mb-4">About Maroc Chic</h2>
        <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-200">
          Maroc Chic celebrates Morocco’s vibrant culture and rich
          craftsmanship. Our pieces are handmade by local artisans—women’s
          collectives and master jewelers—using age-old techniques and authentic
          materials.
        </p>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200">
          Each product embodies the essence of Moroccan art. Our collections
          honor tradition, while infusing a touch of modern elegance.
        </p>
        <p className="text-zinc-700 dark:text-zinc-200">
          Thank you for supporting sustainable, authentic Moroccan
          craftsmanship.
        </p>
      </GlassContainer>
    </main>
    <Footer />
  </div>
);

export default About;

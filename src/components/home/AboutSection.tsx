import GlassContainer from "@/components/GlassContainer";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 w-full max-w-[1400px] mx-auto px-4">
      <GlassContainer className="p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="display text-2xl md:text-3xl text-emerald dark:text-gold mb-4">
              Our Story
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-4">
              Maroc Chic brings you authentic Moroccan craftsmanship with a
              modern twist. Each piece is carefully selected from skilled
              artisans who have passed down their techniques through
              generations.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-6">
              We believe in preserving traditional arts while making them
              accessible to contemporary lifestyles. Every purchase supports
              local artisan communities in Morocco.
            </p>
            <Link
              to="/about-contact"
              className="inline-block bg-emerald text-white px-6 py-3 rounded-glass font-semibold hover:bg-gold transition"
            >
              Learn More
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/d5/42/80/d5428056620820466bb2921f09767a9e.jpg"
              alt="Moroccan Artisan"
              className="rounded-glass w-full max-w-md h-80 object-cover shadow-gold"
            />
          </div>
        </div>
      </GlassContainer>
    </section>
  );
};

export default AboutSection;

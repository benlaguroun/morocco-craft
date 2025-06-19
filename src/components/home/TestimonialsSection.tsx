import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "The silver ring I bought is absolutely stunning! The craftsmanship is incredible.",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/bd/8f/7c/bd8f7c3f236fb88b715bf4b93df31677.jpg",
  },
  {
    name: "Ahmed K.",
    text: "Fast shipping and beautiful products. The bag quality exceeded my expectations.",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/74/e9/72/74e972cc518a6a895763e07026749192.jpg",
  },
  {
    name: "Lisa R.",
    text: "Authentic Moroccan pieces with modern appeal. Love my ceramic tea set!",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/67/7b/77/677b77311c91e37a6c8f41889f3d257d.jpg",
  },
  {
    name: "John T.",
    text: "I gifted the leather bag and they absolutely loved it. Premium quality!",
    rating: 4,
    image:
      "https://i.pinimg.com/736x/b8/d1/c2/b8d1c22c1baae794a7e86577bdf53607.jpg",
  },
  {
    name: "Nadia B.",
    text: "Unique Moroccan items you can’t find elsewhere. I’m a fan for life!",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/03/93/52/0393521a550f426347283adc52c6b348.jpg",
  },
  {
    name: "Carlos E.",
    text: "Quick delivery and such elegant packaging. Highly recommended.",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/7f/2d/8b/7f2d8bfedda56269e50bc95c5d18cda0.jpg",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-20 w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="display text-3xl text-gold mb-2">
          What Our Customers Say
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg">
          Authentic reviews from our satisfied customers
        </p>
      </div>

      <div className="relative h-[360px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="rounded-full w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] flex flex-col justify-center items-center text-center bg-white/80 dark:bg-zinc-800/50 border border-yellow-300 shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] backdrop-blur-lg px-6 py-8 hover:bg-gold hover:text-white transition-all duration-300"
          >
            {/* Description */}
            <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base italic px-2 mb-2">
              "{current.text}"
            </p>

            {/* Avatar */}
            <img
              src={current.image}
              alt={current.name}
              className="w-16 h-16 rounded-full border-4 border-gold shadow-md mb-2 object-cover"
            />

            {/* Name */}
            <p className="text-gold font-semibold text-sm sm:text-base mb-1">
              {current.name}
            </p>

            {/* Stars */}
            <div className="flex justify-center">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-current" />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;

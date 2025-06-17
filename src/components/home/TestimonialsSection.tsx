import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "The silver ring I bought is absolutely stunning! The craftsmanship is incredible.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    text: "Fast shipping and beautiful products. The bag quality exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Lisa R.",
    text: "Authentic Moroccan pieces with modern appeal. Love my ceramic tea set!",
    rating: 5,
  },
  {
    name: "John T.",
    text: "I gifted the leather bag and they absolutely loved it. Premium quality!",
    rating: 4,
  },
  {
    name: "Nadia B.",
    text: "Unique Moroccan items you can’t find elsewhere. I’m a fan for life!",
    rating: 5,
  },
  {
    name: "Carlos E.",
    text: "Quick delivery and such elegant packaging. Highly recommended.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-20 w-full max-w-3xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="display text-3xl text-gold mb-2">
          What Our Customers Say
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg">
          Authentic reviews from our satisfied customers
        </p>
      </div>

      <div className="relative h-[240px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white dark:bg-zinc-900 shadow-lg p-6 text-center w-full max-w-xl hover:bg-gold hover:text-white transition-all duration-300"
          >
            <div className="flex justify-center mb-3">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 mb-3 italic px-2">
              "{current.text}"
            </p>
            <p className="text-gold font-semibold">- {current.name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;

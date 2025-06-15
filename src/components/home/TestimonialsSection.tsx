import GlassContainer from "@/components/GlassContainer";
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
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 w-full max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="display text-2xl md:text-3xl text-gold mb-2">
          What Our Customers Say
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg">
          Authentic reviews from our satisfied customers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <GlassContainer key={index} className="p-6 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4 italic">
              "{testimonial.text}"
            </p>
            <p className="text-gold font-semibold">- {testimonial.name}</p>
          </GlassContainer>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

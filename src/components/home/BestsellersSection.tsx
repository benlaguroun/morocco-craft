import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data";

const BestsellersSection = () => {
  return (
    <section className="pb-12 w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center mb-7">
        <h2 className="display text-2xl md:text-3xl text-emerald dark:text-gold mb-1">
          Bestsellers
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg">
          Shop the pieces our customers love the most
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-7">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default BestsellersSection;

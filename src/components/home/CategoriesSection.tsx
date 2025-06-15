import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    name: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
    to: "/products?category=jewelry",
  },
  {
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
    to: "/products?category=bags",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=400&q=80",
    to: "/products?category=accessories",
  },
];

const CategoriesSection = () => {
  return (
    <section className="pt-2 pb-12 w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center mb-7">
        <h2 className="display text-2xl md:text-3xl text-gold mb-1">
          Shop By Category
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg">
          Iconic styles and rare Moroccan finds
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

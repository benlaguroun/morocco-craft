import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    name: "Jewelry",
    image:
      "https://i.pinimg.com/736x/2b/61/ac/2b61ac4e106c8fd515cd0e085ace7a56.jpg",
    to: "/products?category=jewelry",
  },
  {
    name: "Bags",
    image:
      "https://i.pinimg.com/736x/18/45/b3/1845b3d387828a846fec005ea6c51c72.jpg",
    to: "/products?category=bags",
  },
  {
    name: "Accessories",
    image:
      "https://i.pinimg.com/736x/44/36/d7/4436d7d1542532047d1b765926886a68.jpg",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

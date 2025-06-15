import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { allProducts } from "@/data";

const Products = () => {
  const [searchParams] = useSearchParams();

  // Filtering
  const filterCategory = searchParams.get("category") || "all";
  // Sorting
  const sort = searchParams.get("sort") || "popularity";

  const filtered = allProducts.filter(
    (p) => filterCategory === "all" || p.category === filterCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    // By default, sort by ID (popularity stub)
    return a.id.localeCompare(b.id);
  });

  const getCategoryTitle = () => {
    if (filterCategory === "all") return "All Products";
    return filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
      <Header />
      <main className="w-full max-w-[1400px] mx-auto px-3 md:px-8 py-10">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="display text-3xl md:text-4xl text-gold mb-4">
            {getCategoryTitle()}
          </h1>
          <p className="text-zinc-800 dark:text-white/80">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {sorted.length > 0 ? (
            sorted.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <div className="col-span-full py-10 text-center">
              <p className="text-zinc-800 dark:text-white/60">
                No products found.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import * as React from "react";
import { useCart } from "../contexts/CartContext";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gold/10 before:to-transparent before:z-10";

// Helper functions used for cart/wishlist storage
function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
}
function setLocal<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

// Cart now expects array of CartProduct
type CartProduct = {
  id: string;
  quantity: number;
};

const ProductDetail = () => {
  const { id } = useParams();
  // Find product; supports variations/images or falls back to image
  const product = allProducts.find((p) => p.id === id) || allProducts[0];

  // Updated image gallery logic:
  // If product.images exists and is an array, use it; else, make array from single product.image
  // (TS-safe: avoid accessing .images if it does not exist)
  const images: string[] =
    Array.isArray((product as any).images) && (product as any).images.length > 0
      ? (product as any).images
      : [product.image];
  const [selectedImg, setSelectedImg] = React.useState(0);

  // Use Cart Context
  const { cart, addToCart } = useCart();

  const [wishlist, setWishlist] = React.useState<string[]>(() =>
    getLocal("wishlist", [])
  );
  React.useEffect(() => {
    setLocal("wishlist", wishlist);
  }, [wishlist]);

  // Wishlist button logic
  const handleWishlist = () => {
    if (!wishlist.includes(product.id)) {
      setWishlist([...wishlist, product.id]);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} added to wishlist.`,
      });
    } else {
      setWishlist(wishlist.filter((pid) => pid !== product.id));
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} removed from wishlist.`,
      });
    }
  };

  // For animated image transitions
  const [imgFade, setImgFade] = React.useState(false);
  function swapImg(idx: number) {
    if (idx === selectedImg) return;
    setImgFade(true);
    setTimeout(() => {
      setSelectedImg(idx);
      setImgFade(false);
    }, 180);
  }

  // Related products from the same category
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone font-sans">
      <Header />
      <main className="max-w-[1200px] mx-auto pt-10 pb-20 px-3 md:px-8 min-h-[700px]">
        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          {/* Product Image with Gallery */}
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <div
              className={`rounded-[2.5rem] p-2 shadow-xl bg-white/20 dark:bg-zinc-900/40 backdrop-blur-lg ${shimmer} group transition-all duration-300 w-full`}
            >
              <img
                src={images[selectedImg]}
                key={images[selectedImg]}
                alt={product.name}
                className={`rounded-[2.1rem] w-full h-[410px] md:h-[500px] object-cover shadow-gold scale-100 group-hover:scale-105 transition-all duration-300 ${
                  imgFade ? "opacity-0" : "opacity-100"
                } animate-fade-in`}
                draggable={false}
                style={{ userSelect: "none" }}
              />
            </div>
            {/* Image Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-5 justify-center">
                {images.map((img, idx) => (
                  <button
                    aria-label={`View variation ${idx + 1}`}
                    key={img}
                    onClick={() => swapImg(idx)}
                    className={`rounded-xl ring-2 transition 
                      ${
                        selectedImg === idx
                          ? "ring-gold scale-110 shadow-lg"
                          : "ring-transparent opacity-60 hover:opacity-100"
                      }
                      overflow-hidden bg-white/70 dark:bg-zinc-900/40 duration-200 h-16 w-16 focus:outline-none`}
                  >
                    <img
                      src={img}
                      alt={`Product variation ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col justify-between px-0 md:px-2">
            <div className="glass bg-white/70 dark:bg-zinc-800/80 shadow-xl rounded-[2rem] px-7 py-8 flex flex-col gap-6">
              {/* Name & Price */}
              <div className="flex flex-col gap-1">
                <span className="uppercase text-xs tracking-widest font-medium text-gold/80 mb-1">
                  Moroccan {product.category}
                </span>
                <h1 className="font-display text-3xl md:text-4xl text-gold drop-shadow-md">
                  {product.name}
                </h1>
              </div>
              {/* Rating & Price */}
              <div className="flex flex-wrap items-center gap-3 mt-1 mb-1">
                <span className="rounded-lg px-5 py-2 bg-gold text-white text-xl font-extrabold shadow-gold animate-pulse hover:scale-105 transition">{`$${product.price.toFixed(
                  2
                )}`}</span>
                <Badge
                  variant="secondary"
                  className="ml-2 px-3 py-1 bg-emerald/90 text-white font-bold animate-fade-in"
                >
                  In stock
                </Badge>
              </div>
              {/* Description */}
              <p className="text-zinc-800/90 dark:text-zinc-200 text-lg leading-relaxed mb-2 max-w-prose">
                {product.desc}
              </p>
              {/* Materials & Dimensions */}
              <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-300 text-base mt-1">
                <span className="px-4 py-2 glass bg-gold/5 border border-gold/20 rounded-xl">
                  <b>Materials: </b>
                  {product.materials}
                </span>
                <span className="px-4 py-2 glass bg-emerald/5 border border-emerald/20 rounded-xl">
                  <b>Dimensions: </b>
                  {product.dimensions}
                </span>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  className={`flex-1 py-3 rounded-[2rem] font-bold text-lg shadow-gold bg-gradient-to-r from-gold/90 to-emerald/90 text-white hover:from-emerald hover:to-gold hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95
                    ${
                      cart.some((item) => item.id === product.id)
                        ? "opacity-60 pointer-events-none"
                        : ""
                    }`}
                  onClick={() => addToCart(product.id)}
                >
                  <ShoppingCart className="mr-2 w-6 h-6" />
                  {cart.some((item) => item.id === product.id)
                    ? "In Cart"
                    : "Add to Cart"}
                </button>
                <button
                  className={`flex-1 py-3 rounded-[2rem] font-bold text-lg shadow-md bg-white/90 border border-gold/40 hover:bg-gold/10 transition-all flex items-center justify-center gap-2 active:scale-95
                    ${
                      wishlist.includes(product.id)
                        ? "text-red-500"
                        : "text-gold hover:text-emerald"
                    }`}
                  onClick={handleWishlist}
                  aria-label={
                    wishlist.includes(product.id)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"
                  }
                >
                  <Heart
                    className={`mr-1 w-6 h-6 ${
                      wishlist.includes(product.id) ? "fill-red-500" : ""
                    }`}
                  />
                  {wishlist.includes(product.id) ? "Wishlisted" : "Wishlist"}
                </button>
              </div>
              {/* Back to products */}
              <div className="mt-4">
                <Link
                  to="/products"
                  className="text-emerald hover:text-gold font-semibold underline underline-offset-2 transition-all"
                >
                  &larr; Back to products
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="display text-2xl text-gold mb-5">
              Related Products
            </h2>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-3 hide-scrollbar">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="min-w-[240px] max-w-xs transition-transform hover:scale-105"
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <style>
        {`
        @keyframes shimmer {
          0% { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        `}
      </style>
    </div>
  );
};
export default ProductDetail;

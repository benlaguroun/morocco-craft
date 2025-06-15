import GlassContainer from "./GlassContainer";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <GlassContainer className="flex flex-col group w-full max-w-xs min-h-[330px] shadow-xl glass-hover hover:scale-105 transition transform overflow-hidden">
    <Link to={`/products/${product.id}`} className="flex-1 block">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded-t-glass transition group-hover:scale-105"
        loading="lazy"
      />
    </Link>
    <div className="p-4 flex flex-col gap-2 justify-between flex-1">
      <Link to={`/products/${product.id}`}>
        <h3 className="font-display text-lg group-hover:text-gold transition">
          {product.name}
        </h3>
      </Link>
      <p className="text-gold text-xl font-semibold">
        ${product.price.toFixed(2)}
      </p>
      <button className="mt-2 flex items-center justify-center w-full gap-2 py-2 rounded-glass bg-gold/90 text-white shadow-gold hover:bg-gold transition font-semibold">
        <ShoppingCart className="w-5 h-5" />
        <span>Add to Cart</span>
      </button>
    </div>
  </GlassContainer>
);

export default ProductCard;

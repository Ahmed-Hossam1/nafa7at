import { Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types/perfume";
import { StarsLine } from "./StarsLine";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#efdcd4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden bg-[#f8eee9]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/20 opacity-0 transition group-hover:opacity-100">
          <Link
            to={`/product/${product.id}`}
            className="rounded-full bg-white p-3 text-[#bd7f6d] shadow-lg transition hover:scale-110"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>
      <div className="p-4 text-center">
        <Link to={`/product/${product.id}`} className="block group-hover:text-[#bd7f6d]">
          <h3 className="font-bold text-[#7d5b4c] transition">{product.name}</h3>
        </Link>
        <StarsLine reviews={product.reviews} />
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-[#f5e6df] p-2 text-[#bd7f6d] transition hover:bg-[#bd7f6d] hover:text-white"
          >
            <ShoppingBag size={18} />
          </button>
          <p className="text-lg font-bold text-[#9b624d]">{product.price}</p>
        </div>
      </div>
    </article>
  );
}

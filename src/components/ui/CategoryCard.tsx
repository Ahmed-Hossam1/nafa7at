import { Link } from "react-router-dom";
import { Category } from "../../types/perfume";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/shop"
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#efdcd4] transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <img
        src={category.image}
        alt={category.title}
        className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="p-4 text-center font-bold text-[#8f5f4c] transition group-hover:text-[#bd7f6d]">
        {category.title}
      </div>
    </Link>
  );
}

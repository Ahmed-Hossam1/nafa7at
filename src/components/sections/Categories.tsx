import { ChevronLeft } from "lucide-react";
import { categories } from "../../constants/perfumeData";
import { SectionTitle } from "../ui/SectionTitle";
import { CategoryCard } from "../ui/CategoryCard";

export function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle>تسوق حسب الفئة</SectionTitle>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-6">
        <button className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-[#d7aa98] bg-white text-[#9b624d] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          جميع العطور
          <ChevronLeft size={18} className="mt-2" />
        </button>
        {categories.map((cat) => (
          <CategoryCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
}

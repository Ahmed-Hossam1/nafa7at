import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { ProductCard } from "../components/ui/ProductCard";
import { SectionTitle } from "../components/ui/SectionTitle";
import { categories, products } from "../constants/perfumeData";

export function ShopPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "الكل" || product.category === selectedCategory;
    const matchesSearch =
      product.name.includes(searchQuery) ||
      product.description.includes(searchQuery) ||
      product.category.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      dir="rtl"
      className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]"
    >
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionTitle>متجرنا</SectionTitle>

        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("الكل")}
              className={`rounded-full px-6 py-2 text-sm font-bold transition ${selectedCategory === "الكل"
                  ? "bg-[#bd7f6d] text-white"
                  : "bg-white text-[#8f5f4c] ring-1 ring-[#efdcd4] hover:bg-[#f5e6df]"
                }`}
            >
              الكل
            </button>
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${selectedCategory === cat.title
                    ? "bg-[#bd7f6d] text-white"
                    : "bg-white text-[#8f5f4c] ring-1 ring-[#efdcd4] hover:bg-[#f5e6df]"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="relative max-w-md flex-1">
            <input
              type="text"
              placeholder="ابحث عن عطر..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[#efdcd4] bg-white px-12 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a47a68]" size={20} />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-xl text-[#a47a68]">لم نجد أي منتجات تطابق بحثك.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("الكل") }}
              className="mt-4 text-[#bd7f6d] underline font-bold"
            >
              إعادة تعيين البحث
            </button>
          </div>
        )}
      </section>

      <Footer />
    </motion.main>
  );
}

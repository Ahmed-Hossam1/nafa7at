import { motion } from "framer-motion";
import { ChevronRight, Gift, Headphones, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { StarsLine } from "../components/ui/StarsLine";
import { products } from "../constants/perfumeData";
import { useCart } from "../context/CartContext";

export function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#fffaf7]">
        <h1 className="text-2xl font-bold text-[#8f5f4c]">المنتج غير موجود</h1>
        <button onClick={() => navigate("/shop")} className="mt-4 text-[#bd7f6d] underline">
          العودة للمتجر
        </button>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      dir="rtl"
      className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]"
    >
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#a47a68]">
          <Link to="/" className="hover:text-[#bd7f6d]">الرئيسية</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-[#bd7f6d]">المتجر</Link>
          <ChevronRight size={14} />
          <span className="font-bold text-[#8f5f4c]">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-[#f8eee9] shadow-xl">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-2 inline-block w-fit rounded-full bg-[#f5e6df] px-4 py-1 text-xs font-bold text-[#bd7f6d]">
              {product.category}
            </span>
            <h1 className="mb-4 text-4xl font-extrabold text-[#9b624d] md:text-5xl">{product.name}</h1>

            <div className="mb-6 flex items-center gap-4">
              <StarsLine reviews={product.reviews} />
              <span className="text-[#a47a68] text-sm">|</span>
              <span className="text-sm font-bold text-[#bd7f6d]">متوفر في المخزون</span>
            </div>

            <p className="mb-8 text-xl font-bold text-[#9b624d] md:text-3xl">{product.price}</p>

            <p className="mb-10 text-lg leading-relaxed text-[#7d5b4c]">
              {product.description} يتميز هذا العطر بثبات عالي وفوحان مذهل يدوم طوال اليوم، مما يجعله الخيار الأمثل للمناسبات الراقية والاستخدام اليومي الفاخر.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => addToCart(product)}
                className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#bd7f6d] py-4 text-lg font-bold text-white shadow-lg shadow-[#bd7f6d]/25 transition hover:bg-[#a76b5b] hover:-translate-y-1"
              >
                <ShoppingBag size={20} /> إضافة للسلة
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#ead7cf] pt-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#bd7f6d]" size={24} />
                <span className="text-sm font-bold text-[#8f5f4c]">أصلي 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-[#bd7f6d]" size={24} />
                <span className="text-sm font-bold text-[#8f5f4c]">شحن سريع</span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="text-[#bd7f6d]" size={24} />
                <span className="text-sm font-bold text-[#8f5f4c]">دعم فني</span>
              </div>
              <div className="flex items-center gap-3">
                <Gift className="text-[#bd7f6d]" size={24} />
                <span className="text-sm font-bold text-[#8f5f4c]">تغليف هدايا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}

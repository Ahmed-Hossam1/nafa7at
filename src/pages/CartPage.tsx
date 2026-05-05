import { motion } from "framer-motion";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { SectionTitle } from "../components/ui/SectionTitle";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      dir="rtl"
      className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]"
    >
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <SectionTitle>سلة التسوق</SectionTitle>

        {cart.length > 0 ? (
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl border border-[#efdcd4] bg-white p-4 shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover bg-[#f8eee9]"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#7d5b4c]">{item.name}</h3>
                      <p className="text-sm text-[#a47a68]">{item.category}</p>
                      <p className="mt-1 font-bold text-[#bd7f6d]">{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#bd7f6d] transition hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="flex items-center gap-3 rounded-lg bg-[#f5e6df] p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="grid h-8 w-8 place-items-center rounded-md bg-white text-[#bd7f6d] shadow-sm transition hover:bg-[#bd7f6d] hover:text-white"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-4 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="grid h-8 w-8 place-items-center rounded-md bg-white text-[#bd7f6d] shadow-sm transition hover:bg-[#bd7f6d] hover:text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-[#efdcd4] bg-white p-6 shadow-md sticky top-32">
                <h3 className="mb-4 text-xl font-bold text-[#8f5f4c]">ملخص الطلب</h3>
                <div className="space-y-3 border-b border-[#ead7cf] pb-4">
                  <div className="flex justify-between">
                    <span className="text-[#a47a68]">عدد المنتجات</span>
                    <span className="font-bold">{cartCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a47a68]">الشحن</span>
                    <span className="text-green-600 font-bold">مجاني</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-lg">
                  <span className="font-bold text-[#8f5f4c]">الإجمالي</span>
                  <span className="font-extrabold text-[#bd7f6d]">{totalPrice} ريال</span>
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="mt-8 w-full rounded-xl bg-[#bd7f6d] py-4 font-bold text-white shadow-lg shadow-[#bd7f6d]/25 transition hover:bg-[#a76b5b] hover:-translate-y-0.5"
                >
                  إتمام الشراء
                </button>
                <Link
                  to="/shop"
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-[#a47a68] hover:text-[#bd7f6d]"
                >
                  <ArrowRight size={14} /> الاستمرار في التسوق
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6 grid h-24 w-24 place-items-center rounded-full bg-[#f5e6df] text-[#bd7f6d]">
              <ShoppingBag size={48} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-[#8f5f4c]">سلتك فارغة</h3>
            <p className="mb-8 text-[#a47a68]">يبدو أنك لم تضف أي عطور إلى سلتك بعد.</p>
            <Link
              to="/shop"
              className="rounded-xl bg-[#bd7f6d] px-10 py-3 font-bold text-white transition hover:bg-[#a76b5b]"
            >
              ابدأ التسوق
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </motion.main>
  );
}

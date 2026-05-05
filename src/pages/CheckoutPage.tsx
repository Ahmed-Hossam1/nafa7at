import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { SectionTitle } from "../components/ui/SectionTitle";
import { useCart } from "../context/CartContext";

export function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate("/success");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]">
        <Header />
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <h2 className="text-2xl font-bold text-[#8f5f4c]">سلة التسوق فارغة</h2>
          <button onClick={() => navigate("/shop")} className="mt-4 text-[#bd7f6d] underline font-bold">
            العودة للمتجر
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      dir="rtl"
      className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]"
    >
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle>إتمام الطلب</SectionTitle>

        <form onSubmit={handleCheckout} className="grid gap-10 lg:grid-cols-3">
          {/* Shipping & Payment Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-[#efdcd4]">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#8f5f4c]">
                <Truck className="text-[#bd7f6d]" /> معلومات الشحن
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#8f5f4c]">الاسم الأول</label>
                  <input required type="text" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#8f5f4c]">اسم العائلة</label>
                  <input required type="text" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" />
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <label className="text-sm font-bold text-[#8f5f4c]">العنوان بالتفصيل</label>
                <input required type="text" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" placeholder="الحي، الشارع، رقم المبنى" />
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#8f5f4c]">المدينة</label>
                  <input required type="text" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#8f5f4c]">رقم الجوال</label>
                  <input required type="tel" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" placeholder="05xxxxxxxx" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm border border-[#efdcd4]">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#8f5f4c]">
                <CreditCard className="text-[#bd7f6d]" /> طريقة الدفع
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {["مدى / فيزا", "Apple Pay", "الدفع عند الاستلام"].map((method) => (
                  <label key={method} className="relative flex cursor-pointer items-center justify-center rounded-xl border border-[#efdcd4] p-4 transition hover:bg-[#f5e6df]">
                    <input type="radio" name="payment" className="peer absolute opacity-0" defaultChecked={method === "مدى / فيزا"} />
                    <span className="text-sm font-bold text-[#8f5f4c] peer-checked:text-[#bd7f6d]">{method}</span>
                    <div className="absolute inset-0 rounded-xl ring-2 ring-transparent transition peer-checked:ring-[#bd7f6d]" />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl bg-white p-6 shadow-md border border-[#efdcd4] sticky top-32">
              <h3 className="mb-4 text-xl font-bold text-[#8f5f4c]">ملخص الطلب</h3>
              <div className="mb-6 max-h-60 overflow-y-auto space-y-3 border-b border-[#ead7cf] pb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[#a47a68]">{item.name} × {item.quantity}</span>
                    <span className="font-bold">{(parseInt(item.price.replace(/\D/g, "")) * item.quantity)} ريال</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 border-b border-[#ead7cf] pb-4">
                <div className="flex justify-between">
                  <span className="text-[#a47a68]">الإجمالي الفرعي</span>
                  <span className="font-bold">{totalPrice} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a47a68]">الشحن</span>
                  <span className="text-green-600 font-bold">مجاني</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xl">
                <span className="font-bold text-[#8f5f4c]">الإجمالي</span>
                <span className="font-extrabold text-[#bd7f6d]">{totalPrice} ريال</span>
              </div>
              <button
                disabled={isProcessing}
                type="submit"
                className="mt-8 w-full rounded-xl bg-[#bd7f6d] py-4 font-bold text-white shadow-lg shadow-[#bd7f6d]/25 transition hover:bg-[#a76b5b] hover:-translate-y-0.5 disabled:opacity-70"
              >
                {isProcessing ? "جاري المعالجة..." : "تأكيد الطلب"}
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#a47a68]">
                <ShieldCheck size={14} /> دفع آمن 100%
              </div>
            </div>
          </div>
        </form>
      </section>

      <Footer />
    </motion.main>
  );
}

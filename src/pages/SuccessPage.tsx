import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function SuccessPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      dir="rtl"
      className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]"
    >
      <Header />

      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-full bg-green-100 text-green-600">
          <CheckCircle size={48} />
        </div>

        <h1 className="mb-4 text-4xl font-extrabold text-[#9b624d]">تم استلام طلبك بنجاح!</h1>
        <p className="mb-10 text-lg leading-relaxed text-[#7d5b4c]">
          شكراً لتسوقك من "نفحات". طلبك الآن قيد المعالجة، وسنقوم بإرسال رسالة نصية لك عند شحن الطلب.
        </p>

        <div className="rounded-3xl border border-[#efdcd4] bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between border-b border-[#ead7cf] pb-4">
            <span className="text-[#a47a68]">رقم الطلب</span>
            <span className="font-bold">#NAF-82739</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#a47a68]">وقت التوصيل المتوقع</span>
            <span className="font-bold">2-3 أيام عمل</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/shop"
            className="flex-1 rounded-xl bg-[#bd7f6d] py-4 font-bold text-white shadow-lg shadow-[#bd7f6d]/25 transition hover:bg-[#a76b5b]"
          >
            العودة للمتجر
          </Link>
          <Link
            to="/"
            className="flex-1 rounded-xl border border-[#bd7f6d] py-4 font-bold text-[#bd7f6d] transition hover:bg-[#bd7f6d] hover:text-white"
          >
            تتبع الطلب
          </Link>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}

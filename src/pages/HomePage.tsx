import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Newsletter } from "../components/layout/Newsletter";
import { Benefits } from "../components/sections/Benefits";
import { Categories } from "../components/sections/Categories";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { Hero } from "../components/sections/Hero";
import { Reviews } from "../components/sections/Reviews";
import { SpecialOffer } from "../components/sections/SpecialOffer";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      dir="rtl"
      className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]"
    >
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SpecialOffer />
      <Benefits />
      <Reviews />
      <Newsletter />
      <Footer />

      <button className="fixed bottom-6 left-6 grid h-14 w-14 place-items-center rounded-full bg-[#bd7f6d] text-white shadow-xl shadow-[#bd7f6d]/35 transition hover:scale-105 active:scale-95">
        <MessageCircle size={24} />
      </button>
    </motion.main>
  );
}

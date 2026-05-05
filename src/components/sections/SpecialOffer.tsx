import { ChevronLeft } from "lucide-react";
import { img } from "../../constants/perfumeData";

export function SpecialOffer() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="grid overflow-hidden rounded-3xl bg-gradient-to-l from-[#e9b7aa] via-[#f3d7cf] to-[#fff1ec] shadow-xl shadow-[#d7aa98]/20 md:grid-cols-3">
        <div className="h-64 md:h-auto">
          <img src={img.offer} alt="Special offer" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center p-8 text-center md:col-span-1">
          <h3 className="text-3xl font-bold text-[#8f5f4c]">عروض خاصة لفترة محدودة</h3>
          <p className="mt-3 text-[#7d5b4c]">خصومات تصل إلى 30% على مجموعة مختارة</p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#bd7f6d] px-8 py-3 font-bold text-white transition hover:bg-[#a76b5b]">
            تسوق العروض <ChevronLeft size={17} />
          </button>
        </div>
        <div className="flex items-center justify-center border-t border-white/50 p-8 md:border-r md:border-t-0">
          <div className="text-center text-[#9b624d]">
            <p className="text-xl">خصم حتى</p>
            <p className="text-7xl font-light">30%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

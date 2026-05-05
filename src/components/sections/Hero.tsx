import { Award, ChevronLeft, Gift, Lock, Truck } from "lucide-react";
import { img } from "../../constants/perfumeData";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8eee9]">
      <div className="absolute inset-0 bg-gradient-to-l from-[#fffaf7] via-[#fffaf7]/65 to-transparent" />
      <div className="mx-auto grid min-h-[520px] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="relative z-10 max-w-xl">
          <p className="mb-3 text-xl font-medium text-[#7d5b4c]">اكتشف عالم</p>
          <h1 className="mb-5 text-5xl font-extrabold leading-tight text-[#9b624d] md:text-7xl">
            العطور الراقية
          </h1>
          <p className="mb-8 text-lg leading-9 text-[#6f4a3d]">
            عطور مختارة بعناية لتمنحك حضورًا لا يُنسى وفخامة تدوم مع كل رشة.
          </p>
          <button className="inline-flex items-center gap-3 rounded-md bg-[#bd7f6d] px-10 py-4 font-bold text-white shadow-lg shadow-[#bd7f6d]/25 transition hover:-translate-y-0.5 hover:bg-[#a76b5b]">
            ابدأ التسوق <ChevronLeft size={18} />
          </button>
        </div>

        <div className="relative z-10 h-[430px] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#c99b89]/25">
          <img src={img.hero} alt="Perfume hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7d5b4c]/15 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 border-y border-[#ead7cf] bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
          {[
            { icon: Truck, title: "شحن سريع وآمن", text: "لكافة مناطق المملكة" },
            { icon: Gift, title: "عينات مجانية", text: "مع كل طلب" },
            { icon: Award, title: "جودة مضمونة 100%", text: "منتجات أصلية" },
            { icon: Lock, title: "دفع آمن", text: "تجربة تسوق آمنة" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center justify-center gap-3 text-center">
              <Icon className="text-[#bd7f6d]" size={30} />
              <div>
                <p className="font-bold text-[#8f5f4c]">{title}</p>
                <p className="text-xs text-[#a47a68]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

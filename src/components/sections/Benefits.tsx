import { Gift, Headphones, ShieldCheck, Truck } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const benefits = [
  { icon: ShieldCheck, title: "منتجات أصلية 100%", desc: "نضمن لك أصالة وجودة كل منتج" },
  { icon: Gift, title: "تغليف فاخر", desc: "تغليف أنيق مناسب للهدايا" },
  { icon: Truck, title: "شحن سريع", desc: "توصيل سريع وآمن لكافة المناطق" },
  { icon: Headphones, title: "خدمة عملاء مميزة", desc: "نحن هنا لخدمتك على مدار الساعة" },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <SectionTitle>لماذا تختار نفحات؟</SectionTitle>
      <div className="grid gap-7 md:grid-cols-4">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-[#efdcd4] transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#f5e6df] text-[#bd7f6d]">
              <Icon size={30} />
            </div>
            <h3 className="font-bold text-[#8f5f4c]">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#a47a68]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

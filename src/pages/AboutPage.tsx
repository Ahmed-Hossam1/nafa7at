import { Award, Heart, ShieldCheck, Star } from "lucide-react";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { SectionTitle } from "../components/ui/SectionTitle";

export function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle>قصتنا</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-[#9b624d]">تراث عريق وروح عصرية</h2>
            <p className="mb-6 text-lg leading-relaxed text-[#7d5b4c]">
              بدأت "نفحات" من شغف عميق بالعطور الشرقية الأصيلة، حيث نؤمن بأن كل عطر يحكي قصة، وكل رشة تحمل ذكرى. نحن نسعى لتقديم أجود أنواع العطور التي تجمع بين عبق التراث وفخامة الحاضر.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[#7d5b4c]">
              منذ انطلاقتنا، وضعنا نصب أعيننا معايير الجودة والتميز، فنحن نختار مكوناتنا بعناية فائقة من أفضل المصادر العالمية والمحلية لنضمن لعملائنا تجربة عطرية لا تُنسى.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm border border-[#efdcd4]">
                <Award className="text-[#bd7f6d] mb-3" size={32} />
                <span className="font-bold text-[#8f5f4c]">جودة ملكية</span>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm border border-[#efdcd4]">
                <Heart className="text-[#bd7f6d] mb-3" size={32} />
                <span className="font-bold text-[#8f5f4c]">شغف للإبداع</span>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-[3rem] shadow-2xl shadow-[#c99b89]/30">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
              alt="About Nafahat"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7d5b4c]/30 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8eee9] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle>قيمنا</SectionTitle>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "الأمانة", desc: "نحن صادقون في كل ما نقدمه من معلومات ومكونات لمنتجاتنا." },
              { icon: Star, title: "التميز", desc: "نسعى دائمًا لنكون الأفضل في عالم العطور من خلال الابتكار المستمر." },
              { icon: Heart, title: "رضا العميل", desc: "عميلنا هو محور اهتمامنا، ونسعى جاهدين لتجاوز توقعاته دائمًا." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-[#efdcd4]">
                <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#f5e6df] text-[#bd7f6d]">
                  <Icon size={32} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#8f5f4c]">{title}</h3>
                <p className="text-[#a47a68] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

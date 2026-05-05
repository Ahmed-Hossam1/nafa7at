import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { SectionTitle } from "../components/ui/SectionTitle";

export function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fffaf7] font-sans text-[#6f4a3d]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle>تواصل معنا</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-extrabold text-[#9b624d]">نحن هنا للإجابة على استفساراتكم</h2>
            <p className="mb-10 text-lg text-[#7d5b4c]">
              يسعدنا تواصلكم معنا، سواء كان لديكم سؤال حول منتجاتنا أو ترغبون في تقديم اقتراح، فريقنا جاهز لخدمتكم.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f5e6df] text-[#bd7f6d]">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm text-[#a47a68]">اتصل بنا</p>
                  <p className="text-xl font-bold text-[#8f5f4c]">+966 55 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f5e6df] text-[#bd7f6d]">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm text-[#a47a68]">راسلنا عبر البريد</p>
                  <p className="text-xl font-bold text-[#8f5f4c]">info@nafahat.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f5e6df] text-[#bd7f6d]">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-[#a47a68]">موقعنا</p>
                  <p className="text-xl font-bold text-[#8f5f4c]">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="mb-4 font-bold text-[#8f5f4c]">تابعنا على منصات التواصل</p>
              <div className="flex gap-4">
                <a href="#" className="grid h-12 w-12 place-items-center rounded-full bg-white border border-[#efdcd4] text-[#bd7f6d] transition hover:bg-[#bd7f6d] hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="grid h-12 w-12 place-items-center rounded-full bg-white border border-[#efdcd4] text-[#bd7f6d] transition hover:bg-[#bd7f6d] hover:text-white">
                  <MessageCircle size={24} />
                </a>
                <a href="#" className="grid h-12 w-12 place-items-center rounded-full bg-white border border-[#efdcd4] text-[#bd7f6d] transition hover:bg-[#bd7f6d] hover:text-white">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-[#efdcd4]">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#8f5f4c]">الاسم بالكامل</label>
                  <input type="text" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" placeholder="أدخل اسمك" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#8f5f4c]">البريد الإلكتروني</label>
                  <input type="email" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" placeholder="example@mail.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#8f5f4c]">الموضوع</label>
                <input type="text" className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" placeholder="عن ماذا تود الاستفسار؟" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#8f5f4c]">الرسالة</label>
                <textarea rows={5} className="w-full rounded-xl border border-[#efdcd4] bg-[#fffaf7] px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd7f6d]/20" placeholder="اكتب رسالتك هنا..." />
              </div>
              <button className="w-full rounded-xl bg-[#bd7f6d] py-4 font-bold text-white shadow-lg shadow-[#bd7f6d]/25 transition hover:bg-[#a76b5b] hover:-translate-y-1">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

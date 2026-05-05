import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/perfumeData";

export function Footer() {
  return (
    <footer className="bg-[#fffaf7] px-4 py-14 text-[#7d5b4c]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 inline-block text-4xl font-bold text-[#b47763]">نفحات</Link>
          <p className="leading-8 text-[#8f5f4c]">
            وجهتك الأولى لعطور فاخرة مختارة بعناية لتمنحك تجربة عطرية لا تُنسى.
          </p>
          <div className="mt-5 flex gap-3 text-[#bd7f6d]">
            <Instagram size={22} className="cursor-pointer hover:scale-110 transition" />
            <MessageCircle size={22} className="cursor-pointer hover:scale-110 transition" />
            <Mail size={22} className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        <div>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-[#bd7f6d] transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-[#8f5f4c]">معلومات المتجر</h3>
          <ul className="space-y-3 text-sm">
            {[
              "الأسئلة الشائعة",
              "سياسة الشحن",
              "سياسة الاسترجاع",
              "الشروط والأحكام",
              "سياسة الخصوصية",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#bd7f6d] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-[#8f5f4c]">تواصل معنا</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} /> +966 55 123 4567
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> info@nafahat.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} /> الرياض، المملكة العربية السعودية
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#ead7cf] pt-6 text-xs text-[#a47a68] md:flex-row">
        <p>جميع الحقوق محفوظة © 2025 نفحات للعطور</p>
        <div className="flex gap-2 font-bold">
          <span>Apple Pay</span>
          <span>mada</span>
          <span>VISA</span>
          <span>Mastercard</span>
        </div>
      </div>
    </footer>
  );
}

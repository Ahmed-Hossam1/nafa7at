import { Category, Product, Review } from "../types/perfume";

export const img = {
  hero: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1600&auto=format&fit=crop",
  bottle1: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=900&auto=format&fit=crop",
  bottle2: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=900&auto=format&fit=crop",
  bottle3: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=900&auto=format&fit=crop",
  bottle4: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=900&auto=format&fit=crop",
  bottle5: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=900&auto=format&fit=crop",
  bottle6: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop",
  bottle7: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=900&auto=format&fit=crop",
  bottle8: "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?q=80&w=900&auto=format&fit=crop",
  offer: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop",
};

export const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "العطور", path: "/shop" },
  { name: "المجموعات", path: "/shop" },
  { name: "عروضنا", path: "/shop" },
  { name: "من نحن", path: "/about" },
  { name: "تواصل معنا", path: "/contact" },
];

export const categories: Category[] = [
  { title: "عطور نسائية", image: img.bottle1 },
  { title: "عطور رجالية", image: img.bottle4 },
  { title: "عطور شرقية", image: img.bottle3 },
  { title: "عطور فرنسية", image: img.bottle2 },
  { title: "عطور مميزة", image: img.bottle5 },
  { title: "دهن العود", image: img.bottle7 },
];

export const products: (Product & { category: string; description: string })[] = [
  { 
    id: "1", 
    name: "مسك الورد", 
    price: "289 ريال", 
    image: img.bottle1, 
    reviews: 128, 
    category: "عطور نسائية",
    description: "مزيج ساحر من الورد الطائفي والمسك الأبيض الصافي."
  },
  { 
    id: "2", 
    name: "عود فاخر", 
    price: "329 ريال", 
    image: img.bottle4, 
    reviews: 96, 
    category: "عطور رجالية",
    description: "خلاصة العود الكمبودي المعتق لإطلالة مهيبة."
  },
  { 
    id: "3", 
    name: "عنبر الذكرى", 
    price: "299 ريال", 
    image: img.bottle3, 
    reviews: 154, 
    category: "عطور شرقية",
    description: "دفء العنبر مع نفحات من التوابل الشرقية النادرة."
  },
  { 
    id: "4", 
    name: "ليالي الشرق", 
    price: "349 ريال", 
    image: img.bottle2, 
    reviews: 112, 
    category: "عطور فرنسية",
    description: "عطر يجمع بين الرقة الفرنسية والجاذبية الشرقية."
  },
  { 
    id: "5", 
    name: "أريج الحروف", 
    price: "289 ريال", 
    image: img.bottle5, 
    reviews: 87, 
    category: "عطور مميزة",
    description: "سيمفونية عطرية من الفواكه والزهور المنعشة."
  },
  { 
    id: "6", 
    name: "مخلط الملوك", 
    price: "450 ريال", 
    image: img.bottle6, 
    reviews: 210, 
    category: "عطور شرقية",
    description: "تركيبة ملكية خاصة من دهن العود والورد والصندل."
  },
  { 
    id: "7", 
    name: "سحر الغروب", 
    price: "275 ريال", 
    image: img.bottle7, 
    reviews: 45, 
    category: "عطور نسائية",
    description: "نفحات هادئة من الياسمين والفانيليا تعانق بشرتك."
  },
  { 
    id: "8", 
    name: "فرسان نجد", 
    price: "310 ريال", 
    image: img.bottle8, 
    reviews: 132, 
    category: "عطور رجالية",
    description: "عطر قوي وجريء يعكس الشخصية القيادية."
  },
];

export const reviews: Review[] = [
  { name: "سارة عبد الله", text: "منتجات رائعة وثبات العطور ممتاز والتغليف فاخر جدًا.", avatar: "https://i.pravatar.cc/100?img=47" },
  { name: "محمد السبيعي", text: "من أفضل المتاجر اللي تعاملت معها، جودة وسرعة في التوصيل.", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "أمل العنزي", text: "عطور راقية وأسعار مناسبة، أنصح الجميع بالتجربة.", avatar: "https://i.pravatar.cc/100?img=44" },
];

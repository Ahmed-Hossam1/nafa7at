import { products } from "../../constants/perfumeData";
import { ProductCard } from "../ui/ProductCard";
import { SectionTitle } from "../ui/SectionTitle";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <SectionTitle>عطورنا المميزة</SectionTitle>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

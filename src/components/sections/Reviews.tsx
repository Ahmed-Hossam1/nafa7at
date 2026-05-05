import { reviews } from "../../constants/perfumeData";
import { SectionTitle } from "../ui/SectionTitle";
import { StarsLine } from "../ui/StarsLine";

export function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <SectionTitle>آراء عملائنا</SectionTitle>
      <div className="grid gap-7 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.name} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#efdcd4]">
            <div className="mb-4 flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-14 w-14 rounded-full object-cover ring-4 ring-[#f5e6df]"
              />
              <div>
                <h3 className="font-bold text-[#8f5f4c]">{review.name}</h3>
                <StarsLine />
              </div>
            </div>
            <p className="leading-8 text-[#7d5b4c]">“{review.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

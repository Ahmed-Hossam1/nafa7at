import { Star } from "lucide-react";

export function StarsLine({ reviews }: { reviews?: number | string }) {
  return (
    <div className="mt-2 flex items-center justify-center gap-1 text-[#d49b48]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
      {reviews !== undefined && reviews !== "" && (
        <span className="mr-1 text-xs text-[#a47a68]">({reviews})</span>
      )}
    </div>
  );
}

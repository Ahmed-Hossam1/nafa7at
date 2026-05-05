import React from "react";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-bold text-[#8f5f4c] md:text-3xl">{children}</h2>
      <div className="mx-auto mt-3 flex w-28 items-center justify-center gap-2 text-[#c99b89]">
        <span className="h-px flex-1 bg-[#e8cfc5]" />
        <span className="h-2 w-2 rotate-45 border border-[#c99b89]" />
        <span className="h-px flex-1 bg-[#e8cfc5]" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-[#dca69a] px-4 py-10 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div className="flex items-center gap-5">
          <Mail size={54} className="opacity-80" />
          <div>
            <h2 className="text-2xl font-bold">اشترك في نشرتنا البريدية</h2>
            <p className="mt-2 text-white/85">كن أول من يعلم بالعروض الجديدة والمنتجات الحصرية</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex overflow-hidden rounded-xl bg-white p-2 shadow-lg"
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 bg-transparent px-4 text-right text-[#7d5b4c] outline-none"
            placeholder="أدخل بريدك الإلكتروني"
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            disabled={status !== "idle"}
            className="rounded-lg bg-[#bd7f6d] px-7 py-3 font-bold text-white transition hover:bg-[#a76b5b] disabled:opacity-70"
          >
            {status === "loading" ? "جاري الاشتراك..." : status === "success" ? "تم الاشتراك!" : "اشترك الآن"}
          </button>
        </form>
      </div>
    </section>
  );
}

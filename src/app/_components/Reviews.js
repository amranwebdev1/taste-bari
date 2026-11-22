import { Star } from "lucide-react";
import { REVIEWS } from "@/data/site";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <h2 className="font-display text-3xl md:text-4xl">গ্রাহকরা যা বলছেন</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-3xl bg-sand/60 p-6">
            <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} className="fill-current" />)}</div>
            <blockquote className="mt-3 text-[17px]">{r.text}</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-ember">{r.name}, {r.place}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

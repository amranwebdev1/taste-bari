import { ChefHat, Flame, Truck } from "lucide-react";
import { FEATURES } from "@/data/site";

const ICONS = { chef: ChefHat, flame: Flame, truck: Truck };

export default function Features() {
  return (
    <section id="why" className="bg-sand/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl md:text-4xl">কেন আমাদের বিরিয়ানি</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {FEATURES.map(({ icon, title, text }) => {
            const Icon = ICONS[icon];
            return (
              <article key={title} className="rounded-3xl bg-cream p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember"><Icon size={24} /></span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-ink/65">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

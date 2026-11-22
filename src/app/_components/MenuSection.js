"use client";
import { useState } from "react";
import MenuCard from "./MenuCard";
import { MENU } from "@/data/menu";

export default function MenuSection() {
  const [tab, setTab] = useState(1);
  return (
    <section id="menu" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="font-display text-3xl md:text-4xl">আজকের মেনু</h2>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2" role="tablist">
        {MENU.map((c, n) => (
          <button
            key={c.cat}
            role="tab"
            aria-selected={tab === n}
            onClick={() => setTab(n)}
            className={`shrink-0 rounded-full px-5 py-2.5 font-semibold transition ${tab === n ? "bg-ink text-cream" : "bg-sand text-ink/70 hover:bg-sand/70"}`}
          >
            {c.cat}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MENU[tab].items.map((item) => <MenuCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}

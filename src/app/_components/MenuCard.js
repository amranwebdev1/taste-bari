"use client";
import { Plus, Minus } from "lucide-react";
import Photo from "@/components/Photo";
import { useCart } from "@/components/CartProvider";
import { img } from "@/data/menu";
import { taka, bn } from "@/lib/format";

export default function MenuCard({ item }) {
  const { qty, add, dec } = useCart();
  const q = qty[item.id] || 0;

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:shadow-xl">
      <div className="relative">
        <Photo src={img(item.photo, 700)} alt={item.name} className="aspect-[4/3] w-full transition duration-500 group-hover:scale-105" />
        {item.tag && <span className="absolute left-3 top-3 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white">{item.tag}</span>}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="mt-1 min-h-12 text-[15px] text-ink/60">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <b className="text-xl text-ember">{taka(item.price)}</b>
          {q ? (
            <div className="flex items-center gap-2">
              <button onClick={() => dec(item.id)} aria-label="কমান" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20"><Minus size={18} /></button>
              <output className="w-6 text-center text-lg font-semibold">{bn(q)}</output>
              <button onClick={() => add(item.id)} aria-label="বাড়ান" className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream"><Plus size={18} /></button>
            </div>
          ) : (
            <button onClick={() => add(item.id)} className="flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-semibold text-cream transition hover:bg-ember"><Plus size={18} /> যোগ করুন</button>
          )}
        </div>
      </div>
    </article>
  );
}

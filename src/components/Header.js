"use client";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";
import { SITE } from "@/data/site";

export default function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-display text-2xl text-ember">{SITE.name}</a>
        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          <a href="#menu" className="hover:text-ember">মেনু</a>
          <a href="#why" className="hover:text-ember">কেন আমরা</a>
          <a href="#contact" className="hover:text-ember">যোগাযোগ</a>
        </nav>
        <button onClick={() => setOpen(true)} aria-label="কার্ট খুলুন" className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream">
          <ShoppingBag size={20} />
          {count > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-ember px-1 text-xs font-semibold">{count}</span>}
        </button>
      </div>
    </header>
  );
}

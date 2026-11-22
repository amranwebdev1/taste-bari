"use client";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { taka, bn } from "@/lib/format";

export default function CartBar() {
  const { count, subtotal, setOpen } = useCart();
  if (!count) return null;
  return (
    <button onClick={() => setOpen(true)} className="fixed inset-x-4 bottom-4 z-30 mx-auto flex max-w-xl items-center justify-between rounded-2xl bg-ember px-5 py-4 font-semibold text-white shadow-2xl shadow-ember/40">
      <span className="flex items-center gap-2"><ShoppingBag size={20} /> {bn(count)}টি আইটেম</span>
      <span>{taka(subtotal)} · কার্ট দেখুন</span>
    </button>
  );
}

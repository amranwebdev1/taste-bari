"use client";
import { MessageCircle } from "lucide-react";
import { useCart } from "./CartProvider";
import { SITE } from "@/data/site";

export default function WhatsAppFab() {
  const { count } = useCart();
  const text = encodeURIComponent("আসসালামু আলাইকুম, আমি একটা বিষয়ে জানতে চাই।");
  return (
    <a
      href={`https://wa.me/${SITE.wa}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="হোয়াটসঅ্যাপে যোগাযোগ করুন"
      className={`fixed right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/25 transition hover:scale-105 ${count > 0 ? "bottom-24" : "bottom-5"}`}
    >
      <MessageCircle size={28} />
    </a>
  );
}

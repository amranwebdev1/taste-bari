"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { X, Plus, Minus, Send, MessageCircle } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { SITE, AREAS } from "@/data/site";
import { taka, bn } from "@/lib/format";
import { validateOrder } from "@/lib/validators";

const input = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-ember";

export default function CartDrawer() {
  const { lines, subtotal, open, setOpen, add, dec, clear } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", area: "sadar" });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  if (!open) return null;

  const fee = AREAS.find((a) => a.id === form.area).fee;
  const total = subtotal + fee;
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  

  async function submit(e) {
    e.preventDefault();
    const er = validateOrder(form);
    setErrors(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items: lines.map((l) => ({ id: l.id, qty: l.qty })) }),
      });
      if (!res.ok) throw new Error();
      toast.success("অর্ডার পেয়েছি! শীঘ্রই ফোন করব।");
      clear();
      setOpen(false);
    } catch {
      toast.error("অর্ডার পাঠানো যায়নি। আবার চেষ্টা করুন।");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 md:items-center" onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} className="sheet max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] bg-cream p-6 md:rounded-[2rem]" role="dialog" aria-label="আপনার কার্ট">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">আপনার অর্ডার</h2>
          <button onClick={() => setOpen(false)} aria-label="বন্ধ করুন" className="flex h-10 w-10 items-center justify-center rounded-full bg-sand"><X size={20} /></button>
        </div>

        {!lines.length ? (
          <p className="py-10 text-center text-ink/60">কার্ট খালি। মেনু থেকে খাবার যোগ করুন।</p>
        ) : (
          <form onSubmit={submit} noValidate className="mt-4 space-y-4">
            <ul className="divide-y divide-ink/10">
              {lines.map((l) => (
                <li key={l.id} className="flex items-center justify-between gap-3 py-3">
                  <div><p className="font-semibold">{l.name}</p><p className="text-sm text-ink/60">{taka(l.price)}</p></div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => dec(l.id)} aria-label="কমান" className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20"><Minus size={16} /></button>
                    <output className="w-5 text-center font-semibold">{bn(l.qty)}</output>
                    <button type="button" onClick={() => add(l.id)} aria-label="বাড়ান" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream"><Plus size={16} /></button>
                  </div>
                </li>
              ))}
            </ul>

            <label className="block text-sm font-semibold">ডেলিভারি এলাকা
              <select value={form.area} onChange={set("area")} className={`${input} mt-1`}>
                {AREAS.map((a) => <option key={a.id} value={a.id}>{a.label} ({taka(a.fee)})</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold">আপনার নাম
              <input value={form.name} onChange={set("name")} autoComplete="name" className={`${input} mt-1`} />
              {errors.name && <small className="font-normal text-ember">{errors.name}</small>}
            </label>
            <label className="block text-sm font-semibold">মোবাইল নম্বর
              <input value={form.phone} onChange={set("phone")} inputMode="numeric" maxLength={11} autoComplete="tel" className={`${input} mt-1`} />
              {errors.phone && <small className="font-normal text-ember">{errors.phone}</small>}
            </label>
            <label className="block text-sm font-semibold">পূর্ণ ঠিকানা
              <textarea value={form.address} onChange={set("address")} rows={2} autoComplete="street-address" className={`${input} mt-1`} />
              {errors.address && <small className="font-normal text-ember">{errors.address}</small>}
            </label>

            <dl className="space-y-1 rounded-2xl bg-sand/70 p-4 text-[15px]">
              <div className="flex justify-between"><dt>খাবারের দাম</dt><dd>{taka(subtotal)}</dd></div>
              <div className="flex justify-between"><dt>ডেলিভারি চার্জ</dt><dd>{taka(fee)}</dd></div>
              <div className="flex justify-between border-t border-ink/15 pt-2 text-lg font-bold"><dt>মোট (ক্যাশ অন ডেলিভারি)</dt><dd>{taka(total)}</dd></div>
            </dl>

            <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ember py-4 text-lg font-semibold text-white disabled:opacity-60">
              <Send size={18} /> {busy ? "পাঠানো হচ্ছে..." : "অর্ডার নিশ্চিত করুন"}
            </button>
            
          </form>
        )}
      </div>
    </div>
  );
}

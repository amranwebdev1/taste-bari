import { NextResponse } from "next/server";
import { ITEMS } from "@/data/menu";
import { AREAS } from "@/data/site";
import { validateOrder } from "@/lib/validators";
import { sendTelegram } from "@/lib/telegram";
import { bn } from "@/lib/format";

const clean = (s) => String(s ?? "").replace(/[<>&]/g, "").slice(0, 300);

export async function POST(req) {
  let d;
  try { d = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  if (Object.keys(validateOrder(d)).length) return NextResponse.json({ ok: false }, { status: 400 });

  // দাম সার্ভারে আবার হিসাব হয়, ক্লায়েন্টের পাঠানো দাম বিশ্বাস করা হয় না
  const lines = (Array.isArray(d.items) ? d.items : [])
    .map((i) => ({ item: ITEMS[i?.id], qty: Math.min(20, Math.max(1, Number(i?.qty) || 0)) }))
    .filter((l) => l.item);
  if (!lines.length) return NextResponse.json({ ok: false }, { status: 400 });

  const area = AREAS.find((a) => a.id === d.area) ?? AREAS[0];
  const subtotal = lines.reduce((s, l) => s + l.item.price * l.qty, 0);

  const text =
    "🍛 নতুন অর্ডার\n" +
    lines.map((l) => `• ${l.item.name} × ${bn(l.qty)} = ${bn(l.item.price * l.qty)} টাকা`).join("\n") +
    `\nডেলিভারি (${area.label}): ${bn(area.fee)} টাকা\nমোট: ${bn(subtotal + area.fee)} টাকা (ক্যাশ অন ডেলিভারি)\n\n` +
    `নাম: ${clean(d.name)}\nফোন: ${clean(d.phone)}\nঠিকানা: ${clean(d.address)}`;

  const r = await sendTelegram(text);
  return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}

import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export default function Contact() {
  const rows = [
    [MapPin, "ঠিকানা", SITE.address],
    [Clock, "সময়", SITE.hours],
    [Phone, "ফোন", SITE.phone],
  ];
  return (
    <section id="contact" className="bg-ink py-16 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">দাওয়াত বা বড় অর্ডার?</h2>
          <p className="mt-3 max-w-md text-cream/70">বিয়ে, জন্মদিন বা অফিসের অনুষ্ঠানের জন্য আগাম বুকিং নেওয়া হয়। সরাসরি কথা বলুন।</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`https://wa.me/${SITE.wa}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 font-semibold text-ink"><MessageCircle size={18} /> হোয়াটসঅ্যাপ</a>
            <a href={`tel:${SITE.tel}`} className="flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 font-semibold"><Phone size={18} /> ফোন করুন</a>
          </div>
        </div>
        <ul className="space-y-5">
          {rows.map(([Icon, label, value]) => (
            <li key={label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream/10 text-gold"><Icon size={20} /></span>
              <div><p className="text-sm text-cream/50">{label}</p><p className="text-lg">{value}</p></div>
            </li>
          ))}
          <li><a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">ম্যাপে দেখুন</a></li>
        </ul>
      </div>
    </section>
  );
}

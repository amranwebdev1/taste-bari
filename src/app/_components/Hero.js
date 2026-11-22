import { Star, Clock, MessageCircle } from "lucide-react";
import Photo from "@/components/Photo";
import { PHOTOS, img } from "@/data/menu";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:pt-16">
      <div>
        <h1 className="font-display text-[2.6rem] leading-[1.15] md:text-6xl text-ember">
           স্বাদের প্রতিটি মুহূর্ত হোক আনন্দময়!
        </h1>
        <p className="mt-5 max-w-md text-lg text-ink/70">
          কাচ্চি, তেহারি, কাবাব ও রোস্ট। মেনু থেকে বেছে নিন, ফর্ম পূরণ করুন, বাকিটা আমাদের।
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#menu" className="rounded-full bg-ember px-5 py-2 font-semibold text-white shadow-lg shadow-ember/30 transition hover:brightness-110">মেনু দেখুন</a>
          <a href={`https://wa.me/${SITE.wa}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2 font-semibold transition hover:bg-ink hover:text-cream">
            <MessageCircle size={18} /> হোয়াটসঅ্যাপ
          </a>
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-ink/60"><Clock size={16} /> {SITE.hours}</p>
      </div>

      <div className="relative">
        <Photo src={img(PHOTOS.hero, 1100)} alt="কাচ্চি বিরিয়ানির বাটি" className="aspect-[4/5] w-full rounded-[2rem] shadow-2xl shadow-ink/20" />
        <div className="absolute -left-3 top-8 flex items-center gap-2 rounded-2xl bg-cream px-4 py-3 shadow-xl">
          <Star size={20} className="fill-gold text-gold" />
          <div className="leading-tight"><b className="text-lg">৪.৮</b><p className="text-xs text-ink/60">২০০+ রিভিউ</p></div>
        </div>
        <Photo src={img(PHOTOS.heroSmall1, 500)} alt="" className="absolute -bottom-6 -left-4 hidden h-28 w-28 rounded-2xl border-4 border-cream shadow-xl sm:block" />
        <Photo src={img(PHOTOS.heroSmall2, 500)} alt="" className="absolute -bottom-6 right-6 h-24 w-24 rounded-2xl border-4 border-cream shadow-xl" />
      </div>
    </section>
  );
}

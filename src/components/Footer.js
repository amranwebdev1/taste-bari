import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-10 text-cream/70">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-2xl text-cream">{SITE.name}</p>
        <p className="mt-1 text-sm">{SITE.address}</p>
        <p className="mt-6 text-xs text-cream/50">এটি একটি ডেমো ল্যান্ডিং পেজ। ব্র্যান্ড, মেনু, দাম ও রিভিউ কাল্পনিক। ছবি: Unsplash।</p>
      </div>
    </footer>
  );
}

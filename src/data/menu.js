// ছবি: Unsplash (বিনা খরচে ব্যবহারযোগ্য)। বদলাতে চাইলে শুধু আইডি বা লিংক পাল্টান।
export const img = (id, w = 900) => {
  if (!id) return "";
  if (id.startsWith("/") || id.startsWith("http")) return id;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
};


export const PHOTOS = {
  hero: "/hero.png",
  heroSmall1: "photo-1676436293945-a613dde9c3b6",
  heroSmall2: "photo-1752673508949-f4aeeaef75f0",
};

export const MENU = [
  { cat: "কম্বো", items: [
    { id: "c1", name: "পরিবার কম্বো", desc: "৪ প্লেট চিকেন বিরিয়ানি, ৪ পিস রোস্ট ও সালাদ", price: 850, tag: "সাশ্রয়ী", photo: "photo-1752673508949-f4aeeaef75f0" },
    { id: "c2", name: "কাপল কম্বো", desc: "২ প্লেট বিরিয়ানি, ২ পিস রোস্ট ও সালাদ", price: 480, photo: "photo-1708184528306-f75a0a5118ee" },
  ]},
  { cat: "বিরিয়ানি", items: [
    { id: "b1", name: "কাচ্চি বিরিয়ানি (মাটন)", desc: "খাসির নরম মাংস, আলু ও সুগন্ধি চালে দমে রান্না", price: 280, tag: "সবচেয়ে বেশি বিক্রি", photo: "photo-1631515243349-e0cb75fb8d3a" },
    { id: "b2", name: "চিকেন বিরিয়ানি", desc: "দেশি মশলায় মাখানো মুরগি, হালকা ঝাল", price: 180, photo: "photo-1589302168068-964664d93dc0" },
    { id: "b3", name: "বিফ তেহারি", desc: "গরুর মাংস ও সরিষার তেলের ঝাঁজ", price: 220, photo: "photo-1633945274309-2c16c9682a8c" },
    { id: "b4", name: "মোরগ পোলাও ও রোস্ট", desc: "সুগন্ধি পোলাও, রোস্ট ১ পিস ও সালাদ", price: 200, photo: "photo-1708184528306-f75a0a5118ee" },
  ]},
  { cat: "কাবাব ও রোস্ট", items: [
    { id: "k1", name: "সিক কাবাব (২ পিস)", desc: "কয়লার আঁচে ঝলসানো", price: 120, photo: "photo-1555939594-58d7cb561ad1" },
    { id: "k2", name: "চিকেন রোস্ট (১ পিস)", desc: "মিষ্টি-ঝাল মিশেলে ঘন গ্রেভিতে রান্না", price: 90, photo: "photo-1772730064951-89b427965dbc" },
    { id: "k3", name: "বিফ ভুনা", desc: "কষানো মশলায় ধীর আঁচে রান্না", price: 160, photo: "photo-1585937421612-70a008356fbe" },
  ]},
];

export const ITEMS = Object.fromEntries(MENU.flatMap((c) => c.items).map((i) => [i.id, i]));

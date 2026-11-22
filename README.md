# টেস্ট বাড়ি: রেস্টুরেন্ট ল্যান্ডিং পেজ (Next.js 15 + Tailwind 4)

```
npm install
cp .env.example .env.local   # Windows: copy .env.example .env
npm run dev
```
- লেখা, ফোন, হোয়াটসঅ্যাপ নম্বর: `src/data/site.js`
- মেনু, দাম ও ছবি (Unsplash লিংক): `src/data/menu.js`
- অর্ডার যায় Telegram-এ (`.env.local` এ টোকেন ও চ্যাট আইডি বসান), না বসালে টার্মিনালে দেখায়
- Vercel-এ ডিপ্লয়ের সময় একই দুটো Environment Variable বসান

## ফোল্ডার
- `src/app/_components`: শুধু এই পেজের কম্পোনেন্ট
- `src/components`: গ্লোবাল কম্পোনেন্ট (Header, Footer, CartProvider...)
- `src/lib`: ছোট হেল্পার (টেলিগ্রাম, ভ্যালিডেশন, ফরম্যাট)
- `src/data`: কনটেন্ট

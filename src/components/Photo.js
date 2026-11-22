"use client";
import { useState } from "react";

// ছবি লোড না হলে সুন্দর একটা ব্যাকগ্রাউন্ড দেখায়
export default function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-gold/40 to-ember/40 ${className}`} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}

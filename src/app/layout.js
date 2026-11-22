import "./globals.css";
import { Toaster } from "react-hot-toast";
import CartProvider from "@/components/CartProvider";

export const metadata = {
  title: "দাওয়াত বিরিয়ানি | সুনামগঞ্জে হোম ডেলিভারি",
  description: "কাচ্চি, তেহারি, কাবাব ও রোস্ট। অনলাইনে অর্ডার করুন, গরম গরম বাসায় পৌঁছে যাবে।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Tiro+Bangla&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream font-sans text-ink antialiased">
        <CartProvider>
          {children}
          <Toaster position="top-center" toastOptions={{ style: { fontFamily: "inherit" } }} />
        </CartProvider>
      </body>
    </html>
  );
}

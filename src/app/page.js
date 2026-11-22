import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import MenuSection from "./_components/MenuSection";
import Reviews from "./_components/Reviews";
import Contact from "./_components/Contact";
import CartBar from "./_components/CartBar";
import CartDrawer from "./_components/CartDrawer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <MenuSection />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <CartBar />
      <CartDrawer />
      <WhatsAppFab />
    </>
  );
}

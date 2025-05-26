
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Reviews } from "@/components/Reviews";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductShowcase />
      <Features />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

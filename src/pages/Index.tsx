
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TechnicalSpecs } from "@/components/TechnicalSpecs";
import { Reviews } from "@/components/Reviews";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductShowcase />
      <FeatureShowcase />
      <Features />
      <TechnicalSpecs />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

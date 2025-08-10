import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <UseCases />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
      <StickyButton />
    </div>
  );
};

export default Index;
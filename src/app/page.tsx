import Navbar from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { ProcessSection } from "@/components/process-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { CtaSection } from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProcessSection />
        <CapabilitiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

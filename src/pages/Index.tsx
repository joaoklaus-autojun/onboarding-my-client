import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Preview } from "@/components/landing/Preview";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background font-sans">
    <Navbar />
    <main>
      <Hero />
      <Problem />
      <Benefits />
      <HowItWorks />
      <Preview />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default Index;

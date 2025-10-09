import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HeroSection from "./components/Hero";
import HeroFooter from "./components/HeroFooter";
import OurBlogSection from "./components/OurBlogSection";
import AmIEligibleSection from "./components/AmIEligibleSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
   <div>
    <Navbar />
    {/* <Hero /> */}
    <HeroSection />
    <HeroFooter/>
    <ServicesSection />
    <TestimonialsSection/>
    <OurBlogSection />
    <AmIEligibleSection />
    <ContactSection />
   </div>
  );
}

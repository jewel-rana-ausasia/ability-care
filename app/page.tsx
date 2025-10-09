import AmIEligibleSection from "@/components/AmIEligibleSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroFooter from "@/components/HeroFooter";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurBlogSection from "@/components/OurBlogSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    
    {/* <HeroFooter/> */}
    <ServicesSection />
    <TestimonialsSection/>
    <OurBlogSection />
    <AmIEligibleSection />
    <ContactSection />
    <FAQSection />
    <Footer />
   </div>
  );
}

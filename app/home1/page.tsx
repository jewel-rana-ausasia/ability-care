import AmIEligibleSection from "@/components/home-1/AmIEligibleSection";
import ContactSection from "@/components/home-1/ContactSection";
import FAQSection from "@/components/home-1/FaqSection";
import Footer from "@/components/home-1/Footer";
import HeroSection from "@/components/home-1/HeroSection";
import Navbar from "@/components/home-1/Navbar";
import OurBlogSection from "@/components/home-1/OurBlogSection";
import ServicesSection from "@/components/home-1/ServicesSection";
import TestimonialsSection from "@/components/home-1/TestimonialsSection";

export default function Home1() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <OurBlogSection />
      <AmIEligibleSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

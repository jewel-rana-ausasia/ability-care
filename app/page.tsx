import AmIEligibleSection from "@/components/home-1/AmIEligibleSection";
import ContactSection from "@/components/home-1/ContactSection";
import FAQSection from "@/components/home-1/FaqSection";
import Footer from "@/components/home-1/Footer";
import HeroSection from "@/components/home-1/HeroSection";
import Navbar from "@/components/home-1/Navbar";
import OurBlogSection from "@/components/home-1/OurBlogSection";
import ServicesSection from "@/components/home-1/ServicesSection";
import TestimonialsSection from "@/components/home-1/TestimonialsSection";
import AmIEligibleSection2 from "@/components/home-2/AmIEligibleSection-2";
import ContactSection2 from "@/components/home-2/ContactSection-2";
import FAQSection2 from "@/components/home-2/FAQSection-2";
import Footer2 from "@/components/home-2/Footer-2";
import HeroSection2 from "@/components/home-2/HeroSection-2";
import Navbar2 from "@/components/home-2/Navbar2";
import OurBlogSection2 from "@/components/home-2/OurBlogSection-2";
import ServicesSection2 from "@/components/home-2/ServicesSection-2";
import ServiceTabs2 from "@/components/home-2/ServiceTabs-2";
import TestimonialsSection2 from "@/components/home-2/TestimonialsSection-2";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <OurBlogSection />
      <AmIEligibleSection />
      <ContactSection />
      <FAQSection />
      <Footer /> */}

      {/* Using Home 2 Components */}
      <Navbar2 />
      <HeroSection2 />
      <ServiceTabs2 />
      <ServicesSection2 />
      <TestimonialsSection2 />
      <OurBlogSection2 />
      <AmIEligibleSection2 />
      <ContactSection2 />
      <FAQSection2 />
      <Footer2 />
    </div>
  );
}

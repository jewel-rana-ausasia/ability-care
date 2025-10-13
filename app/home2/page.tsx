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

export default function Home2() {
  return (
    <div>
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

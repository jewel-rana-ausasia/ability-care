import EligibilitySection3 from "@/components/home-3/AmIEligibleSection-3";
import FAQSection3 from "@/components/home-3/FAQSection-3";
import Footer3 from "@/components/home-3/Footer3";
import HeroSection3 from "@/components/home-3/HeroSection-3";
import Navbar3 from "@/components/home-3/Navbar3";
import OurBlogSection3 from "@/components/home-3/OurBlogs-3";
import ServicesSection3 from "@/components/home-3/ServiceSection-3";
import ServiceTab3 from "@/components/home-3/ServiceTab-3";
import TestimonialsSection3 from "@/components/home-3/TestimonialSection-3";

export default function Home3() {
  return (
    <div>
      {/* Home 3 Components */}
      <Navbar3 />
      <HeroSection3 />
      <ServiceTab3 />
      <ServicesSection3 />
      <TestimonialsSection3 />
      <OurBlogSection3 />
      <EligibilitySection3 />
      <FAQSection3 />
      <Footer3 />
    </div>
  );
}

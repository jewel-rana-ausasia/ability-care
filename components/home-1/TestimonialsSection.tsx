"use client";

import Image from "next/image";
import { FC } from "react";
import { Quote } from "lucide-react";

const TestimonialsSection: FC = () => {
  return (
    <section>
      {/* Section Header */}
      <div className="relative text-center w-full h-[500px] mx-auto mb-12 bg-[url('/why-choose-us-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center  px-6">
        <div className="relative top-24 z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Why Choose Us?
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed">
            At our core, we are dedicated to providing high-quality,
            personalised support that empowers individuals with disabilities to
            live independently and with dignity. Our experienced team is
            committed to your well-being, ensuring you receive the care and
            assistance you need to achieve your goals. With a strong foundation
            of trust, respect, and integrity, we go above & beyond to create a
            supportive and inclusive environment where you feel valued and
            heard.
          </p>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="relative -top-36 max-w-5xl mx-auto grid md:grid-cols-2 bg-white rounded-md shadow-lg overflow-hidden border border-[#9C55A1]/20">
        {/* Left Section */}
        <div className="bg-[#F4E6F5] p-10 flex flex-col justify-center relative">
          <div className="px-4">
            <span className="text-[#9C55A1] font-semibold text-sm mb-3">
              Our Testimonials
            </span>
            <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-8">
              What are people saying about <br/> Ability Care?
            </h3>
            <div className="absolute top-10 left-6 w-[3px] h-24 bg-[#9C55A1] rounded-r-md"></div>
          </div>

          {/* Testimonial Image Card */}
          <div className="rounded-md overflow-hidden text-white relative max-w-[440px]">
            <Image
              src="/our-testimonials.jpg"
              alt="Ability Care"
              width={350}
              height={350}
              className="object-cover rounded-md"
            />
          </div>

          {/* Left Border Accent */}
        </div>

        {/* Right Section */}
        <div className="bg-[#9C55A1] text-white flex flex-col justify-center p-10 relative">
          <Quote size={48} className="opacity-50 mb-4" />
          <p className="text-lg leading-relaxed mb-8">
            “Thank you Vserve for helping me get my funding approved from NDIS.
            It has brought such a positive change to my lifestyle.”
          </p>

          <div>
            <p className="font-semibold text-white">Rodger Horiott</p>
            <p className="text-sm opacity-80">Sydney</p>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span className="w-2.5 h-2.5 border border-white rounded-full"></span>
            <span className="w-2.5 h-2.5 border border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

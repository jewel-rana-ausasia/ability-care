"use client";
import FAQSection2 from "@/components/home-2/FAQSection-2";
import { Eye, Gem, Target } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="w-full">
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">ABOUT US</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">About Us</span>
          </p>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>

          <div className="border-l-4 border-[#9C55A1] pl-4 mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Your Abilities, Our Commitment.
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            At Ability Care, we empower individuals with disabilities through
            personalized, compassionate support that fosters independence &
            enriches lives. Our dedicated team tailors care plans to meet your
            unique needs, ensuring you receive the quality assistance you
            deserve. Join us on a journey towards greater inclusion, confidence,
            and wellbeing.
          </p>

          <p className="text-lg font-semibold text-gray-900">
            Join us on a journey towards greater inclusion, confidence, and
            well-being!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/image/about-us/about-us-welcome-image.jpg"
            alt="About Us Image"
            width={600}
            height={400}
            className="rounded-lg w-full h-[300px] md:h-[350px] object-cover"
          />
        </div>
      </div>

      <div className="bg-[#A55FA4] py-20 mt-30">
        <div className="relative -mt-48 z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Mission */}
          <div className="bg-[#5CA15B] text-white flex flex-col items-center justify-center p-10 text-center">
            {/* <Target className="w-14 h-14 mb-4" strokeWidth={1.5} /> */}
            <Image
              src="/mission.png" // 👈 your image path here
              alt="Mission Icon"
              width={56} // ~w-14
              height={56} // ~h-14
              className="mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Mission</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering people with disabilities <br />
              with personalised support and independence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#6F3C72] text-white flex flex-col items-center justify-center p-10 text-center">
            {/* <Eye className="w-14 h-14 mb-4" strokeWidth={1.5} /> */}
            <Image
              src="/vision.png" // 👈 your image path here
              alt="Vision Icon"
              width={56} // ~w-14
              height={56} // ~h-14
              className="mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Vision</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              An inclusive world where people with disabilities <br />
              live with independence, dignity, and opportunity.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#5CA15B] text-white flex flex-col items-center justify-center p-10 text-center">
            {/* <Gem className="w-14 h-14 mb-4" strokeWidth={1.5} /> */}
            <Image
              src="/values.png" // 👈 your image path here
              alt="Values Icon"
              width={56} // ~w-14
              height={56} // ~h-14
              className="mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Values</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              An inclusive world where people with disabilities <br />
              live with independence, dignity, and opportunity.
            </p>
          </div>
        </div>
      </div>

      <div>
        <FAQSection2 />
      </div>
    </div>
  );
}

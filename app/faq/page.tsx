"use client";
import FAQSection2 from "@/components/home-2/FAQSection-2";
import { ChevronDown, ChevronUp, Eye, Gem, Target } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of disabilities do you support?",
      answer:
        "We support individuals with physical, intellectual, and developmental disabilities, helping them live independently and participate in the community.",
    },
    {
      question: "Who is eligible for your services?",
      answer:
        "Our services are available to individuals with physical, intellectual, or developmental disabilities who need support in daily life, healthcare, or community activities.",
    },
    {
      question: "How can I apply for disability support?",
      answer:
        "You can contact our support team or fill out an online form to discuss your needs and start the application process.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve clients across multiple regions — please contact us to confirm service availability in your area.",
    },
    {
      question: "Are your services available 24/7?",
      answer:
        "Yes, we provide 24/7 support depending on individual service plans and care requirements.",
    },
    {
      question: "Do you provide in-home support?",
      answer:
        "Yes, our team offers in-home support tailored to your personal goals and daily living needs.",
    },
  ];
  return (
    <div className="w-full">
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-left text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">FAQ</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">FAQ</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
        {/* Right side - Accordion */}
        <div className="w-full">
          <div className="space-y-3 md:space-y-4 px-10 md:px-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-3 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-sm text-left md:text-base lg:text-lg font-medium text-gray-800 flex-1">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-purple-700 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                    ) : (
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-purple-700 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                    )}
                  </div>

                  {/* Smooth transition section */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden`}
                    style={{
                      maxHeight: isOpen ? "200px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="mt-2 text-gray-600 text-left text-xs md:text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Image
          src="/image/home-2/faq-image-2.png"
          alt="FAQ Image"
          width={400}
          height={400}
          className="mx-auto w-4/5 max-w-[300px] md:max-w-[450px] md:w-full md:mx-0"
        />
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function FAQSection() {
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
    <section className="w-full bg-[#F5EEF6] py-16 flex flex-col items-center justify-center text-center">
      {/* Heading Section - Centered */}
      <div className="max-w-2xl mb-10">
        <span className="bg-[#9C55A1] text-white font-semibold px-4 py-1 rounded">
          FAQ's
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/faq-image.png"
          alt="FAQ Image"
          width={400}
          height={400}
          className="mx-auto md:mx-0"
        />

        {/* Right side - Accordion */}
        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-3 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base md:text-lg font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-purple-700 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-700 transition-transform duration-300" />
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
                    <p className="mt-2 text-gray-600 text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

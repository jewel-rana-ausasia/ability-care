"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { faqs } from "@/lib/fagData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F5EEF6] py-16 flex flex-col items-center justify-center text-center">
      {/* Heading Section - Centered */}
      <div className="max-w-2xl mb-10">
        <span className="bg-[#9C55A1] text-white font-semibold px-4 py-2 rounded">
          FAQ's
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Main Content */}
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <Image
          src="/faq-image.png"
          alt="FAQ Image"
          width={400}
          height={400}
          className="mx-auto w-4/5 max-w-[300px] md:max-w-[400px] md:w-full md:mx-0"
        />

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
      </div>
    </section>
  );
}

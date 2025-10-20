"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/fagData";

export default function FAQSection3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-6 lg:px-8 items-start">
        {/* Left side – FAQ */}
        <div>
          <div className="mb-8">
            <span className="bg-[#61B95D] text-white text-sm font-semibold px-3 py-1 rounded">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="border-b border-gray-300 pb-4 cursor-pointer transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900 text-left">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="text-purple-700 w-5 h-5" />
                    ) : (
                      <ChevronDown className="text-purple-700 w-5 h-5" />
                    )}
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden`}
                    style={{
                      maxHeight: isOpen ? "200px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="text-gray-600 mt-3 text-left">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side – Contact Form */}
        <div className="bg-[#9C55A1] rounded-xl p-8 shadow-lg w-3/4 text-left">
          <h3 className="text-white text-2xl font-semibold mb-6">
            Get In Touch With Us
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name:"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone:"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email:"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <textarea
              placeholder="Message:"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-all w-[120px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

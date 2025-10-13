"use client";

import Image from "next/image";
import { FC } from "react";
import { Quote } from "lucide-react";

const TestimonialsSection3: FC = () => {
  const testimonials = [
    {
      quote:
        "Very happy with the care and assistance provided. The staff goes above and beyond!",
      name: "Sarah",
      location: "Melbourne",
      color: "#9C55A1",
    },
    {
      quote:
        "Ability Care has been a great support for me. The staff is kind & the accommodation feels like home.",
      name: "James",
      location: "Sydney",
      color: "#47A046",
    },
    {
      quote:
        "Excellent respite services! The team is friendly, and the facilities are top-notch. Highly recommend!",
      name: "Noah",
      location: "Brisbane",
      color: "#9C55A1",
    },
  ];

  return (
    <>
      <section>
        {/* Section Header */}
        <div className="relative text-center w-full h-[400px] mx-auto mb-12 bg-[url('/why-choose-us-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center px-6">
          <div className="relative top-24 z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Why Choose Us?
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              At our core, we are dedicated to providing high-quality,
              personalised support that empowers individuals with disabilities
              to live independently and with dignity. Our experienced team is
              committed to your well-being, ensuring you receive the care and
              assistance you need to achieve your goals. With a strong
              foundation of trust, respect, and integrity, we go above & beyond
              to create a supportive and inclusive environment where you feel
              valued and heard.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        {/* Purple background bottom half */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#A55FA4] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-30 text-center">
          {/* Header */}
          <div className="mb-14">
            <span className="bg-[#61B95D] text-white font-semibold px-4 py-1.5 rounded">
              Our Testimonial
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              What Clients Say?
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.15)] px-6 py-10 flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Quote icon */}
                <div
                  className="absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: item.color }}
                >
                  <Quote className="text-white w-6 h-6" />
                </div>

                {/* Content */}
                <p className="text-gray-800 text-sm mt-4 leading-relaxed">
                  “{item.quote}”
                </p>
                <h3 className="font-bold text-gray-900 mt-6">{item.name}</h3>
                <p className="text-gray-700 font-semibold text-sm">{item.location}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-10 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
            <span className="w-2.5 h-2.5 rounded-full border border-white"></span>
            <span className="w-2.5 h-2.5 rounded-full border border-white"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection3;

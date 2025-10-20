"use client";

import Image from "next/image";
import { FC } from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonialsData, Testimonial } from "@/lib/testimonialsData";

const TestimonialsSection3: FC = () => {
  const testimonials: Testimonial[] = testimonialsData.testimonials;

  // Motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" as const },
    }),
  };

  // Motion variant for the quote icon
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <>
      <section>
        {/* Section Header */}
        <div className="relative text-center w-full h-[400px] mx-auto mb-12 bg-[url('/why-choose-us-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center px-6">
          <div className="relative top-24 z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {testimonialsData.header}
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              {testimonialsData.description}
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
              <motion.div
                key={index}
                className="relative bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.15)] px-6 py-10 flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-1"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                {/* Quote icon */}
                <motion.div
                  className="absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: item.color }}
                  variants={iconVariants}
                >
                  <Quote className="text-white w-6 h-6" />
                </motion.div>

                {/* Content */}
                <p className="text-gray-800 text-sm mt-4 leading-relaxed">
                  “{item.quote}”
                </p>
                <h3 className="font-bold text-gray-900 mt-6">{item.name}</h3>
                <p className="text-gray-700 font-semibold text-sm">{item.location}</p>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === 0 ? "bg-white" : "border border-white"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection3;

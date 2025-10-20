"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonialsData, Testimonial } from "@/lib/testimonialsData";

const TestimonialsSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial: Testimonial =
    testimonialsData.testimonials[currentIndex];

  return (
    <section>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative text-center w-full h-[500px] mx-auto mb-12 bg-[url('/why-choose-us-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center px-6"
      >
        <div className="relative top-24 z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {testimonialsData.header}
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed">
            {testimonialsData.description}
          </p>
        </div>
      </motion.div>

      {/* Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative -top-36 max-w-5xl mx-auto grid md:grid-cols-2 bg-white rounded-md shadow-lg overflow-hidden border border-[#9C55A1]/20"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#F4E6F5] p-10 flex flex-col justify-center relative"
        >
          <div className="px-4">
            <span className="text-[#9C55A1] font-semibold text-sm mb-3">
              Our Testimonials
            </span>
            <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-8">
              What are people saying about <br /> Ability Care?
            </h3>
            <div className="absolute top-10 left-6 w-[3px] h-24 bg-[#9C55A1] rounded-r-md"></div>
          </div>

          {/* Testimonial Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-md overflow-hidden text-white relative max-w-[440px]"
          >
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              width={350}
              height={350}
              className="object-cover rounded-md"
            />
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#9C55A1] text-white flex flex-col justify-center p-10 relative"
        >
          <Quote size={48} className="opacity-50 mb-4" />
          <p className="text-lg leading-relaxed mb-8">
            “{currentTestimonial.quote}”
          </p>

          <div>
            <p className="font-semibold text-white">
              {currentTestimonial.name}
            </p>
            <p className="text-sm opacity-80">{currentTestimonial.location}</p>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {testimonialsData.testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                  currentIndex === idx ? "bg-white" : "border border-white"
                }`}
              ></span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;

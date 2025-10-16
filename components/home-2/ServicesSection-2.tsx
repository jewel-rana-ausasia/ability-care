"use client";

import Image from "next/image";
import { FC } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection2: FC = () => {
  const cards = [
    {
      src: "/service1.png",
      alt: "Group Centre Activities",
      title: "Group/Centre Activities",
      desc: "Join our Group/Centre Activities for social connection, skill-building & fun in a supportive environment.",
      color: "#9C55A1",
    },
    {
      src: "/service-2.png",
      alt: "Development of Life Skills",
      title: "Development of Life Skills",
      desc: "We will support you and help you learn the skills you need to work well & become a productive community member.",
      color: "#47A046",
    },
    {
      src: "/service3.png",
      alt: "Assist Travel Transport",
      title: "Assist Travel / Transport",
      desc: "Our Assist Travel & Transport service helps you travel safely & independently, whether for daily needs.",
      color: "#9C55A1",
    },
  ];

  return (
    <section className="relative -mt-20 bg-[#EFF8EF] py-20 px-6">
      {/* Section Header */}
      <div className="text-center mb-12 mt-20">
        <span className="bg-[#61B95D] text-white font-semibold px-4 py-2 rounded">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          How Can We Help You?
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 justify-center">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeInOut" }} // <-- smoother transition
            className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={card.src}
                alt={card.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="px-6 pt-10 pb-8 text-center">
              <h3 className="font-bold text-xl text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {card.desc}
              </p>
              <div
                className={`flex justify-center items-center gap-1 font-medium mt-5`}
                style={{ color: card.color }}
              >
                <span>Read More</span>
                <Plus size={16} strokeWidth={2} />
              </div>
            </div>

            {/* Bottom Border Bar */}
            <div
              className="absolute bottom-0 left-0 w-full h-[10px] rounded-b-2xl"
              style={{ backgroundColor: card.color }}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Dots (Carousel Style) */}
      <div className="flex justify-center mt-12 gap-3">
        <span className="w-3 h-3 rounded-full bg-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
      </div>
    </section>
  );
};

export default ServicesSection2;

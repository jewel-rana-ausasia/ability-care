"use client";

import Image from "next/image";
import { FC } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection: FC = () => {
  const services = [
    {
      id: 1,
      title: "Group/Centre Activities",
      description:
        "Join our Group/Centre Activities for social connection, skill-building & fun in a supportive environment.",
      image: "/service1.png",
      icon: "/service1-icon.png",
      color: "#9C55A1",
      textColor: "#9C55A1",
    },
    {
      id: 2,
      title: "Development of Life Skills",
      description:
        "We will support you and help you learn the skills you need to work well & become a productive community member.",
      image: "/service-2.png",
      icon: "/service2-icon.png",
      color: "#498B46",
      textColor: "#47A046",
    },
    {
      id: 3,
      title: (
        <>
          Assist Travel / <span className="text-[#9C55A1]">Transport</span>
        </>
      ),
      description:
        "Our Assist Travel & Transport service helps you travel safely & independently, whether for daily needs.",
      image: "/service3.png",
      icon: "/assist-travel-or-transport-icon.png",
      color: "#9C55A1",
      textColor: "#9C55A1",
    },
  ];

  return (
    <section className="bg-[#F8F1FA] py-20 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="bg-[#9C55A1] text-white font-semibold px-4 py-2 rounded">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          How Can We Help You?
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 justify-center">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // stagger animation per card
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={service.image}
                alt={typeof service.title === "string" ? service.title : "Service"}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              {/* Icon Circle */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: service.color }}
              >
                <Image src={service.icon} alt="Service Icon" width={55} height={55} />
              </div>
            </div>

            {/* Text Content */}
            <div className="px-6 pt-12 pb-8 text-center">
              <h3 className="font-bold text-lg text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">
                {service.description}
              </p>
              <div
                className="flex justify-center items-center gap-1 font-medium mt-5"
                style={{ color: service.textColor }}
              >
                <span>Read More</span>
                <Plus size={16} strokeWidth={2} />
              </div>
            </div>

            {/* Bottom Border Bar */}
            <div
              className="absolute bottom-0 left-0 w-full h-[10px] rounded-b-2xl"
              style={{ backgroundColor: service.color }}
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

export default ServicesSection;

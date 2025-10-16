"use client";

import Image from "next/image";
import { FC } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection3: FC = () => {
  // Card container animation with staggered children
  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Individual card fade-up
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  // Icon animation
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
  };

  // Button animation
  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
  };

  const services = [
    {
      image: "/service1.png",
      icon: "/home-icon1.png",
      title: "Group/Centre Activities",
      description:
        "Join our Group/Centre Activities for social connection, skill-building & fun in a supportive environment.",
      buttonColor: "#9C55A1",
    },
    {
      image: "/service-2.png",
      icon: "/home-icon2.png",
      title: "Development of Life Skills",
      description:
        "We will support you and help you learn the skills you need to work well & become a productive community member.",
      buttonColor: "#47A046",
    },
    {
      image: "/service3.png",
      icon: "/home-icon3.png",
      title: "Assist Travel / Transport",
      description:
        "Our Assist Travel & Transport service helps you travel safely & independently, whether for daily needs.",
      buttonColor: "#9C55A1",
    },
  ];

  return (
    <section className="relative -mt-32 bg-[#F6EFF7] py-20 px-6">
      {/* Header */}
      <div className="text-center mt-32 mb-14">
        <span className="bg-[#61B95D] text-white font-semibold px-5 py-2 rounded">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5">
          How Can We Help You?
        </h2>
      </div>

      {/* Service Cards */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
          >
            {/* Image */}
            <div className="relative">
              <div className="p-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />

                {/* Icon */}
                <motion.div
                  className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                  variants={iconVariants}
                >
                  <Image src={service.icon} alt={`${service.title} icon`} width={40} height={40} />
                </motion.div>
              </div>
            </div>

            {/* Text Content */}
            <div className="pt-14 pb-8 px-6 text-center flex flex-col justify-between flex-grow">
              <motion.div className="flex flex-col gap-3">
                <motion.h3
                  className="font-semibold text-lg text-gray-900"
                  variants={textVariants}
                >
                  {service.title}
                </motion.h3>
                <motion.p className="text-gray-600 text-sm leading-relaxed" variants={textVariants}>
                  {service.description}
                </motion.p>
              </motion.div>

              {/* Button */}
              <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} className="mt-8">
                <button
                  className={`mx-auto flex justify-center items-center gap-1 text-[${service.buttonColor}] border border-[${service.buttonColor}] px-6 py-2 rounded-full text-sm font-medium hover:bg-[${service.buttonColor}] hover:text-white transition-colors duration-300`}
                >
                  Read More <Plus size={14} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-3">
        <span className="w-3 h-3 rounded-full bg-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
      </div>
    </section>
  );
};

export default ServicesSection3;

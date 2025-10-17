"use client";

import Image from "next/image";
import { FC, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/services-data";
import Link from "next/link";
import { Button } from "../ui/button";

const ServicesSection3: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(servicesData.length / cardsPerPage);

  const paginatedServices = useMemo(() => {
    const start = (currentPage - 1) * cardsPerPage;
    return servicesData.slice(start, start + cardsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  };

  // Icon animation
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

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
        {paginatedServices.map((service, index) => (
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
                <div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt="Service Icon"
                      width={55}
                      height={55}
                    />
                  ) : null}
                </div>
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
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed line-clamp-2"
                  variants={textVariants}
                >
                  {service.description}
                </motion.p>
              </motion.div>

              {/* Button */}
              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center mt-8"
              >
                <Link
                  href={`/home3/our-services/${service.slug}`}
                  style={{
                    color: service.color,
                    borderColor: service.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      service.color;
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color =
                      service.color;
                  }}
                  className="mx-auto border px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  Read More <Plus size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-3 h-3 rounded-full border border-[#9C55A1] ${
              currentPage === i + 1 ? "bg-[#9C55A1]" : "bg-transparent"
            }`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection3;

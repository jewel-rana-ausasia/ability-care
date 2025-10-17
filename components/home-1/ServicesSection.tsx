"use client";

import Image from "next/image";
import { FC, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/services-data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const ServicesSection: FC = () => {
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
      <div className="max-w-7xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {paginatedServices.map((service, index) => (
            <SwiperSlide key={service.slug}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={
                      typeof service.title === "string"
                        ? service.title
                        : "Service"
                    }
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
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

                {/* Text */}
                <div className="px-6 pt-12 pb-8 text-center">
                  <h3 className="font-bold text-lg text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  <Link
                    href={`/home1/our-services/${service.slug}`}
                    className="flex justify-center items-center gap-1 font-medium mt-5"
                    style={{ color: service.color }}
                  >
                    <span>Read More</span>
                    <Plus size={16} strokeWidth={2} />
                  </Link>
                </div>

                {/* Bottom Bar */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[10px] rounded-b-2xl"
                  style={{ backgroundColor: service.color }}
                ></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== PAGINATION DOTS ===== */}
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

export default ServicesSection;

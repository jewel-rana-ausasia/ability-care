"use client";
import FAQSection2 from "@/components/home-2/FAQSection-2";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { servicesData } from "@/lib/services-data";

export default function OurServicesPage() {
  const { homeType } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;



  // Pagination setup
  const cardsPerPage = 6;
  const totalPages = Math.ceil(servicesData.length / cardsPerPage);

  const paginatedServices = useMemo(() => {
    const start = (currentPage - 1) * cardsPerPage;
    return servicesData.slice(start, start + cardsPerPage);
  }, [currentPage, servicesData]);

  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const handlePageChange = (page: number) => {
    router.push(`/${homeType}/our-services?page=${page}`);
  };

  return (
    <div className="w-full mb-20">
      {/* ===== TOP SECTION ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        <motion.div
          className="absolute top-30 left-[20%] text-center text-white z-10"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={fadeUp}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-sm md:text-base flex justify-center items-center gap-2 mt-3">
            <span className="text-gray-200">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Our Services</span>
          </p>
        </motion.div>
      </div>

      {/* ===== SERVICE CARDS ===== */}
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto grid md:grid-cols-3 lg:gap-4 2xl:gap-6 mt-24">
        {paginatedServices.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            variants={cardVariant}
          >
            <div className="relative">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="px-6 pt-10 pb-8 text-center">
              <h3 className="font-bold text-lg text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">
                {service.description}
              </p>
              <Link
                href={`/${homeType}/our-services/${service.slug}`}
                className="flex justify-center items-center gap-1 font-medium mt-5"
                style={{ color: service.color }}
              >
                <span>Read More</span>
                <Plus size={16} strokeWidth={2} />
              </Link>
            </div>

            <div
              className="absolute bottom-0 left-0 w-full h-[10px] rounded-b-2xl"
              style={{ backgroundColor: service.color }}
            ></div>
          </motion.div>
        ))}
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
    </div>
  );
}

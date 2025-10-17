"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogData";

const BlogsPage: React.FC = () => {
  const { homeType } = useParams(); // get dynamic home type
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentBlogs = blogPosts.slice(startIndex, startIndex + postsPerPage);

  // Framer Motion variants for animation
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.3, ease: "easeOut" as const },
    }),
  };

  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content with animation */}
        <motion.div
          className="absolute top-30 left-[20%] text-left text-white z-10"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">BLOGS</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">HOME</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">BLOGS</span>
          </p>
        </motion.div>
      </div>

      {/* ===== CONTENT SECTION (Blog Cards) ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 md:gap-4 2xl:gap-6 mt-20">
        {currentBlogs.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-80">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Text */}
            <div className="px-6 pt-8 pb-8 text-center">
              <h4 className="font-bold text-[#6F3C72] mb-2">{service.date}</h4>
              <h3 className="font-bold text-lg text-gray-900">
                {service.title}
              </h3>

              <Link
                href={`/${homeType}/blogs/${service.slug}`}
                className="flex justify-center items-center gap-1 font-medium mt-5 px-8 py-1 rounded-full mx-auto w-max text-white"
                style={{ backgroundColor: service.buttonColor }}
              >
                <span>Read More</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-3 mb-20">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-3 h-3 rounded-full ${
              currentPage === i + 1
                ? "bg-[#9C55A1]"
                : "border border-[#9C55A1] hover:bg-[#9C55A1] transition"
            }`}
            aria-current={currentPage === i + 1 ? "page" : undefined}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

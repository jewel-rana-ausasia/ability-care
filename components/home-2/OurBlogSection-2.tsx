"use client";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/blogData"; // ✅ using same data source
import Link from "next/link";

export default function OurBlogSection2() {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / cardsPerPage);

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * cardsPerPage;
    return blogPosts.slice(start, start + cardsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="relative -top-20 bg-[#F5EEF6] py-16 px-4 md:px-12 text-center">
      {/* === SECTION HEADER === */}
      <div className="flex flex-col items-center mb-10">
        <span className="bg-[#61B95D] text-white font-semibold px-4 py-2 mb-3 rounded">
          Our Blog
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Read Our Resources
        </h2>
      </div>

      {/* === BLOG GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {paginatedBlogs.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="overflow-hidden shadow-md bg-white border-0 hover:shadow-lg transition-shadow duration-300 p-0 !rounded-none">
              {/* ✅ Responsive Image using Tailwind classes */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <CardContent className="text-left p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-5 line-clamp-2">
                  {post.conclusion?.additionalText || post.title}
                </p>

                {/* ✅ Dynamic "Read More" Link Button */}
                <Link
                  href={`/home1/blogs/${post.slug}`}
                  className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-white font-medium text-sm sm:text-base transition-transform duration-200 hover:scale-105`}
                  style={{ backgroundColor: post.buttonColor }}
                >
                  Read More <span className="ml-1 text-lg">+</span>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* === PAGINATION DOTS === */}
      <div className="flex justify-center mt-10 space-x-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentPage === i + 1
                ? "bg-[#9A549F] scale-110"
                : "bg-gray-300 hover:bg-[#9A549F]/60"
            }`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </section>
  );
}

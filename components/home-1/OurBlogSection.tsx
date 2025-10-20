"use client";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function OurBlogSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / cardsPerPage);

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * cardsPerPage;
    return blogPosts.slice(start, start + cardsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-[#F5EEF6] py-16 px-4 md:px-12 text-center">
      <div className="flex flex-col items-center mb-10">
        <span className="bg-[#9C55A1] text-white font-semibold px-4 py-2 mb-3 rounded">
          Our Blog
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Read Our Resources
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {paginatedBlogs.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="overflow-hidden shadow-md rounded-2xl bg-white border-0 hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="relative w-full h-80">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardContent className="text-left p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-base mb-5 line-clamp-2">
                  {post.conclusion.additionalText}
                </p>

                <Link
                  href={`/home1/blogs/${post.slug}`}
                  className={`flex justify-left items-center gap-1 font-medium mt-5`}
                  style={{ color: post.buttonColor }}
                >
                  <span>Read More</span>
                  <Plus size={16} strokeWidth={2} />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

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
}

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function OurBlogSection() {
  const posts = [
    {
      title: "How To Promote Independence In Disability?",
      desc: "Living with a disability can present unique challenges, but it doesn't have to limit one's potential...",
      img: "/blog-image-1.jpg",
      link: "#",
    },
    {
      title: "What Are The Best Social Activities For Disabled?",
      desc: "Social activities are an essential part of life for everyone, regardless of ability. They can particularly benefit people with disabilities...",
      img: "/blog-image-2.jpg",
      link: "#",
    },
    {
      title: "When Is Occupational Therapy Recommended for Seniors?",
      desc: "Occupational therapy (OT) plays a vital role in enhancing the quality of life for seniors. As people age, they often...",
      img: "/blog-image-3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#F5EEF6] py-16 px-4 md:px-12 text-center">
      <div className="flex flex-col items-center mb-10">
        <span className="bg-[#8c3cc7] text-white text-sm font-semibold px-4 py-1 mb-3 rounded">
          Our Blog
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Read Our Resources
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="overflow-hidden shadow-md rounded-2xl bg-white border-0 hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="w-full">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="text-left p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">{post.desc}</p>
                <Button
                  variant="link"
                  className="text-[#8c3cc7] p-0 hover:underline"
                >
                  Read More <span className="ml-1 text-lg">+</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-10 space-x-3">
        {[0, 1, 2].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot === 1 ? "bg-[#8c3cc7]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

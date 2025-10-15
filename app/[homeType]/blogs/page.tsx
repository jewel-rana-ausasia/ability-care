import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogsPage: React.FC = () => {
  const blogs = [
    {
      title: "How To Promote Independence In Disability?",
      date: "February 18, 2025",
      image: "/blog-image-1.jpg",
      buttonColor: "#6F3C72",
    },
    {
      title: "What Are The Best Social Activities For Disabled?",
      date: "February 8, 2025",
      image: "/blog-image-2.jpg",
      buttonColor: "#57A754",
    },
    {
      title: "Occupational Therapy Recommended for Seniors?",
      date: "January 28, 2024",
      image: "/blog-image-3.jpg",
      buttonColor: "#6F3C72",
    },
    {
      title: "Making the Most of Your NDIS Plan: Tips for Better Support",
      date: "January 15, 2025",
      image: "/blog-image4.png",
      buttonColor: "#6F3C72",
    },
    {
      title: "How Disability Services Help You Live Independently",
      date: "January 2, 2025",
      image: "/blog-image5.png",
      buttonColor: "#57A754",
    },
    {
      title: "Understanding the Impact of Personal Care Support",
      date: "December 25, 2024",
      image: "/blog-image6.png",
      buttonColor: "#6F3C72",
    },
  ];

  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-left text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">BLOGS</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">HOME</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">BLOGS</span>
          </p>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mt-20">
        {blogs.map((service, index) => (
          <div
            key={index}
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

              <div
                className="flex justify-center items-center gap-1 font-medium mt-5 px-8 py-1 rounded-full mx-auto w-max text-white"
                style={{ backgroundColor: service.buttonColor }}
              >
                <span>Read More</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-3 mb-20">
        <span className="w-3 h-3 rounded-full bg-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
      </div>
    </div>
  );
};

export default BlogsPage;

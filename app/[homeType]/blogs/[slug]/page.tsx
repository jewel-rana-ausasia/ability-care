// app/[homeType]/blogs/[slug]/page.tsx
"use client";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/blogData";

const BlogDetailsPage: React.FC = () => {
  const { slug } = useParams();
  const currentPost = blogPosts.find((b) => b.slug === slug) || blogPosts[0];

  const recentPosts = blogPosts.slice(0, 8); // just show first 6 as recent

  return (
    <div>
      {/* ===== Top Banner ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        <div className="absolute top-30 left-[20%] text-left text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {currentPost.title}
          </h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">HOME</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Blog Details</span>
          </p>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative w-full h-[350px] md:h-[550px] overflow-hidden rounded-lg">
            <Image
              src={currentPost.image}
              alt={currentPost.title}
              fill
              className="object-fill"
            />
          </div>

          <div>
            {currentPost.content.map((item, index) => (
              <div key={index} className="mb-4">
                <span className="font-semibold text-gray-900">{item.title} </span>
                <span className="text-gray-800">{item.text}</span>
              </div>
            ))}

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {currentPost.conclusion.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentPost.conclusion.text}
              </p>
              {currentPost.conclusion.additionalText && (
                <p className="text-gray-800 mt-3 leading-relaxed">
                  {currentPost.conclusion.additionalText}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">
          <div className="bg-[#9C55A1] text-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-5">Get In Touch With Us</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 text-gray-900 bg-white" />
              <input type="text" placeholder="Phone" className="w-full p-3 text-gray-900 bg-white" />
              <input type="email" placeholder="Email" className="w-full p-3 text-gray-900 bg-white" />
              <textarea placeholder="Message" rows={3} className="w-full p-3 text-gray-900 bg-white"></textarea>
              <button type="submit" className="px-8 bg-white rounded-full text-slate-900 font-semibold py-2 hover:bg-gray-100 transition">
                Submit
              </button>
            </form>
          </div>

          {/* Recent Posts */}
          <div className="bg-[#F8F1FA] p-6 shadow-md">
            <h3 className="text-xl font-semibold bg-[#9C55A1] text-white mb-5 p-2">
              Recent Posts
            </h3>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white px-4 py-3 text-gray-800 text-sm font-medium hover:bg-[#EADBF0] cursor-pointer transition"
                >
                  {post.title}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

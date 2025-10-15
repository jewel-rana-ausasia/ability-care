import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Error404Page: React.FC = () => (
  <div>
    {/* ===== TOP SECTION (Background Image) ===== */}
    <div className="relative h-[250px] md:h-[300px] bg-[url('/contact-us-slide.png')] bg-cover bg-center flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

      {/* Text Content */}
      <div className="absolute top-30 left-[20%] text-center text-white z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">404 ERROR</h1>
        <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
          <span className="text-gray-200 font-medium">Home</span>
          <span className="text-white">›</span>
          <span className="text-white font-medium">404 Error</span>
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto py-20">
      <Image
        src="/error-slide.png"
        alt="404 Error"
        width={500}
        height={500}
        className="mx-auto mb-8"
      />

      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Sorry, We Can't Find That Page!
      </h2>
      <p className="text-gray-800 leading-relaxed text-center mb-8">
        Oops! Something went wrong. The page you're looking for couldn't be
        found. Please check the link or return to the homepage.
      </p>
      {/* ✅ Center Button */}
      <div className="flex justify-center">
        <Button asChild className="bg-[#A55FA4] hover:bg-[#4E944F]">
          <Link href="/" className="px-5 py-5">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export default Error404Page;

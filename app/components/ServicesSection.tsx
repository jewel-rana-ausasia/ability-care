"use client";

import Image from "next/image";
import { FC } from "react";
import { Plus } from "lucide-react";

const ServicesSection: FC = () => {
  return (
    <section className="bg-[#F8F1FA] py-20 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="bg-[#9C55A1] text-white text-xs font-semibold px-4 py-1 rounded">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          How Can We Help You?
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 justify-center">
        {/* Card 1 */}
        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          {/* Image */}
          <div className="relative">
            <Image
              src="/service1.png"
              alt="Group Centre Activities"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            {/* Icon Circle */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#9C55A1] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/service1-icon.png"
                alt="Group Icon"
                width={50}
                height={50}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="px-6 pt-12 pb-8 text-center">
            <h3 className="font-bold text-lg text-gray-900">
              Group/Centre Activities
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Join our Group/Centre Activities for social connection,
              skill-building & fun in a supportive environment.
            </p>
            <div className="flex justify-center items-center gap-1 text-[#9C55A1] font-medium mt-5">
              <span>Read More</span>
              <Plus size={16} strokeWidth={2} />
            </div>
          </div>

          {/* Bottom Border Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[#9C55A1] rounded-b-2xl"></div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="relative">
            <Image
              src="/service-2.png"
              alt="Development of Life Skills"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#498B46] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/service2-icon.png"
                alt="Life Skills Icon"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="px-6 pt-12 pb-8 text-center">
            <h3 className="font-bold text-lg text-gray-900">
              Development of Life Skills
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              We will support you and help you learn the skills you need to work
              well & become a productive community member.
            </p>
            <div className="flex justify-center items-center gap-1 text-[#47A046] font-medium mt-5">
              <span>Read More</span>
              <Plus size={16} strokeWidth={2} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[#47A046] rounded-b-2xl"></div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="relative">
            <Image
              src="/service3.png"
              alt="Assist Travel Transport"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#9C55A1] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/assist-travel-or-transport-icon.png"
                alt="Travel Icon"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="px-6 pt-12 pb-8 text-center">
            <h3 className="font-bold text-lg text-gray-900">
              Assist Travel / <span className="text-[#9C55A1]">Transport</span>
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Our Assist Travel & Transport service helps you travel safely &
              independently, whether for daily needs.
            </p>
            <div className="flex justify-center items-center gap-1 text-[#9C55A1] font-medium mt-5">
              <span>Read More</span>
              <Plus size={16} strokeWidth={2} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[#9C55A1] rounded-b-2xl"></div>
        </div>
      </div>

      {/* Dots (Carousel Style) */}
      <div className="flex justify-center mt-12 gap-3">
        <span className="w-3 h-3 rounded-full bg-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
      </div>
    </section>
  );
};

export default ServicesSection;

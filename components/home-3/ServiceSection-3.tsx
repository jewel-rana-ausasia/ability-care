"use client";

import Image from "next/image";
import { FC } from "react";
import { Plus } from "lucide-react";

const ServicesSection3: FC = () => {
  return (
    <section className="relative -mt-32 bg-[#F6EFF7] py-20 px-6">
      {/* Header */}
      <div className="text-center mt-32 mb-14">
        <span className="bg-[#61B95D] text-white font-semibold px-5 py-2 rounded">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5">
          How Can We Help You?
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* === Card 1 === */}
        <div className="bg-white shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
          {/* Image */}
          <div className="relative">
            <div className="p-4">
              <Image
                src="/service1.png"
                alt="Group Centre Activities"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />

              {/* Icon */}
              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                <Image
                  src="/home-icon1.png"
                  alt="group icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="pt-14 pb-8 px-6 text-center flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Group/Centre Activities
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Join our Group/Centre Activities for social connection,
                skill-building & fun in a supportive environment.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="mx-auto flex justify-center items-center gap-1 text-[#9C55A1] border border-[#9C55A1] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#9C55A1] hover:text-white transition-colors duration-300">
                Read More <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* === Card 2 === */}
        <div className="bg-white shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
          <div className="relative">
            <div className="p-4">
              <Image
                src="/service-2.png"
                alt="Development of Life Skills"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />

              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                <Image
                  src="/home-icon2.png"
                  alt="skills icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className="pt-14 pb-8 px-6 text-center flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Development of Life Skills
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                We will support you and help you learn the skills you need to
                work well & become a productive community member.
              </p>
            </div>

            <div className="mt-8">
              <button className="mx-auto flex justify-center items-center gap-1 text-[#47A046] border border-[#47A046] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#47A046] hover:text-white transition-colors duration-300">
                Read More <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* === Card 3 === */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
          <div className="relative">
            <div className="p-4">
              <Image
                src="/service3.png"
                alt="Assist Travel Transport"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />

              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                <Image
                  src="/home-icon3.png"
                  alt="transport icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className="pt-14 pb-8 px-6 text-center flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Assist Travel / Transport
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Our Assist Travel & Transport service helps you travel safely &
                independently, whether for daily needs.
              </p>
            </div>

            <div className="mt-8">
              <button className="mx-auto flex justify-center items-center gap-1 text-[#9C55A1] border border-[#9C55A1] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#9C55A1] hover:text-white transition-colors duration-300">
                Read More <Plus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-3">
        <span className="w-3 h-3 rounded-full bg-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
      </div>
    </section>
  );
};

export default ServicesSection3;

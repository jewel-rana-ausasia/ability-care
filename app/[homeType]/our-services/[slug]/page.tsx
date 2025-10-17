"use client";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { servicesData } from "@/lib/services-data";

const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams();

  // Get the current service based on slug
  const currentService = servicesData.find(service => service.slug === slug);

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {currentService.title.toUpperCase()}
          </h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Our Services</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">{currentService.title}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative w-full h-[350px] md:h-[475px] overflow-hidden">
            <Image
              src={currentService.image}
              alt={currentService.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentService.title}
            </h2>

            <p className="text-gray-800 mb-6 text-base">
              {currentService.description}
            </p>

           {/*  {currentService.content.intro.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))} */}

           {/*  <div className="space-y-4 mt-8">
              {currentService.content.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-900 block mb-2">
                    {feature.title}
                  </span>
                  <span className="text-gray-700">{feature.description}</span>
                </div>
              ))}
            </div> */}

            {/* <h3 className="text-2xl font-bold text-gray-900 mt-8">
              {currentService.content.conclusion}
            </h3> */}
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="space-y-6">
          {/* Services List */}
          <div className="bg-[#F8F1FA] p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Services
            </h3>

            <ul className="space-y-4">
              {servicesData.map((service, index) => (
                <li
                  key={service.slug}
                  className={`px-3 py-3 text-sm font-medium cursor-pointer transition-colors ${
                    service.slug === currentService.slug
                      ? "bg-[#9C55A1] text-white"
                      : "hover:bg-[#E9D9EC] text-gray-700 bg-white"
                  }`}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="relative h-[450px] overflow-hidden text-white">
            <Image
              src="/image/services/sidebar-contact-tumb.jpg"
              alt="NDIS Support"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p className="font-semibold text-xl mb-4 leading-snug">
                Available for any type of <br /> NDIS Service
              </p>

              <div className="flex items-center gap-3 text-white py-3 rounded-md font-medium w-fit shadow-md">
                <PhoneCall size={24} strokeWidth={2.5} />
                <div className="text-left leading-tight">
                  <p className="text-xs font-semibold">CONTACT US</p>
                  <p className="text-base font-bold">0000 124 567</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
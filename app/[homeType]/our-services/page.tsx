// our-services/page.tsx
"use client";
import FAQSection2 from "@/components/home-2/FAQSection-2";
import { Eye, Gem, Plus, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function OurServicesPage() {
  const { homeType } = useParams(); // get dynamic home type

  const services = [
    {
      slug: "group-centre-activities",
      title: "Group/Centre Activities",
      description:
        "Join our Group/Centre Activities for social connection, skill-building & fun in a supportive environment.",
      image: "/service1.png",
      icon: "/service1-icon.png",
      color: "#9C55A1",
    },
    {
      slug: "development-life-skills",
      title: "Development of Life Skills",
      description:
        "We support you in learning the skills you need to work well & become a productive community member.",
      image: "/service-2.png",
      icon: "/service2-icon.png",
      color: "#47A046",
    },
    {
      slug: "assist-travel-transport",
      title: "Assist Travel / Transport",
      description:
        "Our Assist Travel & Transport service helps you travel safely & independently, whether for daily needs.",
      image: "/service3.png",
      icon: "/assist-travel-or-transport-icon.png",
      color: "#9C55A1",
    },
    {
      slug: "household-tasks",
      title: "Household Tasks",
      description:
        "We're here to help with everyday chores like cleaning, laundry & meal prep, making life easier and more comfortable for you..",
      image: "/image/services/household-task.jpg",
      icon: "/service4-icon.png",
      color: "#47A046",
    },
    {
      slug: "therapeutic-support",
      title: "Therapeutic Support",
      description:
        "We provide professional therapeutic support to help improve your well-being,independence and quality of life...",
      image: "/image/services/therapeutic-support.jpg",
      icon: "/service5-icon.png",
      color: "#9C55A1",
    },
    {
      slug: "assist-personal-activities",
      title: "Assist Personal Activities",
      description:
        "We help with daily personal tasks like dressing, grooming & mobility, ensuring you feel supported & independent in your daily life..",
      image: "/image/services/assist-personal-activities.jpg",
      icon: "/service6-icon.png",
      color: "#47A046",
    },
  ];
  return (
    <div className="w-full mb-20">
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Our Services</span>
          </p>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mt-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Text */}
            <div className="px-6 pt-10 pb-8 text-center">
              <h3 className="font-bold text-lg text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/${homeType}/our-services/${service.slug}`}
                className="flex justify-center items-center gap-1 font-medium mt-5"
                style={{ color: service.color }}
              >
                <span>Read More</span>
                <Plus size={16} strokeWidth={2} />
              </Link>
            </div>

            {/* Bottom Border */}
            <div
              className="absolute bottom-0 left-0 w-full h-[10px] rounded-b-2xl"
              style={{ backgroundColor: service.color }}
            ></div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-3">
        <span className="w-3 h-3 rounded-full bg-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
        <span className="w-3 h-3 rounded-full border border-[#9C55A1]"></span>
      </div>
    </div>
  );
}

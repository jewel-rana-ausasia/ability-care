import { PhoneCall, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServiceDetailsPage: React.FC = () => {
  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            HOUSEHOLD TASKS
          </h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Household Tasks</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative w-full h-[350px] md:h-[475px] overflow-hidden">
            <Image
              src="/image/services/household-task.jpg" // ← change to your image path
              alt="Household Tasks"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Household Tasks
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We specialise in providing exceptional cleaning services
              thoughtfully designed to meet the unique needs of individuals with
              disabilities. We understand that a clean and organised home is
              essential for health, comfort, and overall well-being, which is
              why our mission is to create a living environment that brings
              peace, joy, and positivity into your daily life.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our dedicated team of professionals brings compassion and care to
              every cleaning assignment. We understand how personal your home is
              to you, and we treat each space with the respect and attention it
              deserves.
            </p>

            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">
                  Meal Preparation and Planning:{" "}
                </span>
                <span className="text-gray-700">
                  From planning your meals to preparing them, we make sure your
                  dietary preferences and needs are met. Enjoy nutritious,
                  delicious meals without the hassle of doing it all yourself.
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 inline">
                  Home and Garden Maintenance: {""}
                </h3>
                <p className="text-gray-700 inline">
                  We help keep your home and surrounding garden in top-notch
                  condition. From small maintenance tasks to regular upkeep,
                  we’re here to make everything easier for you.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 inline">
                  Comprehensive Cleaning Services:{" "}
                </h3>
                <p className="text-gray-700 inline">
                  Bathrooms, kitchens, toilets, living areas, and
                  bedrooms—cleaned and freshened. Cleaning cook-tops, wiping
                  down bench tops, and tidying the inside of fridges, ovens, and
                  microwaves. Floors vacuumed and mopped, surfaces dusted, and
                  dishes washed.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 inline">
                  Laundry and Linen Care:{" "}
                </h3>
                <p className="text-gray-700 inline">
                  Changing bed linen and keeping your bedroom feeling fresh.
                  Washing, drying, and managing essential ironing tasks.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 inline">
                  Grocery Shopping:{" "}
                </h3>
                <p className="text-gray-700 inline">
                  You’ll no longer need to worry about the effort of grocery
                  shopping. We handle the trips for you or accompany you as
                  needed, ensuring you have everything you need to keep your
                  home running smoothly.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Get Started Today
            </h3>
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
              {[
                "Group/Centre Activities",
                "Development of Life Skills",
                "Assist Travel / Transport",
                "Household Tasks",
                "Therapeutic Support",
                "Assist Personal Activities",
                "Assist–Life Stage, Transition",
                "Innovative Community Participation",
                "Supported Independent Living (SIL)",
                "Community Nursing Care",
                "Life Skills Development",
                "Shared Accommodation",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`px-3 py-2 text-sm font-medium cursor-pointer ${
                    item === "Assist Travel / Transport"
                      ? "bg-[#9C55A1] text-white"
                      : "hover:bg-[#E9D9EC] text-gray-700 bg-white"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="relative h-[450px] overflow-hidden text-white">
            {/* Background Image */}
            <Image
              src="/image/services/sidebar-contact-tumb.jpg" // ← your image path
              alt="NDIS Support"
              fill
              className="object-cover"
            />

            {/* Text content positioned inside the image */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p className="font-semibold text-xl mb-4 leading-snug">
                Available for any type of <br /> NDIS Service
              </p>

              <div className="flex items-center gap-3 text-white py-3 rounded-md font-medium w-fit shadow-md">
                <PhoneCallIcon size={24} strokeWidth={2.5} />
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

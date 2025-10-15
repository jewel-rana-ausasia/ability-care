import React from "react";

const ReferralsPage: React.FC = () => {
  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/contact-us-slide.png')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">REFERRALS</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Referrals</span>
          </p>
        </div>
      </div>

      <div className="bg-[#F5EEF6] py-20">
        <div className="max-w-7xl mx-auto bg-[#F8F1FA] rounded-lg">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center md:text-left">
            Ability Care Referral
          </h2>

          {/* Form */}
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Participant First Name*"
                className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type="text"
                placeholder="Participant Last Name*"
                className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Participant Mobile Number*"
                className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type="email"
                placeholder="Participant Email Address*"
                className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="text"
                placeholder="Referral Company and/or Person"
                className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type="text"
                placeholder="Services Being Referred"
                className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type="text"
                placeholder="Contact Number of Referred"
                className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
            </div>

            {/* Comments */}
            <textarea
              placeholder="Comments"
              rows={5}
              className="bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#9C55A1] hover:bg-[#8A4A91] text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralsPage;

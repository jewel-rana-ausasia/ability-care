import React from "react";

const NewParticipantsPage: React.FC = () => {
  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/contact-us-slide.png')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            NEW PARTICIPANTS
          </h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">New Participants</span>
          </p>
        </div>
      </div>

      <div className="bg-[#F5EEF6] py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">
            Please fill in the information below as completely as possible
          </h2>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 */}
            <input
              type="text"
              placeholder="First Name*"
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            {/* Row 2 */}
            <input
              type="text"
              placeholder="NDIS Number (if applicable)"
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />
            <select className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]">
              <option>English</option>
              <option>Arabic</option>
              <option>Hindi</option>
              <option>Mandarin</option>
            </select>

            {/* Row 3 */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />
            <input
              type="text"
              placeholder="Suburb"
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            {/* Row 4 */}
            <select className="w-full p-3 bg-[#FBFBFB]  border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]">
              <option>- Please Choose an Option -</option>
              <option>General Inquiry</option>
              <option>NDIS Support</option>
              <option>Employment</option>
              <option>Other</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            {/* Row 5 - Full width */}
            <textarea
              placeholder="Anything Else You Would Like to Tell Us?"
              rows={4}
              className="md:col-span-2 w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            ></textarea>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-start">
              <button
                type="submit"
                className="bg-[#9C55A1] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#863C8D] transition"
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

export default NewParticipantsPage;

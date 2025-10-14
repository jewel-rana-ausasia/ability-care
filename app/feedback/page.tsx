import React from "react";

const FeedbackPage: React.FC = () => {
  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/contact-us-slide.png')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">FEEDBACK</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Feedback</span>
          </p>
        </div>
      </div>

      <div className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-left">
          {/* Header */}
          <div className="text-left mb-10 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Ability Care Customer Feedback Form
            </h2>
            <p className="text-gray-800">
              We value your feedback! Share your experience with Ability Care to
              help us improve our services.
            </p>
            <h4 className="text-lg font-medium">
              Fill out the form below to let us know your thoughts!
            </h4>
          </div>

          {/* Form */}
          <form className="bg-white py-8 rounded-2xl space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type="text"
                placeholder="Residence Address"
                className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
            </div>

            {/* Textareas */}
            <textarea
              placeholder="How have you found our service so far?"
              rows={5}
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            ></textarea>

            <textarea
              placeholder="If there was anything we could improve on, what would it be?"
              rows={5}
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            ></textarea>

            <textarea
              placeholder="What do you like most about our service?"
              rows={5}
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            ></textarea>

            {/* Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Rate Our Overall Service",
                },
                {
                  title:
                    "How Would You Rate Our Service in Terms of Being Fair and Equal?",
                },
                {
                  title:
                    "How Would You Rate Our Service in Terms of Being Transparent?",
                },
              ].map((item, index) => (
                <div key={index}>
                  <p className="font-medium text-gray-800 mb-2">{item.title}</p>
                  <div className="flex gap-3 text-gray-600">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <label key={num} className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="accent-[#9C55A1] cursor-pointer"
                        />
                        <span>{num}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Comments */}
            <textarea
              placeholder="Is there anything else you would like us to know?"
              rows={5}
              className="w-full p-3 bg-[#FBFBFB] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-left">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#9C55A1] to-[#C67ACF] text-white px-10 py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Bottom Call-to-Action Section */}
      <div className="bg-[#F5EEF6] py-10 px-6 rounded-2xl text-center">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">
          <span className="font-bold text-[#9C55A1]">Supporting People</span>{" "}
          Living with Disability
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3f9443] transition">
            New Participants
          </button>
          <button className="bg-[#9C55A1] text-white px-6 py-3 rounded-md font-medium hover:bg-[#873f8f] transition">
            Contact Us
          </button>
          <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3f9443] transition">
            Referrals
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;

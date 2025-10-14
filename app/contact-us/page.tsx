import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const ContactUsPage: React.FC = () => {
  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/contact-us-slide.png')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">CONTACT US</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Contact Us</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Connect with Us Today!
          </h2>
          <p className="text-gray-900 max-w-3xl mx-auto leading-relaxed">
            You can reach out to Ability Care through various channels. Feel
            free to give us a call, send us an email, or fill out our online
            contact form. Our friendly team is here to assist you with any
            inquiries, referrals, or feedback you may have.
          </p>
        </div>

        {/* Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Form */}
          <div className="bg-[#9C55A1] p-8 rounded-lg shadow-md">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md bg-white text-gray-900 focus:outline-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 rounded-md text-gray-900 bg-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md text-gray-900 bg-white focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={3}
                className="w-full p-3 rounded-md text-gray-900 bg-white focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-white text-[#9C55A1] font-semibold py-2 rounded-full hover:bg-gray-100 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>

            <div className="space-y-4 text-gray-900">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#9C55A1]" />
                <p>0000 124 567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#9C55A1]" />
                <p>info@abilitycare.com.au</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#9C55A1]" />
                <p>Heidelberg Heights VIC 3081, Australia</p>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#9C55A1]" />
                <p>Mon–Sat: 8am–5pm</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <p className="text-gray-900 font-medium mb-2">
                Connect on Social Sites
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-[#9C55A1] p-2 rounded-full text-white hover:opacity-90 transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-[#9C55A1] p-2 rounded-full text-white hover:opacity-90 transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="bg-[#9C55A1] p-2 rounded-full text-white hover:opacity-90 transition"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* find google map */}
      <div className="w-full mx-auto text-center bg-[#F5EEF6] py-20">
        <h3 className="text-3xl font-semibold text-gray-900 mb-3">
          Find Us Google Map
        </h3>
        <p>
          Locate Ability Care on Google Maps below to get directions, see our
          address, and plan your visit with ease.
        </p>

        <div className="max-w-7xl mx-auto p-4 mt-10">
          <Image
            src="/map.png"
            alt="Google Map"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

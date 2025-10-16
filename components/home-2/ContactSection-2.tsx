"use client";
import { Mail, Phone, MapPin, Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection2() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <div className="inline-block bg-[#61B95D] text-white text-sm font-medium px-4 py-2 rounded-sm mb-4">
          Contact Us
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
          Get Quote Easily By Contact with Us
        </h2>
        <p className="text-gray-600 text-xs md:text-base">
          Fill a query about your need, or just a general enquiry, we would love
          to hear from you!
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* White form container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white shadow-2xl rounded-2xl p-8 md:p-12"
        >
          {/* Green card overlapping */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:absolute -left-6 md:-left-28 md:top-[17%] bg-[#61B95D] rounded-xl text-white p-8 w-full md:w-[320px] shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <p>
                  <span className="font-medium">Address:</span> Heidelberg
                  Heights VIC 3081, Australia
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <p>0000 124 567</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <p>info@abilitycare.com.au</p>
              </div>

              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="#"
                  className="hover:text-purple-800 transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6 font-bold" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-800 transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6 font-bold" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-800 transition-colors duration-200"
                >
                  <X className="w-6 h-6 font-bold" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form area */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:ml-[200px] space-y-6 py-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name:"
                className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type="text"
                placeholder="Phone:"
                className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
            </div>

            <input
              type="email"
              placeholder="Email:"
              className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            <textarea
              placeholder="Message:"
              rows={4}
              className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            <button
              type="submit"
              className="bg-[#9C55A1] hover:bg-[#7B3D96] text-white font-medium py-2 px-8 rounded-md"
            >
              Submit
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

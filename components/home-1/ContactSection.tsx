"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-12 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-lg overflow-hidden">
        <div className="w-full md:h-[600px] flex justify-around items-center bg-white shadow-2xl flex-col md:flex-row">
          <div className="flex-1 md:mr-28 p-4 md:p-8 md:px-14 md:py-20">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact with Us
            </h1>
            <p className="text-gray-600 mb-8">
              Fill a query about your need, or just a general enquiry, we would
              love to hear from you!
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name:"
                  className="w-full border-b-2 border-gray-300 py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email:"
                  className="w-full border-b-2 border-gray-300 py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Message:"
                  className="w-full border-b-2 border-gray-300 py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9C55A1] to-[#6F3C72] hover:from-[#7B3D96] hover:to-[#9C55A1] text-white font-medium py-3 px-6 transition-colors duration-200 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative h-full bg-[#9C55A1] mt-6 md:mt-0 p-8 md:p-12 flex flex-col">
            <div className="relative md:-left-2/3 top-[15%] bg-[#61B95D] rounded-xl p-6 mb-8 shadow-lg">
              <h2 className="text-white text-2xl font-bold mb-6">Contact Us</h2>

              <div className="space-y-5">
                <div className="flex items-start text-white">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Address: Heidelberg</p>
                    <p className="text-sm">Heights VIC 3081, Australia</p>
                  </div>
                </div>

                <div className="flex items-center text-white">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <p className="text-sm">0000 124 567</p>
                </div>

                <div className="flex items-center text-white">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <p className="text-sm">info@abilitycare.com.au</p>
                </div>

                <div className="flex items-start text-white">
                  <Clock className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">9:00 AM - 5:00 PM (Mon - Fri)</p>
                </div>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-center space-x-6">
              <a
                href="#"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

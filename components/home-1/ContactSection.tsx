"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { contactData } from "@/lib/contactData";

export default function ContactSection() {
  return (
    <section className="w-full py-12 lg:py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-7 bg-white shadow-2xl">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="col-span-5 p-8 md:p-12 lg:px-20 lg:py-30 mr-36"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {contactData.sectionTitle}
            </h1>
            <p className="text-gray-800 mb-8">
              {contactData.sectionDescription}
            </p>

            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactData.formFields.map((field, idx) => (
                <div key={idx}>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border-b border-[#805283] py-1.5 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400 bg-transparent"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9C55A1] to-[#6F3C72] hover:from-[#7B3D96] hover:to-[#9C55A1] text-white font-medium py-3 px-6 transition-colors duration-200 rounded-sm"
              >
                {contactData.buttonText}
              </button>
            </motion.form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#9C55A1] col-span-2 flex flex-col py-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative md:-left-3/7 top-[15%] bg-[#61B95D] rounded-xl p-8 md:px-10 md:py-16 mb-8 shadow-lg"
            >
              <h2 className="text-white text-3xl font-bold mb-6">
                {contactData.contactInfo.heading}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start text-white">
                  <MapPin className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>
                      <span className="font-medium">Address: </span>
                      {contactData.contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-white">
                  <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
                  <p className="text-base">{contactData.contactInfo.phone}</p>
                </div>

                <div className="flex items-center text-white">
                  <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
                  <p className="text-base">{contactData.contactInfo.email}</p>
                </div>

                <div className="flex items-start text-white">
                  <Clock className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-base">{contactData.contactInfo.hours}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-auto flex justify-start"
            >
              <div className="mt-auto flex items-center justify-start space-x-6 px-10">
                {contactData.socialLinks.map((social, idx) => {
                  const IconComponent = social.icon; // Get the component from data
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-colors duration-200"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

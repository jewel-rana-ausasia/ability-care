"use client";
import { Mail, Phone, MapPin, Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { contactData } from "@/lib/contactData";

export default function ContactSection2() {
  const { formFields, buttonText } = contactData;
  const [nameField, phoneField, emailField, messageField] = formFields;

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <div className="inline-block bg-[#61B95D] text-white text-sm font-medium px-4 py-2 rounded-sm mb-4">
          {contactData.sectionTitle}
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
          Get Quote Easily By Contact with Us
        </h2>
        <p className="text-gray-600 text-xs md:text-base">
          {contactData.sectionDescription}
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
            <h3 className="text-xl font-semibold mb-6">
              {contactData.contactInfo.heading}
            </h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <p>
                  <span className="font-medium">Address: </span>
                  {contactData.contactInfo.address}
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <p>{contactData.contactInfo.phone}</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <p>{contactData.contactInfo.email}</p>
              </div>

              <div className="flex items-center space-x-4 pt-2">
                <div className="flex gap-5">
                  {contactData.socialLinks.map((social, idx) => {
                    const IconComponent = social.icon; // Get the component from data
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        className="w-6 h-6 flex items-center justify-start text-white hover:text-purple-700 transition-colors duration-200"
                      >
                        <IconComponent className="w-full h-full" />
                      </a>
                    );
                  })}
                </div>
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
                type={nameField.type}
                placeholder={nameField.placeholder}
                className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
              <input
                type={phoneField.type}
                placeholder={phoneField.placeholder}
                className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
              />
            </div>

            <input
              type={emailField.type}
              placeholder={emailField.placeholder}
              className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            <textarea
              placeholder={messageField.placeholder}
              rows={4}
              className="w-full border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C55A1]"
            />

            <button
              type="submit"
              className="bg-[#9C55A1] hover:bg-[#7B3D96] text-white font-medium py-2 px-8 rounded-md"
            >
              {buttonText}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

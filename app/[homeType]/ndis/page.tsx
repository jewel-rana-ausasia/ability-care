"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const NdisPage: React.FC = () => {
  const eligibilityCriteria = [
    {
      title: "Age Requirement",
      description: "Must be under 65 years old when applying.",
    },
    {
      title: "Residency Status",
      description:
        "Must be an Australian citizen, permanent resident, or hold a Protected Special Category Visa.",
    },
    {
      title: "Disability Requirement",
      description:
        "Must have a permanent & significant disability that affects daily living and requires support.",
    },
    {
      title: "Early Intervention",
      description:
        "People with disabilities or developmental delays may qualify for early intervention support.",
    },
  ];

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <motion.div
        className="relative h-[250px] md:h-[300px] bg-[url('/contact-us-slide.png')] bg-cover bg-center flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">NDIS</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">NDIS</span>
          </p>
        </div>
      </motion.div>

      <div className="bg-white">
        {/* ===== Top Section ===== */}
        <motion.div
          className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-2 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* LEFT: Text */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              What Is The National Disability Insurance Scheme (NDIS)?
            </h2>
            <p className="text-gray-800 leading-relaxed">
              The National Disability Insurance Scheme (NDIS) is a significant
              social reform in Australia that aims to provide support and
              services to individuals with disabilities. It is designed to
              empower people with disabilities by giving them greater control
              and choice over their own lives. The NDIS provides funding for a
              wide range of services and supports, including healthcare,
              therapy, assistive technology, and personal care. By focusing on
              individual needs and goals, the NDIS seeks to enhance the quality
              of life and improve the outcomes for people with disabilities,
              enabling them to participate fully in society and achieve their
              aspirations.
            </p>
          </motion.div>

          {/* RIGHT: Video Placeholder */}
          <motion.div
            className="flex justify-center"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden">
              <Image
                src="/ndis-image.png"
                alt="NDIS Video"
                fill
                className="object-fill"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/youtube.png"
                  alt="Play Icon"
                  width={64}
                  height={64}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Bottom Section ===== */}
        <motion.div
          className="bg-[#F8F1FA] py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT: Image */}
            <motion.div
              className="flex justify-center"
              variants={fadeUp}
            >
              <div className="relative w-[350px] h-[400px] md:w-full md:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/ndis-eligibility-who-can-apply.png"
                  alt="NDIS Eligibility"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT: Eligibility Text */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                NDIS Eligibility: Who Can Apply?
              </h2>
              <p className="text-gray-700 mb-6">
                To be eligible for the NDIS, individuals must meet the following
                criteria:
              </p>

              {/* Dynamic UL */}
              <motion.ul
                className="space-y-4 text-gray-700"
                variants={staggerContainer}
              >
                {eligibilityCriteria.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={fadeUp}
                  >
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <Check className="text-[#4E944F] w-5 h-5" />
                    </div>
                    <p className="mb-0">
                      <strong>{item.title}:</strong> {item.description}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NdisPage;

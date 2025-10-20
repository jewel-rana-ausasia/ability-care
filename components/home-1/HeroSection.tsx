"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroSlides } from "@/lib/heroSectionText";

export default function HeroSection() {
  const firstSlide = heroSlides[0];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#9C55A1] lg:bg-transparent lg:bg-[url('/slide.png')] bg-no-repeat bg-center bg-cover overflow-hidden min-h-[500px]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* ===== TEXT CONTENT ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white space-y-4 lg:space-y-6 z-10 text-center lg:text-left order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              >
                {firstSlide.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-sm sm:text-base xl:text-lg leading-relaxed opacity-95 max-w-xl mx-auto lg:mx-0"
              >
                {firstSlide.description}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-[#b066b8] px-6 py-2 xl:px-8 md:py-2 xl:py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all text-sm sm:text-base"
              >
                Read More
              </motion.button>
            </motion.div>

            {/* ===== IMAGE CONTENT ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center z-10 order-1 lg:order-2"
            >
              <div className="relative">
                {/* MAIN HERO IMAGE */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="rounded-full w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]"
                >
                  <Image
                    src="/hero-image.png"
                    alt="NDIS Support Group"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* FLOATING SMALL IMAGE BADGE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute bottom-2 -left-2 lg:bottom-6 lg:-left-1 xl:bottom-4 xl:-left-4 rounded-full shadow-2xl"
                >
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden">
                    <Image
                      src="/we-love-ndis-logo.png"
                      alt="NDIS Circle Badge"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECONDARY SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex justify-center items-center mx-auto py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 sm:gap-10 px-4 sm:px-6">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Image
              src="/hero-icon1.png"
              alt="NDIS Registered Provider"
              width={550}
              height={120}
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[550px] h-auto"
            />
          </motion.div>

          {/* DIVIDER */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-16 sm:h-20 md:h-24 w-[3px] sm:w-[4px] bg-[#9C55A1]"
          ></motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2 leading-tight">
              Ability
              <br />
              Care
            </h2>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

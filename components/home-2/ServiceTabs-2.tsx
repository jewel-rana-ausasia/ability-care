"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // <-- Import Framer Motion

export default function ServiceTabs2() {
  // Framer Motion variants for individual tabs
  const tabVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeInOut" },
    }),
  };

  const tabs = [
    { src: "/image/home-2/ndis.png", alt: "NDIS", label: "NDIS", bg: "bg-[#6F3C72]", text: "text-white" },
    { src: "/image/home-2/about-us.png", alt: "About Us", label: "About Us", bg: "", text: "text-[#333]" },
    { src: "/image/home-2/get-support.png", alt: "Get Support", label: "Get Support", bg: "", text: "text-[#333]" },
    { src: "/image/home-2/referral.png", alt: "Referral", label: "Referral", bg: "", text: "text-[#333]" },
  ];

  return (
    <div className="relative -mt-10 lg:-mt-20 z-20 flex justify-center px-1 sm:px-4">
      <div className="bg-[#F4FBEE] rounded-full border-[4px] sm:border-[7px] border-[#4E944A] flex flex-wrap justify-center sm:justify-between items-center gap-1.5 sm:gap-0 px-1.5 sm:px-8 py-1.5 sm:py-5 w-full max-w-4xl shadow-md overflow-hidden">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center text-center px-3 sm:px-8 py-1 sm:py-2 rounded-full flex-1 min-w-[60px] sm:min-w-0 ${tab.bg}`}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={tabVariants}
          >
            <div className="w-8 h-7 sm:w-20 sm:h-14 flex items-center justify-center">
              <Image
                src={tab.src}
                alt={tab.alt}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <p className={`font-semibold ${tab.text} text-[10px] sm:text-base leading-tight mt-0.5 sm:mt-0`}>
              {tab.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

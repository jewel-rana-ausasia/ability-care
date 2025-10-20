"use client";

import Image from "next/image";
import { motion, Transition } from "framer-motion";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const transition: Transition = { duration: 0.6, ease: "easeOut" as const };

export default function ServiceTab3() {
  // ==== Dynamic Data ====
  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      title: "Mission",
      description:
        "Empowering people with disabilities with personalised support and independence.",
      image: "/mission.png",
      bgColor: "#5CA15B",
    },
    {
      id: 2,
      title: "Vision",
      description:
        "An inclusive world where people with disabilities live with independence, dignity, and opportunity.",
      image: "/vision.png",
      bgColor: "#9C55A1",
    },
    {
      id: 3,
      title: "Values",
      description:
        "Committed to compassion, integrity, and collaboration in supporting every individual’s journey.",
      image: "/values.png",
      bgColor: "#5CA15B",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition },
  };

  return (
    <section className="relative -mt-20 2xl:-mt-32 z-20 md:max-w-5xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
      {serviceItems.map((item) => (
        <motion.div
          key={item.id}
          className="text-white flex flex-col items-center justify-center p-5 2xl:p-10 text-center"
          style={{ backgroundColor: item.bgColor }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* ✅ Responsive Image using Tailwind classes only */}
          <div className="relative w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 mb-2 2xl:mb-4">
            <Image
              src={item.image}
              alt={`${item.title} Icon`}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="lg:text-base 2xl:text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-xs 2xl:text-sm leading-relaxed max-w-xs">{item.description}</p>
        </motion.div>
      ))}
    </section>
  );
}

"use client";

import { Target, Eye, Gem } from "lucide-react";
import Image from "next/image";
import { motion, Transition } from "framer-motion";

// Define the transition properly
const transition: Transition = { duration: 0.6, ease: "easeOut" as any }; // type-cast works here

export default function ServiceTab3() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition },
  };

  return (
    <section className="relative -mt-32 z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
      {/* Mission */}
      <motion.div
        className="bg-[#5CA15B] text-white flex flex-col items-center justify-center p-10 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image src="/mission.png" alt="Mission Icon" width={56} height={56} className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">Mission</h3>
        <p className="text-sm leading-relaxed max-w-xs">
          Empowering people with disabilities <br />
          with personalised support and independence.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="bg-[#9C55A1] text-white flex flex-col items-center justify-center p-10 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image src="/vision.png" alt="Vision Icon" width={56} height={56} className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">Vision</h3>
        <p className="text-sm leading-relaxed max-w-xs">
          An inclusive world where people with disabilities <br />
          live with independence, dignity, and opportunity.
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        className="bg-[#5CA15B] text-white flex flex-col items-center justify-center p-10 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image src="/values.png" alt="Values Icon" width={56} height={56} className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">Values</h3>
        <p className="text-sm leading-relaxed max-w-xs">
          An inclusive world where people with disabilities <br />
          live with independence, dignity, and opportunity.
        </p>
      </motion.div>
    </section>
  );
}

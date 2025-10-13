"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function EligibilitySection3() {
  return (
    <section
      className="relative -mt-20 bg-[#356634] bg-[url('/our-team.jpg')] bg-cover bg-center 
             bg-no-repeat bg-blend-overlay w-full min-h-[500px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Cards container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl py-20 px-20 flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Am I Eligible?
          </h3>
          <p className="text-gray-700 mb-6">
            Find out what support you can get.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#47A046] hover:bg-[#3b883c] text-white font-medium py-2.5 px-6 rounded-full flex items-center gap-2 transition-colors duration-200"
          >
            Check Eligibility <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl py-20 px-20 flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Our Team
          </h3>
          <p className="text-gray-700 mb-6">
            We’ve a team with cultural backgrounds.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#9C55A1] hover:bg-[#86438b] text-white font-medium py-2.5 px-6 rounded-full flex items-center gap-2 transition-colors duration-200"
          >
            Meet The Team <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AmIEligibleSection2() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[400px] overflow-hidden">
      {/* LEFT: Purple background (center aligned) */}
      <div className="relative w-full md:w-1/2 h-[250px] md:h-auto bg-[#6F3C72]">
        <div className="absolute inset-0 right-10 flex flex-col justify-center items-center text-center text-white px-10 md:px-32">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-3"
          >
            Am I Eligible?
          </motion.h2>

          <p className="text-white/90 mb-6 max-w-[300px]">
            Find out what support you can get.
          </p>

          <Button
            variant="secondary"
            className="bg-white text-[#8c3cc7] font-medium hover:bg-white/90 transition rounded-full px-6 py-2"
          >
            Check Eligibility <span className="ml-2 text-xl">››</span>
          </Button>
        </div>
      </div>

      {/* RIGHT: Background image + green overlay together */}
      <div
        className="relative w-full md:w-1/2 h-[250px] md:h-auto 
             bg-[#498B46] bg-[url('/our-team.jpg')] bg-cover bg-center 
             bg-no-repeat bg-blend-overlay flex flex-col justify-center items-center text-white px-10 md:px-16"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Our Team</h2>
        <p className="text-white/90 mb-6 max-w-[350px]">
          We’ve a team with cultural backgrounds.
        </p>
        <Button
          variant="secondary"
          className="bg-white text-[#8c3cc7] font-medium hover:bg-white/90 transition rounded-full px-6 py-2"
        >
          Meet The Team <span className="ml-2 text-xl">››</span>
        </Button>
      </div>
    </section>
  );
}

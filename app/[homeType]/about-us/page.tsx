"use client";
import FAQSection2 from "@/components/home-2/FAQSection-2";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="w-full">
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content with animation */}
        <motion.div
          className="absolute top-30 left-[20%] text-center text-white z-10"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={fadeUp}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">ABOUT US</h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">About Us</span>
          </p>
        </motion.div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>

          <div className="border-l-4 border-[#9C55A1] pl-4 mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Your Abilities, Our Commitment.
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            At Ability Care, we empower individuals with disabilities through
            personalized, compassionate support that fosters independence & 
            enriches lives. Our dedicated team tailors care plans to meet your
            unique needs, ensuring you receive the quality assistance you
            deserve. Join us on a journey towards greater inclusion, confidence,
            and wellbeing.
          </p>

          <p className="text-lg font-semibold text-gray-900">
            Join us on a journey towards greater inclusion, confidence, and
            well-being!
          </p>
        </motion.div>

        {/* RIGHT IMAGE GRID */}
        <motion.div
          className="grid grid-rows-2 grid-cols-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={fadeInScale} className="row-span-2">
            <Image
              src="/our-story-1.jpg"
              alt="Ability Care Image 1"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeInScale}>
            <Image
              src="/our-story-2.jpg"
              alt="Ability Care Image 2"
              width={400}
              height={240}
              className="rounded-lg w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeInScale}>
            <Image
              src="/our-story-3.jpg"
              alt="Ability Care Image 3"
              width={400}
              height={240}
              className="rounded-lg w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ===== MISSION / VISION / VALUES ===== */}
      <motion.div
        className="bg-[#A55FA4] py-20 mt-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="relative -mt-48 z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {[
            { title: "Mission", color: "#5CA15B", img: "/mission.png", text: "Empowering people with disabilities with personalised support and independence." },
            { title: "Vision", color: "#6F3C72", img: "/vision.png", text: "An inclusive world where people with disabilities live with independence, dignity, and opportunity." },
            { title: "Values", color: "#5CA15B", img: "/values.png", text: "An inclusive world where people with disabilities live with independence, dignity, and opportunity." },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className={`bg-[${card.color}] text-white flex flex-col items-center justify-center p-10 text-center`}
            >
              <Image
                src={card.img}
                alt={`${card.title} Icon`}
                width={56}
                height={56}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed max-w-xs">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div>
        <FAQSection2 />
      </div>
    </div>
  );
}

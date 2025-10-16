"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // <-- Import Framer Motion

export default function HeroSection2() {
  const slides = [
    {
      image: "/image/home-2/slide-image-1.jpg",
      title: (
        <>
          Ability Care –<br />
          NDIS Service Provider
          <br />
          in Melbourne
        </>
      ),
      description:
        "Ability Care, a trusted NDIS provider, is dedicated to trust, respect, empathy & integrity. We empower participants with personalised, exceptional disability support services.",
    },
    {
      image: "/image/home-2/slide-image-2.jpg",
      title: (
        <>
          Empowering Lives –<br />
          Supporting Your Journey
        </>
      ),
      description:
        "We’re committed to helping you live independently and confidently with high-quality NDIS support tailored to your goals.",
    },
    {
      image: "/image/home-2/slide-image-3.jpg",
      title: (
        <>
          Your Choice –<br />
          Your Care, Your Way
        </>
      ),
      description:
        "Partner with Ability Care to experience compassionate, person-centered disability services that put your needs first.",
    },
  ];

  // Framer Motion variants for fade-up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="w-full h-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative inset-0 lg:bg-cover bg-center lg:bg-no-repeat flex items-center min-h-[70vh] sm:min-h-[80vh]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

              {/* Content */}
              <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-20 grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="text-gray-900 space-y-4 sm:space-y-6 z-10 text-center lg:text-left"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  key={index} // ensure motion resets per slide
                >
                  <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-90 max-w-xl mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }}
                  >
                    <Button className="mt-2 sm:mt-4 bg-gradient-to-tr from-[#a863ad] to-[#6F3C72] hover:from-[#7B3D96] hover:to-[#9C55A1] text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 rounded-md font-semibold transition-all">
                      Read More
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination styling */}
      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          background-color: #9c55a1;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          transition: opacity 0.3s;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .custom-swiper .swiper-pagination {
            bottom: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

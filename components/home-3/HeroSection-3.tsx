"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, Easing } from "framer-motion";

// Define a cubic-bezier easing (easeOut)
const easeOut: Easing = [0.42, 0, 0.58, 1];

export default function HeroSection() {
  const slides = [
    {
      image: "/image/home-3/home-page-3-slide-image-1.jpg",
      title: (
        <>
          Ability Care –<br /> NDIS Service Provider <br /> in Melbourne
        </>
      ),
      description:
        "Ability Care, a trusted NDIS provider, is dedicated to trust, respect, empathy & integrity. We empower participants with personalised, exceptional disability support services.",
    },
    {
      image: "/image/home-2/slide-image-2.jpg",
      title: (
        <>
          Empowering Lives –<br /> Supporting Your Journey
        </>
      ),
      description:
        "We’re committed to helping you live independently and confidently with high-quality NDIS support tailored to your goals.",
    },
    {
      image: "/image/home-2/slide-image-3.jpg",
      title: (
        <>
          Your Choice –<br /> Your Care, Your Way
        </>
      ),
      description:
        "Partner with Ability Care to experience compassionate, person-centered disability services that put your needs first.",
    },
  ];

  // Motion variants
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1, ease: easeOut },
    }),
  };

  const bgVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: easeOut } },
  };

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop
        className="w-full h-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative w-full h-[85vh] 2xl:h-[80vh] flex items-center bg-center bg-no-repeat bg-cover md:bg-cover"
              initial="hidden"
              animate="visible"
              variants={bgVariants}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Mobile background color */}
              <div className="absolute inset-0 md:hidden bg-gradient-to-br from-[#F4FBEE] to-[#E8E2F0]" />

              {/* Overlay on desktop */}
              <div className="absolute inset-0 hidden md:block bg-gradient-to-tr from-[#356634] to-[#356634]/0" />

              {/* Content */}
              <div className="relative z-10 w-full max-w-5xl 2xl:max-w-7xl mx-auto py-12 flex flex-col justify-center h-full">
                <motion.div
                  className="max-w-3xl text-left space-y-4 2xl:space-y-6"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h1
                    className="text-xl lg:text-3xl 2xl:text-5xl font-bold leading-tight text-white"
                    custom={0}
                    variants={contentVariants}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="text-sm lg:text-base 2xl:text-lg text-white/90 max-w-xl"
                    custom={0.3}
                    variants={contentVariants}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div custom={0.6} variants={contentVariants} whileHover={{ scale: 1.01 }}>
                    <Button className="bg-[#498B46] hover:bg-[#3d7a3b] text-white text-sm sm:text-base md:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-md font-semibold shadow-md transition-all">
                      Read More
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#498B46] text-[#498B46] hover:text-white rounded-full p-2 sm:p-3 shadow-md transition-all cursor-pointer">
        <ArrowLeft size={22} />
      </div>
      <div className="swiper-button-next-custom absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#498B46] text-[#498B46] hover:text-white rounded-full p-2 sm:p-3 shadow-md transition-all cursor-pointer">
        <ArrowRight size={22} />
      </div>

      {/* Pagination & Responsive Styles */}
      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          transition: opacity 0.3s;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .custom-swiper .swiper-slide {
            background-image: none !important;
          }
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

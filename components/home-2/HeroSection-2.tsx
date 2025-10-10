"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

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

  return (
    <section className="relative w-full overflow-hidden  flex items-center">
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
              className="relative inset-0 bg-cover bg-center bg-no-repeat flex items-center min-h-[70vh]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

              <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-20 grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-gray-900 space-y-6 z-10">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 max-w-xl">
                    {slide.description}
                  </p>

                  <Button className="bg-gradient-to-tr from-[#a863ad] to-[#6F3C72] hover:from-[#7B3D96] hover:to-[#9C55A1] text-white lg:px-10 lg:py-6 rounded-md font-semibold transition-all">
                    Read More
                  </Button>
                </div>
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
      `}</style>
    </section>
  );
}

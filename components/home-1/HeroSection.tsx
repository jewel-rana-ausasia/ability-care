import { Heart } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-[#9C55A1] lg:bg-transparent lg:bg-[url('/slide.png')] bg-no-repeat bg-center bg-cover overflow-hidden min-h-[500px]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-white space-y-4 lg:space-y-6 z-10 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Ability Care -<br />
                NDIS Service Provider
                <br />
                in Melbourne
              </h1>

              <p className="text-sm sm:text-base xl:text-lg leading-relaxed opacity-95 max-w-xl mx-auto lg:mx-0">
                Ability Care, a trusted NDIS provider, is dedicated to trust,
                respect, empathy & integrity. We empower participants with
                personalised, exceptional disability support services.
              </p>

              <button className="bg-white text-[#b066b8] px-6 py-2 xl:px-8 md:py-2 xl:py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all text-sm sm:text-base">
                Read More
              </button>
            </div>

            {/* Image Content */}
            <div className="relative flex items-center justify-center z-10 order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-full w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]">
                  <img
                    src="/hero-image.png"
                    alt="NDIS Support Group"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="absolute bottom-2 -left-2 lg:bottom-6 lg:-left-1 xl:bottom-8 xl:left-8 rounded-full shadow-2xl">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-[#7b3d96] rounded-full border-[6px] xl:border-[8px] border-white flex flex-col items-center justify-center text-white shadow-lg">
                    <div className="flex items-end justify-center mb-1">
                      <span className="text-base sm:text-lg lg:text-2xl font-bold leading-none">
                        We
                      </span>
                      <Heart className="w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-[#88c843] fill-[#88c843] ml-1 relative top-[1px]" />
                    </div>

                    {/* "ndis" text */}
                    <span className="text-2xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight">
                      ndis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center mx-auto py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 sm:gap-10 px-4 sm:px-6">
          {/* Left: Image Section */}
          <div className="flex-shrink-0">
            <Image
              src="/hero-icon1.png"
              alt="NDIS Registered Provider"
              width={550}
              height={120}
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[550px] h-auto"
            />
          </div>

          {/* Middle Divider */}
          <div className="h-16 sm:h-20 md:h-24 w-[3px] sm:w-[4px] bg-[#9C55A1]"></div>

          {/* Right: Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2 leading-tight">
              Ability
              <br />
              Care
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

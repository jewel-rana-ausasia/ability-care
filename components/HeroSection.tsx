import { Heart } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="relative  bg-[url('/slide.png')] bg-no-repeat bg bg-center bg-cover overflow-hidden min-h-[500px]">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 lg:py-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white space-y-6 z-10">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ability Care -<br />
                NDIS Service Provider
                <br />
                in Melbourne
              </h1>

              <p className="text-base lg:text-lg leading-relaxed opacity-95 max-w-xl">
                Ability Care, a trusted NDIS provider, is dedicated to trust,
                respect, empathy & integrity. We empower participants with
                personalised, exceptional disability support services.
              </p>

              <button className="bg-white text-[#b066b8] px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                Read More
              </button>
            </div>

            <div className="relative flex items-center justify-center z-10">
              <div className="relative">
                <div className="rounded-full w-[450px] h-[450px] lg:w-[550px] lg:h-[550px]">
                  <img
                    src="/hero-image.png"
                    alt="NDIS Support Group"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="absolute bottom-8 left-8 rounded-full shadow-2xl">
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-[#7b3d96] rounded-full border-[8px] border-white flex flex-col items-center justify-center text-white shadow-lg">
                    <div className="flex items-end justify-center mb-1">
                      <span className="text-lg lg:text-2xl font-bold leading-none">
                        We
                      </span>
                      <Heart className="w-6 h-6 lg:w-10 lg:h-10 text-[#88c843] fill-[#88c843] ml-1 relative top-[1px]" />
                    </div>

                    {/* "ndis" text */}
                    <span className="text-2xl lg:text-4xl font-extrabold tracking-tight">
                      ndis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center mx-auto py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Image Section */}
          <div className="flex-shrink-0">
            <Image
              src="/hero-icon1.png" // <-- replace with your image path
              alt="NDIS Registered Provider"
              width={400}
              height={100}
              className="w-full"
            />
          </div>

          <div className="h-24 w-[4px] bg-[#9C55A1]"></div>

          {/* Right: Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
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

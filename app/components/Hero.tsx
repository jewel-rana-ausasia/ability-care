import { Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#b066b8] overflow-hidden min-h-[600px]">
      <div className="absolute -bottom-0.5 left-0 right-0 w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path
            fill="#ffffff"
            d="M0,320 C300,280 480,200 720,240 C860,100 1200,80 1440,130 L1440,320 L0,320 Z"
          /> 

          
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-6 z-10">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ability Care -<br />
              NDIS Service Provider<br />
              in Melbourne
            </h1>

            <p className="text-base lg:text-lg leading-relaxed opacity-95 max-w-xl">
              Ability Care, a trusted NDIS provider, is dedicated to trust, respect,
              empathy & integrity. We empower participants with personalised,
              exceptional disability support services.
            </p>

            <button className="bg-white text-[#b066b8] px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              Read More
            </button>
          </div>

          <div className="relative flex items-center justify-center z-10">
            {/* <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#88c843] rounded-full"></div> */}
            {/* <div className="absolute top-16 -left-6 w-10 h-10 bg-[#88c843] rounded-full"></div> */}
            {/* <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-black rounded-full"></div> */}
            {/* <div className="absolute bottom-16 -right-6 w-10 h-10 bg-[#88c843] rounded-full"></div> */}

            <div className="relative">
              <div className="rounded-full w-[450px] h-[450px] lg:w-[550px] lg:h-[550px]">
                {/* <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/hero-image.png"
                    alt="NDIS Support Group"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <img
                    src="/hero-image.png"
                    alt="NDIS Support Group"
                    className="w-full h-full object-contain"
                  />
              </div>

              <div className="absolute bottom-8 left-8 rounded-full shadow-2xl">
               <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-[#7b3d96] rounded-full border-[8px] border-white flex flex-col items-center justify-center text-white shadow-lg">
                <div className="flex items-end justify-center mb-1">
                  <span className="text-lg lg:text-2xl font-bold leading-none">We</span>
                  <Heart className="w-6 h-6 lg:w-10 lg:h-10 text-[#88c843] fill-[#88c843] ml-1 relative top-[1px]" />
                </div>

                {/* "ndis" text */}
                <span className="text-2xl lg:text-4xl font-extrabold tracking-tight">ndis</span>
              </div>

              {/* small green dot at bottom right (decorative) */}
              {/* <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#88c843] rounded-full"></div> */}
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

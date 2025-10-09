import Image from "next/image";

export default function HeroFooter() {
  return (
    <section className="w-full bg-white py-10 mb-10">
      <div className="max-w-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        
        {/* Left: Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/hero-icon1.png" // <-- replace with your image path
            alt="NDIS Registered Provider"
            width={650}
            height={120}
            className="w-full max-w-[480px] md:max-w-none"
          />
        </div>

        <div className="h-16 w-[4px] bg-[#9C55A1]"></div>

        {/* Right: Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Ability<br/>
             Care
          </h2>
          
        </div>
      </div>
    </section>
  );
}

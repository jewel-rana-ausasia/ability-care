// "use client";
// import { Users, Home, HandHelping, Send } from "lucide-react";
// import Image from "next/image";

// export default function ServiceTabs2() {
//   return (
//     <div className="relative -mt-20 z-20 flex justify-center px-4">
//       <div className="bg-[#F4FBEE] rounded-full border-3 lg:border-[7px] border-[#4E944A] flex justify-between items-center px-4 lg:px-8 py-2 lg:py-5 w-full max-w-4xl shadow-md">
//         {/* NDIS Active */}
//         <div className="flex flex-col items-center text-center bg-[#6F3C72] space-y-0 px-5 lg:px-10 py-2  rounded-full">
//           <div className="w-20 h-14  flex items-center justify-center text-white">
//             <Image
//               src="/image/home-2/ndis.png"
//               alt="NDIS"
//               width={45}
//               height={45}
//               className="object-contain"
//             />
//           </div>
//           <p className="font-semibold text-white">NDIS</p>
//         </div>

//         {/* About Us */}
//         <div className="flex flex-col items-center text-center space-y-0 px-10 py-2 rounded-full">
//           <div className="w-20 h-14 rounded-full flex items-center justify-center text-[#498B46]">
//             <Image
//               src="/image/home-2/about-us.png"
//               alt="NDIS"
//               width={45}
//               height={45}
//               className="object-contain"
//             />
//           </div>
//           <p className="font-semibold">About Us</p>
//         </div>

//         {/* Get Support */}
//         <div className="flex flex-col items-center text-center space-y-0 px-10 py-2 rounded-full">
//           <div className="w-20 h-14 rounded-full flex items-center justify-center text-[#498B46]">
//             <Image
//               src="/image/home-2/get-support.png"
//               alt="NDIS"
//               width={45}
//               height={45}
//               className="object-contain"
//             />
//           </div>
//           <p className="font-semibold">Get Support</p>
//         </div>

//         {/* Referral */}
//         <div className="flex flex-col items-center text-center space-y-0 px-10 py-2 rounded-full">
//           <div className="w-20 h-14 rounded-full flex items-center justify-center text-[#498B46]">
//             <Image
//               src="/image/home-2/referral.png"
//               alt="NDIS"
//               width={45}
//               height={45}
//               className="object-contain"
//             />
//           </div>
//           <p className="font-semibold">Referral</p>
//         </div>
//       </div>
//     </div>
//   );
// }












"use client";
import Image from "next/image";

export default function ServiceTabs2() {
  return (
    <div className="relative -mt-10 lg:-mt-20 z-20 flex justify-center px-1 sm:px-4">
      <div className="bg-[#F4FBEE] rounded-full border-[4px] sm:border-[7px] border-[#4E944A] flex flex-wrap justify-center sm:justify-between items-center gap-1.5 sm:gap-0 px-1.5 sm:px-8 py-1.5 sm:py-5 w-full max-w-4xl shadow-md overflow-hidden">
        {/* NDIS */}
        <div className="flex flex-col items-center text-center bg-[#6F3C72] px-3 sm:px-8 py-1 sm:py-2 rounded-full flex-1 min-w-[60px] sm:min-w-0">
          <div className="w-8 h-7 sm:w-20 sm:h-14 flex items-center justify-center">
            <Image
              src="/image/home-2/ndis.png"
              alt="NDIS"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-white text-[10px] sm:text-base leading-tight mt-0.5 sm:mt-0">
            NDIS
          </p>
        </div>

        {/* About Us */}
        <div className="flex flex-col items-center text-center px-3 sm:px-8 py-1 sm:py-2 rounded-full flex-1 min-w-[60px] sm:min-w-0">
          <div className="w-8 h-7 sm:w-20 sm:h-14 flex items-center justify-center">
            <Image
              src="/image/home-2/about-us.png"
              alt="About Us"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-[#333] text-[10px] sm:text-base leading-tight mt-0.5 sm:mt-0">
            About Us
          </p>
        </div>

        {/* Get Support */}
        <div className="flex flex-col items-center text-center px-3 sm:px-8 py-1 sm:py-2 rounded-full flex-1 min-w-[60px] sm:min-w-0">
          <div className="w-8 h-7 sm:w-20 sm:h-14 flex items-center justify-center">
            <Image
              src="/image/home-2/get-support.png"
              alt="Get Support"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-[#333] text-[10px] sm:text-base leading-tight mt-0.5 sm:mt-0">
            Get Support
          </p>
        </div>

        {/* Referral */}
        <div className="flex flex-col items-center text-center px-3 sm:px-8 py-1 sm:py-2 rounded-full flex-1 min-w-[60px] sm:min-w-0">
          <div className="w-8 h-7 sm:w-20 sm:h-14 flex items-center justify-center">
            <Image
              src="/image/home-2/referral.png"
              alt="Referral"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-[#333] text-[10px] sm:text-base leading-tight mt-0.5 sm:mt-0">
            Referral
          </p>
        </div>
      </div>
    </div>
  );
}

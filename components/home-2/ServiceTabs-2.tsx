"use client";
import { Users, Home, HandHelping, Send } from "lucide-react";
import Image from "next/image";

export default function ServiceTabs2() {
  return (
    <div className="relative -mt-20 z-20 flex justify-center px-4">
      <div className="bg-[#F4FBEE] rounded-full border-[7px] border-[#4E944A] flex justify-between items-center px-8 py-5 w-full max-w-4xl shadow-md">
        {/* NDIS Active */}
        <div className="flex flex-col items-center text-center bg-[#6F3C72] space-y-0 px-10 py-2  rounded-full">
          <div className="w-20 h-14  flex items-center justify-center text-white">
            <Image
              src="/image/home-2/ndis.png"
              alt="NDIS"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-white">NDIS</p>
        </div>

        {/* About Us */}
        <div className="flex flex-col items-center text-center space-y-0 px-10 py-2 rounded-full">
          <div className="w-20 h-14 rounded-full flex items-center justify-center text-[#498B46]">
            <Image
              src="/image/home-2/about-us.png"
              alt="NDIS"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <p className="font-semibold">About Us</p>
        </div>

        {/* Get Support */}
        <div className="flex flex-col items-center text-center space-y-0 px-10 py-2 rounded-full">
          <div className="w-20 h-14 rounded-full flex items-center justify-center text-[#498B46]">
            <Image
              src="/image/home-2/get-support.png"
              alt="NDIS"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <p className="font-semibold">Get Support</p>
        </div>

        {/* Referral */}
        <div className="flex flex-col items-center text-center space-y-0 px-10 py-2 rounded-full">
          <div className="w-20 h-14 rounded-full flex items-center justify-center text-[#498B46]">
            <Image
              src="/image/home-2/referral.png"
              alt="NDIS"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <p className="font-semibold">Referral</p>
        </div>
      </div>
    </div>
  );
}

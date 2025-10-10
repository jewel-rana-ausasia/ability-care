"use client";

import { FC } from "react";
import { Phone, Mail, Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header className="w-full mx-auto">
      <div className="bg-[#9C55A1]">
        <div className="md:max-w-7xl mx-auto text-white text-xs md:text-[14px] py-2 px-4 flex flex-col md:flex-row justify-between items-center">
          <span>Flinders St, Melbourne VIC 3000, Australia</span>
          <div className="flex items-center gap-4 mt-1 md:mt-0">
            <span className="flex items-center gap-1">
              <Phone size={14} /> Call: 0000 124 567
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> info@abilitycare.com.au
            </span>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-gray-200">
                <Facebook size={14} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <Instagram size={14} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <X size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#F7F0FA] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/footer-logo.png"
              alt="Ability Care Logo"
              width={80}
              height={50}
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 text-[#9C55A1] font-medium">
            <Link
              href="#"
              className="text-[#6F3C72] font-semibold hover:text-purple-600"
            >
              Home
            </Link>
            <Link href="#" className="hover:text-purple-600">
              About Us
            </Link>
            <Link href="#" className="hover:text-purple-600">
              NDIS
            </Link>
            <Link href="#" className="hover:text-purple-600">
              Services
            </Link>
            <Link href="#" className="hover:text-purple-600">
              New Participants
            </Link>
            <Link href="#" className="hover:text-purple-600">
              Blog
            </Link>
            <Link href="#" className="hover:text-purple-600">
              Feedback
            </Link>
            <Link href="#" className="hover:text-purple-600">
              Contact Us
            </Link>
          </div>

          <Link
            href="#"
            className="bg-[#9C55A1] text-white px-6 py-2 rounded-full hover:bg-[#732d91] transition"
          >
            Referrals
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

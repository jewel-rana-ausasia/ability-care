"use client";

import { FC, useState } from "react";
import { Phone, Mail, Facebook, Instagram, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const pathname = usePathname();
  const currentSection = pathname?.split("/")[1];
  const homeType = ["home1", "home2", "home3"].includes(currentSection)
    ? currentSection
    : "home1";

  return (
    <header className="w-full mx-auto">
      {/* ==== TOP INFO BAR ==== */}
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

      {/* ==== MAIN NAVBAR ==== */}
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

          <div className="hidden md:flex items-center space-x-6 text-black font-medium">
            <div
              className="relative"
              onMouseEnter={() => setIsHomeOpen(true)}
              onMouseLeave={() => setIsHomeOpen(false)}
            >
              <button className="flex items-center gap-1 text-[#6F3C72] font-semibold hover:text-purple-600 transition">
                Home
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isHomeOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 z-50 transform transition-all duration-300 origin-top
                  ${isHomeOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"}`}
              >
                <Link
                  href="/home1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#9C55A1] transition-colors duration-200"
                >
                  Home-1
                </Link>
                <Link
                  href="/home2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#9C55A1] transition-colors duration-200"
                >
                  Home-2
                </Link>
                <Link
                  href="/home3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#9C55A1] transition-colors duration-200"
                >
                  Home-3
                </Link>
              </div>
            </div>

            <Link
              href={`/${homeType}/about-us`}
              className="hover:text-purple-600"
            >
              About Us
            </Link>
            <Link href={`/${homeType}/ndis`} className="hover:text-purple-600">
              NDIS
            </Link>
            <Link
              href={`/${homeType}/our-services`}
              className="hover:text-purple-600"
            >
              Services
            </Link>
            <Link
              href={`/${homeType}/new-participants`}
              className="hover:text-purple-600"
            >
              New Participants
            </Link>
            <Link href={`/${homeType}/blogs`} className="hover:text-purple-600">
              Blog
            </Link>
            <Link
              href={`/${homeType}/feedback`}
              className="hover:text-purple-600"
            >
              Feedback
            </Link>
            <Link
              href={`/${homeType}/contact-us`}
              className="hover:text-purple-600"
            >
              Contact Us
            </Link>
          </div>

          <Link
            href={`/${homeType}/referrals`}
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

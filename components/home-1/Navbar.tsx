"use client";

import { FC, useState } from "react";
import { Phone, Mail, Facebook, Instagram, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/lib/navbarData";

const Navbar: FC = () => {
  // Destructure data
  const { topInfo, logo, menu, cta } = navbarData;

  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const pathname = usePathname();
  const currentSection = pathname?.split("/")[1];
  const homeType = ["home1", "home2", "home3"].includes(currentSection)
    ? currentSection
    : "home1";

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === `/${homeType}` || href === "/") {
      return pathname === `/${homeType}` || pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  // Function to get link classes based on active state
  const getLinkClasses = (href: string) => {
    const baseClasses = "hover:text-[#9C55A1] transition-colors duration-200";
    const activeClasses = "text-[#9C55A1] font-semibold";
    const inactiveClasses = "text-gray-900";

    return `${baseClasses} ${isActiveLink(href) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="w-full mx-auto">
      {/* ==== TOP INFO BAR ==== */}
      <div className="bg-[#9C55A1]">
        <div className="md:max-w-7xl mx-auto text-white text-xs md:text-[14px] py-2 px-4 flex flex-col md:flex-row justify-between items-center">
          <span>{topInfo.address}</span>
          <div className="flex items-center gap-4 mt-1 md:mt-0">
            <span className="flex items-center gap-1">
              <Phone size={14} /> {topInfo.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> {topInfo.email}
            </span>

            <div className="flex items-center gap-2">
              {topInfo.socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    className="hover:text-gray-200"
                  >
                    <IconComponent size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ==== MAIN NAVBAR ==== */}
      <nav className="bg-[#F7F0FA] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 text-black font-medium">
            {menu.map((item, idx) =>
              item.type === "dropdown" ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setIsHomeOpen(true)}
                  onMouseLeave={() => setIsHomeOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-semibold hover:text-[#9C55A1] transition ${
                      isActiveLink(`/${homeType}`)
                        ? "text-[#9C55A1]"
                        : "text-black"
                    }`}
                  >
                    {item.title}{" "}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isHomeOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 z-50 transform transition-all duration-300 origin-top
                        ${isHomeOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"}`}
                  >
                    {item.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          pathname === link.href
                            ? "bg-purple-50 text-[#9C55A1] font-medium"
                            : "text-gray-700 hover:bg-purple-50 hover:text-[#9C55A1]"
                        }`}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={`/${homeType}${item.href}`}
                  className={getLinkClasses(`/${homeType}${item.href}`)}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          <Link
            href={`/${homeType}/referrals`}
            className={`px-6 py-2 rounded-full transition ${
              isActiveLink(`/${homeType}/referrals`)
                ? "bg-[#732d91] text-white"
                : "bg-[#9C55A1] text-white hover:bg-[#732d91]"
            }`}
          >
            Referrals
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

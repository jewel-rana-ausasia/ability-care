// /lib/navbarData.ts
import { Facebook, Instagram, X } from "lucide-react";

export const navbarData = {
  topInfo: {
    address: "Flinders St, Melbourne VIC 3000, Australia",
    phone: "0000 124 567",
    email: "info@abilitycare.com.au",
    socialLinks: [
      { icon: Facebook, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: X, url: "#" },
    ],
  },
  logo: {
    src: "/footer-logo.png",
    width: 80,
    height: 50,
    alt: "Ability Care Logo",
  },
  menu: [
    {
      title: "Home",
      type: "dropdown",
      links: [
        { title: "Home-1", href: "/home1" },
        { title: "Home-2", href: "/home2" },
        { title: "Home-3", href: "/home3" },
      ],
    },
    { title: "About Us", href: "/about-us" },
    { title: "NDIS", href: "/ndis" },
    { title: "Services", href: "/our-services" },
    { title: "New Participants", href: "/new-participants" },
    { title: "Blog", href: "/blogs" },
    { title: "Feedback", href: "/feedback" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  cta: {
    title: "Referrals",
    href: "/referrals",
  },
};

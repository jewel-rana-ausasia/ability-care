"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/home-1/Footer";
import Footer3 from "@/components/home-3/Footer3";
import Footer2 from "@/components/home-2/Footer-2";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/home1")) {
    return <Footer />;
  }

  if (pathname.startsWith("/home2")) {
    return <Footer2 />;
  }

  if (pathname.startsWith("/home3")) {
    return <Footer3 />;
  }

  // Default footer (optional)
  return <Footer />;
}

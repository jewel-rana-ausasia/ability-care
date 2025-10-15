import React from "react";

export default async function HomeTypeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ homeType: string }>;
}) {
   const { homeType } = await params;
  let Navbar, Footer;

  switch (homeType) {
    case "home1":
      Navbar = require("@/components/home-1/Navbar").default;
      Footer = require("@/components/home-1/Footer").default;
      break;

    case "home2":
      Navbar = require("@/components/home-2/Navbar2").default;
      Footer = require("@/components/home-2/Footer-2").default;
      break;

    case "home3":
      Navbar = require("@/components/home-3/Navbar3").default;
      Footer = require("@/components/home-3/Footer3").default;
      break;

    default:
      // fallback (optional)
      Navbar = require("@/components/home-1/Navbar").default;
      Footer = require("@/components/home-1/Footer").default;
  }
  return (
    <div>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

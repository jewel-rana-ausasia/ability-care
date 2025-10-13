"use client";

import { Target, Eye, Gem } from "lucide-react";

export default function ServiceTab3() {
  return (
    <section className="relative -mt-32 z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
      {/* Mission */}
      <div className="bg-[#5CA15B] text-white flex flex-col items-center justify-center p-10 text-center">
        <Target className="w-14 h-14 mb-4" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold mb-2">Mission</h3>
        <p className="text-sm leading-relaxed max-w-xs">
          Empowering people with disabilities <br />
          with personalised support and independence.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-[#9C55A1] text-white flex flex-col items-center justify-center p-10 text-center">
        <Eye className="w-14 h-14 mb-4" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold mb-2">Vision</h3>
        <p className="text-sm leading-relaxed max-w-xs">
          An inclusive world where people with disabilities <br />
          live with independence, dignity, and opportunity.
        </p>
      </div>

      {/* Values */}
      <div className="bg-[#5CA15B] text-white flex flex-col items-center justify-center p-10 text-center">
        <Gem className="w-14 h-14 mb-4" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold mb-2">Values</h3>
        <p className="text-sm leading-relaxed max-w-xs">
          An inclusive world where people with disabilities <br />
          live with independence, dignity, and opportunity.
        </p>
      </div>
    </section>
  );
}

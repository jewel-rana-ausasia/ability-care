// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

// export default function ContactSection() {
//   return (
//     <section className="w-full py-12 lg:py-24 px-6 md:px-12 lg:px-24">
//       <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-xl overflow-hidden">
//         <div className="w-full md:h-[600px] flex justify-around items-center bg-white shadow-2xl flex-col md:flex-row">
//           <div className="flex-1 md:mr-32 p-4 md:p-8 md:px-20 md:py-20">
//             <h1 className="text-3xl font-bold text-gray-900 mb-4">
//               Contact with Us
//             </h1>
//             <p className="text-gray-800 mb-8">
//               Fill a query about your need, or just a general enquiry, we would
//               love to hear from you!
//             </p>

//             <form className="space-y-10">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Name:"
//                   className="w-full border-b-1 border-[#805283] py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email:"
//                   className="w-full border-b-1 border-[#805283] py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   placeholder="Message:"
//                   className="w-full border-b-1 border-[#805283] py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[#9C55A1] to-[#6F3C72] hover:from-[#7B3D96] hover:to-[#9C55A1] text-white font-medium py-3 px-6 transition-colors duration-200 rounded-md"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           <div className="relative h-full bg-[#9C55A1] mt-6 md:mt-0 p-8 md:p-12 flex flex-col">
//             <div className="relative md:-left-4/7 top-[15%] bg-[#61B95D] rounded-xl p-10 mb-8 shadow-lg">
//               <h2 className="text-white text-3xl font-bold mb-6">Contact Us</h2>

//               <div className="space-y-5">
//                 <div className="flex items-start text-white">
//                   <MapPin className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="text-base font-medium">Address: Heidelberg</p>
//                     <p className="text-base">Heights VIC 3081, Australia</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center text-white">
//                   <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
//                   <p className="text-base">0000 124 567</p>
//                 </div>

//                 <div className="flex items-center text-white">
//                   <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
//                   <p className="text-base">info@abilitycare.com.au</p>
//                 </div>

//                 <div className="flex items-start text-white">
//                   <Clock className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
//                   <p className="text-base">9:00 AM - 5:00 PM (Mon - Fri)</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-auto flex items-center justify-center space-x-6">
//               <a
//                 href="#"
//                 className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-colors duration-200"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-colors duration-200"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-12 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-7 bg-white shadow-2xl">
          {/* Left Column - Contact Form */}
          <div className="col-span-5 p-8 md:p-12 lg:px-20 lg:py-30  mr-36">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact with Us
            </h1>
            <p className="text-gray-800 mb-8">
              Fill a query about your need, or just a general enquiry, we would
              love to hear from you!
            </p>

            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Name:"
                  className="w-full border-b border-[#805283] py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email:"
                  className="w-full border-b border-[#805283] py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Message:"
                  className="w-full border-b border-[#805283] py-2 px-0 focus:outline-none focus:border-purple-600 text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9C55A1] to-[#6F3C72] hover:from-[#7B3D96] hover:to-[#9C55A1] text-white font-medium py-3 px-6 transition-colors duration-200 rounded-sm"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-[#9C55A1] col-span-2 flex flex-col py-10">
            <div className="relative md:-left-3/7 top-[15%] bg-[#61B95D] rounded-xl p-8 md:px-10 md:py-16 mb-8 shadow-lg">
              <h2 className="text-white text-3xl font-bold mb-6">Contact Us</h2>

              <div className="space-y-6">
                <div className="flex items-start text-white">
                  <MapPin className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium">Address: Heidelberg</p>
                    <p className="text-base">Heights VIC 3081, Australia</p>
                  </div>
                </div>

                <div className="flex items-center text-white">
                  <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
                  <p className="text-base">0000 124 567</p>
                </div>

                <div className="flex items-center text-white">
                  <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
                  <p className="text-base">info@abilitycare.com.au</p>
                </div>

                <div className="flex items-start text-white">
                  <Clock className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-base">9:00 AM - 5:00 PM (Mon - Fri)</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-auto flex items-center justify-start space-x-6 px-16">
              <a
                href="#"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

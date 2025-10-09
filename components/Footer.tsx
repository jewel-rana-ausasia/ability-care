import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section
        className="
          relative 
          bg-[url('/footer.png')] 
          py-20
         bg-[#F5EEF6]
         text-white
        "
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-left">
          {/* Logo & Description */}
          <div>
            <img
              src="/footer-logo.png"
              alt="Ability Care Logo"
              className="w-40 h-30 mb-4"
            />
            <p className="text-sm text-gray-100 leading-relaxed">
              We are committed to empowering individuals with disabilities
              through personalised support services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-100">
              <li>Assist–Personal Activities</li>
              <li>Assist–Travel/Transport</li>
              <li>Daily Tasks/Shared Living</li>
              <li>Development–Life Skills</li>
              <li>Household Tasks</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-100">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>NDIS</li>
              <li>New Participants</li>
              <li>Feed Backs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-gray-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-white mt-1" />
                <span>Address: Heidelberg Heights VIC 3081, Australia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <span>0000 124 567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span>info@abilitycare.com.au</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="hover:text-gray-200 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6F3C72] border-t border-[#9C55A1]">
        <div className="max-w-7xl mx-auto px-6 text-white py-3 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Left Side */}
            <div className="text-center md:text-left">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="font-semibold">Ability Care</span> | NDIS Website
              by <span className="font-semibold">Aus Asia Online</span>
            </div>

            {/* Right Side */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-white font-medium">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

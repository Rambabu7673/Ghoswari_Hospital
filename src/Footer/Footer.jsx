import React from "react";
import { FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo */}
        <h2 className="flex items-center gap-3 mb-8 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-2xl font-extrabold shadow-lg transition-transform duration-300 group-hover:scale-110">
            G
          </span>

          <span className="text-2xl font-extrabold text-white tracking-wide group-hover:text-blue-400 transition">
            hoswari Hospital
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 border-l-4 border-blue-500 pl-2">
              About Us
            </h3>
            <p className="text-md leading-relaxed text-white font-semibold tracking-wide">
              Ghoswari Hospital delivers trusted and advanced healthcare
              services with experienced doctors, modern technology, and
              patient-first care approach.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 border-l-4 border-blue-500 pl-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-md text-white font-sans tracking-wider">
              <li className="hover:text-blue-900 cursor-pointer transition">Emergency Care</li>
              <li className="hover:text-blue-900 cursor-pointer transition">Cardiology</li>
              <li className="hover:text-blue-900 cursor-pointer transition">Neurology</li>
              <li className="hover:text-blue-900 cursor-pointer transition">Orthopedics</li>
              <li className="hover:text-blue-900 cursor-pointer transition">Diagnostics</li>
              <li className="hover:text-blue-900 cursor-pointer transition">24/7 Pharmacy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 border-l-4 border-blue-500 pl-2">
              Contact Info
            </h3>

            <p className="text-md text-white font-sans tracking-wider leading-relaxed mb-3">
              📍 Patna, Bihar <br />
              📞 +91 9876543210
            </p>

            <div className="space-y-2 text-md text-white font-sans tracking-wider cursor-pointer">
              <p className="flex items-center gap-2 hover:text-white transition">
                <MdEmail /> info@ghoswarihospital.com
              </p>
              <p className="flex items-center gap-2 hover:text-pink-400 transition">
                <FaInstagram /> @ghoswarihospital
              </p>
              <p className="flex items-center gap-2 hover:text-blue-400 transition">
                <FaTwitter /> @ghoswarihosp
              </p>
              <p className="flex items-center gap-2 hover:text-green-400 transition">
                <FaGlobe /> www.ghoswarihospital.com
              </p>
            </div>
          </div>

          {/* Extra */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 border-l-4 border-blue-500 pl-2">
              Why Choose Us
            </h3>
            <ul className="space-y-2 text-md text-white tracking-wider font-sans">
              <li>✔ 24/7 Emergency Support</li>
              <li>✔ Expert Medical Team</li>
              <li>✔ Advanced Equipment</li>
              <li>✔ Easy Appointment</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-5 text-center text-md  text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Ghoswari Hospital • Designed Rambabu Kumar
        </div>
      </div>
    </footer>
  );
};

export default Footer;

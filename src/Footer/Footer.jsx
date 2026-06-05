import React from "react";

import {
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaUserMd,
  FaAmbulance,
  FaClinicMedical,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { GiMedicines } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#031525] via-[#06243a] to-[#04111d] text-gray-300 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* LOGO */}
        <div className="flex items-center gap-4 mb-12 group cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-3xl font-black shadow-lg group-hover:scale-110 transition duration-300">
            G
          </div>

          <h1 className="text-3xl font-black text-white tracking-wide group-hover:text-cyan-400 transition duration-300">
            hoswari Hospital
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ABOUT */}
          <div>
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-3 mb-5 flex items-center gap-2">
              <FaHeartbeat className="text-cyan-400" />
              About Us
            </h2>

            <p className="leading-8 text-sm sm:text-base text-gray-300">
              Ghoswari Hospital provides trusted healthcare services with
              experienced doctors, advanced medical technology, and a
              patient-first care approach for better treatment.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-3 mb-5 flex items-center gap-2">
              <FaClinicMedical className="text-cyan-400" />
              Our Services
            </h2>

            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">
                <FaAmbulance className="text-cyan-400" />
                Emergency Care
              </li>

              <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">
                <FaHeartbeat className="text-cyan-400" />
                Cardiology
              </li>

              <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">
                <FaUserMd className="text-cyan-400" />
                Neurology
              </li>

              <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">
                <FaClinicMedical className="text-cyan-400" />
                Orthopedics
              </li>

              <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">
                <GiMedicines className="text-cyan-400" />
                24/7 Pharmacy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-3 mb-5">
              Contact Info
            </h2>

            <div className="space-y-4 text-sm sm:text-base">
              <p className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
                <FaMapMarkerAlt className="text-cyan-400" />
                Patna, Bihar
              </p>

              <p className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
                <FaPhoneAlt className="text-cyan-400" />
                +91 9876543210
              </p>

              <p className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
                <MdEmail className="text-cyan-400 text-xl" />
                info@ghoswarihospital.com
              </p>

              <p className="flex items-center gap-3 hover:text-pink-400 transition duration-300 cursor-pointer">
                <FaInstagram className="text-pink-400" />
                @ghoswarihospital
              </p>

              <p className="flex items-center gap-3 hover:text-blue-400 transition duration-300 cursor-pointer">
                <FaTwitter className="text-blue-400" />
                @ghoswarihosp
              </p>

              <p className="flex items-center gap-3 hover:text-green-400 transition duration-300 cursor-pointer">
                <FaGlobe className="text-green-400" />
                www.ghoswarihospital.com
              </p>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div>
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-3 mb-5 flex items-center gap-2">
              <FaUserMd className="text-cyan-400" />
              Why Choose Us
            </h2>

            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li>✔ 24/7 Emergency Support</li>
              <li>✔ Expert Medical Team</li>
              <li>✔ Advanced Equipment</li>
              <li>✔ Easy Appointment Booking</li>
              <li>✔ Patient-Centered Care</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-cyan-500/10 mt-12 pt-6 text-center text-sm sm:text-base text-gray-400">
          © {new Date().getFullYear()} Ghoswari Hospital • Designed by Rambabu
          Kumar
        </div>
      </div>
    </footer>
  );
};

export default Footer;

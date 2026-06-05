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
        <div className="flex items-center gap-4">
          {/* LOGO ICON */}
          <div className="relative">
            {/* GLOW */}
            <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full"></div>

            {/* ICON */}
            <div className="relative lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#0f172a] via-cyan-700 to-cyan-400 flex justify-center items-center shadow-[0_0_40px_rgba(34,211,238,0.5)] border border-cyan-300/20">
              <svg
                viewBox="0 0 200 200"
                className="w-11 h-11"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* OUTER RING */}
                <circle
                  cx="100"
                  cy="100"
                  r="82"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  opacity="0.15"
                />

                {/* HEART */}
                <path
                  d="M100 145 
         C40 105, 35 60, 70 50
         C88 45, 100 60, 100 60
         C100 60, 112 45, 130 50
         C165 60, 160 105, 100 145"
                  fill="white"
                  opacity="0.95"
                />

                {/* SKM TEXT */}
                <text
                  x="100"
                  y="104"
                  textAnchor="middle"
                  fill="#06b6d4"
                  fontSize="28"
                  fontWeight="900"
                  fontFamily="Arial"
                  letterSpacing="3"
                >
                  SKM
                </text>

                {/* MEDICAL PLUS */}
                <rect
                  x="92"
                  y="25"
                  width="16"
                  height="45"
                  rx="4"
                  fill="white"
                />

                <rect
                  x="78"
                  y="39"
                  width="45"
                  height="16"
                  rx="4"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-xl lg:text-2xl text-lg font-black text-white tracking-wide">
              MULTI SPECIALITY
            </h1>

            <p className="text-[10px] uppercase tracking-[6px] text-cyan-300">
              HOSPITAL
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
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

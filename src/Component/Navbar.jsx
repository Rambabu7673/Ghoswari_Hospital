import React, { useState } from "react";
import logo from "../assets/logob.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* 🔥 Logo Section */}
        <div className="flex items-center gap-2">
          {/* ✅ Small SVG Logo */}
          <svg viewBox="0 0 60 60" className="h-15 w-15">
            <circle cx="30" cy="30" r="26" fill="#0ea5e9" />

            <rect x="26" y="18" width="8" height="24" fill="white" />
            <rect x="18" y="26" width="24" height="8" fill="white" />
          </svg>

          {/* Text */}
          <div className="leading-tight">
            <h1 className=" text-2xl lg:text-[20px] font-bold text-gray-900">
              Ghoswari
            </h1>
            <p className="lg:text-[15px] tracking-[3px] text-gray-500">
              HOSPITAL
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#Home">HOME</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#About">ABOUT</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#Services">SERVICES</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#Contact">CONTACT</a>
          </li>

          <li className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            91- 9895434240
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md p-5 space-y-4 text-gray-800">
          <p>
            <a href="#Home">HOME</a>
          </p>
          <p>
            <a href="#About">ABOUT</a>
          </p>
          <p>
            <a href="#Services">SERVICES</a>
          </p>
          <p>
            <a href="#Contact">CONTACT</a>
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

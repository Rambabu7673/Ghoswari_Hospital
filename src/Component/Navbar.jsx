import React, { useState } from "react";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import { FiPhoneCall } from "react-icons/fi";
import {Link }from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full z-50 px-4 lg:px-0 bg-[#050816] ">
        {/* MAIN CONTAINER */}
        <div className="w-full max-w-7xl  mx-auto overflow-hidden ">
          <div className="flex items-center justify-between px-5 lg:px-10 py-4 ">
            {/* ================= LOGO ================= */}

            <div className="flex items-center gap-4">
              {/* LOGO ICON */}
              <div className="relative">
                {/* GLOW */}
                <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full"></div>

                {/* ICON */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex justify-center items-center shadow-[0_0_30px_rgba(28,182,187,0.5)]">
                  <svg viewBox="0 0 60 60" className="w-8 h-8">
                    <circle cx="30" cy="30" r="26" fill="white" />

                    <rect x="26" y="18" width="8" height="24" fill="#1cb6bb" />

                    <rect x="18" y="26" width="24" height="8" fill="#1cb6bb" />
                  </svg>
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h1 className="text-xl lg:text-2xl font-black text-white tracking-wide">
                  Ghoswari
                </h1>

                <p className="text-[10px] uppercase tracking-[6px] text-cyan-300">
                  Hospital
                </p>
              </div>
            </div>

            {/* ================= DESKTOP MENU ================= */}

            <ul className="hidden lg:flex items-center gap-10">
              {["Home", "About", "Doctors", "Gallery", "Contact"].map(
                (item, idx) => (
                  <li key={idx} className="relative group">
                    {item === "Doctors" || item === "Gallery" ? (
                      <Link
                        to={item === "Doctors" ? "/doctors" : "/gallery"}
                        className="text-gray-300 hover:text-white font-medium transition-all duration-300"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href={item === "Home" ? "/#Home" : `/#${item}`}
                        className="text-gray-300 hover:text-white font-medium transition-all duration-300"
                      >
                        {item}
                      </a>
                    )}

                    {/* HOVER DOT */}
                    <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-[6px] rounded-full bg-cyan-400 group-hover:w-6 transition-all duration-300"></span>
                  </li>
                ),
              )}

              {/* CALL BUTTON */}
              <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(28,182,187,0.5)]">
                <a href="tel:+919835434240">
                  <span className="flex items-center gap-3">
                    <FiPhoneCall />
                    Enquire Now
                  </span>
                </a>
              </button>
            </ul>

            {/* ================= MOBILE BUTTON ================= */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white text-3xl"
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed top-0 right-0 w-[80%] h-screen bg-[#050816]/95 backdrop-blur-2xl border-l border-white/10 z-[60] transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div>
            <h1 className="text-2xl font-black text-white">Ghoswari</h1>

            <p className="text-[10px] tracking-[5px] uppercase text-cyan-300">
              Hospital
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-4xl"
          >
            <HiX />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-8 px-8 py-10">
          {["Home", "About", "Doctors", "Gallery", "Contact"].map(
            (item, idx) =>
              item === "Doctors" ? (
                <Link
                  key={idx}
                  to="/Doctors"
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-300 hover:text-cyan-400 font-semibold transition-all duration-300"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={item === "Home" ? "/#Home" : `/#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-300 hover:text-cyan-400 font-semibold transition-all duration-300"
                >
                  {item}
                </a>
              ),
          )}

          {/* BUTTON */}
          <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(28,182,187,0.5)]">
            <a href="tel:+919835434240">
              <span className="flex items-center gap-3">
                <FiPhoneCall />
                Enquire Now
              </span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

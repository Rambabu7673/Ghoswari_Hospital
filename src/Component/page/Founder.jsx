import React from "react";
import asset from "../../assets/raju.jpg";

const Founder = () => {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#030712]"
      id="About"
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div className="absolute inset-0">
        <img
          src={asset}
          alt="background"
          className="w-full h-full object-cover scale-110 blur-sm opacity-20 animate-slowZoom"
        />
      </div>

      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#030712]/90 to-[#030712]"></div>

      {/* ================= GLOW EFFECT ================= */}

      <div className="absolute top-10 left-10 w-[18rem] h-[18rem] bg-cyan-400/10 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-[18rem] h-[18rem] bg-blue-500/10 blur-[130px] rounded-full animate-pulse"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================= TOP HEADING ================= */}

        <div className="text-center mb-16 animate-fadeUp">
          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <p className="text-[10px] tracking-[5px] uppercase text-cyan-300 font-bold">
              About Founder
            </p>
          </div>

          {/* HEADING */}
          <h2 className="text-[35px] sm:text-[50px] lg:text-[70px] font-black text-white leading-tight">
            Meet The Visionary
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Behind Ghoswari Hospital
            </span>
          </h2>

          {/* TEXT */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-sm sm:text-base lg:text-lg leading-8">
            Delivering trusted healthcare with compassion, innovation, and
            excellence for every patient.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* ================= IMAGE ================= */}

          <div className="relative group animate-slideLeft">
            {/* IMAGE GLOW */}
            <div className="absolute -inset-4 bg-cyan-400/10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <img
                src={asset}
                alt="Founder Dr. Raju Kumar"
                className="w-full h-[24rem] sm:h-[30rem] lg:h-[42rem] object-cover group-hover:scale-105 transition-all duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              {/* NAME CARD */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5">
                  <h2 className="text-2xl lg:text-3xl font-black text-white">
                    Dr. Raju Kumar
                  </h2>

                  <p className="text-cyan-300 mt-1">Critical Care Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTENT CARD ================= */}

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] animate-slideRight">
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[12rem] h-[12rem] bg-cyan-400/10 blur-[100px] rounded-full z-99"></div>

            <div className="relative  space-y-6">
              <p className="text-gray-300 leading-8 text-sm sm:text-base lg:text-lg">
                Ghoswari Hospital is a trusted and rapidly growing healthcare
                center committed to delivering high-quality medical services
                with modern technology, skilled professionals, and a
                patient-first approach.
              </p>

              <p className="text-gray-300 leading-8 text-sm sm:text-base lg:text-lg">
                Founded by
                <span className="text-cyan-400 font-bold"> Dr. Raju Kumar</span>
                , a highly experienced Critical Care Specialist, the hospital
                continues to transform lives through compassionate and advanced
                healthcare.
              </p>

              <p className="text-gray-300 leading-8 text-sm sm:text-base lg:text-lg">
                With advanced infrastructure, emergency care, ICU support,
                diagnostics, and dedicated specialists, the hospital has become
                a symbol of trust and excellence in the region.
              </p>

              <p className="text-gray-300 leading-8 text-sm sm:text-base lg:text-lg">
                Our mission is to make healthcare accessible, affordable, and
                efficient for every patient while embracing digital innovation
                and modern treatment.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(28,182,187,0.35)]">
                  Explore Services
                </button>

                <button className="px-7 py-3 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EXTRA CARDS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {/* CARD 1 */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 animate-fadeUp">
            <div className="absolute top-0 right-0 w-[8rem] h-[8rem] bg-cyan-400/10 blur-[80px] rounded-full"></div>

            <h3 className="text-2xl font-black text-white mb-3">Our Mission</h3>

            <p className="text-gray-400 leading-7">
              Delivering affordable and quality healthcare services for everyone
              with compassion.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 animate-fadeUp">
            <div className="absolute top-0 right-0 w-[8rem] h-[8rem] bg-blue-400/10 blur-[80px] rounded-full"></div>

            <h3 className="text-2xl font-black text-white mb-3">Our Vision</h3>

            <p className="text-gray-400 leading-7">
              To become one of the most trusted and advanced healthcare
              institutions in India.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 animate-fadeUp">
            <div className="absolute top-0 right-0 w-[8rem] h-[8rem] bg-purple-400/10 blur-[80px] rounded-full"></div>

            <h3 className="text-2xl font-black text-white mb-3">
              Emergency Care
            </h3>

            <p className="text-gray-400 leading-7">
              Reliable emergency support and critical care services available
              whenever needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

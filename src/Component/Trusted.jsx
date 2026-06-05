import React from "react";
import trusted from "../assets/trusted.png";

const Trusted = () => {
  return (
    <div id="Product" className="w-full overflow-hidden bg-[#050816]">
      <div className="relative min-h-[85vh] lg:min-h-screen w-full flex items-center">
        {/* BACKGROUND IMAGE */}
        <img
          src={trusted}
          alt="Trusted Medical"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/80 to-black/40"></div>

        {/* GLOW EFFECT */}
        <div className="absolute top-10 left-5 w-[10rem] h-[10rem] lg:w-[18rem] lg:h-[18rem] bg-cyan-500/20 blur-[100px] rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full lg:w-1/2 px-5 sm:px-8 lg:px-20 py-10 lg:py-14">
          {/* TOP TAG */}
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-5 animate-fadeUp">
            <p className="text-[11px] sm:text-xs tracking-[3px] uppercase text-cyan-400 font-semibold">
              Trusted Healthcare
            </p>
          </div>

          {/* HEADING */}
          <h1 className="text-[32px] sm:text-[48px] lg:text-[65px] font-black tracking-wide leading-tight lg:leading-[4.5rem] text-white animate-slideLeft">
            Trusted{" "}
            <span className="text-[#1cb6bb]">
              Medical <br />
              Professionals
            </span>
            <br />
            Here For You
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 tracking-wide text-gray-300 animate-fadeUp">
            Your health and well-being are our highest priority. We provide
            compassionate care, advanced treatment, and personalized healthcare
            solutions for every patient.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-6 lg:leading-7 tracking-wide text-gray-400 animate-fadeUp delay-200">
            With modern medical technology and experienced specialists, we are
            committed to delivering exceptional healthcare services for you and
            your family.
          </p>

          {/* FEATURES */}
          <div className="mt-7 flex flex-wrap gap-3 animate-fadeUp delay-300">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-base">Advanced</h3>
              <p className="text-gray-400 text-xs">Healthcare Technology</p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-base">
                Compassionate
              </h3>
              <p className="text-gray-400 text-xs">Patient Care</p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-base">
                Personalized
              </h3>
              <p className="text-gray-400 text-xs">Treatment Solutions</p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="px-7 sm:px-9 py-3 rounded-2xl bg-[#1cb6bb] mt-8 text-sm sm:text-base font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(28,182,187,0.4)] animate-slideLeft">
            <a href="#Services">VIEW SERVICES</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trusted;

import React from "react";

const About = ({ features }) => {
 
  return (
    <section className='relative min-h-screen overflow-hidden bg-fixed bg-center bg-cover bg-[url("src/assets/image.png")]'>
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/80 via-black/70 to-[#050816]/95"></div>

      {/* GLOW EFFECT */}
      <div className="absolute top-20 left-10 w-[12rem] h-[12rem] lg:w-[25rem] lg:h-[25rem] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-5 py-20 lg:px-16">
        {/* TOP TAG */}
        <div className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 animate-fadeDown">
          <p className="text-xs sm:text-sm tracking-[4px] uppercase text-cyan-400 font-bold">
            Why Choose Us
          </p>
        </div>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-center text-white leading-tight animate-slideUp">
          Dedicated To Your
          <br />
          <span className="text-[#1cb6bb]">Health & Wellness</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 max-w-3xl text-center text-sm sm:text-lg lg:text-xl leading-7 lg:leading-10 text-gray-300 tracking-wide animate-fadeUp">
          We provide compassionate healthcare services with advanced medical
          technology, experienced specialists, and patient-centered care to
          ensure your comfort, recovery, and well-being.
        </p>

        {/* FEATURES */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl ">
          {features.map((elam, idx) => {
            const Icon = elam.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center text-white hover:scale-[1.02] hover:border-cyan-400/40 transition-all duration-500 shadow-xl animate-fadeUp "
              >
                {/* CARD GLOW */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* ICON */}
                <div className="relative flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-[0_0_30px_rgba(28,182,187,0.2)]">
                    <Icon className="text-[42px] text-[#1cb6bb]" />
                  </div>
                </div>

                {/* TITLE */}
                <h1 className="relative mt-6 text-2xl font-bold tracking-wide">
                  {elam.title}
                </h1>

                {/* DESC */}
                <p className="relative mt-4 text-gray-300 leading-7 text-sm sm:text-base">
                  {elam.desc}
                </p>

                {/* LINE */}
                <div className="w-0 h-[2px] bg-cyan-400 mx-auto mt-6 group-hover:w-24 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

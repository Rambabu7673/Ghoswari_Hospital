import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiChatCircleTextLight } from "react-icons/pi";

const Home = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden mt-20 bg-black"
      id="Home"
    >
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-110 animate-slowZoom"
      >
        <source src="/home.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#050816]/95"></div>

      {/* GLOW EFFECT */}
      <div className="absolute top-10 left-10 w-[12rem] h-[12rem] lg:w-[25rem] lg:h-[25rem] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

      {/* CONTENT */}
      <header className="relative z-10 flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-0 pb-10">
        <section className="flex flex-col items-center text-center max-w-5xl w-full">
          {/* BADGE */}
          <div className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 animate-fadeDown">
            <p className="text-xs sm:text-sm tracking-[4px] uppercase text-cyan-400 font-bold">
              COMMIT TO BE FIT
            </p>
          </div>

          {/* HEADING */}
          <h1 className="text-[32px] sm:text-[45px] md:text-[55px] lg:text-[75px] font-black leading-tight lg:leading-[5.5rem] text-white animate-slideUp">
            Bringing <span className="text-[#1cb6bb]">Quality Healthcare</span>
            <br />
            To You & Your Family
          </h1>

          {/* SUB TEXT */}
          <p className="mt-8 text-sm sm:text-lg lg:text-2xl leading-8 lg:leading-10 text-gray-300 max-w-4xl tracking-wide animate-fadeUp delay-200">
            Trusted care, advanced medical technology, and compassionate
            healthcare professionals dedicated to your wellness journey every
            step of the way.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fadeUp delay-300">
            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-lg">Modern Care</h3>

              <p className="text-gray-400 text-sm">
                Advanced Medical Solutions
              </p>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-lg">
                Wellness First
              </h3>

              <p className="text-gray-400 text-sm">Personalized Treatments</p>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-lg">Better Health</h3>

              <p className="text-gray-400 text-sm">Compassionate Support</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 mt-12 animate-slideUp delay-500">
            <button className="px-8 py-4 rounded-2xl bg-[#1cb6bb] text-black font-bold flex items-center justify-center gap-3 hover:gap-5 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(28,182,187,0.4)]">
              GET STARTED
              <CiLocationArrow1 className="text-2xl rotate-45" />
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </section>

        {/* CHAT BUTTON */}
        <div className="fixed bottom-6 right-4 sm:right-6 lg:right-10 z-50 animate-bounceSlow">
          <a
            href="https://wa.me/919835434240?text=Hello%20Ghoswari%20Hospital%20I%20need%20help"
            target="_blank"
            rel="noreferrer"
            className="h-14 px-8 rounded-full bg-[#1cb6bb] text-black flex items-center gap-3 shadow-[0_0_40px_rgba(28,182,187,0.5)] hover:scale-110 transition-all duration-300 font-bold"
          >
            <PiChatCircleTextLight className="text-2xl" />

            <span className="text-sm sm:text-base">Let's Chat</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;

import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiChatCircleTextLight } from "react-icons/pi";

const Home = () => {
  return (
    <div className="relative min-h-screen mt-21 overflow-hidden" id="Home">
      {/* 🎬 Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm scale-110"
      >
        <source src="/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <header className="relative flex  justify-center min-h-screen px-4 sm:px-6 lg:px-10 text-white">
        {/* Content */}
        <section className="flex flex-col items-center mt-[15%] lg:text-center  max-w-4xl w-full">
          {/* Badge */}
          <p className="bg-red-400 text-xs sm:text-sm font-semibold rounded px-4 py-1 mb-4">
            COMMIT TO BE FIT.
          </p>

          {/* 🔥 Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold leading-relaxed sm:leading-snug">
            <span className="text-blue-400">Bringing quality healthcare</span>{" "}
            to you and your family with trusted care, modern technology, and a
            commitment to your well-being every{" "}
            <span className="text-yellow-400">step of the way.</span>
          </h1>

          {/* Buttons */}
          <div className="flex  sm:flex-row gap-4 mt-10">
            <button className="px-5 py-2 rounded bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
              GET STARTED
              <CiLocationArrow1 className="text-xl rotate-45" />
            </button>

            <button className="px-5 py-2 font-semibold border border-white rounded text-white hover:bg-white hover:text-black transition">
              LEARN MORE
            </button>
          </div>
        </section>

        {/* 💬 Chat Button */}
        <div className="fixed bottom-10 right-4 sm:right-6 lg:right-10 z-50">
          <div className="h-12  px-10 rounded-full cursor-pointer bg-[#1cb6bb] text-white flex items-center gap-2 shadow-lg hover:scale-105 transition">
            <PiChatCircleTextLight className="text-lg" />
            <span className="text-lg">
              <a
                href="https://wa.me/919835434240?text=Hello%20Ghoswari%20Hospital%20I%20need%20help"
                target="_blank"
              >
                Let's Chat
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;

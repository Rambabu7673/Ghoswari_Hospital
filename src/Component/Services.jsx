import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewDisplay from "./page/ViewDisplay";

const Services = ({ latestProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(latestProduct?.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const startIndex = currentIndex * cardsPerSlide;

  const visibleCards = latestProduct?.slice(
    startIndex,
    startIndex + cardsPerSlide,
  );

  return (
    <>
      <section className="relative w-full min-h-screen bg-[#030712] text-white overflow-hidden py-16" id="Services">
        {/* ================= GLOW EFFECTS ================= */}

        <div className="absolute top-0 left-0 w-[18rem] h-[18rem] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-blue-500/10 blur-[130px] rounded-full"></div>

        {/* ================= HEADING ================= */}

        <div className="relative text-center px-4 z-10">
          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <p className="text-[10px] tracking-[5px] uppercase text-cyan-300 font-bold">
              Medical Services
            </p>
          </div>

          {/* HEADING */}
          <h1 className="text-[35px] sm:text-[50px] lg:text-[65px] font-black leading-tight">
            Latest Medical
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          {/* TEXT */}
          <p className="text-sm sm:text-base lg:text-lg mt-6 max-w-3xl mx-auto tracking-wide text-gray-400 leading-8">
            Advanced healthcare solutions designed to provide compassionate
            treatment, expert consultation, and modern medical support for every
            patient.
          </p>
        </div>

        {/* ================= MOBILE SLIDER ================= */}

        <div className="relative block md:hidden w-full px-4 mt-12 z-10">
          <div className="overflow-hidden rounded-[2rem]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {latestProduct?.map((elam, idx) => (
                <div key={idx} className="min-w-full">
                  <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                    {/* GLOW */}
                    <div className="absolute top-0 right-0 w-[10rem] h-[10rem] bg-cyan-400/10 blur-[90px] rounded-full"></div>

                    {/* IMAGE */}
                    <div className="w-full h-[240px] overflow-hidden">
                      <img
                        src={elam.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="relative p-5 flex flex-col gap-4">
                      <h1 className="text-2xl font-black text-cyan-400">
                        {elam.title}
                      </h1>

                      <h2 className="text-xl font-semibold text-white">
                        {elam.product}
                      </h2>

                      <p className="text-sm leading-7 text-gray-300">
                        {elam.description}
                      </p>

                      <p className="text-sm leading-7 text-gray-400">
                        Experience modern healthcare with trusted specialists
                        and advanced treatment solutions.
                      </p>

                      {/* BUTTON */}
                      <button
                        className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 to-cyan-600 py-3 rounded-xl text-black font-bold shadow-[0_0_30px_rgba(28,182,187,0.35)] hover:scale-105 transition-all duration-300"
                        onClick={() => setShowForm(true)}
                      >
                        {/* SHINE */}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] skew-x-12 transition-all duration-1000"></div>

                        <span className="relative">Registration Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= DOTS ================= */}

          <div className="flex justify-center items-center gap-3 mt-8 mb-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${
                  currentIndex === index ? "bg-cyan-400 w-8" : "bg-gray-500 w-2"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}

        <div className="relative hidden md:flex flex-wrap gap-6 p-5 justify-center mt-10 z-10">
          {visibleCards?.map((elam, idx) => (
            <div
              key={idx}
              className="group relative w-[48%] flex flex-col lg:flex-row rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-[12rem] h-[12rem] bg-cyan-400/10 blur-[100px] rounded-full"></div>

              {/* ================= CONTENT ================= */}

              <div className="relative w-full flex flex-col gap-4 justify-center p-6 lg:p-8">
                <h1 className="text-3xl font-black text-cyan-400">
                  {elam.title}
                </h1>

                <h2 className="text-2xl font-semibold text-white">
                  {elam.product}
                </h2>

                <p className="text-base leading-7 text-gray-300">
                  {elam.description}
                </p>

                <p className="text-gray-400 leading-7">
                  Providing personalized healthcare services, modern treatment
                  facilities, and compassionate patient care for every
                  individual.
                </p>

                {/* BUTTON */}
                <button
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 to-cyan-600 py-3 px-8 rounded-xl text-black font-bold shadow-[0_0_30px_rgba(28,182,187,0.35)] hover:scale-105 transition-all duration-300 w-fit cursor-pointer"
                  onClick={() => setShowForm(true)}
                >
                  {/* SHINE */}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] skew-x-12 transition-all duration-1000"></div>

                  <span className="relative">Registration Now</span>
                </button>
              </div>

              {/* ================= IMAGE ================= */}

              <div className="w-full overflow-hidden">
                <img
                  src={elam.image}
                  alt=""
                  className="w-full h-[24rem] object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= FORM SHOW ================= */}

      {showForm && (
        <div className="fixed inset-0  z-50 flex justify-center items-center p-4 overflow-y-auto">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute lg:top-5 top-6 right-4  lg:right-10 lg:text-white z-99 text-red-500 font-bold text-5xl cursor-pointer"
          >
            ×
          </button>

          {/* FORM */}
          <ViewDisplay />
        </div>
      )}
    </>
  );
};

export default Services;

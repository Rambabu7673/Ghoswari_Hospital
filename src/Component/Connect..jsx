import React from "react";
import assets from "../assets/healthcare-providers.webp";
import { FiPhoneCall } from "react-icons/fi";

const Connect = () => {
  return (
    <section className="w-full min-h-screen bg-[#050816] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center" id="Connect">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-20 py-14 lg:py-24 text-white relative z-10">
          {/* SMALL TAG */}
          <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8 animate-fadeUp">
            <p className="text-sm tracking-[4px] uppercase text-cyan-400 font-semibold">
              24/7 Emergency Care
            </p>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight lg:leading-[5.5rem] tracking-wide animate-slideLeft">
            Your Health,
            <br />
            <span className="text-[#1cb6bb]">Our Greatest</span>
            <br />
            Priority
          </h1>

          {/* PARAGRAPH */}
          <p className="mt-8 text-sm sm:text-base lg:text-lg leading-8 text-gray-300 tracking-wide animate-fadeUp delay-200">
            We provide compassionate, patient-focused healthcare with advanced
            medical technology and experienced specialists. From preventive
            checkups to critical emergency care, our mission is to ensure every
            patient receives safe, reliable, and world-class treatment.
          </p>

          <p className="mt-6 text-sm sm:text-base lg:text-lg leading-8 text-gray-400 tracking-wide animate-fadeUp delay-300">
            Our dedicated healthcare team is available around the clock to
            guide, support, and care for you and your family. We believe healing
            begins with trust, comfort, and personalized medical attention.
          </p>

          {/* FEATURES */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fadeUp delay-500">
            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-lg">500+</h3>
              <p className="text-gray-400 text-sm">Successful Treatments</p>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-lg">24/7</h3>
              <p className="text-gray-400 text-sm">Emergency Support</p>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-lg">Expert</h3>
              <p className="text-gray-400 text-sm">Medical Specialists</p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-12 px-8 py-4 rounded-2xl bg-[#1cb6bb] text-black font-bold text-sm sm:text-base flex items-center gap-4 hover:gap-6 hover:bg-cyan-400 transition-all duration-500 shadow-[0_0_40px_rgba(28,182,187,0.4)] cursor-pointer animate-slideLeft">
            Call Emergency
            <FiPhoneCall className="text-xl" />
          </button>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center p-6 lg:p-10">
          {/* GLOW EFFECT */}
          <div className="absolute w-[18rem] h-[18rem] lg:w-[30rem] lg:h-[30rem] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

          {/* IMAGE CARD */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl animate-slideRight">
            <img
              src={assets}
              alt="Healthcare Providers"
              className="w-full h-[24rem] sm:h-[30rem] lg:h-[45rem] object-cover hover:scale-110 transition-all duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <h2 className="text-white text-xl font-bold">
                Advanced Healthcare Solutions
              </h2>

              <p className="text-gray-300 text-sm mt-2 leading-6">
                Trusted by thousands of patients for compassionate medical care
                and innovative treatment services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

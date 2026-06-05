import React from "react";
import picture from "../assets/medical package.avif";

const Medical_Packege = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden">
      {/* HEADING */}
      <div className="flex justify-center items-center px-4 pt-10">
        <div className="w-full lg:w-[40rem] border border-zinc-700 p-6 lg:p-10 text-center rounded-2xl animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-wide leading-tight">
            Medical <span className="text-[#1cb6bb]">Packages</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-7 lg:leading-8 tracking-wide font-semibold mt-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4 py-10 lg:p-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-2 lg:p-10 animate-slideLeft">
          <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-bold tracking-wide leading-tight">
            <span className="text-[#1cb6bb]">Executive Check-Up</span>
            <br />
            Corporate
          </h1>

          <ul className="list-disc pl-5 space-y-4 text-gray-300 mt-8 lg:mt-10 leading-7 tracking-wide text-sm sm:text-base lg:text-lg">
            <li>Integer sit amet dolor nec libero consectetur placerat</li>
            <li>Vestibulum ante ipsum primis in</li>
            <li>Faucibus orci luctus et ultrices posuere cubilia Curae</li>
          </ul>

          <button className="px-8 lg:px-10 py-3 bg-[#1cb6bb] rounded-full text-sm lg:text-md font-semibold text-white mt-8 hover:scale-105 hover:bg-cyan-500 transition-all duration-300 cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 animate-slideRight">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-700">
            <img
              src={picture}
              alt="Medical Package"
              className="w-full h-[18rem] sm:h-[22rem] lg:h-[32rem] object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical_Packege;

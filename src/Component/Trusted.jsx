import React from 'react'
import trustedGirl from "../assets/trusted.png";

const Trusted = () => {
  return (
    <div className="  "  id="Product">
      <div className="  relative min-h-screen  lg:h-[45rem] w-full">
        <img
          src={trustedGirl}
          alt=""
          className="w-full lg:h-[40rem]  min-h-screen   bg-cover bg-no-repeat"
        />
        <div className="absolute top-30 lg:top-3  lg:left-44  w-full  lg:w-1/2   p-5 lg:p-24 ">
          <h1 className=" lg:text-[70px] text-[40px] font-bold tracking-wide lg:leading-19 text-gray-100 md:text-[80px] ">
            Trusted{" "}
            <span className="  text-[#1cb6bb]  font-bold">
              {" "}
              Medical <br /> Professionals{" "}
            </span>
            Here for you
          </h1>
          <p className="mt-10 text-xl lg:tracking-wide font-sans ">
            Your Health is Our Mission – Committed to Your Wellness Journey with
            Cutting-Edge Healthcare Solutions, Providing Comprehensive and
            Holistic Care for All Your Medical Needs.
          </p>
          <button className="px-10 p-2 lg:p-10 lg:py-2 md:p-15 md:py-3 md:text-lg rounded-full bg-[#1cb6bb] mt-10">
            <a href="#Product"> VIEW SERVICES</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trusted

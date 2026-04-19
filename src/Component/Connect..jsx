import React from 'react'
import assets from "../assets/healthcare-providers.webp";
import { FiPhoneCall } from "react-icons/fi";

const Connect = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <div className="lg:flex ">
        <div className=" lg:h-50 min-h-screen w-full bg-black  text-white p-10 lg:p-20  ">
          <h1 className=" text-[40px] lg:text-[70px] font-bold tracking-wide lg:leading-20   ">
            <span className="text-[#1cb6bb]">We Will help you</span> with your
            medical Concerns
          </h1>
          <p className="text-lg leading-8 mt-10 tracking-wide ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis
            impedit fugit corporis cumque autem maiores molestias dolor iure
            voluptates Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores quibusdam ab, recusandae deleniti numquam impedit maxime ea
            doloribus eveniet exercitationem!
          </p>
          <button className="px-7 py-3 bg-[#1cb6bb] rounded-2xl cursor-pointer text-lg font-semibold mt-10 flex justify-around gap-5 items-center">
            91-9835434240
            <FiPhoneCall className="text-lg font-bold text-green-700" />
          </button>
        </div>
        <div className=" lg:h-screen w-full bg-amber-500 ">
          <img src={assets} alt="" className="lg:h-screen w-full" />
        </div>
      </div>
    </div>
  );
}

export default Connect;

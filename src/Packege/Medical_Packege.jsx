import React from 'react'
import picture from "../assets/medical package.avif";

const Medical_Packege = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className=" flex justify-center items-center ">
        <div className="lg:w-[40rem] border p-10 text-center  ">
          <h1 className="lg:text-[40px] font-bold text-white tracking-wide">
            Medical <span className="text-[#1cb6bb]">Packages</span>
          </h1>
          <p className="text-lg text-white leading-8 tracking-wide font-semibold mt-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </p>
        </div>
      </div>
      <div className=" lg:flex justify-center gap-3 items-center lg:p-10 ">
        <div className="lg:w-1/2 h-[30rem]  p-10">
          <h1 className="text-3xl lg:text-[40px] font-bold text-white tracking-wide">
            <span className="text-[#1cb6bb]">Executive Check-Up</span> <br />{" "}
            Corporate
          </h1>

          <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-10 leading-10 tracking-wide text-lg">
            <li>Integer sit amet dolor nec libero consectetur placerat</li>
            <li>Vestibulum ante ipsum primis in</li>
            <li>Faucibus orci luctus et ultrices posuere cubilia Curae</li>
          </ul>
          <button className="px-10 py-2  bg-[#1cb6bb] rounded-full text-md font-semibold text-white ml-10 mt-10 ">
            Contact Us{" "}
          </button>
        </div>
        <div className=" lg:w-1/2 lg:h-[30rem] border bg-red-800">
          <img
            src={picture}
            alt="..."
            className="h-[20rem] lg:h-[30rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Medical_Packege


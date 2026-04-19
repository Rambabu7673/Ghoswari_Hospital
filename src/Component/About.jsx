import React from "react";
import assets from "../assets/image.png";

const About = ({ features }) => {
  console.log(features);

  return (
    <>
      <div className='min-h-screen lg:h-[90%]  relative  bg-fixed bg-[url("src/assets/image.png")]'  >
        <div className="absolute inset-0  bg-gradient-to-r from-black/40 to-black/70">
          {" "}
        </div>
        <div className="flex pt-40 justify-center sticky top-[50%] gap-10  tracking-normal  items-center flex-wrap p-16">
          {features.map((elam, idx) => {
            const Icon = elam.icon;
            return (
              <div
                className=" lg:z-50 static top-10 text-white w-full   max-w-80  sm:w-[45%] lg:w-[25%]  p-4 flex flex-col justify-center gap-1 items-center rounded text-center"
                key={idx}
              >
                <Icon className="text-[45px] text-[#1cb6bb] " />
                <h1 className="text-2xl font-semibold  ">{elam.title}</h1>
                <h2>{elam.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;

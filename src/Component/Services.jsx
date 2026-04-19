import React from 'react'
import assets1 from "../assets/right.png";
import assets2 from "../assets/button.png";
import Product from './Product';


const Services = ({ mainContent, latestProduct }) => {
  return (
    <>
      <div className="min-h-screen w-full"  id="Services">
        <div className="lg:flex justify-center items-center    lg:p-16 ">
          {/* Left */}
          <div className="w-full lg:max-w-[50rem]  lg:h-[45rem] text-black p-5   ">
            <div className=" ">
              <h1 className="text-[40px] lg:text-[70px] font-bold">
                <span className="text-[#1cb6bb]">Expert care</span> for <br />{" "}
                All Ages
              </h1>
              <p className="text-lg mt-4 leading-8 tracking-wide ">
                Empowering You with Top-Notch Healthcare <br /> services to Live
                a Healthier, Happier Life.
              </p>
            </div>
            <div className="    items-center gap-2 mt-5">
              {mainContent.map((item, idx) => {
                return (
                  <>
                    {/* Left */}
                    <div
                      key={idx}
                      className="flex justify-start  items-center  gap-5 mt-10   "
                    >
                      <div className="  h-20 w-32 border-2 border-black lg:border-none  rounded-full lg:h-20 lg:w-20   rounded-full flex justify-center items-center ">
                        <img
                          src={item.image}
                          alt=""
                          className=" h-20 w-30  lg:h-20 lg:w-20 rounded-full bg-cover bg-center"
                        />
                      </div>

                      <div className="  flex flex-col justify-start  gap-2 p-4">
                        <h1 className="text-xl font-semibold">{item.title}</h1>
                        <p className="text-gray-400 text-lg font-normal">
                          {item.description}
                        </p>
                        
                        <button className="px-7 py-2    m-auto text-[15px] lg:text-lg text-white bg-[#1cb6bb] rounded-full  ">
                          {item.btnBy}
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* Right */}
          <div className="w-full max-w-[50rem]  lg:h-[45rem]   text-white ">
            <div>
              <img
                src={assets1}
                className="h-[30rem] lg:h-[45rem] w-full"
                alt=""
              />
            </div>
            {/* Botton section */}
          </div>
        </div>


        {/* Part 2 */}
        <div className=" bg-gray-200   lg:flex lg:justify-center lg:p-16 gap-10 ">
          <div className=" w-full lg:max-w-[50rem]  lg:h-[40rem]  text-4xl text-white ">
            <img
              src={assets2}
              className="h-[30rem] lg:h-[40rem] w-full  max-w-[50rem]"
              alt=""
            />
          </div>
          <div className=" w-full lg:max-w-[50rem]  lg:h-[40rem]  bg-[#1cb6bb]  text-black p-10 ">
            <div>
              <h1 className="text-[40px] lg:text-[65px] font-bold">
                Reach us Anywhere with our{" "}
                <span className="text-white">Online Consultation</span>
              </h1>
              <p className="text-2xl mt-10 leading-10 tracking-wide ">
                Providing Comprehensive Healthcare Solutions for Every Stage of
                Your Life, Ensuring You and Your Family Receive the Best
                Possible Medical Attention and Care.
              </p>
              <button className="px-5 py-3 text-white bg-black rounded-full text-lg font-semibold mt-10 m-auto p-10 text-sm lg:text-md">
                BOOK CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
      <Product latestProduct={latestProduct} />
    </>
  );
};

export default Services

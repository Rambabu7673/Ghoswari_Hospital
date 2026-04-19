import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className=" lg:h-screen min-h-screen w-full bg-gray-700" id="Contact">
      {/* MAIN CONTAINER */}
      <h1 className="text-[50px] font-bold text-center text-white ">
        Contact <span className="text-green-600 tracking-wider "> Us !</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 p-5 lg:p-5 mt-10">
        {/* LEFT SECTION (FORM + INFO) */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row">
          {/* FORM */}
          <form className="bg-white p-5 w-full md:w-1/2 lg:h-[30rem]">
            <h1 className="text-3xl font-bold text-black text-center">
              Get In Touch
            </h1>

            {[
              "Enter Your Name",
              "Enter Your Email",
              "Enter your Phone Number",
              "Enter your Location",
            ].map((label, index) => (
              <div
                key={index}
                className="flex flex-col w-full mt-7 shadow-lg  "
              >
                <label className="text-sm font-semibold">{label}:</label>
                <input
                  type="text"
                  placeholder={label}
                  required={true}
                  className="py-1 text-black border-b-2 border-r border-l p-3 shadow-lg mt-2 border-gray-400 outline-none focus:border-teal-400 focus:border-shadow-2xl font-semibold"
                />
              </div>
            ))}

            <div className="flex justify-center items-center mt-4">
              <button className="px-10 py-2  rounded bg-[#1cb6bb]  text-white ">
                Submit
              </button>
            </div>
          </form>

          {/* RIGHT INFO BOX */}
          <div className="bg-[#1cb6bb] text-white w-full md:w-1/2 flex justify-center  p-5">
            <div>
              <h1 className="text-3xl font-bold text-center">Let's chat</h1>

              <div className=" space-y-4 mt-30">
                <div className="flex items-center gap-3 font-semibold">
                  <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black">
                    <IoLocationOutline />
                  </div>
                  Patna Bihar 803306
                </div>

                <div className="flex items-center gap-3 mt-5 text-lg font-semibold">
                  <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center">
                    <FaPhone />
                  </div>
                  91- 9835434240
                </div>

                <div className="flex items-center gap-3 mt-5 text-lg font-semibold">
                  <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center">
                    <MdEmail className="text-[20px] text-white" />
                  </div>
                  rajukumarsingh01008@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (MAP) */}
        <div className="w-full lg:w-1/2 h-[30rem] bg-red-600">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13707.881904957025!2d85.88392525053813!3d25.359224341708575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f26ccb30267a8b%3A0x1f587feebea389d6!2sGhoswari%2C%20Bihar%20803302!5e1!3m2!1sen!2sin!4v1776171641028!5m2!1sen!2sin"
            className="w-full h-[30rem] lg:h-[30rem] sm:h-[300px] md:h-[400px]   shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";

import { FaPhone } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import { FiSend } from "react-icons/fi";

import { api } from "../../api/contactApi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: "",
    allType: "",
  });

  const [msg, setMsg] = useState("");

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/contact", formData);

      console.log(response.data);

      setMsg("Appointment Booked Successfully ✅");

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        date: "",
        allType: "",
      });
    } catch (error) {
      console.error(error);

      setMsg(error.response?.data?.message || "Something went wrong ❌");
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-[#030712] overflow-hidden py-16 px-4 lg:px-10"
      id="Contact"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-0 left-0 w-[18rem] h-[18rem] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-blue-500/10 blur-[130px] rounded-full"></div>

      {/* ================= TOP ================= */}

      <div className="relative text-center z-10">
        {/* TAG */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

          <p className="text-[10px] tracking-[4px] uppercase text-cyan-300 font-bold">
            Contact Us
          </p>
        </div>

        {/* HEADING */}
        <h1 className="text-[32px] sm:text-[45px] lg:text-[60px] font-black text-white leading-tight">
          Book Your
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
            Appointment
          </span>
        </h1>
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 z-10">
        {/* ================= FORM ================= */}

        <div className="relative overflow-hidden rounded border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.4)]">
          {/* FORM GLOW */}
          <div className="absolute -top-10 -right-10 w-[12rem] h-[12rem] bg-cyan-400/10 blur-[100px] rounded-full"></div>

          {/* MESSAGE */}
          {msg && (
            <div className="mx-6 mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-center text-cyan-300 text-sm font-semibold">
              {msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative p-5 sm:p-6 lg:p-7">
            {/* TITLE */}
            <div className="mb-6">
              <h1 className="text-2xl lg:text-3xl font-black text-white">
                Get In Touch
              </h1>

              <p className="text-gray-400 mt-2 text-sm leading-6">
                Fill your details and our team will contact you shortly.
              </p>
            </div>

            {/* INPUTS */}
            <div className="space-y-4">
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-300">Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-300">Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-300">Phone Number</label>

                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="text-sm text-gray-300">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>

              {/* DEPARTMENT */}
              <div>
                <label className="text-sm text-gray-300">
                  Select Department
                </label>

                <select
                  name="allType"
                  value={formData.allType}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white outline-none focus:border-cyan-400 transition-all duration-300"
                >
                  <option value="">Choose Department</option>

                  <option value="Cardiology">Cardiology</option>

                  <option value="Neurology">Neurology</option>

                  <option value="Orthopedic">Orthopedic</option>

                  <option value="Dental Care">Dental Care</option>

                  <option value="Emergency">Emergency</option>

                  <option value="General Surgery">General Surgery</option>

                  <option value="Child Care">Child Care</option>
                </select>
              </div>
            </div>

            {/* BUTTON */}
            <button className="group relative overflow-hidden w-full mt-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold text-base shadow-[0_0_30px_rgba(28,182,187,0.35)] hover:scale-[1.01] transition-all duration-300">
              {/* SHINE */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] skew-x-12 transition-all duration-1000"></div>

              <span className="relative flex items-center justify-center gap-2">
                <FiSend />
                Submit Appointment
              </span>
            </button>
          </form>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex flex-col gap-6">
          {/* INFO CARD */}
          <div className="relative overflow-hidden rounded border border-white/10 bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 lg:p-7 shadow-[0_10px_50px_rgba(0,0,0,0.4)]">
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[10rem] h-[10rem] bg-white/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-black text-white">
                Contact Info
              </h1>

              {/* INFO */}
              <div className="mt-8 space-y-6">
                {/* LOCATION */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/20 backdrop-blur-xl flex justify-center items-center text-2xl text-white">
                    <IoLocationOutline />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-white">Location</h3>

                    <p className="text-white/80 text-sm">Patna Bihar 803306</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/20 backdrop-blur-xl flex justify-center items-center text-2xl text-white">
                    <FaPhone />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-white">Call Us</h3>

                    <p className="text-white/80 text-sm">+91 9835434240</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/20 backdrop-blur-xl flex justify-center items-center text-2xl text-white">
                    <MdEmail />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-white">Email</h3>

                    <p className="text-white/80 text-sm break-all">
                      rajukumarsingh01008@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="relative overflow-hidden rounded border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.4)]">
            {/* MAP LABEL */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded bg-[#050816]/80 backdrop-blur-xl border border-white/10 text-white">
              <h3 className="font-bold text-sm">Ghoswari Hospital</h3>

              <p className="text-xs text-gray-300">Bihar, India</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13708.294286756613!2d85.87070438715823!3d25.355587399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f26d42066e2d6d%3A0xb315a6f097bf11f7!2sGhoswari%20emergency%20hospital!5e1!3m2!1sen!2sin!4v1780387855599!5m2!1sen!2sin"
              width="750"
              height="450"
              
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

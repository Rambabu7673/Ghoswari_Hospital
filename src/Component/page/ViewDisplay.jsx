import React, { useState } from "react";
import {response} from '../../../api/visitApi.js';

const ViewDisplay = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    date: "",
  });

  const [msg, setMsg] = useState("");

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Phone Validation
    if (name === "phoneNumber") {
      // only numbers allow
      value = value.replace(/\D/g, "");

      // max 10 digits
      if (value.length > 10) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ================= HANDLE SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // phone validation
    if (formData.phoneNumber.length !== 10) {
      setMsg("Phone number must be 10 digits");

      return;
    }
     const emailRegex = /^[a-z][^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailRegex.test(formData.email)) {
       setMsg("Please enter a valid email");
       return;
     }

    try {
      const res = await response.post("/api/visite", {
        ...formData
      });

      console.log(res.data);

      setMsg("Your Booking has been successfully we are my team will contact you ✅");

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        date: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      setMsg("An error occurred while submitting the form ❌");
    }
  };

  return (
    <div className="min-h-screen lg:h-[30rem] w-full lg:max-w-3xl  flex justify-center items-center lg:p-5" id="Services">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:max-w-5xl bg-white backdrop-blur-2xl border border-white/10 rounded lg:p-8 p-4 shadow-[0_10px_50px_rgba(0,0,0,0.4)]"
      >
        <h1 className="lg:text-4xl text-2xl font-black text-[#030712]/40 text-center">
          Book Appointment
        </h1>

        {/* MESSAGE */}
        {msg && <p className="text-center text-cyan-400 mt-5">{msg}</p>}

        {/* INPUTS */}
        <div className="space-y-5 mt-8">
          {/* NAME */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
            className="w-full px-5 lg:py-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white outline-none focus:border-cyan-400"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
            className="w-full px-5 lg:py-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white outline-none focus:border-cyan-400"
          />

          {/* PHONE */}
          <div>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
              className="w-full px-5 lg:py-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white outline-none focus:border-cyan-400"
            />

            {/* ERROR */}
            {formData.phoneNumber.length > 0 && formData.phoneNumber.length < 10 && (
              <p className="text-red-400 text-sm mt-2">
                Phone number must be 10 digits
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            required
            rows="4"
            className="w-full px-5 lg:py-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white outline-none focus:border-cyan-400 resize-none"
          ></textarea>

          {/* DATE */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-5 lg:py-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white outline-none focus:border-cyan-400"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={formData.phoneNumber.length !== 10}
          className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-600 text-black font-bold text-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 cursor-pointer focus:bg-green-500 active:scale-95 shadow-[0_0_30px_rgba(28,182,187,0.35)]"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default ViewDisplay;

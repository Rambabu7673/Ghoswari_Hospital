import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
import api from "../../api/axios.js";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  // Password Strength Checker
  const checkPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const mediumRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strongRegex.test(password)) {
      return "Strong";
    } else if (mediumRegex.test(password)) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setMsg("कृपया सही ईमेल दर्ज करें");
      return;
    }

    if (passwordStrength === "Weak") {
      setMsg("पासवर्ड मज़बूत नहीं है");
      return;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setMsg("फ़ोन नंबर 10 अंकों का होना चाहिए");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const res = await api.post("/user/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMsg("रजिस्ट्रेशन सफल 🎉");

      setFormData({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setMsg(error.response?.data?.message || "कुछ गड़बड़ हो गई");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-cyan-500 p-5 rounded-full shadow-lg shadow-cyan-500/50">
            <FaHospital className="text-white text-5xl" />
          </div>
          <h1 className="text-3xl font-bold text-white mt-4">
            Ghoswari Hospital
          </h1>
          <p className="text-gray-300 mt-2 text-sm">Create Your Account</p>
        </div>

        {/* Message */}
        {msg && (
          <div className="mb-5 text-center bg-cyan-500/20 border border-cyan-400 text-cyan-300 py-3 rounded-xl">
            {msg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={loading}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-300 text-sm">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              disabled={loading}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              disabled={loading}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
            {/* Password Strength Indicator */}
            {formData.password && (
              <p
                className={`mt-2 text-sm ${
                  passwordStrength === "Strong"
                    ? "text-green-400"
                    : passwordStrength === "Medium"
                      ? "text-yellow-400"
                      : "text-red-400"
                }`}
              >
                Strength: {passwordStrength}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/30"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-cyan-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

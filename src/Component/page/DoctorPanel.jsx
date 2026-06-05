import React, { useEffect } from "react";
import { doctors } from "../../../assets/assets.js";
import { useState } from "react";
import { adminApi } from "../../../api/adminAxios";
import { MdCurrencyRupee } from "react-icons/md";
import ViewDisplay from "./ViewDisplay.jsx";

const DoctorPanel = () => {
  const [detail, setDetail] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading,setLoading] = useState(false);

  const getAllData = async () => {
    try {
      setLoading(true);
      const res = await adminApi.get("/admin/doctors");
       if (res.data.success) {
         setDetail(res.data.doctors || []);
       }
       setLoading(false);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
    )
  }
  return (
    <section className="min-h-screen w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-10 ">
      {/* HEADING */}
      <div className="text-center mb-16 mt-30">
        <p className="text-cyan-400 tracking-[5px] uppercase text-sm font-semibold">
          Our Medical Experts
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4">
          Meet Our
          <span className="text-cyan-400"> Doctors</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-sm sm:text-base">
          Our experienced medical professionals are committed to providing
          compassionate care, advanced treatment, and personalized healthcare
          solutions for every patient.
        </p>
      </div>

      {/* CARD SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {detail?.map((doctor, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[10rem] h-[10rem] bg-cyan-400/10 blur-[90px] rounded-full"></div>

            {/* IMAGE */}
            <div className="overflow-hidden h-[200px]">
              <img
                src={doctor.image}
                alt={doctor.doctorName}
                loading="lazy"
                className="w-full h-full object-cover p-3 rounded srink-0"
              />
            </div>

            {/* CONTENT */}
            <div className="relative p-6">
              {/* DEPARTMENT */}
              <p className="text-cyan-400 text-sm tracking-[3px] uppercase font-semibold">
                {doctor.department}
              </p>

              {/* NAME */}
              <h2 className="text-2xl font-bold mt-3">{doctor.doctorName}</h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-7 mt-4">
                {doctor.decription}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => setSelectedDoctor(doctor)}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 overflow-y-auto">
          <button
            onClick={() => setSelectedDoctor(null)}
            className="absolute top-5 right-5 text-white text-5xl font-bold cursor-pointer"
          >
            ×
          </button>

          <ViewDisplay doctor={selectedDoctor} />
        </div>
      )}
    </section>
  );
};

export default DoctorPanel;

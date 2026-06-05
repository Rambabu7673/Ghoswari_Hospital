import React, { useEffect, useState } from "react";
import { adminApi } from "../../../api/adminAxios";

const AdminPanle = () => {
  const [form, setForm] = useState({
    doctorName: "",
    department: "",
    decription: "",
    experience: "",
    fee: "",
    image: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [msg, setMsg] = useState("");
  const [editId, setEditId] = useState(null);

  // Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get All Doctors
  const getDoctors = async () => {
    try {
      const res = await adminApi.get("/admin/doctors");

      if (res.data.success) {
        setDoctors(res.data.doctors || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.doctorName ||
      !form.department ||
      !form.decription ||
      !form.experience ||
      !form.fee ||
      !form.image
    ) {
      setMsg("Please fill all fields");
      return;
    }

    try {
      let res;

      // Update
      if (editId) {
        res = await adminApi.put(`/admin/update-doctor/${editId}`, form);
      } else {
        // Add
        res = await adminApi.post("/admin/add-doctor", form);
      }

      if (res.data.success) {
        setMsg(
          editId ? "Doctor Updated Successfully" : "Doctor Added Successfully",
        );

        getDoctors();

        // Reset Form
        setForm({
          doctorName: "",
          department: "",
          decription: "",
          experience: "",
          fee: "",
          image: "",
        });

        setEditId(null);
      }
    } catch (error) {
      console.log(error.response?.data || error);

      setMsg(error.response?.data?.message || "Something went wrong");
    }
  };

  // Delete Doctor
  const deleteDoctor = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) return;

    try {
      const res = await adminApi.delete(`/admin/delete-doctor/${id}`);

      if (res.data.success) {
        setMsg("Doctor Deleted Successfully");
        getDoctors();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Doctor
  const editDoctor = (doctor) => {
    setEditId(doctor._id);

    setForm({
      doctorName: doctor.doctorName || "",
      department: doctor.department || "",
      decription: doctor.decription || "",
      experience: doctor.experience || "",
      fee: doctor.fee || "",
      image: doctor.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-4 sm:p-6 lg:p-10 animate-fadeIn">
      {/* Form */}
      <div
        className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl
    p-6 sm:p-10 max-w-5xl mx-auto mt-20
    hover:shadow-blue-200 transition-all duration-500
    animate-[fadeInDown_0.8s_ease-in-out]"
      >
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-center
      text-blue-700 mb-8 animate-pulse"
        >
          {editId ? "Update  Doctor" : "Add To Doctor Detail"}
        </h1>

        {msg && (
          <p
            className="text-center text-green-600 mb-5 font-semibold
        animate-bounce"
          >
            {msg}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="doctorName"
            placeholder="Doctor Name"
            value={form.doctorName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none
        focus:ring-2 focus:ring-blue-400
        transition-all duration-300 focus:scale-[1.02]"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none
        focus:ring-2 focus:ring-blue-400
        transition-all duration-300 focus:scale-[1.02]"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={form.experience}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none
        focus:ring-2 focus:ring-blue-400
        transition-all duration-300 focus:scale-[1.02]"
          />

          <input
            type="number"
            name="fee"
            placeholder="Fee"
            value={form.fee}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none
        focus:ring-2 focus:ring-blue-400
        transition-all duration-300 focus:scale-[1.02]"
          />

          <textarea
            name="decription"
            placeholder="Description"
            value={form.decription}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 p-3 rounded-xl outline-none
        focus:ring-2 focus:ring-blue-400
        transition-all duration-300 focus:scale-[1.01]
        md:col-span-2"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none
        focus:ring-2 focus:ring-blue-400
        transition-all duration-300 focus:scale-[1.02]
        md:col-span-2"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600
        hover:from-blue-700 hover:to-indigo-700
        transition-all duration-500 text-white py-3 rounded-xl
        font-bold text-lg md:col-span-2
        hover:scale-[1.02] hover:shadow-xl"
          >
            {editId ? "Update Doctor" : "Add Doctor"}
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="mt-12 overflow-x-auto animate-[fadeInUp_1s_ease-in-out]">
        <table
          className="w-full bg-white/90 backdrop-blur-md shadow-2xl
      rounded-3xl overflow-hidden"
        >
          <thead
            className="bg-gradient-to-r from-blue-600 to-indigo-600
        text-white"
          >
            <tr>
              <th className="p-6">Image</th>
              <th className="p-6">Doctor</th>
              <th className="p-6">Department</th>
              <th className="p-6">Experience</th>
              <th className="p-6">Fee</th>
              <th className="p-6">Actions</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doctor, index) => (
              <tr
                key={doctor._id}
                className="border-b  hover:bg-blue-50
            transition-all duration-300
            animate-[fadeIn_0.5s_ease-in-out]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <td className="p-4 ">
                  <img
                    src={doctor.image}
                    alt={doctor.doctorName}
                    className="w-16 h-16 rounded-full object-cover
                border-4 border-blue-100
                hover:scale-110 transition-all duration-300"
                  />
                </td>

                <td className="p-4 font-bold text-gray-700 ">
                  {doctor.doctorName}
                </td>

                <td className="p-4 text-gray-600">{doctor.department}</td>

                <td className="p-4 text-gray-600">{doctor.experience}</td>

                <td className="p-4 text-green-600 font-bold">₹ {doctor.fee}</td>

                <td className="p-4 flex justify-center gap-6">
                  <button
                    onClick={() => editDoctor(doctor)}
                    className="bg-yellow-500 hover:bg-yellow-600
                text-white px-10 py-2 rounded
                transition-all duration-300
                hover:scale-105 hover:shadow-lg cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteDoctor(doctor._id)}
                    className="bg-red-500 hover:bg-red-600
                text-white px-10 py-2 rounded
                transition-all duration-300
                hover:scale-105 hover:shadow-lg cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default AdminPanle;

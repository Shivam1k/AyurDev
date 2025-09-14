import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorRegistration: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    licenseNumber: "",
    specialty: "",
    experience: "",
    hospital: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Doctor account created successfully!");
    console.log("Doctor Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-6">
      {/* ✅ Added relative so the close button positions correctly */}
      <div className="relative w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        {/* ❌ Close button */}
        <span
          className="absolute text-2xl font-bold cursor-pointer top-4 right-6 text-gray-400 hover:text-gray-700"
          onClick={() => navigate("/register")}
        >
          &times;
        </span>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          👨‍⚕️ Doctor Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg w-full"
            required
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            />
            <select
              name="gender"
              className="p-3 border rounded-lg"
              onChange={handleChange}
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <input
            type="text"
            name="licenseNumber"
            placeholder="Medical License Number"
            className="p-3 border rounded-lg w-full"
            required
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <select
              name="specialty"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            >
              <option value="">Select Specialty</option>
              <option>General Practice</option>
              <option>Cardiology</option>
              <option>Dermatology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Psychiatry</option>
              <option>Surgery</option>
            </select>
            <input
              type="number"
              name="experience"
              placeholder="Years of Experience"
              className="p-3 border rounded-lg"
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="hospital"
            placeholder="Hospital / Clinic Name"
            className="p-3 border rounded-lg w-full"
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="terms"
              className="w-4 h-4"
              required
              onChange={handleChange}
            />
            I agree to the Terms & Privacy Policy
          </label>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
          >
            Create Doctor Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientRegistration: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    abhaNumber: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
    alert("Patient account created successfully!");
    console.log("Patient Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
      {/* ✅ added relative here so absolute span works */}
      <div className="relative w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <span
          className="absolute text-2xl font-bold cursor-pointer top-4 right-6 text-gray-400 hover:text-gray-700"
          onClick={() => navigate("/register")}
        >
          &times;
        </span>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          👤 Patient Registration
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
            <input
              type="date"
              name="dateOfBirth"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select
              name="gender"
              className="p-3 border rounded-lg"
              required
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <select
              name="bloodGroup"
              className="p-3 border rounded-lg"
              onChange={handleChange}
            >
              <option value="">Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <input
            type="text"
            name="abhaNumber"
            placeholder="ABHA Number (Optional)"
            className="p-3 border rounded-lg w-full"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            className="p-3 border rounded-lg w-full"
            required
            onChange={handleChange}
          ></textarea>

          <input
            type="text"
            name="emergencyContactName"
            placeholder="Emergency Contact Name"
            className="p-3 border rounded-lg w-full"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="emergencyContactPhone"
            placeholder="Emergency Contact Phone"
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition"
          >
            Create Patient Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientRegistration;

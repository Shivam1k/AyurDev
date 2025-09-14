import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  userType: "doctor" | "patient";
  handleLogin: (userType: "doctor" | "patient", formData: { id: string; password: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, userType, handleLogin }) => {
  const [formData, setFormData] = useState<{ id: string; password: string }>({ id: "", password: "" });

  if (!isOpen) return null;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(userType, formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-10 bg-white rounded-2xl shadow-xl animate-slideIn">
        <span
          className="absolute text-2xl font-bold cursor-pointer top-4 right-6 text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="mb-8 text-2xl font-semibold text-center text-gray-800">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-5 text-left">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              {userType === "doctor" ? "Medical License Number" : "Patient ID / ABHA Number"}
            </label>
            <input
              type="text"
              name="id"
              placeholder={userType === "doctor" ? "Enter your license number" : "Enter your Patient ID or ABHA"}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-br from-green-500 to-green-700 hover:scale-105 transition-transform">
            {userType === "doctor" ? "Access Doctor Dashboard" : "Access Patient Portal"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

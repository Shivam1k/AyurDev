import React from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600 p-6">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl p-10 text-center overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>

        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br from-green-500 to-green-700">
          H+
        </div>

        {/* Titles */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Account</h1>
        <p className="text-gray-500 mb-12">
          Choose your account type to get started with our healthcare platform
        </p>

        {/* Registration Options */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Doctor Card */}
          <div
            onClick={() => navigate("/register/doctor")}
            className="cursor-pointer bg-gray-50 border-2 border-gray-200 rounded-xl p-8 w-80 shadow-md hover:shadow-xl hover:border-green-500 transition"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br from-green-500 to-green-700 text-white">
              👨‍⚕️
            </div>
            <h2 className="text-xl font-semibold mb-2">Register as Doctor</h2>
            <p className="text-gray-600 mb-4">
              Create your professional account to manage patients and practice
            </p>
            <button className="bg-gradient-to-br from-green-500 to-green-700 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition">
              Register as Doctor
            </button>
          </div>

          {/* Patient Card */}
          <div
            onClick={() => navigate("/register/patient")}
            className="cursor-pointer bg-gray-50 border-2 border-gray-200 rounded-xl p-8 w-80 shadow-md hover:shadow-xl hover:border-blue-500 transition"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              👤
            </div>
            <h2 className="text-xl font-semibold mb-2">Register as Patient</h2>
            <p className="text-gray-600 mb-4">
              Create your account to access healthcare services and records
            </p>
            <button className="bg-gradient-to-br from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition">
              Register as Patient
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-green-600">
            Sign In
          </a>{" "}
          |{" "}
          <a href="#support" className="font-semibold text-green-600">
            Need Help?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

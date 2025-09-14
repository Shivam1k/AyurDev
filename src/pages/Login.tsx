import React, { useState } from "react";
import Modal from "../component/Modal";
import LoginCard from "../component/LoginCard";
import { Link } from "react-router-dom";
// Type for login card
interface Card {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  modal: "doctor" | "patient";
}

const Login: React.FC = () => {
  const [openModal, setOpenModal] = useState<"doctor" | "patient" | null>(null);

  const handleLogin = (userType: "doctor" | "patient", data: { id: string; password: string }) => {
    alert(`Welcome! Redirecting to ${userType} dashboard...`);
    console.log(`${userType} login:`, data);
    setOpenModal(null);
  };

  const cards: Card[] = [
    {
      title: "Doctor Login",
      description: "Access your practice dashboard, patient records, and medical tools",
      icon: "👨‍⚕️",
      gradient: "from-green-500 to-green-700",
      modal: "doctor",
    },
    {
      title: "Patient Login",
      description: "View your health records, appointments, and test results",
      icon: "👤",
      gradient: "from-blue-500 to-blue-700",
      modal: "patient",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-700 p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10 text-center overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>

        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br from-green-500 to-green-700">
          H+
        </div>

        {/* Titles */}
        <h1 className="mb-2 text-3xl font-bold text-gray-800">Healthcare Portal</h1>
        <p className="mb-12 text-lg text-gray-500">
          Please choose your login type to access your healthcare dashboard
        </p>

        {/* Login Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <LoginCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              gradient={card.gradient}
              onClick={() => setOpenModal(card.modal)}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* Footer Links */}
        <p className="mt-10 text-sm text-gray-400">
  Need help?{" "}
  <a href="#support" className="font-semibold text-green-500">
    Contact Support
  </a>{" "}
  |{" "}
  <Link to="/register" className="font-semibold text-green-500">
    Create New Account
  </Link>
</p>
      </div>

      {/* Modals */}
      <Modal
        isOpen={openModal === "doctor"}
        onClose={() => setOpenModal(null)}
        title="👨‍⚕️ Doctor Login"
        userType="doctor"
        handleLogin={handleLogin}
      />
      <Modal
        isOpen={openModal === "patient"}
        onClose={() => setOpenModal(null)}
        title="👤 Patient Login"
        userType="patient"
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;

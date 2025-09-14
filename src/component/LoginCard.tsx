import React from "react";
import type { CSSProperties } from "react";

interface LoginCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  onClick: () => void;
  style?: CSSProperties;
}

const LoginCard: React.FC<LoginCardProps> = ({ title, description, icon, gradient, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className="relative w-72 p-8 rounded-xl border-3 border-gray-200 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className={`mb-6 w-20 h-20 mx-auto rounded-lg flex items-center justify-center text-4xl text-white bg-gradient-to-br ${gradient}`}>
        {icon}
      </div>
      <h2 className="mb-3 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mb-6 text-gray-500">{description}</p>
      <button className={`px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-br ${gradient} hover:scale-105 transition-transform`}>
        {title.includes("Doctor") ? "Login as Doctor" : "Login as Patient"}
      </button>
    </div>
  );
};

export default LoginCard;

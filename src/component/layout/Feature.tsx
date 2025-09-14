import React from "react";

const features = [
  {
    title: "Paperless management",
    description: "Access your information right from admission to discharge in a paperless manner",
    color: "red-500",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        <circle cx="16" cy="18" r="2" fill="#e74c3c"/>
        <path d="M14 16L16 18L18 16" stroke="#e74c3c" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Continuum of care",
    description: "Create your longitudinal health history for evidence based treatment",
    color: "green-500",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
        <path d="M17,12H15V10A3,3 0 0,0 12,7A3,3 0 0,0 9,10V12H7V10A5,5 0 0,1 12,5A5,5 0 0,1 17,10V12Z"/>
        <path d="M8,13V15H16V13H8Z"/>
        <circle cx="16" cy="8" r="2" fill="#27ae60"/>
        <path d="M14 6L16 8L18 6" stroke="#27ae60" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Unique identity via ABHA number",
    description: "Link your ABHA address with ABHA number to ensure that the health records created for you are shared only with you",
    color: "yellow-500",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7A2,2 0 0,1 14,9A2,2 0 0,1 12,11A2,2 0 0,1 10,9A2,2 0 0,1 12,7M12,14C13.33,14 15.68,14.67 16.5,15.5V11.5C16.5,10.67 14.33,10 12,10C9.67,10 7.5,10.67 7.5,11.5V15.5C8.32,14.67 10.67,14 12,14Z"/>
        <circle cx="18" cy="6" r="3" fill="#f39c12"/>
        <path d="M16.5 6H19.5" stroke="white" strokeWidth="1"/>
        <path d="M18 4.5V7.5" stroke="white" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    title: "Easy sharing of health records",
    description: "Request your health data from participating healthcare information providers",
    color: "blue-500",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        <path d="M8,12V14H16V12H8M8,16V18H13V16H8Z"/>
        <path d="M16 14L18 16L20 14" stroke="#3498db" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="2" fill="#3498db"/>
      </svg>
    ),
  },
  {
    title: "Consent-based sharing and linking",
    description: "Deny or grant consent at anytime",
    color: "orange-500",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
        <path d="M17,8.5L18.5,10L15,13.5L10.5,9L12,7.5L15,10.5L17,8.5Z"/>
        <circle cx="19" cy="5" r="3" fill="#e97544"/>
        <path d="M17.5 5H20.5" stroke="white" strokeWidth="1"/>
        <path d="M19 3.5V6.5" stroke="white" strokeWidth="1"/>
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 to-gray-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
          What can you do with your ABHA address?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 text-center shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
              style={{ animation: `fadeInUp 0.6s ease forwards`, animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className={`absolute inset-0 rounded-lg opacity-10 bg-${feature.color}`}></div>
                <div className="relative z-10 text-current">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

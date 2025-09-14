// import React from "react";

// interface ModalWrapperProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
// }

// const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
//         {/* Close button */}
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           {title}
//         </h2>

//         {/* Content */}
//         {children}
//       </div>
//     </div>
//   );
// };

// export default ModalWrapper;

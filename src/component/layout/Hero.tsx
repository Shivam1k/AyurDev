import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            {/* Main Title */}
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-800 leading-tight">
                Ayushman Bharat Digital Mission
              </h1>
              <p className="text-xl md:text-2xl text-blue-700/80 font-medium">
                Your Digital Health Journey Begins Here
              </p>
            </div>

            {/* ABHA Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-blue-800">ABHA Address</h2>
              <p className="text-gray-700 max-w-lg leading-relaxed">
                ABHA Address is an easy to remember username that enables a user to access their 
                health records digitally and share their records with various healthcare providers. An 
                ABHA address may look like 'name@abdm'. It is required to sign up on ABHA Application.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col gap-4">
              <button className="self-start px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:translate-y-[-3px] transition-all duration-300">
                Create ABHA Address
              </button>
              <p className="text-gray-600">
                Already have an ABHA address?{" "}
                <a href="#" className="text-orange-500 font-semibold underline hover:no-underline">
                  Login
                </a>
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center h-[500px] md:h-[500px]">
            {/* Main Device */}
            <div className="relative z-10">
              {/* Monitor */}
              <div className="bg-gray-800 rounded-t-2xl p-2 shadow-2xl">
                <div className="bg-gradient-to-tr from-pink-500 to-red-500 w-80 h-56 rounded-t-xl relative overflow-hidden p-6">
                  <div className="absolute inset-4 bg-white rounded-md shadow-inner p-4">
                    {/* Profile Card */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    {/* Content Lines */}
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-300 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-300 rounded"></div>
                      <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  {/* Doctor Figure */}
                  <div className="absolute bottom-2 right-2 w-16 h-20 bg-white rounded shadow flex flex-col gap-1 p-1">
                    <div className="h-8 bg-gray-300 rounded-t"></div>
                    <div className="flex flex-col gap-1">
                      <div className="h-1 bg-gray-300 rounded"></div>
                      <div className="h-1 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Monitor Base & Stand */}
              <div className="bg-gray-600 h-6 w-80 rounded-b-2xl mt-1"></div>
              <div className="bg-gray-800 h-8 w-32 rounded-b-xl mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import AgriLinkTeam from "./AgriLinkTeam";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 to-transparent"></div>
        <div className="absolute top-20 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-100/10 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Hero Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-16 md:py-24 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Tagline */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full hover:bg-emerald-100 transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <span className="text-sm font-medium text-emerald-700 tracking-wide">
                🌱 Smart Employment Platform
              </span>
            </div>

            {/* Title */}
            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight hover:scale-105 transition-transform duration-500">
                AgriLink - The Digital Backbone
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500 mt-2 animate-gradient-x">
                  Of Rural India
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              AgriLink is a mobile-first, voice-enabled platform that directly
              connects farmers with skilled and unskilled agricultural laborers,
              eliminating middlemen or contractors.
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm sm:text-base text-slate-700 font-medium">
              {["Trustworthy", "Efficient", "Accessible"].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${0.6 + idx * 0.2}s` }}
                >
                  <div
                    className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm animate-pulse"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  ></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <Link
                to="/demo"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 font-medium text-base transform hover:-translate-y-1 hover:scale-105 animate-bounce-in"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🎬 Watch Demo
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="/learn-more"
                className="w-full sm:w-auto text-center bg-white border border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 font-medium text-base transform hover:-translate-y-1 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Video Card */}
          <div
            className="flex-1 flex justify-center lg:justify-end animate-slide-in-right"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100/30 via-emerald-100/20 to-emerald-100/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>

              <div className="relative bg-white p-5 rounded-2xl shadow-lg border border-emerald-100/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-500 hover:scale-105 transform transition-transform duration-300">
                <div
                  className="relative mx-auto overflow-hidden rounded-xl"
                  style={{
                    aspectRatio: "9/16",
                    maxHeight: "500px",
                    width: "100%",
                  }}
                >
                  <video
                    className="h-full object-contain mx-auto hover:scale-105 transition-transform duration-500"
                    src="/demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full animate-pulse"></div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-1 hover:text-emerald-600 transition-colors duration-300">
                      AgriLink Live Demo
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      AgriLink in action: bridging farmers and laborers
                      seamlessly.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full hover:bg-emerald-100 transition-colors duration-300 hover:scale-105 transform">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 hover:text-amber-500 transition-colors duration-200 animate-bounce"
                          style={{ animationDelay: `${i * 0.1}s` }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-emerald-700 font-medium text-xs">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Buttons */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-3">
          <div
            className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1 border border-slate-100 animate-bounce-in"
            style={{ animationDelay: "1.4s" }}
          >
            <svg
              className="w-5 h-5 text-slate-600 hover:text-emerald-600 transition-colors duration-300 hover:rotate-12 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div
            className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1 border border-slate-100 animate-bounce-in"
            style={{ animationDelay: "1.6s" }}
          >
            <svg
              className="w-5 h-5 text-slate-600 hover:text-emerald-600 transition-colors duration-300 hover:scale-125 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes bounce-in {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes gradient-x {
            0%,
            100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.8s ease-out forwards;
          }
          .animate-slide-in-up {
            animation: slide-in-up 0.6s ease-out forwards;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          .animate-bounce-in {
            animation: bounce-in 0.6s ease-out forwards;
          }
          .animate-gradient-x {
            animation: gradient-x 3s ease infinite;
          }
        `}</style>
      </div>
      <AgriLinkTeam />
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import AgriLinkTeam from "./AgriLinkTeam";
import { PlayCircle, HelpCircle, Heart } from "lucide-react";

const Home = () => {
  const features = ["Trustworthy", "Efficient", "Accessible"];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 relative overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "8s" }}
        ></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-16 md:py-24 gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100/70 border border-emerald-200/80 rounded-full hover:bg-emerald-100 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="text-sm font-semibold text-emerald-800 tracking-wide">
                🌱 A Smart Employment Platform
              </span>
            </div>

            <div
              className="space-y-3 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">
                AgriLink: The Digital Backbone
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 mt-2 animate-gradient-x">
                  Of Rural India
                </span>
              </h1>
            </div>

            <p
              className="text-lg text-slate-600 leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              A mobile-first, voice-enabled platform directly connecting farmers
              with skilled and unskilled agricultural laborers, eliminating
              middlemen.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-slate-700 font-medium">
              {features.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + idx * 0.15}s` }}
                >
                  <div
                    className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-md shadow-emerald-500/30 animate-pulse"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  ></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <Link
                to="/demo"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 font-semibold text-base transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <PlayCircle size={20} /> Watch Demo
                </span>
              </Link>
              <Link
                to="/learn-more"
                className="w-full sm:w-auto text-center bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 font-semibold text-base transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="flex-1 flex justify-center lg:justify-end w-full animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/50 to-green-200/50 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700 animate-pulse"></div>
              <div className="relative bg-white/60 p-4 rounded-3xl shadow-2xl border border-emerald-100/80 backdrop-blur-md">
                <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
                  <video
                    className="w-full h-full object-cover"
                    src="/demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg">
                      AgriLink Demo
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Smart farming in action.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-100/80 px-3 py-1.5 rounded-full">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-emerald-800 font-bold text-sm">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-10">
          <button className="group relative bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1 border border-slate-100">
            <HelpCircle className="w-5 h-5 text-slate-600 group-hover:text-emerald-600 transition-colors" />
          </button>
          <button className="group relative bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1 border border-slate-100">
            <Heart className="w-5 h-5 text-slate-600 group-hover:text-emerald-600 transition-colors" />
          </button>
        </div>
      </div>
      <AgriLinkTeam />
    </>
  );
};

export default Home;

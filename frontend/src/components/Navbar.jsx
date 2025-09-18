import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-green-500 via-green-600 to-green-500 backdrop-blur-md border-b border-green-500/20 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
              <img
                src="/logo.png"
                alt="AgriLink Logo"
                className="relative w-12 h-12 object-cover rounded-full border-2 border-white/30 shadow-lg hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black tracking-tight">
                AgriLink
              </span>
              <span className="text-xs text-green-200 font-medium -mt-1 text-black">
                Team Green Pixel
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <Link
              to="/demo"
              className="bg-white text-green-600 font-semibold px-6 py-2.5 rounded-full hover:bg-green-50 hover:text-green-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm shadow-md border border-white/20"
            >
              Get Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-green-500 via-green-600 to-green-500 backdrop-blur-md border-b border-emerald-500/20 z-50 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
                <img
                  src="/logo.png"
                  alt="AgriLink Logo"
                  className="relative w-12 h-12 object-cover rounded-full border-2 border-white/30 shadow-lg hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-2xl font-bold text-black tracking-tight">
                AgriLink
              </span>
              <span className="text-xs  font-medium -mt-1 text-black">
                Team Green Pixel
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="relative p-2 text-black hover:text-white transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span
                className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-emerald-700"
                text-black
              ></span>
            </button>

            <Link className="hidden md:block bg-white text-black  font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-50 hover:text-emerald-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm shadow-md border border-white/20">
              Get Demo
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-800 focus:ring-white"
              >
                <div className="h-10 w-10 rounded-full bg-emerald-800 border-2 border-emerald-500/50 flex items-center justify-center text-white font-medium text-lg">
                  U
                </div>
              </button>

              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="none">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        User Name
                      </p>
                      <p className="text-xs text-gray-500">user@example.com</p>
                    </div>
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </Link>
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </Link>
                    <div className="border-t border-gray-100"></div>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-emerald-700 border-t border-emerald-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                className="block mt-4 bg-white text-emerald-700 font-semibold px-5 py-2.5 rounded-full text-center text-sm shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

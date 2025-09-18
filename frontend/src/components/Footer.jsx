import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-black">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AgriLink Logo" className="h-8 w-auto" />
          <p className="text-black">
            &copy; {new Date().getFullYear()} AgriLink. All rights reserved.
          </p>
        </div>

        <p className="mt-2 md:mt-0 text-black font-medium">Team Green Pixel</p>
      </div>
    </footer>
  );
};

export default Footer;

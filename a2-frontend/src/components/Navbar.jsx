import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar({ onBook }) {
  return (
    <header className="w-full absolute top-0 left-0 z-30 text-white">
      {/* Top Bar */}
      <div className="bg-black/40 border-b border-white/20 text-xs sm:text-sm md:text-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <button
            onClick={onBook}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 sm:px-4 py-1 rounded-md shadow"
          >
            Book A Demo
          </button>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              <span>+91 95698 68731</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span className="text-xs sm:text-sm">contactus@satyampathak.dev@gamil.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <a href="/home" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 sm:h-14 w-auto" />
          <span className="text-white font-extrabold text-2xl sm:text-3xl">A2 Developers</span>
        </a>

        <nav className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-semibold">
          {["Home", "About", "Product", "Contact", "Services"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="decoration-white underline-offset-8 transition-colors duration-300 hover:text-blue-400 hover:underline hover:decoration-blue-400"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}





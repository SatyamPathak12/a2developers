import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar({ onBook }) {
  return (
    <header className="w-full absolute top-0 left-0 z-30 text-white">
      <div className="bg-black/40 border-b border-white/20 text-sm md:text-base">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <button
            onClick={onBook}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1 rounded-md shadow"
          >
            Book A Demo
          </button>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              <span>+91 95698 68731</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>contactus@satyampathak.dev@gamil.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <a href="/home" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-14 w-auto" />
            <span className="text-white font-extrabold text-3xl">
              A2 Developers
            </span>
          </a>

          <nav className="hidden md:flex gap-10 text-lg font-semibold ml-6">
            <a
              className=" decoration-white underline-offset-8 transition-colors duration-300 hover:text-blue-400 hover:underline hover:decoration-blue-400"
              href="/home"
            >
              Home
            </a>
            <a
              className="decoration-white underline-offset-8 transition-colors duration-300 hover:text-blue-400 hover:underline hover:decoration-blue-400"
              href="/about"
            >
              About
            </a>
            <a
              className="decoration-white underline-offset-8 transition-colors duration-300 hover:text-blue-400 hover:underline hover:decoration-blue-4000"
              href="/products"
            >
              Product
            </a>
            <a
              className="decoration-white underline-offset-8 transition-colors duration-300 hover:text-blue-400 hover:underline hover:decoration-blue-400"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="decoration-white underline-offset-8 transition-colors duration-300 hover:text-blue-400 hover:underline hover:decoration-blue-400"
              href="/services"
            >
              Services
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}





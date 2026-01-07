import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/zgevent1.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-4 py-4 sm:px-12 lg:px-24 xl:px-40">

        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="Zero Gravity Logo"
              className="h-14 sm:h-16 xl:h-20 w-auto object-contain"
             />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium font-poppins">
          <a href="#home" className="hover:text-pink-400">Home</a>
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#services" className="hover:text-pink-400">Services</a>
          <a href="#gallery" className="hover:text-pink-400">Gallery</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
      
          <a href="#contact" className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition font-medium font-poppins cursor-pointer">Book an Event</a>
         
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 py-6 space-y-4 font-medium font-poppins">
          <a href="#home" className="block" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="block" onClick={() => setOpen(false)}>About</a>
          <a href="#services" className="block" onClick={() => setOpen(false)}>Services</a>
          <a href="#gallery" className="block" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#contact" className="block" onClick={() => setOpen(false)}>Contact</a>

          <a href="#contact" className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition font-medium font-poppins cursor-pointer">Book an Event</a>
           
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300">
      
      {/* Top Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl text-white mb-4">
              Zerogravity Events
            </h3>
            <p className="text-sm leading-relaxed font-poppins">
              Creating unforgettable weddings and events with elegance,
              creativity, and flawless execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-medium text-lg text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-poppins">
              <li><a href="#home" className="hover:text-[#fb64b6]">Home</a></li>
              <li><a href="#about" className="hover:text-[#fb64b6]">About</a></li>
              <li><a href="#services" className="hover:text-[#fb64b6]">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#fb64b6]">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#fb64b6]">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-medium text-lg text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm font-poppins">
              <li>Wedding Planning</li>
              <li>Event Decoration</li>
              <li>Photography & Videography</li>
              <li>Reception Management</li>
              <li>Corporate Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-4 font-medium">
              Contact
            </h4>
            <p className="text-sm mb-2 font-poppins">
              42, 50, Josier St, Tirumurthy Nagar, <br/> 
              Nungambakkam, Tamil Nadu 600034
            </p>
            <p className="text-sm mb-2 font-poppins">
              Phone: +91 9840767566
            </p>
            <p className="text-sm font-poppins">
              Email: info@zerogravity.photography
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="font-poppins max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} Zerogravity Events. All Rights Reserved.
          </p>

          <div className="flex space-x-4 mt-2 md:mt-0 font-poppins">
            <a href="#" className="hover:text-[#f4a640]">Instagram</a>
            <a href="#" className="hover:text-[#f4a640]">Facebook</a>
            <a href="#" className="hover:text-[#f4a640]">YouTube</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

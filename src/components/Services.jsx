import React from "react";
import wedding1 from "../assets/services1.webp";
import wedding2 from "../assets/services2.webp";
import wedding3 from "../assets/services3.webp";

const Services = () => {
  return (
    <section className="bg-[#fff8ee] py-20" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="font-playfair text-4xl mb-4 font-medium">
          We Plan Beautiful Weddings
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 font-poppins">
          Our event planning services ensure a seamless and unforgettable
          experience for your special day.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="relative group overflow-hidden shadow-lg">
            <img
              src={wedding1}
              alt="Wedding Ceremony"
              className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end items-start p-6">
              <h3 className="font-playfair text-white text-xl">
                Weddings
              </h3>
              <p className="text-sm text-gray-200 mt-2 font-poppins">
                Elegant wedding planning & coordination
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden shadow-lg">
            <img
              src={wedding2}
              alt="Mehndi Ceremony"
              className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end items-start p-6">
              <h3 className="font-playfair text-white text-xl">
                Mehndi & Haldi
              </h3>
              <p className="text-sm text-gray-200 mt-2 font-poppins">
                Vibrant pre-wedding celebrations
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden shadow-lg">
            <img
              src={wedding3}
              alt="Reception"
              className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end items-start p-6">
              <h3 className="font-playfair text-white text-xl">
                Reception
              </h3>
              <p className="text-sm text-gray-200 mt-2 font-poppins">
                Stylish receptions & grand celebrations
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

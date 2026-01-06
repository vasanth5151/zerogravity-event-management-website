import React from "react";
import eventImage from "../assets/event-management.jpeg";

const Herosection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={eventImage}
        alt="Event Management"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex items-center px-6 sm:px-12 lg:px-24 xl:px-40">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="text-white max-w-xl text-center lg:text-left">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Creating Unforgettable <br /> Moments in India
            </h1>

            <p className="mt-4 text-sm sm:text-base font-poppins text-white/90">
              Luxury Event Planning for Every Occasion
            </p>

            <a href="#contact">
              <button className="mt-6 bg-[#fb64b6] hover:bg-pink-500 transition px-6 py-3 rounded-lg font-poppins font-medium">
                Start Planning Today
              </button>
            </a>
          </div>

          {/* Right Lead Form */}
            <div className="w-full max-w-sm bg-white/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 shadow-xl mt-6">
              <h2 className="text-xl font-playfair font-semibold text-white mb-4 text-center">
                Book Your Event
              </h2>

              <form className="space-y-3 font-poppins">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none"
                />

                <textarea
                  rows="3"
                  placeholder="Message"
                  className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#fb64b6] hover:bg-pink-500 transition text-white py-2 rounded-md text-sm font-medium"
                >
                  Submit
                </button>
              </form>
            </div>


        </div>
      </div>
    </section>
  );
};

export default Herosection;

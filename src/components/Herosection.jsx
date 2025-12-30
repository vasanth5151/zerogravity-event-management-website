import React from 'react'
import eventImage from '../assets/event-management.jpeg';


const Herosection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-[#FDE6B3]' id='home'>
    
       
       {/* Image Section */}
        <div className="relative bg-cover bg-center h-screen w-full">
          <img
            src={eventImage}
            alt="Event"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text on image */}
          <div className="absolute inset-0 flex flex-col justify-center md:justify-end  p-15 text-white">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight">
              Creating Unforgettable <br /> Moments in india
            </h1>
            <p className="mt-3 text-sm md:text-base font-poppins">
              Luxury Event Planning for Every Occasion
            </p>

            <a href="#contact"><button className="font-poppins font-medium mt-6 bg-[#fb64b6] text-white px-6 py-3 cursor-pointer transition">
            Start Planning Today
          </button></a>
          </div>
        </div>

    </section>
        
    
  )
}

export default Herosection
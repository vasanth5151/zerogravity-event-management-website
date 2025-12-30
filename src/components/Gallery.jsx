import React from "react";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery4 from "../assets/gallery4.webp";
import gallery5 from "../assets/gallery5.webp";
import gallery6 from "../assets/gallery6.webp";

const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,

];

const Gallery = () => {
  return (
    <section className="bg-[#fff8ee] py-20" id="gallery">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="font-playfair text-4xl mb-4">
          Beautiful Weddings
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 font-poppins" >
          Catch a glimpse of our beautifully curated weddings and events,
          designed with elegance and love.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden group shadow-md"
            >
              <img
                src={img}
                alt="Wedding Gallery"
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#f9e8c0] py-12 px-6 shadow-lg w-full">
          <h3 className="font-playfair text-3xl mb-4">
            Plan Your Dream Event Today!
          </h3>

          <p className="text-gray-600 mb-6 font-poppins">
            Get in touch with our expert planners to create an unforgettable
            celebration tailored just for you.
          </p>

          <a href="#contact"><button className="font-poppins cursor-pointer bg-[#fb64b6] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#fb64b6] transition">
            Book Now
          </button></a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;

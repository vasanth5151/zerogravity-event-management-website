import React from "react";
import chooseImg from "../assets/about-img.webp";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#fff8ee] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src={chooseImg}
              alt="Why Choose Us"
              className="w-full h-[420px] object-cover shadow-lg rounded-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-playfair text-3xl mb-4">
              Why choose Golden Rangoli Events
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed font-poppins">
              Golden Rangoli Events specializes in creating luxurious and
              memorable events. With a focus on elegance and customization,
              we ensure that each celebration reflects your unique style
              and vision.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed font-poppins">
              Our experienced team is dedicated to turning your dreams into
              reality, whether it's a wedding, birthday, or corporate event.
            </p>

            <button className="font-poppins cursor-pointer bg-[#fb64b6] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#fb64b6] transition rounded">
              Call Us Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

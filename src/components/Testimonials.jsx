import React from "react";
import testimonial1 from "../assets/testimonials1.webp";
import testimonial2 from "../assets/testimonials2.webp";
import testimonial3 from "../assets/testimonials3.webp";

const testimonials = [
  {
    name: "Emma Johnson",
    image: testimonial1, // replace with real image
    message:
      "Golden Rangoli Events made our wedding truly magical. Every detail was perfectly planned and beautifully executed.",
  },
  {
    name: "Meera signh",
    image: testimonial2,
    message:
      "Professional team, stunning decor, and flawless coordination. Highly recommended for any grand celebration.",
  },
  {
    name: "Suraj",
    image: testimonial3,
    message:
      "From planning to execution, everything was seamless. Our guests were amazed by the arrangements.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fff8ee] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="font-playfair text-4xl mb-4">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 font-poppins">
          Real experiences from couples and clients who trusted us
          with their special moments.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg text-left rounded-2xl"
            >
              {/* Message */}
              <p className="text-gray-700 mb-8 leading-relaxed font-poppins">
                “{item.message}”
              </p>

              {/* Image + Name */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h4 className="font-playfair text-lg">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

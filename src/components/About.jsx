import aboutImage from "../assets/about-img.webp";

const About = () => {
  return (
    <section className="bg-[#FFF7E8] py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="relative">
          <div className="overflow-hidden shadow-lg">
            <img
              src={aboutImage}
              alt="About Golden Rangoli Events"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[#fb64b6] font-bold font-playfair">
            About us
          </h4>

          <h2 className="mt-3 text-3xl md:text-4xl font-medium text-gray-900 font-playfair">
            Golden Rangoli Events
          </h2>

          <p className="mt-5 text-gray-700 leading-relaxed font-poppins">
            Golden Rangoli Events specializes in creating luxurious and memorable
            events. With a focus on elegance and customization, we ensure that
            each celebration reflects your unique style and vision.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed font-poppins">
            Our experienced team is dedicated to turning your dreams into
            reality, whether it's a wedding, birthday, or corporate event.
          </p>

          <a href="#contact"><button className="font-poppins font-medium mt-6 bg-[#fb64b6] text-white px-6 py-3 cursor-pointer transition rounded">
            Contact us
          </button></a>
        </div>

      </div>
    </section>
  );
};

export default About;

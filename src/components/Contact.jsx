import React from "react";

const Contact = () => {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="font-playfair text-4xl text-center mb-14">
          Contact Us
        </h2>

        {/* Top Section: Address + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* Left: Contact Info */}
          <div>
            <h3 className="font-playfair text-2xl mb-6">
              Visit Our Office
            </h3>

            <div className="space-y-6 font-poppins text-gray-700">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p>
                 42, 50, Josier St, Tirumurthy Nagar, <br/>
                  Nungambakkam, Tamil Nadu 600034
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Mobile</h4>
                <p>+91 98407 67566</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p>info@zerogravity.photography</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#fff8ee] p-8 shadow-lg">
            <h3 className="font-playfair text-2xl mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4 font-poppins">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#fb64b6]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#fb64b6]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#fb64b6]"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#fb64b6]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#fb64b6] text-white py-3 uppercase tracking-wider hover:bg-[#fb64b6] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map (Same Place) */}
        <div className="w-full h-700px shadow-lg overflow-hidden mb-12">
          <iframe
          title="Zero Gravity Photography Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.1082089980866!2d80.2497184!3d13.059377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267cf3583549b%3A0x3e091b7ef4ad5c5d!2sZero%20Gravity%20Photography!5e0!3m2!1sen!2sin!4v1704144061234!5m2!1sen!2sin"
          className="w-full h-[400px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>

      </div>
      
    </section>
  );
};

export default Contact;

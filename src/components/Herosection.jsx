import React, { useState } from "react";
import eventImage from "../assets/event-management.jpeg";

const Herosection = () => {
  const [formData, setFormData] = useState({
    source: "Hero Section",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData object for traditional form submission
      const formDataToSend = new FormData();
      formDataToSend.append('source', formData.source);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);

      // Send to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw8Vp4KzMJueAougnKb65bYCKzHW3K41IH63fmu4A3j3tdcsWvR3n41h2nG98Ufa73ujA/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      // Try to parse response (might not work due to CORS)
      try {
        const result = await response.text();
        console.log("Submission result:", result);
      } catch (e) {
        console.log("Response received (might be redirected)");
      }

      // Reset form
      setFormData({
        source: "Hero Section",
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      // Show success message
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus(null), 4000);

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img
        src={eventImage}
        alt="Event Management"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex items-center px-6 sm:px-12 lg:px-24 xl:px-40">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
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

          <div className="w-full max-w-sm bg-white/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 shadow-xl mt-6">
            <h2 className="text-xl font-playfair font-semibold text-white mb-4 text-center">
              Book Your Event
            </h2>

            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-500/20 text-green-300 rounded-md text-sm">
                Thank you! We will contact you shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-md text-sm">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 font-poppins">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none"
                required
              />

              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-3 py-2 text-sm rounded-md bg-white/90 text-black outline-none resize-none"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fb64b6] hover:bg-pink-500 transition text-white py-2 rounded-md text-sm font-medium disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
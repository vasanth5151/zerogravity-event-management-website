import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    source: "Contact Page",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    try {
      // Create FormData for traditional form submission
      const formDataToSend = new FormData();
      formDataToSend.append('source', formData.source);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw8Vp4KzMJueAougnKb65bYCKzHW3K41IH63fmu4A3j3tdcsWvR3n41h2nG98Ufa73ujA/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      // Try to get response
      try {
        const result = await response.text();
        console.log("Contact submission result:", result);
      } catch (e) {
        console.log("Contact response received");
      }

      // Reset form
      setFormData({
        source: "Contact Page",
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);

    } catch (error) {
      console.error("Contact submission error:", error);
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-playfair text-4xl text-center mb-14">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-playfair text-2xl mb-6">
              Visit Our Office
            </h3>
            <div className="space-y-6 font-poppins text-gray-700">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p>
                  42, 50, Josier St, Tirumurthy Nagar, <br />
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

          <div className="bg-[#fff8ee] p-8 shadow-lg rounded-2xl">
            <h3 className="font-playfair text-2xl mb-6">
              Send Us a Message
            </h3>

            {success && (
              <p className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                Thank you! We will contact you shortly.
              </p>
            )}

            {error && (
              <p className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                Something went wrong. Please try again.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-poppins">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
                className="w-full border px-4 py-3 rounded"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
                className="w-full border px-4 py-3 rounded"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full border px-4 py-3 rounded"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border px-4 py-3 rounded"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fb64b6] hover:bg-pink-600 text-white py-3 rounded font-medium disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-700px shadow-lg overflow-hidden mb-12 rounded">
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
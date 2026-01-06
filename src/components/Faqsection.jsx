import React, { useState } from "react";

const faqs = [
  {
    question: "What types of events do you manage?",
    answer:
      "We manage weddings, corporate events, birthday parties, product launches, destination weddings, and private celebrations."
  },
  {
    question: "Do you provide end-to-end event planning?",
    answer:
      "Yes, we offer complete end-to-end planning including venue selection, décor, catering, photography, entertainment, and logistics."
  },
  {
    question: "How early should I book your services?",
    answer:
      "We recommend booking at least 2–3 months in advance to ensure availability and smooth planning."
  },
  {
    question: "Do you handle events outside the city?",
    answer:
      "Yes, we handle destination and outstation events across India."
  },
  {
    question: "How can I get a quotation?",
    answer:
      "You can fill out the contact form or click on 'Book an Event' and our team will get back to you within 24 hours."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-10 lg:px-32 " id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="font-playfair text-4xl text-center mb-14">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" rounded-xl border border-black/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-black font-medium font-poppins"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-4 text-sm text-black-200 font-poppins">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

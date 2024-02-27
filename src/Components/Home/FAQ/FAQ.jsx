import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Industrial and Research Development?",
      answer:
        "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-20 bg-white min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequently asked questions
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div className="py-5" key={index}>
            <details
              className="group"
              open={index === openIndex}
              onClick={() => toggleFAQ(index)}
            >
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p
                className={`text-neutral-600 mt-3 ${
                  index === openIndex ? "group-open:animate-fadeIn" : ""
                }`}
              >
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

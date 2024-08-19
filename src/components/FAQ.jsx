import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Need an invitation letter for your visa or do you have a specific question(s)?",
      answer: "We are happy to provide you with an invitation letter for your visa. Please reach out to info@filecoin.africa",
    },
    {
      question: "What if I have specific Nigeria travel questions?",
      answer: "You can find information here"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mt-10">
      {/* <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2> */}
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border-b border-gray-200"
        >
          <button
            className="w-full text-left py-4 flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <svg
              className={`w-5 h-5 transition-transform transform ${openIndex === index ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"
              }`}
          >
            <p className="text-gray-300 py-2 px-4">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

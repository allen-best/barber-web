import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What are your operating hours?',
    answer: 'My operating hours vary. Please check my Booksy calendar for the most up-to-date availability.',
  },
  {
    question: 'Do I need to book an appointment?',
    answer: 'Yes, booking an appointment is highly recommended to ensure you get a time slot that works best for you.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'I accept [list accepted payment methods].',
  },
  // Add more FAQs
];

function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md">
              <button
                className="w-full text-left py-4 px-6 font-semibold text-black focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <svg
                  className={`w-4 h-4 inline-block ml-2 transform ${expandedIndex === index ? 'rotate-180' : ''} transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {expandedIndex === index && (
                <div className="py-2 px-6 text-gray-700 border-t border-gray-200">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
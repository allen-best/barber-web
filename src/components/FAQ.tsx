import React, { useState } from 'react';
import Reveal from './Reveal';

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
    answer: 'I accept cash, credit cards, and debit cards.',
  },
  // Add more FAQs
];

function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-black" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal className="text-center mb-12">
          <span className="text-white text-xs font-bold tracking-[0.35em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-white/60"></span>
            Good to Know
            <span className="w-8 h-px bg-white/60"></span>
          </span>
          <h2 id="faq-heading" className="font-display text-4xl md:text-5xl text-white tracking-wide mt-3">Frequently Asked Questions</h2>
        </Reveal>
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 80}>
              <article className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/40 hover:bg-white/[0.07] transition-all duration-300" role="listitem">
                <button
                  className="w-full text-left py-4 px-6 font-semibold text-white focus:outline-none transition-colors flex items-center justify-between gap-4"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expandedIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-4 h-4 shrink-0 text-gray-400 transform ${expandedIndex === index ? 'rotate-180' : ''} transition-transform`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedIndex === index && (
                  <div
                    className="py-2 px-6 pb-4 text-gray-400 border-t border-white/10"
                    id={`faq-answer-${index}`}
                    aria-labelledby={`faq-question-${index}`}
                    role="region"
                  >
                    {faq.answer}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
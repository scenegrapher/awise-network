'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What makes AWISE different from other entrepreneurship programs?',
    answer:
      'AWISE is the only comprehensive ecosystem specifically designed for African women in social entrepreneurship. We combine curated opportunities, expert mentorship, storytelling platforms, and capacity building - all tailored to the unique context and challenges faced by African women social entrepreneurs.',
  },
  {
    question: 'Do I need to have a business idea to join?',
    answer:
      "No! AWISE welcomes women at all stages - from those exploring social entrepreneurship to those scaling existing ventures. Our Foundation Program helps aspiring entrepreneurs validate their ideas, while our Early-Stage and Scaling programs support entrepreneurs at different growth phases.",
  },
  {
    question: 'How does mentorship matching work?',
    answer:
      'Our smart matching system pairs you with mentors based on your industry, stage, challenges, and goals. We consider factors like sector expertise, geographic knowledge, and availability to ensure you get personalized guidance from someone who understands your context.',
  },
  {
    question: 'What kind of funding opportunities can I access?',
    answer:
      'AWISE curates funding opportunities from impact investors, foundations, grants, and competitions focused on women-led social enterprises in Africa. We help you identify the right opportunities, prepare strong applications, and connect directly with funders.',
  },
  {
    question: 'Is there a cost to join AWISE?',
    answer:
      'Joining the AWISE community is completely free! We believe in removing financial barriers to empower more African women. Some premium programs or advanced training may have fees, but our core ecosystem - mentorship matching, curated opportunities, and community access - is always free.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-neutral">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Everything you need to know about joining AWISE
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral/50 transition"
              >
                <span className="font-heading font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-text-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


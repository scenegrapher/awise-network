'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Challenge {
  percentage: string;
  title: string;
  name: string;
  story: string;
  fullStory: string;
}

const challenges: Challenge[] = [
  {
    percentage: '73%',
    title: 'Lack Mentorship Access',
    name: "Sarah's story",
    story: 'Sarah struggled to find experienced mentors in her community.',
    fullStory:
      "Sarah from Kenya had a brilliant idea for a social enterprise focused on clean water solutions, but she couldn't find experienced mentors in her community. Through AWISE, she was matched with an expert who guided her through business planning, fundraising, and scaling. Today, her venture serves over 10,000 households.",
  },
  {
    percentage: '68%',
    title: 'Struggle with Funding',
    name: "Amina's story",
    story: 'Amina faced challenges securing funding for her venture.',
    fullStory:
      "Amina from Nigeria had a validated education technology solution but couldn't secure funding. AWISE connected her with impact investors and helped her prepare a compelling pitch. She secured $50,000 in seed funding and now operates in 15 schools across Lagos.",
  },
  {
    percentage: '81%',
    title: 'Need Capacity Building',
    name: "Grace's story",
    story: 'Grace needed skills to scale her social enterprise.',
    fullStory:
      "Grace from Ghana had passion and a community following, but lacked the technical skills to scale her agricultural cooperative. Through AWISE's capacity building programs, she learned digital marketing, financial management, and operations. Her cooperative now supports 200+ women farmers.",
  },
];

export default function Challenges() {
  const [selectedStory, setSelectedStory] = useState<Challenge | null>(null);

  return (
    <>
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
              Challenges We Address
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              African women social entrepreneurs face unique barriers. AWISE provides solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="text-primary font-heading font-bold text-6xl mb-4">
                  {challenge.percentage}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {challenge.title}
                </h3>
                <p className="text-text-light mb-4">{challenge.story}</p>
                <button
                  onClick={() => setSelectedStory(challenge)}
                  className="text-secondary hover:text-primary font-semibold transition underline"
                >
                  Read {challenge.name} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-primary font-heading font-bold text-5xl mb-2">
                  {selectedStory.percentage}
                </div>
                <h3 className="font-heading font-bold text-2xl">
                  {selectedStory.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="text-foreground hover:text-primary text-3xl leading-none"
              >
                ×
              </button>
            </div>
            <p className="text-foreground leading-relaxed">{selectedStory.fullStory}</p>
          </motion.div>
        </div>
      )}
    </>
  );
}


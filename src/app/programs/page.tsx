'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

interface Program {
  title: string;
  description: string;
  features: string[];
  duration: string;
  outcomes: string;
  badge?: string;
}

const programs: Record<string, Program> = {
  aspiring: {
    title: 'Foundation Program',
    description: 'For aspiring entrepreneurs who are exploring or validating their social impact ideas',
    features: [
      'Idea Validation Workshop',
      'Business Model Canvas Training',
      'Mentor Matching',
      'Peer Learning Circles',
      'Access to Resource Library',
    ],
    duration: '3 months',
    outcomes: '85% of participants launch their venture within 6 months',
    badge: '85%',
  },
  'early-stage': {
    title: 'Growth Program',
    description: 'For early-stage entrepreneurs who have launched and are seeking to grow their impact',
    features: [
      'Business Planning & Strategy',
      'Financial Management Training',
      'Funding Readiness Workshops',
      'Marketing & Branding',
      'Legal & Compliance Guidance',
    ],
    duration: '6 months',
    outcomes: '70% secure funding within 12 months of completion',
    badge: '70%',
  },
  scaling: {
    title: 'Scale Program',
    description: 'For established entrepreneurs ready to scale their social enterprises across markets',
    features: [
      'Strategic Growth Planning',
      'Impact Measurement & Reporting',
      'Advanced Financial Management',
      'Team Building & Leadership',
      'Partnership Development',
    ],
    duration: '9 months',
    outcomes: '90% expand to new markets or significantly increase their impact',
    badge: '90%',
  },
};

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<'aspiring' | 'early-stage' | 'scaling'>('aspiring');

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                Choose Your Path to Impact
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Tailored programs for every stage of your social entrepreneurship journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 md:py-24 bg-neutral">
          <div className="container mx-auto px-4">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('aspiring')}
                className={`px-8 py-4 rounded-lg font-heading font-semibold text-lg transition ${
                  activeTab === 'aspiring'
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-white text-foreground hover:bg-white/80'
                }`}
              >
                Aspiring
              </button>
              <button
                onClick={() => setActiveTab('early-stage')}
                className={`px-8 py-4 rounded-lg font-heading font-semibold text-lg transition ${
                  activeTab === 'early-stage'
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-white text-foreground hover:bg-white/80'
                }`}
              >
                Early-Stage
              </button>
              <button
                onClick={() => setActiveTab('scaling')}
                className={`px-8 py-4 rounded-lg font-heading font-semibold text-lg transition ${
                  activeTab === 'scaling'
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-white text-foreground hover:bg-white/80'
                }`}
              >
                Scaling
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
                      {programs[activeTab].title}
                    </h2>
                    <p className="text-text-light text-lg">
                      {programs[activeTab].description}
                    </p>
                  </div>
                  {programs[activeTab].badge && (
                    <div className="flex-shrink-0 ml-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        className="w-20 h-20 bg-primary rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-heading font-bold text-2xl">
                          {programs[activeTab].badge}
                        </span>
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-xl mb-4">
                    What You'll Get:
                  </h3>
                  <div className="space-y-3">
                    {programs[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-neutral rounded-lg p-6">
                    <h4 className="font-heading font-semibold text-lg mb-2">Duration</h4>
                    <p className="text-text-light">{programs[activeTab].duration}</p>
                  </div>
                  <div className="bg-neutral rounded-lg p-6">
                    <h4 className="font-heading font-semibold text-lg mb-2">Outcomes</h4>
                    <p className="text-text-light">{programs[activeTab].outcomes}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/#join"
                    className="bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition font-semibold text-center"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#"
                    className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg hover:bg-secondary hover:text-white transition font-semibold text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* UN SDG Badges Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Aligned with UN Sustainable Development Goals
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                Our programs support entrepreneurs working towards these global goals
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 8, 10, 13, 17].map((goal) => (
                <div
                  key={goal}
                  className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-2xl hover:scale-110 transition"
                >
                  {goal}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Download, FileText, Video, BookOpen, Calculator, FileSpreadsheet } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'template' | 'guide' | 'video' | 'tool';
  category: string;
  icon: any;
  downloads: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Social Enterprise Business Plan Template',
    description: 'Comprehensive business plan template specifically designed for social enterprises in Africa.',
    type: 'template',
    category: 'Planning',
    icon: FileText,
    downloads: '1,234',
  },
  {
    id: 2,
    title: 'Investor Pitch Deck Template',
    description: 'Proven pitch deck template used by successful AWISE members to secure funding.',
    type: 'template',
    category: 'Funding',
    icon: FileText,
    downloads: '987',
  },
  {
    id: 3,
    title: 'Impact Measurement Framework Guide',
    description: 'Step-by-step guide to measuring and reporting your social impact for investors and stakeholders.',
    type: 'guide',
    category: 'Impact',
    icon: BookOpen,
    downloads: '756',
  },
  {
    id: 4,
    title: 'Financial Modeling Spreadsheet',
    description: 'Excel template for creating 3-year financial projections for social enterprises.',
    type: 'tool',
    category: 'Finance',
    icon: FileSpreadsheet,
    downloads: '654',
  },
  {
    id: 5,
    title: 'How to Write a Winning Grant Proposal',
    description: 'Complete guide with examples from successful grant applications by African women entrepreneurs.',
    type: 'guide',
    category: 'Funding',
    icon: BookOpen,
    downloads: '892',
  },
  {
    id: 6,
    title: 'Marketing Strategy Template for Social Enterprises',
    description: 'Digital marketing plan template tailored for African social enterprises with limited budgets.',
    type: 'template',
    category: 'Marketing',
    icon: FileText,
    downloads: '567',
  },
  {
    id: 7,
    title: 'Legal Checklist: Starting a Social Enterprise in Africa',
    description: 'Country-specific legal requirements and registration processes across 23 African nations.',
    type: 'guide',
    category: 'Legal',
    icon: BookOpen,
    downloads: '445',
  },
  {
    id: 8,
    title: 'Impact Calculator Tool',
    description: 'Calculate your social return on investment (SROI) and demonstrate value to stakeholders.',
    type: 'tool',
    category: 'Impact',
    icon: Calculator,
    downloads: '389',
  },
  {
    id: 9,
    title: 'Masterclass: Pitching to Impact Investors',
    description: '45-minute video masterclass on how to pitch your social enterprise to impact investors.',
    type: 'video',
    category: 'Funding',
    icon: Video,
    downloads: '1,123',
  },
];

const categories = ['All', 'Planning', 'Funding', 'Impact', 'Finance', 'Marketing', 'Legal'];

export default function ResourcesPage() {
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
                Resource Library
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Free templates, guides, and tools to help you build and scale your social enterprise
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-neutral border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '50+', label: 'Resources' },
                { value: '15K+', label: 'Downloads' },
                { value: '23', label: 'Countries' },
                { value: '100%', label: 'Free' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-light text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    category === 'All'
                      ? 'bg-secondary text-white'
                      : 'bg-neutral text-foreground hover:bg-secondary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 md:py-24 bg-neutral">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition group"
                >
                  {/* Icon & Type Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition">
                      <resource.icon className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-xs bg-neutral px-3 py-1 rounded-full font-medium">
                      {resource.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-text-light text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral">
                    <span className="text-xs text-text-light">
                      {resource.downloads} downloads
                    </span>
                    <button className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition font-medium text-sm">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-white"
            >
              <h2 className="font-heading font-bold text-3xl mb-4">
                Need Personalized Guidance?
              </h2>
              <p className="text-white/90 mb-6">
                Join AWISE to get matched with a mentor who can help you apply these resources to your specific venture.
              </p>
              <a
                href="/#join"
                className="inline-block bg-white text-foreground px-8 py-4 rounded-lg hover:bg-white/90 transition font-semibold"
              >
                Join AWISE Community
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


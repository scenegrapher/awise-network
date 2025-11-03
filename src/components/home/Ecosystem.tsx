'use client';

import { motion } from 'framer-motion';
import { Target, Users, MessageSquare, GraduationCap } from 'lucide-react';

const ecosystemItems = [
  {
    icon: Target,
    title: 'Curated Opportunities',
    description:
      'Access vetted funding opportunities, partnerships, and grants specifically curated for African women-led social enterprises.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description:
      'Get matched with experienced mentors who understand your context and can guide you through every stage of your journey.',
  },
  {
    icon: MessageSquare,
    title: 'Storytelling Platform',
    description:
      'Share your impact story, gain visibility, and inspire others while building your personal brand and credibility.',
  },
  {
    icon: GraduationCap,
    title: 'Capacity Building',
    description:
      'Participate in workshops, courses, and training programs designed to build the skills you need to scale your venture.',
  },
];

export default function Ecosystem() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            The AWISE Ecosystem
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Everything you need to transform your idea into lasting social impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral rounded-xl p-6 hover:shadow-lg transition group"
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-text-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


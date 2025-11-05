'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Globe, DollarSign, TrendingUp } from 'lucide-react';

const impactMetrics = [
  { icon: Users, value: '1,247+', label: 'Women Entrepreneurs', color: 'text-accent' },
  { icon: Globe, value: '23', label: 'African Countries', color: 'text-white' },
  { icon: DollarSign, value: '$2.5M+', label: 'Funding Secured', color: 'text-accent' },
  { icon: TrendingUp, value: '500+', label: 'Active Mentorships', color: 'text-white' },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20 md:py-32 relative overflow-hidden">
      {/* Subtle African pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            EMPOWERING AFRICAN WOMEN TO LEAD SOCIAL CHANGE
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Join African women transforming ideas into impact ventures across Africa
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#join"
              className="bg-secondary border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-secondary transition font-semibold text-lg"
            >
              Join AWISE Community
            </Link>
            <Link
              href="/programs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-secondary transition font-semibold text-lg"
            >
              Explore Programs
            </Link>
          </div>

          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
              >
                <metric.icon className={`w-8 h-8 mx-auto mb-3 ${metric.color}`} />
                <div className="font-heading font-bold text-3xl mb-1">{metric.value}</div>
                <div className="text-sm text-white/80">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


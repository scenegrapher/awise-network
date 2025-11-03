'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>
      </div>
    </section>
  );
}


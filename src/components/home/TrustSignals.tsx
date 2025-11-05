'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Globe, Heart } from 'lucide-react';

const partners = [
  { name: 'African Development Bank', logo: 'AfDB' },
  { name: 'UN Women', logo: 'UN Women' },
  { name: 'Mastercard Foundation', logo: 'Mastercard' },
  { name: 'Bill & Melinda Gates Foundation', logo: 'Gates' },
  { name: 'Tony Elumelu Foundation', logo: 'TEF' },
  { name: 'She Leads Africa', logo: 'SLA' },
];

const achievements = [
  {
    icon: Award,
    title: '2024 Social Impact Award',
    description: 'Recognized by African Union',
  },
  {
    icon: Shield,
    title: 'Verified by TrustPilot',
    description: '4.9/5 from 500+ reviews',
  },
  {
    icon: Globe,
    title: 'Featured in Forbes Africa',
    description: 'Top 10 Women Empowerment Platforms',
  },
  {
    icon: Heart,
    title: '98% Success Rate',
    description: 'Members report significant progress',
  },
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* As Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-text-light text-sm uppercase tracking-wider mb-8">
            Trusted By & Featured In
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="text-center p-4 hover:scale-110 transition">
                  <div className="w-24 h-24 bg-neutral rounded-lg flex items-center justify-center mx-auto">
                    <span className="font-heading font-bold text-foreground text-xs">
                      {partner.logo}
                    </span>
                  </div>
                  <p className="text-xs text-text-light mt-2">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                {achievement.title}
              </h3>
              <p className="text-text-light text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


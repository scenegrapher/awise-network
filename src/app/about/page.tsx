'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, TrendingUp, Globe } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Empowerment',
    description: 'We believe in unleashing the potential of every African woman entrepreneur.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Together we rise. We build a supportive ecosystem where women lift each other.',
  },
  {
    icon: TrendingUp,
    title: 'Impact',
    description: 'We measure success by the positive change our members create in their communities.',
  },
  {
    icon: Globe,
    title: 'Pan-African Unity',
    description: "Borders don't limit us. We connect women entrepreneurs across the continent.",
  },
];

const team = [
  {
    name: 'Dr. Amina Okonkwo',
    role: 'Founder & CEO',
    location: 'Lagos, Nigeria',
    bio: 'Social entrepreneur with 15+ years experience in women empowerment programs across Africa.',
  },
  {
    name: 'Sarah Mensah',
    role: 'Director of Programs',
    location: 'Accra, Ghana',
    bio: 'Former World Bank consultant specializing in social enterprise development.',
  },
  {
    name: 'Grace Mwangi',
    role: 'Head of Mentorship',
    location: 'Nairobi, Kenya',
    bio: 'Built 3 successful social enterprises and mentored 200+ women entrepreneurs.',
  },
  {
    name: 'Fatima Ibrahim',
    role: 'Partnerships Lead',
    location: 'Abuja, Nigeria',
    bio: 'Secured $50M+ in funding partnerships for women-led initiatives across Africa.',
  },
];

const milestones = [
  { year: '2020', event: 'AWISE Founded', description: 'Started with 50 women in Lagos' },
  { year: '2021', event: 'Expanded to 5 Countries', description: 'Reached 300+ members' },
  { year: '2022', event: 'First $1M in Funding', description: 'Members secured total funding' },
  { year: '2023', event: '23 Countries, 1000+ Members', description: 'Pan-African presence achieved' },
  { year: '2024', event: 'Impact Award Winner', description: 'Recognized by African Union' },
];

export default function AboutPage() {
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
                About AWISE Network
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                We are the only comprehensive ecosystem for African women in social entrepreneurship
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
                  Our Story
                </h2>
                <div className="prose prose-lg max-w-none text-text-light space-y-4">
                  <p>
                    AWISE Network was born from a simple observation: African women entrepreneurs 
                    face unique challenges that traditional support systems don't address. We saw 
                    brilliant women with world-changing ideas struggling not from lack of passion 
                    or capability, but from lack of access—to mentors who understand their context, 
                    to funding opportunities designed for their reality, and to a community that 
                    believes in their vision.
                  </p>
                  <p>
                    Founded in 2020 in Lagos, Nigeria, AWISE began as a small gathering of 50 women 
                    entrepreneurs who refused to accept the statistics. Today, we've grown into a 
                    pan-African movement spanning 23 countries, empowering over 1,247 women to turn 
                    their social impact ideas into thriving ventures.
                  </p>
                  <p>
                    What makes us different? We're not just another entrepreneurship program. We're 
                    a sisterhood, a movement, and a comprehensive ecosystem built by African women, 
                    for African women. Every program, every resource, every connection is designed 
                    with the lived experiences of African women entrepreneurs at its core.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-neutral">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <Target className="w-16 h-16 text-primary mb-4" />
                <h3 className="font-heading font-bold text-3xl mb-4">Our Mission</h3>
                <p className="text-text-light leading-relaxed">
                  To empower African women social entrepreneurs with the resources, networks, 
                  and support they need to create lasting positive change in their communities 
                  and across the continent.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <Eye className="w-16 h-16 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-3xl mb-4">Our Vision</h3>
                <p className="text-text-light leading-relaxed">
                  A thriving Africa where every woman with a social impact idea has access to 
                  the support, resources, and community needed to transform her vision into reality, 
                  creating ripple effects of positive change across the continent.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                Our Values
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                These principles guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral rounded-xl p-6 text-center hover:shadow-lg transition"
                >
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-light text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
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
                Our Journey
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                From a small gathering to a pan-African movement
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-white text-lg">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 flex-1 shadow-sm">
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-text-light">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
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
                Meet Our Team
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                Led by experienced African women entrepreneurs and change-makers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-accent" />
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-text-light text-xs mb-3">📍 {member.location}</p>
                    <p className="text-text-light text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-secondary to-secondary/80 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
                Join Our Movement
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Be part of the community transforming Africa through women-led social enterprise
              </p>
              <a
                href="/#join"
                className="inline-block bg-white text-secondary px-8 py-4 rounded-lg hover:bg-white/90 transition font-semibold text-lg"
              >
                Become a Member
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  capacity: string;
  image?: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Impact Funding Masterclass',
    date: 'March 15, 2025',
    location: 'Lagos, Nigeria',
    description: 'Learn how to secure funding for your social enterprise from experienced impact investors.',
    capacity: '50 seats available',
  },
  {
    id: 2,
    title: 'Women in Social Enterprise Summit',
    date: 'April 22, 2025',
    location: 'Nairobi, Kenya',
    description: 'A 2-day summit bringing together African women social entrepreneurs, mentors, and investors.',
    capacity: '200 seats available',
  },
  {
    id: 3,
    title: 'Digital Marketing for Impact Workshop',
    date: 'May 10, 2025',
    location: 'Online',
    description: 'Master digital marketing strategies specifically designed for social enterprises.',
    capacity: 'Unlimited',
  },
  {
    id: 4,
    title: 'Pitch Perfect: Investor Readiness',
    date: 'June 5, 2025',
    location: 'Accra, Ghana',
    description: 'Refine your pitch and get ready to present to a panel of real investors.',
    capacity: '30 seats available',
  },
];

const pastEvents: Event[] = [
  {
    id: 5,
    title: 'AWISE Annual Conference 2024',
    date: 'November 10, 2024',
    location: 'Cape Town, South Africa',
    description: 'Our flagship event featuring keynotes, workshops, and networking with 500+ attendees.',
    capacity: '500 attendees',
  },
  {
    id: 6,
    title: 'Impact Measurement Workshop',
    date: 'October 15, 2024',
    location: 'Online',
    description: 'Learn frameworks and tools for measuring and reporting your social impact.',
    capacity: '150 attendees',
  },
  {
    id: 7,
    title: 'Mentorship Matching Event',
    date: 'September 20, 2024',
    location: 'Lagos, Nigeria',
    description: 'Speed networking event connecting entrepreneurs with potential mentors.',
    capacity: '100 attendees',
  },
];

function EventCard({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition ${
        isPast ? 'opacity-75' : ''
      }`}
    >
      <div className={`h-48 ${isPast ? 'bg-text-light/20' : 'bg-gradient-to-br from-primary to-accent'}`} />
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-3">{event.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-text-light">
            <Calendar size={16} />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-text-light">
            <MapPin size={16} />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-text-light">
            <Users size={16} />
            <span className="text-sm">{event.capacity}</span>
          </div>
        </div>
        <p className="text-text-light mb-4 line-clamp-2">{event.description}</p>
        {!isPast ? (
          <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition font-semibold">
            Register
          </button>
        ) : (
          <button className="w-full bg-neutral text-text-light px-6 py-3 rounded-lg cursor-not-allowed font-semibold">
            Event Ended
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
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
                Events & Workshops
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Join our community events, workshops, and conferences designed to accelerate your journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
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
                Upcoming Events
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                Register now for our upcoming programs and connect with the community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
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
                Past Events
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                See what we've accomplished together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


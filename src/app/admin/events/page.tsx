'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  status: 'upcoming' | 'past';
}

export default function AdminEventsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    { id: 1, title: 'Impact Funding Masterclass', date: 'March 15, 2025', location: 'Lagos, Nigeria', status: 'upcoming' },
    { id: 2, title: 'Women in Social Enterprise Summit', date: 'April 22, 2025', location: 'Nairobi, Kenya', status: 'upcoming' },
    { id: 3, title: 'Digital Marketing Workshop', date: 'May 10, 2025', location: 'Online', status: 'upcoming' },
  ]);

  useEffect(() => {
    const auth = localStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-text-light hover:text-primary transition">
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-heading font-bold text-xl">AWISE Admin</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading font-bold text-4xl mb-2">Manage Events</h1>
              <p className="text-text-light">Add, edit, or delete events</p>
            </div>
            <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition font-semibold">
              <Plus size={20} />
              Add Event
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Title</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Date</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Location</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Status</th>
                    <th className="px-6 py-4 text-right font-heading font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-neutral/30 transition">
                      <td className="px-6 py-4 font-medium">{event.title}</td>
                      <td className="px-6 py-4 text-text-light">{event.date}</td>
                      <td className="px-6 py-4 text-text-light">{event.location}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          event.status === 'upcoming' 
                            ? 'bg-secondary/10 text-secondary' 
                            : 'bg-text-light/10 text-text-light'
                        }`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-secondary hover:bg-secondary/10 rounded-lg transition">
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(event.id)}
                            className="p-2 text-primary hover:bg-primary/10 rounded-lg transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


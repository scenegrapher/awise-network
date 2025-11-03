'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Search } from 'lucide-react';

interface Subscriber {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  joinedDate: string;
  receiveUpdates: boolean;
}

export default function AdminSubscribersPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [subscribers] = useState<Subscriber[]>([
    { id: 1, firstName: 'Sarah', lastName: 'Mensah', email: 'sarah@example.com', joinedDate: 'Mar 1, 2025', receiveUpdates: true },
    { id: 2, firstName: 'Amina', lastName: 'Ibrahim', email: 'amina@example.com', joinedDate: 'Feb 28, 2025', receiveUpdates: true },
    { id: 3, firstName: 'Grace', lastName: 'Okafor', email: 'grace@example.com', joinedDate: 'Feb 25, 2025', receiveUpdates: true },
    { id: 4, firstName: 'Fatima', lastName: 'Ndlovu', email: 'fatima@example.com', joinedDate: 'Feb 20, 2025', receiveUpdates: false },
    { id: 5, firstName: 'Zainab', lastName: 'Kamara', email: 'zainab@example.com', joinedDate: 'Feb 18, 2025', receiveUpdates: true },
    { id: 6, firstName: 'Aisha', lastName: 'Mwangi', email: 'aisha@example.com', joinedDate: 'Feb 15, 2025', receiveUpdates: true },
  ]);

  useEffect(() => {
    const auth = localStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const filteredSubscribers = subscribers.filter(sub =>
    sub.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCSV = () => {
    const csvContent = [
      ['First Name', 'Last Name', 'Email', 'Joined Date', 'Receive Updates'],
      ...subscribers.map(sub => [
        sub.firstName,
        sub.lastName,
        sub.email,
        sub.joinedDate,
        sub.receiveUpdates ? 'Yes' : 'No'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'awise-subscribers.csv';
    a.click();
    window.URL.revokeObjectURL(url);
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
              <h1 className="font-heading font-bold text-4xl mb-2">Subscribers</h1>
              <p className="text-text-light">{subscribers.length} total members</p>
            </div>
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition font-semibold"
            >
              <Download size={20} />
              Export CSV
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={20} />
              <input
                type="text"
                placeholder="Search subscribers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Email</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Joined</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Updates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral">
                  {filteredSubscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="hover:bg-neutral/30 transition">
                      <td className="px-6 py-4 font-medium">
                        {subscriber.firstName} {subscriber.lastName}
                      </td>
                      <td className="px-6 py-4 text-text-light">{subscriber.email}</td>
                      <td className="px-6 py-4 text-text-light">{subscriber.joinedDate}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          subscriber.receiveUpdates
                            ? 'bg-secondary/10 text-secondary'
                            : 'bg-text-light/10 text-text-light'
                        }`}>
                          {subscriber.receiveUpdates ? 'Subscribed' : 'Unsubscribed'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredSubscribers.length === 0 && (
              <div className="text-center py-12 text-text-light">
                No subscribers found matching your search.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


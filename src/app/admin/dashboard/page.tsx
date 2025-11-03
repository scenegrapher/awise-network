'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, 
  MessageSquare, 
  Users, 
  FileText, 
  LogOut,
  TrendingUp,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    router.push('/admin/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  const stats = [
    { label: 'Total Members', value: '1,247', icon: Users, color: 'bg-secondary' },
    { label: 'Pending Stories', value: '23', icon: Clock, color: 'bg-primary' },
    { label: 'Events This Month', value: '8', icon: Calendar, color: 'bg-accent' },
    { label: 'Active Programs', value: '3', icon: CheckCircle, color: 'bg-secondary' },
  ];

  const recentActivities = [
    { id: 1, type: 'story', message: 'New story submission from Sarah Mensah', time: '2 hours ago' },
    { id: 2, type: 'member', message: 'New member joined: Amina Ibrahim', time: '4 hours ago' },
    { id: 3, type: 'event', message: 'Event registration: Impact Funding Masterclass', time: '5 hours ago' },
    { id: 4, type: 'story', message: 'Story approved: Grace Okafor', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-heading font-bold text-xl">AWISE Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-text-light hover:text-primary transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-heading font-bold text-4xl mb-2">Dashboard</h1>
          <p className="text-text-light">Welcome back! Here's what's happening today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-3xl font-heading font-bold mb-1">{stat.value}</div>
              <div className="text-text-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-heading font-bold text-2xl mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/admin/events"
                  className="flex items-center gap-4 p-4 bg-neutral rounded-lg hover:bg-neutral/80 transition group"
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold">Manage Events</div>
                    <div className="text-text-light text-sm">Add or edit events</div>
                  </div>
                </Link>

                <Link
                  href="/admin/stories"
                  className="flex items-center gap-4 p-4 bg-neutral rounded-lg hover:bg-neutral/80 transition group"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold">Review Stories</div>
                    <div className="text-text-light text-sm">Approve submissions</div>
                  </div>
                </Link>

                <Link
                  href="/admin/subscribers"
                  className="flex items-center gap-4 p-4 bg-neutral rounded-lg hover:bg-neutral/80 transition group"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold">Subscribers</div>
                    <div className="text-text-light text-sm">Manage member list</div>
                  </div>
                </Link>

                <button className="flex items-center gap-4 p-4 bg-neutral rounded-lg hover:bg-neutral/80 transition group">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold">Export Data</div>
                    <div className="text-text-light text-sm">Download CSV</div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-heading font-bold text-2xl mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-3 pb-4 border-b border-neutral last:border-0 last:pb-0">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm mb-1">{activity.message}</p>
                      <p className="text-xs text-text-light">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


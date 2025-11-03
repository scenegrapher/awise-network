'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, X, Eye } from 'lucide-react';

interface Story {
  id: number;
  name: string;
  venture: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
}

export default function AdminStoriesPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stories, setStories] = useState<Story[]>([
    { id: 1, name: 'Sarah Mensah', venture: 'Clean Water Solutions', status: 'pending', submittedDate: 'Mar 1, 2025' },
    { id: 2, name: 'Amina Ibrahim', venture: 'EduTech Africa', status: 'pending', submittedDate: 'Feb 28, 2025' },
    { id: 3, name: 'Grace Okafor', venture: 'Women Farmers Cooperative', status: 'approved', submittedDate: 'Feb 25, 2025' },
    { id: 4, name: 'Fatima Ndlovu', venture: 'Healthcare Access Initiative', status: 'approved', submittedDate: 'Feb 20, 2025' },
  ]);

  useEffect(() => {
    const auth = localStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleApprove = (id: number) => {
    setStories(stories.map(story => 
      story.id === id ? { ...story, status: 'approved' as const } : story
    ));
  };

  const handleReject = (id: number) => {
    if (confirm('Are you sure you want to reject this story?')) {
      setStories(stories.map(story => 
        story.id === id ? { ...story, status: 'rejected' as const } : story
      ));
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
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2">Review Stories</h1>
            <p className="text-text-light">Approve or reject story submissions</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-heading font-bold text-primary">
                {stories.filter(s => s.status === 'pending').length}
              </div>
              <div className="text-text-light text-sm">Pending Review</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-heading font-bold text-secondary">
                {stories.filter(s => s.status === 'approved').length}
              </div>
              <div className="text-text-light text-sm">Approved</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-heading font-bold text-text-light">
                {stories.filter(s => s.status === 'rejected').length}
              </div>
              <div className="text-text-light text-sm">Rejected</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Venture</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Submitted</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Status</th>
                    <th className="px-6 py-4 text-right font-heading font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral">
                  {stories.map((story) => (
                    <tr key={story.id} className="hover:bg-neutral/30 transition">
                      <td className="px-6 py-4 font-medium">{story.name}</td>
                      <td className="px-6 py-4 text-text-light">{story.venture}</td>
                      <td className="px-6 py-4 text-text-light">{story.submittedDate}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          story.status === 'approved' 
                            ? 'bg-secondary/10 text-secondary' 
                            : story.status === 'pending'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-text-light/10 text-text-light'
                        }`}>
                          {story.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-foreground hover:bg-neutral rounded-lg transition">
                            <Eye size={18} />
                          </button>
                          {story.status === 'pending' && (
                            <>
                              <button 
                                onClick={() => handleApprove(story.id)}
                                className="p-2 text-secondary hover:bg-secondary/10 rounded-lg transition"
                              >
                                <Check size={18} />
                              </button>
                              <button 
                                onClick={() => handleReject(story.id)}
                                className="p-2 text-primary hover:bg-primary/10 rounded-lg transition"
                              >
                                <X size={18} />
                              </button>
                            </>
                          )}
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


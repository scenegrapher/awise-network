'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Upload, Link as LinkIcon } from 'lucide-react';

const storySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  ventureName: z.string().min(2, 'Venture name is required'),
  impactMetrics: z.string().min(10, 'Please describe your impact metrics'),
  story: z.string().min(50, 'Story must be at least 50 characters'),
  videoLink: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
});

type StoryFormData = z.infer<typeof storySchema>;

interface FeaturedStory {
  id: number;
  name: string;
  venture: string;
  impact: string;
  excerpt: string;
  image?: string;
}

const featuredStories: FeaturedStory[] = [
  {
    id: 1,
    name: 'Sarah Mensah',
    venture: 'Clean Water Solutions',
    impact: '10,000+ households served',
    excerpt: 'From a simple idea to serving entire communities with clean water access.',
  },
  {
    id: 2,
    name: 'Amina Ibrahim',
    venture: 'EduTech Africa',
    impact: '15 schools, 5,000+ students',
    excerpt: 'Transforming education through innovative technology solutions.',
  },
  {
    id: 3,
    name: 'Grace Okafor',
    venture: 'Women Farmers Cooperative',
    impact: '200+ women empowered',
    excerpt: 'Building sustainable agricultural communities across Ghana.',
  },
  {
    id: 4,
    name: 'Fatima Ndlovu',
    venture: 'Healthcare Access Initiative',
    impact: '50+ rural clinics supported',
    excerpt: 'Bringing quality healthcare to underserved communities.',
  },
  {
    id: 5,
    name: 'Zainab Kamara',
    venture: 'Youth Skills Academy',
    impact: '1,000+ youth trained',
    excerpt: 'Equipping young people with 21st-century skills for employment.',
  },
  {
    id: 6,
    name: 'Aisha Mwangi',
    venture: 'Renewable Energy Co.',
    impact: '500+ homes powered',
    excerpt: 'Providing affordable solar energy solutions to rural areas.',
  },
];

export default function ShareStoryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<StoryFormData>({
    resolver: zodResolver(storySchema),
  });

  const onSubmit = async (data: StoryFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Story submitted:', data);
    setSubmitted(true);
    reset();
    setPhotoPreview(null);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
                Share Your Impact Story
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Inspire others by sharing your journey as an African woman social entrepreneur
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Form Section */}
        <section className="py-16 md:py-24 bg-neutral">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Tell Us Your Story
                </h2>
                <p className="text-text-light mb-8">
                  Your story can inspire and empower other women. Share your journey, challenges, and achievements.
                </p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-secondary text-white px-6 py-4 rounded-lg mb-6"
                  >
                    🎉 Thank you for sharing your story! We'll review it and get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Jane Doe"
                      />
                      {errors.name && (
                        <p className="text-primary text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="ventureName" className="block text-sm font-semibold mb-2">
                        Venture Name *
                      </label>
                      <input
                        {...register('ventureName')}
                        type="text"
                        id="ventureName"
                        className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Your Social Enterprise"
                      />
                      {errors.ventureName && (
                        <p className="text-primary text-sm mt-1">{errors.ventureName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="impactMetrics" className="block text-sm font-semibold mb-2">
                      Impact Metrics *
                    </label>
                    <textarea
                      {...register('impactMetrics')}
                      id="impactMetrics"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="e.g., 1,000+ people served, 50 jobs created, 20% reduction in poverty..."
                    />
                    {errors.impactMetrics && (
                      <p className="text-primary text-sm mt-1">{errors.impactMetrics.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="story" className="block text-sm font-semibold mb-2">
                      Your Story *
                    </label>
                    <textarea
                      {...register('story')}
                      id="story"
                      rows={8}
                      className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Share your journey: What inspired you? What challenges did you face? How did you overcome them? What impact are you creating?"
                    />
                    {errors.story && (
                      <p className="text-primary text-sm mt-1">{errors.story.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="photo" className="block text-sm font-semibold mb-2">
                      Photo Upload
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 px-6 py-3 bg-neutral rounded-lg cursor-pointer hover:bg-neutral/80 transition">
                        <Upload size={20} />
                        <span>Choose Photo</span>
                        <input
                          type="file"
                          id="photo"
                          accept="image/*"
                          className="hidden"
                          onChange={handlePhotoChange}
                        />
                      </label>
                      {photoPreview && (
                        <div className="w-20 h-20 rounded-lg overflow-hidden">
                          <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="videoLink" className="block text-sm font-semibold mb-2">
                      Video Link (Optional)
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={20} />
                      <input
                        {...register('videoLink')}
                        type="url"
                        id="videoLink"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="https://youtube.com/..."
                      />
                    </div>
                    {errors.videoLink && (
                      <p className="text-primary text-sm mt-1">{errors.videoLink.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Story'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Stories Gallery */}
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
                Featured Stories
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                Meet inspiring women who are creating lasting change in their communities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral rounded-xl overflow-hidden hover:shadow-lg transition group"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-accent" />
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-1">
                      {story.name}
                    </h3>
                    <p className="text-secondary font-medium mb-2">{story.venture}</p>
                    <p className="text-primary font-semibold text-sm mb-3">{story.impact}</p>
                    <p className="text-text-light line-clamp-2">{story.excerpt}</p>
                    <button className="mt-4 text-secondary hover:text-primary font-semibold transition">
                      Read Full Story →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


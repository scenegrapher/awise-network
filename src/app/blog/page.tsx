'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Funding Opportunities for African Women Entrepreneurs in 2025',
    excerpt: 'Discover the latest grants, competitions, and investment opportunities specifically designed for African women-led social enterprises.',
    author: 'Fatima Ibrahim',
    date: 'January 15, 2025',
    category: 'Funding',
    readTime: '5 min read',
    image: 'funding',
  },
  {
    id: 2,
    title: 'Success Story: How Amaka Built a $500K AgriTech Startup in Nigeria',
    excerpt: 'From a small farm in Enugu to serving 10,000+ farmers across Nigeria. Learn how Amaka leveraged AWISE mentorship to scale her venture.',
    author: 'Grace Mwangi',
    date: 'January 12, 2025',
    category: 'Success Stories',
    readTime: '7 min read',
    image: 'success',
  },
  {
    id: 3,
    title: 'Navigating the African Funding Landscape: A Complete Guide',
    excerpt: 'Everything you need to know about securing funding for your social enterprise in Africa, from angel investors to impact funds.',
    author: 'Dr. Amina Okonkwo',
    date: 'January 8, 2025',
    category: 'Guides',
    readTime: '10 min read',
    image: 'guide',
  },
  {
    id: 4,
    title: 'The Power of Mentorship: 5 Ways a Mentor Can Transform Your Venture',
    excerpt: 'Real stories from AWISE members on how mentorship helped them overcome challenges and achieve their goals.',
    author: 'Sarah Mensah',
    date: 'January 5, 2025',
    category: 'Mentorship',
    readTime: '6 min read',
    image: 'mentorship',
  },
  {
    id: 5,
    title: 'Building a Social Enterprise in Africa: Lessons from 50+ Entrepreneurs',
    excerpt: 'Insights, challenges, and success strategies from African women who have built thriving social enterprises.',
    author: 'Grace Mwangi',
    date: 'January 1, 2025',
    category: 'Entrepreneurship',
    readTime: '8 min read',
    image: 'entrepreneurship',
  },
  {
    id: 6,
    title: 'How to Measure Social Impact: Tools and Frameworks for African Entrepreneurs',
    excerpt: 'A practical guide to tracking and reporting your social impact to attract investors and scale your venture.',
    author: 'Dr. Amina Okonkwo',
    date: 'December 28, 2024',
    category: 'Impact',
    readTime: '9 min read',
    image: 'impact',
  },
];

const categories = ['All', 'Funding', 'Success Stories', 'Guides', 'Mentorship', 'Entrepreneurship', 'Impact'];

export default function BlogPage() {
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
                AWISE Blog
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Insights, stories, and resources for African women social entrepreneurs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-neutral border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    category === 'All'
                      ? 'bg-secondary text-white'
                      : 'bg-white text-foreground hover:bg-secondary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral rounded-xl overflow-hidden hover:shadow-xl transition group"
                >
                  {/* Post Image */}
                  <div className={`h-48 bg-gradient-to-br ${
                    post.image === 'funding' ? 'from-secondary to-primary' :
                    post.image === 'success' ? 'from-accent to-primary' :
                    post.image === 'guide' ? 'from-primary to-secondary' :
                    post.image === 'mentorship' ? 'from-secondary to-accent' :
                    post.image === 'entrepreneurship' ? 'from-primary to-accent' :
                    'from-accent to-secondary'
                  } relative`}>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-text-light mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-text-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-light">{post.readTime}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-secondary font-semibold hover:text-primary transition group-hover:gap-3"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition font-semibold">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-secondary to-secondary/80 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Get Weekly Insights
              </h2>
              <p className="text-white/90 mb-8">
                Subscribe to receive the latest funding opportunities, success stories, and resources directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="bg-accent text-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MentorshipPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">
                Free Mentorship Available!
              </h3>
              <p className="text-text-light mb-2">
                Limited to the first <span className="font-bold text-primary">50 signups</span>
              </p>
              <p className="text-text-light mb-6">
                Get matched with an expert mentor who understands your journey and can guide
                you to success.
              </p>
              <div className="space-y-3">
                <Link
                  href="#join"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition font-semibold"
                >
                  Claim My Free Mentorship
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-text-light hover:text-foreground transition"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


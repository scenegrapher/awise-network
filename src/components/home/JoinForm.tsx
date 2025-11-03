'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Facebook, Linkedin } from 'lucide-react';

const joinSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  idea: z.string().optional(),
  receiveUpdates: z.boolean().optional(),
});

type JoinFormData = z.infer<typeof joinSchema>;

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
  });

  const onSubmit = async (data: JoinFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="join" className="py-16 md:py-24 bg-[#8B6F47] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Join the AWISE Community
            </h2>
            <p className="text-white/90 text-lg">
              Connect with thousands of African women transforming their communities
            </p>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary text-white px-6 py-4 rounded-lg mb-6 text-center"
            >
              🎉 Welcome to AWISE! Check your email for next steps.
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register('firstName')}
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {errors.firstName && (
                  <p className="text-accent text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register('lastName')}
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {errors.lastName && (
                  <p className="text-accent text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              {errors.email && (
                <p className="text-accent text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register('idea')}
                placeholder="[Optional] Tell us about your impact idea..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                {...register('receiveUpdates')}
                type="checkbox"
                id="updates"
                className="mt-1 w-4 h-4 rounded border-white"
              />
              <label htmlFor="updates" className="text-sm text-white/90">
                I want to receive updates about programs, events, and opportunities from
                AWISE
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Joining...' : "Join AWISE Community — It's Free!"}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#8B6F47] text-white/80">Or join with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white text-foreground px-6 py-3 rounded-lg hover:bg-neutral transition font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white text-foreground px-6 py-3 rounded-lg hover:bg-neutral transition font-medium"
              >
                <Facebook size={20} />
                Facebook
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setError('');
    // Simulate authentication (replace with real auth)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Simple demo authentication - replace with real authentication
    if (data.email === 'admin@awisenetwork.org' && data.password === 'admin123') {
      // Set authentication cookie/token here
      localStorage.setItem('admin_authenticated', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-md w-full"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <span className="font-heading font-bold text-2xl text-foreground">AWISE Admin</span>
        </div>

        <h1 className="font-heading font-bold text-3xl mb-2 text-center">Welcome Back</h1>
        <p className="text-text-light text-center mb-8">Sign in to access the admin dashboard</p>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/10 text-primary px-4 py-3 rounded-lg mb-6 text-sm"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={20} />
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="admin@awisenetwork.org"
              />
            </div>
            {errors.email && (
              <p className="text-primary text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={20} />
              <input
                {...register('password')}
                type="password"
                id="password"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="text-primary text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-light">
          <p>Demo credentials:</p>
          <p className="font-mono text-xs mt-1">admin@awisenetwork.org / admin123</p>
        </div>
      </motion.div>
    </div>
  );
}


'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">AWISE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/about" className="text-foreground hover:text-primary transition">
            About
          </Link>
          <Link href="/programs" className="text-foreground hover:text-primary transition">
            Programs
          </Link>
          <Link href="/resources" className="text-foreground hover:text-primary transition">
            Resources
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition">
            Blog
          </Link>
          <Link
            href="#join"
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-medium"
          >
            Join Community
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/resources"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#join"
              className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/fundstream_transparent.png"
              alt="fund-stream"
              width={180}
              height={54}
              priority
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#comment-ca-marche" className="text-[#1E3A5F] hover:text-[#00B8A9] font-medium text-base transition-colors duration-200 relative group">
              Fonctionnement
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B8A9] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#formulaire" className="text-[#1E3A5F] hover:text-[#00B8A9] font-medium text-base transition-colors duration-200 relative group">
              Formulaire
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B8A9] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link href="/contact" className="text-[#1E3A5F] hover:text-[#00B8A9] font-medium text-base transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B8A9] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="#formulaire"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#00B8A9] to-[#009688] hover:from-[#009688] hover:to-[#00B8A9] text-white font-semibold px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Démarrer ma demande
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E3A5F] hover:text-[#00B8A9] transition-colors"
            aria-label="Menu mobile"
          >
            {!mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 border-t border-[#E2E8F0] pt-4">
            <a 
              href="#comment-ca-marche" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-[#1E3A5F] hover:text-[#00B8A9] hover:bg-[#F8FAFC] rounded-lg font-medium text-base transition-colors"
            >
              Fonctionnement
            </a>
            <a 
              href="#formulaire" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-[#1E3A5F] hover:text-[#00B8A9] hover:bg-[#F8FAFC] rounded-lg font-medium text-base transition-colors"
            >
              Formulaire
            </a>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-[#1E3A5F] hover:text-[#00B8A9] hover:bg-[#F8FAFC] rounded-lg font-medium text-base transition-colors"
            >
              Contact
            </Link>
            <a
              href="#formulaire"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-[#00B8A9] to-[#009688] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              Démarrer ma demande
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}


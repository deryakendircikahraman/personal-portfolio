'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Admin linkini sadece development modunda veya özel environment variable ile göster
  const showAdmin = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_ADMIN === 'true'

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-slate-800 hover:text-slate-600 transition-colors">
            DK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/resume" className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Resume
            </Link>
            {showAdmin && (
              <Link href="/admin" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Admin
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/resume" 
                className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              {showAdmin && (
                <Link 
                  href="/admin" 
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 
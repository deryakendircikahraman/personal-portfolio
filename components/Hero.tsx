'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Content */}
      <div className="flex-1 space-y-6">
        {/* Enhanced Ribbon Chip */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-slate-50 text-blue-700 rounded-2xl text-sm font-semibold border border-blue-200 shadow-lg backdrop-blur-sm animate-fade-in-down">
          <span className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mr-3 animate-pulse"></span>
          Open to Full-Stack roles · Bay Area or Remote
        </div>

        {/* Enhanced Main Content */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-gradient leading-tight animate-fade-in-up">
            Derya Kendirci
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Full-Stack Software Engineer
          </h2>

          <p className="text-lg lg:text-xl text-slate-600 max-w-4xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            I'm a full stack software engineer who turns messy ideas into simple, fast products for real users. I spent over six years in banking and fintech building C# and .NET with XAML and React applications, designing REST APIs, and working across microservices.
          </p>

          <p className="text-lg lg:text-xl text-slate-600 max-w-4xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.25s'}}>
            These days I'm sharpening Python, React, and TypeScript and I build practical AI features such as retrieval augmented generation search and voice and chat assistants with FastAPI or Node on the backend. I care about clean code, accessible interfaces, performance, and shipping measurable improvements.
          </p>

          <p className="text-base lg:text-lg text-slate-500 max-w-4xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Outside work I solve LeetCode problems in Python, build wooden miniature houses, go camping, and hang out with my parrots.
          </p>
        </div>

        {/* Enhanced CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Link
            href="/Derya_Kendirci_Resume.pdf"
            className="btn-primary group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2">
              View Resume
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link
            href="mailto:deryakendircikahraman@gmail.com"
            className="btn-secondary group"
          >
            <span className="flex items-center gap-2">
              Email Me
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Enhanced Avatar with Real Profile Image or Fallback */}
      <div className="flex-shrink-0 animate-fade-in-right" style={{animationDelay: '0.5s'}}>
        <div className="avatar-ring">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-inner">
            {!imageError ? (
              <Image
                src="/profile.jpg"
                alt="Derya Kendirci - Full-Stack Software Engineer"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-200 to-slate-300 flex items-center justify-center">
                <div className="text-6xl font-bold text-gradient">
                  DK
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 
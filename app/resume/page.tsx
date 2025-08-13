import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download Derya Kendirci\'s resume and professional experience.',
  openGraph: {
    title: 'Resume · Derya Kendirci',
    description: 'Download Derya Kendirci\'s resume and professional experience.',
  },
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Download my resume to learn more about my experience and skills.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Derya Kendirci
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Software Engineer — Full-Stack & AI
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Open to Frontend / Full-Stack roles · Bay Area & Hybrid
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Quick Overview
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Experience</h4>
                    <p className="text-gray-600 dark:text-gray-300">6+ years in software engineering</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Focus Areas</h4>
                    <p className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript, AI/ML</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">San Jose, CA (Open to relocation)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300">Open to new opportunities</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/Derya_Kendirci_Resume.pdf"
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume (PDF)
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Interested in working together? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:derya@example.com"
                className="btn-secondary"
              >
                Email Me
              </Link>
              <Link
                href="https://linkedin.com/in/deryakendirci"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
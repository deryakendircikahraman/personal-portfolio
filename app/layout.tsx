import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s · Derya Kendirci',
    default: 'Derya Kendirci · Software Engineer',
  },
  description: 'Software Engineer — Full-Stack & AI. I design and ship reliable React/Next.js apps and AI-powered features—turning ambiguity into production fast.',
  keywords: ['Software Engineer', 'Full-Stack', 'React', 'Next.js', 'TypeScript', 'AI', 'Machine Learning'],
  authors: [{ name: 'Derya Kendirci' }],
  creator: 'Derya Kendirci',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
    siteName: 'Derya Kendirci',
    title: 'Derya Kendirci · Software Engineer',
    description: 'Software Engineer — Full-Stack & AI. I design and ship reliable React/Next.js apps and AI-powered features.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Derya Kendirci',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Derya Kendirci · Software Engineer',
    description: 'Software Engineer — Full-Stack & AI. I design and ship reliable React/Next.js apps and AI-powered features.',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 
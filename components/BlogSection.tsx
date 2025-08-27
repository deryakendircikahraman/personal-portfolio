'use client'

import { BlogCard } from './BlogCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/lib/blog'
import { getMediumPosts } from '@/lib/medium'

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Medium'dan blog yazılarını çek
        const mediumPosts = await getMediumPosts('deryakendircikahraman')
        
        if (mediumPosts.length > 0) {
          setPosts(mediumPosts.slice(0, 3))
        } else {
          // Fallback: Eğer Medium'dan veri gelmezse örnek veriler
          setPosts([
            {
              slug: "building-ai-powered-apps",
              title: "Building AI-Powered Applications with Next.js",
              date: "2024-03-15",
              summary: "Learn how to integrate OpenAI, Pinecone, and other AI services into your Next.js applications. From RAG systems to voice assistants, discover practical patterns for building intelligent web apps.",
              tags: ["AI", "Next.js", "OpenAI"],
              content: "Sample content for AI-powered applications blog post.",
              externalUrl: "https://medium.com/@deryakendircikahraman/building-ai-powered-applications"
            },
            {
              slug: "nextjs-performance-optimization",
              title: "Next.js Performance Optimization Techniques",
              date: "2024-03-10",
              summary: "Explore advanced techniques for optimizing Next.js applications. From image optimization to code splitting, learn how to achieve Lighthouse scores above 90 and improve Core Web Vitals.",
              tags: ["Next.js", "Performance", "Optimization"],
              content: "Sample content for Next.js performance optimization blog post.",
              externalUrl: "https://medium.com/@deryakendircikahraman/nextjs-performance-optimization"
            },
            {
              slug: "future-of-fullstack-development",
              title: "The Future of Full-Stack Development",
              date: "2024-03-05",
              summary: "Discussing the evolution of full-stack development, from traditional monoliths to modern architectures with AI integration, edge computing, and the rise of developer experience.",
              tags: ["Full-Stack", "AI", "Architecture"],
              content: "Sample content for future of full-stack development blog post.",
              externalUrl: "https://medium.com/@deryakendircikahraman/future-of-fullstack-development"
            }
          ])
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        // Fallback veriler
        setPosts([
          {
            slug: "building-ai-powered-apps",
            title: "Building AI-Powered Applications with Next.js",
            date: "2024-03-15",
            summary: "Learn how to integrate OpenAI, Pinecone, and other AI services into your Next.js applications. From RAG systems to voice assistants, discover practical patterns for building intelligent web apps.",
            tags: ["AI", "Next.js", "OpenAI"],
            content: "Sample content for AI-powered applications blog post.",
            externalUrl: "https://medium.com/@deryakendircikahraman/building-ai-powered-applications"
          },
          {
            slug: "nextjs-performance-optimization",
            title: "Next.js Performance Optimization Techniques",
            date: "2024-03-10",
            summary: "Explore advanced techniques for optimizing Next.js applications. From image optimization to code splitting, learn how to achieve Lighthouse scores above 90 and improve Core Web Vitals.",
            tags: ["Next.js", "Performance", "Optimization"],
            content: "Sample content for Next.js performance optimization blog post.",
            externalUrl: "https://medium.com/@deryakendircikahraman/nextjs-performance-optimization"
          },
          {
            slug: "future-of-fullstack-development",
            title: "The Future of Full-Stack Development",
            date: "2024-03-05",
            summary: "Discussing the evolution of full-stack development, from traditional monoliths to modern architectures with AI integration, edge computing, and the rise of developer experience.",
            tags: ["Full-Stack", "AI", "Architecture"],
            content: "Sample content for future of full-stack development blog post.",
            externalUrl: "https://medium.com/@deryakendircikahraman/future-of-fullstack-development"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gradient animate-fade-in-up">
            Latest Articles
          </h2>
          <div className="divider"></div>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Thoughts on AI, full-stack development, and building better software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 h-full">
                <div className="space-y-4">
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-6 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gradient animate-fade-in-up">
          Latest Articles
        </h2>
        <div className="divider"></div>
        <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Thoughts on AI, full-stack development, and building better software
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <div key={post.slug} className="animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
            <BlogCard 
              title={post.title}
              date={new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              summary={post.summary}
              slug={post.slug}
              externalUrl={post.externalUrl}
            />
          </div>
        ))}
      </div>

      <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          View All Articles
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  )
} 
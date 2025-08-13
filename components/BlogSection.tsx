'use client'

import { BlogCard } from './BlogCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getBlogPosts } from '@/lib/sanity'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  mainImage?: string
  author?: string
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const blogPosts = await getBlogPosts()
        // Take only the first 3 posts for the homepage
        setPosts(blogPosts.slice(0, 3))
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        // Fallback to static data if Sanity is not configured
        setPosts([
          {
            _id: '1',
            title: "Building AI-Powered Applications with Next.js",
            slug: { current: "building-ai-powered-apps" },
            publishedAt: "2024-03-15",
            excerpt: "Learn how to integrate OpenAI, Pinecone, and other AI services into your Next.js applications. From RAG systems to voice assistants, discover practical patterns for building intelligent web apps.",
            author: "Derya Kendirci"
          },
          {
            _id: '2',
            title: "Next.js Performance Optimization Techniques",
            slug: { current: "nextjs-performance-optimization" },
            publishedAt: "2024-03-10",
            excerpt: "Explore advanced techniques for optimizing Next.js applications. From image optimization to code splitting, learn how to achieve Lighthouse scores above 90 and improve Core Web Vitals.",
            author: "Derya Kendirci"
          },
          {
            _id: '3',
            title: "The Future of Full-Stack Development",
            slug: { current: "future-of-fullstack-development" },
            publishedAt: "2024-03-05",
            excerpt: "Discussing the evolution of full-stack development, from traditional monoliths to modern architectures with AI integration, edge computing, and the rise of developer experience.",
            author: "Derya Kendirci"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient animate-fade-in-up">
            Latest Articles
          </h2>
          <div className="divider"></div>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
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
        <h2 className="text-3xl lg:text-4xl font-bold text-gradient animate-fade-in-up">
          Latest Articles
        </h2>
        <div className="divider"></div>
        <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Thoughts on AI, full-stack development, and building better software
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <div key={post._id} className="animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
            <BlogCard 
              title={post.title}
              date={new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              summary={post.excerpt}
              slug={post.slug.current}
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
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  )
} 
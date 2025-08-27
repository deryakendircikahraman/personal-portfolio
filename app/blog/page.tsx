'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/lib/blog'
import { ShareButton } from '@/components/ShareButton'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        // API üzerinden Medium'dan blog yazılarını çek
        const res = await fetch('/api/medium?username=deryakendircikahraman', { cache: 'no-store' })
        const data = await res.json()
        const mediumPosts = data.posts || []
        
        if (mediumPosts.length > 0) {
          setPosts(mediumPosts)
        } else {
          // Fallback veriler
          setPosts([
            {
              slug: "building-ai-powered-apps",
              title: "Building AI-Powered Applications with Next.js",
              date: "2024-03-15",
              summary: "Learn how to integrate OpenAI, Pinecone, and other AI services into your Next.js applications.",
              tags: ["AI", "Next.js", "OpenAI"],
              content: "Sample content for AI-powered applications blog post.",
              externalUrl: "https://medium.com/@deryakendircikahraman/building-ai-powered-applications"
            },
            {
              slug: "nextjs-performance-optimization",
              title: "Next.js Performance Optimization Techniques",
              date: "2024-03-10",
              summary: "Explore advanced techniques for optimizing Next.js applications.",
              tags: ["Next.js", "Performance", "Optimization"],
              content: "Sample content for Next.js performance optimization blog post.",
              externalUrl: "https://medium.com/@deryakendircikahraman/nextjs-performance-optimization"
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
            summary: "Learn how to integrate OpenAI, Pinecone, and other AI services into your Next.js applications.",
            tags: ["AI", "Next.js", "OpenAI"],
            content: "Sample content for AI-powered applications blog post.",
            externalUrl: "https://medium.com/@deryakendircikahraman/building-ai-powered-applications"
          },
          {
            slug: "nextjs-performance-optimization",
            title: "Next.js Performance Optimization Techniques",
            date: "2024-03-10",
            summary: "Explore advanced techniques for optimizing Next.js applications.",
            tags: ["Next.js", "Performance", "Optimization"],
            content: "Sample content for Next.js performance optimization blog post.",
            externalUrl: "https://medium.com/@deryakendircikahraman/nextjs-performance-optimization"
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
      <div className="min-h-screen bg-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Blog</h1>
            <div className="animate-pulse space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-100 h-32 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Thoughts on AI, full-stack development, and building better software
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.author || 'Derya Kendirci'}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  {post.externalUrl ? (
                    <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  ) : (
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  )}
                </h2>

                <p className="text-slate-600 leading-relaxed">
                  {post.summary}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 pt-4">
                  {post.externalUrl ? (
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read on Medium →
                    </a>
                  ) : (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More →
                    </Link>
                  )}
                  <ShareButton slug={post.slug} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 
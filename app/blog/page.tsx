'use client'

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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const blogPosts = await getBlogPosts()
        setPosts(blogPosts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        // Fallback to static data if Sanity is not configured
        setPosts([
          {
            _id: '1',
            title: "Building AI-Powered Applications with Next.js",
            slug: { current: "building-ai-powered-apps" },
            publishedAt: "2024-03-15",
            excerpt: "Learn how to integrate OpenAI, Pinecone, and other AI services into your Next.js applications.",
            author: "Derya Kendirci"
          },
          {
            _id: '2',
            title: "Next.js Performance Optimization Techniques",
            slug: { current: "nextjs-performance-optimization" },
            publishedAt: "2024-03-10",
            excerpt: "Explore advanced techniques for optimizing Next.js applications.",
            author: "Derya Kendirci"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const shareOnLinkedIn = (post: BlogPost) => {
    const url = `${window.location.origin}/blog/${post.slug.current}`
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, '_blank')
  }

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
            <article key={post._id} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug.current}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  <button
                    onClick={() => shareOnLinkedIn(post)}
                    className="text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    Share on LinkedIn
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 
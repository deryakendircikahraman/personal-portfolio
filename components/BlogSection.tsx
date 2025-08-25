import { BlogCard } from './BlogCard'
import Link from 'next/link'
import { getBlogPosts, BlogPost } from '@/lib/blog'

export function BlogSection() {
  // Server-side'da blog yazılarını al
  const posts = getBlogPosts().slice(0, 3)

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
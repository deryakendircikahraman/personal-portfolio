import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'
import { ShareButton } from '@/components/ShareButton'

export default function BlogPage() {
  const posts = getBlogPosts()

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
                  <span>Derya Kendirci</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
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
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
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
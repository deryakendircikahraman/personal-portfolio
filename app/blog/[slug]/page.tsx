import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ShareButton } from '@/components/ShareButton'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const slugs = getAllBlogSlugs()
    return slugs.map((slug: string) => ({
      slug: slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post
  try {
    post = getBlogPost(params.slug)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <article className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
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

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {post.title}
              </h1>

              {post.summary && (
                <p className="text-xl text-slate-600 leading-relaxed">
                  {post.summary}
                </p>
              )}

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
            </div>
          </header>

          {/* Featured Image */}
          {post.cover && (
            <div className="mb-12">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content ? (
              <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            ) : (
              <div className="text-slate-700 leading-relaxed space-y-6">
                <p>
                  This is a sample blog post content. When you add MDX files to your content/blog folder, 
                  the actual content will be fetched and displayed here.
                </p>
                <p>
                  You can write your blog posts using Markdown/MDX format, which provides a 
                  simple and powerful way to create rich content.
                </p>
                <p>
                  The content will be automatically fetched and displayed on your portfolio 
                  without needing to redeploy your website.
                </p>
              </div>
            )}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <span className="text-slate-600 font-medium">Share this post:</span>
              <ShareButton slug={params.slug} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 
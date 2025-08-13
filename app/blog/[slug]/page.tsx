import { getBlogPost, getAllBlogSlugs } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllBlogSlugs()
    return slugs.map((post: { slug: string }) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post
  try {
    post = await getBlogPost(params.slug)
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

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.mainImage && (
            <div className="mb-12">
              <img
                src={post.mainImage}
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.body ? (
              <div className="text-slate-700 leading-relaxed">
                {/* This would render the Sanity Portable Text content */}
                <p>Content from Sanity CMS would be rendered here.</p>
                <p>For now, this is a placeholder. When you set up Sanity Studio, the actual content will appear here.</p>
              </div>
            ) : (
              <div className="text-slate-700 leading-relaxed space-y-6">
                <p>
                  This is a sample blog post content. When you connect your Sanity CMS, 
                  the actual content will be fetched and displayed here.
                </p>
                <p>
                  You can write your blog posts using Sanity Studio, which provides a 
                  user-friendly interface for content management.
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
              <button
                onClick={() => {
                  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`
                  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
                  window.open(linkedInUrl, '_blank')
                }}
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                Share on LinkedIn
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 
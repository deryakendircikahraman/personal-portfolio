import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/blog'

export async function GET() {
  const posts = await getBlogPosts()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Derya Kendirci - Blog</title>
  <description>Thoughts on software engineering, AI, and building products that matter.</description>
  <link>${baseUrl}</link>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
  <language>en-US</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${posts
    .map(
      (post) => `
  <item>
    <guid>${baseUrl}/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${baseUrl}/blog/${post.slug}</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`
    )
    .join('')}
</channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 
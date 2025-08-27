import { BlogPost } from './blog'

interface MediumPost {
  title: string
  link: string
  pubDate: string
  content: string
  categories: string[]
  author: string
}

export async function getMediumPosts(username: string): Promise<BlogPost[]> {
  try {
    // Medium RSS feed URL'i
    const rssUrl = `https://medium.com/feed/@${username}`
    
    console.log('Fetching Medium RSS feed:', rssUrl)
    
    // RSS feed'i fetch et
    const response = await fetch(rssUrl)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const xmlText = await response.text()
    console.log('RSS feed fetched successfully, length:', xmlText.length)
    
    // XML'i parse et (basit regex ile)
    const posts = parseRSSFeed(xmlText)
    console.log('Parsed posts:', posts.length)
    
    // BlogPost formatına dönüştür
    return posts.map(post => ({
      slug: generateSlug(post.title),
      title: post.title,
      date: new Date(post.pubDate).toISOString().split('T')[0],
      summary: extractSummary(post.content),
      tags: post.categories || [],
      content: post.content,
      externalUrl: post.link,
      author: post.author
    }))
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return []
  }
}

function parseRSSFeed(xmlText: string): MediumPost[] {
  const posts: MediumPost[] = []
  
  // Basit regex ile RSS parse et
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match
  
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemContent = match[1]
    
    const rawTitle = extractTag(itemContent, 'title')
    const rawLink = extractTag(itemContent, 'link')
    const rawPubDate = extractTag(itemContent, 'pubDate')
    const rawContent = extractTag(itemContent, 'content:encoded') || extractTag(itemContent, 'description')
    const rawAuthor = extractTag(itemContent, 'dc:creator') || extractTag(itemContent, 'author')
    
    // Categories/tags çıkar
    const categories: string[] = []
    const categoryRegex = /<category[^>]*>([\s\S]*?)<\/category>/g
    let categoryMatch
    while ((categoryMatch = categoryRegex.exec(itemContent)) !== null) {
      categories.push(stripCdata(decodeXMLEntities(categoryMatch[1])).trim())
    }
    
    const title = stripCdata(decodeXMLEntities(rawTitle))
    const link = stripCdata(decodeXMLEntities(rawLink))
    const pubDate = stripCdata(decodeXMLEntities(rawPubDate))
    const content = stripCdata(decodeXMLEntities(rawContent))
    const author = stripCdata(decodeXMLEntities(rawAuthor))

    if (title && link) {
      posts.push({
        title,
        link,
        pubDate,
        content,
        categories,
        author
      })
    }
  }
  
  return posts
}

function extractTag(content: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i')
  const match = content.match(regex)
  return match ? match[1].trim() : ''
}

function stripCdata(value: string): string {
  if (!value) return value
  // Remove CDATA wrappers and collapse whitespace
  return value
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .trim()
}

function decodeXMLEntities(text: string): string {
  if (!text) return text
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
}

function extractSummary(content: string): string {
  // HTML tag'lerini kaldır
  const textContent = (content || '').replace(/<[^>]*>/g, '')
  
  // İlk 200 karakteri al ve cümle sonunda kes
  const summary = textContent.substring(0, 200)
  const lastPeriod = summary.lastIndexOf('.')
  
  return lastPeriod > 0 ? summary.substring(0, lastPeriod + 1) : summary + (textContent.length > 200 ? '...' : '')
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
} 
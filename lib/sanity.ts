import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-08-13', // Use today's date
  useCdn: false, // Set to false for development
  token: process.env.SANITY_API_TOKEN, // Only needed for mutations
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Blog post query
export async function getBlogPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImage": mainImage.asset->url,
    "author": author->name
  }`
  
  return await client.fetch(query)
}

// Single blog post query
export async function getBlogPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body,
    excerpt,
    "mainImage": mainImage.asset->url,
    "author": author->name
  }`
  
  return await client.fetch(query, { slug })
}

// All blog post slugs
export async function getAllBlogSlugs() {
  const query = `*[_type == "post"] {
    "slug": slug.current
  }`
  
  return await client.fetch(query)
} 
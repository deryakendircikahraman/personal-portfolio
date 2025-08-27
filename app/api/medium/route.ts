import { NextResponse } from 'next/server'
import { getMediumPosts } from '@/lib/medium'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username') || 'deryakendircikahraman'
    const posts = await getMediumPosts(username)
    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json({ posts: [], error: 'Failed to fetch Medium posts' }, { status: 500 })
  }
} 
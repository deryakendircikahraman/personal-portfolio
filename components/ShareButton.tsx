'use client'

interface ShareButtonProps {
  slug: string
}

export function ShareButton({ slug }: ShareButtonProps) {
  const shareOnLinkedIn = () => {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${slug}`
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, '_blank')
  }

  return (
    <button
      onClick={shareOnLinkedIn}
      className="text-slate-500 hover:text-blue-600 transition-colors"
    >
      Share on LinkedIn
    </button>
  )
} 
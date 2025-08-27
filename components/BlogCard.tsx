import Link from 'next/link'

interface BlogCardProps {
  title: string
  date: string
  summary: string
  slug: string
  externalUrl?: string
}

export function BlogCard({ title, date, summary, slug, externalUrl }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full flex flex-col">
      <div className="space-y-3 flex-1">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-700 leading-relaxed flex-1 line-clamp-3">
          {summary}
        </p>

        {/* Read More Link */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          {externalUrl ? (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors group"
            >
              Read on Medium
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors group"
            >
              Read More
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 
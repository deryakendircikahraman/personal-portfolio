import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  problem: string
  built: string
  impact: string
  tech: string
  links: {
    demo?: string
    code?: string
    writeup?: string
  }
  category?: string
  featured?: boolean
}

export function CaseStudyCard({ title, problem, built, impact, tech, links, category, featured }: CaseStudyCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 h-full flex flex-col relative overflow-hidden">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </span>
        </div>
      )}

      {/* Category Badge */}
      {category && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            {category}
          </span>
        </div>
      )}

      <div className="space-y-6 flex-1">
        {/* Enhanced Header */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>
        
        <div className="space-y-6 flex-1">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Problem
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {problem}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Built
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {built}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Impact
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {impact}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {tech.split(', ').slice(0, 4).map((techItem, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                >
                  {techItem}
                </span>
              ))}
              {tech.split(', ').length > 4 && (
                <span className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">
                  +{tech.split(', ').length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Links */}
        <div className="pt-6 border-t border-slate-100 mt-auto">
          <div className="flex flex-wrap gap-3">
            {links.demo && (
              <Link
                href={links.demo}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </Link>
            )}
            {links.code && (
              <Link
                href={links.code}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Code
              </Link>
            )}
            {links.writeup && (
              <Link
                href={links.writeup}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Case Study
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
    </div>
  )
} 
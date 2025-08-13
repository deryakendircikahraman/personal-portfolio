import Link from 'next/link'

export function ContactStrip() {
  return (
    <div className="text-center space-y-6">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-4xl font-bold text-white animate-fade-in-up">
          Hiring? Let's talk.
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Ready to bring my expertise to your next project
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <Link
          href="mailto:deryakendircikahraman@gmail.com"
          className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 hover:shadow-xl hover:-translate-y-1 transform active:scale-95"
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </span>
        </Link>
        <Link
          href="/Derya_Kendirci_Resume.pdf"
          className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 hover:shadow-xl hover:-translate-y-1 transform active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </span>
        </Link>
      </div>
    </div>
  )
} 
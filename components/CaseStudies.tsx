import { CaseStudyCard } from './CaseStudyCard'

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Backspace Coding Agent",
      problem: "Developers need a way to quickly generate GitHub PRs from natural language descriptions without manual coding.",
      built: "Next.js + TypeScript agent that turns natural-language prompts into GitHub PRs with real-time SSE status updates.",
      impact: "Reduces development time by converting ideas to production-ready code through intelligent prompt processing.",
      tech: "Next.js, TypeScript, Server-Sent Events (SSE), GitHub API, Natural Language Processing",
      links: {
        code: "https://github.com/deryakendircikahraman/backspace-coding-agent",
        demo: "#"
      },
      category: "AI/ML",
      featured: true
    },
    {
      title: "Aven AI Support Assistant",
      problem: "Customer support teams need intelligent, voice-enabled assistance to handle queries efficiently and provide accurate responses.",
      built: "RAG + voice assistant (Vapi, OpenAI, Pinecone) with chat interface and comprehensive evaluations system.",
      impact: "Improves customer support efficiency with AI-powered responses and voice interaction capabilities.",
      tech: "Vapi, OpenAI, Pinecone, RAG, Voice AI, Chat Interface, Evaluation System",
      links: {
        code: "https://github.com/deryakendircikahraman/aven-ai-support",
        demo: "#"
      },
      category: "AI/ML",
      featured: true
    },
    {
      title: "SoloSprint",
      problem: "Individuals need a structured way to break down focus goals into actionable tasks with AI-powered insights.",
      built: "Clean Next.js/Tailwind MVP that transforms focus goals into GPT-powered task breakdowns with reflection capabilities.",
      impact: "Enables better goal achievement through intelligent task decomposition and progress tracking.",
      tech: "Next.js, Tailwind CSS, GPT API, Task Management, Goal Tracking, Reflection System",
      links: {
        code: "https://github.com/deryakendircikahraman/solosprint",
        demo: "#"
      },
      category: "Productivity",
      featured: false
    }
  ]

  return (
    <div className="text-center space-y-12">
      <div className="space-y-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-gradient animate-fade-in-up">
          Featured Projects
        </h2>
        <div className="divider"></div>
        <p className="text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Recent projects showcasing my expertise in AI, full-stack development, and product engineering
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {caseStudies.map((study, index) => (
          <div key={study.title} className="animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
            <CaseStudyCard 
              title={study.title}
              problem={study.problem}
              built={study.built}
              impact={study.impact}
              tech={study.tech}
              links={study.links}
              category={study.category}
              featured={study.featured}
            />
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          View All Projects
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  )
} 
import { Metadata } from 'next'
import { CaseStudyCard } from '@/components/CaseStudyCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my recent projects and case studies showcasing my work in software engineering and AI.',
  openGraph: {
    title: 'Projects · Derya Kendirci',
    description: 'A collection of my recent projects and case studies showcasing my work in software engineering and AI.',
  },
}

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Backspace Coding Agent',
      problem: 'Turn natural-language requests into actionable PRs.',
      built: 'Streaming agent that proposes diffs and opens PRs with status updates.',
      impact: 'Automates repetitive PR workflows in demo scenarios; clearer review loops.',
      tech: 'Next.js, TypeScript, GitHub API, SSE',
      links: {
        demo: '#',
        code: '#',
        writeup: '#'
      },
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Aven AI Support Assistant',
      problem: 'Instant answers across docs via chat/voice.',
      built: 'RAG pipeline (embeddings, sectioned docs) + voice/chat UI with guardrails.',
      impact: 'Faster answer discovery; demo-ready scripted flows.',
      tech: 'React, Next.js, OpenAI, Vapi, Pinecone',
      links: {
        demo: '#',
        code: '#',
        writeup: '#'
      },
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Petti',
      problem: 'Track pet routines with clean mobile UX.',
      built: 'Component-based UIKit, SwiftData persistence, routine analytics.',
      impact: 'Mentor-reviewed flow; modular architecture for iteration speed.',
      tech: 'Swift, SwiftData, UIKit (MVVM)',
      links: {
        demo: '#',
        code: '#',
        writeup: '#'
      },
      category: 'Mobile',
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient animate-fade-in-up">
              Projects
            </h1>
            <div className="divider"></div>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              A collection of my recent projects and case studies showcasing my work in software engineering and AI.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
            <div className="text-center space-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-blue-600">{projects.length}</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Projects</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Years</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Highlighted projects that demonstrate my expertise in AI, full-stack development, and mobile applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up" 
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
              >
                <CaseStudyCard
                  title={project.title}
                  problem={project.problem}
                  built={project.built}
                  impact={project.impact}
                  tech={project.tech}
                  links={project.links}
                  category={project.category}
                  featured={project.featured}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 space-y-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:deryakendircikahraman@gmail.com"
                className="btn-primary"
              >
                Get in Touch
              </a>
              <a
                href="/resume"
                className="btn-secondary"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
export function ExperienceTimeline() {
  const experiences = [
    {
      period: "2023 - Present",
      title: "Software Engineer",
      company: "Fintech & AI Projects",
      description: "Building AI-powered applications and full-stack solutions with focus on reliability, accessibility, and performance. Specializing in React/Next.js, TypeScript, and AI integration.",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "OpenAI", "Pinecone", "Vapi"]
    },
    {
      period: "2018 - 2023",
      title: "Software Engineer",
      company: "Banking Sector (Multiple Banks)",
      description: "6+ years in fintech developing reliable, accessible, and high-performance applications. Focused on building robust systems that handle critical financial operations.",
      tech: ["React", "TypeScript", "Node.js", "Python", "SQL", "Docker", "AWS", "CI/CD"]
    }
  ]

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python",
    "OpenAI", "Pinecone", "Vapi", "RAG", "Voice AI",
    "Docker", "AWS", "GitHub Actions", "Jest", "Cypress",
    "Accessibility (a11y)", "Performance Optimization", "System Design"
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gradient animate-fade-in-up">
          Experience
        </h2>
        <div className="divider"></div>
        <p className="text-base lg:text-lg text-slate-600 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          6+ years building reliable, accessible, and high-performance applications in fintech
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 to-slate-500"></div>
            
            <div className="flex items-start space-x-6">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.title}
                    </h3>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-slate-700">
                    {exp.company}
                  </p>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="text-center space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <h3 className="text-lg font-bold text-slate-900">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-xl text-sm font-semibold shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 
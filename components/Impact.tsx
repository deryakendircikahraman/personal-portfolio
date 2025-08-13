export function Impact() {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gradient animate-fade-in-up">
          Impact
        </h2>
        <div className="divider"></div>
        <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Here's what I deliver consistently in my work
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
        <div className="text-left space-y-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-blue-700 font-bold text-base">1</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Production-Ready Development
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Ship production features in <strong className="text-slate-900">React/Next.js + TypeScript</strong>; reduce idea-to-release time with a reusable component system and CI.
              </p>
            </div>
          </div>
        </div>

        <div className="text-left space-y-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-indigo-700 font-bold text-base">2</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                AI-Powered Solutions
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Build <strong className="text-slate-900">LLM/RAG</strong> and <strong className="text-slate-900">voice assistants</strong> (OpenAI, Pinecone, Vapi) that improve self-serve support and resolution speed.
              </p>
            </div>
          </div>
        </div>

        <div className="text-left space-y-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-sky-700 font-bold text-base">3</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                End-to-End Ownership
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Own end-to-end delivery—<strong className="text-slate-900">UX, API contracts, data models</strong>—and deploy on <strong className="text-slate-900">Vercel/Docker</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
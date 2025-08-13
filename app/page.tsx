import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { CaseStudies } from '@/components/CaseStudies'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { ContactStrip } from '@/components/ContactStrip'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BlogSection } from '@/components/BlogSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Hero />
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <Skills />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <CaseStudies />
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <BlogSection />
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ExperienceTimeline />
        </div>
      </section>

      {/* Contact Strip */}
      <section className="section-padding bg-gradient-to-br from-blue-700 via-slate-700 to-blue-800">
        <div className="container-custom">
          <ContactStrip />
        </div>
      </section>

      <Footer />
    </main>
  )
} 
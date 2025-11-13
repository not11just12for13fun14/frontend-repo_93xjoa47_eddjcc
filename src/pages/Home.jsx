import Hero from '../components/Hero'
import { AboutPreview, Services, ValueProposition } from '../components/Sections'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <Services />
      <ValueProposition />
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 text-center">
        <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9C7A3E] text-white hover:bg-[#8b6c36] text-lg">Request a Consultation</a>
      </section>
    </div>
  )
}

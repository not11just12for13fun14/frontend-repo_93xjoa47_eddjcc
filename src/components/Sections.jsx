import { Shield, Scale, Landmark } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#111]">An independent boutique law firm in the heart of Milan</h2>
        <p className="mt-5 text-gray-700 leading-relaxed">
          We assist families, entrepreneurs and private clients in matters of family law, successions and wealth protection. Our approach is rigorous yet human: we listen carefully, act strategically and protect your interests with discretion.
        </p>
        <a href="/about" className="inline-block mt-6 px-5 py-3 border border-gray-300 hover:border-gray-400">About the Firm</a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#F7F7F5] p-6">
          <Shield className="text-[#9C7A3E]"/>
          <div className="font-semibold mt-3">Confidential</div>
          <p className="text-sm text-gray-600 mt-1">Absolute discretion and professional ethics.</p>
        </div>
        <div className="bg-[#F7F7F5] p-6">
          <Scale className="text-[#9C7A3E]"/>
          <div className="font-semibold mt-3">Strategic</div>
          <p className="text-sm text-gray-600 mt-1">Tailored strategy and clear guidance.</p>
        </div>
        <div className="bg-[#F7F7F5] p-6">
          <Landmark className="text-[#9C7A3E]"/>
          <div className="font-semibold mt-3">Experienced</div>
          <p className="text-sm text-gray-600 mt-1">Focused practice with consistent results.</p>
        </div>
        <div className="bg-[#F7F7F5] p-6">
          <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#9C7A3E]"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
          <div className="font-semibold mt-3">Client-centered</div>
          <p className="text-sm text-gray-600 mt-1">Availability, clarity and respect for your time.</p>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    {
      title: 'Family Law',
      copy: 'Separation and divorce, custody, agreements, protection of minors and family mediation. Clear, practical assistance for complex personal decisions.',
      href: '/practice-areas#family-law'
    },
    {
      title: 'Successions & Inheritance',
      copy: 'Estate planning, probate disputes, will challenges and asset division. We protect family harmony and property rights with steady guidance.',
      href: '/practice-areas#inheritance'
    },
    {
      title: 'Wealth & Asset Protection',
      copy: 'Trusts, asset shielding, family patrimony planning and risk mitigation for entrepreneurs and families.',
      href: '/practice-areas#wealth'
    }
  ]
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
      <h2 className="font-serif text-3xl md:text-4xl text-[#111]">Areas of Focus</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((it) => (
          <a key={it.title} href={it.href} className="group border border-gray-200 hover:border-gray-300 p-6 flex flex-col justify-between">
            <div>
              <div className="text-[#9C7A3E] uppercase tracking-[0.2em] text-xs">Practice</div>
              <div className="font-serif text-2xl mt-2 text-[#111]">{it.title}</div>
              <p className="text-gray-700 mt-3">{it.copy}</p>
            </div>
            <div className="mt-6 text-sm text-gray-600 group-hover:text-[#9C7A3E]">Learn more →</div>
          </a>
        ))}
      </div>
    </section>
  )
}

export function ValueProposition() {
  return (
    <section className="bg-[#0f0f0f] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <h2 className="font-serif text-3xl md:text-4xl text-white">A precise method, tailored to you</h2>
          <p className="mt-4 text-gray-300">Transparent communication, strategic planning and measured execution. We keep you informed at every step.</p>
          <a href="/method" className="inline-block mt-6 px-5 py-3 bg-white text-[#0f0f0f] hover:opacity-90">Our Method</a>
        </div>
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-6 border border-white/10">
            <div className="font-semibold text-white">Clarity first</div>
            <p className="text-sm text-gray-300 mt-2">We translate law into clear options so you can decide with confidence.</p>
          </div>
          <div className="bg-white/5 p-6 border border-white/10">
            <div className="font-semibold text-white">Discretion</div>
            <p className="text-sm text-gray-300 mt-2">Your privacy is strictly protected at all times.</p>
          </div>
          <div className="bg-white/5 p-6 border border-white/10">
            <div className="font-semibold text-white">Resolution-driven</div>
            <p className="text-sm text-gray-300 mt-2">Practical solutions to avoid unnecessary conflict and cost.</p>
          </div>
          <div className="bg-white/5 p-6 border border-white/10">
            <div className="font-semibold text-white">Premium service</div>
            <p className="text-sm text-gray-300 mt-2">Limited caseload for attentive counsel and timely responses.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-36 relative">
        <p className="uppercase text-xs tracking-[0.25em] text-gray-500">Milan · Boutique Law Firm</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#0F0F0F] mt-4">
          TRONCA LEGAL – Protection, Clarity and Strategy at Your Side
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Family Law, Inheritance Law and Asset Protection in Milan.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/contact" className="px-6 py-3 bg-[#9C7A3E] text-white hover:bg-[#8b6c36] transition-colors">Request a Consultation</a>
          <a href="#services" className="px-6 py-3 border border-gray-300 hover:border-gray-400 transition-colors">Explore Services</a>
        </div>
      </div>
    </section>
  )
}

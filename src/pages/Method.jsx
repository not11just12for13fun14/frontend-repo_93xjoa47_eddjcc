export default function Method() {
  const steps = [
    { title: '1. Initial Consultation', text: 'We listen carefully, clarify objectives and outline options with transparent fees.' },
    { title: '2. Strategy & Planning', text: 'We define a tailored legal strategy, balancing firmness and pragmatism.' },
    { title: '3. Execution', text: 'We act with precision in negotiations or litigation, keeping you informed at each step.' },
    { title: '4. Resolution & Follow‑up', text: 'We aim for durable outcomes and remain available for ongoing counsel.' }
  ]
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
      <h1 className="font-serif text-4xl text-[#111]">Our Method</h1>
      <p className="mt-6 text-gray-700">A clear, reassuring process that combines strategy and transparency.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {steps.map(s => (
          <div key={s.title} className="border border-gray-200 p-6">
            <div className="font-semibold">{s.title}</div>
            <p className="text-gray-700 mt-2">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
      <h1 className="font-serif text-4xl text-[#111]">About Us</h1>
      <p className="mt-6 text-gray-700 leading-relaxed">
        TRONCA LEGAL is an independent boutique law firm based in Milan. We focus on Family Law, Successions & Inheritance and Wealth & Asset Protection. Our work combines technical precision with a clear, human approach. We believe that clients deserve clarity, strategy and confidentiality at every stage.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="bg-[#F7F7F5] p-6">
          <div className="font-semibold">History & Values</div>
          <p className="text-gray-700 mt-2">Founded to offer a premium, attentive service, the firm maintains a limited caseload to ensure availability and quality. We value discretion, clarity and respect for your time.</p>
        </div>
        <div className="bg-[#F7F7F5] p-6">
          <div className="font-semibold">Attorney Tronca</div>
          <p className="text-gray-700 mt-2">Profile information and qualifications will be added by the firm. This section presents the attorney’s background, areas of focus and professional memberships without exaggeration or unsupported claims.</p>
        </div>
      </div>
    </section>
  )
}

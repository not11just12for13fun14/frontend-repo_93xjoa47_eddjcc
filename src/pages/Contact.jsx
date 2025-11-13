import { useState } from 'react'
import { Phone, Mail, MapPin, Calendar } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      source_page: 'contact'
    }
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ ok: true, msg: 'Thank you. We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="font-serif text-4xl text-[#111]">Contact</h1>
        <p className="mt-4 text-gray-700">Book your appointment. Discretion and confidentiality are guaranteed.</p>
        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2"><Phone size={16}/> +39 000 000 0000</div>
          <div className="flex items-center gap-2"><Mail size={16}/> info@troncalegal.com</div>
          <div className="flex items-center gap-2"><MapPin size={16}/> Via [Address], 20100 Milan</div>
          <div className="flex items-center gap-2"><Calendar size={16}/> Mon–Fri 9:00–18:00 (by appointment)</div>
        </div>
        <div className="mt-10">
          <iframe title="Milan Map" className="w-full h-72 border" src="https://www.google.com/maps?q=Milan%2C%20Italy&z=13&output=embed" loading="lazy"></iframe>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-[#F7F7F5] p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700">Full Name</label>
            <input name="name" required className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input name="email" type="email" required className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-700">Phone</label>
            <input name="phone" className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-700">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white" />
          </div>
        </div>
        <button disabled={loading} className="mt-4 w-full px-5 py-3 bg-[#9C7A3E] text-white hover:bg-[#8b6c36] disabled:opacity-60">{loading ? 'Sending…' : 'Book Your Appointment'}</button>
        {status && (
          <div className={`mt-3 text-sm ${status.ok ? 'text-green-700' : 'text-red-700'}`}>{status.msg}</div>
        )}
      </form>
    </section>
  )
}

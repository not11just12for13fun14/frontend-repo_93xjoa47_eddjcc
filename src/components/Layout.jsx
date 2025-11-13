import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 text-sm tracking-wide transition-colors ${isActive ? 'text-[#9C7A3E]' : 'text-gray-700 hover:text-gray-900'}`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-2 bg-[#111111] text-gray-200 text-sm">
        <div className="uppercase tracking-[0.15em] text-gray-300">Boutique Law Firm – Milan</div>
        <div className="flex items-center gap-6">
          <a href="tel:+390000000000" className="flex items-center gap-2 hover:text-white"><Phone size={16}/> +39 000 000 0000</a>
          <a href="mailto:info@troncalegal.com" className="flex items-center gap-2 hover:text-white"><Mail size={16}/> info@troncalegal.com</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-wide text-[#1A1A1A]">
            <span className="font-semibold">TRONCA</span> <span className="text-gray-600">LEGAL</span>
          </Link>
          <nav className="hidden md:flex items-center gap-3">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About Us" />
            <NavItem to="/practice-areas" label="Practice Areas" />
            <NavItem to="/method" label="Our Method" />
            <NavItem to="/contact" label="Contact" />
            <Link to="/contact" className="ml-2 inline-flex items-center px-4 py-2 text-sm bg-[#9C7A3E] text-white hover:bg-[#8b6c36] transition-colors">Request a Consultation</Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-2 bg-white">
            <div className="grid gap-2">
              <NavItem to="/" label="Home" />
              <NavItem to="/about" label="About Us" />
              <NavItem to="/practice-areas" label="Practice Areas" />
              <NavItem to="/method" label="Our Method" />
              <NavItem to="/contact" label="Contact" />
            </div>
            <Link to="/contact" className="block w-full text-center mt-2 px-4 py-2 text-sm bg-[#9C7A3E] text-white hover:bg-[#8b6c36]">Request a Consultation</Link>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-100 bg-[#0f0f0f] text-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-serif text-2xl mb-4 text-white"><span className="font-semibold">TRONCA</span> LEGAL</div>
            <p className="text-sm leading-relaxed text-gray-400">Boutique law firm in Milan specialised in Family Law, Successions and Wealth Protection. Discreet, strategic, client-centered counsel.</p>
          </div>
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-gray-400 mb-3">Studio</div>
            <ul className="space-y-2 text-sm">
              <li>Via [Address], 20100 Milano</li>
              <li>Mon–Fri 9:00–18:00 (by appointment)</li>
              <li><a href="tel:+390000000000" className="hover:text-white">+39 000 000 0000</a></li>
              <li><a href="mailto:info@troncalegal.com" className="hover:text-white">info@troncalegal.com</a></li>
            </ul>
          </div>
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-gray-400 mb-3">Navigation</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/practice-areas" className="hover:text-white">Practice Areas</Link></li>
              <li><Link to="/method" className="hover:text-white">Our Method</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 text-xs text-gray-400 flex items-center justify-between">
            <span>© {new Date().getFullYear()} TRONCA LEGAL – All rights reserved.</span>
            <span>Privacy • Cookies • Legal</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="font-display font-black text-navy-950 text-sm leading-none">K</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Klub<span className="text-accent">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="/#graphics" className="text-sm text-gray-400 hover:text-white transition-colors">Graphics</a>
            <a href="/#sports" className="text-sm text-gray-400 hover:text-white transition-colors">Sports</a>
            <a href="/#backstory" className="text-sm text-gray-400 hover:text-white transition-colors">Backstory</a>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="btn-primary text-sm px-5 py-2">
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-navy-800 py-4 space-y-1">
            <a href="/#features" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-400 hover:text-white px-2 py-2 rounded-lg hover:bg-navy-800 transition-colors">Features</a>
            <a href="/#graphics" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-400 hover:text-white px-2 py-2 rounded-lg hover:bg-navy-800 transition-colors">Graphics</a>
            <a href="/#sports" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-400 hover:text-white px-2 py-2 rounded-lg hover:bg-navy-800 transition-colors">Sports</a>
            <a href="/#backstory" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-400 hover:text-white px-2 py-2 rounded-lg hover:bg-navy-800 transition-colors">Backstory</a>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-400 hover:text-white px-2 py-2 rounded-lg hover:bg-navy-800 transition-colors">Contact</Link>
            <div className="pt-2">
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-primary text-sm w-full">
                Get started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

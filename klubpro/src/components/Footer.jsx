import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-display font-black text-navy-950 text-sm leading-none">K</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Klub<span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              The operating system for grassroots sport. Taking sports clubs to the next level.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="/#features" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a></li>
              <li><a href="/#sports" className="text-sm text-gray-500 hover:text-white transition-colors">Supported Sports</a></li>
              <li><a href="/#backstory" className="text-sm text-gray-500 hover:text-white transition-colors">Our Story</a></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@klubpro.com" className="text-sm text-gray-500 hover:text-accent transition-colors">
                  info@klubpro.com
                </a>
              </li>
              <li><Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} KlubPro. All rights reserved.</p>
          <p className="text-xs text-gray-600">Built for grassroots sport.</p>
        </div>
      </div>
    </footer>
  )
}

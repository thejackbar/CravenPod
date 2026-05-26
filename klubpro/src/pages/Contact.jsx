import { useState } from 'react'
import { sports, clubRoles } from '../data/sports'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sport: '',
    clubName: '',
    clubRole: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const buildMailto = () => {
    const subject = encodeURIComponent(`KlubPro website enquiry: ${form.subject}`)
    const body = encodeURIComponent(
      `First Name: ${form.firstName}\n` +
      `Last Name: ${form.lastName}\n` +
      `Email Address: ${form.email}\n` +
      `Sport: ${form.sport}\n` +
      `Club Name: ${form.clubName}\n` +
      `Club Role: ${form.clubRole}\n\n` +
      `Message:\n${form.message}`
    )
    return `mailto:info@klubpro.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = buildMailto()
  }

  return (
    <main className="pt-24 pb-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div className="mb-12">
          <div className="feature-badge mb-6">Contact Us</div>
          <h1 className="section-heading mb-4">Get in touch</h1>
          <p className="section-subheading">
            Please complete the form below or email us directly at{' '}
            <a href="mailto:info@klubpro.com" className="text-accent hover:underline">
              info@klubpro.com
            </a>.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                First Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                className="input-field"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Last Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={form.lastName}
                onChange={handleChange}
                className="input-field"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="input-field"
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sport <span className="text-accent">*</span>
              </label>
              <select
                name="sport"
                required
                value={form.sport}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select a sport</option>
                {sports.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Club Role <span className="text-accent">*</span>
              </label>
              <select
                name="clubRole"
                required
                value={form.clubRole}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select your role</option>
                {clubRoles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Club Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="clubName"
              required
              value={form.clubName}
              onChange={handleChange}
              className="input-field"
              placeholder="Your club name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="input-field"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="input-field resize-none"
              placeholder="Tell us about your club and what you're looking for..."
            />
          </div>

          <button type="submit" className="btn-primary w-full py-4 text-base">
            Send message
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Clicking &ldquo;Send message&rdquo; will open your email client with a pre-filled message to{' '}
            <a href="mailto:info@klubpro.com" className="text-accent hover:underline">info@klubpro.com</a>.
            No data is sent to any server.
          </p>
        </form>

        {/* Direct contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Prefer to email directly?{' '}
            <a href="mailto:info@klubpro.com" className="text-accent hover:underline font-medium">
              info@klubpro.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

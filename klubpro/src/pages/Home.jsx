import { Link } from 'react-router-dom'
import { supportedSports } from '../data/sports'

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,_rgba(22,199,132,0.12)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_110%,_rgba(47,140,255,0.08)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="feature-badge mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            The operating system for grassroots sport
          </div>

          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-6">
            Taking sports clubs<br />
            <span className="text-accent">to the next level.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Availability, team selection, social media graphics and sponsor promotion in one modern platform for volunteer-run clubs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get started
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#features" className="btn-secondary text-base px-8 py-4">
              See features
            </a>
          </div>
        </div>
      </div>

      {/* Dashboard stat strip */}
      <div className="relative max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-700 rounded-xl overflow-hidden border border-navy-700">
          {[
            { label: 'Player Availability', value: 'Tracked', sub: 'Real-time squad readiness' },
            { label: 'Team Selection', value: 'Intelligent', sub: 'Data-informed decisions' },
            { label: 'Social Graphics', value: 'Pro-level', sub: 'Ready to post instantly' },
            { label: 'Sponsor Exposure', value: 'Active', sub: 'Every graphic, every post' },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-900 p-6">
              <div className="text-xs text-gray-500 mb-1 font-mono">{stat.label}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="feature-badge mb-6 mx-auto">The Problem</div>
          <h2 className="section-heading mb-4">
            Spreadsheets are so last century.
          </h2>
          <p className="section-subheading mx-auto text-center">
            Running a volunteer sports club is a labour of love — but it shouldn't mean endless group chats, missed messages, and hours wasted on admin that should take minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '📋',
              title: 'Fragmented availability tracking',
              desc: 'Players confirm availability across texts, emails and chat apps. Critical information gets lost, and selectors make decisions blind.',
            },
            {
              icon: '⏱️',
              title: 'Hours lost to admin',
              desc: 'Volunteer committee members burn out juggling club operations. Time that should go to the sport goes to spreadsheets and admin.',
            },
            {
              icon: '📉',
              title: 'Missed sponsor opportunity',
              desc: 'Sponsors invest in clubs but rarely see results. Generic social posts mean sponsors question their ROI and don\'t renew.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-navy-800 border border-red-950/50 rounded-xl p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductModules() {
  return (
    <section id="features" className="py-24 px-4 bg-navy-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="feature-badge mb-6">Platform Modules</div>
          <h2 className="section-heading mb-4">
            Everything your club needs,<br />
            <span className="text-accent">in one platform.</span>
          </h2>
          <p className="section-subheading">
            KlubPro brings together the four pillars of modern grassroots club management into a single, beautifully designed platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              color: 'accent',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Availability',
              desc: 'Track player availability with smart reminders. Know your squad before selection day — not the morning of the match.',
              href: '#availability',
            },
            {
              color: 'blue',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
              ),
              title: 'Team Selection',
              desc: 'Intelligently select your teams based on availability, form and squad balance. Publish selections directly to your players.',
              href: '#selection',
            },
            {
              color: 'amber',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Social Media Graphics',
              desc: "Automatically generate pro-level graphics ready for posting to your club's social media pages. No design skills needed.",
              href: '#graphics',
            },
            {
              color: 'accent',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ),
              title: 'Sponsor Promotion',
              desc: "Actively promote your club's sponsors in every graphic, every announcement. Demonstrate the value of their investment.",
              href: '#sponsors',
            },
          ].map((module) => (
            <a key={module.title} href={module.href} className="card hover:border-navy-600 transition-all group block">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                module.color === 'accent' ? 'bg-accent/15 text-accent' :
                module.color === 'blue' ? 'bg-klub-blue/15 text-klub-blue' :
                'bg-amber-sport/15 text-amber-sport'
              }`}>
                {module.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{module.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{module.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function AvailabilitySection() {
  return (
    <section id="availability" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="feature-badge mb-6">Availability &amp; Communication</div>
            <h2 className="section-heading mb-4">
              Know your squad{' '}
              <span className="text-accent">before selection day.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Stop chasing players for availability. KlubPro sends automatic reminders and collects responses in one place — so selectors have a clear picture of who is available, unavailable, or yet to respond.
            </p>
            <ul className="space-y-3">
              {[
                'Automated availability reminders sent to your squad',
                'Real-time availability dashboard for selectors',
                'Player communication history in one place',
                'Reduce volunteer fatigue with automated workflows',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Availability widget mockup */}
          <div className="card border-accent/20">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-navy-700">
              <span className="font-display font-semibold text-white text-sm">Match Availability — Round 8</span>
              <span className="feature-badge text-xs">Live</span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'J. Thompson', status: 'available', role: 'Batter' },
                { name: 'M. Williams', status: 'available', role: 'All-rounder' },
                { name: 'S. Kumar', status: 'unavailable', role: 'Bowler' },
                { name: 'D. Chen', status: 'available', role: 'Wicket-keeper' },
                { name: "R. O'Brien", status: 'pending', role: 'Bowler' },
                { name: 'A. Patel', status: 'available', role: 'Batter' },
              ].map((player) => (
                <div key={player.name} className="flex items-center justify-between py-2 px-3 bg-navy-900 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-white">{player.name}</span>
                    <span className="text-xs text-gray-500 ml-2">{player.role}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    player.status === 'available' ? 'bg-accent/20 text-accent' :
                    player.status === 'unavailable' ? 'bg-red-900/40 text-red-400' :
                    'bg-yellow-900/40 text-yellow-400'
                  }`}>
                    {player.status === 'available' ? 'Available' : player.status === 'unavailable' ? 'Unavailable' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-navy-700 flex gap-6 text-xs text-gray-500">
              <span><span className="text-accent font-semibold">4</span> Available</span>
              <span><span className="text-red-400 font-semibold">1</span> Unavailable</span>
              <span><span className="text-yellow-400 font-semibold">1</span> Pending</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSelectionSection() {
  return (
    <section id="selection" className="py-24 px-4 bg-navy-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Team sheet mockup */}
          <div className="card border-klub-blue/20 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-navy-700">
              <span className="font-display font-semibold text-white text-sm">Team Sheet — Round 8</span>
              <span className="text-xs font-mono text-klub-blue bg-klub-blue/10 px-2 py-1 rounded-full border border-klub-blue/20">Selected</span>
            </div>
            <div className="space-y-1">
              {[
                { num: 1, name: 'J. Thompson', role: 'Batter' },
                { num: 2, name: 'M. Williams', role: 'All-rounder' },
                { num: 3, name: 'D. Chen', role: 'Wicket-keeper' },
                { num: 4, name: 'A. Patel', role: 'Batter' },
                { num: 5, name: 'T. Morrison', role: 'Batter' },
                { num: 6, name: 'L. Anderson', role: 'All-rounder' },
                { num: 7, name: 'P. Nguyen', role: 'Bowler' },
                { num: 8, name: 'C. Davis', role: 'Bowler' },
                { num: 9, name: 'B. Walsh', role: 'Bowler' },
                { num: 10, name: 'K. Roberts', role: 'Bowler' },
                { num: 11, name: 'F. Mitchell', role: 'Bowler' },
              ].map((player) => (
                <div key={player.num} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-navy-900 transition-colors">
                  <span className="text-xs font-mono text-gray-500 w-5 flex-shrink-0">{player.num}</span>
                  <span className="text-sm text-white flex-1">{player.name}</span>
                  <span className="text-xs text-gray-500">{player.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-klub-blue bg-klub-blue/10 px-3 py-1 rounded-full border border-klub-blue/20 mb-6">
              Team Selection
            </div>
            <h2 className="section-heading mb-4">
              Easily and intelligently{' '}
              <span className="text-klub-blue">select your teams.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Transform your selection process. With full visibility of player availability, form and squad depth, selectors can make informed decisions — and publish the team sheet to players in seconds.
            </p>
            <ul className="space-y-3">
              {[
                'Selection tools built around real availability data',
                'Publish team sheets directly to players',
                'Manage multiple grades and divisions',
                'Clear records for every selection decision',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-klub-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialGraphicsSection() {
  return (
    <section id="graphics" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-sport bg-amber-sport/10 px-3 py-1 rounded-full border border-amber-sport/20 mb-6">
              Social Media Graphics
            </div>
            <h2 className="section-heading mb-4">
              Pro-level graphics,{' '}
              <span className="text-amber-sport">automatically generated.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              KlubPro automatically generates professional social media graphics ready for posting to your club&apos;s Facebook, Instagram and other platforms. No design skills, no graphic designer, no delay.
            </p>
            <ul className="space-y-3">
              {[
                'Team announcement graphics generated automatically',
                'Match result posts ready to share instantly',
                'Club branding applied consistently to every graphic',
                'Sponsor logos featured prominently in every post',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-amber-sport mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Graphic preview mockup */}
          <div className="flex justify-center">
            <div className="card border-amber-sport/20 w-72 aspect-square flex flex-col">
              <div className="flex-1 bg-gradient-to-br from-navy-950 to-navy-800 rounded-lg p-5 flex flex-col border border-navy-700">
                <div className="text-xs font-mono text-amber-sport mb-1 tracking-widest uppercase">Team Announcement</div>
                <div className="font-display font-black text-3xl text-white mb-0.5">Round 8</div>
                <div className="text-xs text-gray-400 mb-4">Applecross CC vs Fremantle CC</div>
                <div className="grid grid-cols-2 gap-1.5 flex-1">
                  {['J. Thompson', 'M. Williams', 'D. Chen', 'A. Patel', 'T. Morrison', 'L. Anderson'].map((n) => (
                    <div key={n} className="text-xs text-gray-300 bg-navy-900 rounded px-2 py-1.5 truncate">{n}</div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-navy-700 flex items-center justify-between">
                  <span className="text-xs text-gray-600">Powered by KlubPro</span>
                  <span className="text-xs bg-amber-sport/20 text-amber-sport px-2 py-0.5 rounded-full">Ready to post</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SponsorSection() {
  return (
    <section id="sponsors" className="py-24 px-4 bg-navy-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Sponsor dashboard mockup */}
          <div className="card border-accent/20">
            <div className="text-xs font-mono text-gray-500 mb-5 tracking-widest uppercase">Sponsor Visibility</div>
            <div className="space-y-4">
              <div className="bg-navy-950 rounded-lg p-5 border border-navy-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">Posts featuring sponsor logos</span>
                  <span className="text-xs text-accent font-mono">This season</span>
                </div>
                <div className="font-display font-black text-4xl text-white">847</div>
                <div className="text-xs text-gray-500 mt-1">graphics published with active sponsor branding</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-950 rounded-lg p-4 border border-navy-700">
                  <div className="text-xs text-gray-400 mb-1">Team announcements</div>
                  <div className="font-display font-bold text-2xl text-white">156</div>
                </div>
                <div className="bg-navy-950 rounded-lg p-4 border border-navy-700">
                  <div className="text-xs text-gray-400 mb-1">Result graphics</div>
                  <div className="font-display font-bold text-2xl text-white">132</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="feature-badge mb-6">Sponsor Promotion</div>
            <h2 className="section-heading mb-4">
              Your sponsors love{' '}
              <span className="text-accent">KlubPro.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Every graphic, every team announcement, every result post actively promotes your club&apos;s sponsors. Give your sponsors real visibility — and give them a compelling reason to keep investing in your club.
            </p>
            <ul className="space-y-3">
              {[
                'Sponsor logos embedded automatically in every graphic',
                'Track sponsor exposure across all club content',
                'Demonstrate ROI to sponsors with visibility data',
                'Increase sponsor retention and renewal rates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function MultiSportSection() {
  return (
    <section id="sports" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="feature-badge mb-6 mx-auto">Multi-Sport Support</div>
          <h2 className="section-heading mb-4">
            Built for every grassroots club.
          </h2>
          <p className="section-subheading mx-auto text-center">
            Whether you run a cricket club, football club or netball association, KlubPro is designed for the unique needs of grassroots sport.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {supportedSports.map((sport) => (
            <div key={sport.name} className="card hover:border-accent/30 hover:bg-navy-700 transition-all text-center cursor-default">
              <div className="text-4xl mb-3">{sport.icon}</div>
              <h3 className="font-display font-bold text-sm text-white mb-1">{sport.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{sport.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BackstorySection() {
  return (
    <section id="backstory" className="py-24 px-4 bg-navy-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="feature-badge mb-8">Our Backstory</div>
          <h2 className="section-heading mb-8">
            Built by grassroots,{' '}
            <span className="text-accent">for grassroots.</span>
          </h2>
          <div className="space-y-5 text-gray-400 leading-relaxed text-base">
            <p>
              KlubPro was born from a real problem. We were running a volunteer amateur cricket club and every week meant the same headaches — chasing players for availability, manually building team sheets, scrambling to put together social media posts that never quite looked professional.
            </p>
            <p>
              We looked for a tool that could handle all of it. Nothing quite fit. The big platforms were built for professional clubs with professional budgets. The simple apps only solved one piece of the puzzle.
            </p>
            <p>
              So we built KlubPro — a platform that tackles the real operational challenges of volunteer-run sports clubs. Availability, selection, social media and sponsor promotion, all in one place, at a price point that makes sense for grassroots sport.
            </p>
            <p className="text-white font-semibold text-lg">
              The future of your club is now.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-10 h-10 text-accent/60 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-white font-display font-medium leading-relaxed mb-8">
            &ldquo;We&apos;ve been a KlubPro user right from the start. It saves us hours of time in tracking availability and doing team selection and the graphics generated by KlubPro has totally transformed the club&apos;s image on Social Media. Our sponsors love KlubPro.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-accent font-display font-bold text-sm">TF</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Tristram Fletcher</div>
              <div className="text-sm text-gray-400">President, Applecross Cricket Club</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCTA() {
  return (
    <section className="py-24 px-4 bg-navy-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="feature-badge mb-6 mx-auto">Get Started</div>
          <h2 className="section-heading mb-4">
            Ready to take your club<br />
            <span className="text-accent">to the next level?</span>
          </h2>
          <p className="section-subheading mx-auto text-center mb-10">
            Contact us to find out how KlubPro can transform your club&apos;s operations this season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get in touch
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="mailto:info@klubpro.com" className="btn-secondary text-base px-8 py-4">
              info@klubpro.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ProductModules />
      <AvailabilitySection />
      <TeamSelectionSection />
      <SocialGraphicsSection />
      <SponsorSection />
      <MultiSportSection />
      <BackstorySection />
      <TestimonialSection />
      <PricingCTA />
    </main>
  )
}

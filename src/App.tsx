import { Helmet } from 'react-helmet-async'
import { ShieldCheck, BookOpen, Mail, Sparkles, Terminal, Activity } from 'lucide-react'
import { tools } from './data/tools'
import { ToolCard } from './components/ToolCard'

const guides = [
  {
    title: 'How to create strong passwords safely',
    description:
      'Learn how password length, randomness, and unique passwords help protect online accounts.',
    href: '/blog/how-to-create-strong-passwords',
  },
  {
    title: 'What is a QR code and when should you use it?',
    description:
      'A practical guide to using QR codes for links, contact details, events, and internal workflows.',
    href: '/blog/what-is-qr-code',
  },
  {
    title: 'How URL shorteners work',
    description:
      'Understand redirects, short codes, analytics, expiration rules, and privacy considerations.',
    href: '/blog/how-url-shorteners-work',
  },
]

const faqs = [
  {
    q: 'Are these tools free to use?',
    a: 'Yes. All tools are free to use for personal and development purposes. Some tools may include optional features that require login for saving data or workspace access.',
  },
  {
    q: 'Do the tools require an account?',
    a: 'Most tools can be used directly in your browser. Login is only required for features like saving data or managing personal workspace.',
  },
  {
    q: 'Are generated values real personal data?',
    a: 'No. Generated data is for testing, development, and educational purposes only and should not be used as real identity information.',
  },
]

export default function App() {
  return (
    <div className="flex min-h-screen flex-col terminal-scanline">
      <Helmet>
        <title>wannarat.cc - Free Online Tools for Developers</title>
        <meta
          name="description"
          content="Free browser-based tools including SQL client, password generator, QR generator, API tester, and more. Fast, simple, and privacy-friendly."
        />
      </Helmet>

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <header className="relative border-b border-forest-500/20 bg-earth-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="wannarat.cc home">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-forest-500/40 bg-earth-900 text-forest-300 shadow-[0_0_22px_rgba(25,183,99,0.16)]">
              <Terminal className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <span className="text-sm font-semibold tracking-wide text-earth-100">
              wannarat<span className="text-forest-400">.cc</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-5 text-xs uppercase tracking-wide text-earth-400 md:flex"
            aria-label="Main navigation"
          >
            <a className="transition hover:text-forest-300" href="#tools">./tools</a>
            <a className="transition hover:text-forest-300" href="/blog">./guides</a>
            <a className="transition hover:text-forest-300" href="/about">./about</a>
            <a className="transition hover:text-forest-300" href="/contact">./contact</a>
            <a className="transition hover:text-forest-300" href="/privacy-policy">./privacy</a>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 py-14 md:py-20">
        <section className="mb-14 animate-fade-in overflow-hidden rounded-lg border border-forest-500/25 bg-earth-950/85 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-earth-800 bg-earth-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="hidden text-xs text-earth-500 sm:block">/Applications/wannarat.cc</div>
            <Activity className="h-4 w-4 text-forest-400" strokeWidth={1.75} />
          </div>

          <div className="px-5 py-8 md:px-10 md:py-12">
            <div className="mb-5 inline-flex items-center gap-2 border border-forest-500/30 bg-forest-950/70 px-3 py-1.5 text-xs font-medium tracking-wide text-forest-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest-500" />
              </span>
              SESSION ACTIVE
            </div>

            <p className="mb-3 text-sm text-earth-500">
              <span className="text-forest-300">ppwnr@wannarat</span>
              <span className="text-earth-600">:</span>
              <span className="text-[#58a6ff]">~/toolkit</span>
              <span className="text-earth-600">$</span> ./open
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-earth-50 md:text-5xl lg:text-6xl">
              Free browser-based tools
              <br />
              <span className="text-forest-300">with simple guides</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-earth-300 md:text-lg">
              wannarat.cc collects lightweight utilities for SQL testing, secure password creation,
              API checks, QR generation, time zones, text editing, and developer workflows.
              Each tool is designed to be quick, accessible, and useful without installing extra software.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-3xl border-l border-forest-500/30 pl-5 text-sm leading-7 text-earth-400">
          <p className="mb-4">
            This website provides a curated collection of browser-based tools designed to help
            developers, designers, and everyday users complete common tasks more efficiently.
            Instead of installing heavy desktop software, users can quickly access lightweight
            tools directly from their browser.
          </p>
          <p>
            Each tool is built with a focus on simplicity, speed, and usability. Additional
            guides are provided to help users understand how each tool works, when to use it,
            and best practices for safe and effective usage.
          </p>
        </section>

        <section className="mb-14 grid gap-4 md:grid-cols-3" aria-label="Website value highlights">
          {[
            {
              icon: ShieldCheck,
              title: 'Privacy-aware',
              text: 'Tools are written for testing and productivity. Generated data is for development use only.',
            },
            {
              icon: BookOpen,
              title: 'Helpful explanations',
              text: 'Guides explain what each tool does, when to use it, and common best practices.',
            },
            {
              icon: Sparkles,
              title: 'Simple experience',
              text: 'Fast pages, clear navigation, responsive layout, and no unnecessary distractions.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="border border-earth-800 bg-earth-950/70 p-5 backdrop-blur-sm"
            >
              <Icon className="mb-3 h-5 w-5 text-forest-300" strokeWidth={1.75} />
              <h2 className="mb-2 text-base font-semibold text-earth-100">{title}</h2>
              <p className="text-sm leading-6 text-earth-400">{text}</p>
            </article>
          ))}
        </section>

        <section id="tools" className="scroll-mt-24">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-earth-50">
                <span className="text-forest-300">$</span> ls ./tools
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-earth-400">
                Choose a tool below. For better transparency, each tool should also have its own detail page
                with features, usage steps, examples, FAQ, and clear disclaimers where needed.
              </p>
            </div>
            <a href="/tools" className="text-sm font-medium text-forest-300 hover:text-forest-200">
              View all tools
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
              >
                <ToolCard tool={tool} index={index} />
              </div>
            ))}
          </div>
        </section>

        <section id="guides" className="mt-16 scroll-mt-24">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-earth-50">
                <span className="text-forest-300">$</span> cat ./guides/latest
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-earth-400">
                These guides explain how to use tools effectively. You can also explore the full{' '}
                <a href="/tools" className="text-forest-300 hover:underline">
                  tool directory
                </a>{' '}
                or read more articles in our{' '}
                <a href="/blog" className="text-forest-300 hover:underline">
                  blog section
                </a>.
              </p>
            </div>

            <a href="/blog" className="text-sm font-medium text-forest-300 hover:text-forest-200">
              View all guides
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.href}
                className="border border-earth-800 bg-earth-950/70 p-5 backdrop-blur-sm transition hover:border-forest-500/40"
              >
                <h3 className="mb-2 text-base font-semibold text-earth-100">
                  <a href={guide.href} className="hover:text-forest-300">
                    {guide.title}
                  </a>
                </h3>
                <p className="mb-4 text-sm leading-6 text-earth-400">{guide.description}</p>
                <a
                  href={guide.href}
                  className="text-sm font-medium text-forest-300 hover:text-forest-200"
                >
                  Read guide
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 border border-earth-800 bg-earth-950/70 p-6 backdrop-blur-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold text-earth-50">About wannarat.cc</h2>
            <p className="mt-3 text-sm leading-6 text-earth-400">
              This website is a collection of personal web utilities created to make common developer
              and productivity tasks faster. The goal is to provide clear, useful, and easy-to-understand
              tools with supporting content, examples, and safety notes for users.
            </p>
            <p className="mt-3 text-sm leading-6 text-earth-500">
              This project is independently developed and maintained as a personal toolkit,
              with continuous improvements based on real-world usage and feedback.
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest-300 hover:text-forest-200"
            >
              <Mail className="h-4 w-4" /> Contact website owner
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <article key={item.q}>
                <h3 className="text-sm font-semibold text-earth-100">{item.q}</h3>
                <p className="mt-1 text-sm leading-6 text-earth-400">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl border-t border-earth-800/40 pt-6 text-sm leading-6 text-earth-500">
          <h2 className="mb-2 text-sm font-semibold text-earth-300">Usage Notice</h2>
          <p>
            Some tools on this website generate sample or simulated data for development and testing
            purposes only. They must not be used for real-world identity, fraud, or any illegal activity.
          </p>
        </section>

        <div className="mt-16 grid grid-cols-3 gap-4 border border-forest-500/25 bg-earth-950/80 p-6 text-center backdrop-blur-sm">
          {[
            { label: 'Tools', value: String(tools.length) },
            { label: 'Guides planned', value: '10+' },
            { label: 'Responsive', value: '100%' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-earth-100">{value}</span>
              <span className="text-xs font-medium uppercase tracking-widest text-earth-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-earth-800/50 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-earth-600 md:flex-row">
          <p>© {new Date().getFullYear()} wannarat.cc — practical web tools and guides</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="hover:text-earth-300" href="/about">About</a>
            <a className="hover:text-earth-300" href="/contact">Contact</a>
            <a className="hover:text-earth-300" href="/privacy-policy">Privacy Policy</a>
            <a className="hover:text-earth-300" href="/terms">Terms</a>
            <a className="hover:text-earth-300" href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

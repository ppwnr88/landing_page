import { Helmet } from 'react-helmet-async'
import { BookOpen, ShieldCheck, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>About wannarat.cc - Practical Browser Tools and Guides</title>
        <meta
          name="description"
          content="Learn about wannarat.cc, an independently maintained collection of browser-based tools, practical guides, safety notes, and developer utilities."
        />
        <link rel="canonical" href="https://wannarat.cc/about" />
      </Helmet>

      <h1 className="text-3xl font-bold text-earth-50">About wannarat.cc</h1>

      <div className="mt-4 space-y-4 text-base leading-8 text-earth-400">
        <p>
          wannarat.cc is an independently maintained collection of practical browser-based tools and
          plain-language guides. The site is built for developers, designers, students, and everyday
          users who need small utilities without installing heavy desktop software.
        </p>
        <p>
          The main domain provides context, documentation, limitations, and responsible-use notes. The
          actual tools may run on dedicated wannarat.cc subdomains so each utility can stay focused and
          lightweight.
        </p>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Sparkles,
            title: 'Simple',
            text: 'Tools are designed to be fast, focused, and easy to understand before you open them.',
          },
          {
            icon: ShieldCheck,
            title: 'Responsible',
            text: 'Generated data, passwords, and entertainment results include clear limits and safety notes.',
          },
          {
            icon: BookOpen,
            title: 'Helpful',
            text: 'Guides explain use cases, common mistakes, privacy concerns, and practical workflows.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="border border-earth-800 bg-earth-950/70 p-5">
            <Icon className="mb-3 h-5 w-5 text-forest-300" />
            <h2 className="font-semibold text-earth-100">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-earth-400">{text}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 space-y-4 text-base leading-8 text-earth-400">
        <h2 className="text-2xl font-semibold text-earth-100">Why this website exists</h2>
        <p>
          Many common tasks can be handled quickly in a browser: creating secure passwords, generating
          QR codes, checking API responses, comparing time zones, preparing mock data, or testing SQL
          queries. This website brings those utilities together and explains how to use them safely.
        </p>
        <p>
          The project is maintained as a personal toolkit, but the content is written for public use.
          Pages are updated when tools change, when safety notes need improvement, or when a guide can
          answer a common question more clearly.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-base leading-8 text-earth-400">
        <h2 className="text-2xl font-semibold text-earth-100">Data and safety approach</h2>
        <p>
          Tools on wannarat.cc are intended for productivity, development, learning, and entertainment.
          Some tools generate sample or simulated values. Those values should not be treated as real
          identity data, professional advice, or guaranteed outcomes.
        </p>
        <p>
          Users should avoid entering secrets, private keys, production tokens, or sensitive personal
          information unless they understand how a specific tool handles that data. Each tool detail page
          includes limitations and safety notes to make this clearer before the standalone tool opens.
        </p>
      </section>

      <p className="mt-10 text-xs text-earth-600">Last updated: May 6, 2026</p>
    </main>
  )
}

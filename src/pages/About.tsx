import { BookOpen, ShieldCheck, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">About wannarat.cc</h1>

      <p className="mt-4 text-sm leading-7 text-earth-400">
        wannarat.cc is an independent collection of practical browser-based tools created for developers,
        designers, and everyday users who need quick utilities without installing extra software.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Sparkles,
            title: 'Simple',
            text: 'Tools are designed to be fast, clean, and easy to understand.',
          },
          {
            icon: ShieldCheck,
            title: 'Responsible',
            text: 'Generated data is clearly marked for testing and educational use only.',
          },
          {
            icon: BookOpen,
            title: 'Helpful',
            text: 'Guides explain how tools work and how to use them safely.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-2xl border border-earth-800/40 bg-earth-900/30 p-5"
          >
            <Icon className="mb-3 h-5 w-5 text-forest-300" />
            <h2 className="font-semibold text-earth-100">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-earth-400">{text}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 space-y-4 text-sm leading-7 text-earth-400">
        <h2 className="text-xl font-semibold text-earth-100">Why this website exists</h2>
        <p>
          Many common tasks such as creating secure passwords, generating QR codes, testing API requests,
          comparing time zones, or preparing mock data can be done quickly in a browser. This website brings
          those utilities together in one place with a consistent interface and simple explanations.
        </p>
        <p>
          The goal is not only to provide tools, but also to provide helpful context so users understand when
          to use each tool, what the limitations are, and how to avoid unsafe usage.
        </p>
      </section>

      <p className="mt-10 text-xs text-earth-600">Last updated: April 27, 2026</p>
    </main>
  )
}
import { Helmet } from 'react-helmet-async'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>Contact - wannarat.cc</title>
        <meta
          name="description"
          content="Contact the maintainer of wannarat.cc for feedback, corrections, tool suggestions, privacy questions, and issue reports."
        />
        <link rel="canonical" href="https://wannarat.cc/contact" />
      </Helmet>

      <h1 className="text-3xl font-bold text-earth-50">Contact</h1>

      <div className="mt-4 space-y-4 text-base leading-8 text-earth-400">
        <p>
          Feedback helps keep wannarat.cc useful and trustworthy. You can contact the website owner
          to report broken links, suggest tool improvements, request corrections to guides, or ask
          questions about privacy and responsible usage.
        </p>
        <p>
          Please do not send passwords, API keys, private tokens, government identity numbers, database
          credentials, or other sensitive information by email. If you are reporting a bug, describe the
          issue with safe example data instead.
        </p>
      </div>

      <section className="mt-8 border border-earth-800 bg-earth-950/70 p-6">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-forest-300" />
          <h2 className="text-xl font-semibold text-earth-100">Email</h2>
        </div>

        <p className="mt-4 text-sm leading-7 text-earth-400">
          Email:{' '}
          <a className="text-forest-300 hover:underline" href="mailto:wannarat.pe@gmail.com">
            wannarat.pe@gmail.com
          </a>
        </p>
        <p className="mt-3 text-sm leading-7 text-earth-400">
          Helpful reports include the page URL, the tool name, what you expected to happen, and what
          actually happened. For article corrections, include the guide title and the section that needs
          review.
        </p>
      </section>
    </main>
  )
}

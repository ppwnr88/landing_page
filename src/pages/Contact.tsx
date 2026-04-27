import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">Contact</h1>

      <p className="mt-4 text-sm leading-7 text-earth-400">
        Have feedback, questions, or suggestions about wannarat.cc? You can contact the website owner using the information below.
      </p>

      <section className="mt-8 rounded-2xl border border-earth-800/40 bg-earth-900/30 p-6">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-forest-300" />
          <h2 className="text-xl font-semibold text-earth-100">Email</h2>
        </div>

        <p className="mt-4 text-sm text-earth-400">
          Email: <a className="text-forest-300 hover:underline" href="mailto:wannarat.pe@gmail.com">wannarat.pe@gmail.com</a>
        </p>
      </section>
    </main>
  )
}
export default function Disclaimer() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">Disclaimer</h1>

      <p className="mt-4 text-sm leading-7 text-earth-400">
        wannarat.cc provides online tools for productivity, education, software testing, and general convenience.
      </p>

      <section className="mt-8 space-y-4 text-sm leading-7 text-earth-400">
        <h2 className="text-xl font-semibold text-earth-100">Testing and Development Use</h2>
        <p>
          Tools that generate sample data, test identity data, random numbers, or similar outputs are intended only for
          development, UI testing, validation testing, and educational use.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-7 text-earth-400">
        <h2 className="text-xl font-semibold text-earth-100">No Professional Advice</h2>
        <p>
          Content on this website is provided for general information only. It should not be treated as legal, financial,
          security, or professional advice.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-7 text-earth-400">
        <h2 className="text-xl font-semibold text-earth-100">Entertainment Tools</h2>
        <p>
          Any lucky number or entertainment-related tool is provided for fun only. Results do not guarantee any real-world
          outcome.
        </p>
      </section>

      <p className="mt-10 text-xs text-earth-600">
        Last updated: April 27, 2026
      </p>
    </main>
  )
}
export default function SqlGuide() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">
        SQL Client vs Database GUI Tools
      </h1>

      <article className="mt-6 space-y-6 text-sm leading-7 text-earth-400">
        <p>
          Developers often choose between lightweight SQL clients and full-featured
          database GUI tools depending on their workflow.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">SQL Client</h2>
        <p>
          SQL clients are fast, minimal tools used to run queries and test logic quickly.
          They are ideal for debugging and quick checks.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">GUI Tools</h2>
        <p>
          GUI tools provide full database management features such as schema browsing,
          data editing, and visualization.
        </p>

        <p>
          For quick testing, browser-based SQL tools are often more convenient.
        </p>
      </article>
    </main>
  )
}
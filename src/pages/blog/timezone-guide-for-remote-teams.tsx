export default function TimezoneGuide() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">
        Timezone Guide for Remote Teams
      </h1>

      <article className="mt-6 space-y-6 text-sm leading-7 text-earth-400">
        <p>
          Working across timezones is a common challenge for remote teams.
          Without proper coordination, meetings and deadlines can become confusing.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Best practices</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use UTC as a reference</li>
          <li>Schedule overlapping hours</li>
          <li>Use shared calendars</li>
        </ul>

        <h2 className="text-xl font-semibold text-earth-100">Tools help</h2>
        <p>
          World clock tools allow you to compare time across regions instantly
          and plan meetings effectively.
        </p>

        <p>
          Try the timezone tool from{' '}
          <a href="/tools" className="text-forest-300">tool directory</a>.
        </p>
      </article>
    </main>
  )
}
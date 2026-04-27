export default function ApiTestingGuide() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">
        How to Test API Requests Effectively
      </h1>

      <article className="mt-6 space-y-6 text-sm leading-7 text-earth-400">
        <p>
          Testing APIs is an essential part of backend and frontend development.
          It helps verify that endpoints return the correct data, handle errors properly,
          and perform as expected.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Basic methods</h2>
        <p>
          APIs can be tested using tools like curl, browser-based API testers,
          or applications such as Postman. Browser tools are often the fastest
          way to quickly test endpoints.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">What to check</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Status codes (200, 400, 500)</li>
          <li>Response structure</li>
          <li>Error handling</li>
          <li>Authentication headers</li>
        </ul>

        <p>
          You can test APIs using tools available on{' '}
          <a href="/tools" className="text-forest-300">wannarat.cc tools</a>.
        </p>
      </article>
    </main>
  )
}
export default function HowUrlShortenersWork() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">How URL Shorteners Work</h1>

      <article className="mt-6 space-y-6 text-sm leading-7 text-earth-400">
        <p>
          A URL shortener turns a long web address into a shorter link. When someone opens the short link,
          the service redirects them to the original destination.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Short codes and redirects</h2>
        <p>
          Most shorteners create a unique short code, store it with the original URL, and use an HTTP redirect
          when the short link is visited. This makes long links easier to share in messages, documents, and printed media.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Expiration and management</h2>
        <p>
          Some short links may expire after a period of time or include management features. Expiration can reduce
          stale links and help keep shared links under better control.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Privacy considerations</h2>
        <p>
          Short links can hide the final destination, so users should avoid opening unknown short links from untrusted
          sources. Website owners should avoid using shorteners for misleading or harmful destinations.
        </p>

        <p>
          You can open the URL shortener from the <a href="/" className="text-forest-300 hover:underline">tool directory</a>.
        </p>
      </article>
    </main>
  )
}
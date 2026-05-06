import { Helmet } from 'react-helmet-async'

export default function HowUrlShortenersWork() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>How URL Shorteners Work - wannarat.cc</title>
        <meta
          name="description"
          content="Understand short links, redirects, custom aliases, expiration, analytics, privacy concerns, and responsible URL shortener usage."
        />
        <link rel="canonical" href="https://wannarat.cc/blog/how-url-shorteners-work" />
      </Helmet>

      <article className="space-y-7 text-base leading-8 text-earth-400">
        <header>
          <p className="text-xs uppercase tracking-widest text-forest-300">Link management guide</p>
          <h1 className="mt-3 text-3xl font-bold text-earth-50 md:text-4xl">
            How URL Shorteners Work
          </h1>
          <p className="mt-4 text-earth-300">
            A URL shortener turns a long destination into a shorter link. When someone opens the short
            link, the shortener looks up the destination and redirects the browser to the original URL.
            The concept is simple, but responsible link management requires a little care.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Short codes and redirects</h2>
          <p className="mt-3">
            Most shorteners store a short code such as <span className="text-earth-200">abc123</span>.
            That code maps to a full destination URL in a database. When a browser requests the short
            link, the service returns an HTTP redirect. The browser then loads the final destination.
          </p>
          <p className="mt-3">
            Some redirects are temporary, while others are meant to be permanent. For everyday sharing,
            the technical difference is not always visible to users, but it matters for search engines,
            caches, and long-term link maintenance. If a link may change later, a temporary redirect is
            often safer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Why people use short links</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>They are easier to share in chat, slides, and printed material.</li>
            <li>They can make internal resources easier to remember.</li>
            <li>They can hide long query strings that would distract from the message.</li>
            <li>They can centralize redirects so destinations can be updated later.</li>
            <li>They can support lightweight analytics when used transparently.</li>
          </ul>
          <p className="mt-3">
            A short link is most useful when it improves clarity. It should not be used to disguise a
            suspicious destination or trick users into opening something unexpected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Privacy and trust considerations</h2>
          <p className="mt-3">
            Short links can hide the final destination until someone opens them. That makes them useful
            but also risky. Users should be cautious with short links from unknown sources, especially
            when the link asks for login, payment, or file download.
          </p>
          <p className="mt-3">
            Link owners should label short links clearly, avoid misleading aliases, and use HTTPS for
            both the short link and the destination. If analytics are collected, the privacy policy should
            explain what may be measured, such as click counts, referrers, or broad location signals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Maintenance mistakes to avoid</h2>
          <p className="mt-3">
            The biggest maintenance mistake is creating short links with no owner. Over time, teams forget
            why a link exists, whether the destination is still correct, or who can update it. For important
            links, record the purpose, destination, and expected lifetime.
          </p>
          <p className="mt-3">
            Another mistake is putting sensitive information inside the destination URL. Query parameters
            can be logged by browsers, servers, analytics tools, or screenshots. Do not place passwords,
            access tokens, or private personal data in a URL before shortening it.
          </p>
          <p className="mt-3">
            Start with the{' '}
            <a href="/tools/go" className="text-forest-300 hover:underline">
              URL Shortener tool page
            </a>{' '}
            for use cases and safety notes before creating a short link.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">A responsible short-link checklist</h2>
          <p className="mt-3">
            Before sharing a short link, open it yourself and confirm it reaches the correct destination.
            Check that the destination is mobile friendly, does not require unexpected permissions, and
            does not ask for credentials in a suspicious context. If the destination is sensitive, consider
            sharing the full URL instead so people can inspect it first.
          </p>
          <p className="mt-3">
            Choose aliases that describe the purpose without exposing private information. For example,
            a link name based on a public event is usually safer than a name that includes a customer,
            internal project, invoice number, or private campaign detail.
          </p>
          <p className="mt-3">
            For teams, keep a small owner record for important links. Include who created the link, where
            it is used, when it should be reviewed, and what destination it points to. This prevents old
            redirects from silently sending users to outdated or abandoned pages.
          </p>
          <p className="mt-3">
            If a link appears in printed material, customer emails, onboarding documents, or public support
            pages, treat it as long-lived infrastructure. Review it after product changes and remove it when
            the destination is no longer useful.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">FAQ</h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="font-semibold text-earth-100">Are short links bad for SEO?</h3>
              <p className="mt-1">
                Not automatically. The redirect type, destination quality, and context matter. For public
                content, clear canonical URLs are still important.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-earth-100">Can a short link expire?</h3>
              <p className="mt-1">
                Yes, if the service supports expiration. Expiration is useful for temporary campaigns,
                event links, or limited-time internal resources.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

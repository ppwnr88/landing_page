import { Helmet } from 'react-helmet-async'

export default function ApiTestingGuide() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>How to Test API Requests Effectively - wannarat.cc</title>
        <meta
          name="description"
          content="Learn a practical API testing workflow: methods, headers, payloads, status codes, error handling, authentication, and safe test data."
        />
        <link rel="canonical" href="https://wannarat.cc/blog/how-to-test-api-requests" />
      </Helmet>

      <article className="space-y-7 text-base leading-8 text-earth-400">
        <header>
          <p className="text-xs uppercase tracking-widest text-forest-300">API workflow guide</p>
          <h1 className="mt-3 text-3xl font-bold text-earth-50 md:text-4xl">
            How to Test API Requests Effectively
          </h1>
          <p className="mt-4 text-earth-300">
            API testing helps verify that a service returns the right data, handles invalid input,
            protects private endpoints, and communicates errors clearly. A good test does not need to
            be complicated, but it should be repeatable and specific.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Start with the request contract</h2>
          <p className="mt-3">
            Before sending requests, write down the expected method, endpoint, required headers, query
            parameters, request body, and expected response shape. For example, a user lookup endpoint
            might require a GET request, an authorization header, and an ID path parameter. The response
            might include a user object, a 404 error when missing, or a 401 error when the token is invalid.
          </p>
          <p className="mt-3">
            This contract becomes the checklist. Without it, API testing can turn into random clicking:
            sending a request, seeing a response, and guessing whether it is correct.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">What to check in every response</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Status code: confirm success, validation errors, authentication errors, and server errors.</li>
            <li>Response body: check required fields, data types, nesting, and empty states.</li>
            <li>Headers: review content type, caching rules, rate-limit headers, and security headers.</li>
            <li>Error messages: make sure errors are useful without leaking private implementation details.</li>
            <li>Timing: note slow responses that may affect user experience or timeouts.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Test happy paths and failure paths</h2>
          <p className="mt-3">
            A happy-path request proves the endpoint works when everything is correct. Failure-path tests
            are just as important. Try missing fields, invalid IDs, expired tokens, unsupported methods,
            incorrect content types, and malformed JSON. These cases often reveal weak validation or
            inconsistent error handling.
          </p>
          <p className="mt-3">
            Use realistic but safe test data. Do not paste production secrets, access tokens, private
            customer records, or personal identifiers into shared tools. If you need identity-like values,
            use mock data in a controlled environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Browser tools vs command-line tools</h2>
          <p className="mt-3">
            Browser-based API tools are convenient for quick checks, demonstrations, and simple debugging.
            Command-line tools are often better for automation, CI scripts, private network access, and
            repeatable test fixtures. Dedicated API platforms are useful when teams need collections,
            environments, documentation, and collaboration.
          </p>
          <p className="mt-3">
            The best tool depends on the job. For a quick manual check, start with the{' '}
            <a href="/tools/curl" className="text-forest-300 hover:underline">
              Curl Tool
            </a>
            . For deeper database investigation behind an API issue, the{' '}
            <a href="/tools/sql" className="text-forest-300 hover:underline">
              SQL Client
            </a>{' '}
            may help confirm what the backend is reading.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">A repeatable manual test checklist</h2>
          <p className="mt-3">
            For each endpoint, keep a small checklist of example requests. Include one valid request, one
            validation error, one authentication error, and one not-found or empty-state case. Save the
            expected status code and a short note about the expected response shape. This makes future
            debugging faster because you can compare today’s behavior with a known baseline.
          </p>
          <p className="mt-3">
            When an issue is found, reduce the request to the smallest example that reproduces the problem.
            Remove unrelated headers, optional fields, and large payloads. A minimal failing request is
            easier for backend, frontend, and QA teammates to understand.
          </p>
          <p className="mt-3">
            After the fix, run both the failing request and a nearby success case. This helps confirm the
            bug is fixed without accidentally breaking normal behavior. For important endpoints, convert
            the manual case into an automated test later.
          </p>
          <p className="mt-3">
            Keep screenshots and copied responses small when reporting bugs. Include enough detail to prove
            the issue, but remove tokens, emails, private IDs, and payload fields that are not needed for
            the investigation.
          </p>
          <p className="mt-3">
            A clear API report should let another person reproduce the behavior without guessing. Include
            the endpoint path, method, sanitized request body, expected result, actual result, and the time
            the test was performed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">FAQ</h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="font-semibold text-earth-100">Should API tests use production data?</h3>
              <p className="mt-1">
                Avoid it when possible. Use staging environments, mock data, and test accounts. Production
                checks should be limited, authorized, and designed to avoid changing real user data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-earth-100">What is the first thing to inspect when a request fails?</h3>
              <p className="mt-1">
                Start with the status code and response body. Then verify the URL, method, headers,
                authentication, and request payload.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

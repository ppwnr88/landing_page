import { Helmet } from 'react-helmet-async'
import { tools } from '../data/tools'
import { ToolCard } from '../components/ToolCard'

export default function Tools() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-earth-300">
      
      {/* SEO */}
      <Helmet>
        <title>All Tools - wannarat.cc</title>
        <meta
          name="description"
          content="Explore all free browser-based tools including SQL client, password generator, QR generator, API tester, and more. Fast, simple, and privacy-friendly."
        />
      </Helmet>

      {/* HEADER */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-earth-50">All Tools</h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-earth-400">
          This page lists all available tools on wannarat.cc. These tools are designed to help
          developers, designers, and everyday users perform common tasks quickly and efficiently
          directly in the browser without installing additional software.
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-earth-400">
          You can use these tools for productivity, testing, and learning purposes. Each tool focuses
          on simplicity, speed, and usability, with minimal setup required.
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-earth-400">
          Every tool now has a local detail page on wannarat.cc with usage steps, limitations,
          frequently asked questions, and related guides. This keeps the main website useful even
          before you open the standalone tool app.
        </p>
      </section>

      {/* TOOL GRID */}
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="mt-14 max-w-3xl text-sm leading-7 text-earth-400">
        <h2 className="text-xl font-semibold text-earth-100 mb-3">
          How to use these tools
        </h2>

        <p className="mb-3">
          Click any tool card to read the local guide first. Each guide explains what the tool does,
          when it is useful, what to watch out for, and then provides a clear button to open the
          actual tool on its subdomain.
        </p>

        <p>
          For best results, read the related guides in our{' '}
          <a href="/blog" className="text-forest-300 hover:underline">
            blog section
          </a>{' '}
          to understand how to use each tool safely and effectively.
        </p>
      </section>

      {/* USE CASES */}
      <section className="mt-14 max-w-3xl text-sm leading-7 text-earth-400">
        <h2 className="text-xl font-semibold text-earth-100 mb-3">
          Common use cases
        </h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>Testing APIs and backend endpoints</li>
          <li>Generating secure passwords</li>
          <li>Creating QR codes for links and events</li>
          <li>Shortening URLs for sharing</li>
          <li>Working with time zones for remote teams</li>
          <li>Generating test data for development</li>
        </ul>
      </section>

      {/* TRUST + DISCLAIMER */}
      <section className="mt-14 max-w-3xl text-sm leading-7 text-earth-500 border-t border-earth-800/40 pt-6">
        <h2 className="text-sm font-semibold text-earth-300 mb-2">
          Usage Notice
        </h2>

        <p className="mb-3">
          Some tools on this website generate sample or simulated data for testing and development
          purposes only. These tools must not be used for real-world identity, fraud, or illegal
          activities.
        </p>

        <p>
          By using these tools, you agree to use them responsibly. For more details, please review our{' '}
          <a href="/terms" className="text-forest-300 hover:underline">
            Terms of Use
          </a>{' '}
          and{' '}
          <a href="/privacy-policy" className="text-forest-300 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </section>

      {/* INTERNAL LINK BOOST (สำคัญมากสำหรับ SEO + AdSense) */}
      <section className="mt-14 max-w-3xl text-sm leading-7 text-earth-400">
        <h2 className="text-xl font-semibold text-earth-100 mb-3">
          Learn more
        </h2>

        <p>
          Visit our{' '}
          <a href="/blog" className="text-forest-300 hover:underline">
            guides and articles
          </a>{' '}
          to understand how each tool works, including best practices, security tips, and real-world
          usage examples.
        </p>
      </section>

    </main>
  )
}

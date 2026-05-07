import { Helmet } from 'react-helmet-async'

const posts = [
  {
    title: 'How to create strong passwords safely',
    description:
      'Learn how length, randomness, and unique passwords help protect online accounts.',
    href: '/blog/how-to-create-strong-passwords',
  },
  {
    title: 'What is a QR code and when should you use it?',
    description:
      'A practical guide to QR codes for links, contact details, events, and internal workflows.',
    href: '/blog/what-is-qr-code',
  },
  {
    title: 'How URL shorteners work',
    description:
      'Understand redirects, short codes, expiration rules, and privacy considerations.',
    href: '/blog/how-url-shorteners-work',
  },
  {
    title: 'How to test API requests effectively',
    description: 'Learn how to test APIs using browser tools and best practices.',
    href: '/blog/how-to-test-api-requests',
  },
  {
    title: 'SQL client vs database GUI tools',
    description: 'Compare lightweight SQL clients and full database GUI tools.',
    href: '/blog/sql-client-vs-database-gui',
  },
  {
    title: 'Timezone guide for remote teams',
    description: 'Best practices for managing time across global teams.',
    href: '/blog/timezone-guide-for-remote-teams',
  },
  {
    title: 'How to use a screen ruler for web layout checks',
    description: 'A practical visual QA workflow for spacing, alignment, and responsive layouts.',
    href: '/blog/screen-ruler-web-layouts',
  },
  {
    title: 'Using test data generators safely in development',
    description: 'Use mock ID and test data without exposing real personal information.',
    href: '/blog/test-data-generator-development',
  },
  {
    title: 'Browser text editor workflows for quick notes and drafts',
    description: 'Use a lightweight editor for snippets, checklists, drafts, and safe temporary writing.',
    href: '/blog/browser-text-editor-workflows',
  },
  {
    title: 'Entertainment number tools: fun use and clear limits',
    description: 'Understand playful number generators and why outputs should not be treated as advice.',
    href: '/blog/entertainment-number-tools',
  },
  {
    title: 'Hash generator and checksum guide',
    description: 'Learn hashing, checksums, hash vs encryption, and safe limits for security workflows.',
    href: '/blog/hash-generator-checksum-guide',
  },
]

export default function Blog() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>Guides and Articles - wannarat.cc</title>
        <meta
          name="description"
          content="Practical guides for browser-based developer tools, password safety, QR codes, API testing, SQL clients, URL shorteners, and remote team time zones."
        />
        <link rel="canonical" href="https://wannarat.cc/blog" />
      </Helmet>

      <h1 className="text-3xl font-bold text-earth-50">Guides and Articles</h1>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-earth-400">
        Practical guides for using online tools safely and effectively. These articles explain basic concepts,
        common use cases, and responsible usage for productivity and development workflows.
      </p>

      <p className="mt-3 max-w-3xl text-sm leading-7 text-earth-400">
        The goal of these guides is to make each tool easier to understand before you use it. They cover
        practical examples, common mistakes, privacy considerations, and links to the relevant tool pages
        on wannarat.cc.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.href}
            className="rounded-2xl border border-earth-800/40 bg-earth-900/30 p-5"
          >
            <h2 className="text-base font-semibold text-earth-100">
              <a href={post.href} className="hover:text-forest-300">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-6 text-earth-400">{post.description}</p>
            <a
              href={post.href}
              className="mt-4 inline-block text-sm font-medium text-forest-300 hover:text-forest-200"
            >
              Read guide →
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}

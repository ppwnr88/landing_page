import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { tools } from '../data/tools'
import { toolContent } from '../data/toolContent'

export default function ToolDetail() {
  const { id } = useParams()
  const tool = tools.find((item) => item.id === id)
  const content = id ? toolContent[id] : undefined

  if (!tool || !content) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
        <Helmet>
          <title>Tool not found - wannarat.cc</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <a href="/tools" className="inline-flex items-center gap-2 text-sm text-forest-300 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to tools
        </a>
        <h1 className="mt-6 text-3xl font-bold text-earth-50">Tool not found</h1>
        <p className="mt-4 text-sm leading-7 text-earth-400">
          The requested tool page does not exist. Please return to the tool directory.
        </p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>{tool.title} - Free Online Tool | wannarat.cc</title>
        <meta name="description" content={`${tool.description}. Learn how ${tool.title} works, when to use it, limitations, FAQs, and safety notes before opening the tool.`} />
        <link rel="canonical" href={`https://wannarat.cc/tools/${tool.id}`} />
      </Helmet>

      <a href="/tools" className="inline-flex items-center gap-2 text-sm text-forest-300 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to all tools
      </a>

      <section className="mt-6 border border-forest-500/25 bg-earth-950/75 p-6">
        <p className="text-xs uppercase tracking-widest text-earth-500">tool readme</p>
        <h1 className="mt-3 text-3xl font-bold text-earth-50 md:text-4xl">{tool.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-earth-300">{tool.longDescription}</p>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-forest-500/40 bg-forest-950/70 px-4 py-2 text-sm font-semibold text-forest-200 transition hover:border-forest-300 hover:text-white"
        >
          Open {tool.title} <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <article className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-10 text-sm leading-7 text-earth-400">
          <section>
            <h2 className="text-2xl font-semibold text-earth-50">What this tool does</h2>
            {content.overview.map((paragraph) => (
              <p key={paragraph} className="mt-4">{paragraph}</p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-earth-50">How to use it</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5">
              {content.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-earth-50">Practical examples</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {content.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-earth-50">Limitations and safety notes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {content.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {tool.disclaimer ? (
              <p className="mt-4 border-l border-forest-500/40 pl-4 text-earth-300">{tool.disclaimer}</p>
            ) : null}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-earth-50">Frequently asked questions</h2>
            <div className="mt-4 space-y-5">
              {content.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold text-earth-100">{item.q}</h3>
                  <p className="mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="border border-earth-800 bg-earth-950/70 p-5">
            <h2 className="text-base font-semibold text-earth-100">Best for</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-earth-400">
              {content.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="border border-earth-800 bg-earth-950/70 p-5">
            <h2 className="text-base font-semibold text-earth-100">Related guides</h2>
            <div className="mt-4 space-y-3 text-sm">
              {content.relatedGuides.map((guide) => (
                <a key={guide.href} href={guide.href} className="block text-forest-300 hover:underline">
                  {guide.title}
                </a>
              ))}
            </div>
          </section>
        </aside>
      </article>
    </main>
  )
}

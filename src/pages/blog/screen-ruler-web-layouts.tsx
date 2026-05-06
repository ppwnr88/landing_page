import { Helmet } from 'react-helmet-async'

export default function ScreenRulerLayouts() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>How to Use a Screen Ruler for Web Layout Checks - wannarat.cc</title>
        <meta
          name="description"
          content="Learn how designers and frontend developers can use a screen ruler for layout spacing, responsive checks, visual QA, and handoff review."
        />
        <link rel="canonical" href="https://wannarat.cc/blog/screen-ruler-web-layouts" />
      </Helmet>

      <article className="space-y-7 text-base leading-8 text-earth-400">
        <header>
          <p className="text-xs uppercase tracking-widest text-forest-300">Frontend workflow guide</p>
          <h1 className="mt-3 text-3xl font-bold text-earth-50 md:text-4xl">
            How to Use a Screen Ruler for Web Layout Checks
          </h1>
          <p className="mt-4 text-earth-300">
            A screen ruler is a small visual tool for checking spacing, alignment, and approximate element
            sizes on a live page. It does not replace browser DevTools or design files, but it is useful
            when a layout looks slightly wrong and you need a fast visual measurement.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">When a ruler helps</h2>
          <p className="mt-3">
            Frontend work often involves tiny differences: a card gap that should be 16 pixels but looks
            closer to 20, a button that no longer aligns with an input, or a mobile layout that feels too
            cramped. A ruler helps you verify those details quickly without digging through every computed
            CSS value first.
          </p>
          <p className="mt-3">
            It is especially useful during visual QA, design handoff review, and responsive testing. You
            can measure a suspicious area, confirm whether the issue is real, then use DevTools to inspect
            exact CSS only when needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">A practical layout check workflow</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Open the page at the viewport size you want to inspect.</li>
            <li>Identify one specific spacing, width, or alignment question.</li>
            <li>Use the ruler to measure the visible area.</li>
            <li>Compare the result with the design target or CSS spacing scale.</li>
            <li>Repeat at mobile and desktop sizes before changing code.</li>
          </ol>
          <p className="mt-3">
            This keeps measurement focused. Instead of measuring everything, you answer one question at a
            time: “Is this gap too large?” or “Does this element fit inside the expected width?”
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Common mistakes</h2>
          <p className="mt-3">
            The biggest mistake is treating a visual measurement as absolute truth. Browser zoom, device
            pixel ratio, transforms, and screenshots can affect what you see. If the measurement affects
            production code, confirm it with DevTools and the actual CSS box model.
          </p>
          <p className="mt-3">
            Another mistake is checking only one viewport. A spacing fix that looks good on desktop may
            create wrapping or overflow on mobile. Measure the tightest layout state, not only the most
            comfortable one.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Tool recommendation</h2>
          <p className="mt-3">
            Start with the{' '}
            <a href="/tools/ruler" className="text-forest-300 hover:underline">
              Ruler Tool page
            </a>{' '}
            to review usage notes and limitations. Use it for quick visual checks, then confirm important
            layout decisions in your browser inspector or design system documentation.
          </p>
        </section>
      </article>
    </main>
  )
}

import { Wrench } from 'lucide-react'
import { tools } from './data/tools'
import { ToolCard } from './components/ToolCard'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Background noise texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="relative border-b border-earth-800/50 bg-earth-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-800 ring-1 ring-forest-700/50">
            <Wrench className="h-4 w-4 text-earth-200" strokeWidth={1.75} />
          </div>
          <span className="text-sm font-semibold tracking-wide text-earth-200">
            wannarat<span className="text-earth-500">.cc</span>
          </span>
        </div>
      </header>

      {/* Hero */}
      <main className="relative mx-auto w-full max-w-5xl flex-1 px-6 py-16 md:py-24">
        {/* Hero text */}
        <div className="mb-14 animate-fade-in text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-forest-700/40 bg-forest-900/30 px-4 py-1.5 text-xs font-medium tracking-wide text-forest-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest-500" />
            </span>
            All tools are live
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-earth-50 md:text-5xl lg:text-6xl">
            Your browser-based
            <br />
            <span className="bg-gradient-to-r from-earth-300 via-earth-200 to-forest-300 bg-clip-text text-transparent">
              developer toolkit
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-earth-400 md:text-lg">
            A curated set of utilities built for the modern web. No installs, no sign-ups — just open and use.
          </p>
        </div>

        {/* Tool grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className="animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <ToolCard tool={tool} index={index} />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-4 rounded-2xl border border-earth-800/40 bg-earth-900/30 p-6 text-center backdrop-blur-sm">
          {[
            { label: 'Tools', value: String(tools.length) },
            { label: 'No sign-up', value: '100%' },
            { label: 'Always free', value: '∞' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-earth-100">{value}</span>
              <span className="text-xs font-medium uppercase tracking-widest text-earth-500">{label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-earth-800/50 py-6">
        <p className="text-center text-xs text-earth-600">
          © {new Date().getFullYear()} wannarat.cc — built with care
        </p>
      </footer>
    </div>
  )
}

import {
  Database,
  KeyRound,
  Ruler,
  Terminal,
  Link2,
  QrCode,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react'
import type { Tool } from '../data/tools'

const iconMap: Record<string, LucideIcon> = {
  Database,
  KeyRound,
  Ruler,
  Terminal,
  Link2,
  QrCode,
}

interface ToolCardProps {
  tool: Tool
  index: number
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const Icon = iconMap[tool.icon] ?? Database

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 rounded-2xl border border-earth-800/60 bg-earth-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-earth-600/60 card-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={`Open ${tool.title}`}
    >
      {/* Icon container */}
      <div
        className={`inline-flex w-fit items-center justify-center rounded-xl bg-gradient-to-br ${tool.accent} p-3 ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="h-5 w-5 text-earth-200" strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold tracking-tight text-earth-100 group-hover:text-white transition-colors duration-200">
          {tool.title}
        </h3>
        <p className="text-sm leading-relaxed text-earth-400 group-hover:text-earth-300 transition-colors duration-200">
          {tool.description}
        </p>
      </div>

      {/* Arrow indicator */}
      <ArrowUpRight
        className="absolute right-5 top-5 h-4 w-4 text-earth-600 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-earth-300"
        strokeWidth={2}
      />

      {/* Subtle gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-900/0 to-forest-900/0 transition-all duration-300 group-hover:from-forest-900/10 group-hover:to-transparent" />
    </a>
  )
}

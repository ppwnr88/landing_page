import {
  Database,
  KeyRound,
  Ruler,
  Terminal,
  Link2,
  QrCode,
  IdCard,
  Clock,
  FileCode,
  Calculator,
  Hash,
  Bot,
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
  IdCard,
  Clock,
  FileCode,
  Calculator,
  Hash,
  Bot,
}

interface ToolCardProps {
  tool: Tool
  index: number
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const Icon = iconMap[tool.icon] ?? Database

  return (
    <a
      href={`/tools/${tool.id}`}
      className="card-glow group relative flex min-h-[188px] flex-col gap-4 border border-earth-800 bg-earth-950/75 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={`Read about ${tool.title}`}
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-forest-500/0 via-forest-400/50 to-forest-500/0" />

      <div
        className={`inline-flex w-fit items-center justify-center border border-forest-500/25 bg-gradient-to-br ${tool.accent} p-3 ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="h-5 w-5 text-forest-200" strokeWidth={1.75} />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-widest text-earth-600">tool --readme</p>
        <h3 className="text-base font-semibold tracking-tight text-earth-100 transition-colors duration-200 group-hover:text-white">
          {tool.title}
        </h3>
        <p className="text-sm leading-relaxed text-earth-400 transition-colors duration-200 group-hover:text-earth-300">
          {tool.description}
        </p>
      </div>

      <ArrowUpRight
        className="absolute right-5 top-5 h-4 w-4 text-earth-600 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-forest-300"
        strokeWidth={2}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-900/0 to-forest-900/0 transition-all duration-300 group-hover:from-forest-900/10 group-hover:to-transparent" />
    </a>
  )
}

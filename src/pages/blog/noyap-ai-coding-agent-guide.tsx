import { Helmet } from 'react-helmet-async'

export default function NoyapAiCodingAgentGuide() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>Noyap Guide for Concise AI Coding Agents - wannarat.cc</title>
        <meta
          name="description"
          content="Learn how concise AI coding-agent rules help reduce filler, preserve important warnings, support multilingual developer prompts, and keep project instructions safe."
        />
        <link rel="canonical" href="https://wannarat.cc/blog/noyap-ai-coding-agent-guide" />
      </Helmet>

      <article className="space-y-7 text-base leading-8 text-earth-400">
        <header>
          <p className="text-xs uppercase tracking-widest text-forest-300">AI coding workflow guide</p>
          <h1 className="mt-3 text-3xl font-bold text-earth-50 md:text-4xl">
            Noyap Guide for Concise AI Coding Agents
          </h1>
          <p className="mt-4 text-earth-300">
            AI coding agents can be helpful, but they often explain too much before getting to the actual
            code decision. Noyap is built around a simple idea: remove filler, keep the fix, and preserve
            the warnings that matter.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Why concise agent rules help</h2>
          <p className="mt-3">
            Developers usually need direct answers: what changed, why it matters, what command failed, and
            what to do next. Long generic explanations can hide the useful part of an answer. A concise
            ruleset helps the agent prioritize code, verification, assumptions, and blockers.
          </p>
          <p className="mt-3">
            Concise does not mean careless. Good coding-agent output should still call out risky migrations,
            security-sensitive changes, user data handling, broken tests, and unknown requirements. The goal
            is to remove noise, not remove judgment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Where Noyap fits</h2>
          <p className="mt-3">
            Noyap fits into projects that use AI coding assistants such as Codex, Claude Code, Cursor,
            OpenCode, or similar tools. It provides project instructions for communication style, language
            handling, safe merge behavior, and workflow expectations.
          </p>
          <p className="mt-3">
            This is especially useful when a project already has an AGENTS.md or similar instruction file.
            The best workflow is to merge new communication rules without overwriting existing warnings,
            deployment notes, or team-specific safety constraints.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Practical usage checklist</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Review the existing project instructions before adding new agent rules.</li>
            <li>Choose a concise mode that still preserves warnings and verification steps.</li>
            <li>Use Thai, English, or mixed-language behavior that matches the team’s real prompts.</li>
            <li>Keep project-specific rules more important than generic style preferences.</li>
            <li>Re-run tests and builds normally; communication rules do not replace verification.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Common mistakes to avoid</h2>
          <p className="mt-3">
            Do not make an agent so brief that it hides assumptions, skipped tests, or dangerous tradeoffs.
            A one-line answer is not useful if the task involved auth, payment logic, database migration,
            privacy policy, or production deployment. The right amount of detail depends on risk.
          </p>
          <p className="mt-3">
            Also avoid overwriting existing project instructions blindly. If a repository already documents
            deployment steps, coding standards, or protected files, those rules should stay visible and
            authoritative.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Tool recommendation</h2>
          <p className="mt-3">
            Start from the{' '}
            <a href="/tools/noyap" className="text-forest-300 hover:underline">
              Noyap tool page
            </a>{' '}
            to review the purpose, examples, limitations, and installation path before opening the full
            project website.
          </p>
        </section>
      </article>
    </main>
  )
}

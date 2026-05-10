export interface ToolContent {
  overview: string[]
  steps: string[]
  bestFor: string[]
  examples: string[]
  limitations: string[]
  relatedGuides: Array<{
    title: string
    href: string
  }>
  faq: Array<{
    q: string
    a: string
  }>
}

export const toolContent: Record<string, ToolContent> = {
  sql: {
    overview: [
      'The SQL Client is designed for quick database checks when opening a full desktop GUI would slow the workflow down. It is useful for validating a query, checking a table shape, testing a WHERE clause, or confirming that application data looks the way you expect.',
      'The main value is speed and focus. A browser-based SQL client keeps the task close to your web workflow, while still encouraging careful handling of credentials, permissions, and query results.',
    ],
    steps: [
      'Open the SQL Client from the button on this page.',
      'Sign in if the workspace requires authentication.',
      'Connect to the database or select an existing saved connection.',
      'Run a small read-only query first to verify the connection and table names.',
      'Review results carefully before running write, update, or delete statements.',
    ],
    bestFor: [
      'Testing SQL snippets during backend development',
      'Checking records while debugging an application issue',
      'Practicing SQL syntax in a lightweight interface',
      'Reviewing query output without switching to a heavier database GUI',
    ],
    examples: [
      'Check whether a user-facing bug is caused by missing data or by application rendering logic.',
      'Run a read-only query against a staging database before updating backend code.',
      'Compare an API response with the source table to confirm the service is mapping fields correctly.',
    ],
    limitations: [
      'Use least-privilege database credentials whenever possible.',
      'Avoid pasting production secrets or sensitive customer data into shared environments.',
      'Double-check destructive statements before execution.',
    ],
    relatedGuides: [
      { title: 'SQL client vs database GUI tools', href: '/blog/sql-client-vs-database-gui' },
      { title: 'How to test API requests effectively', href: '/blog/how-to-test-api-requests' },
    ],
    faq: [
      {
        q: 'Is this meant to replace a full database management tool?',
        a: 'No. It is best for quick checks and focused query work. Full database GUI tools are still better for complex administration, schema design, backup workflows, and visual exploration.',
      },
      {
        q: 'Should I use it with production databases?',
        a: 'Only if you understand the risk and use carefully scoped credentials. For routine work, read-only accounts and staging environments are safer.',
      },
    ],
  },
  passgen: {
    overview: [
      'The Password Generator helps create random passwords that are harder to guess than memorable phrases, reused passwords, or predictable patterns. It is intended for everyday account security and developer testing workflows.',
      'Strong passwords work best when every account gets a unique value. A generator removes the temptation to reuse the same password or make tiny variations of an old one.',
    ],
    steps: [
      'Open the password generator.',
      'Choose a length that matches the account or system requirement.',
      'Include a mix of character types when the destination accepts them.',
      'Generate a new value and store it in a password manager.',
      'Avoid sending generated passwords through chat, email, or screenshots.',
    ],
    bestFor: [
      'Creating account passwords',
      'Generating temporary testing credentials',
      'Replacing weak or reused passwords',
      'Teaching password hygiene basics',
    ],
    examples: [
      'Create a unique password for a hosting provider or domain registrar account.',
      'Generate temporary credentials for a staging demo, then rotate them after the demo ends.',
      'Replace a reused password discovered during an account security review.',
    ],
    limitations: [
      'A strong password is only helpful if it is stored safely.',
      'Do not reuse generated passwords across multiple websites.',
      'Some legacy systems may reject special characters or long lengths.',
    ],
    relatedGuides: [
      { title: 'How to create strong passwords safely', href: '/blog/how-to-create-strong-passwords' },
    ],
    faq: [
      {
        q: 'How long should a generated password be?',
        a: 'For most accounts, 16 characters or more is a strong baseline. Higher-value accounts benefit from longer passwords when the service supports them.',
      },
      {
        q: 'Do I need to memorize generated passwords?',
        a: 'Usually no. A trusted password manager is a better place to store unique generated passwords.',
      },
    ],
  },
  ruler: {
    overview: [
      'The Ruler Tool helps designers and frontend developers measure visible spacing, layout width, and approximate element sizes directly in the browser. It is a practical companion when refining responsive interfaces.',
      'It is especially useful when you need a quick visual measurement without opening a full design application or browser extension.',
    ],
    steps: [
      'Open the ruler tool in a new tab.',
      'Place the measuring guide over the element or spacing you want to inspect.',
      'Compare the measurement with your design target or CSS value.',
      'Repeat at desktop, tablet, and mobile viewport sizes.',
      'Use the result as a quick check, not as the only source of truth.',
    ],
    bestFor: [
      'Checking UI spacing',
      'Reviewing responsive layout width',
      'Comparing design mockups with implementation',
      'Finding visual alignment issues during QA',
    ],
    examples: [
      'Measure the gap between a sidebar and content area after a responsive layout change.',
      'Check whether a button group still fits inside a mobile viewport.',
      'Compare a live page against a design handoff when spacing looks slightly off.',
    ],
    limitations: [
      'Browser zoom and device pixel ratio can affect perceived measurements.',
      'Use DevTools for exact CSS box model values when precision matters.',
      'Measure at multiple viewport sizes for responsive pages.',
    ],
    relatedGuides: [
      { title: 'Timezone guide for remote teams', href: '/blog/timezone-guide-for-remote-teams' },
    ],
    faq: [
      {
        q: 'Is this a replacement for browser DevTools?',
        a: 'No. It is a fast visual aid. DevTools remains the best way to inspect exact computed styles and box model values.',
      },
      {
        q: 'When is a ruler useful?',
        a: 'It helps during visual QA, handoff checks, and quick layout reviews where approximate spacing is enough to spot a problem.',
      },
    ],
  },
  curl: {
    overview: [
      'The Curl Tool provides a browser-based way to test HTTP requests without leaving the web workflow. It is useful for checking status codes, headers, payloads, authentication behavior, and error responses.',
      'API testing is most helpful when requests are small, repeatable, and clearly documented. A lightweight tool makes those checks easier during development and support work.',
    ],
    steps: [
      'Open the Curl Tool.',
      'Choose the HTTP method and enter the endpoint URL.',
      'Add headers, query parameters, or body data only when needed.',
      'Send the request and review the status code, headers, and response body.',
      'Save or copy only non-sensitive examples for documentation or bug reports.',
    ],
    bestFor: [
      'Testing REST endpoints',
      'Debugging backend responses',
      'Checking authentication headers',
      'Comparing expected and actual response payloads',
    ],
    examples: [
      'Send a POST request with a small JSON body to confirm validation behavior.',
      'Check whether an expired token returns a useful 401 response.',
      'Compare successful and failing API responses while reproducing a frontend bug.',
    ],
    limitations: [
      'Avoid sending production tokens or secrets through shared devices.',
      'Some APIs block browser-origin requests through CORS policy.',
      'Large files and complex multi-step flows may need specialized API clients.',
    ],
    relatedGuides: [
      { title: 'How to test API requests effectively', href: '/blog/how-to-test-api-requests' },
    ],
    faq: [
      {
        q: 'Can browser API tools test every endpoint?',
        a: 'Not always. CORS, authentication flows, file uploads, and private network rules may require a command-line client or dedicated API platform.',
      },
      {
        q: 'What should I check first in a response?',
        a: 'Start with status code, response shape, error message, and whether the response matches the contract expected by the frontend or client.',
      },
    ],
  },
  go: {
    overview: [
      'The URL Shortener turns long links into cleaner links that are easier to share. It is useful for internal tools, quick references, presentation links, and places where a very long URL would be distracting.',
      'A good short link should be understandable, managed responsibly, and used only when the destination is trustworthy.',
    ],
    steps: [
      'Open the URL shortener.',
      'Paste the full destination URL.',
      'Choose a short code if custom aliases are supported.',
      'Create the short link and test it before sharing.',
      'Keep track of important links so stale destinations can be updated or retired.',
    ],
    bestFor: [
      'Sharing long URLs in chat or slides',
      'Creating memorable internal links',
      'Cleaning up campaign or documentation links',
      'Managing redirect destinations in one place',
    ],
    examples: [
      'Create a short link for a workshop registration page shown on a projector.',
      'Turn a long internal document URL into a memorable support shortcut.',
      'Use a stable short link in printed material when the final destination may change later.',
    ],
    limitations: [
      'Short links can hide the final destination, so use them transparently.',
      'Avoid shortening suspicious, harmful, or misleading URLs.',
      'Important public links should be monitored for destination changes.',
    ],
    relatedGuides: [
      { title: 'How URL shorteners work', href: '/blog/how-url-shorteners-work' },
    ],
    faq: [
      {
        q: 'Are short links safe?',
        a: 'They can be safe when managed responsibly, but they also hide the destination. Use clear labels and share them only from trusted sources.',
      },
      {
        q: 'What makes a good short code?',
        a: 'A good code is short, readable, and related to the destination or purpose without exposing sensitive information.',
      },
    ],
  },
  qr: {
    overview: [
      'The QR Generator creates scannable codes for links, text, contact information, events, and other small payloads. QR codes are useful when people need to move from a physical or shared screen context into a digital action.',
      'The best QR codes are paired with clear labels, trustworthy destinations, and enough contrast for reliable scanning.',
    ],
    steps: [
      'Open the QR Generator.',
      'Enter the URL or text you want to encode.',
      'Generate the code and scan it with a phone before publishing.',
      'Place it near a clear explanation of what the scan will open.',
      'Use a short, stable URL when the code will be printed.',
    ],
    bestFor: [
      'Sharing links from printed materials',
      'Event check-in or registration links',
      'Wi-Fi or contact information sharing',
      'Internal workflow shortcuts',
    ],
    examples: [
      'Generate a QR code for an event feedback form.',
      'Put a setup guide link on printed onboarding material.',
      'Share a support page from a physical notice or counter display.',
    ],
    limitations: [
      'Printed QR codes should be tested at the final size.',
      'Do not encode secrets, passwords, or private tokens.',
      'Users should know what destination they are scanning.',
    ],
    relatedGuides: [
      { title: 'What is a QR code and when should you use it?', href: '/blog/what-is-qr-code' },
      { title: 'How URL shorteners work', href: '/blog/how-url-shorteners-work' },
    ],
    faq: [
      {
        q: 'Should I use a short URL in a QR code?',
        a: 'Often yes, especially for printed materials. Shorter data usually creates simpler codes that scan more reliably.',
      },
      {
        q: 'Can a QR code contain private information?',
        a: 'Technically yes, but it should not. Anyone who can scan or photograph the code may read the encoded content.',
      },
    ],
  },
  id: {
    overview: [
      'The Test ID Data Generator creates mock identity-like data for software testing, form validation, demos, and educational examples. It exists to help development teams avoid using real personal information in test workflows.',
      'Generated values should be treated as simulated data. They are not real identity documents and must not be used for verification, fraud, impersonation, or legal purposes.',
    ],
    steps: [
      'Open the generator.',
      'Choose the country or data format needed for the test case.',
      'Generate sample values for development or QA.',
      'Use the values only in controlled testing environments.',
      'Document that the data is fake when sharing screenshots or test cases.',
    ],
    bestFor: [
      'Testing form validation',
      'Creating demo records',
      'Building QA scenarios',
      'Avoiding real personal data in development',
    ],
    examples: [
      'Fill a staging registration form without using a real person’s identity information.',
      'Create repeatable QA examples for form validation states.',
      'Prepare screenshots or demos with clearly fake sample records.',
    ],
    limitations: [
      'Generated data is fake and must not be used as real identity information.',
      'Validation behavior may differ across countries and systems.',
      'Do not use generated values to bypass real-world verification.',
    ],
    relatedGuides: [
      { title: 'How to test API requests effectively', href: '/blog/how-to-test-api-requests' },
    ],
    faq: [
      {
        q: 'Is the generated data real?',
        a: 'No. It is mock data intended for testing, development, and educational scenarios only.',
      },
      {
        q: 'Can this be used in production onboarding?',
        a: 'No. Production identity workflows should use legitimate user-provided data and compliant verification providers.',
      },
    ],
  },
  time: {
    overview: [
      'The World Clock helps compare current times across different time zones. It is useful for remote teams, international calls, release planning, and support workflows where timing mistakes can create confusion.',
      'Time zone awareness is not just about the clock. It also helps teams choose respectful meeting times and communicate deadlines clearly.',
    ],
    steps: [
      'Open the World Clock.',
      'Add or compare the locations relevant to your team or customer.',
      'Check business-hour overlap before suggesting a meeting time.',
      'Write times with the time zone abbreviation or city name.',
      'Recheck around daylight saving changes.',
    ],
    bestFor: [
      'Remote team coordination',
      'Scheduling international meetings',
      'Planning releases across regions',
      'Checking support coverage windows',
    ],
    examples: [
      'Find a meeting time that works for Bangkok, London, and San Francisco.',
      'Check release timing before announcing a maintenance window.',
      'Compare support handoff windows across two regional teams.',
    ],
    limitations: [
      'Daylight saving changes can affect recurring meetings.',
      'Time zone abbreviations can be ambiguous.',
      'Always confirm critical deadlines in one canonical time zone.',
    ],
    relatedGuides: [
      { title: 'Timezone guide for remote teams', href: '/blog/timezone-guide-for-remote-teams' },
    ],
    faq: [
      {
        q: 'What is the safest way to share meeting times?',
        a: 'Include the date, time, and time zone, or share a calendar invite that automatically converts for each attendee.',
      },
      {
        q: 'Why do time zones change during the year?',
        a: 'Some regions observe daylight saving time, which shifts local clocks and changes overlap with other locations.',
      },
    ],
  },
  editor: {
    overview: [
      'PPText Editor is a lightweight browser-based text editor for quick writing, notes, drafts, and code snippets. It is designed for low-friction editing when you want a focused workspace without opening a heavier app.',
      'It is useful for temporary notes and structured text work, but important files should still be saved and backed up in the right project or document system.',
    ],
    steps: [
      'Open PPText Editor.',
      'Create or open the text content you want to edit.',
      'Use the editor for drafting, cleanup, or quick changes.',
      'Save or export important work to the correct location.',
      'Avoid storing sensitive secrets in temporary browser sessions.',
    ],
    bestFor: [
      'Quick note-taking',
      'Drafting documentation',
      'Editing snippets',
      'Reducing context switching during focused work',
    ],
    examples: [
      'Draft release notes before moving them into a project management tool.',
      'Clean up a JSON snippet or configuration note during debugging.',
      'Write a temporary checklist while switching between multiple web apps.',
    ],
    limitations: [
      'Browser storage and local state can be cleared by user settings.',
      'Sensitive secrets should be stored in proper secret managers.',
      'Large project editing may still be better in a dedicated IDE.',
    ],
    relatedGuides: [
      { title: 'How to test API requests effectively', href: '/blog/how-to-test-api-requests' },
    ],
    faq: [
      {
        q: 'Is PPText Editor meant to replace an IDE?',
        a: 'No. It is better for quick writing and lightweight editing. IDEs remain better for complex projects, debugging, and source control workflows.',
      },
      {
        q: 'What should I avoid putting in a browser editor?',
        a: 'Avoid passwords, private keys, access tokens, and other sensitive information unless you fully understand how the tool stores data.',
      },
    ],
  },
  dream: {
    overview: [
      'The Lucky Number Generator converts text into playful number suggestions for entertainment. It is not a prediction tool and should not be used for financial, legal, medical, or life decisions.',
      'The value of this tool is lighthearted exploration. It gives users a simple way to turn a phrase, dream note, or message into a number-based result for fun.',
    ],
    steps: [
      'Open the Lucky Number Generator.',
      'Enter the text or phrase you want to use.',
      'Generate the number result.',
      'Treat the output as entertainment only.',
      'Do not rely on generated numbers for important decisions.',
    ],
    bestFor: [
      'Entertainment',
      'Turning text into playful number ideas',
      'Trying a lightweight novelty tool',
      'Sharing harmless results with friends',
    ],
    examples: [
      'Turn a short dream note into a playful number result.',
      'Use a harmless phrase or nickname for entertainment with friends.',
      'Compare different text inputs just for curiosity, without treating results as advice.',
    ],
    limitations: [
      'Results have no guaranteed real-world outcome.',
      'The tool should not be treated as advice or prediction.',
      'Avoid entering sensitive private information.',
    ],
    relatedGuides: [
      { title: 'How URL shorteners work', href: '/blog/how-url-shorteners-work' },
    ],
    faq: [
      {
        q: 'Are the numbers meaningful?',
        a: 'They are generated for fun. The output should be treated as entertainment, not as a prediction or recommendation.',
      },
      {
        q: 'Can I enter personal information?',
        a: 'It is better to avoid sensitive information. Use harmless text or general phrases instead.',
      },
    ],
  },
  hash: {
    overview: [
      'The Hash Generator creates hash values from text input. Hashes are commonly used for comparing data, checking whether content changed, learning how algorithms represent input, and creating repeatable fingerprints for non-secret values.',
      'A hash is designed to be one-way: the same input should produce the same output, but the output should not be treated as a readable or reversible version of the original text. This makes hashes useful for comparison, but different from encryption.',
    ],
    steps: [
      'Open the Hash Generator.',
      'Enter the text value you want to hash.',
      'Choose the available hash algorithm or compare outputs across algorithms.',
      'Copy the hash only when it is safe to share.',
      'Avoid entering passwords, private keys, access tokens, or sensitive production data.',
    ],
    bestFor: [
      'Generating hashes from text',
      'Comparing checksum-style values',
      'Learning the difference between hashing and encryption',
      'Creating repeatable fingerprints for non-sensitive examples',
    ],
    examples: [
      'Generate a hash for a sample string while learning how SHA-style outputs look.',
      'Compare two text values by checking whether their generated hashes match.',
      'Create a checksum-like reference for documentation examples or test fixtures.',
    ],
    limitations: [
      'Hashing is not encryption because it is not meant to be reversed.',
      'Fast hashes are not enough for safe password storage by themselves.',
      'MD5 and SHA-1 are not recommended for security-sensitive integrity or collision-resistance needs.',
      'Never paste secrets into a tool unless you understand exactly how the tool handles input.',
    ],
    relatedGuides: [
      { title: 'Hash generator and checksum guide', href: '/blog/hash-generator-checksum-guide' },
      { title: 'How to create strong passwords safely', href: '/blog/how-to-create-strong-passwords' },
    ],
    faq: [
      {
        q: 'Is hashing the same as encryption?',
        a: 'No. Encryption is designed to be reversible with the right key. Hashing is designed to create a one-way fingerprint for comparison.',
      },
      {
        q: 'Can I hash passwords with this tool for production storage?',
        a: 'No. Production password storage should use dedicated password hashing algorithms such as bcrypt, scrypt, or Argon2 with salts and appropriate work factors.',
      },
    ],
  },
  noyap: {
    overview: [
      'Noyap is a CLI-first ruleset for AI coding agents. It is designed for developers who want agents to spend less space on generic explanation and more attention on concrete code, tradeoffs, warnings, and next actions.',
      'The tool focuses on communication rules rather than replacing the agent itself. It helps configure concise behavior, multilingual responses, and safer collaboration habits inside coding workflows.',
    ],
    steps: [
      'Open the Noyap website.',
      'Review the install command and supported agent workflows.',
      'Run the CLI in a project where you want concise agent rules.',
      'Choose the agent, language mode, and merge strategy that fit the repository.',
      'Review generated instructions before relying on them in real work.',
    ],
    bestFor: [
      'Reducing verbose AI coding-agent responses',
      'Standardizing agent communication rules across projects',
      'Working naturally with Thai, English, or mixed developer prompts',
      'Keeping existing AGENTS.md project rules while adding concise defaults',
    ],
    examples: [
      'Add concise AI-agent rules to a project where responses have become too long.',
      'Configure Thai-native developer phrasing for a local team workflow.',
      'Merge Noyap defaults into an existing AGENTS.md without overwriting project-specific warnings.',
    ],
    limitations: [
      'Noyap changes communication rules; it does not guarantee the agent will always make correct code decisions.',
      'Generated or merged instructions should be reviewed before use in important repositories.',
      'Project-specific safety, deployment, and security rules should remain authoritative.',
      'Concise responses still need enough detail for high-risk code, migrations, auth, payments, and data handling.',
    ],
    relatedGuides: [
      { title: 'Noyap guide for concise AI coding agents', href: '/blog/noyap-ai-coding-agent-guide' },
      { title: 'Browser text editor workflows for quick notes and drafts', href: '/blog/browser-text-editor-workflows' },
    ],
    faq: [
      {
        q: 'Does Noyap replace my coding agent?',
        a: 'No. Noyap provides communication and workflow rules that can be used with coding agents. The agent still performs the actual code reasoning and edits.',
      },
      {
        q: 'Should concise mode remove warnings?',
        a: 'No. Concise output should remove filler, not important safety notes, blockers, assumptions, or verification details.',
      },
    ],
  },
}

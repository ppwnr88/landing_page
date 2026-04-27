export interface Tool {
  id: string
  title: string
  description: string
  url: string
  icon: string
  accent: string

  // เพิ่มเพื่อเพิ่ม content value
  longDescription: string
  useCases: string[]
  disclaimer?: string
}

export const tools: Tool[] = [
  {
    id: 'sql',
    title: 'SQL Client',
    description: 'Run SQL queries directly from your browser',
    longDescription:
      'A lightweight browser-based SQL client that helps developers run queries, test database logic, and debug issues quickly without installing heavy desktop tools.',
    useCases: [
      'Test SQL queries quickly',
      'Debug database issues',
      'Practice SQL learning',
    ],
    url: 'https://sql.wannarat.cc/login',
    icon: 'Database',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'passgen',
    title: 'Password Generator',
    description: 'Generate secure passwords instantly',
    longDescription:
      'Create strong and secure passwords with customizable length and complexity to protect your accounts and sensitive data.',
    useCases: [
      'Generate secure passwords',
      'Improve account security',
      'Avoid weak or reused passwords',
    ],
    url: 'https://passgen.wannarat.cc',
    icon: 'KeyRound',
    accent: 'from-earth-800 to-earth-900',
  },
  {
    id: 'ruler',
    title: 'Ruler Tool',
    description: 'Measure screen size easily',
    longDescription:
      'A simple browser-based ruler tool that helps designers and developers measure elements directly on screen.',
    useCases: [
      'Measure UI elements',
      'Check spacing and layout',
      'Assist frontend design work',
    ],
    url: 'https://ruler.wannarat.cc',
    icon: 'Ruler',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'curl',
    title: 'Curl Tool',
    description: 'Test API requests quickly',
    longDescription:
      'Send HTTP requests directly from your browser to test APIs, debug endpoints, and inspect responses without using command line tools.',
    useCases: [
      'Test REST APIs',
      'Debug backend endpoints',
      'Inspect HTTP responses',
    ],
    url: 'https://curl.wannarat.cc',
    icon: 'Terminal',
    accent: 'from-earth-800 to-earth-900',
  },
  {
    id: 'go',
    title: 'URL Shortener',
    description: 'Shorten and manage your links',
    longDescription:
      'Create short and manageable URLs for sharing links easily while keeping them clean and trackable.',
    useCases: [
      'Shorten long URLs',
      'Share links easily',
      'Manage redirects',
    ],
    url: 'https://go.wannarat.cc',
    icon: 'Link2',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'qr',
    title: 'QR Generator',
    description: 'Create QR codes instantly',
    longDescription:
      'Generate QR codes for URLs, text, or other data formats instantly for use in marketing, sharing, or automation.',
    useCases: [
      'Create QR for links',
      'Marketing materials',
      'Contact sharing',
    ],
    url: 'https://qr.wannarat.cc',
    icon: 'QrCode',
    accent: 'from-earth-800 to-earth-900',
  },
  {
    id: 'id',
    title: 'Test ID Data Generator',
    description: 'Generate fake ID data for testing purposes',
    longDescription:
      'Generate mock identification data for development and testing scenarios such as form validation and system testing.',
    useCases: [
      'Test form validation',
      'Generate mock data',
      'Development testing',
    ],
    disclaimer:
      'This tool generates fake data for testing purposes only. Do not use for real-world identity or illegal activities.',
    url: 'https://id.wannarat.cc',
    icon: 'IdCard',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'time',
    title: 'World Clock',
    description: 'Check current time across timezones instantly',
    longDescription:
      'View and compare current times across multiple timezones to support remote teams and global collaboration.',
    useCases: [
      'Remote team coordination',
      'Timezone comparison',
      'Scheduling meetings',
    ],
    url: 'https://time.wannarat.cc',
    icon: 'Clock',
    accent: 'from-earth-800 to-earth-900',
  },
  {
    id: 'editor',
    title: 'PPText Editor',
    description: 'Fast local text editor in your browser',
    longDescription:
      'A lightweight browser-based text editor designed for fast writing, editing, and switching between files with a smooth experience.',
    useCases: [
      'Quick note-taking',
      'Code editing',
      'Draft writing',
    ],
    url: 'https://editor.wannarat.cc',
    icon: 'FileCode',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'dream',
    title: 'Lucky Number Generator',
    description: 'Generate lucky numbers from text input',
    longDescription:
      'Convert text input into numbers for entertainment and fun purposes. Designed as a playful utility.',
    useCases: [
      'Entertainment',
      'Fun number generation',
    ],
    disclaimer:
      'This tool is for entertainment purposes only. Results have no guaranteed real-world outcome.',
    url: 'https://dream.wannarat.cc/',
    icon: 'Calculator',
    accent: 'from-earth-800 to-earth-900',
  },
]
export interface Tool {
  id: string
  title: string
  description: string
  url: string
  icon: string
  accent: string
}

export const tools: Tool[] = [
  {
    id: 'sql',
    title: 'SQL Client',
    description: 'Run SQL queries directly from your browser',
    url: 'https://sql.wannarat.cc',
    icon: 'Database',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'passgen',
    title: 'Password Generator',
    description: 'Generate secure passwords instantly',
    url: 'https://passgen.wannarat.cc',
    icon: 'KeyRound',
    accent: 'from-earth-800 to-earth-900',
  },
  {
    id: 'ruler',
    title: 'Ruler Tool',
    description: 'Measure screen size easily',
    url: 'https://ruler.wannarat.cc',
    icon: 'Ruler',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'curl',
    title: 'Curl Tool',
    description: 'Test API requests quickly',
    url: 'https://curl.wannarat.cc',
    icon: 'Terminal',
    accent: 'from-earth-800 to-earth-900',
  },
  {
    id: 'go',
    title: 'URL Shortener',
    description: 'Shorten and manage your links',
    url: 'https://go.wannarat.cc',
    icon: 'Link2',
    accent: 'from-forest-800 to-forest-900',
  },
  {
    id: 'qr',
    title: 'QR Generator',
    description: 'Create QR codes instantly',
    url: 'https://qr.wannarat.cc',
    icon: 'QrCode',
    accent: 'from-earth-800 to-earth-900',
  },
]

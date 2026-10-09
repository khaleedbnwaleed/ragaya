import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ragaya & Sons Nigeria Limited | Infrastructure, Renewable Energy & Engineering',
  description: 'Ragaya & Sons Nigeria Limited delivers infrastructure, renewable energy, water, engineering and institutional solutions across Nigeria, with documented public-sector project activity in Jigawa State.',
  keywords: ['Ragaya & Sons Nigeria Limited', 'infrastructure company Nigeria', 'solar installation Nigeria', 'water infrastructure Jigawa', 'renewable energy company Nigeria'],
  openGraph: {
    title: 'Ragaya & Sons Nigeria Limited',
    description: 'Engineering infrastructure for a more sustainable future.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: '/images/Ragaya%20Logo.png',
    apple: '/images/Ragaya%20Logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

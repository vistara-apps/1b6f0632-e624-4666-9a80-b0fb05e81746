import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Collective Intelligence Engine',
  description: 'Leveraging Farcaster for social consensus, from problem identification to solution selection.',
  openGraph: {
    title: 'Collective Intelligence Engine',
    description: 'Leveraging Farcaster for social consensus',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BuildSolutionWithdraw_funds',
  description: 'Discovered problem on GitHub Issues with engagement 2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

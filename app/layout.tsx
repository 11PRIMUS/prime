import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alok | Terminal Portfolio',
  description: 'Machine Learning and AI developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  )
}
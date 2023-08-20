import type { Metadata } from 'next'

import { Footer } from '@/components/Footer'

import './globals.css'

export const metadata: Metadata = {
  title: 'スタンプぽん',
  description: 'スタンプをポンできるアプリです',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="grid grid-rows-[1fr_auto] min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  )
}

import React from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { i18n } from '@/i18n.config'
import { Providers } from './providers'
import './globals.css'





export const metadata: Metadata = {
  title: 'Auth Admin Dashboard',
  description: 'Multi-language admin dashboard with role-based access',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale?: string }>
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

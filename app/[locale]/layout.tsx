import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth Admin Dashboard',
  description: 'Multi-language admin dashboard with role-based access',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {children}
    </div>
  )
}

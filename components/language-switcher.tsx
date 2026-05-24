'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { i18n } from '@/i18n.config'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as string) || i18n.defaultLocale

  const handleLanguageChange = (newLocale: string) => {
    const pathname = window.location.pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      {i18n.locales.map((loc) => (
        <Button
          key={loc}
          variant={locale === loc ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleLanguageChange(loc)}
          className="gap-2"
        >
          <Globe className="w-4 h-4" />
          {loc.toUpperCase()}
        </Button>
      ))}
    </div>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { i18n } from './i18n.config'

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return pathname.split('/')[1]
  return i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request)
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = i18n.locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  )

  // Add locale to pathname if missing
  if (!pathnameHasLocale) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }


  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}

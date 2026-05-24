// components/admin/StatsCard.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor: string
  mainValue?: string | number
  mainValueColor?: string
  secondaryText?: string
  footerText?: string
}

export function StatsCard({
  title,
  description,
  icon: Icon,
  iconColor,
  mainValue,
  mainValueColor = 'text-slate-900',
  secondaryText,
  footerText
}: StatsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${iconColor}`} />
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {mainValue && (
          <div className={`text-3xl font-bold ${mainValueColor}`}>
            {mainValue}
          </div>
        )}
        {secondaryText && (
          <p className="text-sm text-slate-600 mt-2">
            {secondaryText}
          </p>
        )}
        {footerText && (
          <p className="text-sm text-slate-500 mt-2">
            {footerText}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
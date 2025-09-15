'use client'

import { useI18n } from '@/components/providers/i18n-provider'
import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames } from '@/config/i18n'

export function LanguageSwitcher() {
  const { locale } = useI18n()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <div className="flex items-center space-x-2">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleLanguageChange(l)}
          className={`px-2 py-1 text-sm rounded ${
            locale === l
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  )
} 
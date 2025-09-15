export const locales = ['en', 'zh'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'zh'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
} 
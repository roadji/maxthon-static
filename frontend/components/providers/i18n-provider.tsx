'use client'

import { createContext, useContext } from 'react'
import { Locale, locales } from '@/config/i18n'

type I18nProviderProps = {
  children: React.ReactNode
  locale: Locale
}

type I18nContextType = {
  locale: Locale
  locales: readonly Locale[]
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children, locale }: I18nProviderProps) {
  return (
    <I18nContext.Provider value={{ locale, locales }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
} 
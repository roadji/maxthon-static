import { Inter, Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { locales, Locale } from '@/config/i18n'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { I18nProvider } from '@/components/providers/i18n-provider'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: '遨遊國際交流中心',
  description: 'Your trusted partner for international tours and exchanges',
  keywords: ['tours', 'exchange', 'international', 'travel', 'education'],
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  
  // Skip validation for non-locale paths like favicon.ico
  if (!lang.includes('.')) {
    if (!locales.includes(lang as Locale)) {
      throw new Error(`Invalid locale: ${lang}`)
    }
  }

  return (
    <I18nProvider locale={lang as Locale}>
      {children}
    </I18nProvider>
  )
} 
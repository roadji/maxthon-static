'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useTranslations } from '@/lib/translations'

interface HeaderProps {
  lang: string
}

export default function Header({ lang }: HeaderProps) {
  const { t } = useTranslations(lang)
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm'
    }`}>
      <div className="container mx-auto px-4 flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <img
              src="/images/logo_RGB.png"
              alt="遨遊國際交流中心 Logo"
              className="h-10 w-auto object-contain"
              style={{ maxHeight: 40 }}
            />
            <span className={`font-display text-xl font-bold transition-colors ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                : 'text-gray-900'
            }`}>
              {lang === 'zh' ? '遨遊國際交流中心' : 'Maxthon'}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href={`/${lang}/tours`} className={`transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-gray-900'
            }`}>
              {t('navigation.tours')}
            </Link>
            <Link href={`/${lang}/contact`} className={`transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-gray-900'
            }`}>
              {t('navigation.contact')}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-t bg-white px-4 py-2">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href={`/${lang}/tours`} className="text-gray-700 transition-colors hover:text-blue-600">
            {t('navigation.tours')}
          </Link>
          <Link href={`/${lang}/contact`} className="text-gray-700 transition-colors hover:text-blue-600">
            {t('navigation.contact')}
          </Link>
        </nav>
      </div>
    </header>
  )
} 
import Header from './Header'
import Footer from './Footer'
import CookieConsent from '../CookieConsent'

interface PageLayoutProps {
  children: React.ReactNode
  lang: string
}

export default function PageLayout({ children, lang }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} />
      <main className="flex-1">
        {children}
      </main>
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  )
} 
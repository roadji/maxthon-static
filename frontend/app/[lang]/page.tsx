import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Locale, locales } from '@/config/i18n'
import { LanguageSwitcher } from '@/components/language-switcher'
import PageLayout from '@/components/layout/PageLayout'
import ErrorReloadButton from '@/components/ErrorReloadButton'
import TourScroller from '@/components/tours/TourScroller'
import { getTranslations } from '@/lib/translations'
import { FontAwesomeIcon } from '@/components/ui/FontAwesomeIcon'
import homeZh from '@/content/home.zh.json'
import homeEn from '@/content/home.en.json'

async function getHomeContent(lang: string = 'zh') {
  return lang === 'en' ? (homeEn as any) : (homeZh as any)
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || 'zh'  // Default to Chinese
  let homeContent = null
  let error = null
  try {
    homeContent = await getHomeContent(lang)
  } catch (e: any) {
    error = e
  }
  const t = await getTranslations(lang)

  if (error) {
    return (
      <PageLayout lang={lang}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <svg className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.662-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('home.errorLoadingContent')}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{error.message}</p>
            <ErrorReloadButton />
          </div>
        </div>
      </PageLayout>
    )
  }

  // Get content with fallbacks
  const heroSection = homeContent?.page_content?.hero || {}
  const aboutSection = homeContent?.about_content?.hero || {}
  const missionSection = homeContent?.about_content?.mission || {}
  const features = homeContent?.features || []
  const aboutServices = homeContent?.about_services || []
  const featuredTours = homeContent?.featured_tours || []

  return (
    <PageLayout lang={lang}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-24 lg:py-32 sm:px-6 lg:px-8 text-center">
          {/* Main heading with animated gradient */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
                {heroSection.title || t('home.title')}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mx-auto max-w-4xl text-xl md:text-2xl text-blue-100 leading-relaxed mb-12 font-light">
            {heroSection.subtitle || t('home.subtitle')}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href={`/${lang}/tours`}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                {t('home.exploreToursBtn')}
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
            
            <a
              href="#about"
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center">
                {t('home.learnMoreBtn')}
                <svg className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </a>
          </div>


        </div>

        {/* Modern bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                {t('home.whyChooseUs')}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
                {t('home.whyChooseUsSubtitle')}
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                      <FontAwesomeIcon 
                        iconClass={feature.icon || ''} 
                        className="text-3xl"
                        fallbackIcon={
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        }
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Us Section */}
      <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* About Header */}
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              {aboutSection.title || t('home.aboutUsTitle')}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
              {aboutSection.subtitle || t('home.aboutUsSubtitle')}
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <div className="text-center">
              <h3 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                {missionSection.title || t('home.ourMission')}
              </h3>
              <div className="mx-auto max-w-4xl">
                {missionSection.content ? (
                  <div 
                    className="text-xl text-gray-600 leading-relaxed prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: missionSection.content }} 
                  />
                ) : (
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {t('home.ourMissionContent')}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Services */}
          {aboutServices.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  {t('home.whatWeOffer')}
                </h3>
                <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
                  {t('home.whatWeOfferSubtitle')}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {aboutServices.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                        <FontAwesomeIcon 
                          iconClass={service.icon || ''} 
                          className="text-2xl"
                          fallbackIcon={
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          }
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tours Row Section (Horizontal Scroll) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              {t('home.ourToursTitle')}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
              {t('home.ourToursSubtitle')}
            </p>
          </div>

          {/* Horizontal Scrollable Row as Client Component */}
          <TourScroller tours={homeContent?.all_tours || []} lang={lang} />

          <div className="text-center mt-12">
            <Link
              href={`/${lang}/tours`}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              {t('home.viewAllToursBtn')}
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">{t('home.readyToStart')}</span>
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                {t('home.culturalJourney')}
              </span>
            </h2>
            <p className="mt-6 text-xl text-blue-100 leading-relaxed max-w-2xl">
              {t('home.ctaSubtitle')}
            </p>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0 lg:flex-col xl:flex-row">
            <Link 
              href={`/${lang}/contact`} 
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-600 transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              {t('home.getInTouchBtn')}
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
            <Link 
              href={`/${lang}/tours`} 
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              {t('home.viewToursBtn')}
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || 'zh'
  const baseUrl = process.env.NEXTAUTH_URL || 'https://maxthon.vercel.app'
  
  // Language-specific metadata with improved SEO
  const metadata = {
    zh: {
      title: '遨遊國際交流中心 | 專業教育旅行與文化交流',
      description: '香港領先的教育旅行服務提供商，為學校和教育機構提供豐富多元的遊學團、交流計劃和體驗式學習活動。20年專業經驗，安全可靠，讓學生在旅程中成長。',
      keywords: '教育旅行, 遊學團, 學生交流, 香港教育旅遊, 海外遊學, 文化交流, 體驗式學習, 學校旅行, 教育考察團',
    },
    en: {
      title: 'Maxthon International Exchange Center | Professional Educational Tours',
      description: 'Hong Kong\'s leading educational tour provider offering immersive study tours, exchange programs, and experiential learning activities for schools. 20 years of expertise, safe and reliable, fostering student growth through travel.',
      keywords: 'educational tours, study tours, student exchange, Hong Kong educational travel, overseas study, cultural exchange, experiential learning, school trips',
    }
  }
  
  const currentMeta = metadata[lang as keyof typeof metadata] || metadata.zh
  
  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: currentMeta.keywords,
    authors: [{ name: '遨遊國際交流中心' }],
    creator: '遨遊國際交流中心',
    publisher: '遨遊國際交流中心',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `${baseUrl}/${lang}`,
      siteName: '遨遊國際交流中心',
      images: [
        {
          url: `${baseUrl}/images/logo_RGB.png`,
          width: 1200,
          height: 630,
          alt: '遨遊國際交流中心',
        },
      ],
      locale: lang === 'zh' ? 'zh_HK' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [`${baseUrl}/images/logo_RGB.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'zh': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Add your actual verification code
    },
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'zh' },
    { lang: 'en' },
  ]
} 
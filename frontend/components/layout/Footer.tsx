import { useTranslations } from '@/lib/translations';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const { t } = useTranslations(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About/Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo_RGB.png"
                alt="遨遊國際交流中心 Logo"
                className="h-10 w-auto object-contain"
                style={{ maxHeight: 40 }}
              />
              <span className="font-display text-xl font-bold">
                {lang === 'zh' ? '遨遊國際交流中心' : 'Maxthon Universal Exchange'}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              {t('home.ourMissionContent')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{lang === 'zh' ? '快速連結' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li><a href={`/${lang}/tours`} className="text-gray-400 hover:text-white transition-colors">{t('navigation.tours')}</a></li>
              <li><a href={`/${lang}/contact`} className="text-gray-400 hover:text-white transition-colors">{t('footer.contactUs')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact.contactInformation')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@hkstudytour.com" className="hover:text-white transition-colors">
                  info@hkstudytour.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+85227219911" className="hover:text-white transition-colors">
                  (852) 2721 9911
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382a13.37 13.37 0 01-5.453-5.453l2.032-2.032a1.12 1.12 0 00.273-1.12l-.637-2.13A1.12 1.12 0 0012.6 3.6h-2.25A1.12 1.12 0 009.23 4.72C8.1 7.1 8.1 9.9 9.23 12.28c1.13 2.38 3.93 2.38 6.31 1.25a1.12 1.12 0 001.12-.273l2.032-2.032a1.12 1.12 0 00-.273-1.12l-2.13-.637a1.12 1.12 0 00-1.12.273z" />
                </svg>
                <a href="https://wa.me/85261996000" target="_blank" rel="noopener" className="hover:text-white transition-colors">
                  WhatsApp: +852 6199 6000
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {lang === 'zh'
                    ? '新界火炭山尾街18-24號沙田商業中心17樓8室'
                    : 'Room 8, 17/F, Shatin Galleria, 18-24 Sha Mei Street, Fo Tan, N.T.'}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <div className="mb-2">
            <a href={`/${lang}/privacy`} className="hover:text-white transition-colors mx-2">
              {lang === 'zh' ? '私隱政策' : 'Privacy Policy'}
            </a>
            <span>•</span>
            <a href={`/${lang}/terms`} className="hover:text-white transition-colors mx-2">
              {lang === 'zh' ? '服務條款' : 'Terms of Service'}
            </a>
            <span>•</span>
            <a href={`/${lang}/cookies`} className="hover:text-white transition-colors mx-2">
              {lang === 'zh' ? 'Cookie 設定' : 'Cookie Settings'}
            </a>
          </div>
          <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
          <p className="mt-1">
            {lang === 'zh' ? '旅遊社牌照號碼：353855' : 'Travel Agency License No.: 353855'}
          </p>
        </div>
      </div>
    </footer>
  )
} 
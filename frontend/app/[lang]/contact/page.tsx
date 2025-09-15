import PageLayout from '@/components/layout/PageLayout';
import { getTranslations } from '@/lib/translations';

// Commented out unused imports - will be needed when email functionality is implemented
// import { useState, FormEvent } from 'react';
// import { useMutation } from '@tanstack/react-query';
// import { contentApi } from '@/lib/api/content';
// import { useUIStore } from '@/stores/useUIStore';
// import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface ContactPageProps {
  params: Promise<{ lang: string }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  
  const whatsappNumber = "85261996000";
  const whatsappMessage = "Hello! 我想查詢遊學團報價";

  return (
    <PageLayout lang={lang}>
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900">{t('contact.title')}</h1>
          <p className="mt-4 text-lg text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* WhatsApp CTA Section */}
          <div className="mb-12 rounded-lg bg-gradient-to-r from-green-50 to-green-100 p-8 shadow-lg border-2 border-green-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
                {lang === 'zh' ? '立即透過 WhatsApp 聯絡我們！' : 'Contact Us Instantly via WhatsApp!'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                {lang === 'zh' 
                  ? '獲得最快回覆！我們的團隊隨時準備為您解答遊學團問題，提供專業建議和即時報價。' 
                  : 'Get the fastest response! Our team is ready to answer your study tour questions, provide professional advice, and instant quotes.'}
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {lang === 'zh' ? '開始 WhatsApp 對話' : 'Start WhatsApp Chat'}
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900">{t('contact.contactInformation')}</h2>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{t('contact.address')}</h3>
                    <p className="mt-1 text-gray-600">
                      Room 8, 17/F, Shatin Galleria,<br />
                      18-24 Sha Mei Street, Fo Tan, N.T.<br />
                      <span className="text-gray-500">新界火炭山尾街18-24號沙田商業中心17樓8室</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t('contact.contactDetails')}</h3>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="h-5 w-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+85227219911" className="text-gray-600 hover:text-blue-600 transition-colors">
                          (852) 2721 9911
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="h-5 w-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h3zM9 3v1h6V3H9zm5 5H10v2h4V8zm0 4H10v2h4v-2z" />
                        </svg>
                        <span className="text-gray-600">(852) 2721 9611</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="h-5 w-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:info@hkstudytour.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                          info@hkstudytour.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">WhatsApp</h3>
                    <p className="mt-1 text-gray-600">
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        +852 6199 6000
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900">{t('contact.businessHours')}</h2>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{t('contact.mondayFriday')}</h3>
                    <p className="mt-1 text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t('contact.saturday')}</h3>
                    <p className="mt-1 text-gray-600">9:00 AM - 1:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t('contact.sundayHolidays')}</h3>
                    <p className="mt-1 text-gray-600">{t('contact.closed')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">{t('contact.mapTitle')}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8999999999996!2d114.1953!3d22.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406485e6c1c1f%3A0x1c3cc1c9c0c0c0c0!2sShatin%20Galleria!5e0!3m2!1sen!2shk!4v1620000000000!5m2!1sen!2shk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
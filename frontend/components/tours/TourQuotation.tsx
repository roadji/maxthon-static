"use client";
import QuotationModal from './QuotationModal';
import { useState } from 'react';
import { Tour } from '@/hooks/useTours';

interface TourQuotationProps {
  tour: Tour;
  lang?: string;
}

export default function TourQuotation({ tour, lang = 'zh' }: TourQuotationProps) {
  const [open, setOpen] = useState(false);

  const translations = {
    zh: {
      getCustomQuote: '獲得客製化報價',
      quotationTitle: '索取報價',
      quotationDescription: '想了解更多詳細資訊或自訂行程？請填寫表格，我們會盡快為您提供報價。'
    },
    en: {
      getCustomQuote: 'Get a Custom Quote',
      quotationTitle: 'Request a Quotation',
      quotationDescription: 'Want more details or customize this tour? Fill out the form and we\'ll provide you with a personalized quote.'
    }
  };
  
  const t = translations[lang as keyof typeof translations] || translations.zh;

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 mr-4">
          <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          {t.quotationTitle}
        </h2>
      </div>
      
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8 text-center border border-orange-200">
        <p className="text-gray-700 mb-6 text-lg">
          {t.quotationDescription}
        </p>
        <button
          className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
          onClick={() => setOpen(true)}
          aria-label="Request a quotation for this tour"
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          {t.getCustomQuote}
        </button>
      </div>
      
      {open && (
        <QuotationModal tour={tour} onClose={() => setOpen(false)} lang={lang} />
      )}
    </div>
  );
} 
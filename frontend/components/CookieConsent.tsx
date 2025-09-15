"use client";

import { useState, useEffect } from 'react';

interface CookieConsentProps {
  lang: string;
}

export default function CookieConsent({ lang }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-500 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {lang === 'zh' ? '🍪 Cookie 使用通知' : '🍪 Cookie Notice'}
            </h3>
            <p className="text-gray-700 text-sm">
              {lang === 'zh' 
                ? '我們使用 Cookies 來改善您的瀏覽體驗。' 
                : 'We use cookies to enhance your browsing experience.'}
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {lang === 'zh' ? '僅必要' : 'Essential Only'}
            </button>
            
            <button
              onClick={acceptAll}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {lang === 'zh' ? '接受全部' : 'Accept All'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

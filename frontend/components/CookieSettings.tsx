'use client'

import React, { useState, useEffect } from 'react';

interface CookieSettingsProps {
  lang: string;
}

type CookiePrefs = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPrefs: CookiePrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

const CookieSettings: React.FC<CookieSettingsProps> = ({ lang }) => {
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookiePrefs');
    if (stored) {
      setPrefs({ ...defaultPrefs, ...JSON.parse(stored) });
    }
  }, []);

  const handleToggle = (key: keyof CookiePrefs) => {
    if (key === 'essential') return; // always enabled
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
    // Also update the consent level for the banner
    if (prefs.analytics || prefs.marketing) {
      localStorage.setItem('cookieConsent', 'all');
    } else {
      localStorage.setItem('cookieConsent', 'essential');
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    setPrefs(defaultPrefs);
    localStorage.removeItem('cookiePrefs');
    localStorage.setItem('cookieConsent', 'essential');
    setSaved(false);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg text-gray-800 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {lang === 'zh' ? 'Cookie 偏好設定' : 'Cookie Preferences'}
      </h2>
      <div className="space-y-6">
        {/* Essential */}
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <div className="font-semibold">{lang === 'zh' ? '必要 Cookie' : 'Essential Cookies'}</div>
            <div className="text-gray-500 text-sm">
              {lang === 'zh'
                ? '網站運作所需，無法關閉。'
                : 'Required for website operation and cannot be disabled.'}
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 font-bold mr-2">{lang === 'zh' ? '啟用' : 'Enabled'}</span>
            <input type="checkbox" checked disabled className="accent-blue-500 w-5 h-5" />
          </div>
        </div>
        {/* Analytics */}
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <div className="font-semibold">{lang === 'zh' ? '分析 Cookie' : 'Analytics Cookies'}</div>
            <div className="text-gray-500 text-sm">
              {lang === 'zh'
                ? '協助我們了解網站使用情況，優化體驗。'
                : 'Help us understand site usage and improve experience.'}
            </div>
          </div>
          <div className="flex items-center">
            <span className={prefs.analytics ? 'text-green-600 font-bold mr-2' : 'text-gray-400 mr-2'}>
              {prefs.analytics ? (lang === 'zh' ? '啟用' : 'Enabled') : (lang === 'zh' ? '關閉' : 'Disabled')}
            </span>
            <input
              type="checkbox"
              checked={prefs.analytics}
              onChange={() => handleToggle('analytics')}
              className="accent-blue-500 w-5 h-5"
            />
          </div>
        </div>
        {/* Marketing */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">{lang === 'zh' ? '營銷 Cookie' : 'Marketing Cookies'}</div>
            <div className="text-gray-500 text-sm">
              {lang === 'zh'
                ? '用於個人化廣告和推廣內容。'
                : 'Used for personalized ads and promotional content.'}
            </div>
          </div>
          <div className="flex items-center">
            <span className={prefs.marketing ? 'text-green-600 font-bold mr-2' : 'text-gray-400 mr-2'}>
              {prefs.marketing ? (lang === 'zh' ? '啟用' : 'Enabled') : (lang === 'zh' ? '關閉' : 'Disabled')}
            </span>
            <input
              type="checkbox"
              checked={prefs.marketing}
              onChange={() => handleToggle('marketing')}
              className="accent-blue-500 w-5 h-5"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {lang === 'zh' ? '儲存設定' : 'Save Preferences'}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
        >
          {lang === 'zh' ? '重設' : 'Reset'}
        </button>
      </div>
      {saved && (
        <div className="mt-4 text-green-600 text-center font-semibold">
          {lang === 'zh' ? '已儲存您的 Cookie 偏好！' : 'Your cookie preferences have been saved!'}
        </div>
      )}
    </div>
  );
};

export default CookieSettings;

import { useState } from 'react';
import { Tour } from '@/hooks/useTours';

interface QuotationModalProps {
  tour: Tour;
  onClose: () => void;
  lang?: string;
}

export default function QuotationModal({ tour, onClose, lang = 'zh' }: QuotationModalProps) {
  const [form, setForm] = useState({
    contact_person: '',
    phone: '',
    email: '',
    organization_name: '',
    number_of_participants: '',
    special_requirements: '',
    preferred_month: '',
    preferred_month_other: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate YYYY/MM options from current month to +12 months
  const generateMonthOptions = () => {
    const options = [];
    const now = new Date();
    
    for (let i = 0; i <= 12; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const value = `${year}/${month}`;
      options.push(value);
    }
    
    return options;
  };

  const monthOptions = generateMonthOptions();

  const translations = {
    zh: {
      requestQuotation: '索取報價',
      tourLabel: '行程：',
      thankYou: '謝謝！您的申請已提交。',
      contactPerson: '聯絡人',
      phone: '電話',
      email: '電郵',
      organizationName: '機構名稱',
      preferredMonth: '首選月份',
      numberOfParticipants: '參與人數',
      specialRequirements: '特殊要求',
      submitting: '提交中...',
      submitRequest: '提交申請',
      selectMonth: '-- 選擇月份 --',
      otherOption: '其他/靈活安排',
      otherPlaceholder: '例如：夏季、靈活安排、聯絡我們商討等'
    },
    en: {
      requestQuotation: 'Request Quotation',
      tourLabel: 'Tour:',
      thankYou: 'Thank you! Your request has been submitted.',
      contactPerson: 'Contact Person',
      phone: 'Phone',
      email: 'Email',
      organizationName: 'Organization Name',
      preferredMonth: 'Preferred Month',
      numberOfParticipants: 'Number of Participants',
      specialRequirements: 'Special Requirements',
      submitting: 'Submitting...',
      submitRequest: 'Submit Request',
      selectMonth: '-- Select Month --',
      otherOption: 'Other/Flexible',
      otherPlaceholder: 'e.g., Summer 2025, Flexible, Contact us to discuss, etc.'
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.zh;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      // Determine final preferred_month value
      const finalPreferredMonth = form.preferred_month === 'other' 
        ? form.preferred_month_other 
        : form.preferred_month;

      console.log('Submitting quotation:', {
        form,
        finalPreferredMonth,
        tour_id: tour.id,
      });

      // Prepare clean form data - only include fields expected by backend schema
      const formData: any = {
        contact_person: form.contact_person,
        email: form.email,
        organization_name: form.organization_name,
        tour_id: tour.id,
      };

      // Only include optional fields if they have values
      if (form.phone) formData.phone = form.phone;
      if (finalPreferredMonth) formData.preferred_month = finalPreferredMonth;
      if (form.number_of_participants) formData.number_of_participants = parseInt(form.number_of_participants);
      if (form.special_requirements) formData.special_requirements = form.special_requirements;

      console.log('Quotation request (static site, no network):', formData)
      setSuccess(true);
    } catch (err) {
      console.error('Quotation error:', err);
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get the tour name from either name or title property
  const tourName = tour.name || tour.title || 'Tour';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-2xl">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center">
            <div className="inline-block p-3 bg-white bg-opacity-20 rounded-full mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{t.requestQuotation}</h2>
            <p className="text-blue-100 text-sm">
              {t.tourLabel} <span className="font-semibold text-white">{tourName}</span>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.thankYou}</h3>
              <p className="text-gray-600">{lang === 'zh' ? '我們會盡快與您聯絡。' : 'We will contact you shortly.'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contactPerson} <span className="text-red-500">*</span></label>
                  <input 
                    name="contact_person" 
                    value={form.contact_person} 
                    onChange={handleChange} 
                    required 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                    placeholder={lang === 'zh' ? '請輸入您的姓名' : 'Enter your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.phone} <span className="text-red-500">*</span></label>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                    placeholder={lang === 'zh' ? '請輸入電話號碼' : 'Enter phone number'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.email} <span className="text-red-500">*</span></label>
                <input 
                  name="email" 
                  type="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  placeholder={lang === 'zh' ? '請輸入電子郵件地址' : 'Enter email address'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.organizationName} <span className="text-red-500">*</span></label>
                <input 
                  name="organization_name" 
                  value={form.organization_name} 
                  onChange={handleChange} 
                  required 
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  placeholder={lang === 'zh' ? '請輸入機構/學校名稱' : 'Enter organization/school name'}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.preferredMonth}</label>
                  <select 
                    name="preferred_month" 
                    value={form.preferred_month} 
                    onChange={handleChange} 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  >
                    <option value="">{t.selectMonth}</option>
                    {monthOptions.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                    <option value="other">{t.otherOption}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.numberOfParticipants} <span className="text-red-500">*</span></label>
                  <input 
                    name="number_of_participants" 
                    type="number" 
                    min="1" 
                    value={form.number_of_participants} 
                    onChange={handleChange} 
                    required 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                    placeholder={lang === 'zh' ? '人數' : 'Number'}
                  />
                </div>
              </div>

              {/* Conditional "Other" text field */}
              {form.preferred_month === 'other' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'zh' ? '請說明您的時間安排' : 'Please specify your timing'}
                  </label>
                  <input 
                    name="preferred_month_other" 
                    value={form.preferred_month_other} 
                    onChange={handleChange} 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                    placeholder={t.otherPlaceholder}
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.specialRequirements}</label>
                <textarea 
                  name="special_requirements" 
                  value={form.special_requirements} 
                  onChange={handleChange} 
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none" 
                  rows={3}
                  placeholder={lang === 'zh' ? '請告訴我們您的特殊需求或要求...' : 'Tell us about any special requirements...'}
                />
              </div>
              
              {/* Required fields note */}
              <div className="text-xs text-gray-500 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                {lang === 'zh' ? '必填欄位' : 'Required fields'}
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-red-800 text-sm font-medium">{error}</div>
                  </div>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.submitting}
                  </div>
                ) : (
                  t.submitRequest
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 
interface Inclusion {
  component: string;
  details: string;
}

interface TourInclusionsProps {
  inclusions: Inclusion[];
  lang: string;
}

export default function TourInclusions({ inclusions, lang }: TourInclusionsProps) {
  const translations = {
    zh: {
      whatsIncluded: '包含項目',
      component: '項目',
      details: '詳細內容'
    },
    en: {
      whatsIncluded: "What's Included",
      component: 'Component',
      details: 'Details'
    }
  };
  
  const t = translations[lang as keyof typeof translations] || translations.zh;

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 mr-4">
          <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">{t.whatsIncluded}</h2>
      </div>
      <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-emerald-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-emerald-800">{t.component}</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-emerald-800">{t.details}</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {inclusions.map((inclusion, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium">{inclusion.component}</td>
                  <td className="px-6 py-4 text-gray-700">{inclusion.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 
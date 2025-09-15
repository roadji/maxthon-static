interface SubjectRelevance {
  subjects: string[];
  description: string;
}

interface LearningOutcomesProps {
  outcomes: string[];
  subjectRelevance: SubjectRelevance;
  lang: string;
}

export default function LearningOutcomes({ outcomes = [], subjectRelevance = { subjects: [], description: '' }, lang }: LearningOutcomesProps) {
  const translations = {
    zh: {
      learningOutcomes: '學習成果',
      subjectRelevance: '科目相關性',
      relevantSubjects: '相關科目'
    },
    en: {
      learningOutcomes: 'Learning Outcomes',
      subjectRelevance: 'Subject Relevance',
      relevantSubjects: 'Relevant Subjects'
    }
  };
  
  const t = translations[lang as keyof typeof translations] || translations.zh;

  // Ensure we have valid data structures to prevent errors
  const safeOutcomes = Array.isArray(outcomes) ? outcomes : [];
  const safeSubjectRelevance = {
    subjects: Array.isArray(subjectRelevance?.subjects) ? subjectRelevance.subjects : [],
    description: subjectRelevance?.description || ''
  };

  return (
    <div className="space-y-12">
      {/* Learning Outcomes */}
      {safeOutcomes.length > 0 && (
        <div>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 mr-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t.learningOutcomes}
            </h2>
          </div>
          
          {safeOutcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">{outcome}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Subject Relevance */}
      {safeSubjectRelevance.subjects.length > 0 && (
        <div>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 mr-4">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t.subjectRelevance}
            </h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.relevantSubjects}
              </h3>
              <div className="flex flex-wrap gap-2">
                {safeSubjectRelevance.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
            {safeSubjectRelevance.description && (
              <p className="text-gray-700">{safeSubjectRelevance.description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 
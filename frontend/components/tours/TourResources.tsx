interface Resource {
  title: string;
  url: string;
}

interface TourResourcesProps {
  resources: Resource[];
}

export default function TourResources({ resources }: TourResourcesProps) {
  if (!resources || resources.length === 0) return null;
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Downloadable Resources</h2>
      <ul className="space-y-4">
        {resources.map((res, idx) => (
          <li key={idx}>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
              aria-label={`Download ${res.title}`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
} 
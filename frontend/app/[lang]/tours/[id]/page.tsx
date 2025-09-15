import { Metadata } from 'next';
import TourHero from '@/components/tours/TourHero';
import LearningOutcomes from '@/components/tours/LearningOutcomes';
import TourItinerary from '@/components/tours/TourItinerary';
import TourInclusions from '@/components/tours/TourInclusions';
import TourGallery from '@/components/tours/TourGallery';
import TourQuotation from '@/components/tours/TourQuotation';
import TourTestimonials from '@/components/tours/TourTestimonials';
import TourResources from '@/components/tours/TourResources';
import PageLayout from '@/components/layout/PageLayout';
import { locales } from '@/config/i18n';
import React from 'react';
import toursData from '@/content/tours.json'

// Force dynamic rendering for this page
export const dynamic = 'force-static';

async function getTourData(id: string, lang: string) {
  const key = lang === 'en' ? 'en' : 'zh'
  const arr = (toursData as any)[key] as any[]
  const numericId = parseInt(id, 10)
  const found = Array.isArray(arr) ? arr.find((t) => t.id === numericId) : null
  if (!found) throw new Error('Failed to fetch tour data')
  return found
}

export async function generateStaticParams() {
  const params: Array<{ lang: string; id: string }> = []
  const langs: Array<'zh' | 'en'> = ['zh', 'en']
  langs.forEach((lang) => {
    const list = (toursData as any)[lang] as Array<{ id: number }>
    if (Array.isArray(list)) {
      list.forEach((t) => params.push({ lang, id: String(t.id) }))
    }
  })
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const tour = await getTourData(resolvedParams.id, resolvedParams.lang);
    return {
      title: `${tour.title} | Educational Tours`,
      description: tour.subtitle || tour.description || '',
      openGraph: {
        title: tour.title,
        description: tour.subtitle || tour.description || '',
        images: [tour.image],
      },
    };
  } catch {
    return {
      title: 'Tour Not Found | Educational Tours',
      description: 'This tour could not be found.',
    };
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const resolvedParams = await params;
  let tour: any = null;
  let error = null;
  try {
    tour = await getTourData(resolvedParams.id, resolvedParams.lang);
  } catch (e: any) {
    error = e;
  }

  if (error) {
    return (
      <PageLayout lang={resolvedParams.lang}>
        <div className="max-w-2xl mx-auto py-24 text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Tour Not Found</h1>
          <p className="text-gray-700">Sorry, we couldn&apos;t find the tour you are looking for.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout lang={resolvedParams.lang}>
      <div className="bg-gray-50 min-h-screen">
        <TourHero 
          title={tour.title}
          subtitle={tour.subtitle}
          imageUrl={typeof tour.image === 'string' && tour.image.trim() ? tour.image : 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop'}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {/* Tour Description Section */}
            {tour.description ? (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 mr-4">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {resolvedParams.lang === 'zh' ? '行程介紹' : 'Tour Overview'}
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {tour.description.split('\n').map((paragraph: string, index: number) => (
                      paragraph.trim() ? (
                        <p key={index} className="mb-4 text-lg leading-relaxed">
                          {paragraph.trim()}
                        </p>
                      ) : null
                    ))}
                  </div>
                </div>
              </section>
            ) : null}
            
            {/* Learning Outcomes Section */}
            {(tour.learningOutcomes || tour.subjectRelevance) ? (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <LearningOutcomes 
                    outcomes={tour.learningOutcomes || []}
                    subjectRelevance={tour.subjectRelevance || { subjects: [], description: '' }}
                    lang={resolvedParams.lang}
                  />
                </div>
              </section>
            ) : null}
            
            {/* Tour Itinerary Section */}
            {(tour.itinerary && Array.isArray(tour.itinerary) && tour.itinerary.length > 0) ? (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <TourItinerary itinerary={tour.itinerary} lang={resolvedParams.lang} />
                </div>
              </section>
            ) : null}
            
            {/* Tour Inclusions Section */}
            {(tour.inclusions && Array.isArray(tour.inclusions) && tour.inclusions.length > 0) ? (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <TourInclusions inclusions={tour.inclusions} lang={resolvedParams.lang} />
                </div>
              </section>
            ) : null}
            
            {/* Tour Gallery Section */}
            {(tour.gallery && Array.isArray(tour.gallery) && tour.gallery.length > 0) ? (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <TourGallery images={tour.gallery} />
                </div>
              </section>
            ) : null}
            
            {/* Tour Quotation Section - Always show this */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8">
                <TourQuotation tour={tour} lang={resolvedParams.lang} />
              </div>
            </section>
            
            {/* Tour Testimonials Section */}
            {(tour.testimonials && Array.isArray(tour.testimonials) && tour.testimonials.length > 0) ? (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <TourTestimonials testimonials={tour.testimonials} />
                </div>
              </section>
            ) : null}
            
            {/* Tour Resources Section */}
            {(tour.resources && Array.isArray(tour.resources) && tour.resources.length > 0) ? (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <TourResources resources={tour.resources} />
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
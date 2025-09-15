"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from '@/lib/translations';
import { getPriceDisplay } from '@/utils/price';

interface Tour {
  id: number;
  title: string;
  description?: string;
  duration?: string;
  price?: number | null;
  image?: string;
  category?: string;
}

interface TourScrollerProps {
  tours: Tour[];
  lang: string;
}

export default function TourScroller({ tours, lang }: TourScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { t } = useTranslations(lang);

  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative px-12">
      {/* Mobile Scroll Hint */}
      <div className="md:hidden flex items-center justify-center mb-4">
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>{t('tourComponents.swipeToSeeMore') || 'Swipe to see more tours'}</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      
      {/* Left Scroll Button */}
      <button
        type="button"
        aria-label={t('tourComponents.scrollLeft')}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
        onClick={() => scrollBy(-400)}
      >
        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide relative"
        tabIndex={0}
        role="list"
        aria-label="Tour list"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Scroll progress indicator for mobile */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full">
          <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: '33%' }}></div>
        </div>
        {tours.map((tour) => {
          const priceDisplay = getPriceDisplay(tour.price, lang);
          
          return (
            <div
              key={tour.id}
              className="min-w-[320px] max-w-xs flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 snap-start flex flex-col"
              style={{ height: '500px' }}
              role="listitem"
            >
              <div className="relative">
                <img
                  src={tour.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'}
                  alt={tour.title || t('tours.untitledTour')}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop';
                  }}
                />
                {/* Only show duration badge if duration exists */}
                {tour.duration && (
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm">
                    {tour.duration}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{tour.title || t('tours.untitledTour')}</h2>
                <div className="flex-grow mb-4">
                  <p className="text-gray-600 text-sm line-clamp-3 overflow-hidden leading-relaxed">{tour.description || t('common.noDescription')}</p>
                </div>
                {/* Tags (category) */}
                {tour.category && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-medium">
                      {tour.category}
                    </span>
                  </div>
                )}
                {/* Price - using new utility */}
                <div className="flex flex-col gap-2 mb-4">
                  <p className={`text-lg font-semibold ${priceDisplay.showPrice ? 'text-green-600' : 'text-blue-600'}`}>
                    {priceDisplay.priceText}
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => router.push(`/${lang}/tours/${tour.id}`)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    {t('common.viewDetails')}
                  </button>
                  {/* Quotation modal not available in this context, so just link to details */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Right Scroll Button */}
      <button
        type="button"
        aria-label={t('tourComponents.scrollRight')}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
        onClick={() => scrollBy(400)}
      >
        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
} 
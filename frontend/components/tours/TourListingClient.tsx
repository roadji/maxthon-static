'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTours, Tour } from "@/hooks/useTours";
import QuotationModal from "@/components/tours/QuotationModal";
import PageLayout from "@/components/layout/PageLayout";
import { useTranslations } from '@/lib/translations';
import { Search, Filter } from 'lucide-react';
import { getPriceDisplay } from '@/utils/price';

interface TourListingClientProps {
  lang: string;
}

export default function TourListingClient({ lang }: TourListingClientProps) {
  const router = useRouter();
  const { t } = useTranslations(lang);
  const { tours, isLoading, error } = useTours(lang);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // ("all", "short", "mid", "long")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  // Filter tours based on search term and filter (short/mid/long) (short: < 5 days, mid: 5–9, long: >= 10)
  const filteredTours = tours?.filter((tour) => {
    const searchableText = `${tour.name || tour.title || ''} ${tour.description || ''}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm.toLowerCase());
    
    let matchesFilter = true;
    const days = tour.days || 0;
    if (filter === "short") matchesFilter = days < 5;
    else if (filter === "mid") matchesFilter = days >= 5 && days <= 9;
    else if (filter === "long") matchesFilter = days >= 10;
    return matchesSearch && matchesFilter;
  });

  const handleOpenQuotationModal = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  if (isLoading) return (
    <PageLayout lang={lang}>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    </PageLayout>
  );
  
  if (error) return (
    <PageLayout lang={lang}>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold mb-2">{t('tours.errorLoadingTours')}</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    </PageLayout>
  );

  return (
    <PageLayout lang={lang}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('tours.title')}</h1>
          <p className="text-lg text-gray-600">{t('tours.subtitle')}</p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('tours.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative sm:w-64">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="all">{t('tours.allTours')}</option>
              <option value="short">{t('tours.shortTours')}</option>
              <option value="mid">{t('tours.midTours')}</option>
              <option value="long">{t('tours.longTours')}</option>
            </select>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours?.map((tour) => {
            const priceDisplay = getPriceDisplay(tour.price, lang);
            
            return (
              <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col" style={{ minHeight: '500px' }}>
                <div className="relative">
                  <img 
                    src={tour.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'} 
                    alt={tour.name || tour.title || t('tours.untitledTour')} 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      // Fallback to a default travel image if the tour image fails to load
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
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{tour.name || tour.title || t('tours.untitledTour')}</h2>
                  <div className="flex-grow mb-4">
                    <p className="text-gray-600 text-sm line-clamp-3 overflow-hidden leading-relaxed">{tour.description || t('tours.noToursMessage')}</p>
                  </div>
                  {tour.location && (
                    <p className="text-sm text-gray-500 mb-3">
                      📍 {tour.location}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(tour.tags || []).map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
                    <button
                      onClick={() => handleOpenQuotationModal(tour)}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      {t('common.getQuote')}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTours?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('tours.noToursFound')}</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilter("all");
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              {t('common.clearFilters')}
            </button>
          </div>
        )}

        {/* Quotation Modal */}
        {isModalOpen && selectedTour && (
          <QuotationModal tour={selectedTour} onClose={handleCloseModal} lang={lang} />
        )}
      </div>
    </PageLayout>
  );
} 
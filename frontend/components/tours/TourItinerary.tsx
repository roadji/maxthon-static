'use client';

import { useState } from 'react';

interface Activity {
  time: string;
  description: string;
}

interface DaySchedule {
  day: number;
  title: string;
  activities: Activity[];
}

interface TourItineraryProps {
  itinerary: DaySchedule[];
  lang: string;
}

export default function TourItinerary({ itinerary = [], lang }: TourItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(0);

  const translations = {
    zh: {
      tourItinerary: '行程安排'
    },
    en: {
      tourItinerary: 'Tour Itinerary'
    }
  };
  
  const t = translations[lang as keyof typeof translations] || translations.zh;

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  // Ensure we have valid data to prevent errors
  const safeItinerary = Array.isArray(itinerary) ? itinerary : [];

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mr-4">
          <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          {t.tourItinerary}
        </h2>
      </div>
      
      <div className="space-y-4">
        {safeItinerary.map((day) => {
          // Ensure activities is an array
          const safeActivities = Array.isArray(day.activities) ? day.activities : [];
          
          return (
            <div
              key={day.day}
              className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
            >
              {/* Day Header */}
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-expanded={openDay === day.day}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 font-semibold mr-3">
                      {day.day}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {day.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openDay === day.day ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Day Content */}
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openDay === day.day ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50">
                  <div className="space-y-4">
                    {safeActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4"
                      >
                        <div className="flex-shrink-0 w-20 text-sm font-medium text-gray-500">
                          {activity.time}
                        </div>
                        <div className="flex-1 text-gray-700">
                          {activity.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 
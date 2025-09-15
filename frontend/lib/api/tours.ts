import { Tour } from '@/types/tour'
import toursData from '@/content/tours.json'

type LangKey = 'zh' | 'en'

const getToursArray = (lang: string): Tour[] => {
  const key: LangKey = lang === 'en' ? 'en' : 'zh'
  const list = (toursData as any)[key] as Tour[] | undefined
  return Array.isArray(list) ? list : []
}

export const toursApi = {
  getTours: async (lang: string = 'zh'): Promise<Tour[]> => {
    const data = getToursArray(lang)
    return data.map((tour: any) => ({
      ...tour,
      name: tour.title,
      days: tour.duration ? parseInt(tour.duration.match(/\d+/)?.[0] || '0') : tour.days || 0,
      tags: tour.tags || (tour.category ? [tour.category] : []),
    }))
  },

  getTour: async (id: string, lang: string = 'zh'): Promise<Tour> => {
    const data = getToursArray(lang)
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id
    const tour = data.find((t: any) => t.id === numericId)
    if (!tour) {
      throw new Error('Tour not found')
    }
    return tour as Tour
  },

  searchTours: async (query: string, lang: string = 'zh'): Promise<Tour[]> => {
    const q = query.toLowerCase()
    const data = await toursApi.getTours(lang)
    return data.filter((t) => `${t.title} ${t.description || ''}`.toLowerCase().includes(q))
  },
}
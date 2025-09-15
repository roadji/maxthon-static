import { useQuery } from '@tanstack/react-query'
import { toursApi } from '@/lib/api/tours'
import { queryKeys } from '@/lib/queryClient'
import toursJson from '@/content/tours.json'

export type { Tour } from '@/types/tour'

export function useTours(lang: string = 'zh') {
  const initial = (toursJson as any)[lang === 'en' ? 'en' : 'zh'] || []
  const query = useQuery({
    queryKey: queryKeys.tours.list(lang),
    queryFn: () => toursApi.getTours(lang),
    staleTime: Infinity,
    initialData: initial,
  })

  return {
    tours: query.data || null,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  }
}

export function useTour(id: string, lang: string = 'zh') {
  const query = useQuery({
    queryKey: queryKeys.tours.detail(id, lang),
    queryFn: () => toursApi.getTour(id, lang),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  return {
    tour: query.data || null,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  }
} 
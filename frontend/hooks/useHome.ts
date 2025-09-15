import { useQuery } from '@tanstack/react-query'
import { contentApi } from '@/lib/api/content'
import { queryKeys } from '@/lib/queryClient'
import homeZh from '@/content/home.zh.json'
import homeEn from '@/content/home.en.json'
import { Tour } from './useTours'

export type HomeFeature = {
  id: number;
  title: string;
  description: string;
  icon?: string;
};

export type AboutService = {
  id: number;
  title: string;
  description: string;
  icon?: string;
};

export type PageContentSection = {
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
};

export type HomeContent = {
  page_content: Record<string, PageContentSection>;
  features: HomeFeature[];
  featured_tours: Tour[];
  about_content?: Record<string, PageContentSection>;
  about_services?: AboutService[];
  all_tours?: Tour[];
};

export function useHome(lang: string = 'zh') {
  const query = useQuery({
    queryKey: queryKeys.home.content(lang),
    queryFn: () => contentApi.getHomeContent(lang),
    staleTime: Infinity,
    initialData: lang === 'en' ? (homeEn as any) : (homeZh as any),
  })

  return {
    homeContent: query.data || null,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  }
} 
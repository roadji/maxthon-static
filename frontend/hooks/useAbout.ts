import { useQuery } from '@tanstack/react-query'
import { contentApi } from '@/lib/api/content'
import { queryKeys } from '@/lib/queryClient'

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

export type AboutContent = {
  page_content: Record<string, PageContentSection>;
  services: AboutService[];
};

export function useAbout(lang: string = 'zh') {
  const query = useQuery({
    queryKey: queryKeys.about.content(lang),
    queryFn: () => contentApi.getAboutContent(lang),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  return {
    aboutContent: query.data || null,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  }
} 
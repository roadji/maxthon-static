import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
})

export const queryKeys = {
  tours: {
    all: ['tours'] as const,
    list: (lang?: string) => [...queryKeys.tours.all, 'list', lang] as const,
    detail: (id: string, lang?: string) => [...queryKeys.tours.all, 'detail', id, lang] as const,
  },
  home: {
    all: ['home'] as const,
    content: (lang?: string) => [...queryKeys.home.all, 'content', lang] as const,
  },
  about: {
    all: ['about'] as const,
    content: (lang?: string) => [...queryKeys.about.all, 'content', lang] as const,
  },
} as const 
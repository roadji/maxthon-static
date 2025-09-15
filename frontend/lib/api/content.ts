import homeZh from '@/content/home.zh.json'
import homeEn from '@/content/home.en.json'
import aboutZh from '@/content/about.zh.json'
import aboutEn from '@/content/about.en.json'

type LangKey = 'zh' | 'en'

export const contentApi = {
  getHomeContent: async (lang: string = 'zh') => {
    const key: LangKey = lang === 'en' ? 'en' : 'zh'
    return key === 'en' ? (homeEn as any) : (homeZh as any)
  },

  getAboutContent: async (lang: string = 'zh') => {
    const key: LangKey = lang === 'en' ? 'en' : 'zh'
    return key === 'en' ? (aboutEn as any) : (aboutZh as any)
  },

  submitQuotation: async (_data: any) => {
    // No backend in static site; pretend success
    return { success: true }
  },
}
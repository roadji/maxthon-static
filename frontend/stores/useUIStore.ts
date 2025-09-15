import { create } from 'zustand'

interface UIState {
  // Loading states
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // Modal states
  isQuotationModalOpen: boolean
  setIsQuotationModalOpen: (open: boolean) => void
  
  // Toast/notification states
  toast: {
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
    isVisible: boolean
  } | null
  showToast: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void
  hideToast: () => void
  
  // Search state
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  // Loading states
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  
  // Modal states
  isQuotationModalOpen: false,
  setIsQuotationModalOpen: (open) => set({ isQuotationModalOpen: open }),
  
  // Toast states
  toast: null,
  showToast: (message, type) => set({ 
    toast: { message, type, isVisible: true } 
  }),
  hideToast: () => set({ toast: null }),
  
  // Search state
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
})) 
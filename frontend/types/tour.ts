export type Tour = {
  id: number;
  title: string;        // Primary title from backend
  name?: string;        // Computed from title for frontend compatibility
  description?: string;
  duration?: string;    // Duration as string from backend
  days?: number;        // Computed from duration for frontend compatibility
  price?: number | null; // Changed to numeric for proper currency handling
  image?: string;
  category?: string;
  tags?: string[];      // Computed from category for frontend compatibility
  location?: string;
  highlights?: string[];
  included?: string[];
  excluded?: string[];
  // Additional fields for detailed tour pages
  subtitle?: string;
  learningOutcomes?: string[];
  subjectRelevance?: {
    subjects: string[];
    description: string;
  };
  itinerary?: Array<{
    day: number;
    title: string;
    activities: Array<{
      time: string;
      description: string;
    }>;
  }>;
  inclusions?: Array<{
    component: string;
    details: string;
  }>;
  gallery?: Array<{
    url: string;
    description: string;
    caption: string;
  }>;
  testimonials?: Array<{
    content: string;
    author: string;
    school: string;
  }>;
  resources?: Array<{
    title: string;
    url: string;
  }>;
};

export type TourFormData = Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>

// Common tour tags that can be used as suggestions
export const COMMON_TOUR_TAGS = [
  'Adventure',
  'Cultural',
  'Nature',
  'Beach',
  'City',
  'Food',
  'History',
  'Shopping',
  'Family',
  'Luxury',
  'Budget',
  'Hiking',
  'Photography',
  'Wildlife',
  'Relaxation',
] as const 
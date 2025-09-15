import { translations } from '@/lib/translations';

export function formatPrice(price: number | null | undefined, lang: string = 'zh'): string {
  if (price === null || price === undefined) {
    return translations[lang as keyof typeof translations]?.tourComponents?.contactForQuote || 
           (lang === 'zh' ? '聯絡索取報價' : 'Contact for Quotation');
  }
  
  const formattedPrice = new Intl.NumberFormat('en-US').format(price);
  return `HK$${formattedPrice}`;
}

export function getPriceDisplay(price: number | null | undefined, lang: string = 'zh'): {
  showPrice: boolean;
  priceText: string;
} {
  if (price === null || price === undefined) {
    return {
      showPrice: false,
      priceText: translations[lang as keyof typeof translations]?.tourComponents?.contactForQuote || 
                (lang === 'zh' ? '聯絡索取報價' : 'Contact for Quotation')
    };
  }
  
  return {
    showPrice: true,
    priceText: formatPrice(price, lang)
  };
} 
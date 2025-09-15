export const translations = {
  en: {
    // Common UI elements
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Try again',
      save: 'Save',
      cancel: 'Cancel',
      submit: 'Submit',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      search: 'Search',
      filter: 'Filter',
      clear: 'Clear',
      noData: 'No data available',
      untitled: 'Untitled',
      noDescription: 'No description available',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      bookNow: 'Book Now',
      getQuote: 'Get Quote',
      tryAgain: 'Try Again',
      clearFilters: 'Clear filters',
    },

    // Navigation
    navigation: {
      home: 'Home',
      tours: 'Tours',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
    },

    // Home page
    home: {
      title: 'Discover the World with Maxthon Universal Exchange',
      subtitle: 'Experience unforgettable international tours and cultural exchanges. Join us on a journey of discovery and personal growth.',
      exploreToursBtn: 'Explore Tours',
      learnMoreBtn: 'Learn More',
      whyChooseUs: 'Why Choose Us',
      whyChooseUsSubtitle: 'Experience excellence in international exchange programs',
      aboutUsTitle: 'About Us',
      aboutUsSubtitle: 'Learn more about our mission and commitment to international exchange',
      ourMission: 'Our Mission',
      ourMissionContent: 'To bridge cultures and create meaningful international exchange experiences that enrich lives and foster global understanding.',
      ourToursTitle: 'Our Tours',
      ourToursSubtitle: 'Explore our full range of international exchange programs',
      viewAllToursBtn: 'View All Tours',
      getInTouchBtn: 'Get in Touch',
      viewToursBtn: 'View Tours',
      whatWeOffer: 'What We Offer',
      whatWeOfferSubtitle: 'Comprehensive services designed to facilitate meaningful cultural and educational exchanges',
      readyToStart: 'Ready to start your',
      culturalJourney: 'cultural journey?',
      ctaSubtitle: 'Contact us today to discuss your needs and discover how we can help you create unforgettable study tour experiences.',
      errorLoadingContent: 'Unable to load content',
      errorContactSupport: 'Please try refreshing the page or contact support if the problem persists.',
    },

    // Tours page
    tours: {
      title: 'Our Tours',
      subtitle: 'Discover our range of international exchange programs and cultural tours',
      searchPlaceholder: 'Search tours by name or description...',
      filterByCategory: 'Filter by category',
      filterByDuration: 'Filter by duration',
      allTours: 'All Tours',
      shortTours: 'Short Tours (< 5 days)',
      midTours: 'Mid Tours (5–9 days)',
      longTours: 'Long Tours (≥ 10 days)',
      allCategories: 'All Categories',
      noToursFound: 'No tours found matching your criteria',
      noToursMessage: 'Try adjusting your search or filter criteria.',
      loadMore: 'Load More',
      duration: 'Duration',
      price: 'Price',
      location: 'Location',
      category: 'Category',
      days: 'days',
      errorLoadingTours: 'Error loading tours',
      untitledTour: 'Untitled Tour',
    },

    // Tour detail page
    tourDetail: {
      tourNotFound: 'Tour Not Found',
      tourNotFoundMessage: 'Sorry, we couldn\'t find the tour you are looking for.',
      backToTours: 'Back to Tours',
      shareThisTour: 'Share this tour',
      downloadBrochure: 'Download Brochure',
      requestQuotation: 'Request a Quotation',
      getCustomQuote: 'Get a Custom Quote',
      learningOutcomes: 'Learning Outcomes',
      subjectRelevance: 'Subject Relevance',
      itinerary: 'Itinerary',
      inclusions: 'What\'s Included',
      gallery: 'Photo Gallery',
      testimonials: 'What People Say',
      resources: 'Tour Resources',
      dayLabel: 'Day',
      highlights: 'Highlights',
      testimonialFrom: 'from',
    },

    // Contact page
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to start your international journey? Contact us today.',
      contactInformation: 'Contact Information',
      address: 'Address',
      contactDetails: 'Contact Details',
      businessHours: 'Business Hours',
      mondayFriday: 'Monday - Friday',
      saturday: 'Saturday',
      sundayHolidays: 'Sunday & Public Holidays',
      closed: 'Closed',
      whatsappChat: 'Chat with us on WhatsApp',
      sendMessage: 'Send us a Message',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      sendMessageBtn: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again.',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      subjectRequired: 'Subject is required',
      messageRequired: 'Message is required',
      mapTitle: 'Our Location',
      mapDescription: 'Visit us at our office in Hong Kong',
    },

    // Quotation modal
    quotation: {
      title: 'Request Quotation',
      tourLabel: 'Tour:',
      contactPerson: 'Contact Person',
      phone: 'Phone',
      email: 'Email',
      organizationName: 'Organization Name',
      preferredMonth: 'Preferred Month',
      numberOfParticipants: 'Number of Participants',
      specialRequirements: 'Special Requirements',
      submitRequest: 'Submit Request',
      submitting: 'Submitting...',
      successMessage: 'Thank you! Your request has been submitted.',
      errorMessage: 'Failed to submit request. Please try again.',
      contactPersonRequired: 'Contact person is required',
      phoneRequired: 'Phone number is required',
      emailRequired: 'Email is required',
      organizationRequired: 'Organization name is required',
      monthRequired: 'Preferred month is required',
      participantsRequired: 'Number of participants is required',
      specialRequirementsPlaceholder: 'Please describe any special requirements, dietary restrictions, accessibility needs, etc.',
    },

    // Error states
    errors: {
      pageNotFound: 'Page Not Found',
      pageNotFoundMessage: 'The page you are looking for does not exist.',
      serverError: 'Server Error',
      serverErrorMessage: 'Something went wrong on our end. Please try again later.',
      networkError: 'Network Error',
      networkErrorMessage: 'Please check your internet connection and try again.',
      unknownError: 'Something went wrong',
      unknownErrorMessage: 'An unexpected error occurred. Please try again.',
      goHome: 'Go Home',
      refreshPage: 'Refresh Page',
    },

    // Loading states
    loading: {
      loadingTours: 'Loading tours...',
      loadingContent: 'Loading content...',
      loadingPage: 'Loading page...',
      processing: 'Processing...',
      pleaseWait: 'Please wait...',
    },

    // Time and dates
    time: {
      minutes: 'minutes',
      hours: 'hours',
      days: 'days',
      weeks: 'weeks',
      months: 'months',
      years: 'years',
      am: 'AM',
      pm: 'PM',
      today: 'Today',
      yesterday: 'Yesterday',
      tomorrow: 'Tomorrow',
    },

    // Tour components
    tourComponents: {
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
      imageAlt: 'Tour image',
      priceFrom: 'From',
      duration: 'Duration',
      participants: 'Participants',
      availability: 'Availability',
      difficulty: 'Difficulty Level',
      ageGroup: 'Age Group',
      includes: 'Includes',
      excludes: 'Excludes',
      highlights: 'Tour Highlights',
      itineraryDay: 'Day {day}',
      readMore: 'Read more',
      readLess: 'Read less',
      swipeToSeeMore: 'Swipe to see more tours',
      contactForQuote: 'Contact for Quotation',
    },

    // Footer (if you have one)
    footer: {
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      copyright: '© {year} 遨遊國際交流中心. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      siteMap: 'Site Map',
    },

    // Accessibility
    accessibility: {
      skipToContent: 'Skip to main content',
      mainNavigation: 'Main navigation',
      searchForm: 'Search form',
      languageSwitcher: 'Language switcher',
      closeModal: 'Close modal',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },

  zh: {
    // Common UI elements
    common: {
      loading: '載入中...',
      error: '發生錯誤',
      retry: '重試',
      save: '儲存',
      cancel: '取消',
      submit: '提交',
      close: '關閉',
      next: '下一頁',
      previous: '上一頁',
      search: '搜尋',
      filter: '篩選',
      clear: '清除',
      noData: '沒有資料',
      untitled: '無標題',
      noDescription: '沒有描述',
      viewDetails: '查看詳情',
      learnMore: '了解更多',
      bookNow: '立即預訂',
      getQuote: '索取報價',
      tryAgain: '重試',
      clearFilters: '清除篩選',
    },

    // Navigation
    navigation: {
      home: '首頁',
      tours: '遊學團',
      about: '關於我們',
      contact: '聯絡我們',
      language: '語言',
    },

    // Home page
    home: {
      title: '與遨遊國際交流中心一起探索世界',
      subtitle: '體驗難忘的國際遊學團和文化交流。與我們一起踏上探索和成長之旅。',
      exploreToursBtn: '探索遊學團',
      learnMoreBtn: '了解更多',
      whyChooseUs: '為什麼選擇我們',
      whyChooseUsSubtitle: '體驗卓越的國際交流項目',
      aboutUsTitle: '關於我們',
      aboutUsSubtitle: '了解更多關於我們的使命和對國際交流的承諾',
      ourMission: '我們的使命',
      ourMissionContent: '架起文化橋樑，創造有意義的國際交流體驗，豐富生活並促進全球理解。',
      ourToursTitle: '我們的遊學團',
      ourToursSubtitle: '探索我們全方位的國際交流項目',
      viewAllToursBtn: '查看所有遊學團',
      getInTouchBtn: '聯絡我們',
      viewToursBtn: '查看遊學團',
      whatWeOffer: '我們提供的服務',
      whatWeOfferSubtitle: '為促進有意義的文化和教育交流而設計的綜合服務',
      readyToStart: '準備開始您的',
      culturalJourney: '文化之旅？',
      ctaSubtitle: '立即聯繫我們，討論您的需求，發現我們如何幫助您創造難忘的遊學體驗。',
      errorLoadingContent: '無法載入內容',
      errorContactSupport: '請嘗試重新整理頁面，如果問題持續存在，請聯繫支援團隊。',
    },

    // Tours page
    tours: {
      title: '我們的遊學團',
      subtitle: '探索我們的國際交流項目和文化遊學團',
      searchPlaceholder: '按名稱或描述搜尋遊學團...',
      filterByCategory: '按類別篩選',
      filterByDuration: '按持續時間篩選',
      allTours: '所有遊學團',
      shortTours: '短期遊學團（< 5天）',
      midTours: '中期遊學團（5-9天）',
      longTours: '長期遊學團（≥ 10天）',
      allCategories: '所有類別',
      noToursFound: '找不到符合條件的遊學團',
      noToursMessage: '請嘗試調整您的搜尋或篩選條件。',
      loadMore: '載入更多',
      duration: '持續時間',
      price: '價格',
      location: '地點',
      category: '類別',
      days: '天',
      errorLoadingTours: '載入遊學團時發生錯誤',
      untitledTour: '無標題遊學團',
    },

    // Tour detail page
    tourDetail: {
      tourNotFound: '找不到遊學團',
      tourNotFoundMessage: '抱歉，我們找不到您要查找的遊學團。',
      backToTours: '返回遊學團',
      shareThisTour: '分享這個遊學團',
      downloadBrochure: '下載手冊',
      requestQuotation: '索取報價',
      getCustomQuote: '索取定製報價',
      learningOutcomes: '學習成果',
      subjectRelevance: '學科相關性',
      itinerary: '行程安排',
      inclusions: '包含項目',
      gallery: '照片畫廊',
      testimonials: '用戶評價',
      resources: '遊學團資源',
      dayLabel: '第',
      highlights: '精彩亮點',
      testimonialFrom: '來自',
    },

    // Contact page
    contact: {
      title: '聯絡我們',
      subtitle: '準備開始您的國際之旅？立即聯絡我們。',
      contactInformation: '聯絡資訊',
      address: '地址',
      contactDetails: '聯絡詳情',
      businessHours: '營業時間',
      mondayFriday: '星期一 - 星期五',
      saturday: '星期六',
      sundayHolidays: '星期日及公眾假期',
      closed: '休息',
      whatsappChat: '透過WhatsApp與我們聊天',
      sendMessage: '發送訊息給我們',
      name: '全名',
      email: '電子郵件地址',
      phone: '電話號碼',
      subject: '主題',
      message: '訊息',
      sendMessageBtn: '發送訊息',
      sending: '發送中...',
      successMessage: '謝謝！您的訊息已成功發送。',
      errorMessage: '抱歉，發送訊息時出現錯誤。請重試。',
      nameRequired: '姓名為必填項',
      emailRequired: '電子郵件為必填項',
      emailInvalid: '請輸入有效的電子郵件地址',
      subjectRequired: '主題為必填項',
      messageRequired: '訊息為必填項',
      mapTitle: '我們的位置',
      mapDescription: '歡迎到我們在香港的辦公室拜訪',
    },

    // Quotation modal
    quotation: {
      title: '申請報價',
      tourLabel: '遊學團：',
      contactPerson: '聯絡人',
      phone: '電話',
      email: '電子郵件',
      organizationName: '機構名稱',
      preferredMonth: '首選月份',
      numberOfParticipants: '參與人數',
      specialRequirements: '特殊要求',
      submitRequest: '提交申請',
      submitting: '提交中...',
      successMessage: '謝謝！您的申請已提交。',
      errorMessage: '提交申請失敗。請重試。',
      contactPersonRequired: '聯絡人為必填項',
      phoneRequired: '電話號碼為必填項',
      emailRequired: '電子郵件為必填項',
      organizationRequired: '機構名稱為必填項',
      monthRequired: '首選月份為必填項',
      participantsRequired: '參與人數為必填項',
      specialRequirementsPlaceholder: '請描述任何特殊要求、飲食限制、無障礙需求等。',
    },

    // Error states
    errors: {
      pageNotFound: '找不到頁面',
      pageNotFoundMessage: '您要尋找的頁面不存在。',
      serverError: '伺服器錯誤',
      serverErrorMessage: '我們這邊出現了問題。請稍後再試。',
      networkError: '網路錯誤',
      networkErrorMessage: '請檢查您的網路連接並重試。',
      unknownError: '出現了問題',
      unknownErrorMessage: '發生了意外錯誤。請重試。',
      goHome: '回到首頁',
      refreshPage: '重新整理頁面',
    },

    // Loading states
    loading: {
      loadingTours: '載入遊學團中...',
      loadingContent: '載入內容中...',
      loadingPage: '載入頁面中...',
      processing: '處理中...',
      pleaseWait: '請稍等...',
    },

    // Time and dates
    time: {
      minutes: '分鐘',
      hours: '小時',
      days: '天',
      weeks: '週',
      months: '月',
      years: '年',
      am: '上午',
      pm: '下午',
      today: '今天',
      yesterday: '昨天',
      tomorrow: '明天',
    },

    // Tour components
    tourComponents: {
      scrollLeft: '向左滾動',
      scrollRight: '向右滾動',
      imageAlt: '遊學團圖片',
      priceFrom: '起價',
      duration: '持續時間',
      participants: '參與者',
      availability: '可預訂情況',
      difficulty: '難度等級',
      ageGroup: '年齡組別',
      includes: '包含',
      excludes: '不包含',
      highlights: '遊學團亮點',
      itineraryDay: '第{day}天',
      readMore: '閱讀更多',
      readLess: '收起',
      swipeToSeeMore: '滑動查看更多遊學團',
      contactForQuote: '聯絡索取報價',
    },

    // Footer (if you have one)
    footer: {
      aboutUs: '關於我們',
      contactUs: '聯絡我們',
      followUs: '關注我們',
      copyright: '© {year} 遨遊國際交流中心。版權所有。',
      privacyPolicy: '私隱政策',
      termsOfService: '服務條款',
      siteMap: '網站地圖',
    },

    // Accessibility
    accessibility: {
      skipToContent: '跳到主要內容',
      mainNavigation: '主導航',
      searchForm: '搜尋表單',
      languageSwitcher: '語言切換器',
      closeModal: '關閉彈窗',
      openMenu: '打開選單',
      closeMenu: '關閉選單',
    },
  },
} as const

export type TranslationKey = 
  // Common
  | 'common.loading'
  | 'common.error'
  | 'common.retry'
  | 'common.save'
  | 'common.cancel'
  | 'common.submit'
  | 'common.close'
  | 'common.next'
  | 'common.previous'
  | 'common.search'
  | 'common.filter'
  | 'common.clear'
  | 'common.noData'
  | 'common.untitled'
  | 'common.noDescription'
  | 'common.viewDetails'
  | 'common.learnMore'
  | 'common.bookNow'
  | 'common.getQuote'
  | 'common.tryAgain'
  | 'common.clearFilters'

  // Navigation
  | 'navigation.home'
  | 'navigation.tours'
  | 'navigation.about'
  | 'navigation.contact'
  | 'navigation.language'

  // Home
  | 'home.title'
  | 'home.subtitle'
  | 'home.exploreToursBtn'
  | 'home.learnMoreBtn'
  | 'home.whyChooseUs'
  | 'home.whyChooseUsSubtitle'
  | 'home.aboutUsTitle'
  | 'home.aboutUsSubtitle'
  | 'home.ourMission'
  | 'home.ourMissionContent'
  | 'home.ourToursTitle'
  | 'home.ourToursSubtitle'
  | 'home.viewAllToursBtn'
  | 'home.getInTouchBtn'
  | 'home.viewToursBtn'
  | 'home.whatWeOffer'
  | 'home.whatWeOfferSubtitle'
  | 'home.readyToStart'
  | 'home.culturalJourney'
  | 'home.ctaSubtitle'
  | 'home.errorLoadingContent'
  | 'home.errorContactSupport'

  // Tours
  | 'tours.title'
  | 'tours.subtitle'
  | 'tours.searchPlaceholder'
  | 'tours.filterByCategory'
  | 'tours.filterByDuration'
  | 'tours.allTours'
  | 'tours.shortTours'
  | 'tours.midTours'
  | 'tours.longTours'
  | 'tours.allCategories'
  | 'tours.noToursFound'
  | 'tours.noToursMessage'
  | 'tours.loadMore'
  | 'tours.duration'
  | 'tours.price'
  | 'tours.location'
  | 'tours.category'
  | 'tours.days'
  | 'tours.errorLoadingTours'
  | 'tours.untitledTour'

  // Tour Detail
  | 'tourDetail.tourNotFound'
  | 'tourDetail.tourNotFoundMessage'
  | 'tourDetail.backToTours'
  | 'tourDetail.shareThisTour'
  | 'tourDetail.downloadBrochure'
  | 'tourDetail.requestQuotation'
  | 'tourDetail.getCustomQuote'
  | 'tourDetail.learningOutcomes'
  | 'tourDetail.subjectRelevance'
  | 'tourDetail.itinerary'
  | 'tourDetail.inclusions'
  | 'tourDetail.gallery'
  | 'tourDetail.testimonials'
  | 'tourDetail.resources'
  | 'tourDetail.dayLabel'
  | 'tourDetail.highlights'
  | 'tourDetail.testimonialFrom'

  // Contact
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.contactInformation'
  | 'contact.address'
  | 'contact.contactDetails'
  | 'contact.businessHours'
  | 'contact.mondayFriday'
  | 'contact.saturday'
  | 'contact.sundayHolidays'
  | 'contact.closed'
  | 'contact.whatsappChat'
  | 'contact.sendMessage'
  | 'contact.name'
  | 'contact.email'
  | 'contact.phone'
  | 'contact.subject'
  | 'contact.message'
  | 'contact.sendMessageBtn'
  | 'contact.sending'
  | 'contact.successMessage'
  | 'contact.errorMessage'
  | 'contact.nameRequired'
  | 'contact.emailRequired'
  | 'contact.emailInvalid'
  | 'contact.subjectRequired'
  | 'contact.messageRequired'
  | 'contact.mapTitle'
  | 'contact.mapDescription'

  // Quotation
  | 'quotation.title'
  | 'quotation.tourLabel'
  | 'quotation.contactPerson'
  | 'quotation.phone'
  | 'quotation.email'
  | 'quotation.organizationName'
  | 'quotation.preferredMonth'
  | 'quotation.numberOfParticipants'
  | 'quotation.specialRequirements'
  | 'quotation.submitRequest'
  | 'quotation.submitting'
  | 'quotation.successMessage'
  | 'quotation.errorMessage'
  | 'quotation.contactPersonRequired'
  | 'quotation.phoneRequired'
  | 'quotation.emailRequired'
  | 'quotation.organizationRequired'
  | 'quotation.monthRequired'
  | 'quotation.participantsRequired'
  | 'quotation.specialRequirementsPlaceholder'

  // Errors
  | 'errors.pageNotFound'
  | 'errors.pageNotFoundMessage'
  | 'errors.serverError'
  | 'errors.serverErrorMessage'
  | 'errors.networkError'
  | 'errors.networkErrorMessage'
  | 'errors.unknownError'
  | 'errors.unknownErrorMessage'
  | 'errors.goHome'
  | 'errors.refreshPage'

  // Loading
  | 'loading.loadingTours'
  | 'loading.loadingContent'
  | 'loading.loadingPage'
  | 'loading.processing'
  | 'loading.pleaseWait'

  // Time
  | 'time.minutes'
  | 'time.hours'
  | 'time.days'
  | 'time.weeks'
  | 'time.months'
  | 'time.years'
  | 'time.am'
  | 'time.pm'
  | 'time.today'
  | 'time.yesterday'
  | 'time.tomorrow'

  // Tour Components
  | 'tourComponents.scrollLeft'
  | 'tourComponents.scrollRight'
  | 'tourComponents.imageAlt'
  | 'tourComponents.priceFrom'
  | 'tourComponents.duration'
  | 'tourComponents.participants'
  | 'tourComponents.availability'
  | 'tourComponents.difficulty'
  | 'tourComponents.ageGroup'
  | 'tourComponents.includes'
  | 'tourComponents.excludes'
  | 'tourComponents.highlights'
  | 'tourComponents.itineraryDay'
  | 'tourComponents.readMore'
  | 'tourComponents.readLess'
  | 'tourComponents.swipeToSeeMore'
  | 'tourComponents.contactForQuote'

  // Footer
  | 'footer.aboutUs'
  | 'footer.contactUs'
  | 'footer.followUs'
  | 'footer.copyright'
  | 'footer.privacyPolicy'
  | 'footer.termsOfService'
  | 'footer.siteMap'

  // Accessibility
  | 'accessibility.skipToContent'
  | 'accessibility.mainNavigation'
  | 'accessibility.searchForm'
  | 'accessibility.languageSwitcher'
  | 'accessibility.closeModal'
  | 'accessibility.openMenu'
  | 'accessibility.closeMenu'

export function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((o, p) => o?.[p], obj) || path;
}

export function useTranslations(locale: string) {
  const t = (key: TranslationKey): string => {
    const lang = locale === 'zh' ? 'zh' : 'en';
    return getNestedTranslation(translations[lang], key) || key;
  };

  return { t };
}

// Server-side translation function for async components
export async function getTranslations(locale: string) {
  const lang = locale === 'zh' ? 'zh' : 'en';
  
  const t = (key: TranslationKey): string => {
    return getNestedTranslation(translations[lang], key) || key;
  };

  return t;
} 
import PageLayout from '@/components/layout/PageLayout';
import CookieSettings from '@/components/CookieSettings';

interface CookiesPageProps {
  params: Promise<{ lang: string }>
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { lang } = await params;
  
  return (
    <PageLayout lang={lang}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? 'Cookie 設定' : 'Cookie Settings'}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {lang === 'zh'
              ? '您可以在此管理網站使用的 Cookie 類型。'
              : 'You can manage the types of cookies used on this website here.'}
          </p>
          <CookieSettings lang={lang} />
        </div>
      </div>
    </PageLayout>
  );
}

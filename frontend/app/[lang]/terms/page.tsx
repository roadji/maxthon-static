import PageLayout from '@/components/layout/PageLayout';

interface TermsPageProps {
  params: Promise<{ lang: string }>
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;
  
  return (
    <PageLayout lang={lang}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
              {lang === 'zh' ? '服務條款' : 'Terms of Service'}
            </h1>
            <p className="text-lg text-gray-600">
              {lang === 'zh' ? '最後更新：2025年六月' : 'Last updated: June 2025'}
            </p>
          </div>
          <div className="prose prose-lg max-w-none">
            {lang === 'zh' ? (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 條款接受</h2>
                  <p className="text-gray-700 leading-relaxed">使用本網站即表示您同意本服務條款。如不同意，請勿使用本網站。</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 服務說明</h2>
                  <p className="text-gray-700 leading-relaxed">本網站僅用於提供遊學團及文化交流活動的資訊。所有查詢及報名均需通過 WhatsApp、電話或電郵與我們直接聯絡。</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 無線上交易</h2>
                  <p className="text-gray-700 leading-relaxed">本網站不設任何線上付款或交易功能。所有報價、預訂及付款安排均由本中心職員通過 WhatsApp、電話或電郵與您直接處理。</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 用戶責任</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>用戶在查詢時必須提供真實及準確的聯絡資料。</li>
                    <li>不得利用本網站作任何非法或濫用行為。</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 責任限制</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>本網站內容僅供參考，並不構成任何承諾或保證。</li>
                    <li>因使用本網站或依賴其內容而引致的任何損失或損害，本中心概不負責。</li>
                    <li>本網站可能連結至第三方網站，對其內容及安全性本中心不承擔任何責任。</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 條款修訂</h2>
                  <p className="text-gray-700 leading-relaxed">本中心有權隨時修訂本服務條款。用戶繼續使用本網站即表示同意最新條款。</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 聯絡我們</h2>
                  <p className="text-gray-700 leading-relaxed">如對本服務條款有任何疑問，歡迎通過 WhatsApp、電話或電郵與我們聯絡：</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-gray-700">
                      <strong>遨遊國際交流中心</strong><br />
                      地址：新界火炭山尾街18-24號沙田商業中心17樓8室<br />
                      電話：(852) 2721 9911<br />
                      電子郵件：info@hkstudytour.com<br />
                      WhatsApp：+852 6199 6000
                    </p>
                  </div>
                </section>
              </div>
            ) : (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">By using this website, you agree to these Terms of Service. If you do not agree, please do not use this website.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                  <p className="text-gray-700 leading-relaxed">This website is for providing information about study tours and cultural exchange programs only. All inquiries and bookings must be made directly with us via WhatsApp, phone, or email.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Online Transactions</h2>
                  <p className="text-gray-700 leading-relaxed">This website does not process any online payments or transactions. All quotations, bookings, and payment arrangements are handled directly by our staff via WhatsApp, phone, or email.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Users must provide true and accurate contact information when making inquiries.</li>
                    <li>Users must not use this website for any unlawful or abusive purposes.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>The content on this website is for reference only and does not constitute any commitment or guarantee.</li>
                    <li>We are not responsible for any loss or damage resulting from the use of this website or reliance on its content.</li>
                    <li>This website may link to third-party websites. We are not responsible for the content or security of those sites.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">We may update these Terms of Service at any time. Continued use of the website means you accept the latest terms.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">If you have any questions about these Terms of Service, please contact us via WhatsApp, phone, or email:</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-gray-700">
                      <strong>Maxthon Universal Exchange Centre</strong><br />
                      Address: Room 8, 17/F, Shatin Galleria, 18-24 Sha Mei Street, Fo Tan, N.T.<br />
                      Phone: (852) 2721 9911<br />
                      Email: info@hkstudytour.com<br />
                      WhatsApp: +852 6199 6000
                    </p>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

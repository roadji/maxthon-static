import PageLayout from '@/components/layout/PageLayout';

interface PrivacyPageProps {
  params: Promise<{ lang: string }>
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  
  return (
    <PageLayout lang={lang}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
              {lang === 'zh' ? '私隱政策' : 'Privacy Policy'}
            </h1>
            <p className="text-lg text-gray-600">
              {lang === 'zh' ? '最後更新：2025年六月' : 'Last updated: June 2025'}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {lang === 'zh' ? (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人資料收集</h2>
                  <p className="text-gray-700 leading-relaxed">
                    遨遊國際交流中心（「我們」）致力保護您的私隱。本政策說明我們如何收集、使用和保護您的個人資料。
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">我們收集的資料：</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>聯絡資料（姓名、電話、電子郵件地址）</li>
                    <li>機構資料（學校或組織名稱）</li>
                    <li>遊學團偏好（目的地、日期、參與人數）</li>
                    <li>特殊要求（飲食限制、無障礙需求等）</li>
                    <li>通訊記錄（WhatsApp 對話、電子郵件）</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 資料使用目的</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>處理您的遊學團查詢和報價申請</li>
                    <li>提供客戶服務和支援</li>
                    <li>安排和管理遊學團行程</li>
                    <li>發送相關的遊學資訊和更新</li>
                    <li>改善我們的服務質量</li>
                    <li>遵守法律法規要求</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. WhatsApp 通訊</h2>
                  <p className="text-gray-700 leading-relaxed">
                    我們使用 WhatsApp 作為主要通訊方式。當您透過 WhatsApp 聯絡我們時：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>您的訊息將受到 WhatsApp 的端對端加密保護</li>
                    <li>我們可能保存對話記錄以提供更好的服務</li>
                    <li>您的電話號碼將用於回覆和跟進查詢</li>
                    <li>請查閱 WhatsApp 的私隱政策了解更多詳情</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 資料保護</h2>
                  <p className="text-gray-700 leading-relaxed">
                    我們採取適當的技術和組織措施保護您的個人資料：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>安全的數據庫加密存儲</li>
                    <li>限制員工訪問權限</li>
                    <li>定期安全審核和更新</li>
                    <li>安全的數據傳輸協議</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 資料分享</h2>
                  <p className="text-gray-700 leading-relaxed">
                    我們不會出售您的個人資料。我們可能在以下情況下分享資料：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>經您同意的情況下</li>
                    <li>與可信賴的服務提供商（如航空公司、酒店）</li>
                    <li>遵守法律要求或法庭命令</li>
                    <li>保護我們或他人的權利和安全</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies 政策</h2>
                  <p className="text-gray-700 leading-relaxed">
                    我們的網站使用 Cookies 來改善用戶體驗。這些 Cookies 用於：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>記住您的語言偏好</li>
                    <li>分析網站使用情況</li>
                    <li>改善網站功能和性能</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 您的權利</h2>
                  <p className="text-gray-700 leading-relaxed">
                    根據香港《個人資料（私隱）條例》，您有權：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>查閱您的個人資料</li>
                    <li>要求更正不準確的資料</li>
                    <li>要求停止使用您的資料作直接營銷</li>
                    <li>在某些情況下要求刪除您的資料</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 聯絡我們</h2>
                  <p className="text-gray-700 leading-relaxed">
                    如對本私隱政策有任何疑問，請聯絡我們：
                  </p>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Maxthon Universal Exchange Centre (&quot;we&quot; or &quot;us&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information we collect:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Contact information (name, phone, email address)</li>
                    <li>Organization details (school or institution name)</li>
                    <li>Study tour preferences (destinations, dates, participant numbers)</li>
                    <li>Special requirements (dietary restrictions, accessibility needs, etc.)</li>
                    <li>Communication records (WhatsApp conversations, emails)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Process your study tour inquiries and quotation requests</li>
                    <li>Provide customer service and support</li>
                    <li>Arrange and manage study tour itineraries</li>
                    <li>Send relevant study tour information and updates</li>
                    <li>Improve our service quality</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. WhatsApp Communications</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use WhatsApp as our primary communication method. When you contact us via WhatsApp:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>Your messages are protected by WhatsApp's end-to-end encryption</li>
                    <li>We may retain conversation records to provide better service</li>
                    <li>Your phone number will be used for replies and follow-up inquiries</li>
                    <li>Please refer to WhatsApp's privacy policy for more details</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>Secure encrypted database storage</li>
                    <li>Restricted staff access permissions</li>
                    <li>Regular security audits and updates</li>
                    <li>Secure data transmission protocols</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell your personal information. We may share information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>With your consent</li>
                    <li>With trusted service providers (airlines, hotels, etc.)</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights or the safety of others</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our website uses cookies to improve user experience. These cookies are used to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>Remember your language preferences</li>
                    <li>Analyze website usage</li>
                    <li>Improve website functionality and performance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Under Hong Kong's Personal Data (Privacy) Ordinance, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request cessation of use of your data for direct marketing</li>
                    <li>Request deletion of your data in certain circumstances</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this privacy policy, please contact us:
                  </p>
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
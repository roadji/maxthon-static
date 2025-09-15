import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="zh">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center max-w-2xl mx-auto p-8">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="text-9xl font-bold text-gray-200">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-24 w-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              頁面找不到 / Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              抱歉，您訪問的頁面不存在或已被移動。<br />
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            {/* Navigation Options */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/zh"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  返回首頁 / Go Home
                </Link>
                
                <Link
                  href="/zh/tours"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  瀏覽行程 / Browse Tours
                </Link>
              </div>

              {/* Contact Support */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-3">需要協助？ / Need help?</p>
                <Link
                  href="/zh/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                >
                  聯絡我們 / Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 
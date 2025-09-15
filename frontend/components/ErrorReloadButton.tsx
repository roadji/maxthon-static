"use client";

export default function ErrorReloadButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
    >
      Try Again
    </button>
  );
} 
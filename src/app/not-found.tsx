import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-md text-center space-y-6">
        <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">404</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

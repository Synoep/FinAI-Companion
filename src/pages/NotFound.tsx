import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-5">
      <div className="text-center max-w-md">
        <div className="text-primary-600 text-6xl font-bold mb-6">404</div>
        <h1 className="text-2xl font-bold text-neutral-800 mb-3">Page Not Found</h1>
        <p className="text-neutral-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md shadow-sm hover:bg-primary-700 transition-colors"
        >
          <HomeIcon size={18} className="mr-2" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
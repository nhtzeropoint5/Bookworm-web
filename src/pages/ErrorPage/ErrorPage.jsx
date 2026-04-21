import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 px-6">
      <div className="text-center max-w-lg">
        
 
        <h1 className="text-8xl font-extrabold text-primary drop-shadow-md">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-base-content">
          Page Not Found
        </h2>

      
        <p className="mt-2 text-base-content/70">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/">
            <button className="btn btn-primary rounded-full px-6">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline rounded-full px-6"
          >
            Go Back
          </button>
        </div>

        {/* Decorative element */}
        <div className="mt-10 opacity-40 text-sm">
          Error Code: 404 | Lost in space 🚀
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
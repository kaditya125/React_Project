import React from
 
'react';
import { useNavigate } from
 
'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleContactUs = () => {
    navigate('/contact-us'); // Navigate to the contact page
  };

  return (
    <div className="py-10">
      <div className="text-center">
        {/* Page not found content */}
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {/* Go back button content */}
            <svg

              
xmlns="http://www.w3.org/2000/svg"

              
width="16"

              
height="16"

              
viewBox="0 0 24 24"

              
fill="none"

              
stroke="currentColor"

              
strokeWidth="2"

              
strokeLinecap="round"

              
strokeLinejoin="round"

              
className="mr-2"
            >

              
<line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Go back
          </button>
          <button
            type="button"
            onClick={handleContactUs}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {/* Contact us button content */}
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
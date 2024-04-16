import React from 'react';

import { Link } from 'react-router-dom';

import { HomeIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

function NotFound() {
  return (
    <div className="flex flex-1 flex-col h-full p-4">
      {/* Page title */}
      <div className="py-4">
        <h1 className="text-lg font-semibold md:text-2xl">404 Error</h1>
      </div>
      {/* /Page title */}

      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Oops! Page not found.</h3>
          <p className="text-md text-muted-foreground mb-4"> Did someone forget to feed the hamster powering our servers?</p>
          <Button asChild>
            <Link to="/">
              <HomeIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

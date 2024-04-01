import React from 'react';
import PropTypes from 'prop-types';

import { CircleIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

import LSLogo from '@/data/ls-logo.svg';

function Sidebar({ onCategoryClick }) {
  return (
    <div className="border-r hidden md:block">
      <div className="flex flex-col gap-5 h-full max-h-screen">
        {/* Logo */}
        <div className="flex items-center border-b h-14 min-h-14 px-4 lg:h-[60px] lg:min-h-[60px] lg:px-6">
          <a href="/" className="flex gap-5 text-sm font-semibold items-center lg:text-base">
            <img src={LSLogo} className="h-8" alt="LS Card Deck Logo" data-testid="sidebar-logo" />
            <span>Liberating Structures Card Deck</span>
          </a>
        </div>
        {/* /Logo */}
        {/* Sidebar Content */}
        <div className="flex-1">
          <nav className="grid gap-1 text-sm font-medium items-start px-2 lg:px-4">
            <Button className="flex gap-5 justify-start items-center px-3 py-2" variant="ghost" onClick={() => onCategoryClick('All')}>
              <CircleIcon className="w-3 h-3" />
              All Cards
            </Button>
            <Button className="flex gap-5 justify-start items-center px-3 py-2" variant="ghost" onClick={() => onCategoryClick('Reveal')}>
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              Reveal
            </Button>
            <Button className="flex gap-5 justify-start items-center px-3 py-2" variant="ghost" onClick={() => onCategoryClick('Share')}>
              <span className="w-3 h-3 bg-blue-500 rounded-full" />
              Share
            </Button>
            <Button className="flex gap-5 justify-start items-center px-3 py-2" variant="ghost" onClick={() => onCategoryClick('Analyze')}>
              <span className="w-3 h-3 bg-purple-500 rounded-full" />
              Analyze
            </Button>
            <Button className="flex gap-5 justify-start items-center px-3 py-2" variant="ghost" onClick={() => onCategoryClick('Help')}>
              <span className="w-3 h-3 bg-amber-700 rounded-full" />
              Help
            </Button>
            <Button className="flex gap-5 justify-start items-center px-3 py-2" variant="ghost" onClick={() => onCategoryClick('Strategize')}>
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              Strategize
            </Button>
            <Button className="flex gap-5 justify-start items-center px-3 py-2" variant="ghost" onClick={() => onCategoryClick('Plan')}>
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
              Plan
            </Button>
          </nav>
        </div>
        {/* /Sidebar Content */}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default Sidebar;

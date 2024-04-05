import React from 'react';
import PropTypes from 'prop-types';

import { CircleIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

import { categoryList } from '@/data/card-categories';
import LSLogo from '@/data/ls-logo.svg';

function Sidebar({ onCategoryClick }) {
  return (
    <div className="border-r hidden md:block">
      <div className="flex flex-col gap-5 h-full max-h-screen sticky top-0">
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
            {/* All cards button */}
            <Button
              className="flex gap-5 justify-start items-center px-3 py-2"
              variant="ghost"
              // Use 0 as a special id for all cards
              onClick={() => onCategoryClick(0)}
              data-testid="category-button"
            >
              <CircleIcon className="w-3 h-3" />
              All Cards
            </Button>
            {/* /All cards button */}
            {/* Loop through categories */}
            {categoryList.map((cardCategory) => (
              <Button
                key={cardCategory.id}
                className="flex gap-5 justify-start items-center px-3 py-2"
                variant="ghost"
                onClick={() => onCategoryClick(cardCategory.id)}
                data-testid="category-button"
              >
                <span className={`w-3 h-3 ${cardCategory.color} rounded-full`} />
                {cardCategory.title}
              </Button>
            ))}
            {/* /Loop through categories */}
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
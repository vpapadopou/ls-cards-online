import React from 'react';

import { Link } from 'react-router-dom';

import { CircleIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

import LSLogo from '@/data/ls-logo.svg';

import { useCardStore } from '@/hooks/use-card-store';

import { getAllCategories } from '@/services/card-categories';

function Sidebar() {
  const setSelectedCategoryId = useCardStore((state) => state.setSelectedCategoryId);

  return (
    <div className="border-r hidden md:block">
      <div className="flex flex-col gap-5 h-full max-h-screen">
        {/* Logo */}
        <div className="flex items-center border-b h-14 min-h-14 px-4 lg:h-[60px] lg:min-h-[60px] lg:px-6">
          <Link className="flex gap-5 text-sm font-semibold items-center lg:text-base" to="/">
            <img src={LSLogo} className="h-8" alt="LS Card Deck Logo" data-testid="sidebar-logo" />
            <span>Liberating Structures Card Deck</span>
          </Link>
        </div>
        {/* /Logo */}
        {/* Sidebar Content */}
        <div className="flex-1">
          <nav className="grid gap-1 text-sm font-medium items-start px-2 lg:px-4">
            {/* All cards link */}
            <Button
              className="flex gap-5 justify-start items-center px-3 py-2"
              variant="ghost"
              // Use 0 as a special id for all cards
              onClick={() => setSelectedCategoryId(0)}
              data-testid="category-link"
              asChild
            >
              <Link to="/">
                <CircleIcon className="w-3 h-3" />
                All Cards
              </Link>
            </Button>
            {/* /All cards link */}
            {/* Loop through categories */}
            {getAllCategories().map((cardCategory) => (
              <Button
                key={cardCategory.id}
                className="flex gap-5 justify-start items-center px-3 py-2"
                variant="ghost"
                onClick={() => setSelectedCategoryId(cardCategory.id)}
                data-testid="category-link"
                asChild
              >
                <Link to="/">
                  <span className={`w-3 h-3 ${cardCategory.color} rounded-full`} />
                  {cardCategory.title}
                </Link>
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

export default Sidebar;

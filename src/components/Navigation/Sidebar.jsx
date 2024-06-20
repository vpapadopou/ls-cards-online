import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CircleIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import LsLogoSvg from '@/data/LsLogo';

import { useCardStore } from '@/hooks/use-card-store';

import { getAllCategories } from '@/services/card-categories';

function Sidebar() {
  const location = useLocation();
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const setSelectedCategoryId = useCardStore((state) => state.setSelectedCategoryId);

  return (
    <div className="border-r hidden md:block">
      <div className="flex flex-col gap-5 h-full max-h-max">
        {/* Logo */}
        <div className="flex items-center border-b h-14 min-h-14 px-4 lg:h-[60px] lg:min-h-[60px] lg:px-6">
          <Link className="flex gap-5 text-sm font-semibold items-center lg:text-base" to="/">
            <LsLogoSvg className="h-10" data-testid="sidebar-logo" />
            <span>Liberating Structures Card Deck</span>
          </Link>
        </div>
        {/* /Logo */}
        {/* Sidebar Content */}
        <div className="flex-1">
          <nav className="grid gap-1 text-sm font-medium items-start px-2 lg:px-4">
            {/* All cards link */}
            <Button
              className={clsx('flex gap-5 justify-start items-center px-3 py-2', {
                'bg-accent': location.pathname === '/' && selectedCategoryId === 0,
              })}
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
                className={clsx('flex gap-5 justify-start items-center px-3 py-2', {
                  'bg-accent': location.pathname === '/' && selectedCategoryId === cardCategory.id,
                })}
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
            {/* Pages */}
            <Separator className="my-4" />
            <Button
              className={clsx('flex gap-5 justify-start items-center px-3 py-2', {
                'bg-accent': location.pathname === '/about',
              })}
              variant="ghost"
              data-testid="about-button"
              asChild
            >
              <Link to="/about">About</Link>
            </Button>
            {/* /Pages */}
          </nav>
        </div>
        {/* /Sidebar Content */}
      </div>
    </div>
  );
}

export default Sidebar;

import clsx from 'clsx';
import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CircleIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import LSLogo from '@/data/ls-logo.svg';

import { useCardStore } from '@/hooks/use-card-store';

import { getAllCategories } from '@/services/card-categories';

import CommandMenu from './CommandMenu';

function Navigation() {
  const location = useLocation();
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const setSelectedCategoryId = useCardStore((state) => state.setSelectedCategoryId);

  const [openSheet, setOpenSheet] = useState(false);

  // Call the appropriate callback and close the sheet.
  // Used to programmatically close the sheet after user selects a category.
  // Otherwise, the data in the background changes and the sheet remains open.
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setOpenSheet(false);
  };

  return (
    <header className="flex gap-5 h-14 min-h-14 bg-background items-center px-4 border-b lg:h-[60px] lg:min-h-[60px] lg:px-6">
      {/* Side sheet (shown on small screens) */}
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline" data-testid="sheet-toggle-button">
            <HamburgerMenuIcon className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col w-[300px]" side="left">
          <nav className="grid gap-2 text-md font-medium overflow-auto">
            {/* Logo */}
            <div className="flex gap-5 text-lg font-semibold items-center mb-2">
              <img src={LSLogo} className="h-8" alt="Liberating Structures Card Deck Logo" />
              <span>Liberating Structures Card Deck</span>
            </div>
            {/* /Logo */}
            {/* Sheet content */}
            {/* All cards link */}
            <Button
              className={clsx('flex gap-5 text-md justify-start items-center px-3 py-2', {
                'bg-accent': location.pathname === '/' && selectedCategoryId === 0,
              })}
              variant="ghost"
              // Use 0 as a special id for all cards
              onClick={() => handleCategoryClick(0)}
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
                className={clsx('flex gap-5 text-md justify-start items-center px-3 py-2', {
                  'bg-accent': location.pathname === '/' && selectedCategoryId === cardCategory.id,
                })}
                variant="ghost"
                onClick={() => handleCategoryClick(cardCategory.id)}
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
              className={clsx('flex gap-5 text-md justify-start items-center px-3 py-2', {
                'bg-accent': location.pathname === '/about',
              })}
              variant="ghost"
              onClick={() => setOpenSheet(false)}
              data-testid="about-button"
              asChild
            >
              <Link to="/about">About</Link>
            </Button>
            {/* /Pages */}
            {/* /Sheet content */}
          </nav>
        </SheetContent>
      </Sheet>
      {/* /Side sheet (shown on small screens) */}
      {/* Navbar */}
      <div className="flex-1 w-full ml-auto md:flex-none md:w-auto">
        <CommandMenu />
      </div>
      {/* /Navbar */}
    </header>
  );
}

export default Navigation;

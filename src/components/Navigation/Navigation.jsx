import { React, useState } from 'react';
import PropTypes from 'prop-types';

import { CircleIcon, HamburgerMenuIcon, InfoCircledIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { categoryList } from '@/data/card-categories';
import LSLogo from '@/data/ls-logo.svg';

function Navigation({ onAboutClick, onCategoryClick }) {
  const [openSheet, setOpenSheet] = useState(false);

  // Call the appropriate callback and close the sheet.
  // Used to programmatically close the sheet after user selects a category.
  // Otherwise, the data in the background changes and the sheet remains open.
  const selectCategory = (category) => {
    onCategoryClick(category);
    setOpenSheet(false);
  };

  return (
    <header className="flex gap-5 h-14 sticky top-0 bg-background items-center px-4 border-b lg:h-[60px] lg:px-6">
      {/* Side sheet (shown on small screens) */}
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline" data-testid="sheet-toggle-button">
            <HamburgerMenuIcon className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col w-[300px]" side="left">
          <nav className="grid gap-2 text-md font-medium">
            {/* Logo */}
            <div className="flex gap-5 text-lg font-semibold items-center mb-2">
              <img src={LSLogo} className="h-8" alt="Liberating Structures Card Deck Logo" />
              <span>Liberating Structures Card Deck</span>
            </div>
            {/* /Logo */}
            {/* Sheet content */}
            {/* All cards button */}
            <Button
              className="flex gap-5 text-md justify-start items-center px-3 py-2"
              variant="ghost"
              // Use 0 as a special id for all cards
              onClick={() => selectCategory(0)}
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
                className="flex gap-5 text-md justify-start items-center px-3 py-2"
                variant="ghost"
                onClick={() => selectCategory(cardCategory.id)}
                data-testid="category-button"
              >
                <span className={`w-3 h-3 ${cardCategory.color} rounded-full`} />
                {cardCategory.title}
              </Button>
            ))}
            {/* /Loop through categories */}
            {/* /Sheet content */}
          </nav>
        </SheetContent>
      </Sheet>
      {/* /Side sheet (shown on small screens) */}
      {/* Navbar */}
      <div className="flex-1 w-full">{/* Content to be added */}</div>
      {/* On click send NULL back so the about modal opens */}
      <Button size="icon" variant="outline" onClick={() => onAboutClick(null)} data-testid="about-button">
        <InfoCircledIcon className="w-5 h-5" />
        <span className="sr-only">Open about modal</span>
      </Button>
      {/* /Navbar */}
    </header>
  );
}

Navigation.propTypes = {
  onAboutClick: PropTypes.func.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default Navigation;

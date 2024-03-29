import React from 'react';
import PropTypes from 'prop-types';

import { CircleIcon, HamburgerMenuIcon, InfoCircledIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import LSLogo from '../../data/logos/ls-menu.svg';

function Navigation({ onClick }) {
  return (
    <header className="flex gap-5 h-14 items-center px-4 border-b lg:h-[60px] lg:px-6">
      {/* Side sheet (shown on small screens) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
            <HamburgerMenuIcon className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col w-[300px]" side="left">
          <nav className="grid gap-2 text-md font-medium">
            {/* Logo */}
            <div className="flex gap-5 text-lg font-semibold items-center mb-2">
              <img src={LSLogo} className="h-8" alt="LS Card Deck Logo" />
              <span>Liberating Structures Card Deck</span>
            </div>
            {/* /Logo */}
            {/* Sheet content */}
            <Button className="flex gap-5 text-md justify-start items-center px-3 py-2" variant="ghost" onClick={() => onClick('allCards')}>
              <CircleIcon className="w-3 h-3" />
              All Cards
            </Button>
            <Button className="flex gap-5 text-md justify-start items-center px-3 py-2" variant="ghost" onClick={() => onClick('reveal')}>
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              Reveal
            </Button>
            <Button className="flex gap-5 text-md justify-start items-center px-3 py-2" variant="ghost" onClick={() => onClick('share')}>
              <span className="w-3 h-3 bg-blue-500 rounded-full" />
              Share
            </Button>
            <Button className="flex gap-5 text-md justify-start items-center px-3 py-2" variant="ghost" onClick={() => onClick('analyze')}>
              <span className="w-3 h-3 bg-purple-500 rounded-full" />
              Analyze
            </Button>
            <Button className="flex gap-5 text-md justify-start items-center px-3 py-2" variant="ghost" onClick={() => onClick('help')}>
              <span className="w-3 h-3 bg-amber-700 rounded-full" />
              Help
            </Button>
            <Button className="flex gap-5 text-md justify-start items-center px-3 py-2" variant="ghost" onClick={() => onClick('strategize')}>
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              Strategize
            </Button>
            <Button className="flex gap-5 text-md justify-start items-center px-3 py-2" variant="ghost" onClick={() => onClick('plan')}>
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
              Plan
            </Button>
            {/* /Sheet content */}
          </nav>
        </SheetContent>
      </Sheet>
      {/* /Side sheet (shown on small screens) */}
      {/* Navbar */}
      <div className="flex-1 w-full">{/* Content to be added */}</div>
      <Button size="icon" variant="outline" onClick={() => onClick('about')}>
        <InfoCircledIcon className="w-5 h-5" />
        <span className="sr-only">About</span>
      </Button>
      {/* /Navbar */}
    </header>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navigation;

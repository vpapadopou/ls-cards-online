import clsx from 'clsx';
import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import LsLogoSvg from '@/data/LsLogo';

import CommandMenu from './CommandMenu';
import NavigationOptions from './NavigationOptions';

function Navigation() {
  const location = useLocation();

  const [openSheet, setOpenSheet] = useState(false);

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
              <LsLogoSvg className="h-10" />
              <span>Liberating Structures Card Deck</span>
            </div>
            {/* /Logo */}
            {/* Sheet content */}
            {/* Cards */}
            <Button
              className={clsx('text-md justify-start px-3 py-2', {
                'bg-accent': location.pathname === '/',
              })}
              variant="ghost"
              onClick={() => setOpenSheet(false)}
              data-testid="cards-page-button"
              asChild
            >
              <Link to="/">Cards</Link>
            </Button>
            {/* /Cards */}
            {/* About */}
            <Button
              className={clsx('text-md justify-start px-3 py-2', {
                'bg-accent': location.pathname === '/about',
              })}
              variant="ghost"
              onClick={() => setOpenSheet(false)}
              data-testid="cards-about-button"
              asChild
            >
              <Link to="/about">About</Link>
            </Button>
            {/* /About */}
            {/* /Sheet content */}
          </nav>
        </SheetContent>
      </Sheet>
      {/* /Side sheet (shown on small screens) */}
      {/* Navbar */}
      <div className="flex w-full gap-2 items-center ml-auto md:flex-none md:w-auto">
        <CommandMenu />
        <NavigationOptions />
      </div>
      {/* /Navbar */}
    </header>
  );
}

export default Navigation;

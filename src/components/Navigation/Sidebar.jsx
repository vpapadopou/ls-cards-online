import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import LsLogoSvg from '@/data/LsLogo';

function Sidebar() {
  const location = useLocation();

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
            {/* Cards */}
            <Button
              className={clsx('justify-start px-3 py-2', {
                'bg-accent': location.pathname === '/',
              })}
              variant="ghost"
              data-testid="navigation-page-link"
              asChild
            >
              <Link to="/">Cards</Link>
            </Button>
            {/* /Cards */}
            {/* About */}
            <Button
              className={clsx('justify-start px-3 py-2', {
                'bg-accent': location.pathname === '/about',
              })}
              variant="ghost"
              data-testid="navigation-page-link"
              asChild
            >
              <Link to="/about">About</Link>
            </Button>
            {/* /About */}
          </nav>
        </div>
        {/* /Sidebar Content */}
      </div>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import LSLogo from '../../data/logos/ls-menu.svg';

function Navigation({ onClick }) {
  return (
    <nav className="w-full fixed bg-background">
      <div className="container flex flex-row items-center justify-between h-16 space-y-0 py-4">
        <img src={LSLogo} className="mr-4 h-8" alt="LS Card Deck Logo" />
        <h2 className="text-lg font-semibold whitespace-nowrap">Liberating Structures Card Deck</h2>
        <div className="ml-auto flex w-full space-x-2 justify-end">
          <Button variant="secondary" onClick={onClick}>
            About
          </Button>
        </div>
      </div>
      <Separator />
    </nav>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navigation;

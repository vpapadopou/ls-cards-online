import React from 'react';
import PropTypes from 'prop-types';

import { Badge, Navbar } from 'flowbite-react';

import LSLogo from '../../data/logos/ls-menu.svg';

/* Use a custom modal theme in order to have a full size modal
   instead of one that uses max-h-[90vh] and shows an ugly
   scrollbar */
const customNavbarTheme = {
  link: {
    active: {
      on: 'text-white dark:text-white md:bg-transparent',
      off: 'text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white',
    },
  },
};

function Navigation({ onClick }) {
  return (
    <Navbar fluid rounded theme={customNavbarTheme} className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <Navbar.Brand href="#">
        <img src={LSLogo} className="mr-4 h-6 sm:h-8" alt="LS Card Deck Logo" />
        <span className="md:block hidden self-center whitespace-nowrap text-xl font-semibold mr-5 dark:text-white">
          Liberating Structures Card Deck
        </span>
        <span className="md:hidden self-center whitespace-nowrap text-xl font-semibold mr-5 dark:text-white">LS Card Deck</span>
        <Badge color="purple">Alpha</Badge>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="hover:underline" href="#" onClick={onClick}>
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navigation;

import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Sidebar from './Sidebar';

describe('Component: Sidebar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
  });

  test('should display the title text inside <span>', () => {
    expect(screen.getByText('Liberating Structures Card Deck', { selector: 'span' })).toBeDefined();
  });

  test('should display the sidebar logo', () => {
    expect(screen.getByTestId('sidebar-logo')).toBeDefined();
  });

  test('should display 2 navigation page links', () => {
    expect(screen.getAllByTestId('navigation-page-link').length).toEqual(2);
  });
});

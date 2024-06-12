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

  test('should display the "All Cards" category link', () => {
    expect(screen.getByText('All Cards')).toBeDefined();
  });

  test('should display 7 card category links', () => {
    expect(screen.getAllByTestId('category-link').length).toEqual(7);
  });

  test('should display the about button', () => {
    expect(screen.getByTestId('about-button')).toBeDefined();
  });
});

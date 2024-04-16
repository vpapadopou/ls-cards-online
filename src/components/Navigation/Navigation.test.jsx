import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

describe('Component: Navigation', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  test('should display the toggle navigation button', () => {
    expect(screen.getByTestId('sheet-toggle-button')).toBeDefined();
  });

  test('should display the about button', () => {
    expect(screen.getByTestId('about-button')).toBeDefined();
  });

  test('should NOT display the "All Cards" category link when the sheet is closed', () => {
    expect(screen.queryByText('All Cards', { selector: 'link' })).toBeNull();
  });

  test('should display the "All Cards" category button when the sheet is open', () => {
    // Open sheet
    const button = screen.getByTestId('sheet-toggle-button');
    fireEvent.click(button);

    expect(screen.getByText('All Cards')).toBeDefined();
  });

  test('should display 7 card category links when the sheet is open', () => {
    // Open sheet
    const button = screen.getByTestId('sheet-toggle-button');
    fireEvent.click(button);

    expect(screen.getAllByTestId('category-link').length).toEqual(7);
  });
});

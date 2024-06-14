import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

describe('Component: Navigation', () => {
  // Mock useMediaQuery to return that we are in a desktop by default
  vi.mock('@/hooks/use-media-query', async (importOriginal) => {
    const mod = await importOriginal();
    return {
      ...mod,
      // return true to indicate we're on a desktop device
      useMediaQuery: vi.fn().mockReturnValue(true),
    };
  });

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

  test('should display the about button when the sheet is open', () => {
    // Open sheet
    const button = screen.getByTestId('sheet-toggle-button');
    fireEvent.click(button);

    expect(screen.getByTestId('about-button')).toBeDefined();
  });
});

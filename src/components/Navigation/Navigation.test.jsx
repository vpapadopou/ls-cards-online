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

  test('should NOT display any navigation page links when the sheet is closed', () => {
    expect(screen.queryAllByTestId('navigation-page-link').length).toEqual(0);
  });

  test('should display 2 navigation page links when the sheet is open', () => {
    // Open sheet
    const button = screen.getByTestId('sheet-toggle-button');
    fireEvent.click(button);

    expect(screen.getAllByTestId('navigation-page-link').length).toEqual(2);
  });
});

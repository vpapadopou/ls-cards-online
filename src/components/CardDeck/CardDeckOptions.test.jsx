import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs } from '@/components/ui/tabs';

import CardDeckOptions from './CardDeckOptions';

describe('Component: CardDeckOptions', () => {
  const user = userEvent.setup();

  // Mock the ResizeObserver
  const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Stub the global ResizeObserver
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  // Mock scrollIntoView function
  window.HTMLElement.prototype.scrollIntoView = vi.fn();

  beforeEach(() => {
    render(
      <Tabs defaultValue="cardView">
        <CardDeckOptions />
      </Tabs>
    );
  });

  test('should have 2 tab triggerts', () => {
    expect(screen.getAllByTestId('tab-trigger').length).toEqual(2);
  });

  test('should NOT display the "All Categories" option when the category selection dropdown is closed', () => {
    expect(screen.queryAllByTestId('category-selection-all').length).toEqual(0);
  });

  test('should display the "All Categories" option when the category selection dropdown is open', async () => {
    // Open dropdown
    const button = screen.getByTestId('category-selection-trigger');
    await user.click(button);

    expect(screen.getByTestId('category-selection-all')).toBeDefined();
  });

  test('should display 6 category options when the category selection dropdown is open', async () => {
    // Open dropdown
    const button = screen.getByTestId('category-selection-trigger');
    await user.click(button);

    expect(screen.getAllByTestId('category-selection-option').length).toEqual(6);
  });

  test('should NOT display any sorting options when the sorting selection dropdown is closed', () => {
    expect(screen.queryAllByTestId('sorting-selection-option').length).toEqual(0);
  });

  test('should display 5 sorting options when the sorting selection dropdown is open', async () => {
    // Open dropdown
    const button = screen.getByTestId('sorting-selection-trigger');
    await user.click(button);

    expect(screen.getAllByTestId('sorting-selection-option').length).toEqual(5);
  });
});

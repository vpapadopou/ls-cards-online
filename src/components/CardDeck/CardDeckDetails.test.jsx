import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';

import deckData from '@/data/cards';

import CardDeckDetails from './CardDeckDetails';

describe('Component: CardDeckDetails', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  test("should display the first card's title in the details panel after the loading indicator", async () => {
    render(<CardDeckDetails />);
    const cardData = deckData[0];

    // With the loading indicator you should not be able to find anything
    expect(screen.queryAllByText(cardData.title, { selector: 'h4' }).length).toEqual(0);

    await act(() => vi.runAllTimers());

    expect(screen.getByText(cardData.title, { selector: 'h4' })).toBeDefined();
  });
});

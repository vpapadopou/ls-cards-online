import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import deckData from '@/data/cards';

import CardDeck from './CardDeck';

describe('Component: CardDeck', () => {
  // Mock useMediaQuery to return that we are in a desktop by default
  vi.mock('@/hooks/use-media-query', async (importOriginal) => {
    const mod = await importOriginal();
    return {
      ...mod,
      // first call: return that we are on mobile device, then on desktop
      useMediaQuery: vi.fn().mockReturnValueOnce(false).mockReturnValue(true),
    };
  });
  // Used by drawer animation - stub it to avoid errors
  window.scrollTo = vi.fn();

  beforeEach(() => {
    render(<CardDeck />);
  });

  test('should open the card drawer when a card from the deck is clicked and we are on a mobile device', () => {
    // Click the 1-2-4-All card (the first one on the grid)
    const card = screen.getAllByTestId('card-preview')[0];
    fireEvent.click(card);

    // We expect to see the card title twice: One in card preview and one in the drawer
    const cardData = deckData[0];
    expect(screen.getAllByText(cardData.title, { selector: 'h4' }).length).toEqual(2);
  });

  test('should NOT open the card drawer when a card from the deck is clicked and we are on a desktop device', () => {
    // Click the 1-2-4-All card (the first one on the grid)
    const card = screen.getAllByTestId('card-preview')[0];
    fireEvent.click(card);

    // We expect to see the card title only once in card preview
    const cardData = deckData[0];
    expect(screen.getAllByText(cardData.title, { selector: 'h4' }).length).toEqual(1);
  });
});

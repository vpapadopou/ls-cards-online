import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import deckData from '@/data/cards';

import CardDeck from './CardDeck';

describe('Component: CardDeck', () => {
  const stub = vi.fn();

  // Mock useMediaQuery to return that we are in a desktop by default
  vi.mock('@/hooks/use-media-query', async (importOriginal) => {
    const mod = await importOriginal();
    return {
      ...mod,
      useMediaQuery: vi.fn().mockReturnValue(true),
    };
  });

  test('should display the selected category title inside <h1>', () => {
    render(<CardDeck onCardClick={stub} />);

    expect(screen.getByText('All Cards', { selector: 'h1' })).toBeDefined();
  });

  test("should display the first card's title also in the details panel", () => {
    render(<CardDeck onCardClick={stub} />);

    const cardData = deckData[0];

    expect(screen.getAllByText(cardData.title, { selector: 'h4' }).length).toEqual(2);
  });

  test("should display the second card's title also in the details panel when the deck's second card is clicked", () => {
    render(<CardDeck onCardClick={stub} />);

    // Click the Impromptu Networking card
    const card = screen.getAllByTestId('card-preview')[1];
    fireEvent.click(card);
    const cardData = deckData[1];

    expect(screen.getAllByText(cardData.title, { selector: 'h4' }).length).toEqual(2);
  });
});

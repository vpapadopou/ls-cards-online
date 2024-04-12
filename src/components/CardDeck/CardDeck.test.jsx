import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import deckData from '@/data/cards';

import CardDeck from './CardDeck';
// import useMediaQuery from '@/hooks/use-media-query';

describe('Component: CardDeck', () => {
  const stub = vi.fn();

  // Moch useMediaQuery to return that we are in a desktop by default
  vi.mock('@/hooks/use-media-query', async (importOriginal) => {
    const mod = await importOriginal();
    return {
      ...mod,
      useMediaQuery: vi.fn().mockReturnValue(true),
    };
  });

  test('should display the selected category title inside <h1>', () => {
    render(<CardDeck selectedCategory={0} onCardClick={stub} />);

    expect(screen.getByText('All Cards', { selector: 'h1' })).toBeDefined();
  });

  test("should display the first card's title also in the details panel", () => {
    render(<CardDeck selectedCategory={0} onCardClick={stub} />);

    const cardData = deckData[0];

    expect(screen.getAllByText(cardData.title, { selector: 'h4' }).length).toEqual(2);
  });

  test('should display 12 cards when the selected category is "Reveal"', () => {
    render(<CardDeck selectedCategory={1} onCardClick={stub} />);

    expect(screen.getAllByTestId('card-preview').length).toEqual(12);
  });

  test('should display 7 cards when the selected category is "Share"', () => {
    render(<CardDeck selectedCategory={2} onCardClick={stub} />);

    expect(screen.getAllByTestId('card-preview').length).toEqual(7);
  });

  test('should display 7 cards when the selected category is "Analyze"', () => {
    render(<CardDeck selectedCategory={3} onCardClick={stub} />);

    expect(screen.getAllByTestId('card-preview').length).toEqual(7);
  });

  test('should display 6 cards when the selected category is "Help"', () => {
    render(<CardDeck selectedCategory={4} onCardClick={stub} />);

    expect(screen.getAllByTestId('card-preview').length).toEqual(6);
  });

  test('should display 5 cards when the selected category is "Strategize"', () => {
    render(<CardDeck selectedCategory={5} onCardClick={stub} />);

    expect(screen.getAllByTestId('card-preview').length).toEqual(5);
  });

  test('should display 2 cards when the selected category is "Plan"', () => {
    render(<CardDeck selectedCategory={6} onCardClick={stub} />);

    expect(screen.getAllByTestId('card-preview').length).toEqual(2);
  });

  test("should display the second card's title also in the details panel when the deck's second card is clicked", () => {
    render(<CardDeck selectedCategory={0} onCardClick={stub} />);

    // Click the Impromptu Networking card
    const card = screen.getAllByTestId('card-preview')[1];
    fireEvent.click(card);
    const cardData = deckData[1];

    expect(screen.getAllByText(cardData.title, { selector: 'h4' }).length).toEqual(2);
  });
});

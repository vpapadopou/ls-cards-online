import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import deckData from '@/data/cards';

import CardDeckList from './CardDeckList';

describe('Component: CardDeckList', () => {
  const stub = vi.fn();

  beforeEach(() => {
    render(<CardDeckList onClick={stub} />);
  });

  test('should display a list of cards with as many items as the cards in the deck', () => {
    expect(screen.getAllByTestId('card-list-option').length).toEqual(deckData.length);
  });

  test("should call the provided callback function AND pass the card's id when a card is clicked", () => {
    // Click the Impromptu Networking card (the second one in the grid)
    const card = screen.getAllByTestId('card-list-option')[1];
    fireEvent.click(card);

    const cardData = deckData[1];
    expect(stub).toHaveBeenCalledWith(cardData.id);
  });
});

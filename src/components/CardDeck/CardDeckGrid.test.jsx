import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import deckData from '@/data/cards';

import CardDeckGrid from './CardDeckGrid';

describe('Component: CardDeckGrid', () => {
  const stub = vi.fn();

  beforeEach(() => {
    render(<CardDeckGrid onClick={stub} />);
  });

  test('should display as many card previews as the cards in the deck', () => {
    expect(screen.getAllByTestId('card-preview').length).toEqual(deckData.length);
  });

  test("should call the provided callback function AND pass the card's id when a card preview is clicked", () => {
    // Click the Impromptu Networking card (the second one in the grid)
    const card = screen.getAllByTestId('card-preview')[1];
    fireEvent.click(card);

    const cardData = deckData[1];
    expect(stub).toHaveBeenCalledWith(cardData.id);
  });
});

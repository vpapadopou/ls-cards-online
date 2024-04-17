import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import deckData from '@/data/cards';

import CardDeckDetails from './CardDeckDetails';

describe('Component: CardDeckDetails', () => {
  test("should display the first card's title in the details panel", () => {
    render(<CardDeckDetails />);

    const cardData = deckData[0];

    expect(screen.getByText(cardData.title, { selector: 'h4' })).toBeDefined();
  });
});

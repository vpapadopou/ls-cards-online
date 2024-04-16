import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import cardList from '@/data/cards';

import CardDrawer from './CardDrawer';

describe('Component: CardDrawer', () => {
  // Default selected card in the store is the first on the list
  const selectedCard = cardList[0];
  // Used by drawer animation - stub it to avoid errors
  window.scrollTo = vi.fn();

  test('should call LSCard component when the drawer is open. Diplay the card title text inside <h4>', () => {
    const stub = vi.fn();
    render(<CardDrawer openDrawer setOpenDrawer={stub} />);

    expect(screen.getByText(selectedCard.title, { selector: 'h4' })).toBeDefined();
  });

  test('should NOT diplay the card title text inside <h4> when the drawer is closed', () => {
    const stub = vi.fn();
    render(<CardDrawer openDrawer={false} setOpenDrawer={stub} />);

    expect(screen.queryByText(selectedCard.title, { selector: 'h4' })).toBeNull();
  });
});

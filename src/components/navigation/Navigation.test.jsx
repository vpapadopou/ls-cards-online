import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Component: Navigation', () => {
  const stub = vi.fn();

  beforeEach(() => {
    render(<Navigation onClick={stub} />);
  });

  test('should display the Navigation title text inside <h2>', () => {
    expect(screen.getByText('Liberating Structures Card Deck', { selector: 'h2' })).toBeDefined();
  });

  test('should call the provided callback function when the About button is clicked', () => {
    const card = screen.getByText('About', { selector: 'button' });
    fireEvent.click(card);

    // We expect the callback with no parameters
    expect(stub).toHaveBeenCalled();
  });
});

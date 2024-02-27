import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Component: Navigation', () => {
  const stub = vi.fn();

  beforeEach(() => {
    render(<Navigation onClick={stub} />);
  });

  test('should display the Navigation title text inside <span>', () => {
    expect(screen.getByText('Liberating Structures Card Deck', { selector: 'span' })).toBeDefined();
  });

  test('should call the provided callback function when the About link is clicked', () => {
    const card = screen.getByText('About', { selector: 'a' });
    fireEvent.click(card);

    // We expect the callback with no parameters
    expect(stub).toHaveBeenCalled();
  });
});

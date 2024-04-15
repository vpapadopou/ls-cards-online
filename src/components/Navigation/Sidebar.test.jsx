import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('Component: Sidebar', () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  test('should display the title text inside <span>', () => {
    expect(screen.getByText('Liberating Structures Card Deck', { selector: 'span' })).toBeDefined();
  });

  test('should display the sidebar logo', () => {
    expect(screen.getByTestId('sidebar-logo')).toBeDefined();
  });

  test('should display the "All Cards" category button', () => {
    expect(screen.getByText('All Cards')).toBeDefined();
  });

  test('should display 7 card category buttons', () => {
    expect(screen.getAllByRole('button').length).toEqual(7);
  });
});

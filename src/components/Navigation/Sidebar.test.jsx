import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('Component: Sidebar', () => {
  const stub = vi.fn();

  beforeEach(() => {
    render(<Sidebar onCategoryClick={stub} />);
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

  test('should call the provided onCategoryClick function with "0" when the All Cards category button is clicked', () => {
    // Click All Cards button
    const categoryButton = screen.getByText('All Cards');
    fireEvent.click(categoryButton);

    // We expect the callback with "All" as parameter
    expect(stub).toHaveBeenCalledWith(0);
  });
});

import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Component: Navigation', () => {
  const aboutStub = vi.fn();
  const categoryStub = vi.fn();

  beforeEach(() => {
    render(<Navigation onAboutClick={aboutStub} onCategoryClick={categoryStub} />);
  });

  test('should display the toggle navigation button', () => {
    expect(screen.getByTestId('sheet-toggle-button')).toBeDefined();
  });

  test('should display the about button', () => {
    expect(screen.getByTestId('about-button')).toBeDefined();
  });

  test('should NOT display the "All Cards" category button when the sheet is closed', () => {
    expect(screen.queryByText('All Cards', { selector: 'button' })).toBeNull();
  });

  test('should display the "All Cards" category button when the sheet is open', () => {
    // Open sheet
    const button = screen.getByTestId('sheet-toggle-button');
    fireEvent.click(button);

    expect(screen.getByText('All Cards')).toBeDefined();
  });

  test('should display 7 card category buttons when the sheet is open', () => {
    // Open sheet
    const button = screen.getByTestId('sheet-toggle-button');
    fireEvent.click(button);

    expect(screen.getAllByTestId('category-button').length).toEqual(7);
  });

  test('should call the provided onAboutClick function with NULL when the About button is clicked', () => {
    const button = screen.getByTestId('about-button');
    fireEvent.click(button);

    // We expect the callback with no NULL as parameter to open the about drawer
    expect(aboutStub).toHaveBeenCalledWith(null);
  });

  test('should call the provided onCategoryClick function with "0" when the All Cards category button is clicked', () => {
    // Open sheet
    const sheetToggleButton = screen.getByTestId('sheet-toggle-button');
    fireEvent.click(sheetToggleButton);

    // Click All Cards button
    const categoryButton = screen.getAllByTestId('category-button')[0];
    fireEvent.click(categoryButton);

    // We expect the callback with "All" as parameter
    expect(categoryStub).toHaveBeenCalledWith(0);
  });
});

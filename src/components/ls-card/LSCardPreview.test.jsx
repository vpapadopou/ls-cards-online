import { describe, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import LSCardPreview from './LSCardPreview';

describe('Component: LSCardPreview', () => {
  const testCardData = {
    id: 1,
    title: 'Testing Title',
    description: 'Testing Description',
    logo: 'testing_path',
    categories: [
      { title: 'Category 1', color: 'bg-red-500' },
      { title: 'Category 2', color: 'bg-green-500' },
    ],
    time: 20,
  };

  test('should display the card title text inside <h3>', () => {
    cleanup();
    render(<LSCardPreview data={testCardData} onClick={() => {}} />);

    expect(screen.getByText('Testing Title', { selector: 'h3' })).toBeDefined();
  });

  test('should call the provided callback function when the card is clicked', () => {
    const stub = vi.fn();
    cleanup();
    render(<LSCardPreview data={testCardData} onClick={stub} />);

    const card = screen.getByRole('button');
    fireEvent.click(card);

    // We expect the callback with the card's id as parameter
    expect(stub).toHaveBeenCalledWith(1);
  });
});

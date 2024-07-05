import { describe, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import LsLogoSvg from '@/data/LsLogo';

import LSCardPreview from './LSCardPreview';

describe('Component: LSCardPreview', () => {
  const testCardData = {
    id: 1,
    title: 'Testing Title',
    description: 'Testing Description',
    logo: LsLogoSvg,
    categories: [1, 2],
    time: 20,
  };

  test('should display the card title text inside <h3>', () => {
    cleanup();
    render(<LSCardPreview data={testCardData} onClick={() => {}} />);

    expect(screen.getByText('Testing Title', { selector: 'h4' })).toBeDefined();
  });

  test('should call the provided callback function when the card is clicked', () => {
    const stub = vi.fn();
    cleanup();
    render(<LSCardPreview data={testCardData} onClick={stub} />);

    const card = screen.getByRole('button');
    fireEvent.click(card);

    // We expect the callback with the card's id as parameter
    expect(stub).toHaveBeenCalledWith(testCardData.id);
  });
});

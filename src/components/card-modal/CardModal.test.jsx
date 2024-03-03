import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import CardModal from './CardModal';

describe('Component: CardModal', () => {
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
    invitation: 'Testing Invitation',
    people: 'Testing People',
    spaceAndMaterials: 'Testing Space and Materials',
    steps: [{ id: 1, description: 'Test Step 1' }],
    stepsAltTitle: 'Testing Alternate Steps Title',
    stringWith: 'Testing String With',
  };

  test('should call LSCard component when the modal is open and Card Data is passed. Diplay the card title text inside <h4>', () => {
    const stub = vi.fn();
    render(<CardModal cardData={testCardData} openModal setOpenModal={stub} />);

    expect(screen.getByText('Testing Title', { selector: 'h4' })).toBeDefined();
  });

  test('should call AboutCard component when the modal is open and Card Data is NOT passed. Diplay the card title text inside <h4>', () => {
    const stub = vi.fn();
    render(<CardModal cardData={null} openModal setOpenModal={stub} />);

    expect(screen.getByText('Liberating Structures Card Deck', { selector: 'h4' })).toBeDefined();
  });

  test('should NOT diplay the card title text inside <h4> when the modal is closed. Card Data is passed', () => {
    const stub = vi.fn();
    render(<CardModal cardData={testCardData} openModal={false} setOpenModal={stub} />);

    expect(screen.queryByText('Testing Title', { selector: 'h4' })).toBeNull();
  });

  test('should NOT diplay the card title text inside <h4> when the modal is closed. Card Data is NOT passed', () => {
    const stub = vi.fn();
    render(<CardModal cardData={null} openModal={false} setOpenModal={stub} />);

    expect(screen.queryByText('Liberating Structures Card Deck', { selector: 'h4' })).toBeNull();
  });

  test('should call the provided callback function when the card X button is clicked', () => {
    const stub = vi.fn();
    render(<CardModal cardData={testCardData} openModal setOpenModal={stub} />);

    const card = screen.getByRole('button');
    fireEvent.click(card);

    // We expect the callback with FALSE as the passing parameter
    expect(stub).toHaveBeenCalledWith(false);
  });
});

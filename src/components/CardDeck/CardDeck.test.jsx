import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import CardDeck from './CardDeck';

describe('Component: CardDeck', () => {
  const cardList = [
    {
      id: 1,
      title: 'Testing Title 1',
      description: 'Testing Description 1',
      logo: 'testing_path1',
      categories: [1, 2],
      time: 20,
      invitation: 'Testing Invitation 1',
      people: 'Testing People 1',
      spaceAndMaterials: 'Testing Space and Materials 1',
      steps: [{ id: 1, description: 'Test Step 1 1' }],
      stepsAltTitle: 'Testing Alternate Steps Title 1',
      stringWith: 'Testing String With 1',
    },
    {
      id: 2,
      title: 'Testing Title 2',
      description: 'Testing Description 2',
      logo: 'testing_path2',
      categories: [3, 2],
      time: 30,
      invitation: 'Testing Invitation 2',
      people: 'Testing People 2',
      spaceAndMaterials: 'Testing Space and Materials 2',
      steps: [{ id: 1, description: 'Test Step 2 1' }],
      stepsAltTitle: 'Testing Alternate Steps Title 2',
      stringWith: 'Testing String With 2',
    },
  ];
  const stub = vi.fn();

  test('should display the selected category title inside <h1>', () => {
    render(<CardDeck cardList={cardList} selectedCategory="All" onClick={stub} />);

    expect(screen.getByText('All', { selector: 'h1' })).toBeDefined();
  });

  test('should display the two card titles inside <h4>', () => {
    render(<CardDeck cardList={cardList} selectedCategory="All" onClick={stub} />);

    expect(screen.getByText('Testing Title 1', { selector: 'h4' })).toBeDefined();
    expect(screen.getByText('Testing Title 2', { selector: 'h4' })).toBeDefined();
  });

  test('should display only the first card when the selected category is "Reveal"', () => {
    render(<CardDeck cardList={cardList} selectedCategory="Reveal" onClick={stub} />);

    expect(screen.getByText('Testing Title 1', { selector: 'h4' })).toBeDefined();
    expect(screen.queryByText('Testing Title 2', { selector: 'h4' })).toBeNull();
  });

  test('should display only the second card when the selected category is "Analyze"', () => {
    render(<CardDeck cardList={cardList} selectedCategory="Analyze" onClick={stub} />);

    expect(screen.getByText('Testing Title 2', { selector: 'h4' })).toBeDefined();
    expect(screen.queryByText('Testing Title 1', { selector: 'h4' })).toBeNull();
  });

  test('should display both cards when the selected category is "Share"', () => {
    render(<CardDeck cardList={cardList} selectedCategory="Share" onClick={stub} />);

    expect(screen.getByText('Testing Title 1', { selector: 'h4' })).toBeDefined();
    expect(screen.getByText('Testing Title 2', { selector: 'h4' })).toBeDefined();
  });

  test('should call the provided onClick function with the appropriate card data when the first card is clicked', () => {
    render(<CardDeck cardList={cardList} selectedCategory="All" onClick={stub} />);

    // Click All Cards button
    const card = screen.getAllByTestId('card-preview')[0];
    fireEvent.click(card);

    // We expect the callback with first card's data as parameter
    expect(stub).toHaveBeenCalledWith(cardList[0]);
  });
});

import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardDrawer from './CardDrawer';

describe('Component: CardDrawer', () => {
  const testCardData = {
    id: 1,
    title: 'Testing Title',
    description: 'Testing Description',
    logo: 'testing_path',
    categories: [1, 2],
    time: 20,
    invitation: 'Testing Invitation',
    people: 'Testing People',
    spaceAndMaterials: 'Testing Space and Materials',
    steps: [{ id: 1, description: 'Test Step 1' }],
    stepsAltTitle: 'Testing Alternate Steps Title',
    stringWith: 'Testing String With',
  };

  // Used by drawer animation - stub it to avoid errors
  window.scrollTo = vi.fn();

  test('should call LSCard component when the drawer is open and Card Data is passed. Diplay the card title text inside <h4>', () => {
    const stub = vi.fn();
    render(<CardDrawer cardData={testCardData} openDrawer setOpenDrawer={stub} />);

    expect(screen.getByText('Testing Title', { selector: 'h4' })).toBeDefined();
  });

  test('should call AboutCard component when the drawer is open and Card Data is NOT passed. Diplay the card title text inside <h4>', () => {
    const stub = vi.fn();
    render(<CardDrawer cardData={null} openDrawer setOpenDrawer={stub} />);

    expect(screen.getByText('Liberating Structures Card Deck', { selector: 'h4' })).toBeDefined();
  });

  test('should NOT diplay the card title text inside <h4> when the drawer is closed. Card Data is passed', () => {
    const stub = vi.fn();
    render(<CardDrawer cardData={testCardData} openDrawer={false} setOpenDrawer={stub} />);

    expect(screen.queryByText('Testing Title', { selector: 'h4' })).toBeNull();
  });

  test('should NOT diplay the card title text inside <h4> when the drawer is closed. Card Data is NOT passed', () => {
    const stub = vi.fn();
    render(<CardDrawer cardData={null} openDrawer={false} setOpenDrawer={stub} />);

    expect(screen.queryByText('Liberating Structures Card Deck', { selector: 'h4' })).toBeNull();
  });
});

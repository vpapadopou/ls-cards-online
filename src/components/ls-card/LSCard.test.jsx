import { beforeEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import LSCard from './LSCard';

describe('Component: LSCard', () => {
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

  beforeEach(() => {
    render(<LSCard data={testCardData} />);
  });

  test('should display the title text inside <h3>', () => {
    expect(screen.getByText('Testing Title', { selector: 'h3' })).toBeDefined();
  });

  test('should display "Invitation" as title text inside <h5>', () => {
    expect(screen.getByText('Invitation', { selector: 'h5' })).toBeDefined();
  });

  test('should display Invitation text inside <p>', () => {
    expect(screen.getByText('Testing Invitation', { selector: 'p' })).toBeDefined();
  });

  test('should NOT display Invitation heading and text when invitation is not defined', () => {
    const customTestCardData = { ...testCardData };
    delete customTestCardData.invitation;
    cleanup();
    render(<LSCard data={customTestCardData} />);

    expect(screen.queryByText('Invitation', { selector: 'h5' })).toBeNull();
    expect(screen.queryByText('Testing Invitation', { selector: 'p' })).toBeNull();
  });

  test('should display "People" as title text inside <h5>', () => {
    expect(screen.getByText('People', { selector: 'h5' })).toBeDefined();
  });

  test('should display people text inside <p>', () => {
    expect(screen.getByText('Testing People', { selector: 'p' })).toBeDefined();
  });

  test('should display "Space & Materials" as title text inside <h5>', () => {
    expect(screen.getByText('Space & Materials', { selector: 'h5' })).toBeDefined();
  });

  test('should display Space and Materials text inside <p>', () => {
    expect(screen.getByText('Testing Space and Materials', { selector: 'p' })).toBeDefined();
  });

  test('should display "Testing Alternate Steps Title" as title text inside <h5>', () => {
    expect(screen.getByText('Testing Alternate Steps Title', { selector: 'h5' })).toBeDefined();
  });

  test('should display Steps text text inside <p>', () => {
    expect(screen.getByText('Test Step 1', { selector: 'p' })).toBeDefined();
  });

  test('should display "String With" as title text inside <h5>', () => {
    expect(screen.getByText('String With', { selector: 'h5' })).toBeDefined();
  });

  test('should display String With text text inside <p>', () => {
    expect(screen.getByText('Testing String With', { selector: 'p' })).toBeDefined();
  });

  test('should NOT display String With heading and text when stringWith is not defined', () => {
    const customTestCardData = { ...testCardData };
    delete customTestCardData.stringWith;
    cleanup();
    render(<LSCard data={customTestCardData} />);

    expect(screen.queryByText('String With', { selector: 'h5' })).toBeNull();
    expect(screen.queryByText('Testing String With', { selector: 'p' })).toBeNull();
  });
});

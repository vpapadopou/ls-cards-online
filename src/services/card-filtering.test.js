import { describe, expect, test } from 'vitest';

import { filterByCategory, getAllCards } from './card-filtering';

describe('Service: Card Filtering', () => {
  test('should return "All Cards" as the selected category title when the selected category ID is 0', () => {
    const { selectedCategoryTitle } = filterByCategory(0);

    expect(selectedCategoryTitle).toEqual('All Cards');
  });

  test('should return an array that has 33 cards when the selected category ID is 0', () => {
    const { selectedCards } = filterByCategory(0);

    expect(selectedCards.length).toEqual(33);
  });

  test('should return "Reveal" as the selected category title when the selected category ID is 1', () => {
    const { selectedCategoryTitle } = filterByCategory(1);

    expect(selectedCategoryTitle).toEqual('Reveal');
  });

  test('should return an array that has 12 cards when the selected category ID is 1', () => {
    const { selectedCards } = filterByCategory(1);

    expect(selectedCards.length).toEqual(12);
  });

  test('should return "Share" as the selected category title when the selected category ID is 2', () => {
    const { selectedCategoryTitle } = filterByCategory(2);

    expect(selectedCategoryTitle).toEqual('Share');
  });

  test('should return an array that has 7 cards when the selected category ID is 2', () => {
    const { selectedCards } = filterByCategory(2);

    expect(selectedCards.length).toEqual(7);
  });

  test('should return "Analyze" as the selected category title when the selected category ID is 3', () => {
    const { selectedCategoryTitle } = filterByCategory(3);

    expect(selectedCategoryTitle).toEqual('Analyze');
  });

  test('should return an array that has 7 cards when the selected category ID is 3', () => {
    const { selectedCards } = filterByCategory(3);

    expect(selectedCards.length).toEqual(7);
  });

  test('should return "Help" as the selected category title when the selected category ID is 4', () => {
    const { selectedCategoryTitle } = filterByCategory(4);

    expect(selectedCategoryTitle).toEqual('Help');
  });

  test('should return an array that has 6 cards when the selected category ID is 4', () => {
    const { selectedCards } = filterByCategory(4);

    expect(selectedCards.length).toEqual(6);
  });

  test('should return "Strategize" as the selected category title when the selected category ID is 5', () => {
    const { selectedCategoryTitle } = filterByCategory(5);

    expect(selectedCategoryTitle).toEqual('Strategize');
  });

  test('should return an array that has 5 cards when the selected category ID is 5', () => {
    const { selectedCards } = filterByCategory(5);

    expect(selectedCards.length).toEqual(5);
  });

  test('should return "Plan" as the selected category title when the selected category ID is 6', () => {
    const { selectedCategoryTitle } = filterByCategory(6);

    expect(selectedCategoryTitle).toEqual('Plan');
  });

  test('should return an array that has 2 cards when the selected category ID is 6', () => {
    const { selectedCards } = filterByCategory(6);

    expect(selectedCards.length).toEqual(2);
  });

  test('should return an array that has 33 cards when getAllCards() is called', () => {
    const selectedCards = getAllCards();

    expect(selectedCards.length).toEqual(33);
  });
});

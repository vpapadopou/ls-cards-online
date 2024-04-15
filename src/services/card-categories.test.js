import { describe, expect, test } from 'vitest';

import { getAllCategories, getCategoryById, categoryIndex } from './card-categories';

describe('Service: Card Categories', () => {
  test('should return an array that has 6 card categories when getAllCategories() is called', () => {
    const selectedCategories = getAllCategories();

    expect(selectedCategories.length).toEqual(6);
  });

  test('should return "All Cards" as the selected category title when the selected category ID is 0', () => {
    const { title: selectedCategoryTitle } = getCategoryById(0);

    expect(selectedCategoryTitle).toEqual('All Cards');
  });

  test('should return "Reveal" as the selected category title when the selected category ID is 1', () => {
    const { title: selectedCategoryTitle } = getCategoryById(1);

    expect(selectedCategoryTitle).toEqual('Reveal');
  });

  test('should return "Share" as the selected category title when the selected category ID is 2', () => {
    const { title: selectedCategoryTitle } = getCategoryById(2);

    expect(selectedCategoryTitle).toEqual('Share');
  });

  test('should return "Analyze" as the selected category title when the selected category ID is 3', () => {
    const { title: selectedCategoryTitle } = getCategoryById(3);

    expect(selectedCategoryTitle).toEqual('Analyze');
  });

  test('should return "Help" as the selected category title when the selected category ID is 4', () => {
    const { title: selectedCategoryTitle } = getCategoryById(4);

    expect(selectedCategoryTitle).toEqual('Help');
  });

  test('should return "Strategize" as the selected category title when the selected category ID is 5', () => {
    const { title: selectedCategoryTitle } = getCategoryById(5);

    expect(selectedCategoryTitle).toEqual('Strategize');
  });

  test('should return "Plan" as the selected category title when the selected category ID is 6', () => {
    const { title: selectedCategoryTitle } = getCategoryById(6);

    expect(selectedCategoryTitle).toEqual('Plan');
  });

  test('should have a category index with 6 keys', () => {
    expect(Object.keys(categoryIndex).length).toEqual(6);
  });

  test('should have 12 card ids in category 1', () => {
    expect(categoryIndex[1].length).toEqual(12);
  });

  test('should have 7 card ids in category 2', () => {
    expect(categoryIndex[2].length).toEqual(7);
  });
  test('should have 7 card ids in category 3', () => {
    expect(categoryIndex[3].length).toEqual(7);
  });
  test('should have 6 card ids in category 4', () => {
    expect(categoryIndex[4].length).toEqual(6);
  });
  test('should have 5 card ids in category 5', () => {
    expect(categoryIndex[5].length).toEqual(5);
  });
  test('should have 2 card ids in category 6', () => {
    expect(categoryIndex[6].length).toEqual(2);
  });
});

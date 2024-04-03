import { describe, expect, test } from 'vitest';

import { categoryIndex, categoryList } from './card-categories';

describe('Data: Card Categories', () => {
  test('should have a category list with 6 categories', () => {
    expect(categoryList.length).toEqual(6);
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

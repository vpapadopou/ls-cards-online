import { describe, expect, test } from 'vitest';

import { categoryList } from './card-categories';

describe('Data: Card Categories', () => {
  test('should have a category list with 6 categories', () => {
    expect(categoryList.length).toEqual(6);
  });
});

import { describe, expect, test } from 'vitest';

import cardList from '@/data/cards';

import { getAllCards, getCardById, getCardsByCategory } from './cards';

describe('Service: Cards', () => {
  // test('should return "All Cards" as the selected category title when the selected category ID is 0', () => {
  //   const { selectedCategoryTitle } = getCardsByCategory(0);

  //   expect(selectedCategoryTitle).toEqual('All Cards');
  // });

  test('should return an array that has 33 cards when getAllCards() is called', () => {
    const selectedCards = getAllCards();

    expect(selectedCards.length).toEqual(33);
  });

  test('should return the appropriate card data when getCardById() is called', () => {
    const selectedCard = getCardById(1);

    expect(selectedCard).toEqual(cardList[0]);
  });

  test('should return an array that has 33 cards when the selected category ID is 0', () => {
    const selectedCards = getCardsByCategory(0);

    expect(selectedCards.length).toEqual(33);
  });

  test('should return an array that has 12 cards when the selected category ID is 1', () => {
    const selectedCards = getCardsByCategory(1);

    expect(selectedCards.length).toEqual(12);
  });

  test('should return an array that has 7 cards when the selected category ID is 2', () => {
    const selectedCards = getCardsByCategory(2);

    expect(selectedCards.length).toEqual(7);
  });

  test('should return an array that has 7 cards when the selected category ID is 3', () => {
    const selectedCards = getCardsByCategory(3);

    expect(selectedCards.length).toEqual(7);
  });

  test('should return an array that has 6 cards when the selected category ID is 4', () => {
    const selectedCards = getCardsByCategory(4);

    expect(selectedCards.length).toEqual(6);
  });

  test('should return an array that has 5 cards when the selected category ID is 5', () => {
    const selectedCards = getCardsByCategory(5);

    expect(selectedCards.length).toEqual(5);
  });

  test('should return an array that has 2 cards when the selected category ID is 6', () => {
    const selectedCards = getCardsByCategory(6);

    expect(selectedCards.length).toEqual(2);
  });
});

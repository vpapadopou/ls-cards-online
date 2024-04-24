import { describe, expect, test } from 'vitest';

import cardList from '@/data/cards';

import { getAllCards, getCardById, getCardsByCategory, getCardsByCategorySorted, getSortingOptions } from './cards';

describe('Service: Cards', () => {
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

  test('should return an array sorted by id ASC when the selected sorting ID is 0', () => {
    const selectedCards = getCardsByCategorySorted(0, 0);

    expect(selectedCards[0].id < selectedCards[32].id).toBeTruthy();
  });

  test('should return an array sorted by name ASC when the selected sorting ID is 1', () => {
    const selectedCards = getCardsByCategorySorted(0, 1);

    expect(selectedCards[0].title < selectedCards[32].title).toBeTruthy();
  });

  test('should return an array sorted by name DESC when the selected sorting ID is 2', () => {
    const selectedCards = getCardsByCategorySorted(0, 2);

    expect(selectedCards[0].title > selectedCards[32].title).toBeTruthy();
  });

  test('should return an array sorted by time ASC when the selected sorting ID is 3', () => {
    const selectedCards = getCardsByCategorySorted(0, 3);

    expect(selectedCards[0].time < selectedCards[32].time).toBeTruthy();
  });

  test('should return an array sorted by time DESC when the selected sorting ID is 4', () => {
    const selectedCards = getCardsByCategorySorted(0, 4);

    expect(selectedCards[0].time > selectedCards[32].time).toBeTruthy();
  });

  test('should return an array sorted by id ASC when the selected sorting ID is not defined', () => {
    const selectedCards = getCardsByCategorySorted(0);

    expect(selectedCards[0].id < selectedCards[32].id).toBeTruthy();
  });

  test('should return an array with 5 sorting options', () => {
    const sortingOptions = getSortingOptions();

    expect(sortingOptions.length).toEqual(5);
  });
});

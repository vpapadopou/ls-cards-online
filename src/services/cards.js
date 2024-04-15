import cardList from '@/data/cards';

import { categoryIndex } from './card-categories';

export const getAllCards = () => cardList;

//------------------------------

// Index in the array is simply id - 1
export const getCardById = (id) => cardList[id - 1];

//------------------------------

export const getCardsByCategory = (selectedCategoryId) => {
  // Zero is used as a special id for all cards
  // so simply return cardList
  if (selectedCategoryId === 0) {
    return cardList;
  }

  // If a category is selected use the index to get all card ids for the
  // selected category. Then pick the card data one by one from the card list
  // and add them to a newly created array.
  // Note: Position in the array is simply -1 since id numbering starts from 1
  const selectedCards = categoryIndex[selectedCategoryId].reduce((accumulator, cardId) => {
    accumulator.push(cardList[cardId - 1]);
    return accumulator;
  }, []);

  return selectedCards;
};

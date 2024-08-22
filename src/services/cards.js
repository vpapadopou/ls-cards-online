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

//------------------------------

// Helper function
const compareByKey = (key) => {
  return (a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }

    if (b[key] > a[key]) {
      return -1;
    }

    return 0;
  };
};

export const getCardsByCategorySorted = (selectedCategoryId, selectedSortingId) => {
  const cards = getCardsByCategory(selectedCategoryId);

  // Native sort modifies the array in place so we use concat() to get a copy
  switch (selectedSortingId) {
    case 1:
      return cards.concat().sort(compareByKey('title'));
    case 2:
      return cards.concat().sort(compareByKey('title')).reverse();
    case 3:
      return cards.concat().sort(compareByKey('time'));
    case 4:
      return cards.concat().sort(compareByKey('time')).reverse();
    // Default case is id 0, we just return the array which is already sorted by id
    case 0:
    default:
      return cards;
  }
};

//------------------------------

export const getSortingOptions = () => [
  { id: 0, title: 'Standard Order' },
  { id: 1, title: 'Title: A to Z' },
  { id: 2, title: 'Title: Z to A' },
  { id: 3, title: 'Duration: Shortest First' },
  { id: 4, title: 'Duration: Longest First' },
];

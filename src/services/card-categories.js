import cardList from '@/data/cards';
import categoryList from '@/data/card-categories';

export const getAllCategories = () => categoryList;

//------------------------------

// Index in the array is simply id-1. id 0 is used as a code for "All Cards" category
export const getCategoryById = (id) => (id ? categoryList[id - 1] : { title: 'All Cards' });

//------------------------------

// Create an initial object with each card's id as key and an empty array as value
// i.e. { 1: [], 2: [], .... }
const emptyIndex = categoryList.reduce((accumulator, category) => {
  accumulator[category.id] = [];
  return accumulator;
}, {});

// Populate the object by adding each card's id to the appropriate array based on
// its category/ies
export const categoryIndex = cardList.reduce((accumulator, card) => {
  card.categories.forEach((cardCategory) => accumulator[cardCategory].push(card.id));
  return accumulator;
}, emptyIndex);

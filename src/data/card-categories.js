import cardList from './cards';

export const categoryList = [
  { id: 1, title: 'Reveal', color: 'bg-green-500' },
  { id: 2, title: 'Share', color: 'bg-blue-500' },
  { id: 3, title: 'Analyze', color: 'bg-purple-500' },
  { id: 4, title: 'Help', color: 'bg-amber-700' },
  { id: 5, title: 'Strategize', color: 'bg-red-500' },
  { id: 6, title: 'Plan', color: 'bg-orange-500' },
];

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

export default categoryList;

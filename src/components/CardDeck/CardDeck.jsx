import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LSCardPreview from '@/components/LSCard/LSCardPreview';

import { categoryIndex, categoryList } from '@/data/card-categories';

function CardDeck({ cardList, selectedCategory, onClick }) {
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('All Cards');
  const [selectedCardList, setSelectedCardList] = useState(cardList);

  // When selectedCategory changes we need to update the selectedCardList
  useEffect(() => {
    // Zero is used as a special id for all cards
    // so simply return cardList
    if (selectedCategory === 0) {
      setSelectedCategoryTitle('All Cards');
      setSelectedCardList(cardList);
      return;
    }

    // If a category is selected use the index to get all card ids for the
    // selected category. Then pick the card data one by one from the card list
    // and add them to a newly created array.
    // Note: Position in the array is simply -1 since id numbering starts from 1
    const selectedCards = categoryIndex[selectedCategory].reduce((accumulator, cardId) => {
      accumulator.push(cardList[cardId - 1]);
      return accumulator;
    }, []);

    setSelectedCategoryTitle(categoryList[selectedCategory - 1].title);
    setSelectedCardList(selectedCards);
  }, [cardList, selectedCategory]);

  return (
    <>
      {/* Selected category title */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">{selectedCategoryTitle}</h1>
      </div>
      {/* /Selected category title */}
      {/* Card grid */}
      <div className="flex flex-wrap gap-4 place-content-center items-start py-8">
        {selectedCardList.map((card) => (
          <LSCardPreview key={card.id} data={card} onClick={onClick} />
        ))}
      </div>
      {/* /Card grid */}
    </>
  );
}

CardDeck.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      logo: PropTypes.node.isRequired,
      categories: PropTypes.arrayOf(PropTypes.number).isRequired,
      time: PropTypes.number.isRequired,
      invitation: PropTypes.string,
      people: PropTypes.string.isRequired,
      spaceAndMaterials: PropTypes.string.isRequired,
      stepsAltTitle: PropTypes.string,
      steps: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
          time: PropTypes.string,
        })
      ).isRequired,
      stringWith: PropTypes.string,
    })
  ).isRequired,
  selectedCategory: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardDeck;

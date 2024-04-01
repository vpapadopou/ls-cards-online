import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LSCardPreview from '@/components/ls-card/LSCardPreview';

function CardDeck({ cardList, selectedCategory, onClick }) {
  const [selectedCardList, setSelectedCardList] = useState(cardList);

  // When selectedCategory changes we need to update the selectedCardList
  useEffect(() => {
    // If all cards are selected just return cardList
    if (selectedCategory === 'All') {
      setSelectedCardList(cardList);
      return;
    }

    // Else we need to check if the category of each card matches the selected one
    // we use some as some cards have multiple categories
    const selectedCards = cardList.filter((card) => {
      return card.categories.some((cardCategory) => cardCategory.title === selectedCategory);
    });

    setSelectedCardList(selectedCards);
  }, [cardList, selectedCategory]);

  return (
    <>
      {/* Selected category title */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">{selectedCategory}</h1>
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
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
        })
      ).isRequired,
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
  selectedCategory: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardDeck;

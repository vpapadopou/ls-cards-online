import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';

import LSCard from '@/components/LSCard/LSCard';
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
    <ResizablePanelGroup direction="horizontal">
      {/* Left panel (card grid) */}
      <ResizablePanel defaultSize={65}>
        <div className="flex flex-col">
          {/* Selected category title */}
          <div className="px-4 py-8">
            <h1 className="text-lg font-semibold md:text-2xl">{selectedCategoryTitle}</h1>
          </div>
          {/* /Selected category title */}
          {/* Card grid (scroll height is screen minus navbar minus approx 5rem) */}
          <ScrollArea className="h-[calc(100vh-60px-6rem)]">
            <div className="flex flex-wrap gap-4 place-content-between items-start px-4 pb-4">
              {selectedCardList.map((card) => (
                <LSCardPreview key={card.id} data={card} onClick={onClick} />
              ))}
            </div>
          </ScrollArea>
        </div>
        {/* /Card grid */}
      </ResizablePanel>
      {/* /Left panel (card grid) */}
      <ResizableHandle withHandle />
      {/* Right panel (card details) */}
      <ResizablePanel defaultSize={35} maxSize={50} minSize={25}>
        {/* Height of scroll is screen minus header */}
        <ScrollArea className="h-[calc(100vh-60px)]">
          <div className="flex justify-center p-8">
            <LSCard data={selectedCardList[0]} />
          </div>
        </ScrollArea>
      </ResizablePanel>
      {/* /Right panel (card details) */}
    </ResizablePanelGroup>
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

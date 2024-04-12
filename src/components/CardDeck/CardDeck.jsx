import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';

import LSCard from '@/components/LSCard/LSCard';
import LSCardPreview from '@/components/LSCard/LSCardPreview';

import { useMediaQuery } from '@/hooks/use-media-query';
import { getAllCards, getCardsByCategory } from '@/services/card-filtering';

function CardDeck({ selectedCategory, onCardClick }) {
  const [displayedCategoryTitle, setDisplayedCategoryTitle] = useState('All Cards');
  const [displayedCardList, setDisplayedCardList] = useState(getAllCards());
  const [selectedCard, setSelectedCard] = useState(displayedCardList[0]);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleCardPreviewClick = (cardData) => {
    setSelectedCard(cardData);

    if (!isDesktop) {
      onCardClick(cardData);
    }
  };

  const handleSelectedCategoryChange = () => {
    const { selectedCategoryTitle, selectedCards } = getCardsByCategory(selectedCategory);

    setDisplayedCategoryTitle(selectedCategoryTitle);
    setDisplayedCardList(selectedCards);
  };

  // When selectedCategory changes we need to update the displayedCardList
  useEffect(handleSelectedCategoryChange, [selectedCategory]);

  return (
    <ResizablePanelGroup direction="horizontal">
      {/* Left panel (card grid) */}
      <ResizablePanel defaultSize={65}>
        <div className="flex flex-col">
          {/* Selected category title */}
          <div className="px-4 py-8">
            <h1 className="text-lg font-semibold md:text-2xl">{displayedCategoryTitle}</h1>
          </div>
          {/* /Selected category title */}
          {/* Card grid (scroll height is screen minus navbar minus approx 5rem) */}
          <ScrollArea className="h-[calc(100vh-60px-6rem)]">
            <div className="flex flex-wrap gap-4 place-content-center items-start px-4 pb-4">
              {displayedCardList.map((card) => (
                <LSCardPreview key={card.id} data={card} onClick={handleCardPreviewClick} />
              ))}
            </div>
          </ScrollArea>
        </div>
        {/* /Card grid */}
      </ResizablePanel>
      {/* /Left panel (card grid) */}
      <ResizableHandle className="sm:max-lg:hidden" withHandle />
      {/* Right panel (card details) */}
      <ResizablePanel className="sm:max-lg:hidden" defaultSize={35} maxSize={50} minSize={25}>
        {/* Height of scroll is screen minus header */}
        <ScrollArea className="h-[calc(100vh-60px)]">
          <div className="flex justify-center px-8 py-10">
            <LSCard data={selectedCard} />
          </div>
        </ScrollArea>
      </ResizablePanel>
      {/* /Right panel (card details) */}
    </ResizablePanelGroup>
  );
}

CardDeck.propTypes = {
  selectedCategory: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default CardDeck;

import { React } from 'react';
import PropTypes from 'prop-types';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';

import LSCard from '@/components/LSCard/LSCard';
import LSCardPreview from '@/components/LSCard/LSCardPreview';

import { useCardStore } from '@/hooks/use-card-store';
import { useMediaQuery } from '@/hooks/use-media-query';

import { getCardById, getCardsByCategory } from '@/services/cards';
import { getCategoryById } from '@/services/card-categories';

function CardDeck({ onCardClick }) {
  const selectedCardId = useCardStore((state) => state.selectedCardId);
  const setSelectedCardId = useCardStore((state) => state.setSelectedCardId);
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const { title: selectedCategoryTitle } = getCategoryById(selectedCategoryId);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleCardPreviewClick = (cardId) => {
    setSelectedCardId(cardId);

    // If not desktop use onCardClick to open drawer
    if (!isDesktop) {
      onCardClick();
    }
  };

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
          {/* Card grid (scroll height is screen minus navbar minus approx 6rem) */}
          <ScrollArea className="h-[calc(100vh-60px-6rem)]">
            <div className="flex flex-wrap gap-4 place-content-center items-start px-4 pb-4">
              {getCardsByCategory(selectedCategoryId).map((card) => (
                <LSCardPreview key={card.id} data={card} onClick={handleCardPreviewClick} />
              ))}
            </div>
          </ScrollArea>
        </div>
        {/* /Card grid */}
      </ResizablePanel>
      {/* /Left panel (card grid) */}
      <ResizableHandle className="max-lg:hidden" withHandle />
      {/* Right panel (card details) */}
      <ResizablePanel className="max-lg:hidden" defaultSize={35} maxSize={50} minSize={25}>
        {/* Height of scroll is screen minus header */}
        <ScrollArea className="h-[calc(100vh-60px)]">
          <div className="flex justify-center px-8 py-10">
            <LSCard data={getCardById(selectedCardId)} />
          </div>
        </ScrollArea>
      </ResizablePanel>
      {/* /Right panel (card details) */}
    </ResizablePanelGroup>
  );
}

CardDeck.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default CardDeck;

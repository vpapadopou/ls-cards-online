import React from 'react';
import PropTypes from 'prop-types';

import LSCardPreview from '@/components/LSCard/LSCardPreview';

import { ScrollArea } from '@/components/ui/scroll-area';

import { useCardStore } from '@/hooks/use-card-store';

import { getCardsByCategorySorted } from '@/services/cards';

function CardDeckGrid({ onClick }) {
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const selectedSortingId = useCardStore((state) => state.selectedSortingId);
  const cards = getCardsByCategorySorted(selectedCategoryId, selectedSortingId);

  return (
    // Scroll height is screen minus navbar minus approx 5.2rem for the sorting options
    // For small screens where it wraps to 2 rows, use 9rem
    <ScrollArea className="h-[calc(100vh-60px-9rem)] md:h-[calc(100vh-60px-5.2rem)]">
      <div className="flex flex-wrap gap-4 place-content-center items-start px-4 pb-4">
        {cards.map((card) => (
          <LSCardPreview key={card.id} data={card} onClick={onClick} />
        ))}
      </div>
    </ScrollArea>
  );
}

CardDeckGrid.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CardDeckGrid;

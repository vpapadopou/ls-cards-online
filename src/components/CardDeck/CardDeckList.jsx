import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

import LSCardSavedIndicator from '@/components/LSCard/LSCardSavedIndicator';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import { useCardStore } from '@/hooks/use-card-store';
import { useSavedCardsStore } from '@/hooks/use-saved-cards-store';

import { getCategoryById } from '@/services/card-categories';
import { getCardsByCategorySorted } from '@/services/cards';

function CardDeckList({ onClick }) {
  const selectedCardId = useCardStore((state) => state.selectedCardId);
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const selectedSortingId = useCardStore((state) => state.selectedSortingId);
  const toggleCardSaved = useSavedCardsStore((state) => state.toggleCardSaved);

  const cards = getCardsByCategorySorted(selectedCategoryId, selectedSortingId);

  const handleSaveButtonClick = (event, cardId) => {
    event.stopPropagation();
    toggleCardSaved(cardId);
  };

  return (
    // Scroll height is screen minus navbar minus approx 5.2rem for the sorting options
    // For small screens where it wraps to 2 rows, use 9rem
    <ScrollArea className="h-[calc(100vh-60px-9rem)] md:h-[calc(100vh-60px-5.2rem)]">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {/* Loop through cards */}
        {cards.map((card) => (
          <div
            key={card.id}
            role="button"
            tabIndex={0}
            onClick={() => onClick(card.id)}
            onKeyDown={(e) => e.key === 'Enter' && onClick(card.id)}
            className={clsx(
              'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-md transition-all hover:bg-accent cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring',
              { 'bg-muted': selectedCardId === card.id }
            )}
            data-testid="card-list-option"
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{card.title}</div>
                </div>
                <div className="ml-auto text-sm text-foreground">
                  <Badge variant="secondary">{`${card.time} min`}</Badge>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">{card.description}</div>

            {/* Categories and Actions */}
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                {/* Categories */}
                <div className="flex items-center gap-2">
                  {card.categories.map((categoryId) => (
                    <div className="flex items-center mr-3" key={categoryId}>
                      <span className={`w-2.5 h-2.5 ${getCategoryById(categoryId).color} rounded-full mr-2`} data-testid="category-color" />
                      <span className="text-sm font-bold text-muted-foreground" data-testid="category-title">
                        {getCategoryById(categoryId).title}
                      </span>
                    </div>
                  ))}
                </div>
                {/* /Categories */}

                {/* Actions */}
                <div className="ml-auto">
                  {/* This can safely be a <button> inside now */}
                  <Button
                    className="rounded-full p-2"
                    variant="ghost"
                    onClick={(e) => {
                      handleSaveButtonClick(e, card.id);
                    }}
                  >
                    <LSCardSavedIndicator cardId={card.id} />
                  </Button>
                </div>
              </div>
            </div>
            {/* /Categories and Actions */}
          </div>
        ))}
        {/* /Loop through cards */}
      </div>
    </ScrollArea>
  );
}

CardDeckList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CardDeckList;

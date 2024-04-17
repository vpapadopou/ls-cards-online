import React from 'react';

import LSCard from '@/components/LSCard/LSCard';

import { ScrollArea } from '@/components/ui/scroll-area';

import { useCardStore } from '@/hooks/use-card-store';

import { getCardById } from '@/services/cards';

function CardDeckDetails() {
  const selectedCardId = useCardStore((state) => state.selectedCardId);
  const card = getCardById(selectedCardId);

  return (
    // Height of scroll area is screen minus header
    <ScrollArea className="h-[calc(100vh-60px)]">
      <div className="flex justify-center px-8 py-10">
        <LSCard data={card} />
      </div>
    </ScrollArea>
  );
}

export default CardDeckDetails;

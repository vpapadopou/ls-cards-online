import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import LSCard from '@/components/LSCard/LSCard';

import { useSavedCardsStore } from '@/hooks/use-saved-cards-store';

import { getCardById } from '@/services/cards';

function Saved() {
  const savedCardIds = useSavedCardsStore((state) => state.savedCardIds);

  return (
    // Scroll height is screen minus navbar
    <ScrollArea className="h-[calc(100vh-60px)]">
      {/* Saved cards holder */}
      <div className="flex flex-wrap gap-4 place-content-center lg:justify-start justify-center items-start p-4">
        {/* Loop through cards */}
        {savedCardIds.map((cardId) => {
          const card = getCardById(cardId);
          return (
            <Card className="text-left max-w-sm" key={card.id}>
              <CardContent className="flex flex-col place-content-between gap-4 p-4">
                {/* Pass the canSave property so we can remove cards directly from the Saved page */}
                <LSCard data={card} canSave />
              </CardContent>
            </Card>
          );
        })}
        {/* /Loop through cards */}
      </div>
      {/* /Saved cards holder */}
    </ScrollArea>
  );
}

export default Saved;

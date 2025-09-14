import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HeartIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import LSCard from '@/components/LSCard/LSCard';

import { useSavedCardsStore } from '@/hooks/use-saved-cards-store';

import { getCardById } from '@/services/cards';

function Saved() {
  const navigate = useNavigate();

  const savedCardIds = useSavedCardsStore((state) => state.savedCardIds);

  return (
    // Scroll height is screen minus navbar
    <ScrollArea className="h-[calc(100vh-60px)]">
      {/* Saved cards holder */}
      <div className="flex flex-wrap gap-4 place-content-center lg:justify-start justify-center items-start p-4">
        {savedCardIds.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full py-20 text-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <HeartIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">No saved cards</h2>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Tap the <HeartIcon className="h-4 w-4 inline align-sub text-red-500" weight="fill" /> icon on any card to add it to your saved list.
              </p>
            </div>
            <Button variant="default" onClick={() => navigate('/')}>
              Browse Cards
            </Button>
          </div>
        ) : (
          //  Loop through cards
          savedCardIds.map((cardId) => {
            const card = getCardById(cardId);
            return (
              <Card className="text-left max-w-sm" key={card.id}>
                <CardContent className="flex flex-col place-content-between gap-4 p-4">
                  <LSCard data={card} canSave />
                </CardContent>
              </Card>
            );
          })
          // /Loop through cards
        )}
      </div>
      {/* /Saved cards holder */}
    </ScrollArea>
  );
}

export default Saved;

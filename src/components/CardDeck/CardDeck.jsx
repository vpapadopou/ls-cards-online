import { React } from 'react';

import { useCardStore } from '@/hooks/use-card-store';
import { useMediaQuery } from '@/hooks/use-media-query';

import { Tabs, TabsContent } from '@/components/ui/tabs';

import CardDeckGrid from './CardDeckGrid';
import CardDeckList from './CardDeckList';
import CardDeckOptions from './CardDeckOptions';

function CardDeck() {
  const setSelectedCardId = useCardStore((state) => state.setSelectedCardId);
  const setOpenCardDrawer = useCardStore((state) => state.setOpenCardDrawer);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleCardPreviewclick = (cardId) => {
    setSelectedCardId(cardId);
    setOpenCardDrawer(!isDesktop);
  };

  return (
    <Tabs defaultValue="cardView">
      <CardDeckOptions />

      <TabsContent value="cardView">
        <CardDeckGrid onClick={handleCardPreviewclick} />
      </TabsContent>
      <TabsContent value="listView">
        <CardDeckList onClick={handleCardPreviewclick} />
      </TabsContent>
    </Tabs>
  );
}

export default CardDeck;

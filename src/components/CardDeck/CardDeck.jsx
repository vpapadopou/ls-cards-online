import { React } from 'react';

import { useCardStore } from '@/hooks/use-card-store';
import { useMediaQuery } from '@/hooks/use-media-query';

import CardDeckGrid from './CardDeckGrid';
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
    <>
      <CardDeckOptions />
      <CardDeckGrid onClick={handleCardPreviewclick} />
    </>
  );
}

export default CardDeck;

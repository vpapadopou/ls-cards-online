import { React, useState } from 'react';

import CardDrawer from '@/components/CardDrawer/CardDrawer';

import { useCardStore } from '@/hooks/use-card-store';
import { useMediaQuery } from '@/hooks/use-media-query';

import CardDeckGrid from './CardDeckGrid';

function CardDeck() {
  const setSelectedCardId = useCardStore((state) => state.setSelectedCardId);
  const [openCardDrawer, setOpenCardDrawer] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleCardPreviewclick = (cardId) => {
    setSelectedCardId(cardId);
    setOpenCardDrawer(!isDesktop);
  };

  return (
    <>
      {/* Drawer (used for mobile devices only) */}
      <CardDrawer openDrawer={openCardDrawer} setOpenDrawer={setOpenCardDrawer} />
      {/* /Drawer */}
      <CardDeckGrid onClick={handleCardPreviewclick} />
    </>
  );
}

export default CardDeck;

import React from 'react';
import PropTypes from 'prop-types';

import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';

import { useCardStore } from '@/hooks/use-card-store';

import { getCardById } from '@/services/cards';

import LSCard from '../LSCard/LSCard';

function CardDrawer({ openDrawer, setOpenDrawer }) {
  const selectedCardId = useCardStore((state) => state.selectedCardId);
  const cardData = getCardById(selectedCardId);

  return (
    <Drawer
      open={openDrawer}
      onOpenChange={(open) => {
        setOpenDrawer(open);
      }}
    >
      {/* Max drawer width set to 640px acconding to Material 3 guidelines */}
      <DrawerContent className="max-w-[640px]">
        <ScrollArea className="h-[80vh]">
          <div className="flex flex-col items-center p-8">
            <div className="max-w-sm">
              <LSCard data={cardData} />
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

CardDrawer.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

export default CardDrawer;

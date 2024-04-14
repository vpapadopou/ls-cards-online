import React from 'react';
import PropTypes from 'prop-types';

import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';

import AboutCard from '../AboutCard/AboutCard';
import LSCard from '../LSCard/LSCard';

function CardDrawer({ openDrawer, setOpenDrawer, cardData }) {
  return (
    <Drawer
      open={openDrawer}
      onOpenChange={(open) => {
        setOpenDrawer(open);
      }}
    >
      {/* Max drawer width set acconding to Material 3 guidelines */}
      <DrawerContent className="max-w-[640px]">
        <ScrollArea className="h-[80vh]">
          <div className="flex flex-col items-center p-8">
            <div className="max-w-sm">{cardData ? <LSCard data={cardData} /> : <AboutCard />}</div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

CardDrawer.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.node.isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    time: PropTypes.number.isRequired,
    invitation: PropTypes.string,
    people: PropTypes.string.isRequired,
    spaceAndMaterials: PropTypes.string.isRequired,
    stepsAltTitle: PropTypes.string,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        time: PropTypes.string,
      })
    ).isRequired,
    stringWith: PropTypes.string,
  }),
  openDrawer: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

CardDrawer.defaultProps = {
  cardData: null,
};

export default CardDrawer;

import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogContent } from '@/components/ui/dialog';

import AboutCard from '../AboutCard/AboutCard';
import LSCard from '../LSCard/LSCard';

function CardModal({ openModal, setOpenModal, cardData }) {
  return (
    <Dialog
      open={openModal}
      onOpenChange={(open) => {
        setOpenModal(open);
      }}
    >
      <DialogContent className="max-w-sm">
        {/* <DialogContent className="max-w-sm max-h-screen overflow-y-scroll"> */}
        {/* If card data is provided, show LS Card. Otherwise show the About Card. */}
        {cardData ? <LSCard data={cardData} /> : <AboutCard />}
      </DialogContent>
    </Dialog>
  );
}

CardModal.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.node.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
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
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

CardModal.defaultProps = {
  cardData: null,
};

export default CardModal;

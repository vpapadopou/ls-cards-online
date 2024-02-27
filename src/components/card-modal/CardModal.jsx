import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'flowbite-react';

import AboutCard from '../about-card/AboutCard';
import LSCard from '../ls-card/LSCard';

/* Use a custom modal theme in order to have a full size modal
   instead of one that uses max-h-[90vh] and shows an ugly
   scrollbar */
const customModalTheme = {
  content: {
    base: 'relative h-full w-full p-4',
    inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-fit',
  },
};

function CardModal({ openModal, setOpenModal, cardData }) {
  return (
    <Modal theme={customModalTheme} size="md" show={openModal} onClose={() => setOpenModal(false)} dismissible popup>
      <Modal.Header />
      {/* If card data is provided, show LS Card. Otherwise show the About Card. */}
      <Modal.Body>{cardData ? <LSCard data={cardData} /> : <AboutCard />}</Modal.Body>
    </Modal>
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

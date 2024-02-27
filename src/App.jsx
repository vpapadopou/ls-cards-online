import { React, useState } from 'react';

import Navigation from './components/navigation/Navigation';

import CardModal from './components/card-modal/CardModal';
import LSCardPreview from './components/ls-card/LSCardPreview';

import deckData from './data';

function App() {
  const [openLSCardModal, setOpenLSCardModal] = useState(false);
  // Selected card data to be shown in the modal
  // Index in deck array: card id - 1
  const [selectedCardData, setSelectedCardData] = useState(deckData[0]);

  const handleAboutCardPreviewClick = () => {
    // Set selected card data to NULL to show the about card
    setSelectedCardData(null);
    setOpenLSCardModal(true);
  };

  const handleLSCardPreviewClick = (cardId) => {
    setSelectedCardData(deckData[cardId - 1]);
    setOpenLSCardModal(true);
  };

  return (
    <>
      {/* Navbar */}
      <Navigation onClick={handleAboutCardPreviewClick} />
      {/* /Navbar */}
      {/* Modal */}
      <CardModal openModal={openLSCardModal} setOpenModal={setOpenLSCardModal} cardData={selectedCardData} />
      {/* /Modal */}
      {/* Card Grid */}
      <div className="flex flex-wrap gap-4 place-content-center items-start py-20 px-4">
        {deckData.map((cardData) => (
          <LSCardPreview key={cardData.id} data={cardData} onClick={handleLSCardPreviewClick} />
        ))}
      </div>
      {/* /Card Grid */}
    </>
  );
}

export default App;

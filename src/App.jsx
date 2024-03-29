import { React, useState } from 'react';

import Navigation from './components/navigation/Navigation';
import Sidebar from './components/navigation/Sidebar';

import CardModal from './components/card-modal/CardModal';
import LSCardPreview from './components/ls-card/LSCardPreview';

import deckData from './data/cards';

function App() {
  const [openLSCardModal, setOpenLSCardModal] = useState(false);
  // Selected card data to be shown in the modal
  // Index in deck array: card id - 1
  const [selectedCardData, setSelectedCardData] = useState(deckData[0]);

  const handleLSCardPreviewClick = (cardId) => {
    setSelectedCardData(deckData[cardId - 1]);
    setOpenLSCardModal(true);
  };

  const handleSidebarClick = () => {
    // TODO
  };

  const handleNavbarClick = (selectedCategory) => {
    if (selectedCategory === 'about') {
      // Set selected card data to NULL to show the about card
      setSelectedCardData(null);
      setOpenLSCardModal(true);
      return;
    }

    handleSidebarClick(selectedCategory);
  };

  return (
    <>
      {/* Modal */}
      <CardModal openModal={openLSCardModal} setOpenModal={setOpenLSCardModal} cardData={selectedCardData} />
      {/* /Modal */}
      {/* Main page */}
      <div className="grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar onClick={handleSidebarClick} />
        {/* /Sidebar */}
        {/* Main panel */}
        <div className="flex flex-col">
          {/* Navigation bar */}
          <Navigation onClick={handleNavbarClick} />
          {/* /Navigation bar */}
          {/* Content */}
          <main className="flex flex-col flex-1 p-4 lg:p-6">
            {/* Title */}
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
            {/* /Title */}
            {/* Card grid */}
            <div className="flex flex-wrap gap-4 place-content-center items-start py-8">
              {deckData.map((cardData) => (
                <LSCardPreview key={cardData.id} data={cardData} onClick={handleLSCardPreviewClick} />
              ))}
            </div>
            {/* /Card grid */}
          </main>
          {/* /Content */}
        </div>
        {/* /Main panel */}
      </div>
      {/* /Main page */}
    </>
  );
}

export default App;

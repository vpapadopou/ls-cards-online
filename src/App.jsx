import { React, useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';

import CardDeck from './components/CardDeck/CardDeck';
import CardModal from './components/CardModal/CardModal';

import deckData from './data/cards';

function App() {
  const [openCardModal, setOpenCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(deckData[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleModalClick = (cardData) => {
    setSelectedCard(cardData);
    setOpenCardModal(true);
  };

  return (
    <div>
      {/* Modal */}
      <CardModal openModal={openCardModal} setOpenModal={setOpenCardModal} cardData={selectedCard} />
      {/* /Modal */}
      {/* Main page */}
      <div className="grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar onCategoryClick={setSelectedCategory} />
        {/* /Sidebar */}
        {/* Main panel */}
        <div className="flex flex-col">
          {/* Navigation bar */}
          <Navigation onCategoryClick={setSelectedCategory} onAboutClick={handleModalClick} />
          {/* /Navigation bar */}
          {/* Content */}
          <main className="flex flex-col flex-1 p-4 lg:p-6">
            <CardDeck cardList={deckData} selectedCategory={selectedCategory} onClick={handleModalClick} />
          </main>
          {/* /Content */}
        </div>
        {/* /Main panel */}
      </div>
      {/* /Main page */}
    </div>
  );
}

export default App;

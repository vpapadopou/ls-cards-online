import { React, useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';

import CardDeck from './components/CardDeck/CardDeck';
import CardModal from './components/CardModal/CardModal';

import deckData from './data/cards';

function App() {
  const [openCardModal, setOpenCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(deckData[0]);
  const [selectedCategory, setSelectedCategory] = useState(0);

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
      <div className="grid w-full h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar onCategoryClick={setSelectedCategory} />
        {/* /Sidebar */}
        {/* Main panel */}
        <div>
          {/* Navigation bar */}
          <Navigation onCategoryClick={setSelectedCategory} onAboutClick={handleModalClick} />
          {/* /Navigation bar */}
          {/* Content (height is screen minus header) */}
          <main className="h-[calc(100vh-60px)]">
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

import { React, useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';

import CardDeck from './components/CardDeck/CardDeck';
import CardDrawer from './components/CardDrawer/CardDrawer';

function App() {
  const [openCardDrawer, setOpenCardDrawer] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // TODO: Obsolete and to be removed
  const handleDrawerClick = (cardData) => {
    setSelectedCard(cardData);
    setOpenCardDrawer(true);
  };

  return (
    <div>
      {/* Drawer */}
      <CardDrawer openDrawer={openCardDrawer} setOpenDrawer={setOpenCardDrawer} cardData={selectedCard} />
      {/* /Drawer */}
      {/* Main page */}
      <div className="grid w-full h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar />
        {/* /Sidebar */}
        {/* Main panel */}
        <div>
          {/* Navigation bar */}
          <Navigation onAboutClick={handleDrawerClick} />
          {/* /Navigation bar */}
          {/* Content (height is screen minus header) */}
          <main className="h-[calc(100vh-60px)]">
            <CardDeck onCardClick={handleDrawerClick} />
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

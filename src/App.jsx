import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';

import CardDeck from './components/CardDeck/CardDeck';
import CardDrawer from './components/CardDrawer/CardDrawer';

import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [openCardDrawer, setOpenCardDrawer] = useState(false);

  return (
    <div>
      {/* Drawer */}
      <CardDrawer openDrawer={openCardDrawer} setOpenDrawer={setOpenCardDrawer} />
      {/* /Drawer */}
      {/* Main page */}
      <div className="grid w-full h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar />
        {/* /Sidebar */}
        {/* Main panel */}
        <div>
          {/* Navigation bar */}
          <Navigation />
          {/* /Navigation bar */}
          {/* Content (height is screen minus header) */}
          <main className="h-[calc(100vh-60px)]">
            <Routes>
              <Route path="/" element={<CardDeck onCardClick={() => setOpenCardDrawer(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
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

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CardDrawer from './components/CardDrawer/CardDrawer';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';

import { useCardStore } from './hooks/use-card-store';

import About from './pages/About';
import Cards from './pages/Cards';
import NotFound from './pages/NotFound';

import { ThemeProvider } from './providers/theme-provider';

function App() {
  const openCardDrawer = useCardStore((state) => state.openCardDrawer);
  const setOpenCardDrawer = useCardStore((state) => state.setOpenCardDrawer);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="grid w-full h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div>
          <Navigation />
          {/* Main content (height is screen minus header) */}
          <main className="h-[calc(100vh-60px)]">
            {/* Card Drawer */}
            <CardDrawer openDrawer={openCardDrawer} setOpenDrawer={setOpenCardDrawer} />
            {/* /Card Drawer */}
            <Routes>
              <Route path="/" element={<Cards />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          {/* /Main content */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

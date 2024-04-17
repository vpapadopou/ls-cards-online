import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';

import About from './pages/About';
import Cards from './pages/Cards';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="grid w-full h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div>
        <Navigation />
        {/* Main content (height is screen minus header) */}
        <main className="h-[calc(100vh-60px)]">
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        {/* /Main content */}
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Atelier from './pages/Atelier';
import Catalogue from './pages/Catalogue';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import Piece from './pages/Piece';
import { initGA, trackPageView } from './utils/analytics';

// Component to handle page view tracking
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when the location changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => {
  // Initialize Google Analytics when the app loads
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <PageViewTracker />
      <Routes>
        <Route path={`/`} element={<Atelier />} />
        <Route path={`/galerie`} element={<Catalogue />} />
        <Route path={`/collections`} element={<Collections />} />
        <Route path={`/collection/:name`} element={<Collections />} />
        <Route path={`/piece/:id`} element={<Piece />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/mentions`} element={<Mentions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

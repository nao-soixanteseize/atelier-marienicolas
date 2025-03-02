import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Atelier from './pages/Atelier';
import Catalogue from './pages/Catalogue';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import Piece from './pages/Piece';

const App = () => {
  return (
    <BrowserRouter>
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

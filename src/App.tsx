import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Atelier from './pages/Atelier';
import Catalogue from './pages/Catalogue';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Atelier />} />
        <Route path={`/catalogue`} element={<Catalogue />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/mentions`} element={<Mentions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

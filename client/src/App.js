import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './componentes/AppHeader';
import Resume from './pages/Resume';
import CvOnline from './pages/CvOnline';
import Roadmap from './pages/Roadmap';

import { LangProvider, langContext } from './context/LangContext'; // Importa el contexto

function AppContent() {
  const { establecerLenguaje } = useContext(langContext); // Usa el contexto para cambiar el idioma

  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cvonline" element={<CvOnline />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}

export default App;

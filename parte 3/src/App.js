import React from 'react';
import Menu from './components/Menu';
import Grupos from './components/Grupos';
import Cadastro from './components/Cadastro';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


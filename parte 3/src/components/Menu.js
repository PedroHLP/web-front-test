import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/grupos">Grupos</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

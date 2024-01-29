import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return <div className="navbar">
      <nav className='nav-items'>  
        <Link className='nav-items' to='/'>Accueil</Link>
       
      </nav>
    </div>
}
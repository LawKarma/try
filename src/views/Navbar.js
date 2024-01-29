import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export function NavBar() {
  return <div className="navbar">
      <nav className='navBody'>  
        <Link className='navItems' to='/'>Accueil</Link>
        <Link className='navItems' to='/about'>A propos</Link>
      </nav>
    </div>
}
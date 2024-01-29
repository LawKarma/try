import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export function NavBar() {
  return <div className="navbar">
      <nav className='navBody'>  
        <Link className='nav-items' to='/'>Accueil</Link>
      </nav>
    </div>
}
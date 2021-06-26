import React, { useState } from 'react';
import { Button } from './Button';
import {Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    
    <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>LOGO</Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link to='/Explore' className='nav-links' onClick={closeMobileMenu}>
              Explore
            </Link>
          </li>
      
          <li className='nav-item'>
            <Link to='/Newnote' className='nav-links' onClick={closeMobileMenu}>New Notes</Link>
          </li>
                
          <li>
            <Link to='#' className='nav-links-mobile' onClick={closeMobileMenu}> Search</Link>
          </li>
          <li>
            <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu} >Sign In</Link>
          </li>

          <li>
            <Link to='/sign-Up' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up</Link>
          </li>

        </ul>
        <Button />
      </nav>
    </>
  )
}

export default Navbar;
